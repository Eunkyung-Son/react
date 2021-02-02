import { observable } from 'mobx';

class CounterStore {

    @observable
    _count = 5;

}

export default new CounterStore();
// new 키워드를 빼고 export 하면
// 사용하는 쪽에서 일일히 new 해서 사용해야하므로 이렇게 export 해준다.
