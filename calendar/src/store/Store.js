import { observable, action, makeAutoObservable } from 'mobx'

class Store {
    likesCount = 12;

    constructor() {
        makeAutoObservable(this);
    }

    updateCount() {
        this.likesCount++;
    }
}

const storeInstance = new Store();

export default storeInstance;