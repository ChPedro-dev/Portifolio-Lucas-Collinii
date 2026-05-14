import { useEffect, useRef } from 'react';
import './Cursor.css';

export default function Cursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    let mx = 0, my = 0, rx = 0, ry = 0;
    let rafId;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
    };

    const animRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      rafId = requestAnimationFrame(animRing);
    };

    document.addEventListener('mousemove', onMove);
    rafId = requestAnimationFrame(animRing);

    const onEnter = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(2)';
      ring.style.opacity = '0.3';
    };
    const onLeave = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      ring.style.opacity = '0.6';
    };

    const addHover = () => {
      document.querySelectorAll('a, button, .track, .proj-card').forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    // Run after DOM is fully painted
    const timer = setTimeout(addHover, 500);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}
