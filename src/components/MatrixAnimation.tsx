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
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    let animationId: number;

    const draw = () => {
      // Clear canvas with slight fade
      ctx.fillStyle = 'rgba(249, 250, 251, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px 'Courier New', monospace`;
      ctx.textAlign = 'left';

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        
        // Use theme colors - primary, accent, primary-glow
        const colors = [
          'hsla(245, 75%, 65%, 0.8)',  // primary
          'hsla(185, 85%, 55%, 0.7)',  // accent  
          'hsla(245, 85%, 75%, 0.6)',  // primary-glow
        ];
        
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];

        const x = i * fontSize;
        const y = drops[i] * fontSize;

        if (y > 0) {
          ctx.fillText(char, x, y);
        }

        // Reset drop when it goes off screen
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = -100;
        }

        drops[i]++;
      }

      animationId = requestAnimationFrame(draw);
    };

    // Start animation
    draw();

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
        opacity: 0.4,
        zIndex: 1
      }}
    />
  );
};

export default MatrixAnimation;