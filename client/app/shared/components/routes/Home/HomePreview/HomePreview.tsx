'use client';
import s from '../HomePreview/HomePreview.module.scss';

import i1 from '@/public/home/preview/Popular.png';
import i2 from '@/public/home/preview/Ipad.png';
import i3 from '@/public/home/preview/Androids.png';
import i4 from '@/public/home/preview/Macbooks.png';

import Image from 'next/image';
import Button from '@/app/shared/components/UIKIT/Button/Button';

const HomePreview = () => {
  const products = [
    {
      image: i1,
      alt: 'Popular',
      title: 'Popular Products',
      titleColor: '#000000',
      description:
        'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
      buttonText: 'Shop now',
      background: '#FFFFFF',
      buttonStyle: 'black_outline',
    },
    {
      image: i2,
      alt: 'Ipad',
      title: 'Ipad Pro',
      titleColor: '#000000',
      description:
        'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
      buttonText: 'Shop now',
      background: '#F9F9F9',
      buttonStyle: 'black_outline',
    },
    {
      image: i3,
      alt: 'Androids',
      title: 'Samsung Galaxy',
      titleColor: '#000000',
      description:
        'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
      buttonText: 'Shop now',
      background: '#EAEAEA',
      buttonStyle: 'black_outline',
    },
    {
      image: i4,
      alt: 'Macbook',
      title: 'Macbook Pro',
      titleColor: '#FFFFFF',
      description:
        'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
      buttonText: 'Shop now',
      background: '#2C2C2C',
      buttonStyle: 'white_outline',
    },
  ];

  return (
    <div className={s.preview}>
      {products.map((p, index) => (
        <div key={index} className={s.preview__card} style={{ backgroundColor: p.background }}>
          <Image
            className={s.preview__card_image}
            src={p.image}
            width={360}
            height={360}
            alt={p.alt || 'No alt avaiable'}
          />

          <div className={s.preview__card_UI}>
            <div className={s.preview__card_title} style={{ color: p.titleColor }}>
              {p.title}
            </div>
            <div className={s.preview__card_description}>{p.description}</div>
            <Button onClick={() => {}} style={p.buttonStyle} size="l" className={s.preview__card_button}>
              {p.buttonText}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePreview;
