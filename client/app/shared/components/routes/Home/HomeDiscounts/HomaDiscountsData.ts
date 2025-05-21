import { IProduct } from '@/app/shared/types/IProduct';

import i1 from '/discounts/Iphonegold.png';
import i2 from '/discounts/airpodsmax.png';
import i3 from '/discounts/applewatch.png';
import i4 from 'discounts/Iphonespace.png';

export const products: IProduct[] = [
  {
    id: 1,
    img: i1,
    title: 'Apple Iphone 14 Pro 512GB Gold (MQ233)',
    price: 1437,
    isLiked: false,
  },
  {
    id: 2,
    img: i2,
    title: 'AirPods Max Silver',
    price: 549,
    isLiked: false,
  },
  {
    id: 3,
    img: i3,
    title: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium Case',
    price: 399,
    isLiked: false,
  },
  {
    id: 4,
    img: i4,
    title: 'Apple iPhone 14 Pro 1TB Gold (MQ2V3)',
    price: 1499,
    isLiked: false,
  },
];
