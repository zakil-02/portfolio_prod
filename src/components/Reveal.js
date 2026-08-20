import { useEffect, useRef, useState } from 'react';

/**
 * Lightweight scroll-reveal wrapper backed by IntersectionObserver.
 * Adds `.reveal` (+ optional `.delay-N`) and toggles `.is-visible` once
 * the element scrolls into view. Falls back to visible when IO is absent.
 */
export const Reveal = ({ children, className = '', delay = 0 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay ? ` delay-${delay}` : '';
  const classes = `reveal${visible ? ' is-visible' : ''}${delayClass}${className ? ` ${className}` : ''}`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};

export default Reveal;
