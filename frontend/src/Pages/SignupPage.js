import axios from 'axios';
import logo from '../assets/images/logo.png'
import { Layout, Menu } from 'antd';
import { useHistory } from 'react-router-dom'
import SignupForm from "../Components/SignupForm"
import { Typography, Image } from 'antd'
import './SignupPage.css'
const { Title } = Typography
const { Header, Content, Footer } = Layout;
const centerStyle = {
  position: 'relative',
  display: 'flex',
  justifyContent: 'right'

}

function SignupPage(){
    const history = useHistory();

    const addNewUserToDB = async (user) => {
        const response = await axios.post('http://localhost:8081/api/auth/signup', user)
        if(response.status === 200) {
            history.push("/login");
        }
    }

    return(
        <div className='login-page-main-content'>
          <Layout>
           <Header style={{width: '100%', height: 129 }}>
        <Image className="app-logo" style={{  padding: '0 0px', marginTop: 0 }}  src={logo} preview={false}/>
        
      </Header>

      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 50 }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 440 }}>
        <p class="ex1">Insert your name, email and password to register</p>
        <SignupForm addNewUserToDB={addNewUserToDB}/>
          <div> 
    
      </div>
      </div>
      
          
      </Content>
      
                
      <Footer style={{ textAlign: 'center' }}>Rakenduste programmeerimine Accountability 2021</Footer>
    </Layout>

                
    </div>
    )   
}

export default SignupPage

