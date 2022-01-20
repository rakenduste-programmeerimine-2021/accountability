import { Route, Redirect } from 'react-router-dom'

function ProtectedRoute({ isAuth, component: Component, ...rest }) {
  return (
    <Route 
      {...rest} 
      render={(props) => {
        if (isAuth) {
          return <Component />
        }
        return (<Redirect to={{pathname: '/', state: {from: props.location}}} />)
      }}
    />
  )
}

export default ProtectedRoute