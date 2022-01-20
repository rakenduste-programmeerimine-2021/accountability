import SignupPage from '../Pages/SignupPage'

it('LoginForm render check', () => {
    const component = <SignupPage shouldRender />
    expect(component).toBeDefined()
})

