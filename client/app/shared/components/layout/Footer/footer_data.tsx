import { Facebook } from '@/app/shared/icons/Facebook';
import { Instagram } from '@/app/shared/icons/Instagram';
import { TikTok } from '@/app/shared/icons/TikTok';
import { Twitter } from '@/app/shared/icons/Twitter';

interface IFooterBottomItem {
  icon: React.ReactNode;
  href: string;
}

interface IFooterColumn {
  title: string;
  items: {
    name: string;
    href: string;
  }[];
}

export const iconsArray: IFooterBottomItem[] = [
  {
    href: '#',
    icon: <Twitter />,
  },
  {
    href: '#',
    icon: <Facebook />,
  },
  {
    href: '#',
    icon: <TikTok />,
  },
  {
    href: '#',
    icon: <Instagram />,
  },
];

export const columns: IFooterColumn[] = [
  {
    title: 'Services',
    items: [
      { name: 'Bonus program', href: '#' },
      { name: 'Gift cards', href: '#' },
      { name: 'Credit and payment', href: '#' },
      { name: 'Service contracts', href: '#' },
      { name: 'Non-cash account', href: '#' },
      { name: 'Payment', href: '#' },
    ],
  },
  {
    title: 'Assistance to the buyer',
    items: [
      { name: 'Find an order', href: '#' },
      { name: 'Terms of delivery', href: '#' },
      { name: 'Exchange and return of goods', href: '#' },
      { name: 'Guarantee', href: '#' },
      { name: 'Frequently asked questions', href: '#' },
      { name: 'Terms of use of the site', href: '#' },
    ],
  },
];
