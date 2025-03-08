(function () {
  // Default configuration
  const githubImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFMTZCRDY3REIzRjAxMUUyQUQzREIxQzRENUFFNUM5NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFMTZCRDY3RUIzRjAxMUUyQUQzREIxQzRENUFFNUM5NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkUxNkJENjdCQjNGMDExRTJBRDNEQjFDNEQ1QUU1Qzk2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkUxNkJENjdDQjNGMDExRTJBRDNEQjFDNEQ1QUU1Qzk2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+SM9MCAAAA+5JREFUeNrEV11Ik1EY3s4+ddOp29Q5b0opCgKFsoKoi5Kg6CIhuwi6zLJLoYLopq4qsKKgi4i6CYIoU/q5iDAKs6syoS76IRWtyJ+p7cdt7sf1PGOD+e0c3dygAx/67ZzzPM95/877GYdHRg3ZjMXFxepQKNS6sLCwJxqNNuFpiMfjVs4ZjUa/pmmjeD6VlJS8NpvNT4QQ7mxwjSsJiEQim/1+/9lgMHgIr5ohuxG1WCw9Vqv1clFR0dCqBODElV6v90ogEDjGdYbVjXhpaendioqK07CIR7ZAqE49PT09BPL2PMgTByQGsYiZlQD4uMXtdr+JxWINhgINYhGT2MsKgMrm2dnZXgRXhaHAg5jEJodUAHxux4LudHJE9RdEdA+i3Juz7bGHe4mhE9FNrgwBCLirMFV9Okh5eflFh8PR5nK5nDabrR2BNJlKO0T35+Li4n4+/J+/JQCxhmu5h3uJoXNHPbmWZAHMshWB8l5/ipqammaAf0zPDDx1ONV3vurdidqwAQL+pEc8sLcAe1CCvQ3YHxIW8Pl85xSWNC1hADDIv0rIE/o4J0k3kww4xSlwIhcq3EFFOm7KN/hUGOQkt0CFa5WpNJlMvxBEz/IVQAxg/ZRZl9wiHA63yDYieM7DnLP5CiAGsC7I5sgtYKJGWe2A8seFqgFJrJjEPY1Cn3pJ8/9W1e5VWsFDTEmFrBcoDhZJEQkXuhICMyKpjhahqN21hRYATKfUOlDmkygrR4o4C0VOLGJKrOITKB4jijzdXygBKixyC5TDQdnk/Pz8qRw6oOWGlsTKGOQW6OH6FBWsyePxdOXLTgxiyebILZCjz+GLgMIKnXNzc49YMlcRdHXcSwxFVgTInQhC9G33UhNoJLuqq6t345p9y3eUy8OTk5PjAHuI9uo4b07FBaOhsu0A4Unc+T1TU1Nj3KsSSE5yJ65jqF2DDd8QqWYmAZrIM2VlZTdnZmb6AbpdV9V6ec9znf5Q7HjYumdRE0JOp3MjitO4SFa+cZz8Umqe3TCbSLvdfkR/kWDdNQl5InuTcysOcpFT35ZrbBxx4p3JAHlZVVW1D/634VRt+FvLBgK/v5LV9WS+10xMTEwtRw7XvqOL+e2Q8V3AYIOIAXQ26/heWVnZCVfcyKHg2CBgTpmPmjYM8l24GyaUHyaIh7XwfR9ErE8qHoDfn2LTNAVC0HX6MFcBIP8Bi+6F6cdW/DICkANRfx99fEYFQ7Nph5i/uQiA214gno7K+guhaiKg9gC62+M8eR7XsBsYJ4ilam60Fb7r7uAj8wFyuwM1oIOWgfmDy6RXEEQzJMPe23DXrVS7rtyD3Df8z/FPgAEAzWU5Ku59ZAUAAAAASUVORK5CYII=";
  const defaultConfig = {
    type: "shape", // 'image' or 'shape'
    imageUrl: githubImg, // URL for the image
    shape: "heart", // Shape type (circle, hexagon, heart, diamond, star, triangle, pentagon)
    count: 30, // Number of elements
    size: 50, // Size of each element
    spacing: 200, // Spacing between elements
    minDistance: 150, // Minimum distance between elements
    animationDuration: "3s", // Animation duration
    floatDistance: 30, // Floating distance
    rotationRange: 360, // Maximum rotation in degrees
    hoverScale: 1.1, // Scale on hover
    opacity: 0.6, // Base opacity
    fillColor: "hsla(200, 90%, 60%, 0.8)", // Fill color for shapes
    strokeColor: "rgba(255, 255, 255, 0.5)", // Stroke color for shapes
    strokeWidth: 2, // Stroke width for shapes
  };

  // Merge user config with defaults
  const config = { ...defaultConfig, ...window.ScapeConfig };

  // Function to dynamically create the @keyframes animation
  function setupKeyframeAnimation() {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
          @keyframes float {
            0% { transform: translate(0, 0) rotate(var(--rotation)); }
            50% { transform: translate(0, ${config.floatDistance}px) rotate(var(--rotation)); }
            100% { transform: translate(0, 0) rotate(var(--rotation)); }
          }
        `;
    document.head.appendChild(styleSheet);
  }

  // Function to create an element (image or shape)
  function createElement(x, y, rotation) {
    let element;
    if (config.type === "image") {
      element = document.createElement("img");
      element.src = config.imageUrl;
      element.alt = "Background Image";
    } else {
      element = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      element.setAttribute("width", config.size);
      element.setAttribute("height", config.size);
      const polygon = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "polygon"
      );
      const points = generateShapePoints(config.shape, config.size);
      polygon.setAttribute("points", points);
      polygon.setAttribute("fill", config.fillColor);
      polygon.setAttribute("stroke", config.strokeColor);
      polygon.setAttribute("stroke-width", config.strokeWidth);
      element.appendChild(polygon);
    }

    const rotationValue = Math.floor(Math.random() * config.rotationRange);
    element.style.zIndex = -1; // Ensure shapes appear behind the content
    element.style.position = "fixed"; // Fix elements to the viewport
    element.style.width = `${config.size}px`;
    element.style.height = `${config.size}px`;
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
    element.style.opacity = config.opacity;
    element.style.transition = `transform ${config.animationDuration}s ease, opacity ${config.opacity}s ease`;
    element.style.animation = `float ${
      config.animationDuration
    } infinite ease-in-out ${Math.random() * 2}s`;
    // Set the rotation as a CSS variable
    element.style.setProperty("--rotation", `${rotationValue}deg`);
    element.style.pointerEvents = "none"; // Ensure shapes don't interfere with clicks

    element.addEventListener("mouseenter", () => {
      element.style.transform = `scale(${config.hoverScale})`;
      element.style.opacity = 1;
    });

    element.addEventListener("mouseleave", () => {
      element.style.transform = "scale(1)";
      element.style.opacity = config.opacity;
    });
    element.classList.add("background-element"); // Add a class for easy removal

    return element;
  }

  // Function to generate points for shapes
  function generateShapePoints(shape, size) {
    const center = size / 2;
    const radius = size / 2;
    let points = [];

    switch (shape) {
      case "circle":
        for (let i = 0; i < 360; i += 20) {
          // Reduced from 10 to 20
          const angle = (i * Math.PI) / 180;
          const x = center + radius * Math.cos(angle);
          const y = center + radius * Math.sin(angle);
          points.push(`${x},${y}`);
        }
        break;
      case "hexagon":
        for (let i = 0; i < 6; i++) {
          const angle = (i * 2 * Math.PI) / 6 - Math.PI / 2;
          const x = center + radius * Math.cos(angle);
          const y = center + radius * Math.sin(angle);
          points.push(`${x},${y}`);
        }
        break;
      case "heart":
        for (let i = 0; i < 360; i += 10) {
          const angle = (i * Math.PI) / 180;
          const x = center + 16 * Math.pow(Math.sin(angle), 3);
          const y =
            center -
            (13 * Math.cos(angle) -
              5 * Math.cos(2 * angle) -
              2 * Math.cos(3 * angle) -
              Math.cos(4 * angle));
          points.push(`${x},${y}`);
        }
        break;
      case "diamond":
        points = [
          `${center},${center - radius}`,
          `${center + radius},${center}`,
          `${center},${center + radius}`,
          `${center - radius},${center}`,
        ];
        break;
      case "star":
        for (let i = 0; i < 10; i++) {
          const angle = (i * 2 * Math.PI) / 10 - Math.PI / 2;
          const r = i % 2 === 0 ? radius : radius / 2;
          const x = center + r * Math.cos(angle);
          const y = center + r * Math.sin(angle);
          points.push(`${x},${y}`);
        }
        break;
      case "triangle":
        for (let i = 0; i < 3; i++) {
          const angle = (i * 2 * Math.PI) / 3 - Math.PI / 2;
          const x = center + radius * Math.cos(angle);
          const y = center + radius * Math.sin(angle);
          points.push(`${x},${y}`);
        }
        break;
      case "pentagon":
        for (let i = 0; i < 5; i++) {
          const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2;
          const x = center + radius * Math.cos(angle);
          const y = center + radius * Math.sin(angle);
          points.push(`${x},${y}`);
        }
        break;
      default:
        points = [`${center},0`, `${size},${size}`, `0,${size}`];
    }

    return points.join(" ");
  }

  // Function to generate the background
  function generateBackground() {
    // Remove existing elements
    document
      .querySelectorAll(".background-element")
      .forEach((element) => element.remove());

    const width = window.innerWidth;
    const height = window.innerHeight;
    const existingPositions = [];

    for (let i = 0; i < config.count; i++) {
      const pos = generateValidPosition(
        Math.random() * width,
        Math.random() * height,
        existingPositions,
        config.minDistance
      );
      if (pos) {
        const rotation = Math.floor(Math.random() * 360);
        const element = createElement(pos.x, pos.y, rotation);
        document.body.appendChild(element);
      }
    }
  }

  // Function to generate a valid position
  function generateValidPosition(baseX, baseY, existingPositions, minDistance) {
    let attempts = 0;
    let x, y;

    do {
      x = baseX + (Math.random() - 0.5) * 100;
      y = baseY + (Math.random() - 0.5) * 100;
      attempts++;
    } while (
      !isPositionValid(x, y, existingPositions, minDistance) &&
      attempts < 10
    );

    if (attempts < 10) {
      existingPositions.push({ x, y });
      return { x, y };
    }
    return null;
  }

  // Function to check if a position is valid
  function isPositionValid(x, y, existingPositions, minDistance) {
    return !existingPositions.some((pos) => {
      const dx = x - pos.x;
      const dy = y - pos.y;
      return Math.sqrt(dx * dx + dy * dy) < minDistance;
    });
  }

  // Debounce function to limit resize events
  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  // Initialize
  setupKeyframeAnimation(); // Inject the @keyframes animation
  generateBackground();
  window.addEventListener("resize", debounce(generateBackground, 250));
})();
