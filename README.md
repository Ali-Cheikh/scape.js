# scape.js
A JavaScript package for creating beautiful, animated backgrounds 📦 

## What Is This?

The **Scape.js** is a lightweight JavaScript package that allows you to create beautiful, animated backgrounds for your website. Whether you want floating shapes or custom images, this package has you covered.

## How It Works

The package dynamically generates shapes or images and animates them across the screen. You can customize the type, size, color, and animation of the elements.

```javascript
// Example Configuration
window.ScapeConfig = {
  type: 'shape', // 'image' or 'shape'
  shape: 'star', // Shape type
  count: 30, // Number of elements
  size: 10, // Size of each element
  fillColor: 'hsla(200, 90%, 60%, 0.8)', // Fill color
  strokeColor: 'rgba(255, 255, 255, 0.5)', // Stroke color
  strokeWidth: 2, // Stroke width
};
```

## How to Implement

Follow these steps to add **Scape.js** to your website:

1. Include the script in your HTML file:
```html
<script src="https://ali-cheikh.github.io/scape.js"></script>
<script src="config.js"></script>
```

2. Create a `config.js` file to customize the background:
```javascript
window.ScapeConfig = {
  type: 'shape',
  shape: 'star',
  count: 30,
  size: 100,
  fillColor: 'hsla(200, 90%, 60%, 0.8)',
  strokeColor: 'rgba(255, 255, 255, 0.5)',
  strokeWidth: 2,
};
```

3. Add the following CSS to your project (optional for animations):
```css
@keyframes float {
  0% { transform: translate(0, 0) rotate(var(--rotation)); }
  50% { transform: translate(0, 30px) rotate(var(--rotation)); }
  100% { transform: translate(0, 0) rotate(var(--rotation)); }
}
```

## API Documentation

The `ScapeJs` namespace provides methods for managing the animated background:

- `refresh()`: Regenerates the background
- `updateConfig()`: Updates configuration and regenerates background
- `destroy()`: Removes all background elements

For detailed configuration options, see the [documentation](Documentation.md).
