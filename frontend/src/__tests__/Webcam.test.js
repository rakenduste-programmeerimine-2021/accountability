import Webcam from '../Components/Webcam'

it('Webcam render check', () => {
    const component = <Webcam shouldRender />
    expect(component).toBeDefined()
})
