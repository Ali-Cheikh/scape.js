
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
    { option: "config", description: "Expose the current configuration (consider it as `console.log()`)." },
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
    imageUrl: "githubImg",
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
  table.className = 'bg-gray-800 rounded-lg overflow-hidden shadow-lg mb-8';
  
  table.innerHTML = `
    <div class="overflow-x-auto">
      <table class="w-full">
        <thead>
          <tr class="bg-gray-700 text-left">
            <th class="px-6 py-4 font-semibold">Option</th>
            <th class="px-6 py-4 font-semibold">Description</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-700">
          ${data.map(item => `
            <tr class="hover:bg-gray-700 transition-colors">
              <td class="px-6 py-4 font-mono text-blue-300">${item.option}</td>
              <td class="px-6 py-4">${item.description}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
    <div class="bg-gray-900 px-6 py-3 text-sm text-gray-400">
      ${title} Configuration Options
    </div>
  `;
  
  return table;
}
 // Improve table initialization with error handling
 function initDocumentationTables() {
  try {
    const container = document.createElement('div');
    container.className = 'max-w-6xl mx-auto px-4 space-y-8';
    
    // Add loading state
    container.innerHTML = '<div class="loading">Loading configuration...</div>';
    
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
    
    // Clear loading state and append tables
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

// Improve animation setup with cleanup
function setupAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        requestAnimationFrame(() => {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        });
      }
    });
  }, { 
    threshold: 0.1,
    rootMargin: '50px'
  });

  fadeElements.forEach(el => {
    el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-500', 'ease-out');
    observer.observe(el);
  });

  // Cleanup on page unload
  return () => observer.disconnect();
}

// Improve code block copy functionality
function setupCodeBlockCopy() {
  document.querySelectorAll('pre code').forEach(codeBlock => {
    const button = document.createElement('button');
    button.className = 'copy-btn absolute top-2 right-2 px-2 py-1 bg-gray-700 text-xs rounded hover:bg-gray-600';
    button.textContent = 'Copy';
    
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
    
    const wrapper = document.createElement('div');
    wrapper.className = 'relative';
    wrapper.appendChild(codeBlock.cloneNode(true));
    wrapper.appendChild(button);
    
    codeBlock.parentNode.replaceChild(wrapper, codeBlock);
  });
}

// Initialize with error handling
try {
  initDocumentationTables();
  const cleanup = setupAnimations();
  setupCodeBlockCopy();
  
  // Cleanup on page unload
  window.addEventListener('unload', cleanup);
} catch (error) {
  console.error('Initialization error:', error);
}

// Create and inject CSS
const style = document.createElement('style');
style.textContent = `
  .fade-in {
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
  .fade-out {
    opacity: 0 !important;
    transform: translateY(8px) !important;
  }
  .divide-gray-700 > :not([hidden]) ~ :not([hidden]) {
    border-color: #374151;
  }
`;
document.head.appendChild(style);

// Modified intersection observer to handle both fade in and out
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('opacity-100', 'translate-y-0');
      entry.target.classList.remove('fade-out');
    } else {
      entry.target.classList.add('fade-out');
    }
  });
}, { threshold: 0.1 });

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
