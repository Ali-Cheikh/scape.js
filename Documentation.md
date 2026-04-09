
# Scape.js - Complete Documentation

> **Turn your website into a visual masterpiece with animated backgrounds**

**Version:** 1.0.1 | **License:** MIT | **Size:** ~5KB

---

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Configuration Options](#configuration-options)
- [API Methods](#api-methods)
- [Available Shapes](#available-shapes)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)

---

## Overview

Scape.js is a lightweight, zero-dependency JavaScript library that creates animated background elements (shapes or images) with floating animations, hover effects, and interactive capabilities. Perfect for landing pages, portfolios, and any website that needs visual polish.

**Key Features:**
- 🎨 18+ beautiful shapes
- 🖼️ Custom image support
- ⚙️ Highly configurable
- 🎯 Interactive events
- 📱 Fully responsive
- 🚀 Lightning fast (~5KB)

---

## Installation

### CDN (Recommended)

Add this single line to your HTML:

```html
<script src="https://cdn.jsdelivr.net/gh/Ali-Cheikh/scape.js@main/scape.js"></script>
```

Or use Vercel:

```html
<script src="https://scape-js.vercel.app/scape.js"></script>
```

### NPM (Coming Soon)

```bash
npm install scape.js
```

---

## Quick Start

### Minimum Setup (3 lines!)

```javascript
document.addEventListener('DOMContentLoaded', () => {
    window.ScapeConfig = { type: 'shape', shape: 'star', count: 30 };
});
```

That's it! You now have animated stars floating across your website.

---

## Configuration Options

### Essential Config

```javascript
window.ScapeConfig = {
    // Type of background elements
    type: 'shape',              // 'shape' or 'image'
    
    // Number of elements
    count: 30,                  // 15-50 recommended
    
    // Size of elements
    size: 50,                   // pixels
    
    // Base transparency
    opacity: 0.8                // 0-1
};
```

### Complete Config Reference

#### Display Options

| Option | Type | Default | Range | Description |
|--------|------|---------|-------|-------------|
| `type` | string | 'image' | 'shape', 'image' | Element type |
| `count` | number | 30 | 1-100 | Number of elements |
| `size` | number | 50 | 10-200 | Element size (px) |
| `opacity` | number | 0.8 | 0-1 | Base opacity |

#### Animation Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `animationDuration` | string | '3s' | Float animation duration |
| `floatDistance` | number | 30 | Float distance (px) |
| `rotationRange` | number | 360 | Max rotation (degrees) |
| `hoverScale` | number | 1.1 | Scale on hover |

#### Shape-Only Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `shape` | string | 'heart' | Shape type |
| `fillColor` | string | 'hsla(200, 90%, 60%, 0.8)' | Shape fill color |
| `strokeColor` | string | 'rgba(255,255,255,0.5)' | Shape stroke color |
| `strokeWidth` | number | 2 | Stroke width (px) |

#### Image-Only Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `imageUrl` | string | githubImg | Image URL |
| `spacing` | number | 200 | Spacing between (px) |
| `minDistance` | number | 150 | Min element distance (px) |

#### Event Handlers

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `onClick` | function | null | Click handler |
| `onHover` | function | null | Hover handler |

---

## API Methods

### Core Methods

#### `refresh()`
Regenerates all background elements.

```javascript
ScapeJs.refresh();
```

#### `updateConfig(newConfig)`
Updates configuration and refreshes background.

```javascript
ScapeJs.updateConfig({
    shape: 'heart',
    count: 50,
    fillColor: '#ff69b4'
});
```

#### `destroy()`
Removes all background elements from DOM.

```javascript
ScapeJs.destroy();
```

#### `getConfig()`
Returns a copy of current configuration.

```javascript
const config = ScapeJs.getConfig();
console.log(config);
```

### Element Control

#### `setImage(url)`
Changes the image URL.

```javascript
ScapeJs.setImage('/path/to/new-image.png');
```

#### `setShape(shapeName)`
Changes the shape type.

```javascript
ScapeJs.setShape('hexagon');
```

### Animation Control

#### `pause()`
Pauses all animations.

```javascript
ScapeJs.pause();
```

#### `resume()`
Resumes animations.

```javascript
ScapeJs.resume();
```

---

## Available Shapes

### Basic Shapes (5)
- `circle` - Perfect circle
- `hexagon` - 6-sided polygon
- `triangle` - 3-sided polygon
- `diamond` - 4-sided rhombus
- `pentagon` - 5-sided polygon

### Organic Shapes (5)
- `heart` - Classic heart shape
- `flower` - Petal-based design
- `shell` - Spiral shell pattern  
- `spiral` - Logarithmic spiral
- `splash` - Random splash effect

### Complex Shapes (5)
- `star` - 5-pointed star
- `fly` - Flying insect wings
- `clover` - 4-leaf clover
- `ripple` - Wave-like ripples
- `wave` - Ocean wave pattern

### Advanced Shapes (4)
- `tesseract` - 4D hypercube projection
- `boom` - Explosive starburst
- `snowflake` - Ice crystal pattern
- `fractal` - Mandelbrot-inspired shape

**Total:** 19 unique shapes

---

## Examples

### Example 1: Elegant Landing Page

```javascript
document.addEventListener('DOMContentLoaded', () => {
    window.ScapeConfig = {
        type: 'shape',
        shape: 'flower',
        count: 20,
        size: 60,
        fillColor: 'rgba(139, 92, 246, 0.6)',
        strokeColor: 'transparent',
        opacity: 0.7,
        animationDuration: '5s'
    };
});
```

### Example 2: Interactive Portfolio

```javascript
window.ScapeConfig = {
    type: 'shape',
    shape: 'star',
    count: 30,
    hoverScale: 1.5,
    onClick: (e) => {
        e.target.style.opacity = Math.random();
    },
    onHover: (e) => {
        e.target.style.filter = 'drop-shadow(0 0 10px #fbbf24)';
    }
};
```

### Example 3: Mobile-Optimized

```javascript
const isMobile = window.innerWidth < 768;

window.ScapeConfig = {
    type: 'shape',
    shape: 'hexagon',
    count: isMobile ? 12 : 25,
    size: isMobile ? 30 : 50,
    opacity: isMobile ? 0.6 : 0.8,
    animationDuration: isMobile ? '4s' : '3s'
};
```

### Example 4: Logo/Image Background

```javascript
window.ScapeConfig = {
    type: 'image',
    imageUrl: 'https://your-domain.com/logo.png',
    count: 15,
    size: 60,
    opacity: 0.5,
    spacing: 200,
    minDistance: 100
};
```

### Example 5: Dynamic Theme Switcher

```javascript
const themes = {
    dark: { fillColor: 'rgba(59, 130, 246, 0.8)', shape: 'star' },
    light: { fillColor: 'rgba(168, 85, 247, 0.8)', shape: 'hexagon' },
    fun: { fillColor: '#ff69b4', shape: 'heart' }
};

document.getElementById('themeBtn').addEventListener('click', () => {
    ScapeJs.updateConfig(themes.fun);
});
```

---

## Troubleshooting

### Background Not Showing

**Problem:** No animated elements appear on page.

**Solutions:**
1. Ensure script is loaded before config
2. Use `DOMContentLoaded` event listener
3. Check console for JavaScript errors
4. Verify `window.ScapeConfig` object is defined

```javascript
// ✅ Correct
document.addEventListener('DOMContentLoaded', () => {
    window.ScapeConfig = { type: 'shape', shape: 'star' };
});

// ❌ Wrong
window.ScapeConfig = { type: 'shape', shape: 'star' };
```

### Animations Stuttering

**Problem:** Background animations are choppy/slow.

**Solutions:**
1. Reduce element `count` (try 15-20)
2. Increase `animationDuration` (try '4s' or '5s')
3. Reduce browser tab load
4. Test on device with better specs

### Shapes Look Distorted

**Problem:** SVG shapes appear malformed.

**Solutions:**
1. Verify browser supports SVG
2. Double-check `shape` name spelling
3. Try different `size` values (50-100 recommended)
4. Clear browser cache

### Performance Issues

**Problem:** Website feels sluggish with background.

**Solutions:**
1. Reduce `count` to 10-15
2. Use simpler shapes (circle, hexagon)
3. Use images instead of shapes (faster rendering)
4. Disable on mobile: `if (isMobile) ScapeJs.destroy();`

### Event Handlers Not Working

**Problem:** `onClick` / `onHover` callbacks don't fire.

**Solutions:**
1. Ensure handlers are defined in `ScapeConfig`
2. Check callback functions have correct syntax
3. Verify events are being fired: `console.log()` in handler
4. Test with simple alert first

```javascript
// ✅ Correct
window.ScapeConfig = {
    type: 'shape',
    onClick: (e) => console.log('Clicked!', e)
};

// ❌ Wrong
window.ScapeConfig = {
    type: 'shape',
    onClick: 'console.log("clicked")'  // String, not function
};
```

---

## Performance Best Practices

### Count Settings

| Device | Recommended Count | Notes |
|--------|-------------------|-------|
| Desktop | 25-40 | Smooth on modern browsers |
| Tablet | 15-25 | Balance between visual & performance |
| Mobile | 8-15 | Keep smooth on older devices |

### Size Recommendations

- **Small** (20-30px) - Use 40-50 elements
- **Medium** (40-60px) - Use 25-35 elements
- **Large** (70-100px) - Use 10-20 elements

### Animation Duration Recommendations

- **Fast** ('2s-3s') - Active, dynamic feel
- **Medium** ('3s-4s') - Default, balanced
- **Slow** ('5s+') - Relaxed, elegant feel

---

## Browser Compatibility

| Browser | Version | SVG | CSS | Status |
|---------|---------|-----|-----|--------|
| Chrome | 90+ | ✅ | ✅ | Fully supported |
| Firefox | 88+ | ✅ | ✅ | Fully supported |
| Safari | 14+ | ✅ | ✅ | Fully supported |
| Edge | 90+ | ✅ | ✅ | Fully supported |
| Mobile Chrome | Latest | ✅ | ✅ | Fully supported |
| Mobile Safari | 14+ | ✅ | ✅ | Fully supported |

---

## Support & Contribute

- **Issues:** [GitHub Issues](https://github.com/Ali-Cheikh/scape.js/issues)
- **Discussions:** [GitHub Discussions](https://github.com/Ali-Cheikh/scape.js/discussions)
- **Contributing:** [GitHub Contributing](https://github.com/Ali-Cheikh/scape.js/blob/main/CONTRIBUTING.md)

---

**Made with ❤️ by [Ali Cheikh](https://github.com/Ali-Cheikh)**