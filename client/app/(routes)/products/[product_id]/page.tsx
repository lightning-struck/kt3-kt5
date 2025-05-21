'use client';
import Button from '@/app/shared/components/UIKIT/Button/Button';
import s from './page.module.scss';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import 'swiper/swiper-bundle.css';
import Image from 'next/image';
import { Container } from '@/app/shared/components/UIKIT/Container/Container';
import { useBasketStore } from '@/app/shared/core/providers/basketProvider';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import ProductsMark from '@/app/shared/components/routes/Products/ProductsMark/ProductsMark';

export default function Page() {
  const params = useParams();
  console.log(params);
  const { basketAction, basketItems } = useBasketStore(state => state);

  // Устанавливаем по умолчанию первую картинку
  const images: string[] = ['/pic1.svg', '/pic4.svg', '/pic3.svg', '/pic2.svg'];

  // Инициализируем с первой картинкой
  const [selectedImage, setSelectedImage] = useState<string>(images[0]);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <Container>
      <div className={s.ProductPage}>
        <div className={s.ProductPage__slider}>
          {images.map((image, index) => (
            <div key={index} onClick={() => handleImageClick(image)} className={s.ProductPage__slider_area}>
              <img
                src={image}
                alt={`Image ${index + 1}`}
                style={{
                  width: '120px',
                  marginBottom: '24px',
                  height: '150px',
                  objectFit: 'contain',
                  transform: selectedImage === image ? 'scale(1.13)' : 'scale(1.05)',
                  transition: 'transform 0.3s ease',
                }}
              />
            </div>
          ))}
        </div>

        <div className={s.ProductPage__pic}>
          <img src={selectedImage} alt="Selected" className={s.ProductPage__pic_img} />
        </div>

        <div className={s.ProductPage__text}>
          <div className={s.ProductPage__text_title}>Apple iPhone 14 Pro Max</div>
          <div className={s.ProductPage__text_price}>
            $1399 <span className={s.ProductPage__last_price}> $1499 </span>
          </div>

          <div className={s.ProductPage__container}>
            <div className={s.ProductPage__container_plate}>
              <Image width={30} height={30} src={'/phone-icon.svg'} alt="asd" />
              {/* <img style={{ width: '30px', height: '30px' }} src="" alt="phone" /> */}
              <div className={s.ProductPage__container_plate_text}>
                <span className={s.ProductPage__plate_title}>Screen Size</span>
                6.7"
              </div>
            </div>

            <div className={s.ProductPage__container_plate}>
              <img style={{ width: '30px', height: '30px' }} src="/cpu-icon.svg" alt="cpu" />
              <div className={s.ProductPage__container_plate_text}>
                <span className={s.ProductPage__plate_title}>CPU</span>
                Apple A16 Bionic
              </div>
            </div>

            <div className={s.ProductPage__container_plate}>
              <img style={{ width: '30px', height: '30px' }} src="/core-icon.svg" alt="core" />
              <div className={s.ProductPage__container_plate_text}>
                <span className={s.ProductPage__plate_title}>Number of Cores</span>6
              </div>
            </div>

            <div className={s.ProductPage__container_plate}>
              <img style={{ width: '30px', height: '30px' }} src="/main-camera-icon.svg" alt="camera" />
              <div className={s.ProductPage__container_plate_text}>
                <span className={s.ProductPage__plate_title}>Main camera</span>
                48-12 -12 MP
              </div>
            </div>

            <div className={s.ProductPage__container_plate}>
              <img style={{ width: '30px', height: '30px' }} src="/front-camera-icon.svg" alt="front-camera" />
              <div className={s.ProductPage__container_plate_text}>
                <span className={s.ProductPage__plate_title}>Front-camera</span>
                12 MP
              </div>
            </div>

            <div className={s.ProductPage__container_plate}>
              <img style={{ width: '30px', height: '30px' }} src="/battery-icon.svg" alt="battery" />
              <div className={s.ProductPage__container_plate_text}>
                <span className={s.ProductPage__plate_title}>Battery capacity</span>
                4323 mAh
              </div>
            </div>
          </div>

          <div className={s.ProductPage__text_descr}>
            Enhanced capabilities thanks to an enlarged display of 6.7 inches and work without recharging throughout the
            day. Incredible photos as in weak light, yes and in bright light using the new system with two cameras{' '}
            <span className={s.ProductPage__text_more}>more...</span>
          </div>
          <div className={s.ProductPage__buttons}>
            <Button size="auto" style="black_outline" onClick={() => void basketAction()}>
              Add to Wishlist
            </Button>
            <Button size="auto" style="black_solid" onClick={() => void basketAction()}>
              Add to Cart
            </Button>
          </div>

          <div className={s.ProductPage__feat}>
            <div className={s.ProductPage__feat_plate}>
              <div className={s.ProductPage__feat_plate_box}>
                <img src="/delivery-icon.svg" alt="delivery" />
              </div>
              <div className={s.ProductPage__feat_plate_text}>
                <span className={s.ProductPage__feat_title}>Free Delivery</span>
                <div>1-2 day </div>
              </div>
            </div>

            <div className={s.ProductPage__feat_plate}>
              <div className={s.ProductPage__feat_plate_box}>
                <img src="/shop-icon.svg" alt="in stock" />
              </div>
              <div className={s.ProductPage__feat_plate_text}>
                <span className={s.ProductPage__feat_title}>In Stock</span>
                <div>Today </div>
              </div>
            </div>

            <div className={s.ProductPage__feat_plate}>
              <div className={s.ProductPage__feat_plate_box}>
                <img src="/guarantee-icon.svg" alt="Guaranteed" />
              </div>
              <div className={s.ProductPage__feat_plate_text}>
                <span className={s.ProductPage__feat_title}>Guaranteed</span>
                <div>1 year</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          Details
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, debitis? Velit quibusdam quas, esse harum distinctio voluptate eum ea cumque ipsam nobis unde voluptatem dolore, ab animi architecto sunt mollitia!
          Voluptatem itaque hic nobis amet voluptates tempore iure! Tempora, reprehenderit quisquam voluptate amet vero voluptatibus accusamus, vel autem rerum commodi laboriosam dignissimos quas possimus dolorum minus praesentium voluptas odio. Dolorum.
          Eius quasi dolore explicabo id architecto ut, amet consectetur dolorem, placeat nihil dolores voluptate recusandae totam maiores. Nihil incidunt nam beatae, autem libero accusantium. Quidem veritatis ipsum eos ex vitae.
        </div>
        <div className='w-full'>
          {
            [
              {
                title: "Screen Diagonal",
                value: "6.7\""
              },
              {
                title: "Screen Diagonal",
                value: "6.7\""
              },
              {
                title: "Screen Diagonal",
                value: "6.7\""
              }
            ].map(i =>
              <div className='flex items-start justify-between w-full border-solid border-gray-400 border-[0] border-b pt-[12px] pb-[6px]'>
                <div>{i.title}</div>
                <div>{i.value}</div>
              </div>
            )
          }
        </div>
      </div>
      <ProductsMark />
      <ProductsReview/>
      {/* <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account and remove your data from our
              servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog> */}
    </Container>
  );
}
