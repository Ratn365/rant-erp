import { makeAutoObservable } from "mobx";
import { createContext, useContext } from "react";
import tagsViewStore from "./TagView.Store";
import GlobalStore from "./Global.Store";
import UserStore from "./User.Store";



interface IRootStore {
  userStore: UserStore;
  globalStore: GlobalStore;
  tagViewStore: tagsViewStore;
}
//impementations
export const RootStore: IRootStore = {
  userStore: new UserStore(),
  globalStore: new GlobalStore(),
  tagViewStore: new tagsViewStore(),
};

//create context
export const StoreContext = createContext(RootStore);

//create hook to use this context
export const useStore = () => useContext(StoreContext);
