
import React from 'react';

import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

import { DatePicker, Space } from 'antd';


type Props = {

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

const onSearch = (value:any) => console.log(value);

class SearchBar extends React.Component<Props, State> {


render() {
    return (
    <Space direction="horizontal">
        
        <RangePicker showTime />

        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
      </Space>
    )
}
}


export default SearchBar;