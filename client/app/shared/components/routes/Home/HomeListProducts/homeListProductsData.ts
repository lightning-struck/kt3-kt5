import { IProduct } from '@/app/shared/types/IProduct';

const homeListProductsNewArrivals: IProduct[] = [
  {
    title: 'Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)',
    price: 900,
    img: '/iphone_14_pro_max_128gb_deep_purple.png',
    id: 1,
    isLiked: false,
  },

  {
    title: 'Blackmagic Pocket Cinema Camera 6k',
    price: 2535,
    img: '/camera.png',
    id: 2,
    isLiked: false,
  },

  {
    title: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium Case',
    price: 399,
    img: '/apple-watch.png',
    id: 3,
    isLiked: false,
  },

  {
    title: 'AirPods Max Silver',
    price: 549,
    img: '/apple-headphones.png',
    id: 4,
    isLiked: false,
  },

  {
    title: 'Samsung Galaxy Watch6 Classic 47mm Black',
    price: 369,
    img: '/samsung-watch.png',
    id: 5,
    isLiked: false,
  },

  {
    title: 'Galaxy Z Fold5 Unlocked | 256GB | Phantom Black',
    price: 1799,
    img: '/samsung_z_fold.png',
    id: 6,
    isLiked: false,
  },

  {
    title: 'Galaxy Buds FEGraphite',
    price: 99.99,
    img: '/samsung-headphones.png',
    id: 7,
    isLiked: false,
  },

  {
    title: 'Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021',
    price: 398,
    img: '/apple_ipad.png',
    id: 8,
    isLiked: false,
  },
];

const homeListProductsBestSellers: IProduct[] = [
  {
    title: 'AirPods Max Silver',
    price: 549,
    img: '/apple-headphones.png',
    id: 4,
    isLiked: false,
  },

  {
    title: 'Samsung Galaxy Watch6 Classic 47mm Black',
    price: 369,
    img: '/samsung-watch.png',
    id: 5,
    isLiked: false,
  },

  {
    title: 'Galaxy Z Fold5 Unlocked | 256GB | Phantom Black',
    price: 1799,
    img: '/samsung_z_fold.png',
    id: 6,
    isLiked: false,
  },

  {
    title: 'Galaxy Buds FEGraphite',
    price: 99.99,
    img: '/samsung-headphones.png',
    id: 7,
    isLiked: false,
  },

  {
    title: 'Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021',
    price: 398,
    img: '/apple_ipad.png',
    id: 8,
    isLiked: false,
  },
];

const homeListProductsFeatured: IProduct[] = [
  {
    title: 'Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)',
    price: 900,
    img: '/iphone_14_pro_max_128gb_deep_purple.png',
    id: 1,
    isLiked: false,
  },

  {
    title: 'Blackmagic Pocket Cinema Camera 6k',
    price: 2535,
    img: '/camera.png',
    id: 2,
    isLiked: false,
  },

  {
    title: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium Case',
    price: 399,
    img: '/apple-watch.png',
    id: 3,
    isLiked: false,
  },

  {
    title: 'AirPods Max Silver',
    price: 549,
    img: '/apple-headphones.png',
    id: 4,
    isLiked: false,
  },

  {
    title: 'Samsung Galaxy Watch6 Classic 47mm Black',
    price: 369,
    img: '/samsung-watch.png',
    id: 5,
    isLiked: false,
  },
];
export const homeListContent = [
  {
    id: 0,
    category: 'New Arrival',
    products: homeListProductsNewArrivals,
  },
  {
    id: 1,
    category: 'Bestseller',
    products: homeListProductsBestSellers,
  },
  {
    id: 2,
    category: 'Featured Products',
    products: homeListProductsFeatured,
  },
];
