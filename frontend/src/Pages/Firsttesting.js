import WebcamSample from '../Components/Webcam';
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
          <Link to="calendar">
          <Menu.Item key="2">Calendar</Menu.Item>
          </Link>
          <Link to="videochat">
          <Menu.Item key="3">Start a videochat!</Menu.Item>
          </Link>
          <Link to="/">
          <Menu.Item key="4">Log Out</Menu.Item>
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