// Copy-to-Clipboard Functionality
function copyText(button) {
  const exampleBox = button.previousElementSibling;
  const textElement = exampleBox.querySelector('.example-text');
  const text = textElement.innerText;

  // Copy to clipboard
  navigator.clipboard.writeText(text).then(() => {
    // Show feedback
    const originalText = button.querySelector('.copy-text').innerText;
    button.classList.add('copied');
    
    // Reset after 2 seconds
    setTimeout(() => {
      button.classList.remove('copied');
    }, 2000);
  }).catch(err => {
    alert('Fehler beim Kopieren: ' + err);
  });
}

// Log page load
console.log('Examples page loaded');
