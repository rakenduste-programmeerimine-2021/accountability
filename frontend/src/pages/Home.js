import WebcamSample from '../components/webcam';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';


const { Header, Content, Footer } = Layout;
const centerStyle = {
  position: 'relative',
  display: 'flex',
  justifyContent: 'right',
}

const Home = () => (
    <div className="Home" >
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={centerStyle} >
          <Menu.Item key="1">My calls</Menu.Item>
          <Menu.Item key="2">Book a call</Menu.Item>
          <Menu.Item key="3">Call history</Menu.Item>
          <Menu.Item key="4">Notifications</Menu.Item>
          <Link to="account">
          <Menu.Item key="5">My account</Menu.Item>
          </Link>
          < div className="items" />
        </Menu>
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 570 }}>
          Test your Webcam!
          <WebcamSample />
        </div>
      
          
      </Content>
      <Footer style={{ textAlign: 'center' }}>Rakenduste programmeerimine Accountability 2021</Footer>
    </Layout>
  
    </div>
  );

  export default Home;