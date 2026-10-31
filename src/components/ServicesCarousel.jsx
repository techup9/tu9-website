import { useCallback, useEffect, useState } from 'react';
import { useSwipe } from '../hooks/useSwipe.js';

// Replaces the Owl Carousel config: one item at a time, looping, 3s autoplay,
// and new items "flip in" (animate.css flipInX from core.animation.css).
const AUTOPLAY_INTERVAL = 3000;

export default function ServicesCarousel({ items }) {
  const [active, setActive] = useState(0);
  const [animated, setAnimated] = useState(false);
  const [tick, setTick] = useState(0);

  const goTo = useCallback(
    (index) => {
      setActive((index + items.length) % items.length);
      setAnimated(true);
      setTick((t) => t + 1);
    },
    [items.length],
  );

  useEffect(() => {
    const timer = setTimeout(() => goTo(active + 1), AUTOPLAY_INTERVAL);
    return () => clearTimeout(timer);
  }, [active, tick, goTo]);

  const swipeHandlers = useSwipe({
    onSwipeLeft: () => goTo(active + 1),
    onSwipeRight: () => goTo(active - 1),
  });

  return (
    <div className="services_carousel">
      <div className="services_carousel_stage" {...swipeHandlers}>
        {items.map((service, i) => {
          const isActive = i === active;
          return (
            <div
              key={isActive ? `active-${tick}` : i}
              className={`services_carousel_item${isActive ? ' is-active' : ''}${isActive && animated ? ' animated flipInX' : ''}`}
              aria-hidden={!isActive}
            >
              <div className="item" style={{ background: 'white', padding: 25 }}>
                <h2 className="sc_services_title sc_item_title">{service.title}</h2>
                <div className="sc_testimonial_content" style={{ textAlign: 'justify' }}>
                  {service.text}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="services_carousel_dots">
        {items.map((service, i) => (
          <button
            key={service.title}
            type="button"
            className={`services_carousel_dot${i === active ? ' active' : ''}`}
            aria-label={`Show ${service.title}`}
            aria-current={i === active}
            onClick={() => goTo(i)}
          >
            <span></span>
          </button>
        ))}
      </div>
    </div>
  );
}
