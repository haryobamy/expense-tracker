import {
  Clock3,
  CreditCard,
  Frame,
  HandCoins,
  Home,
  LayoutDashboard,
  Map,
  PieChart,
  PiggyBank,
  Receipt,
  User,
} from 'lucide-react';

export const data = {
  user: {
    name: 'Deji',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  home: [
    {
      title: 'Home',
      url: '#',
      icon: Home,
      isActive: true,
    },
    {
      title: 'Recent',
      url: 'file-manager',
      icon: Clock3,
      isActive: false,
      children: [
        {
          title: 'Recent Docs',
          url: '#',
        },
        {
          title: 'Recent Route',
          url: '#',
        },
        {
          title: 'Recent folder',
          url: '#',
        },
      ],
    },
    {
      title: 'Pinned',
      url: '#',
      icon: Clock3,
      isActive: false,
      children: [
        {
          title: 'Pinned Docs',
          url: '#',
        },
        {
          title: 'Pinned Route',
          url: '#',
        },
        {
          title: 'Pinned folder',
          url: '#',
        },
      ],
    },
  ],

  works: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: LayoutDashboard,
    },
    {
      name: 'Analytics',
      url: 'analytics',
      icon: PieChart,
    },
    {
      name: 'Cards',
      url: '/cards',
      icon: CreditCard,
    },
    {
      name: 'Spending Activity',
      url: '/transactions',
      icon: HandCoins,
    },
    {
      name: 'Budgets',
      url: '/budgets',
      icon: PiggyBank,
    },
  ],

  //   customers: [
  //     {
  //       name: 'Accounts',
  //       url: '#',
  //       icon: Frame,
  //     },
  //     {
  //       name: 'Contact',
  //       url: '#',
  //       icon: User,
  //     },
  //   ],
  //   sales: [
  //     {
  //       name: 'Leads',
  //       url: '#',
  //       icon: Frame,
  //     },
  //     {
  //       name: 'Opportuntties',
  //       url: '#',
  //       icon: User,
  //     },
  //     {
  //       name: 'Competitors',
  //       url: '#',
  //       icon: User,
  //     },
  //   ],

  //   collateral: [
  //     {
  //       name: 'Quotes',
  //       url: '#',
  //       icon: Receipt,
  //     },
  //     {
  //       name: 'Orders',
  //       url: '#',
  //       icon: Receipt,
  //     },
  //     {
  //       name: 'Invoices',
  //       url: '#',
  //       icon: Receipt,
  //     },
  //     {
  //       name: 'Products',
  //       url: '#',
  //       icon: Receipt,
  //     },
  //     {
  //       name: 'Sale Literatures',
  //       url: '#',
  //       icon: Receipt,
  //     },
  //   ],
  //   marketing: [
  //     {
  //       name: 'Marketing lists',
  //       url: '#',
  //       icon: Receipt,
  //     },
  //     {
  //       name: 'Quick Campaigns',
  //       url: '#',
  //       icon: Receipt,
  //     },
  //   ],
};
