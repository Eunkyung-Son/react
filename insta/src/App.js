import React, { Component } from 'react';
import './App.css';

class App extends Component {

  // lifecycle : constructor -> componentWillMount -> render -> componentDidMount

  constructor(props) {

    super(props);

    this.state = {

      error: null,
      isLoaded: false,
      data: [],
      items: 9, // 초기에 보여줄 사진 개수
      preItems: 0, // 페이징 처리 하기 위해 다음에 뿌려줄 이미지 갯수 담을 변수

    };

  }

  componentDidMount() {

    this.callApi();
    window.addEventListener("scroll", this.infiniteScroll);

  }

  componentWillMount() {

    window.removeEventListener("scroll", this.infiniteScroll);

  }

  callApi = () => {

    const { preItems, items, data } = this.state;

    fetch("https://v1.nocodeapi.com/eunkyung1/instagram/emCOtrMwJNWBqOeI")

      .then(res => res.json())
      // 역직렬화해줌

      .then((res) => {

        const result = res.data.slice(preItems, items);
        // result에 초기에 보여줄 사진 개수 담음

        this.setState({
          isLoaded: true,
          data: [...data, ...result],

        });
      },

        (error) => {

          this.setState({

            isLoaded: true,
            error

          });

        });
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

            {data.map(item => (
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
