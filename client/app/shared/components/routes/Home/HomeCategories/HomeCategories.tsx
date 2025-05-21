import { Arrow } from '@/app/shared/icons/Arrow';
import s from '../HomeCategories/HomeCategories.module.scss';
import { Container } from '@/app/shared/components/UIKIT/Container/Container';
import { Phone } from '@/app/shared/icons/Phone';
import { Watches } from '@/app/shared/icons/Watches';
import { Camera } from '@/app/shared/icons/Camera';
import { Headphones } from '@/app/shared/icons/Headphones';
import { Computer } from '@/app/shared/icons/Computer';
import { Gaming } from '@/app/shared/icons/Gaming';

const HomeCategories = () => {
  interface IPlatesItem {
    title: string;
    icon: React.ReactNode;
    link: string;
  }
  const plates: IPlatesItem[] = [
    {
      title: 'Phones',
      icon: <Phone />,
      link: '/catalog/phones',
    },
    {
      title: 'Smart Watches',
      icon: <Watches />,
      link: '/catalog/watches',
    },
    {
      title: 'Cameras',
      icon: <Camera />,
      link: '/catalog/cameras',
    },
    {
      title: 'Headphones',
      icon: <Headphones />,
      link: '/catalog/headphones',
    },
    {
      title: 'Computers',
      icon: <Computer />,
      link: '/catalog/computers',
    },
    {
      title: 'Gaming',
      icon: <Gaming />,
      link: '/catalog/gaming',
    },
  ];

  return (
    <Container>
      <div className={s.HomeCategories}>
        <div className={s.HomeCategories__top}>
          <div className={s.HomeCategories__top_title}>Browse By Category</div>
          <div className={s.HomeCategories__top_selector}>
            <Arrow className={s.arrow_left} />
            <Arrow className={s.arrow_right} />
          </div>
        </div>
        <div className={s.HomeCategories__bottom}>
          {plates.map(i => (
            <div className={s.HomeCategories__bottom_plate} key={i.title}>
              {i.icon}
              {i.title}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default HomeCategories;
