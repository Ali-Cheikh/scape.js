    // Initialize CodeMirror
    const codeEditor = CodeMirror.fromTextArea(document.getElementById('codeEditor'), {
      mode: 'javascript',
      lineNumbers: true,
      theme: 'monokai',
      autoCloseBrackets: true,
      matchBrackets: true,
      extraKeys: { 'Ctrl-Space': 'autocomplete' },
    });
    const addCopyButton = () => {
      // Get the code editor reference (assuming CodeMirror or another editor is being used)
      const codeEditor = document.querySelector('.CodeMirror').CodeMirror;

      let code = codeEditor.getValue();
      codeEditor.on('change', () => {
        code = codeEditor.getValue();
      });
    
      // Create the copy button
      const copyButton = document.createElement('button');
      copyButton.textContent = 'Copy Code';
      copyButton.className = 'copy-button w-full bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50';
    
      // Add copy functionality to the button
      copyButton.onclick = () => {
        // Copy the code to the clipboard
        navigator.clipboard.writeText(`<script>\n${code}\n</script>\n<script src="https://scape-js.vercel.app/scape.js"></script>`);
    
        // Change the button text to 'Copied!' and revert after 2 seconds
        copyButton.textContent = 'Copied!';
        setTimeout(() => {
          copyButton.textContent = 'Copy Code';
        }, 2000);
      };
    
      // Insert the button before the code editor
      document.querySelector('.CodeMirror').parentNode.insertBefore(copyButton, document.querySelector('.CodeMirror'));
    };
    
    // Initialize the copy button
    addCopyButton();
    
  function updateBackground() {
    try {
      // Evaluate the code in the editor
      eval(codeEditor.getValue());

      if (typeof ScapeJs !== 'undefined') {
        ScapeJs.updateConfig(window.ScapeConfig);
      }
    } catch (error) {
      console.error('Error in configuration:', error);
    }
  };

  codeEditor.on('change', updateBackground);

  // Initial update
  updateBackground();
  