const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'index.html');
if (fs.existsSync(indexPath)) {
  let content = fs.readFileSync(indexPath, 'utf8');
  
  // Replace the modal alert trigger with a direct URL redirect
  const oldFunc = `    function launchProctorEngine() {
      showCustomModal('Ezrelyn Proctor AI', 'Launching Ezrelyn Proctor Engine v3...');
    }`;
    
  const newFunc = `    function launchProctorEngine() {
      window.location.href = 'https://ezrelyn-ai-proctor-system.onrender.com/';
    }`;

  if (content.includes(oldFunc)) {
    content = content.replace(oldFunc, newFunc);
    fs.writeFileSync(indexPath, content);
    console.log('✅ Successfully updated launchProctorEngine() to redirect to Render!');
  } else {
    console.log('⚠️ Could not find exact function match, checking alternative patterns...');
  }
}
