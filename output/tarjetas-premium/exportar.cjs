const fs=require('fs');
const path=require('path');
const sharp=require('C:/Users/Juan/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const root='C:/Users/Juan/.codex/generated_images/01a0b25a-1782-7b93-a8f3-e8b8dd9e63c1';
const cards=[
 ['cafe-aurora','exec-ecf40af2-af5a-441f-b8db-ae9224d85a0f.png',1193,273,326],
 ['king-barber','exec-5d805a03-c8ab-48f1-9665-c7a23af808d9.png',1201,294,306],
 ['el-galpon','exec-a6fdea72-2bf3-4fa1-b22d-0e0207903880.png',1185,286,323]
];
(async()=>{
 const qrs=JSON.parse(fs.readFileSync(path.join(__dirname,'qr-matrices.json')));
 for(let i=0;i<cards.length;i++){
  const [name,file,x,y,size]=cards[i];
  const m=qrs[i].modules,n=m.length+8;
  let shapes='';
  m.forEach((row,r)=>row.forEach((v,c)=>{if(v)shapes+=`<rect x="${c+4}" y="${r+4}" width="1" height="1"/>`;}));
  const svg=Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${n} ${n}"><rect width="${n}" height="${n}" fill="white"/><g fill="black" shape-rendering="crispEdges">${shapes}</g></svg>`);
  const src=path.join(root,file);
  fs.copyFileSync(src,path.join(__dirname,name+'-original.png'));
  const composed=await sharp(src).composite([{input:svg,left:x,top:y}]).png().toBuffer();
  const dest=path.join(__dirname,name+'-9x5cm.jpg');
  await sharp(composed).resize(1800,1000,{fit:'fill'}).withMetadata({density:508}).jpeg({quality:100,chromaSubsampling:'4:4:4'}).toFile(dest);
  const meta=await sharp(dest).metadata();
  console.log(name,meta.width,meta.height,meta.density);
 }
})();
