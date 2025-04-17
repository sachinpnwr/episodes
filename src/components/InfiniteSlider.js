"use client";

import { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
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
    <section id="top-slider">
      <div className="position-relative">
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
        <div className={styles.stripSlider}>
          <Marquee speed={150} autoFill={true} direction="right">
            <h1 className="strip-title">EPISODE WORLD</h1>
            <div className="d-flex flex-column align-items-center">
              <p className="strip-text">Drop - 1</p>
              <p className="strip-text fw-bold text-decoration-underline">@TODAYINEPISODE </p>
            </div>
            <div className="d-flex flex-column align-items-center">
              <p className="strip-text fw-bold">2025&copy;RAID </p>
              <p className="strip-text">CURRENTLY REPPING  </p>
            </div>
          </Marquee>
        </div>
        <div className={styles.coloredStrip}></div>
      </div>
    </section>
  );
};

export default InfiniteSlider;
