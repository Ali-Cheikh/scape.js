# Scape.js 📦

> **Lightweight, feature-rich JavaScript library for creating beautiful, animated backgrounds with shapes and images.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Size](https://img.shields.io/badge/Size-5KB-blue.svg)]()
[![Free](https://img.shields.io/badge/Price-FREE-green.svg)]()

**Transform your website with stunning animated backgrounds in seconds!**

---

## ✨ Features

- 🎨 **18+ Unique Shapes** - Stars, hearts, fractals, and more
- 🖼️ **Image Support** - Use custom images as background elements  
- ✨ **Smooth Animations** - Floating, rotating, and hover effects
- 🖱️ **Interactive** - Click and hover event handlers
- ⚙️ **Fully Configurable** - Customize colors, sizes, counts, and animations
- 📱 **Responsive** - Works perfectly on all screen sizes
- 📦 **Lightweight** - Only ~5KB (minified)
- 🔓 **No Dependencies** - Pure vanilla JavaScript
- 🎯 **Easy Integration** - Copy-paste one line of code

---

## 🎯 Quick Start

### Basic Installation

Include the script in your HTML:

```html
<script src="https://cdn.jsdelivr.net/gh/Ali-Cheikh/scape.js@main/scape.js"></script>
```

### Create Animated Background

```javascript
document.addEventListener('DOMContentLoaded', () => {
    window.ScapeConfig = {
        type: 'shape',
        shape: 'star',
        count: 30,
        fillColor: 'hsla(200, 90%, 60%, 0.8)'
    };
});
```

Done! Your background now has beautiful animated stars. ⭐

---

## 📚 Documentation

### Configuration Examples

#### Example 1: Shape Background
```javascript
window.ScapeConfig = {
    type: 'shape',
    shape: 'heart',
    count: 25,
    size: 50,
    fillColor: '#ff69b4',
    strokeColor: 'transparent',
    animationDuration: '4s'
};
```

#### Example 2: Image Background  
```javascript
window.ScapeConfig = {
    type: 'image',
    imageUrl: 'logo.png',
    count: 20,
    size: 60,
    opacity: 0.7,
    spacing: 150
};
```

#### Example 3: Interactive Elements
```javascript
window.ScapeConfig = {
    type: 'shape',
    shape: 'hexagon',
    count: 30,
    onClick: (event) => {
        console.log('Clicked!', event.target);
    },
    onHover: (event) => {
        event.target.style.filter = 'brightness(1.5)';
    }
};
```

---

## 🛠️ API Methods

| Method | Description | Example |
|--------|-------------|---------|
| `refresh()` | Regenerate background | `ScapeJs.refresh()` |
| `updateConfig(config)` | Update configuration | `ScapeJs.updateConfig({ shape: 'heart' })` |
| `destroy()` | Remove all elements | `ScapeJs.destroy()` |
| `setImage(url)` | Change image | `ScapeJs.setImage('new.png')` |
| `setShape(shape)` | Change shape | `ScapeJs.setShape('star')` |
| `pause()` | Pause animations | `ScapeJs.pause()` |
| `resume()` | Resume animations | `ScapeJs.resume()` |
| `getConfig()` | Get current config | `const cfg = ScapeJs.getConfig()` |

---

## 🎨 Available Shapes

```
circle      · hexagon    · triangle   · diamond    · pentagon
heart       · flower     · shell      · spiral     · splash
star        · fly        · clover     · ripple     · wave
tesseract   · boom       · snowflake  · fractal
```

---

## ⚙️ Configuration Options

### Core Options

| Option | Type | Default | Notes |
|--------|------|---------|-------|
| `type` | string | 'image' | 'shape' or 'image' |
| `count` | number | 30 | Number of elements |
| `size` | number | 50 | Element size (pixels) |
| `opacity` | number | 0.8 | Base opacity (0-1) |
| `animationDuration` | string | '3s' | Duration of animation |
| `floatDistance` | number | 30 | Float animation distance |

### Shape-Only Options

| Option | Type | Default |
|--------|------|---------|
| `shape` | string | 'heart' |
| `fillColor` | string | 'hsla(200, 90%, 60%, 0.8)' |
| `strokeColor` | string | 'rgba(255, 255, 255, 0.5)' |
| `strokeWidth` | number | 2 |

### Image-Only Options

| Option | Type | Default |
|--------|------|---------|
| `imageUrl` | string | githubImg |
| `spacing` | number | 200 |
| `minDistance` | number | 150 |

---

## 🚀 Use Cases

### Landing Pages
Add eye-catching animated backgrounds to make your landing page stand out.

### Portfolio Sites
Showcase your creativity with custom animated backgrounds that reflect your style.

### 404 Pages
Turn error pages into engaging experiences with floating shapes.

### Blog Headers
Add subtle animations to your blog post headers.

### Product Pages
Highlight key features with animated shape backgrounds.

---

## 📊 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 90+ | ✅ Full |
| Firefox | 88+ | ✅ Full |
| Safari | 14+ | ✅ Full |
| Edge | 90+ | ✅ Full |
| Mobile | Latest | ✅ Full |

---

## 💡 Performance Tips

1. **Keep count reasonable** - Use 15-50 elements for best performance
2. **Responsive design** - Reduce count on mobile devices
3. **Optimize size** - Smaller shapes render faster
4. **Test performance** - Check on your target devices

```javascript
// Mobile optimization example
const isMobile = window.innerWidth < 768;
window.ScapeConfig = {
    type: 'shape',
    shape: 'star',
    count: isMobile ? 15 : 30,
    size: isMobile ? 30 : 50
};
```

---

## 📄 License

**MIT License** - Free for personal and commercial use

---

## 🔗 Links

- **GitHub** - [Ali-Cheikh/scape.js](https://github.com/Ali-Cheikh/scape.js)
- **Live Demo** - [Interactive Demo](./demo/index.html)
- **Documentation** - [Full Docs](./Documentation.md)
- **NPM** - Coming soon

---

## 🤝 Contributing

Contributions welcome! Feel free to submit issues and pull requests.

---

Made with ❤️ by [Ali Cheikh](https://github.com/Ali-Cheikh)
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
    - Always use `ScapeJs.destroy()` before page unload
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
