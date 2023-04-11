import { makeAutoObservable } from 'mobx';
import type { Role } from '@/interface/login';
import type { Device } from '@/interface/layout/index.interface';
import type { MenuChild } from '@/interface/layout/menu.interface';

export type Locale = 'zh_CN' | 'en_US';

export interface UserState {
  username: string;

  /** menu list for init tagsView */
  menuList: MenuChild[];

  /** login status */
  logged: boolean;

  role: Role;

  /** user's device */
  device: Device;

  /** menu collapsed status */
  collapsed: boolean;

  /** notification count */
  noticeCount: number;

  /** user's language */
  locale: Locale;

  /** Is first time to view the site ? */
  newUser: boolean;
}

const device = /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent) ? 'MOBILE' : 'DESKTOP';
const collapsed = device !== 'DESKTOP';

export default class UserStore {
  //state
  userState: UserState = {
    username: localStorage.getItem('username') || '',
    menuList: [],
    logged: localStorage.getItem('t') ? true : false,
    role: (localStorage.getItem('username') || '') as Role,
    device: device,
    collapsed: collapsed,
    noticeCount: 0,
    locale: (localStorage.getItem('locale')! || 'en_US') as Locale,
    newUser: JSON.parse(localStorage.getItem('newUser')!) ?? true,
  };
  //const
  constructor() {
    makeAutoObservable(this);
  }
  setUserItem({ username }: UserState) {
    //check username pramas with userState.username,
    //if its not equal than set params userName in localStorage (Browser)
    if (username !== this.userState.username) {
      localStorage.setItem('username', username || '');
    }
  }
  //action
}
