'use client';
import { useEffect, useState } from 'react';
import Footer from '@/app/shared/components/layout/Footer/Footer';
import s from '../cart/cart.module.scss';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Button from '@/app/shared/components/UIKIT/Button/Button';
import Image from 'next/image';
// import {
//   homeListProductsBestSellers,
// } from '@/app/shared/components/routes/Home/HomeListProducts/homeListProductsData';

interface Product {
  id: string;
  title: string;
  description: string;
  featuredImage: {
    id: string;
    url: string;
  };
  price: number;
  img: string;
  quantity: number;
}

export default function Cart() {
  const [products, setProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState<number>(1);

  // useEffect(() => {
  //   async function fetchProduct() {
  //     setProducts(homeListProductsBestSellers);
  //   }

  //   fetchProduct();
  // }, []);

  return (
    <div>
      <div className={s.wrapper}>
        <div className={s.cart__list}>
          <div className={s.cart__title}>Shopping Cart</div>
          <div className={s.cart__content}>
            {products.map(p => (
              <div key={p.id} className={s.product}>
                <Image src={p.img} alt={p.title} className={s.product__img} width={90} height={90} />
                <div className={s.product__text}>
                  <div className={s.product__title}>{p.title}</div>
                  <div className={s.product__id}>#{p.id}</div>
                </div>
                <div className={s.product__quantity}>
                  <div className={s.product__quantity_button}>-</div>
                  <div className={s.product__number}>{quantity}</div>
                  <div className={s.product__quantity_button}>+</div>
                </div>
                <div className={s.product__quantity_price}>${p.price}</div>
                <div className={s.product__quantity_button}>
                  <Image alt={p.title} width={30} height={30} src={'/Close.svg'}></Image>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={s.order}>
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className={s.bonus}>
                <div className={s.order__text}>Discount code / Promo code</div>
                <Input placeholder="Code" className={s.order__input} />
                <div className={s.order__text}>Your bonus card number</div>
                <Input placeholder="Enter Card Number" className={s.order__input} />
              </div>
              <div className={s.checkout}>
                <div className={s.total}>
                  <span>Subtotal</span>
                  <span>$$$$</span>
                </div>
                <div className={s.estimated}>
                  <div className={s.estimated__row}>
                    <span>Estimated Tax</span>
                    <span>$$$$</span>
                  </div>
                  <div className={s.estimated__row}>
                    <span>Estimated shipping & Handling</span>
                    <span>$$$$</span>
                  </div>
                </div>
                <div className={s.total}>
                  <span>Total</span>
                  <span>$$$$</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button style="black_solid" size="auto">
                Checkout
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}
