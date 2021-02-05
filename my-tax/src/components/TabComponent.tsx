import { Tabs, Radio } from 'antd';

import React from "react";
import './ContentComponent.css';

type Props = {
  datas?: any;
  data?: any;
  onSelectedBook?: any;
  category?: any;
};

type State = {

};

function callback(key: any) {
  console.log(key);
}

const { TabPane } = Tabs;
class TabComponent extends React.Component<Props, State> {


  onChange = (e:any) => {
    this.setState({ size: e.target.value });
  };

  render() {
        const ctgrItems = this.props.category.map
        ((ctgr: React.ReactNode) => {
            return (
                <TabPane tab={ctgr} key="1">
            </TabPane>
        )
            })
            return (
                <Tabs defaultActiveKey="" onChange={callback} type="card">
            {ctgrItems}
                </Tabs>
            ) 

}

  
}


export default TabComponent;