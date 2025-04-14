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
  
    const startLoop = () => {
      const scrollLoop = () => {
        scrollAmount += scrollStep;
  
        const resetPoint = container.scrollWidth / 2;
        if (scrollAmount >= resetPoint) {
          scrollAmount = 4;
        }
  
        container.scrollLeft = scrollAmount;
        requestAnimationFrame(scrollLoop);
      };
  
      requestAnimationFrame(scrollLoop);
    };

    setTimeout(startLoop, 100);
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
            priority
            alt={`img-${idx}`}
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
