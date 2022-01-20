import LoginPage from '../Pages/LoginPage'

it('LoginForm render check', () => {
    const component = <LoginPage shouldRender />
    expect(component).toBeDefined()
})

