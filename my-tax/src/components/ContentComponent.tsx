import { Tabs, Radio } from 'antd';
import React from "react";
import './ContentComponent.css';
import SearchBar from './SearchBar';
import TableComponent from './TableComponent';

import Datas from './Datas';

type Props = {

};

type State = {

    size: string;
    datas: any;
    selectedBook: any;
    category: any;

  };

function callback(key: any) {
  console.log(key);
}                 

const { TabPane } = Tabs;

class ContentComponent extends React.Component<Props, State> {


    constructor(props:Props) {
        super(props);
        this.state = {
            size: 'small',
            datas: Datas.Datas,
            category: Datas.Category,
            selectedBook: Datas.Datas[0],
        }
    }


//   onSearchTitle(title:string) {
//     let updateList = Datas;
//     updateList = updateList.filter((data: { date: string; }) => {
//       return data.date.toLowerCase().search(title.toLowerCase()) !== -1;
//     });

//     this.setState({
//       datas: updateList,

//     })
//   }

//   onSelectedBook(data:any) {
//     this.setState({
//       selectedBook: data,
//     });
//   }


  onChange = (e:any) => {
    this.setState({ size: e.target.value });
  };



  render() {
    const ctgrItems = this.state.category.map
        
    ((ctgr: React.ReactNode, i: number) => {

        return (

            <TabPane tab={ctgr} key={i}>
            </TabPane>
        )
      
      })

    return (
      <div>
        <Tabs defaultActiveKey=""
              onChange={callback}
              type="card">

          {ctgrItems}

        </Tabs>

          <SearchBar />

          <TableComponent datas={this.state.datas}/>

      </div>
    );
  }
}


export default ContentComponent;