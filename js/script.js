
// Configuration data - Single source of truth
const configData = {
  apiMethods: [
    { option: "refresh", description: "Refresh the background." },
    { option: "updateConfig", description: "Update the configuration." },
    { option: "destroy", description: "Destroy all elements." },
    { option: "setImage", description: "Set a new image URL on command ('path/to/image')." },
    { option: "setShape", description: "Set a new shape on command ('shape Name')." },
    { option: "pause", description: "Pause animations." },
    { option: "resume", description: "Resume animations." },
    { option: "getConfig", description: "Get the current configuration." },
  ],
  shapeConfig: [
    { option: "type", description: "Set to 'shape'." },
    { option: "shape", description: "Choose from circle, hexagon, heart, diamond, star, triangle, pentagon, fly, flower, spiral, splash, tesseract, boom, wave, clover, ripple, shell, fractal." },
    { option: "count", description: "Number of elements to generate." },
    { option: "size", description: "Size of each element in pixels." },
    { option: "spacing", description: "Spacing between elements." },
    { option: "minDistance", description: "Minimum distance between elements." },
    { option: "animationDuration", description: "Animation duration (e.g., '3s')." },
    { option: "floatDistance", description: "Floating distance for elements." },
    { option: "rotationRange", description: "Maximum rotation in degrees." },
    { option: "opacity", description: "Base opacity for elements." },
    { option: "fillColor", description: "Fill color for shapes (CSS color value)." },
    { option: "strokeColor", description: "Stroke color for shapes (CSS color value)." },
    { option: "strokeWidth", description: "Stroke width for shapes in pixels." },
  ],
  imageConfig: [
    { option: "type", description: "Set to 'image'." },
    { option: "imageUrl", description: "URL for the image." },
    { option: "count", description: "Number of elements to generate." },
    { option: "size", description: "Size of each element in pixels." },
    { option: "spacing", description: "Spacing between elements." },
    { option: "minDistance", description: "Minimum distance between elements." },
    { option: "animationDuration", description: "Animation duration (e.g., '3s')." },
    { option: "floatDistance", description: "Floating distance for elements." },
    { option: "rotationRange", description: "Maximum rotation in degrees." },
    { option: "opacity", description: "Base opacity for elements." },
  ],
  defaultConfig: { 
    type: "shape",
    shape: "heart",
    count: 30,
    size: 50,
    spacing: 200,
    minDistance: 150,
    animationDuration: "3s",
    floatDistance: 30,
    rotationRange: 360,
    hoverScale: 1.1,
    opacity: 0.8,
    fillColor: "hsla(200, 90%, 60%, 0.8)",
    strokeColor: "rgba(255, 255, 255, 0.5)",
    strokeWidth: 2,
    onClick: null,
    onHover: null,
  }
};

