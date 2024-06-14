"use client";
import { Button, Flex } from "antd";

export default function CustomButton(props) {
  const { title, className, type, onClick } = props;
  return (
    <Button type={type} className={className} shape="round" onClick={onClick}>
      {title}
    </Button>
  );
}
