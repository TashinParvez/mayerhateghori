import { useState } from 'react';
import { ImageOff } from 'lucide-react';
import { APP_IMAGES, type AppImageKey } from '../data/images';
import type { Language } from '../types';

interface SafeImageProps {
  imageKey: AppImageKey;
  lang: Language;
  className?: string;
  aspectClass?: string;
}

export function SafeImage({
  imageKey,
  lang,
  className = '',
  aspectClass = 'aspect-[4/3]',
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);
  const asset = APP_IMAGES[imageKey];
  const alt = lang === 'bn' ? asset.altBn : asset.altEn;

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-2 rounded-2xl border border-stone-200 bg-gradient-to-br from-teal-50 via-stone-50 to-amber-50 p-6 text-center text-stone-600 ${aspectClass} ${className}`}
      >
        <ImageOff className="h-8 w-8 text-teal-700" aria-hidden="true" />
        <p className="max-w-xs text-sm font-medium leading-relaxed">{alt}</p>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden rounded-2xl bg-stone-100 ${aspectClass} ${className}`}>
      <img
        src={asset.src}
        alt={alt}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
