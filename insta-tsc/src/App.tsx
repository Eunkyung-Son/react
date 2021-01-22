import React from 'react';
import './App.css';

interface ItemType {

  id: number,
  media_type: string,
  permalink: string,
  media_url: string,
  thumbnail_url: string,

};

type Props = {};

type State = {

  error: any, // null 타입 같은 경우 어떻게 해야할까?
  isLoaded: boolean,
  data: Array<ItemType>,
  items: number,
  preItems: number,

}

class App extends React.Component<Props, State> {

  constructor(props: Props) {

    super(props);

    this.state = {

      error: null,
      isLoaded: false,
      data: [],
      items: 12, 
      preItems: 0, 
    
    };

  }

  async componentWillMount() {

    window.removeEventListener("scroll", this.infiniteScroll);

  }

  async componentDidMount() {

    this.callApi();
    window.addEventListener("scroll", this.infiniteScroll);

  }


  callApi = async () => {

    const { preItems, items, data } = this.state;

    try {

      const url = 'https://v1.nocodeapi.com/eunkyung1/instagram/emCOtrMwJNWBqOeI';

      const res = await fetch(url);
      const todo = await res.json();
    
      const result = todo.data.slice(preItems, items);

      this.setState({

        isLoaded: true,
        data: [...data, ...result],

      });

    } catch (error) {

        this.setState({

        isLoaded: true,
        error

      });
    }
  }

  infiniteScroll = () => {

    const { documentElement, body } = document;
    const { items } = this.state;

    const siteHeight = Math.max(documentElement.scrollHeight, body.scrollHeight);
    // 사이트의 총 길이
    const scrollTop = Math.max(documentElement.scrollTop, body.scrollTop);
    // 스크롤을 내렸을 때 이미 올라가버린 구간
    const clientHeight = documentElement.clientHeight;
    // 스크롤의 길이

    if (scrollTop + clientHeight >= siteHeight) {

      console.log("스크롤 동작");

      this.setState({

        preItems: items,
        items: items + 3,

      });
      // 스크롤이 끝에 도달했을 때 다시 res 객체 요청
      this.callApi();

    }

  };


  render() {

    const { error, isLoaded, data } = this.state;

    if (error) {

      return <div>Error: {error.message}</div>;

    } else if (!isLoaded) {

      return <div>Loading...</div>;

    } else {
      
      return (
        
        <div className="instagram-container">
          <div className="title">instagram</div>
          <div className="temp"></div>
          <ul className="myfeed">

            {data.map((item:ItemType) => (

              <li key={item.id}>

                { item.media_type === 'IMAGE' ? <a href={item.permalink}><img src={item.media_url} alt="" /></a> : <a href={item.permalink}><img src={item.thumbnail_url} alt="" className="video" /></a>}

              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default App;

