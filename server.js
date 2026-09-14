import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
const files=new Map([
  ['/', ['index.html','text/html']],['/index.html',['index.html','text/html']],
  ['/styles.css',['styles.css','text/css']],['/app.js',['app.js','text/javascript']],['/demo.js',['demo.js','text/javascript']],
  ['/assets/space-grotesk.woff2',['assets/space-grotesk.woff2','font/woff2']],
  ['/assets/dm-mono.woff2',['assets/dm-mono.woff2','font/woff2']]
]);
const port=Number(process.env.PORT)||41007;
http.createServer(async(req,res)=>{
  const entry=files.get(new URL(req.url,'http://localhost').pathname);
  if(!['GET','HEAD'].includes(req.method)){res.writeHead(405);return res.end();}
  if(!entry){res.writeHead(404);return res.end('Not found');}
  try{const body=await readFile(fileURLToPath(new URL(entry[0],import.meta.url)));res.writeHead(200,{'Content-Type':entry[1],'Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'});res.end(req.method==='HEAD'?undefined:body);}
  catch{res.writeHead(500);res.end('Unable to load demo asset');}
}).listen(port,'127.0.0.1',()=>console.log(`Scout routing demo: http://127.0.0.1:${port}`));
