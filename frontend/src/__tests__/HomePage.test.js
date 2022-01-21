import Homepage from '../Pages/HomePage'

it('LoginForm render check', () => {
    const component = <Homepage shouldRender />
    expect(component).toBeDefined()
})

