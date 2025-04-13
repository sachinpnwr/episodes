import InfiniteSlider from '@/components/InfiniteSlider';

export default function Home() {

  const heroSliderImages = [
    '/IMG_8560.png',
    '/gap_20.png',
    '/IMG_8394.png',
    '/gap_20.png',
    // '/slider_img_2.jpg',
    '/IMG_8986.png',
    // '/slider_img_2.jpg',
    '/IMG_9015.png',
    // 
    // 
    // 
    // 
    '/IMG_8560.png',
    '/gap_20.png',
    '/IMG_8394.png',
    '/gap_20.png',
    // '/slider_img_2.jpg',
    '/IMG_8986.png',
    // '/slider_img_2.jpg',
    '/IMG_9015.png',
    '/IMG_8560.png',
    '/gap_20.png',
    '/IMG_8394.png',
    '/gap_20.png',
    // '/slider_img_2.jpg',
    '/IMG_8986.png',
    // '/slider_img_2.jpg',
    '/IMG_9015.png'
  ];

  return (
    <>
      <InfiniteSlider images={heroSliderImages} />
    </>
  );
}
