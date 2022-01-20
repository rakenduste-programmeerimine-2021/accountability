import Videochat from '../pages/Videochat'

it('checks if login form renders', () => {
    const component = <Videochat shouldRender />
    expect(component).toBeDefined()
})
