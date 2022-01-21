import SignupForm from '../Components/SignupForm'

it('SignupForm render check', () => {
    const component = <SignupForm shouldRender />
    expect(component).toBeDefined()
})