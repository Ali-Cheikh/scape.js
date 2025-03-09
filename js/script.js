    // Configuration data
    const shapeConfigOptions = [
        { option: "type", description: "Set to 'shape'." },
        { option: "shape", description: "Choose from circle, hexagon, heart, diamond, star, triangle, or pentagon." },
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
  
      // Function to populate the tables
      function populateConfigTables() {
        // Generate the tables
        const shapeTable = generateConfigTable("Shapes config tools", shapeConfigOptions);
        const imageTable = generateConfigTable("Images config tools", imageConfigOptions);
  
        // Select the empty table elements
        const shapeTableContainer = document.querySelector(".grid > table:first-child");
        const imageTableContainer = document.querySelector(".grid > table:last-child");
  
        // Inject the generated tables into the empty table elements
        shapeTableContainer.innerHTML = shapeTable;
        imageTableContainer.innerHTML = imageTable;
      }
  
      // Call the function to populate the tables when the page loads
      window.onload = populateConfigTables;

      function copyCode() {
        const code = `

<script>
window.ScapeConfig = {
type: 'shape',
shape: 'star',
count: 30,
size: 100,
fillColor: 'hsla(200, 90%, 60%, 0.8)',
strokeColor: 'rgba(255, 255, 255, 0.5)',
strokeWidth: 2,
};
</script>`;
        navigator.clipboard.writeText(code);
      }
