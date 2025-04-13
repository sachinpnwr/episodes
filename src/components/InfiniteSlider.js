"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "../css/InfiniteSlider.module.css";

const InfiniteSlider = ({ images }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const startScroll = () => {
      let scrollAmount = 0;
      const scrollStep = 5;

      const loop = () => {
        scrollAmount += scrollStep;
        if (scrollAmount >= container.scrollWidth / 2) {
          scrollAmount = 0;
        }
        container.scrollLeft = scrollAmount;
        requestAnimationFrame(loop);
      };

      requestAnimationFrame(loop);
    };

    startScroll();
  }, []);

  return (
    <div className={styles.sliderWrapper} ref={containerRef}>
      <div className={styles.slider}>
        {[...images, ...images].map((src, idx) => (
          <Image
            key={idx}
            width={500}
            height={500}
            src={src}
            alt={`img-${idx}`}
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
