const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, 'icons');
const images = ['brian.jpg', 'ezra.jpg', 'nti-logo.jpg', 'sarah.jpg'];
const output = {};

images.forEach(img => {
  const p = path.join(iconsDir, img);
  if (fs.existsSync(p)) {
    const b64 = fs.readFileSync(p).toString('base64');
    output[img] = `data:image/jpeg;base64,${b64}`;
  }
});

fs.writeFileSync('b64-store.json', JSON.stringify(output, null, 2));
console.log('✅ Base64 store generated for local icons!');
