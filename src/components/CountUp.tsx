'use client';

import React, { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  /** Final number to count to */
  to: number;
  /** Animation length in ms */
  duration?: number;
  /** Appended after the number, e.g. "+" */
  suffix?: string;
}

/**
 * Counts from 0 up to `to` once the element scrolls into view.
 * Renders 0 on the server and on first paint so hydration always matches.
 */
export function CountUp({ to, duration = 1800, suffix = '' }: CountUpProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        const startTime = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          // ease-out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.round(to * eased));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };

        frame = requestAnimationFrame(tick);
        observer.unobserve(entry.target);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to, duration]);

  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}
