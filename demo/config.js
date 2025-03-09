    // Initialize CodeMirror
    const codeEditor = CodeMirror.fromTextArea(document.getElementById('codeEditor'), {
      mode: 'javascript',
      lineNumbers: true,
      theme: 'monokai',
      autoCloseBrackets: true,
      matchBrackets: true,
      extraKeys: { 'Ctrl-Space': 'autocomplete' },
    });

    // Function to update the background and add copy button
    const addCopyButton = () => {
      const copyButton = document.createElement('button');
        copyButton.textContent = 'Copy Code';
        copyButton.className = 'copy-button w-full bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50';
        copyButton.onclick = () => {
          navigator.clipboard.writeText(codeEditor.getValue());
          copyButton.textContent = 'Copied!';    setTimeout(() => {
          copyButton.textContent = 'Copy Code';
        }, 2000);
      };
      document.querySelector('.CodeMirror').parentNode.insertBefore(copyButton, document.querySelector('.CodeMirror'));
    };
    addCopyButton();
   function updateBackground() {
      try {
        // Evaluate the code in the editor
        eval(codeEditor.getValue());

        // Update the background if ScapeJs is available
        if (typeof ScapeJs !== 'undefined') {
          ScapeJs.updateConfig(window.ScapeConfig);
        }
      } catch (error) {
        console.error('Error in configuration:', error);
      }
    }

    // Listen for changes in the editor
    codeEditor.on('change', updateBackground);

    // Initial update
    updateBackground();