import { Typography, Image } from 'antd'
import LoginForm from '../Components/LoginForm'
import logo from '../assets/images/logo.png'
import { Layout, Menu } from 'antd';
import './HomePage.css'

const { Title } = Typography
const { Header, Content, Footer } = Layout;
const centerStyle = {
  position: 'relative',
  display: 'flex',
  justifyContent: 'right'

}

function LoginPage(){
    return(

        
        <div className='login-page-main-content'>
          <Layout>
           <Header style={{width: '100%', height: 129 }}>
        <Image className="app-logo" style={{  padding: '0 0px', marginTop: 0 }}  src={logo} preview={false}/>
        
      </Header>

      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 50 }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 440 }}>
        <p class="ex1">Now that you've signed up you can login.</p>
          <LoginForm/>
          <div> 
    
      </div>
      </div>
      
          
      </Content>
      
                
      <Footer style={{ textAlign: 'center' }}>Rakenduste programmeerimine Accountability 2021</Footer>
    </Layout>

                
    </div>
    )   
}

export default LoginPage