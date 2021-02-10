
import React from 'react';

import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

import { DatePicker, Space } from 'antd';



type Props = {
  onSearchClient: any;
};

type State = {

};

const { RangePicker } = DatePicker;

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
      
    }}
  />
);


class SearchBar extends React.Component<Props, State> {


render() {
  const { onSearchClient } = this.props;
    return (
    <Space direction="horizontal">
        
        <RangePicker 
        />

        <Search
          placeholder="검색할 거래처명을 입력하세요."
          allowClear
          enterButton="검색"
          size="middle"
          onSearch={(event:any) => onSearchClient(event)}


        />
      </Space>
    )
}
}


export default SearchBar;