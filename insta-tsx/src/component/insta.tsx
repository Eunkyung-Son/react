import React from 'react';
import '../insta.css';
import InstaStore from '../stores/InstaStore';

import { inject, observer } from 'mobx-react';

type Props = {
  instaStore?: InstaStore;
};

type State = {};

@inject('instaStore')
@observer
class Insta extends React.Component<Props, State> {
  
  
  async componentWillMount() {
    
    const { instaStore } = this.props;
    
    
    window.removeEventListener("scroll", (event)=> instaStore?.infiniteScroll());
    
  }
  
   async componentDidMount() {
    
    const { instaStore } = this.props;
        
       await instaStore?.callApi();
        
        window.addEventListener("scroll", (event) => instaStore?.infiniteScroll());

  }





  render() {

    const { instaStore } = this.props;

    if (instaStore?.error) {

      return <div>Error: {instaStore?.error.message}</div>;

    } else if (!instaStore?.isLoaded) {

      return <div>Loading...</div>;

    } else {
      
      return (
        
        <div className="instagram-container">
          <div className="title">instagram</div>
          <div className="temp"></div>
          <ul className="myfeed">

            {/* 컴포넌트화 시키기 */}
            {instaStore?.getData.map((item) => (
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

export default Insta;

