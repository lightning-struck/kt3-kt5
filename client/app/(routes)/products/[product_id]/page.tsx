'use client';
import Button from '@/app/shared/components/UIKIT/Button/Button';
import s from './page.module.scss';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import 'swiper/swiper-bundle.css';
import Image from 'next/image';
import { Container } from '@/app/shared/components/UIKIT/Container/Container';
import { useBasketStore } from '@/app/shared/core/providers/basketProvider';
import ProductsReview from '@/app/shared/components/routes/Products/ProductsReview/ProductsReview';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import ProductsMark from '@/app/shared/components/routes/Products/ProductsMark/ProductsMark';
import { useUserStore } from '@/app/shared/core/providers/userProvider';

export default function Page() {
  const params = useParams();
  console.log(params);
  const { basketAction, basketItems } = useBasketStore(state => state);
  const product = {
    id: 1
  } 


  const images: string[] = ['/pic1.svg', '/pic4.svg', '/pic3.svg', '/pic2.svg'];

  const [selectedImage, setSelectedImage] = useState<string>(images[0]);
  const { user_login, user_id, user_email, user_phone, setUser } = useUserStore(state => state);

  const [userName, setUserName] = useState<string>(user_login ?? '')
  const [userPhone, setUserPhone] = useState<string>(user_phone ?? '')
  const [userEmail, setUserEmail] = useState<string>(user_email ?? '')
  const [isSuccess, setSuccess] = useState<boolean>(false)
  const [successMessage, setSuccessMessage] = useState<string>('')
  useEffect(() => {
    setUserEmail(user_email);
    setUserName(user_login);
    setUserPhone(user_phone ?? '');
  }, [user_login, user_email, user_phone]);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };
  const quickBuy = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      productId: formData.get('productId'),
      phone: formData.get('phone'),
      name: formData.get('name'),
      email: formData.get('email')
    };

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/product/quick_order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.status === 200) {
        
       
        setSuccess(true)
        setSuccessMessage('Спасибо за заказ! Номер вашего заказа: ' + result.body.orderId)
      } else {
        alert('Ошибка: ' + (result.message || 'Не удалось оформить заказ'));
      }
    } catch (error) {
      console.log(error);
      alert('Ошибка сети, попробуйте позже');
    }
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
            <br />

            <Button size='auto' style='black_outline'>
              <Dialog>
                <DialogTrigger>Купить в 1 клик</DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Купить в 1 клик</DialogTitle>
                    <DialogDescription>

                      {!isSuccess ? <form onSubmit={quickBuy} className="space-y-4">
                        <div>
                          <label htmlFor="phone" className="block mb-1">Телефон*</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            className={s.input}
                            placeholder="+7 (___) ___-__-__"
                            value={userPhone}
                            onChange={(ev) => setUserPhone(ev.target.value)}
                          />
                        </div>
                        <div>
                          <label htmlFor="name" className="block mb-1">Имя</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className={s.input}
                            placeholder="Ваше имя"
                            value={userName}
                            onChange={(ev) => setUserName(ev.target.value)}
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block mb-1">Email</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className={s.input}
                            placeholder="Ваш email"
                            value={userEmail}
                            onChange={(ev) => setUserEmail(ev.target.value)}
                          />
                        </div>
                        <input type="hidden" name="productId" value={product.id} />
                        <button
                          type="submit"
                          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
                        >
                          Заказать
                        </button>
                      </form> : successMessage}
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
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
      <ProductsReview />

    </Container>
  );
}
