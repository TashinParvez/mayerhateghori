import type { Language, PrintablePosterSpec } from '../types';
import { formatCount } from './appLogic';

function wrapCanvasText(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
): string[] {
  const words = text.split(' ');
  const lines: string[] = [];
  let currentLine = '';

  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    if (ctx.measureText(testLine).width > maxWidth && currentLine) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  }
  if (currentLine) {
    lines.push(currentLine);
  }
  return lines;
}

/**
 * Generates a crisp, high-resolution printable PNG wall poster on the client
 * so Android phone users can save it directly to their Gallery and print/hang it on the wall.
 */
export function downloadWallPoster(spec: PrintablePosterSpec, lang: Language): boolean {
  if (typeof document === 'undefined') {
    return false;
  }

  try {
    const canvas = document.createElement('canvas');
    const width = 1080;
    const height = 1480;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      return false;
    }

    // Warm paper background
    ctx.fillStyle = '#FAF8F5';
    ctx.fillRect(0, 0, width, height);

    // Outer decorative card border
    ctx.fillStyle = '#FFFFFF';
    ctx.strokeStyle = spec.accentHex || '#0F766E';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.roundRect(44, 44, width - 88, height - 88, 36);
    ctx.fill();
    ctx.stroke();

    // Header band
    ctx.fillStyle = spec.accentHex || '#0F766E';
    ctx.beginPath();
    ctx.roundRect(44, 44, width - 88, 220, [36, 36, 0, 0]);
    ctx.fill();

    // Header text
    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.font = 'bold 44px "Noto Sans Bengali", "Plus Jakarta Sans", sans-serif';
    ctx.fillText(spec.posterTitle[lang], width / 2, 138);

    ctx.font = '500 28px "Noto Sans Bengali", "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = '#E6FFFA';
    const subLines = wrapCanvasText(ctx, spec.posterSubtitle[lang], width - 180);
    subLines.slice(0, 2).forEach((line, i) => {
      ctx.fillText(line, width / 2, 195 + i * 38);
    });

    // Items list with printable checkbox squares for the wall
    let y = 320;
    const itemHeight = Math.min(128, Math.floor(920 / Math.max(spec.items.length, 1)));

    spec.items.forEach((item, index) => {
      // Row box
      ctx.fillStyle = '#F7F5F0';
      ctx.strokeStyle = '#D6D3D1';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.roundRect(96, y, width - 192, itemHeight - 18, 20);
      ctx.fill();
      ctx.stroke();

      // Number circle
      ctx.fillStyle = spec.accentHex || '#0F766E';
      ctx.beginPath();
      ctx.arc(154, y + (itemHeight - 18) / 2, 26, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#FFFFFF';
      ctx.textAlign = 'center';
      ctx.font = 'bold 26px "Noto Sans Bengali", "Plus Jakarta Sans", sans-serif';
      ctx.fillText(
        formatCount(index + 1, lang),
        154,
        y + (itemHeight - 18) / 2 + 10,
      );

      // Item text
      ctx.fillStyle = '#1C1917';
      ctx.textAlign = 'left';
      ctx.font = 'bold 30px "Noto Sans Bengali", "Plus Jakarta Sans", sans-serif';
      const lines = wrapCanvasText(ctx, item[lang], width - 420);
      const startTextY =
        lines.length > 1
          ? y + (itemHeight - 18) / 2 - 6
          : y + (itemHeight - 18) / 2 + 10;
      lines.slice(0, 2).forEach((line, lineIdx) => {
        ctx.fillText(line, 205, startTextY + lineIdx * 36);
      });

      // Empty printable tick square on the right
      ctx.fillStyle = '#FFFFFF';
      ctx.strokeStyle = spec.accentHex || '#0F766E';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.roundRect(width - 190, y + (itemHeight - 18) / 2 - 26, 52, 52, 12);
      ctx.fill();
      ctx.stroke();

      y += itemHeight;
    });

    // Footer tip
    ctx.fillStyle = '#57534E';
    ctx.textAlign = 'center';
    ctx.font = '600 26px "Noto Sans Bengali", "Plus Jakarta Sans", sans-serif';
    const footerLines = wrapCanvasText(ctx, spec.footerNote[lang], width - 180);
    footerLines.slice(0, 2).forEach((line, idx) => {
      ctx.fillText(line, width / 2, height - 130 + idx * 36);
    });

    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = `${spec.filename}-${lang}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return true;
  } catch {
    return false;
  }
}
