import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { AppHeader, AppContent } from "./index.styles";

const { Sider } = Layout;

const AppLayout = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const history = useHistory();

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const navigateTo = (menu) => {
    history.push(menu.key);
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["/"]}>
          <Menu.Item key="/" onClick={navigateTo}>
            Users
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <AppHeader className="site-layout-background">
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: "trigger",
            onClick: toggle,
          })}
        </AppHeader>
        <AppContent className="site-layout-background">{props.children}</AppContent>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
