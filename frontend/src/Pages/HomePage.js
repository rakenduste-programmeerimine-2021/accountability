import { Typography, Button, Image } from 'antd'
import { useHistory } from 'react-router'
import { Layout, Menu } from 'antd';
import logo from '../assets/images/logo.png'
import './HomePage.css'
import { Link } from 'react-router-dom';
const { Paragraph } = Typography


const { Header, Content, Footer } = Layout;
const centerStyle = {
  position: 'relative',
  display: 'flex',
  justifyContent: 'right'

}

function HomePage() {
    const history = useHistory()
    return (
    <div className="Home" >
        
    <Layout>
      <Header style={{width: '100%', height: 129 }}>
        <Image className="app-logo" style={{  padding: '0 0px', marginTop: 0 }}  src={logo} preview={false}/>
        
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 440 }}>
        <p class="ex1">All registered users can video call other persons, where they get matched via call ID. This application is meant to support those who find it hard to concentrate on things like studying, cleaning up or working out. We also have a calendar where you can create a call reminder</p>
        <p class="ex1"> Register and log in to test the application </p>
          <div> 
          <Button className="redirect-login" style={{marginTop: 64 }} onClick={() => history.push('/login')}>Log in</Button>
          <div> 
      <Button className="redirect-signup" style={{marginTop: 10 }} onClick={() => history.push('/signup')}>Sign up</Button>
      </div>
      </div>
        </div>
      
          
      </Content>
      
                
      <Footer style={{ textAlign: 'center' }}>Rakenduste programmeerimine Accountability 2021</Footer>
    </Layout>

                
    </div>
    )   
}

export default HomePage