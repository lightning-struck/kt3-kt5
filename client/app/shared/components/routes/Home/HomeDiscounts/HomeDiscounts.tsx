import { Container } from '@/app/shared/components/UIKIT/Container/Container';
import s from '../HomeDiscounts/HomeDiscounts.module.scss';
import { products } from './HomaDiscountsData';
import { Product } from '@/app/shared/components/layout/Product/Product';

const HomeDiscounts = () => {
  return (
    <Container>
      <div className={s.HomeDiscounts}>
        <div className={s.HomeDiscounts__title}>Discounts up to -50%</div>
        <div className={s.HomeDiscounts__products}>
          {products.map(i => (
            <Product id={i.id} title={i.title} price={i.price} img={i.img} isLiked={i.isLiked} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default HomeDiscounts;
