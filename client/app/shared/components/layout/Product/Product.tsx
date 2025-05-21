'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import s from './Product.module.scss';
import { IProduct } from '@/app/shared/types/IProduct';
import Button from '../../UIKIT/Button/Button';
import { useFavoriteStore } from '@/app/shared/core/providers/favoriteProvider';
import { useBasketStore } from '@/app/shared/core/providers/basketProvider';
import { toast } from 'sonner';
import { Heart } from 'lucide-react';
export const Product: React.FC<IProduct> = (props: IProduct) => {
  const { favorites, triggerFavorite } = useFavoriteStore(state => state);

  const { basketAction, basketItems } = useBasketStore(state => state);

  useEffect(() => {
    console.log(basketItems);
  }, [basketItems]);

  const triggerBasket = () => {
    if (basketItems.includes(props.id)) {
      toast.info(`Продукт ${props.id} удален из корзины`);
    } else {
      toast.info(`Продукт ${props.id} добавлен в корзину`);
    }
    void basketAction(props.id);
  };
  return (
    <div className={s.Product}>
      <div className={s.Product__like} onClick={() => void triggerFavorite(props.id)}>
        <Heart fill={favorites.includes(props.id) ? 'red' : 'none'} />
      </div>
      <Image src={props.img} alt={props.title} width={160} height={160} className={s.Product__crad_image} />
      <h3 className={s.Product__title}>{props.title}</h3>
      <div className={s.Product__bottom}>
        <p className={s.Product__bottom_price}>${props.price}</p>
        <Button size="m" style="black_solid" onClick={() => triggerBasket()}>
          Buy now
        </Button>
      </div>
    </div>
  );
};
