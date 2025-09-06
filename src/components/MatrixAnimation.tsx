import { useEffect, useRef } from 'react';

const MatrixAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const gridSize = 20;
    const cols = Math.floor(canvas.width / gridSize);
    const rows = Math.floor(canvas.height / gridSize);
    
    // Particles for drawing shapes
    const particles: Array<{
      x: number;
      y: number;
      char: string;
      opacity: number;
      life: number;
      maxLife: number;
    }> = [];

    let time = 0;
    let animationId: number;

    // Shape patterns - triangles, circles, rectangles
    const patterns = [
      // Triangle
      (centerX: number, centerY: number, size: number) => {
        const points = [];
        for (let i = 0; i < 3; i++) {
          const angle = (i * Math.PI * 2) / 3 - Math.PI / 2;
          points.push({
            x: centerX + Math.cos(angle) * size,
            y: centerY + Math.sin(angle) * size
          });
        }
        return points;
      },
      // Circle
      (centerX: number, centerY: number, size: number) => {
        const points = [];
        for (let i = 0; i < 12; i++) {
          const angle = (i * Math.PI * 2) / 12;
          points.push({
            x: centerX + Math.cos(angle) * size,
            y: centerY + Math.sin(angle) * size
          });
        }
        return points;
      },
      // Rectangle
      (centerX: number, centerY: number, size: number) => {
        const points = [];
        const half = size * 0.7;
        // Top edge
        for (let i = 0; i < 4; i++) {
          points.push({ x: centerX - half + (i * half / 2), y: centerY - half });
        }
        // Right edge
        for (let i = 0; i < 4; i++) {
          points.push({ x: centerX + half, y: centerY - half + (i * half / 2) });
        }
        // Bottom edge
        for (let i = 0; i < 4; i++) {
          points.push({ x: centerX + half - (i * half / 2), y: centerY + half });
        }
        // Left edge
        for (let i = 0; i < 4; i++) {
          points.push({ x: centerX - half, y: centerY + half - (i * half / 2) });
        }
        return points;
      }
    ];

    const addShape = () => {
      const pattern = patterns[Math.floor(Math.random() * patterns.length)];
      const centerX = Math.random() * canvas.width;
      const centerY = Math.random() * canvas.height;
      const size = 30 + Math.random() * 50;
      
      const points = pattern(centerX, centerY, size);
      
      points.forEach((point, index) => {
        setTimeout(() => {
          // Character transition: 0 -> @, 1 -> #
          const chars = ['0', '1'];
          const initialChar = chars[Math.floor(Math.random() * chars.length)];
          
          particles.push({
            x: point.x,
            y: point.y,
            char: initialChar,
            opacity: 1,
            life: 0,
            maxLife: 180 + Math.random() * 120
          });
        }, index * 50); // Staggered appearance
      });
    };

    const updateParticles = () => {
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        particle.life++;
        
        // Character morphing: 0 -> @ at halfway, 1 -> # at halfway
        if (particle.life === Math.floor(particle.maxLife / 2)) {
          if (particle.char === '0') {
            particle.char = '@';
          } else if (particle.char === '1') {
            particle.char = '#';
          }
        }
        
        // Fade out towards the end
        if (particle.life > particle.maxLife * 0.8) {
          particle.opacity = (particle.maxLife - particle.life) / (particle.maxLife * 0.2);
        }
        
        // Remove dead particles
        if (particle.life > particle.maxLife) {
          particles.splice(i, 1);
        }
      }
    };

    const draw = () => {
      time += 0.005;
      
      // Clear canvas with subtle fade
      ctx.fillStyle = 'rgba(249, 250, 251, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = 'bold 16px "Courier New", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Draw particles
      particles.forEach(particle => {
        const colors = [
          'hsla(245, 85%, 75%, ',  // primary-glow
          'hsla(185, 85%, 65%, ',  // accent
          'hsla(245, 75%, 65%, ',  // primary
        ];
        
        const colorIndex = particle.char === '@' ? 0 : particle.char === '#' ? 1 : 2;
        ctx.fillStyle = colors[colorIndex] + particle.opacity + ')';
        
        ctx.fillText(particle.char, particle.x, particle.y);
      });

      updateParticles();
      
      // Add new shapes periodically
      if (Math.random() < 0.003) {
        addShape();
      }

      animationId = requestAnimationFrame(draw);
    };

    // Start animation
    draw();
    
    // Add initial shapes
    setTimeout(() => addShape(), 500);
    setTimeout(() => addShape(), 1500);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0"
      style={{ 
        pointerEvents: 'none',
        opacity: 0.6,
        zIndex: 1
      }}
    />
  );
};

export default MatrixAnimation;