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
      // Force canvas to cover full width
      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters - simplified for transformation
    const baseChars = ['0', '1'];
    const transformChars = ['@', '#'];
    const fontSize = 18;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];
    const columnChars: string[][] = [];
    const charAges: number[][] = [];

    // Initialize drops and character trails
    for (let i = 0; i < columns; i++) {
      drops[i] = -Math.random() * 100;
      columnChars[i] = [];
      charAges[i] = [];
    }

    let animationId: number;
    let time = 0;

    const draw = () => {
      time += 0.01;
      
      // Clear canvas completely each frame
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = `bold ${fontSize}px 'Courier New', monospace`;
      ctx.textAlign = 'center';

      for (let i = 0; i < columns; i++) {
        const x = i * fontSize + fontSize / 2;
        
        // Update character trail for this column
        if (drops[i] >= 0) {
          const currentRow = Math.floor(drops[i]);
          
          // Add new characters as we progress
          while (columnChars[i].length <= currentRow + 15) {
            const baseChar = baseChars[Math.floor(Math.random() * baseChars.length)];
            columnChars[i].push(baseChar);
            charAges[i].push(0);
          }
        }
        
        // Draw the character trail with fade effect
        const trailLength = 20;
        for (let j = 0; j < columnChars[i].length; j++) {
          const y = j * fontSize;
          
          // Skip if outside screen bounds
          if (y < -fontSize || y > canvas.height + fontSize) continue;
          
          let char = columnChars[i][j];
          charAges[i][j]++;
          
          // Transform characters over time
          if (charAges[i][j] > 30) {
            if (char === '0') char = '@';
            if (char === '1') char = '#';
          }
          
          // Calculate position relative to current drop head
          const distanceFromHead = Math.abs(j - drops[i]);
          
          // Create fading effect from top to bottom
          const fadeFromTop = Math.min(1, y / (fontSize * 5)); // Fade in first 5 rows
          const fadeFromBottom = j > drops[i] ? Math.max(0, 1 - (distanceFromHead / trailLength)) : 1;
          
          let opacity = fadeFromTop * fadeFromBottom;
          
          if (opacity <= 0.05) continue;
          
          // Color based on position
          if (j >= drops[i] - 1 && j <= drops[i] + 1) {
            // Head - brightest
            ctx.fillStyle = `hsla(245, 85%, 80%, ${opacity})`;
          } else if (j > drops[i]) {
            // Trail - accent color
            ctx.fillStyle = `hsla(185, 85%, 60%, ${opacity * 0.8})`;
          } else {
            // Above head - dimmer
            ctx.fillStyle = `hsla(245, 75%, 70%, ${opacity * 0.6})`;
          }
          
          ctx.fillText(char, x, y);
        }
        
        // Move drop down
        drops[i] += 0.2;
        
        // Reset when trail has passed through screen
        if (drops[i] > (canvas.height / fontSize) + trailLength) {
          drops[i] = -Math.random() * 10;
          columnChars[i] = [];
          charAges[i] = [];
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