import { RouterStore } from 'mobx-react-router';

import { HeaderStore } from './';

export default class RootStore {

    routing: any = RouterStore;
    headerStore: any = HeaderStore;

    constructor() {
        this.routing = new RouterStore();
        this.headerStore = new HeaderStore(this);

    }
}