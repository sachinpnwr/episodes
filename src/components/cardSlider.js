"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "../css/InfiniteSlider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, FreeMode } from "swiper/modules";
import Link from "next/link";

const CardSlider = ({ images }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperEl = swiperRef.current?.el;

    if (swiperEl) {
      const handleMouseEnter = () => {
        if (swiperRef.current?.autoplay) swiperRef.current.autoplay.stop();
      };
      const handleMouseLeave = () => {
        if (swiperRef.current?.autoplay) swiperRef.current.autoplay.start();
      };

      swiperEl.addEventListener("mouseenter", handleMouseEnter);
      swiperEl.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        swiperEl.removeEventListener("mouseenter", handleMouseEnter);
        swiperEl.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  //   const containerRef = useRef(null);

  //   useEffect(() => {
  //     const container = containerRef.current;
  //     if (!container) return;

  //     const scrollStep = 4;
  //     let scrollAmount = 0;

  //     const loop = () => {
  //       scrollAmount += scrollStep;

  //       if (scrollAmount >= container.scrollWidth * 0.5) {
  //         scrollAmount = scrollAmount - container.scrollWidth * 0.5;
  //       }

  //       container.scrollLeft = scrollAmount;
  //       requestAnimationFrame(loop);
  //     };

  //     requestAnimationFrame(loop);
  //   }, []);

  return (
    // <div className={styles.sliderWrapper} ref={containerRef}>
    //   <div className={styles.slider}>
    //     {[...images, ...images, ...images, ...images].map((d, idx) => (
    //       <div key={idx}>
    //         <Image
    //           width={500}
    //           height={500}
    //           src={d.img}
    //           className={styles.cardImg}
    //           alt={`img-${idx}`}
    //           draggable={false}
    //         />
    //         <p className="text-white">{d.desc}</p>
    //         <p className="text-white">{d.link}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <>
      <Swiper
        ref={swiperRef}
        slidesPerView={"auto"}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: true,
        }}
        speed={2000}
        modules={[Autoplay, FreeMode]}
        className="cardSwiper w-100"
        centeredSlides={true}
      >
        {[...images, ...images, ...images, ...images].map((d, idx) => (
          <SwiperSlide key={idx}>
            <Image
              width={500}
              height={500}
              src={d.img}
              className={styles.cardImg}
              alt={`img-${idx}`}
              draggable={false}
            />
            <Link href="" className="text-white d-block my-3 text-decoration-none">{d.desc}</Link>
            <Link href="" className="text-white d-block text-decoration-none">{d.link}</Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CardSlider;
