import InfiniteSlider from '@/components/InfiniteSlider';
import CardSlider from '@/components/cardSlider'
import styles from '../css/page.module.css'
import page17 from '../../public/Page17.png'
import page15 from '../../public/Page15.png'
import Image from 'next/image';

export default function Home() {

  const heroSliderImages = [
    '/IMG_8560.png',
    '/gap_20.png',
    '/IMG_8394.png',
    '/gap_20.png',
    '/IMG_8986.png',
    '/IMG_5650.png',
    '/IMG_8394_1.png',
    '/IMG_4594.png',
    '/78422FEC-BBE9-40A2-A7E9-35292ADB6DDF.png',
    '/IMG_4628.png',
    '/8D4DBBCE-B9E6-49C2-A8A0-D2A9AE845900.png'
  ];

  const sliderCard = [
    {
      img : '/IMG_4669.jpg',
      desc: 'JOIN THE SCENE',
      link: 'EPISODE WORLD',
    },
    {
      img : '/IMG_8823.png',
      desc: 'JOIN THE SCENE',
      link: 'EPISODE WORLD',
    },
    {
      img : '/DSC00085.png',
      desc: 'JOIN THE SCENE',
      link: 'EPISODE WORLD',
    },
    {
      img : '/IMG_4669.jpg',
      desc: 'JOIN THE SCENE',
      link: 'EPISODE WORLD',
    },
    {
      img : '/IMG_8823.png',
      desc: 'JOIN THE SCENE',
      link: 'EPISODE WORLD',
    },
    {
      img : '/DSC00085.png',
      desc: 'JOIN THE SCENE',
      link: 'EPISODE WORLD',
    },
  ];

  return (
    <>
      <InfiniteSlider images={heroSliderImages} />
      <div className={styles.cardSliderSection}>
          <CardSlider images={sliderCard} />
      </div>
      <Image src={page17} width={500} height={500} className={styles.sectionImg} alt='img-banner'/>
      <Image src={page15} width={500} height={500} className={styles.sectionImg} alt='img-banner'/>
    </>
  );
}
