import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useContext } from 'react'
import './App.css'
import { Layout } from 'antd'
import HomePage from './Pages/HomePage'
import SignupPage from './Pages/SignupPage'
import LoginPage from './Pages/LoginPage'
import ProtectedRoute from './Components/ProtectedRoute'
import { Context } from './store'
import Firsttesting from './Pages/Firsttesting'
import Calendar from "./Pages/Calendar"
import ErrorPage from './Pages/ErrorPage'
import Videochat from './Pages/Videochat'


const { Content } = Layout

function App() {
  const [ state, ] = useContext(Context)
  const isAuth = state.auth.token

  return (
    <BrowserRouter>
      <Layout style={{ minHeight: '100vh'}}>
        <Content>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/signup' component={SignupPage} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/videochat' component={Videochat} />
            <ProtectedRoute exact path="/calendar" component={Calendar}  isAuth={isAuth} />
            <ProtectedRoute exact path='/testing' component={Firsttesting} isAuth={isAuth}/>
            <Route path='*' component={ErrorPage}/>
          </Switch>
        </Content>
      </Layout>
    </BrowserRouter>
  );
}

export default App