# Scape.js Documentation

## Overview
Scape.js is a JavaScript library that creates animated background elements (shapes or images) with floating animations and hover effects.

## Installation
```html
<!-- Add the script to your HTML -->
<script src="path/to/scape.js"></script>
```

## Usage
### Basic Implementation
```html
<!DOCTYPE html>
<html>
<head>
    <title>Scape.js Demo</title>
</head>
<body>
    <!-- Add the script before closing body tag -->
    <script src="path/to/scape.js"></script>
    <script>
        // Configure Scape.js
        window.ScapeConfig = {
            type: "shape",
            shape: "circle",
            count: 30
        };
    </script>
</body>
</html>
```

### Advanced Usage
```javascript
// Initialize with custom settings
window.ScapeConfig = {
    type: "shape",
    shape: "heart",
    count: 20,
    fillColor: "#ff6b6b",
    opacity: 0.7,
    floatDistance: 50
};

// Update configuration dynamically
setTimeout(() => {
    ScapeJs.updateConfig({
        shape: "star",
        fillColor: "#4ecdc4"
    });
}, 3000);
```

### Shape Mode
```javascript
window.ScapeConfig = {
    type: "shape",
    shape: "heart", // (circle, hexagon, diamond, star, triangle, pentagon, fly, flower, spiral, splash, tesseract, boom, wave, clover, ripple, shell, fractal)
    count: 30,
    size: 50,
    fillColor: "#3db8f5",
    strokeColor: "#ffffff",
    strokeWidth: 2,
    opacity: 0.6,
    animationDuration: "3s",
    floatDistance: 30,
    minDistance: 150
};
```

### Image Mode
```javascript
window.ScapeConfig = {
    type: "image",
    imageUrl: "path/to/your/image.png",
    count: 20,
    size: 40,
    opacity: 0.8,
    animationDuration: "4s",
    floatDistance: 40,
    minDistance: 100
};
```

## Configuration Options

### Shape Mode Options

| Option | Type | Description | Default |
|--------|------|-------------|---------|
| `type` | String | Mode identifier ('shape') | `'shape'` |
| `shape` | String | Element shape type:<br>• circle<br>• hexagon<br>• heart<br>• diamond<br>• star<br>• triangle<br>• pentagon | `'circle'` |
| `count` | Number | Total elements to generate | `30` |
| `size` | Number | Element size (px) | `50` |
| `spacing` | Number | Gap between elements (px) | `20` |
| `minDistance` | Number | Minimum proximity (px) | `150` |
| `animationDuration` | String | Animation timing (e.g., '3s') | `'3s'` |
| `floatDistance` | Number | Float movement range (px) | `30` |
| `rotationRange` | Number | Max rotation (degrees) | `180` |
| `opacity` | Number | Element transparency (0-1) | `0.6` |
| `fillColor` | String | Shape fill color | `'#3db8f5'` |
| `strokeColor` | String | Shape outline color | `'#ffffff'` |
| `strokeWidth` | Number | Outline thickness (px) | `2` |

### Image Mode Options

| Option | Type | Description | Default |
|--------|------|-------------|---------|
| `type` | String | Mode identifier ('image') | `'image'` |
| `imageUrl` | String | Image source path | Required |
| `count` | Number | Total elements to generate | `20` |
| `size` | Number | Element size (px) | `40` |
| `spacing` | Number | Gap between elements (px) | `20` |
| `minDistance` | Number | Minimum proximity (px) | `100` |
| `animationDuration` | String | Animation timing (e.g., '3s') | `'4s'` |
| `floatDistance` | Number | Float movement range (px) | `40` |
| `rotationRange` | Number | Max rotation (degrees) | `180` |
| `opacity` | Number | Element transparency (0-1) | `0.8` |

## API Methods
```javascript
// Refresh background elements
ScapeJs.refresh();

// Update configuration dynamically
ScapeJs.updateConfig({
    type: "image",
    imageUrl: "new-image.png"
});

// Remove all elements
ScapeJs.destroy();
```

## Features
- Automatic initialization
- Responsive layout
- Multiple shape options
- Image support
- Floating animations
- Hover effects
- Collision detection

## License
MIT License
