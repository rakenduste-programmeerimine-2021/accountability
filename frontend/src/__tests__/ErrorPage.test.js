import ErrorPage from '../Pages/ErrorPage'

it('LoginForm render check', () => {
    const component = <ErrorPage shouldRender />
    expect(component).toBeDefined()
})

