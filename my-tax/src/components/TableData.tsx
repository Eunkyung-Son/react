import React from "react";
import { Table } from 'antd';

import './TableData';


type Props = {
  datas?: any;
  columns: any;
  data?: any;
};

type State = {};


class TableData extends React.Component<Props, State> {
    render() {

        return (
            <Table
              scroll={{ x: 1500, y: 600}}
              columns={this.props.columns}
              expandable={{
                expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
                rowExpandable: record => record.name !== 'Not Expandable',
              }}
              
              dataSource={this.props.data}
              
            />
        
        )
    }
}

export default TableData;