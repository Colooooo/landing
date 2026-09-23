import sharp from "sharp";
import { mkdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const assetDir = path.join(root, "src/assets");
const outputDir = path.join(assetDir, "optimized");
await mkdir(outputDir, { recursive: true });
await mkdir(path.join(root, "output/performance"), { recursive: true });
const results = [];
const jobs = [
  ["cafeauroradesktop.jpg", "cafe", [640, 1200]],
  ["barberia.jpg", "barberia", [640, 1200]],
  ["ferreteria.jpg", "ferreteria", [640, 1200]],
  ["tarjetas/tarjetajlan.jpg", "tarjeta-jl", [640, 1200]],
];
for (const [source, name, widths] of jobs) {
  const input = path.join(assetDir, source);
  for (const width of widths) {
    const output = path.join(outputDir, `${name}-${width}.webp`);
    const info = await sharp(input)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 84, effort: 6 })
      .toFile(output);
    results.push({
      source,
      file: path.relative(root, output),
      originalBytes: (await stat(input)).size,
      bytes: info.size,
      width: info.width,
      height: info.height,
    });
  }
}
const logoInfo = await sharp(path.join(assetDir, "logotexto.png"))
  .resize({ width: 360, withoutEnlargement: true })
  .webp({ lossless: true })
  .toFile(path.join(outputDir, "logo.webp"));
results.push({
  source: "logotexto.png",
  originalBytes: (await stat(path.join(assetDir, "logotexto.png"))).size,
  bytes: logoInfo.size,
});
const faviconInfo = await sharp(path.join(assetDir, "logoblanco.png"))
  .resize(48, 48, { fit: "contain" })
  .png()
  .toFile(path.join(root, "public/favicon.png"));
results.push({
  source: "logoblanco.png",
  originalBytes: (await stat(path.join(assetDir, "logoblanco.png"))).size,
  bytes: faviconInfo.size,
});
await writeFile(
  path.join(root, "output/performance/images.json"),
  JSON.stringify(results, null, 2),
);
console.table(
  results.map(({ source, file, originalBytes, bytes }) => ({
    source,
    output: file ?? source,
    beforeKB: +(originalBytes / 1000).toFixed(1),
    afterKB: +(bytes / 1000).toFixed(1),
  })),
);
