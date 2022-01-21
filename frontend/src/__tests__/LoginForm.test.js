import LoginForm from '../Components/LoginForm'

it('LoginForm render check', () => {
    const component = <LoginForm shouldRender />
    expect(component).toBeDefined()
})

