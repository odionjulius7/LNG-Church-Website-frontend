"use client";
import { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Button } from "antd";
const { Header } = Layout;

export default function (props) {
  const { collapsed, setCollapsed } = props;

  return (
    <Header
      style={{
        padding: 0,
        // background: colorBgContainer,
        background: "white",
      }}
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed((prev) => !prev)}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
          background: "white",
        }}
      />
    </Header>
  );
}
