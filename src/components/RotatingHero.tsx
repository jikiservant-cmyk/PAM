'use client';

import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { KineticHeadline } from './KineticHeadline';

export type HeroSlide = {
  eyebrow: string;
  lines: string[];
  image: string;
};

interface RotatingHeroProps {
  slides: HeroSlide[];
  /** How long each slide stays on screen, in ms */
  interval?: number;
  /** How long the black-out transition takes, in ms */
  blackoutDuration?: number;
}

/**
 * Hero that periodically blacks out completely, swaps words + background,
 * then fades back in. The layout mirrors the reference site: a thin gold
 * rule, a letterspaced eyebrow, a large light serif headline, a second rule.
 */
export function RotatingHero({
  slides,
  interval = 6500,
  blackoutDuration = 900,
}: RotatingHeroProps) {
  const [index, setIndex] = useState(0);
  const [blackedOut, setBlackedOut] = useState(false);

  useEffect(() => {
    if (slides.length < 2) return;

    let swapTimer: ReturnType<typeof setTimeout>;

    const cycle = setInterval(() => {
      // 1. fade the whole section to black
      setBlackedOut(true);

      // 2. while it is fully black, swap the content
      swapTimer = setTimeout(() => {
        setIndex((i) => (i + 1) % slides.length);
        setBlackedOut(false);
      }, blackoutDuration);
    }, interval);

    return () => {
      clearInterval(cycle);
      clearTimeout(swapTimer);
    };
  }, [slides.length, interval, blackoutDuration]);

  const slide = slides[index];

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#04301F]">
      {/* Parallax background layer */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ clipPath: 'inset(0)' }}
      >
        <div
          className="fixed inset-0 w-full h-full bg-center bg-cover -z-10 transition-opacity"
          style={{
            backgroundImage: `url(${slide.image})`,
            transitionDuration: `${blackoutDuration}ms`,
            opacity: blackedOut ? 0 : 1,
          }}
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0.75)_100%)]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 flex justify-center">
        <div
          className="flex flex-col items-center text-white transition-opacity"
          style={{
            transitionDuration: `${blackoutDuration * 0.7}ms`,
            opacity: blackedOut ? 0 : 1,
          }}
        >
          <div className="w-px h-16 md:h-24 bg-[#FFB800]/70 mb-10" />

          {/* key forces the kinetic reveal to replay on every slide */}
          <KineticHeadline
            key={`eyebrow-${index}`}
            lines={[slide.eyebrow]}
            className="text-[10px] md:text-xs font-normal uppercase tracking-[0.42em] mb-8 font-headline text-center text-white/85"
            staggerDelay={0}
          />

          <KineticHeadline
            key={`headline-${index}`}
            lines={slide.lines}
            className="text-5xl md:text-7xl lg:text-[7.5rem] font-normal tracking-[-0.02em] leading-[1.05] font-hero text-center"
            staggerDelay={0.12}
          />

          <div className="w-px h-16 md:h-24 bg-[#FFB800]/70 mt-10 mb-8" />

          <ChevronDown className="h-8 w-8 animate-bounce opacity-50" strokeWidth={1.25} />

          {/* Slide indicators */}
          <div className="flex items-center space-x-3 mt-10">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => {
                  setBlackedOut(true);
                  setTimeout(() => {
                    setIndex(i);
                    setBlackedOut(false);
                  }, blackoutDuration);
                }}
                className={`h-px transition-all duration-500 ${
                  i === index ? 'w-10 bg-[#FFB800]' : 'w-5 bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Full-section black-out veil */}
      <div
        className="absolute inset-0 z-20 bg-black pointer-events-none transition-opacity"
        style={{
          transitionDuration: `${blackoutDuration}ms`,
          opacity: blackedOut ? 1 : 0,
        }}
      />
    </section>
  );
}
