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

    // Initialize drops with wave pattern
    for (let i = 0; i < columns; i++) {
      drops[i] = -Math.sin(i * 0.1) * 50 - Math.random() * 200;
    }

    let time = 0;

    let animationId: number;

    const draw = () => {
      time += 0.005;
      
      // Clear canvas with slight fade
      ctx.fillStyle = 'rgba(249, 250, 251, 0.03)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px 'Courier New', monospace`;
      ctx.textAlign = 'left';

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        
        // Use theme colors - brighter
        const colors = [
          'hsla(245, 75%, 65%, 0.9)',  // primary
          'hsla(185, 85%, 55%, 0.8)',  // accent  
          'hsla(245, 85%, 75%, 0.7)',  // primary-glow
        ];
        
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];

        // Wave pattern with diagonal movement
        const waveOffset = Math.sin(time + i * 0.2) * 3;
        const x = i * fontSize + waveOffset;
        const y = drops[i] * fontSize;

        if (y > 0) {
          ctx.fillText(char, x, y);
        }

        // Reset drop when it goes off screen with wave delay
        if (y > canvas.height && Math.random() > 0.99) {
          drops[i] = -Math.sin(i * 0.1) * 50 - 50;
        }

        // Slower movement
        drops[i] += 0.2;
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