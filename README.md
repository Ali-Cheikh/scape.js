# scape.js
A JavaScript package for creating beautiful, animated backgrounds 📦 

## What Is This?

The **Scape.js** is a lightweight JavaScript package that allows you to create beautiful, animated backgrounds for your website. Whether you want floating shapes or custom images, this package has you covered.
# Scape.js Documentation

## ⚠️ Important Note
All API methods must be wrapped in a DOMContentLoaded event listener to ensure proper functionality:

```javascript
document.addEventListener('DOMContentLoaded', () => {
    // Your Scape.js code here
});
```

## Installation

```html
<script src="https://ali-cheikh.github.io/scape.js"></script>
<script src="config.js"></script>
```

## Basic Usage

### Shape Background
```javascript
window.ScapeConfig = {
    type: 'shape',
    shape: 'star',
    count: 30
};
```

### Image Background
```javascript
window.ScapeConfig = {
    type: 'image',
    imageUrl: 'path/to/image.png',
    count: 20
};
```

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| type | string | 'shape' | 'shape' or 'image' |
| imageUrl | string | githubImg | URL for image elements |
| shape | string | 'heart' | Shape type (see Shape Types) |
| count | number | 30 | Number of elements |
| size | number | 50 | Size in pixels |
| spacing | number | 200 | Space between elements |
| minDistance | number | 150 | Minimum element distance |
| animationDuration | string | '3s' | Animation duration |
| floatDistance | number | 30 | Float animation distance |
| rotationRange | number | 360 | Maximum rotation degrees |
| hoverScale | number | 1.1 | Scale factor on hover |
| opacity | number | 0.8 | Base opacity |
| fillColor | string | 'hsla(200, 90%, 60%, 0.8)' | Shape fill color |
| strokeColor | string | 'rgba(255, 255, 255, 0.5)' | Shape stroke color |
| strokeWidth | number | 2 | Shape stroke width |
| onClick | function | null | Click event callback |
| onHover | function | null | Hover event callback |

## API Methods

### Core Methods
```javascript
// Refresh the background
ScapeJs.refresh();

// Update configuration
ScapeJs.updateConfig({
    shape: 'heart',
    count: 50
});

// Remove all elements
ScapeJs.destroy();
```

### Element Control
```javascript
// Change image source
ScapeJs.setImage('path/to/new-image.png');

// Change shape type
ScapeJs.setShape('star');

// Animation control
ScapeJs.pause();
ScapeJs.resume();
```

## Available Shapes

### Basic Shapes
- `circle`
- `hexagon`
- `triangle`
- `pentagon`
- `diamond`

### Special Shapes
- `heart`
- `star`
- `fly`
- `flower`
- `spiral`

### Complex Shapes
- `splash`
- `tesseract`
- `boom`
- `wave`
- `clover`

### Natural Shapes
- `ripple`
- `shell`
- `fractal`
- `snowflake`

## Event Handling

```javascript
window.ScapeConfig = {
    // ...other options
    onClick: (event) => {
        const element = event.target;
        // Handle click
    },
    onHover: (event) => {
        const element = event.target;
        // Handle hover
    }
};
```

### Interactive Elements

````javascript
document.addEventListener('DOMContentLoaded', () => {
    window.ScapeConfig = {
        type: 'shape',
        shape: 'heart',
        count: 15,
        hoverScale: 1.2,
        onClick: (e) => {
            e.target.style.fillColor = 'red';
        }
    };
});
````

## Performance Tips

1. **Element Count**
   - Mobile: 10-20 elements
   - Desktop: 20-40 elements
   - High-performance: up to 100 elements

2. **Animation Performance**
   - Use simpler shapes for better performance
   - Reduce floatDistance on mobile
   - Consider disabling rotation on low-end devices

3. **Memory Management**
   - Always use `Scape.destroy()` before page unload
   - Clean up event listeners when removing elements
   - Use appropriate spacing values

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Partial support for IE11

## Troubleshooting

If elements don't appear:
1. Check console for errors
2. Verify DOM is loaded
3. Check z-index conflicts
4. Verify shape type is valid
5. Check image URLs for image type

## Version History
- v1.0.1: Added new shapes, improved performance
- v1.0.0: Initial release
For detailed configuration options, see the [documentation](Documentation.md).
