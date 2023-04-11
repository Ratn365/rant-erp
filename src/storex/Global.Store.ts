import { makeAutoObservable } from 'mobx';

interface GlobalState {
  theme: 'light' | 'dark';
  loading: boolean;
}

const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const userTheme = localStorage.getItem('theme') as GlobalState['theme'];

export default class GlobalStore {
  //state
  global: GlobalState = {
    theme: userTheme || systemTheme,
    loading: false,
  };
  //const
  constructor() {
    makeAutoObservable(this);
  }
  //action
  setGlobalState({ theme }: GlobalState) {
    if (theme) {
      const body = document.body;
      if (theme === 'dark') {
        if (!body.hasAttribute('theme-mode')) {
          body.setAttribute('theme-mode', 'dark');
        }
      } else {
        if (body.hasAttribute('theme-mode')) {
          body.removeAttribute('theme-mode');
        }
      }
    }
  }
}
