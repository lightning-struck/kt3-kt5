'use client';
import React, { useEffect, useState } from 'react';
import s from './HomeListProducts.module.scss';
import { Container } from '@/app/shared/components/UIKIT/Container/Container';
import { AxiosInterceptor } from '@/app/core/http';
import { Product } from '@/app/shared/components/layout/Product/Product';
import { homeListContent } from './homeListProductsData';
import classNames from 'classnames';
import { useFavoriteStore } from '@/app/core/providers/favoriteProvider';

// useEffect(() => {
//   getData();
// }, []);

// const getData = async () => {
//   const data = await AxiosInterceptor.$get('/posts');
//   console.log(data);
// };

export const HomeListProduct = () => {
  const [currentCategory, setCurrentCategory] = useState<number>(0);
  const cx = classNames.bind(s);

  return (
    <Container>
      <div className={s.HomeListProducts}>
        <div className={s.HomeListProducts__selector}>
          {homeListContent.map(i => (
            <div
              className={
                currentCategory === i.id
                  ? cx(s.HomeListProducts__selector_item, s.HomeListProducts__selector_item_active)
                  : cx(s.HomeListProducts__selector_item)
              }
              key={i.id}
              onClick={() => setCurrentCategory(i.id)}
            >
              {i.category}
            </div>
          ))}
        </div>

        <div className={s.HomeListProducts__container}>
          {homeListContent[currentCategory].products.map((i, idx) => (
            <div key={idx}>
              <Product title={i.title} id={i.id} img={i.img} price={i.price} isLiked={i.isLiked} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
