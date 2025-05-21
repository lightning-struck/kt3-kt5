'use client';
import Image from 'next/image';
import s from '../HomeGrid/HomeGrid.module.scss';
import Button from '@/app/shared/components/UIKIT/Button/Button';

const HomeGrid = () => {
  return (
    <div className={s.hero_grid}>
      <div className={s.hero_grid__left}>
        <div className={s.hero_grid__playstation}>
          <Image
            src={'/home/grid/PlayStation.png'}
            width={360}
            height={343}
            alt="Playstation"
            className={s.hero_grid__playstation_img}
          ></Image>
          <div className={s.hero_grid__playstation_right}>
            <div className={s.hero_grid__playstation_title}>Playstation 5</div>
            <div className={s.hero_grid__desc}>
              Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.
            </div>
          </div>
        </div>
        <div className={s.hero_grid__left_tiny}>
          <div className={s.hero_grid__airpods}>
            <Image
              src={'/home/grid/AirPods.png'}
              width={104}
              height={272}
              alt="AirPods"
              className={s.hero_grid__airpods_img}
            ></Image>
            <div className={s.hero_grid__airpods_right}>
              <div className={s.hero_grid__airpods_title}>Apple AirPods Max</div>
              <div className={s.hero_grid__desc}>Computational audio. Listen, it's powerful</div>
            </div>
          </div>
          <div className={s.hero_grid__vision}>
            <Image
              src={'/home/grid/Vision.png'}
              width={136}
              height={190}
              alt="Apple Vision"
              className={s.hero_grid__vision_img}
            ></Image>
            <div className={s.hero_grid__vision_right}>
              <div className={s.hero_grid__vision_title}>Apple Vision Pro</div>
              <div className={s.hero_grid__desc}>An immersive way to experience entertainment</div>
            </div>
          </div>
        </div>
      </div>
      <div className={s.hero_grid__macbook}>
        <div className={s.hero_grid__macbook_left}>
          <div className={s.hero_grid__macbook_title}>
            Macbook <span>Air</span>
          </div>
          <div className={s.hero_grid__desc}>
            The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
          </div>
          <Button onClick={() => {}} style={'black_outline'} size="m">
            Shop now
          </Button>
        </div>
        <Image
          src={'/home/grid/Macbook.png'}
          width={292}
          height={502}
          alt="Macbook"
          className={s.hero_grid__img}
        ></Image>
      </div>
    </div>
  );
};

export default HomeGrid;
