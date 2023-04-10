import type { MenuList } from '@/interface/layout/menu.interface';

import { intercepter, mock } from '../config';

const mockMenuList: MenuList = [
  {
    code: 'dashboard',
    label: {
      zh_CN: '首页',
      en_US: 'Dashboard',
    },
    icon: 'dashboard',
    path: '/dashboard',
  },
  {
    code: 'documentation',
    label: {
      zh_CN: '文档',
      en_US: 'Documentation',
    },
    icon: 'documentation',
    path: '/documentation',
  },
  {
    code: 'guide',
    label: {
      zh_CN: '引导',
      en_US: 'Guide',
    },
    icon: 'guide',
    path: '/guide',
  },
  {
    code: 'permission',
    label: {
      zh_CN: '权限',
      en_US: 'Permission',
    },
    icon: 'permission',
    path: '/permission',
    children: [
      {
        code: 'routePermission',
        label: {
          zh_CN: '路由权限',
          en_US: 'Route Permission',
        },
        path: '/permission/route',
      },
      {
        code: 'notFound',
        label: {
          zh_CN: '404',
          en_US: '404',
        },
        path: '/permission/404',
      },
    ],
  },
];

mock.mock('/user/menu', 'get', intercepter(mockMenuList));
