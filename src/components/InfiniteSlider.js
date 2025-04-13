"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "../css/InfiniteSlider.module.css";

const InfiniteSlider = ({ images }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollStep = 4;
    let scrollAmount = 0;

    const loop = () => {
      scrollAmount += scrollStep;

      if (scrollAmount >= container.scrollWidth * 0.5) {
        scrollAmount = scrollAmount - container.scrollWidth * 0.5;
      }

      container.scrollLeft = scrollAmount;
      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);
  }, []);

  return (
    <div className={styles.sliderWrapper} ref={containerRef}>
      <div className={styles.slider}>
        {[...images, ...images, ...images, ...images].map((src, idx) => (
          <Image
            key={idx}
            width={500}
            height={500}
            src={src}
            alt={`img-${idx}`}
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
