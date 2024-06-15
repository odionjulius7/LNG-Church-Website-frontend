"use client";
import { Layout } from "antd";
const { Footer } = Layout;

export default function AdminFooter() {
  return (
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      Sophis&apos; Dev &copy;{new Date().getFullYear()} Created by Julius
    </Footer>
  );
}
