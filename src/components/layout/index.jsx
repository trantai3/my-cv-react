import { Layout } from "antd";
const { Header, Sider, Content, Footer } = Layout;
import "../../../src/assets/styles/layout.css";
import { Outlet } from "react-router-dom";
import HeaderMain from "./header/";
import FooterMain from "./footer";
import SiderMain from "./sider";

const LayoutMain = () => {
  return (
    <Layout className="!min-h-screen p-7">
      <Sider width="26%" className="!bg-[#f5f5f5]">
        <SiderMain />
      </Sider>
      <Layout>
        <Header className="!bg-white !pl-0 !pr-[20px] rounded-2xl">
          <HeaderMain />
        </Header>
        <Content>
          <Outlet />
        </Content>
        <Footer className="!px-0">
          <FooterMain />
        </Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutMain;
