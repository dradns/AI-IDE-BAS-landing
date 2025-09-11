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
      
      // Clear canvas with slight fade effect
      ctx.fillStyle = 'rgba(240, 248, 252, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `bold ${fontSize}px 'Courier New', monospace`;
      ctx.textAlign = 'center';

      for (let i = 0; i < columns; i++) {
        const x = i * fontSize + fontSize / 2;
        
        // Update character trail for this column
        if (drops[i] > 0) {
          const currentRow = Math.floor(drops[i]);
          
          // Add new character at head of trail
          if (currentRow < canvas.height / fontSize + 10) {
            while (columnChars[i].length <= currentRow) {
              const baseChar = baseChars[Math.floor(Math.random() * baseChars.length)];
              columnChars[i].push(baseChar);
              charAges[i].push(0);
            }
          }
        }
        
        // Draw the entire character trail for this column
        for (let j = 0; j < columnChars[i].length; j++) {
          const y = j * fontSize;
          
          if (y > canvas.height + fontSize) continue;
          if (j > drops[i] + 15) continue; // Limit trail length
          
          let char = columnChars[i][j];
          charAges[i][j]++;
          
          // Transform 0->@ and 1->## after some time
          if (charAges[i][j] > 30) {
            if (char === '0') char = '@';
            if (char === '1') char = '#';
          }
          
          // Calculate opacity based on position relative to head and vertical position
          const distanceFromHead = Math.abs(j - drops[i]);
          const verticalPosition = y / canvas.height; // 0 at top, 1 at bottom
          
          // Create fade effect towards bottom
          let verticalFade = 1;
          if (verticalPosition > 0.7) {
            verticalFade = Math.max(0, (1 - verticalPosition) / 0.3);
          }
          
          let opacity = Math.max(0.1, (1 - distanceFromHead * 0.1) * verticalFade);
          
          // Brightest at the head - морские оттенки
          if (distanceFromHead < 1) {
            opacity = opacity;
            ctx.fillStyle = `hsla(195, 85%, 60%, ${opacity})`; // Яркий морской бирюзовый
          } else if (distanceFromHead < 3) {
            ctx.fillStyle = `hsla(190, 70%, 50%, ${opacity})`; // Темнее бирюзовый
          } else {
            ctx.fillStyle = `hsla(200, 60%, 40%, ${opacity * 0.6})`; // Темно-морской
          }
          
          if (y > 0 && y < canvas.height + fontSize) {
            ctx.fillText(char, x, y);
          }
        }
        
        // Move drop down smoothly and consistently - медленнее
        drops[i] += 0.2;
        
        // Reset when completely off screen
        if (drops[i] * fontSize > canvas.height + 200) {
          drops[i] = -Math.random() * 50 - 10;
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
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0"
        style={{ 
          pointerEvents: 'none',
          opacity: 0.15,
          zIndex: -1
        }}
      />
      {/* Gradient overlay for vertical fade */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(240, 248, 252, 0.3) 60%, rgba(240, 248, 252, 0.7) 80%, rgba(240, 248, 252, 1) 100%)',
          zIndex: -1
        }}
      />
    </>
  );
};

export default MatrixAnimation;