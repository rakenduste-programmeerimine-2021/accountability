import React from 'react';
import './App.css';
import { Layout, Menu } from 'antd';
import Webcam from "react-webcam";

const { Header, Content, Footer } = Layout;
const centerStyle = {
  position: 'relative',
  display: 'flex',
  justifyContent: 'right',
}


const App = () => (
  <div className="app" >
  <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={centerStyle} >
        <Menu.Item key="1">My calls</Menu.Item>
        <Menu.Item key="2">Book a call</Menu.Item>
        <Menu.Item key="3">Call history</Menu.Item>
        <Menu.Item key="4">Notifications</Menu.Item>
        <Menu.Item key="5">My account</Menu.Item>
        < div className="items" />
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 570 }}>
        Test your Webcam!
        <Webcam />
      </div>
    
        
    </Content>
    <Footer style={{ textAlign: 'center' }}>Rakenduste programmeerimine Accountability 2021</Footer>
  </Layout>

  </div>
);

export default App;