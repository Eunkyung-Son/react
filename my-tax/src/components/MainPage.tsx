import React from "react";

import ContentComponent from "./ContentComponent";
import "./MainPage.css";

import Datas from "../static_data/Datas";

import "antd/dist/antd.css";
import { Layout, Select, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  CalculatorOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";

import HeaderLogo from "../photofile/HeaderLogo.svg";

type Props = {};

type State = {
  collapsed: boolean;
};

const { Header, Content, Sider } = Layout;

const { Option } = Select;

class MainPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  onCollapse = (collapsed: boolean) => {
    this.setState({ collapsed });
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Header className="header">
          {React.createElement(
            this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: this.toggle,
            }
          )}

          <img src={HeaderLogo} alt="" className="logo" />

          <Select
            defaultValue="(주)투비케어"
            style={{ width: 200, marginLeft: 100 }}
          >
            (주)투비케어
          </Select>
        </Header>

        <Layout>
          <Sider className="Left-Sider">
            <Menu mode="inline">
              <Menu.Item icon={<CalculatorOutlined />}>회계관리</Menu.Item>
              <Menu.Item icon={<DatabaseOutlined />}>데이터관리</Menu.Item>
            </Menu>
          </Sider>

          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
            className="Right-Sider"
          >
            <Menu mode="inline">
              <Menu.Item key="1">매출매입장</Menu.Item>
              <Menu.Item key="2">예금출납장</Menu.Item>
              <Menu.Item key="3">계정별원장</Menu.Item>
              <Menu.Item key="4">거래처별원장</Menu.Item>
            </Menu>
          </Sider>

          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <ContentComponent
              category={Datas.Category}
              columns={Datas.Columns}
            />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default MainPage;
