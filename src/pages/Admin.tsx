import React from "react";
import { Layout, Menu } from "antd";
import "./Admin.scss";
import { Link } from "react-router-dom";

const { Sider } = Layout;

export const Admin: React.FC = () => {
  return (
    <>
      <Sider className="sider" trigger={null} collapsible theme="dark">
        <Menu theme="dark" mode="inline">
          <Menu.Item key="user">
            <Link to={"/manage/user"}>Users</Link>
          </Menu.Item>
          <Menu.Item key="film">Films</Menu.Item>
          <Menu.Item key="category">Categories</Menu.Item>
          <Menu.Item key="show">Show Schedule</Menu.Item>
          <Menu.Item key="review">Review</Menu.Item>
        </Menu>
      </Sider>
    </>
  );
};
