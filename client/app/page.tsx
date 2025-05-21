import HomeHero from '@/app/shared/components/routes/Home/HomeHero/HomeHero';
import HomeGrid from '@/app/shared/components/routes/Home/HomeGrid/HomeGrid';
import HomeCategories from '@/app/shared/components/routes/Home/HomeCategories/HomeCategories';
import { HomeListProduct } from '@/app/shared/components/routes/Home/HomeListProducts/HomeListProducts';
import HomePreview from '@/app/shared/components/routes/Home/HomePreview/HomePreview';

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeGrid />
      <HomeCategories />
      <HomeListProduct />
      <HomePreview />
    </>
  );
}