// Modern table generator with responsive design
function generateResponsiveTable(data, title) {
  const table = document.createElement('div');
  table.className = 'mb-8 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 shadow-2xl shadow-slate-950/30';
  
  table.innerHTML = `
    <div class="overflow-x-auto">
      <table class="w-full text-left">
        <thead class="bg-slate-950/80 text-slate-200">
          <tr>
            <th class="px-6 py-4 text-sm font-semibold uppercase tracking-wider">Option</th>
            <th class="px-6 py-4 text-sm font-semibold uppercase tracking-wider">Description</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-800 text-slate-300">
          ${data.map(item => `
            <tr class="transition-colors hover:bg-slate-800/60">
              <td class="px-6 py-4 font-mono text-sky-300">${item.option}</td>
              <td class="px-6 py-4">${item.description}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
    <div class="border-t border-slate-800 bg-slate-950/70 px-6 py-3 text-sm text-slate-400">
      ${title} Configuration Options
    </div>
  `;
  
  return table;
}

// Initialize documentation tables
function initDocumentationTables() {
  try {
    const container = document.createElement('div');
    container.className = 'max-w-6xl mx-auto px-4 space-y-8';
    
    // Generate tables with error checking
    const tables = [
      { data: configData.apiMethods, title: 'API Methods' },
      { data: configData.shapeConfig, title: 'Shape' },
      { data: configData.imageConfig, title: 'Image' }
    ].map(({ data, title }) => {
      if (!Array.isArray(data)) {
        console.error(`Invalid data for ${title} table`);
        return null;
      }
      return generateResponsiveTable(data, title);
    }).filter(Boolean);
    
    // Clear and append tables
    container.innerHTML = '';
    tables.forEach(table => container.appendChild(table));
    
    const section = document.createElement('section');
    section.id = 'configuration-section';
    section.className = 'py-16 fade-in';
    section.innerHTML = '<h2 class="text-4xl font-bold mb-12 text-center">Configuration Reference</h2>';
    section.appendChild(container);
    
    const existingSection = document.querySelector('#configuration-section');
    if (existingSection) {
      existingSection.replaceWith(section);
    }
  } catch (error) {
    console.error('Error initializing tables:', error);
  }
}

// Setup animations with intersection observer
function setupAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        requestAnimationFrame(() => {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('fade-out');
        });
      }
    });
  }, { 
    threshold: 0.1,
    rootMargin: '50px'
  });

  fadeElements.forEach(el => {
    el.classList.add('opacity-0', 'translate-y-6', 'transition-all', 'duration-500', 'ease-out');
    observer.observe(el);
  });

  return () => observer.disconnect();
}

// Setup code block copy functionality
function setupCodeBlockCopy() {
  document.querySelectorAll('pre').forEach(pre => {
    const codeBlock = pre.querySelector('code');
    if (!codeBlock) return;
    
    pre.classList.add('group');
    let button = pre.querySelector('button.copy-btn');
    if (!button) {
      button = document.createElement('button');
      button.textContent = 'Copy';
      pre.appendChild(button);
    }

    button.className = 'copy-btn absolute right-2 top-2 rounded-md bg-slate-700 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 hover:bg-slate-600';
    
    let timeout;
    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(codeBlock.textContent.trim());
        button.textContent = 'Copied!';
        clearTimeout(timeout);
        timeout = setTimeout(() => button.textContent = 'Copy', 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
        button.textContent = 'Error!';
        timeout = setTimeout(() => button.textContent = 'Copy', 2000);
      }
    });
    
    pre.style.position = 'relative';
    pre.appendChild(button);
  });
}

function setupLlmPromptHelper() {
  const llmButtons = document.querySelectorAll('#llmButtons [data-llm]');
  const output = document.getElementById('llmPromptOutput');
  const copyBtn = document.getElementById('copyLlmPrompt');
  if (!llmButtons.length || !output || !copyBtn) return;

  const basePrompt =
`Explain in {LLM} how to use Scape.js as the best background styling tool for modern web pages.

Include:
1. A short overview of why it is useful
2. A beginner setup snippet with window.ScapeConfig
3. A shape example and an image example
4. 3 practical tips for performance
5. One advanced customization example

Keep it concise and practical.`;

  const updatePrompt = (llmName) => {
    output.value = basePrompt.replace('{LLM}', llmName);
    llmButtons.forEach((btn) => btn.classList.remove('active', 'border-sky-400/80', 'bg-sky-500/15', 'text-white', 'ring-1', 'ring-sky-400/40'));
    const active = document.querySelector(`#llmButtons [data-llm="${llmName}"]`);
    if (active) active.classList.add('active', 'border-sky-400/80', 'bg-sky-500/15', 'text-white', 'ring-1', 'ring-sky-400/40');
  };

  llmButtons.forEach((btn) => {
    btn.addEventListener('click', () => updatePrompt(btn.dataset.llm));
  });

  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(output.value);
      const old = copyBtn.textContent;
      copyBtn.textContent = 'Copied!';
      setTimeout(() => {
        copyBtn.textContent = old;
      }, 1500);
    } catch (error) {
      console.error('Failed to copy LLM prompt:', error);
    }
  });

  updatePrompt('ChatGPT');
}

// Initialize CSS styles
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .fade-in {
    animation: fadeIn 0.6s ease-out forwards;
  }
  
  .opacity-0 { opacity: 0; }
  .opacity-100 { opacity: 1; }
  .translate-y-0 { transform: translateY(0); }
  .translate-y-8 { transform: translateY(8px); }
  .transition-all { transition: all 0.6s ease-out; }
  .duration-500 { animation-duration: 0.5s; }
  .ease-out { animation-timing-function: ease-out; }
`;
document.head.appendChild(style);

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  try {
    const runDeferredSetup = () => {
      initDocumentationTables();
      const cleanup = setupAnimations();
      setupCodeBlockCopy();
      setupLlmPromptHelper();
      window.addEventListener('unload', cleanup);
    };

    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(runDeferredSetup, { timeout: 1500 });
    } else {
      window.setTimeout(runDeferredSetup, 0);
    }
  } catch (error) {
    console.error('Initialization error:', error);
  }
});
