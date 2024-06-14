"use client";
import React, { useState } from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Avatar, Layout, Menu } from "antd";
import { useRouter } from "next/navigation";
const { Sider } = Layout;

export default function AdminSidebar(props) {
  // const [collapsed, setCollapsed] = useState(false);
  const { collapsed } = props;
  const router = useRouter();
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical d-flex justify-content-center align-align-items-center py-3">
        <Avatar src="/sophiz-logo.jpg" />
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        onClick={({ key }) => {
          router.push(`/admin/tutorials/${key}`);
        }}
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: "Tutorials",
            children: [
              {
                key: "add-tutorial-category",
                icon: <UserOutlined />,
                label: "Tutorials Category",
              },
              {
                key: "view-tutorial-category",
                icon: <UserOutlined />,
                label: "View Tutorial Category",
              },
              {
                key: "add-tutorials",
                icon: <UserOutlined />,
                label: "Add Tutorials",
              },

              {
                key: "view-tutorials",
                icon: <UserOutlined />,
                label: "View/Edit/Delete Tuts ",
              },
            ],
          },
          {
            key: "2",
            icon: <VideoCameraOutlined />,
            label: "nav 2",
          },
          {
            key: "3",
            icon: <UploadOutlined />,
            label: "nav 3",
          },
        ]}
      />
    </Sider>
  );
}
