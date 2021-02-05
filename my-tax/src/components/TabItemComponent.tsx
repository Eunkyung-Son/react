import { Tabs } from 'antd';
import React from "react";
import './ContentComponent.css';
import TabComponent from './TabComponent';
import ContentComponent from './ContentComponent';

type Props = {
  data?: any;
  onSelectedBook?: any;
  category?: any;

};

type State = {

};



class TabItemComponent extends React.Component<Props, State> {


  onChange = (e:any) => {
    this.setState({ size: e.target.value });
  };

  render() {
      const { data, category } = this.props;

    return (

          <p>
              {category}
          </p>


    );
  }
}


export default TabItemComponent;