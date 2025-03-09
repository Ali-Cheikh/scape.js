// Public API methods used with ScapeJs.methodName()
const apiMethods = [
    { option: "refresh", description: "Refresh the background." },
    { option: "updateConfig", description: "Update the configuration." },
    { option: "destroy", description: "Destroy all elements." },
    { option: "setImage", description: "Set a new image URL on command ('path/to/image')." },
    { option: "setShape", description: "Set a new shape on command ('shape Name')." },
    { option: "pause", description: "Pause animations." },
    { option: "resume", description: "Resume animations." },
    { option: "config", description: "Expose the current configuration (consider it as `console.log()`)." },
  ];
  
  // Configuration data for shapes
  const shapeConfigOptions = [
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
  ];
  
  // Configuration data for images
  const imageConfigOptions = [
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
  ];
  
  // Default configuration for the background elements
  const defaultConfig = { 
    type: "shape", // 'image' or 'shape'
    imageUrl: "githubImg", // URL for the image
    shape: "heart", // Shape type (circle, hexagon, heart, diamond, star, triangle, pentagon, etc.)
    count: 30, // Number of elements
    size: 50, // Size of each element
    spacing: 200, // Spacing between elements
    minDistance: 150, // Minimum distance between elements
    animationDuration: "3s", // Animation duration
    floatDistance: 30, // Floating distance
    rotationRange: 360, // Maximum rotation in degrees
    hoverScale: 1.1, // Scale on hover
    opacity: 0.8, // Base opacity
    fillColor: "hsla(200, 90%, 60%, 0.8)", // Fill color for shapes
    strokeColor: "rgba(255, 255, 255, 0.5)", // Stroke color for shapes
    strokeWidth: 2, // Stroke width for shapes
    onClick: null, // Callback for click events
    onHover: null, // Callback for hover events
  };
  
  // Function to generate a configuration table
  function generateConfigTable(title, options) {
    let tableHtml = `
      <table class="bg-gray-800 rounded-lg overflow-scroll fade-in w-full">
        <thead>
          <th class="px-2 sm:px-4 py-3" colspan="2">${title}</th>
          <tr class="hover:bg-gray-700 transition-all bg-gray-700">
            <th class="px-2 sm:px-4 py-3 text-left text-sm sm:text-base">Option</th>
            <th class="px-2 sm:px-4 py-3 text-left text-sm sm:text-base">Description</th>
          </tr>
        </thead>
        <tbody>
    `;
  
    options.forEach(({ option, description }) => {
      tableHtml += `
        <tr class="hover:bg-gray-700 transition-all border-b border-gray-700">
          <td class="px-2 sm:px-4 py-4 text-sm sm:text-base">${option}</td>
          <td class="px-2 sm:px-4 py-4 text-sm sm:text-base">${description}</td>
        </tr>
      `;
    });
  
    tableHtml += `
        </tbody>
      </table>
    `;
  
    return tableHtml;
  }
  
  // Function to populate the tables with the updated configuration options
  function populateConfigTables() {
    // Generate the tables for API methods, shapes, and images
    const apiMethodsTable = generateConfigTable("Public API Methods", apiMethods);
    const shapeTable = generateConfigTable("Shapes config tools", shapeConfigOptions);
    const imageTable = generateConfigTable("Images config tools", imageConfigOptions);
  
    // Select the empty table elements and inject the generated tables
    const apiMethodsTableContainer = document.querySelector(".grid > table:nth-child(1)");
    const shapeTableContainer = document.querySelector(".grid > table:nth-child(2)");
    const imageTableContainer = document.querySelector(".grid > table:nth-child(3)");
  
    apiMethodsTableContainer.innerHTML = apiMethodsTable;
    shapeTableContainer.innerHTML = shapeTable;
    imageTableContainer.innerHTML = imageTable;
  }
  
  window.onload = populateConfigTables;

// Create and inject CSS
const style = document.createElement("style");
style.textContent = `
    .grid table {
        opacity: 1 !important;
        transform: none !important;
        transition: none !important;
    }

    .fade-in:not(table) {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }

    .fade-in.visible:not(table) {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Set up intersection observer for non-table fade elements
const fadeElements = document.querySelectorAll('.fade-in:not(table)');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }else {
            entry.target.classList.remove("visible");
          }
    });
    { threshold: 0.5 }
});

fadeElements.forEach((element) => observer.observe(element));
