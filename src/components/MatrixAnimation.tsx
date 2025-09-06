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
    const fontSize = 18;
    const spacing = 24; // Wider spacing
    const columns = Math.floor(canvas.width / spacing);
    const rows = Math.floor(canvas.height / spacing);
    const drops: number[] = [];

    // Initialize drops with sequential delay for smooth wave effect
    for (let i = 0; i < columns; i++) {
      drops[i] = -(i * 3); // Sequential start with delay
    }

    let time = 0;

    let animationId: number;

    const draw = () => {
      time += 0.01;
      
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(249, 250, 251, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `bold ${fontSize}px 'Courier New', monospace`;
      ctx.textAlign = 'center';

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        
        // Use theme colors - brighter and more opaque
        const colors = [
          'hsla(245, 75%, 65%, 0.95)',  // primary
          'hsla(185, 85%, 55%, 0.9)',   // accent  
          'hsla(245, 85%, 75%, 0.85)',  // primary-glow
        ];
        
        ctx.fillStyle = colors[i % colors.length]; // Cycle through colors

        // Smooth sequential movement
        const x = i * spacing + spacing / 2;
        const y = (drops[i] + time * 30) % (canvas.height + 100);

        if (y > 0 && y < canvas.height) {
          ctx.fillText(char, x, y);
        }

        // Create trailing effect - draw previous characters with less opacity
        for (let trail = 1; trail <= 5; trail++) {
          const trailY = y - trail * spacing;
          if (trailY > 0 && trailY < canvas.height) {
            const trailOpacity = (6 - trail) / 6;
            const trailColor = colors[i % colors.length].replace(/0\.\d+\)$/, `${trailOpacity * 0.4})`);
            ctx.fillStyle = trailColor;
            ctx.fillText(chars[(trail + Math.floor(time * 10)) % chars.length], x, trailY);
          }
        }

        // Reset when completely off screen
        if (drops[i] > canvas.height / spacing + 10) {
          drops[i] = -(i * 2) - 10;
        }
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