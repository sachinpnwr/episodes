import InfiniteSlider from '@/components/InfiniteSlider';
import CardSlider from '@/components/cardSlider'
import DiveIntoSlider from '@/components/diveIntoSlider';
import styles from '../css/page.module.css'
import page17 from '../../public/Page17.png'
import page15 from '../../public/Page15.png'
import tshirt from '../../public/IMG_8593.png'
import DSC03419 from '../../public/DSC03419.png'
import Image from 'next/image';
import Link from 'next/link';

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
      <div id="diveIntoSection">
        <DiveIntoSlider/>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <div className='wrapper-card'>
              <Link href={'/'}>
                <Image src={tshirt} className='w-100 fit-card-img' alt='img'></Image>
              </Link>
              <Link href={'/'} className='mb-0 fw-semibold'>TOPS & SHIRTS</Link>
              <Link href={'/'} className='mb-0'>HOODIES & LONGSLEEVES</Link>
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <div className='wrapper-card'>
              <Link href={'/'}>
                <Image src={DSC03419} className='w-100 fit-card-img' alt='img'></Image>
              </Link>
              <Link href={'/'} className='mb-0 fw-semibold'>STEP STRAIGHT INTO OUR EPISODES</Link>
              <Link href={'/'} className='mb-0'>COLLECTIONS</Link>
            </div>
          </div>
        </div>
        <div className='row my-5'>
          <div className='col-12 col-md-6'>
            <div className='p-4'>
            <p className='mb-0'> <strong>At Episode,</strong> transparency is key. We want you to not just wear the story, but to own the entire process. Our studio sessions are where the magic happens-this is our favorite part. Here, we play dress-up with purpose, curating styles that reflect your unique story. Every garment is chosen with careful attention to size, body shape, and, of course, a print that truly speaks to you.
            It&apos;s not just about fashion; it&apos;s about creating a personal art piece with you in mind. With the perfect track playing in the background, we capture moments where real personalities shine through. This is where your story comes to life.</p>
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <div className='p-4 bottom-right'>
              <p className='mb-0'>MORE ABOUT <strong>[EPISODE]</strong></p>
            </div>
          </div>
        </div>
      </div>
      <Image unoptimized = {true} src={page17} width={500} height={500} className={styles.sectionImg} alt='img-banner'/>
      <Image unoptimized = {true} src={page15} width={500} height={500} className={styles.sectionImg} alt='img-banner'/>
    </>
  );
}
