import { observable, action, runInAction, computed, makeObservable } from 'mobx';

interface ItemType {

id: number,
media_type: string,
permalink: string,
media_url: string,
thumbnail_url: string,

};
class InstaStore {

  constructor() {
  
    makeObservable(this);
    
  }
  @observable data: Array<ItemType> = [];
  @observable error: any = null;
  @observable isLoaded: boolean = false;
  @observable items: number = 12;
  @observable preItems: number = 0;
  @observable result: any = [];

  
  @action.bound
  callApi = async () => {

    const { preItems, items } = this;

    try {

      const url = 'https://v1.nocodeapi.com/eunkyung1/instagram/emCOtrMwJNWBqOeI';

      const res = await fetch(url);
      const todo = await res.json();
    
      this.result = todo.data.slice(preItems, items);
      console.log(this.result);
      runInAction(() => {
        
        this.setInitArr();
      })


    } catch (error) {
      runInAction(() => {

        this.setErr();
      })
    }
  }

  @action
  infiniteScroll = async () => {

    const { documentElement, body } = document;

    const siteHeight = Math.max(documentElement.scrollHeight, body.scrollHeight);
    // 사이트의 총 길이
    const scrollTop = Math.max(documentElement.scrollTop, body.scrollTop);
    // 스크롤을 내렸을 때 이미 올라가버린 구간
    const clientHeight = documentElement.clientHeight;
    // 스크롤의 길이

    if (scrollTop + clientHeight >= siteHeight) {

      console.log("스크롤 동작");

      runInAction(() => {

        this.setData();
      });
      // 스크롤이 끝에 도달했을 때 다시 res 객체 요청
      await this.callApi();

    }

  };

  @action 
  setData() {
    this.preItems = this.items;
    this.items = this.items + 3;
  }

  @action
  setInitArr() {
    this.isLoaded = true;
    this.data = [...this.data, ...this.result];

  }

  @action
  setErr() {
    this.isLoaded = true;
    this.error = true;
  }

  @computed
  get getData(){
    return this.data;
  }
}


export default InstaStore;


// class rootStore {
//   instaStore = new InstaStore();

// }