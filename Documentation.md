
update v1.0.1
# Scape.js Documentation

## Overview
Scape.js is a JavaScript library that creates animated background elements (shapes or images) with floating animations and hover effects.

## Important Note
All API methods should be called after the DOM is fully loaded. Wrap your code in an event listener:

````javascript
document.addEventListener('DOMContentLoaded', () => {
    // Your Scape.js code here
    // API calls and configuration
});
````

## Installation

Add Scape.js to your project:

````html
<script src="https://cdn.jsdelivr.net/gh/Ali-Cheikh/scape.js@main/scape.js"></script>
````


## Event Handling

### Adding Interactivity

````javascript
window.ScapeConfig = {
    // ...other config options
    onClick: (event) => {
        console.log('Element clicked:', event.target);
        // Your click handling code
    },
    onHover: (event) => {
        console.log('Element hovered:', event.target);
        // Your hover handling code
    }
};
````

## Examples

### Basic Shape Background

````javascript
document.addEventListener('DOMContentLoaded', () => {
    window.ScapeConfig = {
        type: 'shape',
        shape: 'star',
        count: 30,
        fillColor: 'hsla(200, 90%, 60%, 0.8)'
    };
});
````

### Image Background

````javascript
document.addEventListener('DOMContentLoaded', () => {
    window.ScapeConfig = {
        type: 'image',
        imageUrl: 'logo.png',
        count: 20,
        size: 50,
        opacity: 0.8
    };
});
````

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
## Advanced Examples

### Responsive Configuration
```javascript
document.addEventListener('DOMContentLoaded', () => {
    const isMobile = window.innerWidth < 768;
    
    window.ScapeConfig = {
        type: 'shape',
        shape: 'star',
        count: isMobile ? 15 : 30,
        size: isMobile ? 25 : 50,
        floatDistance: isMobile ? 15 : 30
    };
});
```

### Interactive Elements
```javascript
document.addEventListener('DOMContentLoaded', () => {
    window.ScapeConfig = {
        type: 'shape',
        shape: 'heart',
        count: 20,
        hoverScale: 1.2,
        onClick: (e) => {
            const element = e.target;
            element.style.fillColor = 'red';
            setTimeout(() => {
                element.style.fillColor = config.fillColor;
            }, 1000);
        }
    };
});
```

### Dynamic Updates Example

````javascript
document.addEventListener('DOMContentLoaded', () => {
    // Change shape on button click
    document.querySelector('#changeShape').addEventListener('click', () => {
        Scape.setShape('star');
    });

    // Pause/Resume animations on hover
    const container = document.querySelector('#animationContainer');
    container.addEventListener('mouseenter', () => {
        Scape.pause();
    });

    container.addEventListener('mouseleave', () => {
        Scape.resume();
    });
});
````

## Best Practices

1. Always wrap initialization code in `DOMContentLoaded`
2. Use error handling for API calls
3. Clean up event listeners when removing elements
4. Test on different screen sizes
5. Consider performance with high element counts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- IE11 (limited support)

## Performance Tips

1. Keep element count (`count`) reasonable
2. Use simpler shapes for better performance
3. Limit animation complexity
4. Consider reducing animations on mobile
5. Use appropriate spacing values

## Troubleshooting

If elements don't appear:
1. Check console for errors
2. Verify DOM is loaded
3. Confirm configuration object is valid
4. Check z-index conflicts
5. Verify element positioning