/**
 * Canvas Animation Controllers
 * Manages background and preview canvas rendering
 */

const CanvasAnimations = {
  ACID: 'rgba(200,255,0,',

  // Background canvas animation
  initBackgroundCanvas() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let W, H, particles = [];

    const SHAPES_DEF = [
      { name: 'star', pts: 5 }, 
      { name: 'hexagon', pts: 6 },
      { name: 'triangle', pts: 3 }, 
      { name: 'diamond', pts: 4 }
    ];

    const randShape = () => SHAPES_DEF[Math.floor(Math.random() * SHAPES_DEF.length)];

    const spawnParticle = () => {
      const s = randShape();
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        size: 4 + Math.random() * 14,
        opacity: 0.03 + Math.random() * 0.07,
        vx: (Math.random() - 0.5) * 0.18,
        vy: -0.1 - Math.random() * 0.2,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.008,
        shape: s,
        hue: Math.random() > 0.7 ? 'acid' : 'white'
      };
    };

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const count = Math.min(40, Math.floor((W * H) / 28000));
      for (let i = 0; i < count; i++) {
        const p = spawnParticle();
        p.y = Math.random() * H;
        particles.push(p);
      }
    };

    const drawPolygon = (ctx, pts, size) => {
      ctx.beginPath();
      for (let i = 0; i < pts; i++) {
        const a = (Math.PI * 2 / pts) * i - Math.PI / 2;
        const x = Math.cos(a) * size;
        const y = Math.sin(a) * size;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.closePath();
    };

    const tick = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotSpeed;
        
        if (p.y + p.size < 0) {
          p.y = H + p.size;
          p.x = Math.random() * W;
        }
        if (p.x < -p.size) p.x = W + p.size;
        if (p.x > W + p.size) p.x = -p.size;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.opacity;

        const color = p.hue === 'acid' ? this.ACID + '1)' : 'rgba(255,255,255,1)';
        ctx.strokeStyle = color;
        ctx.lineWidth = 0.8;
        ctx.fillStyle = p.hue === 'acid' ? this.ACID + '0.3)' : 'rgba(255,255,255,0.05)';

        drawPolygon(ctx, p.shape.pts, p.size);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      });
      requestAnimationFrame(tick);
    };

    resize();
    tick();
    window.addEventListener('resize', resize);
  },

  // Preview canvas animation
  initPreviewCanvas() {
    const canvas = document.getElementById('preview-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let currentShape = 0;
    const shapes = [5, 6, 3, 4, 8];
    const shapeNames = ['star', 'hexagon', 'triangle', 'diamond', 'octagon'];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const spawn = () => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        size: 6 + Math.random() * 20,
        vy: -0.4 - Math.random() * 0.4,
        vx: (Math.random() - 0.5) * 0.3,
        rot: Math.random() * Math.PI * 2,
        rs: (Math.random() - 0.5) * 0.015,
        op: 0.15 + Math.random() * 0.55,
        pts: shapes[currentShape]
      };
    };

    const init = () => {
      particles = [];
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      for (let i = 0; i < 18; i++) {
        const p = spawn();
        p.y = Math.random() * H;
        particles.push(p);
      }
    };

    const drawPoly = (pts, size) => {
      ctx.beginPath();
      for (let i = 0; i < pts; i++) {
        const a = (Math.PI * 2 / pts) * i - Math.PI / 2;
        i === 0 
          ? ctx.moveTo(Math.cos(a) * size, Math.sin(a) * size)
          : ctx.lineTo(Math.cos(a) * size, Math.sin(a) * size);
      }
      ctx.closePath();
    };

    const tick = () => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      ctx.clearRect(0, 0, W, H);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.rs;
        
        if (p.y + p.size < 0) {
          p.y = H + p.size;
          p.x = Math.random() * W;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.globalAlpha = p.op;
        ctx.strokeStyle = this.ACID + '0.9)';
        ctx.fillStyle = this.ACID + '0.15)';
        ctx.lineWidth = 1;
        drawPoly(p.pts, p.size);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      });
      
      requestAnimationFrame(tick);
    };

    resize();
    init();
    tick();

    // cycle shapes every 2s
    setInterval(() => {
      currentShape = (currentShape + 1) % shapes.length;
      particles.forEach(p => p.pts = shapes[currentShape]);
    }, 2000);
  },

  // Initialize all canvases
  init() {
    this.initBackgroundCanvas();
    this.initPreviewCanvas();
  }
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CanvasAnimations;
}
