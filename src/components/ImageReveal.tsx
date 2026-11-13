'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ImageRevealProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  maskColor?: string;
}

export function ImageReveal({
  src,
  alt,
  width,
  height,
  className,
  maskColor = 'bg-[#3E3E4E]',
}: ImageRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const isExternal = src.startsWith('http://') || src.startsWith('https://');

  return (
    <div
      ref={containerRef}
      className={cn('relative overflow-hidden group', className)}
    >
      {/* The stationary image */}
      {isExternal ? (
        // External hotlinks (Google Photos) load directly in the browser,
        // bypassing Next's optimizer so they work even when the server
        // cannot fetch them. See ExternalPhoto for the same approach.
        // eslint-disable-next-line @next/next/no-img-element -- direct external hotlink, intentionally unoptimized
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
      ) : width && height ? (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      )}

      {/* The sliding mask */}
      <div
        className={cn(
          'absolute inset-0 z-20 pointer-events-none',
          maskColor,
          isVisible ? 'reveal-mask-animation' : 'translate-x-0'
        )}
      />
    </div>
  );
}
