const ScapeJs = (function () {
  // Default configuration
  const githubImg = "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png";
  const defaultConfig = {
    type: "shape", // 'image' or 'shape'
    imageUrl: githubImg, // URL for the image
    shape: "heart", // Shape type (circle, hexagon, heart, diamond, star, triangle, pentagon, fly, flower, spiral, splash, tesseract, boom, wave, clover, ripple, shell, fractal)
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

  // Merge with defaults, ensuring window.ScapeConfig is an object/called
  let config = { ...defaultConfig, ...(window.ScapeConfig || {}) };

  // Function to dynamically create the @keyframes animation
  function setupKeyframeAnimation() {
    if (!document.getElementById("scapejs-keyframes")) {
      const styleSheet = document.createElement("style");
      styleSheet.id = "scapejs-keyframes";
      styleSheet.textContent = `
        @keyframes float {
          0% { transform: translate(0, 0) rotate(var(--rotation)); }
          50% { transform: translate(0, ${config.floatDistance}px) rotate(var(--rotation)); }
          100% { transform: translate(0, 0) rotate(var(--rotation)); }
        }
      `;
      document.head.appendChild(styleSheet);
    }
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
      const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
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
    element.style.transition = `transform ${config.animationDuration}s ease, opacity ${config.animationDuration}s ease`;
    element.style.animation = `float ${config.animationDuration} infinite ease-in-out ${Math.random() * 2}s`;
    element.style.setProperty("--rotation", `${rotationValue}deg`);
    element.classList.add("background-element"); // Add a class for easy removal

    // Enable interactions if onClick or onHover is provided
    if (config.onClick || config.onHover) {
      element.style.pointerEvents = "auto";
    }

    // Add event listeners if callbacks are provided
    if (config.onClick) {
      element.addEventListener("click", config.onClick);
    }
    if (config.onHover) {
      element.addEventListener("mouseenter", (event) => {
        element.style.transform = `scale(${config.hoverScale}) rotate(${rotationValue}deg)`;
        element.style.opacity = 1;
        config.onHover(event);
      });

      element.addEventListener("mouseleave", (event) => {
        element.style.transform = `scale(1) rotate(${rotationValue}deg)`;
        element.style.opacity = config.opacity;
      });
    }

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
        // Heart shape formula based on parametric equations
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
      case "fly":
        //  fly wings shape formula based on limits equations
        for (let i = 0; i < 360; i += 10) {
          const angle = (i * Math.PI) / 180;
          const x = center + radius * Math.cos(angle);
          const y = center - radius * Math.sin(angle) * Math.cos(angle);
          points.push(`${x},${y}`);
        }
        break;
      case "snowflake":
        for (let i = 0; i < 360; i += 10) {
          const angle = (i * Math.PI) / 180;
          const r = radius * (0.5 + 0.5 * Math.cos(9 * angle)); // Petal effect
          const x = center + r * Math.cos(angle);
          const y = center - r * Math.sin(angle);
          points.push(`${x},${y}`);
        }
        break;
      case "flower":
        for (let i = 0; i < 360; i += 10) {
          const angle = (i * Math.PI) / 180;
          const r = radius * (0.5 + 0.5 * Math.abs(Math.sin(3 * angle)));
          const x = center + r * Math.cos(angle);
          const y = center - r * Math.sin(angle);
          points.push(`${x},${y}`);
        }
        break;
      case "spiral":
        const turns = 3; // Number of spiral turns
        for (let i = 0; i < 360 * turns; i += 10) {
          const angle = (i * Math.PI) / 180;
          const r = radius * (i / (360 * turns)); // Gradually increase radius
          const x = center + r * Math.cos(angle);
          const y = center - r * Math.sin(angle);
          points.push(`${x},${y}`);
        }
        break;
      case "splash":
        for (let i = 0; i < 360; i += 10) {
          const angle = (i * Math.PI) / 180;
          const r = radius * (0.5 + Math.random() * 0.5); // Random radius
          const x = center + r * Math.cos(angle);
          const y = center - r * Math.sin(angle);
          points.push(`${x},${y}`);
        }
      break;
      case "tesseract":
        for (let i = 0; i < 360; i += 10) {
          const angle = (i * Math.PI) / 180;
          const x = center + radius * Math.sin(angle) * (Math.exp(Math.cos(angle)) - 4 * Math.cos(14 * angle) - Math.pow(Math.sin(angle / 2), 5));
          const y = center - radius * Math.cos(angle) * (Math.exp(Math.cos(angle)) - 4 * Math.cos(14 * angle) - Math.pow(Math.sin(angle / 2), 5));
          points.push(`${x},${y}`);
        }
        break;
      case "boom":
        for (let i = 0; i < 360; i += 10) {
          const angle = (i * Math.PI) / 180;
          const x = center - radius * Math.cos(angle) * (Math.exp(Math.cos(angle)) - 2 * Math.cos(25 * angle) - Math.pow(Math.sin(angle / 40), 5));
          const y = center + radius * Math.sin(angle) * (Math.exp(Math.cos(angle)) - 2 * Math.cos(25 * angle) - Math.pow(Math.sin(angle / 40), 5));
          points.push(`${x},${y}`);
        }
        break;
        case "wave":
          for (let i = 0; i < 360; i += 10) {
            const angle = (i * Math.PI) / 180;
            const x = center + radius * Math.cos(angle);
            const y = center - radius * Math.sin(angle) * ( 0.1 + 0.5 * Math.cos(8 * angle));
            points.push(`${x},${y}`);
          }
          break;
        case "clover":
          for (let i = 0; i < 360; i += 10) {
            const angle = (i * Math.PI) / 180;
            const r = radius * (0.5 + 0.5 * Math.abs(Math.sin(2 * angle)));
            const x = center + r * Math.cos(angle);
            const y = center - r * Math.sin(angle);
            points.push(`${x},${y}`);
          }
          break;
        case "ripple":
          for (let i = 0; i < 360; i += 10) {
            const angle = (i * Math.PI) / 180;
            const r = radius * (0.5 + 0.5 * Math.sin(3 * angle));
            const x = center + r * Math.cos(angle);
            const y = center - r * Math.sin(angle);
            points.push(`${x},${y}`);
          }
          break;
        case "shell":
          for (let i = 0; i < 360 * 2; i += 10) {
            const angle = (i * Math.PI) / 180;
            const r = radius * (i / (360 * 2));
            const x = center + r * Math.cos(angle);
            const y = center - r * Math.sin(angle);
            points.push(`${x},${y}`);
          }
          break;
    
        case "fractal":
          for (let i = 0; i < 360; i += 10) {
            const angle = (i * Math.PI) / 180;
            const r = radius * (0.5 + 0.5 * Math.sin(7 * angle) * Math.cos(5 * angle));
            const x = center + r * Math.cos(angle);
            const y = center - r * Math.sin(angle);
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
        const rotation = Math.floor(Math.random() * config.rotationRange);
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

  // Function to destroy all elements
  function destroy() {
    document.querySelectorAll(".background-element").forEach((element) => element.remove());
  }

  // Function to update configuration and regenerate background
  function updateConfig(newConfig) {
    config = { ...config, ...newConfig };
    generateBackground();
  }

  // Function to set a new image URL
  function setImage(url) {
    config.imageUrl = url;
    generateBackground();
  }

  // Function to set a new shape
  function setShape(shape) {
    config.shape = shape;
    generateBackground();
  }

  // Function to pause animations
  function pause() {
    document.querySelectorAll(".background-element").forEach((element) => {
      element.style.animationPlayState = "paused";
    });
  }

  // Function to resume animations
  function resume() {
    document.querySelectorAll(".background-element").forEach((element) => {
      element.style.animationPlayState = "running";
    });
  }

  let lastWidth = window.innerWidth;
  let lastHeight = window.innerHeight;

  window.addEventListener("resize", debounce(() => {
    const currentWidth = window.innerWidth;
    const currentHeight = window.innerHeight;

    if (currentWidth !== lastWidth || currentHeight !== lastHeight) {
      lastWidth = currentWidth;
      lastHeight = currentHeight;
      generateBackground();
    }
  }, 250));

  // Initialize
  setupKeyframeAnimation(); // Inject the @keyframes animation
  generateBackground(); // Generate the background

  // Expose API methods
  return {
    // Public API methods used with ScapeJs.methodName()
    refresh: generateBackground, // Refresh the background
    updateConfig, // Update the configuration
    destroy, // Destroy all elements
    setImage, // Set a new image URL on command ("path/to/image")
    setShape, // Set a new shape on command ("shape Name")
    pause, // Pause animations
    resume, // Resume animations
    config, // Expose the current configuration consider it consol.log()
  };
})();