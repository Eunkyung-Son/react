import { observable, action, makeObservable } from 'mobx';

class CounterStore {

    constructor() {
        makeObservable(this);
    }

    @observable
    _count = 5;

    get count() {
        return this._count;
    }

    @action
    increament() {
        this._count++;
    }

    @action
    decreament() {
        this._count--;
    }

}

export default new CounterStore();
// new 키워드를 빼고 export 하면
// 사용하는 쪽에서 일일히 new 해서 사용해야하므로 이렇게 export 해준다.
