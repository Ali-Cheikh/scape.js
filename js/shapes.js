/**
 * Scape.js docs shape renderer.
 * Uses the exact same geometry formulas as scape.js.
 */

const ShapeRenderer = {
  SHAPES: [
    { key: "circle", label: "Circle" },
    { key: "hexagon", label: "Hexagon" },
    { key: "heart", label: "Heart" },
    { key: "diamond", label: "Diamond" },
    { key: "star", label: "Star" },
    { key: "triangle", label: "Triangle" },
    { key: "pentagon", label: "Pentagon" },
    { key: "fly", label: "Fly" },
    { key: "snowflake", label: "Snowflake" },
    { key: "flower", label: "Flower" },
    { key: "spiral", label: "Spiral" },
    { key: "splash", label: "Splash" },
    { key: "tesseract", label: "Tesseract" },
    { key: "boom", label: "Boom" },
    { key: "wave", label: "Wave" },
    { key: "clover", label: "Clover" },
    { key: "ripple", label: "Ripple" },
    { key: "shell", label: "Shell" },
    { key: "fractal", label: "Fractal" }
  ],

  generateShapePoints(shape, size) {
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
          `${center - radius},${center}`
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
          const r = radius * (0.5 + 0.5 * Math.cos(9 * angle));
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
      case "spiral": {
        const turns = 3;
        for (let i = 0; i < 360 * turns; i += 10) {
          const angle = (i * Math.PI) / 180;
          const r = radius * (i / (360 * turns));
          const x = center + r * Math.cos(angle);
          const y = center - r * Math.sin(angle);
          points.push(`${x},${y}`);
        }
        break;
      }
      case "splash":
        for (let i = 0; i < 360; i += 10) {
          const angle = (i * Math.PI) / 180;
          const r = radius * (0.5 + Math.random() * 0.5);
          const x = center + r * Math.cos(angle);
          const y = center - r * Math.sin(angle);
          points.push(`${x},${y}`);
        }
        break;
      case "tesseract":
        for (let i = 0; i < 360; i += 10) {
          const angle = (i * Math.PI) / 180;
          const x =
            center +
            radius *
              Math.sin(angle) *
              (Math.exp(Math.cos(angle)) -
                4 * Math.cos(14 * angle) -
                Math.pow(Math.sin(angle / 2), 5));
          const y =
            center -
            radius *
              Math.cos(angle) *
              (Math.exp(Math.cos(angle)) -
                4 * Math.cos(14 * angle) -
                Math.pow(Math.sin(angle / 2), 5));
          points.push(`${x},${y}`);
        }
        break;
      case "boom":
        for (let i = 0; i < 360; i += 10) {
          const angle = (i * Math.PI) / 180;
          const x =
            center -
            radius *
              Math.cos(angle) *
              (Math.exp(Math.cos(angle)) -
                2 * Math.cos(25 * angle) -
                Math.pow(Math.sin(angle / 40), 5));
          const y =
            center +
            radius *
              Math.sin(angle) *
              (Math.exp(Math.cos(angle)) -
                2 * Math.cos(25 * angle) -
                Math.pow(Math.sin(angle / 40), 5));
          points.push(`${x},${y}`);
        }
        break;
      case "wave":
        for (let i = 0; i < 360; i += 10) {
          const angle = (i * Math.PI) / 180;
          const x = center + radius * Math.cos(angle);
          const y =
            center - radius * Math.sin(angle) * (0.1 + 0.5 * Math.cos(8 * angle));
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
  },

  createShapeTile(shapeKey, label) {
    const tile = document.createElement("div");
    tile.className = "shape-tile";

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 40 40");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

    const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    polygon.setAttribute("points", this.generateShapePoints(shapeKey, 40));
    polygon.setAttribute("fill", "rgba(200,255,0,0.15)");
    polygon.setAttribute("stroke", "rgba(200,255,0,0.7)");
    polygon.setAttribute("stroke-width", "1.5");
    svg.appendChild(polygon);

    const labelEl = document.createElement("span");
    labelEl.className = "tile-name";
    labelEl.textContent = label;

    tile.appendChild(svg);
    tile.appendChild(labelEl);

    return tile;
  },

  renderGrid(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = "";
    this.SHAPES.forEach((shape) => {
      container.appendChild(this.createShapeTile(shape.key, shape.label));
    });
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = ShapeRenderer;
}
