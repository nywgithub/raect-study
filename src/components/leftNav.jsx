import React from "react";
import { Link } from "react-router-dom";
import { browserHistory } from "react-router";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

class LeftNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMenu: ["1"],
    };
  }
  handleClick = (e) => {
    console.log(e.key);
    let currentMenu = [];
    currentMenu.push(e.key);
    this.setState({
      currentMenu: currentMenu,
    });
  };

  componentWillMount() {
    this.setState({
      currentMenu: ["3"],
    });
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={this.state.currentMenu}
        defaultOpenKeys={["sub1", "sub2", "sub3", "sub4"]}
        mode="inline"
      >
        <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
          <Menu.ItemGroup key="g1" title="Item 1">
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">
              <Link to="/Page1">Page1</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/Page2">Page2</Link>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default LeftNav;
