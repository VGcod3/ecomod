import React, { useRef, useState, useCallback, useLayoutEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";
import {
  useViewportScroll,
  useTransform,
  useSpring,
  motion,
} from "framer-motion";

interface ResizeObserverEntry {
  readonly target: Element;
  readonly contentRect: DOMRectReadOnly;
}

interface ResizeObserverCallback {
  (entries: ResizeObserverEntry[], observer: IResizeObserver): void;
}

interface IResizeObserver {
  observe(target: Element): void;
  unobserve(target: Element): void;
  disconnect(): void;
}

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  const scrollRef = useRef(null);
  const [pageHeight, setPageHeight] = useState(0);

  const resizePageHeight = useCallback((entries: ResizeObserverEntry[]) => {
    for (const entry of entries) {
      setPageHeight(entry.contentRect.height);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(resizePageHeight);
    scrollRef.current && resizeObserver.observe(scrollRef.current);
    return () => resizeObserver.disconnect();
  }, [scrollRef, resizePageHeight]);

  const { scrollY } = useViewportScroll();
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
  const physics = {
    damping: 50,
    mass: 0,
  };

  const spring = useSpring(transform, physics);

  return (
    <>
      <motion.div
        ref={scrollRef}
        style={{ y: spring }}
        className="scroll-container"
      >
        {children}
      </motion.div>
    </>
  );
};

export default SmoothScroll;
