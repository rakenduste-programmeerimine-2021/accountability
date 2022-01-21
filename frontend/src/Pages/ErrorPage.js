import { Button, Result } from 'antd'
import { useHistory } from 'react-router'
import { useContext } from 'react'
import { Context } from '../store'
import './ErrorPage.css'

function ErrorPage(){
    const history = useHistory()
    const [ state, ] = useContext(Context)

    const handleRedirect = () => {
        if(state.auth.token) {
            history.push('/testing')
        } else {
          history.push('/')
        }
    }

    return(
        <div className='error-page-main-content'>
            <Result 
              status="info"
              title='404'
              extra={
                <Button 
                  className='back-home-button'
                  onClick={handleRedirect}>Back Home
                </Button>
              }
            />
        </div>
    )
}

export default ErrorPage