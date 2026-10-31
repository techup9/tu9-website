import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useSwipe } from '../hooks/useSwipe.js';

// Layout grid and timing taken from the original Revolution Slider config.
const GRID_WIDTH = 1170;
const GRID_HEIGHT = 810;
const SLIDE_DELAY = 9000;

function Layer({ x = 0, y = 0, animation, delay = 0, className = '', children }) {
  return (
    <div className="hero_layer" style={{ '--x': `${x}px`, '--y': `${y}px` }}>
      <div className={`hero_anim hero_anim--${animation} ${className}`} style={{ animationDelay: `${delay}ms` }}>
        {children}
      </div>
    </div>
  );
}

const withBreaks = (lines) =>
  lines.flatMap((line, i) => (i === 0 ? [line] : [<br key={i} />, line]));

export default function HeroSlider({ slides }) {
  const wrapperRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [active, setActive] = useState(0);
  // Bumped each time a slide is shown so its layer animations replay.
  const [runs, setRuns] = useState(() => slides.map(() => 0));
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (index) => {
      const next = (index + slides.length) % slides.length;
      setActive(next);
      setRuns((prev) => prev.map((count, i) => (i === next ? count + 1 : count)));
    },
    [slides.length],
  );

  useLayoutEffect(() => {
    const el = wrapperRef.current;
    const observer = new ResizeObserver(([entry]) => {
      setScale(Math.min(1, entry.contentRect.width / GRID_WIDTH));
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (paused || slides.length < 2) return undefined;
    const timer = setTimeout(() => goTo(active + 1), SLIDE_DELAY);
    return () => clearTimeout(timer);
  }, [active, paused, goTo, slides.length]);

  const swipeHandlers = useSwipe({
    threshold: 75,
    onSwipeLeft: () => goTo(active + 1),
    onSwipeRight: () => goTo(active - 1),
  });

  return (
    <section
      id="mainslider_1"
      className="slider_wrap slider_fullscreen slider_engine_revo slider_alias_home-default mainslider_1"
    >
      <div
        ref={wrapperRef}
        className="rev_slider_wrapper hero_slider"
        style={{ height: GRID_HEIGHT * scale }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        {...swipeHandlers}
      >
        {slides.map((slide, i) => {
          const { image, layers } = slide;
          return (
            <div
              key={i}
              className={`hero_slide${i === active ? ' is-active' : ''}`}
              aria-hidden={i !== active}
            >
              <div
                key={runs[i]}
                className="hero_grid"
                style={{ width: GRID_WIDTH, height: GRID_HEIGHT, transform: `translate(-50%, -50%) scale(${scale})` }}
              >
                <Layer x={image.offsetX} animation="fade">
                  <img src={image.src} alt="" width={image.width} height={image.height} draggable={false} />
                </Layer>
                <Layer {...layers.title} animation="zoom" delay={550} className="tp-caption black-65">
                  {withBreaks(slide.title)}
                </Layer>
                <Layer {...layers.text} animation="rise" className="tp-caption black-20 rs-xs-hide">
                  {withBreaks(slide.text)}
                </Layer>
                <Layer {...layers.button} animation="rise" className="tp-caption button rs-xs-hide">
                  <a href="#contact-us" tabIndex={i === active ? undefined : -1}>Get in touch</a>
                </Layer>
              </div>
            </div>
          );
        })}

        {slides.length > 1 && (
          <div className="tp-bullets hermes hero_bullets">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`tp-bullet${i === active ? ' selected' : ''}`}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === active}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
