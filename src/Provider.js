"use client";
import { Provider } from "react-redux";
import { store } from "./store";

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/Header/Header";
import CustomFooter from "@/components/Footer/CustomFooter";
import { usePathname } from "next/navigation";
import AdminFooter from "@/components/AdminFooter/AdminFooter";
import AdminHeader from "@/components/AdminHeader/AdminHeader";
import AdminSidebar from "@/components/AdminSidebar/AdminSidebar";
// import { Providers } from "@/Provider";
import { Suspense } from "react";
import { Layout } from "antd";

export function Providers({ children }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Provider store={store}>
      <Suspense fallback={<p>Loading...</p>}>
        <Layout>
          {pathname.includes("/admin") && (
            <AdminSidebar collapsed={collapsed} />
          )}
          <Layout>
            {!pathname.includes("/admin") ? (
              <Header />
            ) : (
              <AdminHeader collapsed={collapsed} setCollapsed={setCollapsed} />
            )}
            <div className={pathname.includes("/admin") && "p-3"}>
              {" "}
              {children}
            </div>

            {!pathname.includes("/admin") ? <CustomFooter /> : <AdminFooter />}
          </Layout>
        </Layout>
      </Suspense>
    </Provider>
  );
}
