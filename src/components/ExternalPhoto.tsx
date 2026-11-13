'use client';

import * as React from 'react';
import { ImageOff } from 'lucide-react';
import { cn } from '@/lib/utils';

type ExternalPhotoProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  eager?: boolean;
  fit?: 'cover' | 'contain';
};

/**
 * Load hotlinked photos directly in the visitor's browser. Deliberately bypass
 * Next's image optimizer: these external URLs are not hosted by this app, and
 * the browser must be able to load them even when the server cannot fetch them.
 */
export function ExternalPhoto({
  src,
  alt,
  className,
  imageClassName,
  eager = false,
  fit = 'cover',
}: ExternalPhotoProps) {
  const [status, setStatus] = React.useState<'loading' | 'loaded' | 'error'>('loading');

  return (
    <div className={cn('relative overflow-hidden bg-[#2D2B44]/10', className)}>
      {status === 'loading' && (
        <div className="absolute inset-0 animate-pulse bg-[#2D2B44]/10" aria-hidden="true" />
      )}
      {status === 'error' ? (
        <div role="img" aria-label={alt} className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#F0EEEF] p-5 text-center text-[#2D2B44]">
          <ImageOff className="h-7 w-7 text-[#7B1E3A]" aria-hidden="true" />
          <span className="text-sm font-bold">Photo temporarily unavailable</span>
          <span className="text-xs leading-relaxed text-muted-foreground">The original may still be available in the Google Photos album.</span>
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element -- direct external hotlink, intentionally unoptimized
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          referrerPolicy="no-referrer"
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
          className={cn(
            'h-full w-full transition-opacity duration-500',
            fit === 'contain' ? 'object-contain' : 'object-cover',
            status === 'loading' && 'opacity-0',
            imageClassName
          )}
        />
      )}
    </div>
  );
}
