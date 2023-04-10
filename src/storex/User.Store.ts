import { makeAutoObservable } from "mobx";

export default class GlobalStore {
    //state


    //const
    constructor() {
        makeAutoObservable(this);
    }
}