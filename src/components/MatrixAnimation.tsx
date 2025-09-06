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

    // Matrix characters
    const chars = ['0', '1', '@', '#'];
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -500;
    }

    // Get CSS custom property values
    const getColor = (property: string) => {
      const value = getComputedStyle(document.documentElement).getPropertyValue(property);
      return `hsl(${value})`;
    };

    const draw = () => {
      // Semi-transparent background for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        
        // Use different colors from design system
        const colors = [
          getColor('--primary'),
          getColor('--accent'),
          getColor('--primary-glow'),
        ];
        
        // Make some characters brighter
        const opacity = Math.random() > 0.7 ? 1 : 0.3;
        const color = colors[Math.floor(Math.random() * colors.length)];
        ctx.fillStyle = color.replace(')', `, ${opacity})`).replace('hsl(', 'hsla(');

        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(char, x, y);

        // Reset drop when it goes off screen
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 opacity-20"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default MatrixAnimation;