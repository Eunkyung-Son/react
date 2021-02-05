import React from "react";
import { Table } from 'antd';


type Props = {
  datas: any;
};

type State = {};

const columns = [
  { title: '날짜', dataIndex: 'date', key: 'date' },
  { title: '유형코드', dataIndex: 'typeCode', key: 'code' },
  { title: '불공제', dataIndex: 'DeductionYN', key: 'DeductionYN' },
  { title: '품명', dataIndex: 'productName', key: 'productName'},
  { title: '공급가액', dataIndex: 'supplyValue', key: 'supplyValue'},
  { title: '부가세', dataIndex: 'surtax', key: 'surtax'},
  { title: '합계', dataIndex: 'total', key: 'total'},
  { title: '거래처코드', dataIndex: 'clientCode', key: 'clientCode'},
  { title: '거래처명', dataIndex: 'clientName', key: 'clientName'},
  { title: '사업,주민번호', dataIndex: 'identity', key: 'identity'},
  { title: '전자', dataIndex: 'electronic', key: 'electronic'},
  { title: '카드번호', dataIndex: 'cardNumber', key: 'cardNumber'},
  { title: '카드코드', dataIndex: 'cardCode', key: 'cardCode'},
  { title: '기본계정코드', dataIndex: 'defaultAccountCode', key: 'defaultAccountCode'},
  { title: '기본계정명', dataIndex: 'defaultAccountName', key: 'defaultAccountName'},
  { title: '상대계정코드', dataIndex: 'relationAccountCode', key: 'relationAccountCode'},
  { title: '상대계정명', dataIndex: 'relationAccountName', key: 'relationAccountName'},
  { title: '수집마감', dataIndex: 'collectionEnd', key: 'collectionEnd'},


];

class TableComponent extends React.Component<Props, State> {
    render() {
      
        return (
            <Table
    columns={columns}
    expandable={{
      expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
      rowExpandable: record => record.name !== 'Not Expandable',
    }}
    dataSource={this.props.datas}
  />
        
        )
    }
}

export default TableComponent;