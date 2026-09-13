import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');
const IMG_DIR = path.join(ROOT, 'assets', 'img');

async function generateIcons() {
  const srcLogo = path.join(IMG_DIR, 'logo.png');
  if (!fs.existsSync(srcLogo)) {
    console.error('Source logo not found at', srcLogo);
    return;
  }

  const bgNavy = { r: 21, g: 32, b: 79, alpha: 1 }; // #15204f

  // 192x192 standard icon (transparent or subtle fit)
  await sharp(srcLogo)
    .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(IMG_DIR, 'icon-192.png'));

  // 512x512 standard icon
  await sharp(srcLogo)
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(IMG_DIR, 'icon-512.png'));

  // 180x180 Apple touch icon with brand navy background
  const appleLogo = await sharp(srcLogo)
    .resize(140, 140, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  await sharp({
    create: {
      width: 180,
      height: 180,
      channels: 4,
      background: bgNavy,
    }
  })
    .composite([{ input: appleLogo, gravity: 'center' }])
    .png()
    .toFile(path.join(IMG_DIR, 'apple-touch-icon.png'));

  // Maskable 192x192 (safe zone: icon inside 70% of canvas)
  const maskableLogo192 = await sharp(srcLogo)
    .resize(134, 134, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  await sharp({
    create: {
      width: 192,
      height: 192,
      channels: 4,
      background: bgNavy,
    }
  })
    .composite([{ input: maskableLogo192, gravity: 'center' }])
    .png()
    .toFile(path.join(IMG_DIR, 'icon-maskable-192.png'));

  // Maskable 512x512 (safe zone: icon inside 70% of canvas)
  const maskableLogo512 = await sharp(srcLogo)
    .resize(358, 358, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: bgNavy,
    }
  })
    .composite([{ input: maskableLogo512, gravity: 'center' }])
    .png()
    .toFile(path.join(IMG_DIR, 'icon-maskable-512.png'));

  console.log('Successfully generated all PWA icons (192, 512, maskable, apple-touch-icon).');
}

generateIcons().catch(err => {
  console.error('Error generating icons:', err);
  process.exit(1);
});
