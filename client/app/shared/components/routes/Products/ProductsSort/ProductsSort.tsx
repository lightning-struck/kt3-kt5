'use client';
import { ISortItem } from '@/app/(routes)/products/page';
import Checkbox from '@/app/shared/components/UIKIT/Checkbox/Checkbox';
import React, { useState } from 'react';
import s from './ProductsSort.module.scss';
import cn from 'classnames';
export default function ProductsSort({
  title,
  items,
  activeItems,
  handler,
}: {
  title: string;
  items: ISortItem[];
  activeItems: number[];
  handler: (id: number) => void;
}) {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div className={s.ProductsSort}>
      {/* head */}
      <div onClick={() => setActive(!active)} className={s.ProductsSort__head}>
        {title}
        <svg
          className={cn(s.ProductsSort__head__arrow, active && s.active)}
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 0.295L0 6.295L1.41 7.705L6 3.125L10.59 7.705L12 6.295L6 0.295Z" fill="black" />
        </svg>
      </div>
      {/* content */}
      {active && (
        <div className={s.ProductsSort__content}>
          {items.map((i, idx) => (
            <div key={idx} className={s.ProductsSort__content__item}>
              <Checkbox 
                handler={() => handler(i.id)} 
                active={activeItems.includes(i.id)} 
              />
              <div className={s.ProductsSort__content__item__title}>{i.title}</div>
              <div className={s.ProductsSort__content__item__count}>{i.count}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
