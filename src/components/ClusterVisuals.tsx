import {
  Backpack,
  Brain,
  Compass,
  Heart,
  MessageCircle,
  Palette,
  Trees,
  Utensils,
} from 'lucide-react';
import type { FeelingOption } from '../types';

export function ClusterIcon({
  clusterNumber,
  className = 'h-6 w-6',
}: {
  clusterNumber: number;
  className?: string;
}) {
  switch (clusterNumber) {
    case 1:
      return <Backpack className={className} aria-hidden="true" />;
    case 2:
      return <Brain className={className} aria-hidden="true" />;
    case 3:
      return <MessageCircle className={className} aria-hidden="true" />;
    case 4:
      return <Heart className={className} aria-hidden="true" />;
    case 5:
      return <Palette className={className} aria-hidden="true" />;
    case 6:
      return <Trees className={className} aria-hidden="true" />;
    case 7:
      return <Utensils className={className} aria-hidden="true" />;
    case 8:
    default:
      return <Compass className={className} aria-hidden="true" />;
  }
}

export function FeelingFaceSvg({ feelingId }: { feelingId: FeelingOption['id'] }) {
  switch (feelingId) {
    case 'happy':
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden="true">
          <circle cx="32" cy="32" r="28" fill="#FEF3C7" stroke="#059669" strokeWidth="3" />
          <circle cx="22" cy="25" r="3.5" fill="#1C1917" />
          <circle cx="42" cy="25" r="3.5" fill="#1C1917" />
          <path
            d="M20 37 C24 45, 40 45, 44 37"
            fill="none"
            stroke="#059669"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'sad':
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden="true">
          <circle cx="32" cy="32" r="28" fill="#E0F2FE" stroke="#0284C7" strokeWidth="3" />
          <circle cx="22" cy="25" r="3.5" fill="#1C1917" />
          <circle cx="42" cy="25" r="3.5" fill="#1C1917" />
          <path
            d="M21 44 C26 37, 38 37, 43 44"
            fill="none"
            stroke="#0284C7"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path d="M44 31 C46 34, 46 37, 44 38 C42 37, 42 34, 44 31 Z" fill="#38BDF8" />
        </svg>
      );
    case 'angry':
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden="true">
          <circle cx="32" cy="32" r="28" fill="#FFE4E6" stroke="#E11D48" strokeWidth="3" />
          <path d="M17 20 L26 24" stroke="#1C1917" strokeWidth="3" strokeLinecap="round" />
          <path d="M47 20 L38 24" stroke="#1C1917" strokeWidth="3" strokeLinecap="round" />
          <circle cx="23" cy="28" r="3" fill="#1C1917" />
          <circle cx="41" cy="28" r="3" fill="#1C1917" />
          <path
            d="M22 44 C27 39, 37 39, 42 44"
            fill="none"
            stroke="#E11D48"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'scared':
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden="true">
          <circle cx="32" cy="32" r="28" fill="#E0E7FF" stroke="#4F46E5" strokeWidth="3" />
          <circle cx="22" cy="25" r="4.5" fill="#FFFFFF" stroke="#1C1917" strokeWidth="2" />
          <circle cx="22" cy="25" r="2" fill="#1C1917" />
          <circle cx="42" cy="25" r="4.5" fill="#FFFFFF" stroke="#1C1917" strokeWidth="2" />
          <circle cx="42" cy="25" r="2" fill="#1C1917" />
          <ellipse cx="32" cy="42" rx="6" ry="7" fill="#FFFFFF" stroke="#4F46E5" strokeWidth="3" />
        </svg>
      );
    case 'excited':
    default:
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden="true">
          <circle cx="32" cy="32" r="28" fill="#FEF3C7" stroke="#D97706" strokeWidth="3" />
          <path
            d="M18 26 Q22 20 26 26"
            fill="none"
            stroke="#1C1917"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M38 26 Q42 20 46 26"
            fill="none"
            stroke="#1C1917"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M20 35 C22 48, 42 48, 44 35 Z"
            fill="#F59E0B"
            stroke="#92400E"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

export function KimsObjectSvg({ itemId }: { itemId: string }) {
  switch (itemId) {
    case 'spoon':
      return (
        <svg viewBox="0 0 64 64" className="h-12 w-12" aria-hidden="true">
          <ellipse cx="32" cy="19" rx="11" ry="14" fill="#E7E5E4" stroke="#57534E" strokeWidth="2.5" />
          <rect x="29" y="32" width="6" height="26" rx="3" fill="#D6D3D1" stroke="#57534E" strokeWidth="2.5" />
        </svg>
      );
    case 'pencil':
      return (
        <svg viewBox="0 0 64 64" className="h-12 w-12" aria-hidden="true">
          <rect x="25" y="14" width="14" height="34" rx="2" fill="#FBBF24" stroke="#78350F" strokeWidth="2.5" />
          <polygon points="25,48 39,48 32,59" fill="#FDE68A" stroke="#78350F" strokeWidth="2.5" />
          <polygon points="30,55 34,55 32,59" fill="#1C1917" />
          <rect x="25" y="8" width="14" height="7" rx="2" fill="#FB7185" stroke="#78350F" strokeWidth="2.5" />
        </svg>
      );
    case 'car':
      return (
        <svg viewBox="0 0 64 64" className="h-12 w-12" aria-hidden="true">
          <path
            d="M14 34 L20 20 L44 20 L50 34 Z"
            fill="#FCA5A5"
            stroke="#991B1B"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <rect x="9" y="33" width="46" height="14" rx="5" fill="#EF4444" stroke="#991B1B" strokeWidth="2.5" />
          <circle cx="20" cy="48" r="6" fill="#292524" stroke="#1C1917" strokeWidth="2" />
          <circle cx="44" cy="48" r="6" fill="#292524" stroke="#1C1917" strokeWidth="2" />
        </svg>
      );
    case 'ball':
      return (
        <svg viewBox="0 0 64 64" className="h-12 w-12" aria-hidden="true">
          <circle cx="32" cy="32" r="22" fill="#FDE047" stroke="#0F766E" strokeWidth="2.5" />
          <path d="M12 25 Q32 34 52 25" fill="none" stroke="#0F766E" strokeWidth="3" />
          <path d="M12 39 Q32 30 52 39" fill="none" stroke="#EA580C" strokeWidth="3" />
        </svg>
      );
    case 'book':
    default:
      return (
        <svg viewBox="0 0 64 64" className="h-12 w-12" aria-hidden="true">
          <rect x="13" y="11" width="38" height="42" rx="4" fill="#38BDF8" stroke="#075985" strokeWidth="2.5" />
          <rect x="13" y="11" width="8" height="42" rx="2" fill="#0284C7" stroke="#075985" strokeWidth="2" />
          <rect x="26" y="19" width="18" height="12" rx="2" fill="#FFFFFF" />
          <line x1="26" y1="38" x2="44" y2="38" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
  }
}
