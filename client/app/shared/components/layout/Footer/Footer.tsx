import s from './Footer.module.scss';
import { Container } from '@/app/shared/components/UIKIT/Container/Container';
import { Logo } from '@/app/shared/icons/Logo';
import Link from 'next/link';
import { columns, iconsArray } from './footer_data';
const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.top__wrapper}>
          <div className={s.top__left}>
            <Logo color="white" />
            <p className={s.top__left_description}>
              We are a residential interior design firm located in Portland. Our boutique-studio offers more than
            </p>
          </div>
          <div className={s.top__right}>
            {columns.map((column, column_idx) => (
              <div className={s.wrapper} key={column_idx}>
                <p className={s.column__title}>{column.title}</p>
                {column.items.map((item, col_item_idx) => (
                  <Link className={s.column__link} key={col_item_idx} href={item.href}>
                    {item.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className={s.social__wrapper}>
          {iconsArray.map((social, index) => (
            <Link className={s.social__link} target="_blank" key={index} href={social.href}>
              {social.icon}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
