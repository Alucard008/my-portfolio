import { useEffect, useRef } from 'react';

const SwirlCursor = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const animationRef = useRef();
  const MAX_PARTICLES = 300;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const colors = ['#ff0080', '#7928ca', '#0070f3', '#00ffae', '#ffc700'];
    let mouse = { x: width / 2, y: height / 2 };

    window.addEventListener('resize', () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    });

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      particles.current.push(new Particle(e.clientX, e.clientY));
      if (particles.current.length > MAX_PARTICLES) {
        particles.current.splice(0, particles.current.length - MAX_PARTICLES);
      }
    });

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 3 + 1.2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.angle = Math.random() * Math.PI * 2;
        this.velocity = Math.random() * 1.2 + 0.5;
        this.alpha = 1;
      }

      update() {
        this.angle += 0.055;
        this.x += Math.cos(this.angle) * this.velocity;
        this.y += Math.sin(this.angle) * this.velocity;
        this.alpha -= 0.012;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${this.color}${Math.floor(this.alpha * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = particles.current.length - 1; i >= 0; i--) {
        const p = particles.current[i];
        p.update();
        p.draw();
        if (p.alpha <= 0) {
          particles.current.splice(i, 1);
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    />
  );
};

export default SwirlCursor;
