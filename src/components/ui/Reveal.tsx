'use client';

import React, { useEffect, useRef, useState } from 'react';

export interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'none';
  className?: string;
  threshold?: number;
}

/**
 * Reusable Reveal component.
 * Modular, lightweight (native IntersectionObserver + CSS tokens in globals.css).
 * Zero hardcoded styles; timings & easing curves are driven by global CSS variables.
 */
export default function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  threshold = 0.12,
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // Fallback if browser doesn't support IntersectionObserver
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const hiddenClass = direction === 'none' ? 'reveal-hidden-none' : 'reveal-hidden-up';

  return (
    <div
      ref={elementRef}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal-container ${isVisible ? 'reveal-visible' : hiddenClass} ${className}`}
    >
      {children}
    </div>
  );
}
