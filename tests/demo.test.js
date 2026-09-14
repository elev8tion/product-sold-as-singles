import {test} from 'node:test';
import assert from 'node:assert/strict';
import {PRODUCTS,TIERS,retailTarget,initialState,recommended,eligible,available,setPull,setDraftQty,autoFill,value,pack,sendTransfer,validState,totalQty} from '../demo.js';

test('30% above sale is retail ×1.30, not a 30% discount',()=>{
  assert.deepEqual(TIERS.map(retailTarget),[52000,78000,117000,182000]);
});
test('seven-day cover minus on-hand, capped by batch, only exact fast matches',()=>{
  assert.equal(recommended(PRODUCTS[0]),10);
  assert.equal(recommended(PRODUCTS[4]),6);
  assert.equal(recommended(PRODUCTS[14]),0);
  assert.equal(recommended(PRODUCTS[6]),0);
  assert.ok(PRODUCTS.every(p=>recommended(p)<=p.qty));
});
test('all tiers autofill to target without allocating held or reserved inventory',()=>{
  for(const tier of TIERS){
    const s=initialState();s.draft.tier=tier;autoFill(s);
    assert.equal(value(s.draft.items),retailTarget(tier));
    for(const [id,qty] of Object.entries(s.draft.items)){
      assert.ok(qty<=available(s,id));assert.ok(eligible(PRODUCTS.find(p=>p.id===id)));
    }
  }
});
test('packing consecutive pallets conserves all stock and never double-allocates',()=>{
  const s=initialState();
  for(const tier of TIERS){s.draft.tier=tier;autoFill(s);pack(s);}
  assert.equal(s.pallets.length,4);assert.deepEqual(s.draft.items,{});
  for(const p of PRODUCTS) assert.equal(available(s,p.id)+s.pulls[p.id]+s.pallets.reduce((n,x)=>n+(x.items[p.id]||0),0),p.qty);
  assert.ok(validState(s));
});
test('manual pull validates quantities and clamps a conflicting draft',()=>{
  const s=initialState();setDraftQty(s,'NIN-101',4);setPull(s,'NIN-101',14);
  assert.equal(s.draft.items['NIN-101'],0);
  for(const qty of [-1,1.5,15,NaN]) assert.throws(()=>setPull(s,'NIN-101',qty));
  assert.throws(()=>setPull(s,'UNK-01',1));assert.throws(()=>setPull(s,'BEL-15',1));
});
test('draft rejects overstock and held products; underfilled pallet cannot pack',()=>{
  const s=initialState();assert.throws(()=>pack(s));
  assert.throws(()=>setDraftQty(s,'NIN-101',5));assert.throws(()=>setDraftQty(s,'DY-V8',1));
});
test('sending a transfer is simulated, locks pulls, and cannot be repeated',()=>{
  const s=initialState();const before=totalQty(s.pulls);const transfer=sendTransfer(s);
  assert.equal(totalQty(transfer.items),before);assert.equal(transfer.status,'Sent (simulated)');
  assert.throws(()=>sendTransfer(s));assert.throws(()=>setPull(s,'NIN-101',0));
  assert.ok(validState(s));
});
test('exhaustion reports shortage without changing the draft',()=>{
  const s=initialState();
  let built=0;
  while(true){try{autoFill(s);pack(s);built++;}catch(e){assert.match(e.message,/Not enough|No unallocated/);break;}}
  assert.ok(built>0);assert.ok(validState(s));assert.deepEqual(s.draft.items,{});
});
test('restored data rejects malformed, overallocated and unsafe states',()=>{
  assert.ok(validState(initialState()));assert.equal(validState(null),false);
  const s=initialState();s.pulls['NIN-101']=100;assert.equal(validState(s),false);
  s.pulls['NIN-101']=0;s.draft.items['UNK-01']=1;assert.equal(validState(s),false);
});
