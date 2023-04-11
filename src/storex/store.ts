import { makeAutoObservable } from 'mobx';
import { createContext, useContext } from 'react';
import tagsViewStore from './TagView.Store';
import GlobalStore from './Global.Store';
import UserStore from './User.Store';

interface IRootStore {
  globalStore: GlobalStore;
  userStore: UserStore;

  tagViewStore: tagsViewStore;
}
//impementations
export const RootStore: IRootStore = {
  globalStore: new GlobalStore(),
  userStore: new UserStore(),
  tagViewStore: new tagsViewStore(),
};

//create context
export const StoreContext = createContext(RootStore);

//create hook to use this context
export const useStore = () => useContext(StoreContext);
