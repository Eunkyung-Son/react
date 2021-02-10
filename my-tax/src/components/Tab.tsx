import { Tabs, Radio } from 'antd';

import React from "react";
import './ContentComponent.css';

type Props = {
  datas?: any;
  category?: any;
  onSelectedTab?: any;
  data?: any;
};

type State = {

};

function callback(key: any) {
  console.log(key);
}

const { TabPane } = Tabs;

class Tab extends React.Component<Props, State> {


  onChange = (e:any) => {
    this.setState({ size: e.target.value });
  };

  render() {
        const { data, onSelectedTab } = this.props;

        const ctgrItems = this.props.category.map
        ((ctgr: React.ReactNode) => {

            return (
              <TabPane
                tab={ctgr}
                key="1" >
              </TabPane>
            )

          })
            return (
                <Tabs 
                  defaultActiveKey=""
                  //onClick={() => onSelectedTab(data)}
                  type="card">
                    {ctgrItems}
                </Tabs>
            ) 

      
        //         const ctgrItems = this.props.category.map
        // ((ctgr: React.ReactNode) => {
        //     return (
        //         <TabPane tab={ctgr} key="1">
        //     </TabPane>
        // )
        //     })
        //     return (
        //         <Tabs defaultActiveKey="" onChange={callback} type="card">
        //     {ctgrItems}
        //         </Tabs>
        //     ) 

}

}

  



export default Tab;