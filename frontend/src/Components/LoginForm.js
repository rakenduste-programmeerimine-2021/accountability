import { Form, Input, Button, notification, Row, Col } from 'antd';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useContext } from "react";
import { Context } from "../store";
import { loginUser } from "../store/actions";
import './LoginForm.css'

function LoginForm(){
    const [ , dispatch ] = useContext(Context);
    const history = useHistory();
    const [form] = Form.useForm();

    const handleLoginForm = async (values) => {
        const userLoginInfo = {
            email: values.email,
            password: values.password
        }

        try {
            const response = await axios.post('http://localhost:8081/api/auth/login', userLoginInfo)

            sessionStorage.setItem('token', response.data.token)
            sessionStorage.setItem('user', JSON.stringify(response.data.user))

            dispatch(loginUser(response.data));
            history.push("/testing");
           
            form.resetFields()
        } catch (error) {
            
            notification.error({
                message: 'Something went wrong...!',
                duration: 0,
            })
        }
    }

    return(
        <>
            <Row type='flex' align='left'>
                <Col xs={22} className='login-column'>
                    <Form 
                        form={form} 
                        size="small"
                        onFinish={handleLoginForm} 
                        autoComplete='off' 
                        labelCol={{ span: 5 }} 
                        >
                        <Form.Item 
                            label='Email' 
                            name='email' 
                            className='login-form-row'
                            rules={[
                                { 
                                    required: true, 
                                    message:'Please insert email'
                                }
                            ]}
                            >
                            <Input 
                                className='login-form-input-field'
                                autoFocus
                            />
                        </Form.Item>

                        <Form.Item 
                            label='Password' 
                            name='password' 
                            rules={[
                                { 
                                    required: true, 
                                    message:'Please insert password'
                                }
                            ]}
                            >
                            <Input.Password className='login-form-input-field' />
                        </Form.Item>

                        <Form.Item>
                            <Button 
                                type="default" 

                                htmlType="submit"
                                className='login-form-submit-button'
                                >
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </>
    )
}

export default LoginForm