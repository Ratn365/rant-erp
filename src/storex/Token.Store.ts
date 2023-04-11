import { makeAutoObservable } from 'mobx';

export default class TokenStore {
  //state

  //const
  constructor() {
    makeAutoObservable(this);
  }
}
