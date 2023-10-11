import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import React from "react";
import DashboardMenu from "./DashboardMenu";
import DashboardBody from "./DashboardBody";

function DashboardLayout() {
  return (
    <div>
      {" "}
      <Layout style={{ minHeight: "100vh" }}>
        <Sider width={200} theme="light">
          {/* Sidebar content */}
          <DashboardMenu/>
        </Sider>
        <Layout>
          <Content>
            <DashboardBody/>
            {/* Dashboard content */}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default DashboardLayout;
