import { Tabs } from "antd";
import React from "react";
import "./ContentComponent.css";
import SearchBar from "./SearchBar";
import TableData from "./TableData";
import { CategoryTabConfig } from "../static_data/Datas";

import { inject, observer } from "mobx-react";
import ContentStore from "../stores/ContentStore";

type Props = {
  category: Array<CategoryTabConfig>;
  columns: any;
  contentStore?: ContentStore;
};

type State = {
  size: string;
};

const { TabPane } = Tabs;

@inject("contentStore")
@observer
class ContentComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      size: "small",
    };
  }

  onChange = (e: any) => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { contentStore, columns } = this.props;

    const ctgrItems = this.props.category.map((ctgr: CategoryTabConfig) => {
      return (
        <TabPane tab={ctgr.tabTitle} key={ctgr.key}>
          <SearchBar onSearchClient={contentStore?.onSearchClient.bind(this)} />

          <br />

          <TableData columns={columns} data={contentStore?.selectedData} />
        </TabPane>
      );
    });

    return (
      <div className="card-container">
        <Tabs
          defaultActiveKey="1"
          onChange={contentStore?.onSelectedTab}
          type="card"
        >
          {ctgrItems}
        </Tabs>
      </div>
    );
  }
}

export default ContentComponent;
