'use client';
import React, { useEffect } from 'react';
import s from './Products.module.scss';
import ProductsSort from '@/app/shared/components/routes/Products/ProductsSort/ProductsSort';
import Select from '@/app/shared/components/UIKIT/Select/Select';
import { Container } from '@/app/shared/components/UIKIT/Container/Container';
import Pagination from '@/app/shared/components/UIKIT/Pagination/Pagination';
import { useSortStore } from '@/app/shared/core/providers/sortProvider';

export interface ISortItem {
  id: number;
  title: string;
  count: number;
}

export default function Page() {
  const {
    // values
    page,
    query,
    brand,
    order,
    battery_capacity,
    screen_type,
    screen_diagonal,
    protection_class,
    built_in_memory,
    // actions
    brandAction,
    batteryCapacityAction,
    screenTypeAction,
    screelDiagonalAction,
    protectionClassAction,
    builtInMemoryAction,
    orderAction,
  } = useSortStore(state => state);

  const brandItems: ISortItem[] = [
    {
      id: 0,
      title: 'Apple',
      count: 110,
    },
    {
      id: 1,
      title: 'Samsung',
      count: 16,
    },
    {
      id: 2,
      title: 'Xiaomi',
      count: 6,
    },
  ];

  useEffect(() => {
    console.log(brand, battery_capacity, screen_type, screen_diagonal, protection_class, built_in_memory, order);
    // axios.get('/products', {
    //   brand,
    //   battery_capacity,
    //   screen_type,
    //   screen_diagonal,
    //   protection_class,
    //   built_in_memory,
    // });
  }, [brand, battery_capacity, screen_type, screen_diagonal, protection_class, built_in_memory, query, order]);

  return (
    <Container>
      <div className={s.Products}>
        {/* sorting */}
        <div className={s.Products__sorting}>
          <ProductsSort title="Brand" items={brandItems} activeItems={brand} handler={brandAction} />
          <ProductsSort
            title="Battery capacity"
            items={brandItems}
            activeItems={battery_capacity}
            handler={batteryCapacityAction}
          />
          <ProductsSort title="Screen type" items={brandItems} activeItems={screen_type} handler={screenTypeAction} />
          <ProductsSort
            title="Screen diagonal"
            items={brandItems}
            activeItems={screen_diagonal}
            handler={screelDiagonalAction}
          />
          <ProductsSort
            title="Protection class"
            items={brandItems}
            activeItems={protection_class}
            handler={protectionClassAction}
          />
          <ProductsSort
            title="Built-in memory"
            items={brandItems}
            activeItems={built_in_memory}
            handler={builtInMemoryAction}
          />
        </div>
        {/* content */}
        <div className={s.Products__content}>
          {/* info + select-option */}
          <div className={s.Products__content__info}>
            <div>
              Select Products: <span>85</span>
            </div>
            <Select handler={orderAction} value={order} />
          </div>
          {/* products */}
          <div></div>
          <div className={s.Products__content__pagination}>
            <Pagination page={page} pages={12} />
          </div>
        </div>
      </div>
    </Container>
  );
}
