import { Layout } from "antd";
const { Header, Sider, Content, Footer } = Layout;
import { Outlet } from "react-router-dom";
import HeaderMain from "./header/";
import FooterMain from "./footer";
import SiderMain from "./sider";
import "../../assets/styles/layout.css";
const LayoutMain = () => {
  return (
    <Layout className="!min-h-screen p-7">
      <div className="flex flex-col xl:flex-row gap-6 w-full">
        <Sider width="20%" className="!bg-[#f5f5f5] custom-sider">
          <SiderMain />
        </Sider>
        <Layout className="xl:ml-6 w-full">
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
      </div>
    </Layout>
  );
};

export default LayoutMain;
