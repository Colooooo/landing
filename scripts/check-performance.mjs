import { readdir, readFile, stat } from 'node:fs/promises';
import { gzipSync } from 'node:zlib';

const dir = 'dist/assets';
const names = await readdir(dir);
const assets = await Promise.all(names.map(async name => {
  const bytes = await readFile(`${dir}/${name}`);
  return { name, bytes: bytes.length, gzip: gzipSync(bytes).length };
}));
const sum = (extension, key) => assets.filter(asset => asset.name.endsWith(extension)).reduce((total, asset) => total + asset[key], 0);
const checks = [
  { name: 'JavaScript total (gzip)', bytes: sum('.js', 'gzip'), limit: 120000 },
  { name: 'CSS total (gzip)', bytes: sum('.css', 'gzip'), limit: 10000 },
  { name: 'Favicon', bytes: (await stat('dist/favicon.png')).size, limit: 2000 },
  ...assets.filter(asset => /^(cafe|barberia|ferreteria|tarjeta-jl)-(640|1200)-/.test(asset.name)).map(asset => ({ name: asset.name, bytes: asset.bytes, limit: asset.name.includes('-640-') ? 30000 : 70000 })),
  ...assets.filter(asset => /^logo-/.test(asset.name)).map(asset => ({ name: asset.name, bytes: asset.bytes, limit: 10000 })),
];
console.table(checks.map(check => ({ asset: check.name, KB: +(check.bytes / 1000).toFixed(2), budgetKB: check.limit / 1000, status: check.bytes <= check.limit ? 'OK' : 'EXCEEDED' })));
if (checks.some(check => check.bytes > check.limit)) process.exitCode = 1;
