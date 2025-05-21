'use client';
import Image from 'next/image';
import s from '../HomeHero/HomeHero.module.scss';
import Button from '@/app/shared/components/UIKIT/Button/Button';

const HomeHero = () => {
  return (
    <div className={s.Hero}>
      <div className={s.Hero__content}>
        <div className={s.Hero__superscript}>Pro.Beyond.</div>
        <div className={s.Hero__title}>IPhone 14 Pro</div>
        <div className={s.Hero__subtitle}>Created to change everything for the better. For everyone</div>
        <Button onClick={() => {}} style={'white_outline'} size="m">
          Shop now
        </Button>
      </div>
      <Image className={s.Hero__image} width={406} height={632} src={'/home/hero/Iphone.png'} alt="IPhone"></Image>
    </div>
  );
};

export default HomeHero;
