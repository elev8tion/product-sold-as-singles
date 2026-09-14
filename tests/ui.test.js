import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {Window} from 'happy-dom';

// DOM-level integration, not a substitute for live-browser visual verification.
test('demo UI: filters, editable pull, simulated dispatch, all tiers, manifests, exports and reset',async()=>{
  const window=new Window({url:'http://localhost:41007/'});
  for(const key of ['window','document','location','localStorage']) globalThis[key]=key==='window'?window:window[key];
  window.document.write(await readFile(new URL('../index.html',import.meta.url),'utf8'));
  const originalTimeout=globalThis.setTimeout,originalClear=globalThis.clearTimeout;
  globalThis.setTimeout=window.setTimeout.bind(window);globalThis.clearTimeout=window.clearTimeout.bind(window);
  let exported;
  const originalCreate=URL.createObjectURL,originalRevoke=URL.revokeObjectURL;
  URL.createObjectURL=blob=>{exported=blob;return 'blob:demo';};URL.revokeObjectURL=()=>{};
  const document=window.document;
  const press=selector=>{const el=document.querySelector(selector);assert.ok(el,selector);assert.ok(!el.disabled,selector+' enabled');el.click();};
  const route=name=>{window.location.hash=name;window.dispatchEvent(new window.HashChangeEvent('hashchange'));};
  const change=(selector,val)=>{const input=document.querySelector(selector);assert.ok(input,selector);input.value=String(val);input.dispatchEvent(new window.Event('change',{bubbles:true}));};
  try {
    await import('../app.js?ui-test');
    assert.match(document.querySelector('main').textContent,/Good inventory/);
    assert.equal(document.querySelectorAll('.tier-card').length,4);
    route('analysis');
    const search=document.querySelector('#search');search.value='Ninja';search.dispatchEvent(new window.Event('input',{bubbles:true}));
    assert.equal([...document.querySelectorAll('tr[data-search]')].filter(x=>!x.hidden).length,1);
    search.value='missing';search.dispatchEvent(new window.Event('input',{bubbles:true}));assert.equal(document.querySelector('.empty-filter').hidden,false);
    search.value='';search.dispatchEvent(new window.Event('input',{bubbles:true}));change('#filter','held');
    assert.equal([...document.querySelectorAll('tr[data-search]')].filter(x=>!x.hidden).length,3);
    press('[data-action="product"][data-id="UNK-01"]');assert.ok(document.querySelector('dialog').open);assert.match(document.querySelector('dialog').textContent,/Price unknown/);press('[data-action="close"]');
    route('singles');change('[data-pull="NIN-101"]',8);
    assert.equal(JSON.parse(localStorage.getItem('scout-routing-demo-v1')).pulls['NIN-101'],8);
    change('[data-pull="NIN-101"]',99);assert.equal(document.querySelector('[data-pull="NIN-101"]').value,'8');assert.match(document.querySelector('#toast').textContent,/whole quantity/);
    press('[data-action="confirm-transfer"]');press('[data-action="send-transfer"]');
    assert.ok(document.querySelector('[data-pull="NIN-101"]').disabled);
    assert.ok(JSON.parse(localStorage.getItem('scout-routing-demo-v1')).transfer);
    route('pallets');assert.ok(document.querySelector('[data-action="confirm-pack"]').disabled);
    for(const [tier,target] of [[400,'$520'],[600,'$780'],[900,'$1,170'],[1400,'$1,820']]){
      press(`[data-action="switch-tier"][data-tier="${tier}"]`);
      press('[data-action="autofill"]');assert.equal(document.querySelector('.retail-total').textContent,target);
      press('[data-action="confirm-pack"]');press('[data-action="pack"]');
    }
    const saved=JSON.parse(localStorage.getItem('scout-routing-demo-v1'));assert.equal(saved.pallets.length,4);
    route('dispatch');assert.equal(document.querySelectorAll('.packed-card').length,4);assert.match(document.querySelector('main').textContent,/TRF-001/);
    press('[data-action="pallet-manifest"][data-id="PLT-004"]');assert.match(document.querySelector('dialog').textContent,/\$1,820/);
    press('[data-action="export-pallet"]');assert.ok(exported);assert.match(await exported.text(),/DEMO ONLY/);assert.match(await exported.text(),/PLT-004/);press('[data-action="close"]');
    press('[data-action="export-all"]');assert.match(await exported.text(),/Available for pallets/);
    const persisted=localStorage.getItem('scout-routing-demo-v1');assert.ok(persisted.includes('PLT-004'));
    press('#reset-demo');press('[data-action="reset"]');
    const reset=JSON.parse(localStorage.getItem('scout-routing-demo-v1'));assert.equal(reset.pallets.length,0);assert.equal(reset.transfer,null);assert.equal(reset.pulls['NIN-101'],10);
  } finally {
    URL.createObjectURL=originalCreate;URL.revokeObjectURL=originalRevoke;
    globalThis.setTimeout=originalTimeout;globalThis.clearTimeout=originalClear;
    await window.happyDOM.close();
  }
});
