import * as React from 'react';
import { Flex, Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Navigation from '../../Modules/Dashboard/Navigation/Navigation';

const { Header, Footer, Sider, Content } = Layout;

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff',
  padding: 5,
  borderRadius: '8px 0 0 8px',

};

const layoutStyle: React.CSSProperties = {
  borderRadius: 8,
  overflow: 'hidden',
  width: 'calc(100% - 8px)',
  maxWidth: 'calc(100% - 8px)',
};

  
const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  // height: 64,
  // paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: 'var(--bg-color-dark-Nile-blue)',
  padding: 5,
  // minHeight: 'calc(100vh)',
  // width: 'calc(100% - 8px)',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  height: 'calc(100vh - (100px))',
    // height: '100%',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
  padding: 5,
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
  padding: 5,
};


function LayoutComponent() {
  return (
    <Flex gap="middle" wrap="wrap">
      <Layout style={layoutStyle}>
         <Sider width="15%" style={siderStyle}>
           <Navigation />
         </Sider>
         <Layout>
           <Header style={headerStyle}>Text</Header>
           <Content style={contentStyle}>      
              <Outlet />
           </Content>
           <Footer style={footerStyle}>Footer</Footer>
         </Layout>
        </Layout>
      </Flex>
  );
}

export default LayoutComponent;