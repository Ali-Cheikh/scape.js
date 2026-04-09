// Initialize CodeMirror when the page loads
document.addEventListener('DOMContentLoaded', () => {
  // Initialize CodeMirror
  const codeEditor = CodeMirror.fromTextArea(document.getElementById('codeEditor'), {
    mode: 'javascript',
    lineNumbers: true,
    theme: 'monokai',
    autoCloseBrackets: true,
    matchBrackets: true,
    indentUnit: 2,
    tabSize: 2,
    indentWithTabs: false,
  });

  // Get the update button
  const updateBtn = document.getElementById('updateBtn');

  // Update background when button is clicked
  updateBtn.addEventListener('click', () => {
    try {
      // Evaluate the code in the editor
      eval(codeEditor.getValue());

      // Update the background if ScapeJs is loaded
      if (typeof ScapeJs !== 'undefined') {
        ScapeJs.destroy(); // Clear old background
        ScapeJs.updateConfig(window.ScapeConfig || {});
      }

      // Change button text to show success
      updateBtn.textContent = 'Background Updated!';
      updateBtn.classList.remove('bg-blue-500', 'hover:bg-blue-600');
      updateBtn.classList.add('bg-green-500', 'hover:bg-green-600');

      // Revert button text after 2 seconds
      setTimeout(() => {
        updateBtn.textContent = 'Update Background';
        updateBtn.classList.remove('bg-green-500', 'hover:bg-green-600');
        updateBtn.classList.add('bg-blue-500', 'hover:bg-blue-600');
      }, 2000);
    } catch (error) {
      // Show error in button
      updateBtn.textContent = 'Error: ' + error.message;
      updateBtn.classList.remove('bg-blue-500', 'hover:bg-blue-600');
      updateBtn.classList.add('bg-red-500', 'hover:bg-red-600');

      // Revert button text after 3 seconds
      setTimeout(() => {
        updateBtn.textContent = 'Update Background';
        updateBtn.classList.remove('bg-red-500', 'hover:bg-red-600');
        updateBtn.classList.add('bg-blue-500', 'hover:bg-blue-600');
      }, 3000);

      console.error('Error updating background:', error);
    }
  });

  // Allow Enter+Ctrl to update (Cmd+Enter on Mac)
  codeEditor.setOption('extraKeys', {
    'Ctrl-Enter': () => updateBtn.click(),
    'Cmd-Enter': () => updateBtn.click(),
  });
});
  