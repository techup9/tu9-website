import { useRef } from 'react';

// Minimal horizontal swipe detection for mouse and touch via pointer events.
export function useSwipe({ threshold = 50, onSwipeLeft, onSwipeRight }) {
  const start = useRef(null);

  return {
    onPointerDown: (e) => {
      start.current = { x: e.clientX, y: e.clientY };
    },
    onPointerUp: (e) => {
      if (!start.current) return;
      const dx = e.clientX - start.current.x;
      const dy = e.clientY - start.current.y;
      start.current = null;
      if (Math.abs(dx) < threshold || Math.abs(dx) < Math.abs(dy)) return;
      if (dx < 0) onSwipeLeft?.();
      else onSwipeRight?.();
    },
    onPointerCancel: () => {
      start.current = null;
    },
  };
}
