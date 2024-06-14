"use client";

import { EditOutlined, SettingOutlined } from "@ant-design/icons";
import { GrView } from "react-icons/gr";
import { AiOutlineHeart } from "react-icons/ai";

import { Avatar, Card, Skeleton, Switch } from "antd";
const { Meta } = Card;

export default function CustomCard() {
  return (
    <Card
      style={{ width: 300, marginTop: 16 }}
      actions={[
        <AiOutlineHeart className="fs-5" key="wishlist" />,
        <GrView key="view" />,
      ]}
    >
      <Skeleton loading={false} avatar active>
        <Meta
          avatar={
            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
          }
          title="Card title"
          description="This is the description"
        />
      </Skeleton>
    </Card>
  );
}
