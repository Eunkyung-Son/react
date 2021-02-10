import { RouterStore } from 'mobx-react-router';
import ContentStore from './ContentStore';

class RootStore {
    routing: RouterStore;
    contentStore:ContentStore;

    
    constructor() {
        this.routing = new RouterStore();
        this.contentStore = new ContentStore(this);
    }


}



export default RootStore;



