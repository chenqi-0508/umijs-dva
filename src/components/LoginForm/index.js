import React from 'react'
import withRouter from 'umi/withRouter'
import style from './index.css'
import { Form, Icon, Input, Button, message } from 'antd';

function LoginForm(props) {

    const { getFieldDecorator } = props.form;

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields(async (err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                const { status, msg } = await props.loginHandle(values);
                //登录成功
                if (status === 'success') {
                    message.success(msg, 1.5, () => {
                        props.onSetLoginUser(values.account);
                        localStorage.setItem("loginId", values.account);
                        props.history.push('/');
                    });
                } else {
                    message.error(msg, 5);
                }
            }
        });
    };

    return (
        <div className={style.loginForm}>
            <Form onSubmit={handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('account', {
                        rules: [{ required: true, message: 'Please input your account!' }],
                    })(<Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="账户"
                    />)}

                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your password!' }],
                    })(<Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="密码"
                    />)}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                </Form.Item>
                <Form.Item>
                    还有没有登录？ <a href="/register" className={style.register}>立即注册！</a>
                </Form.Item>
            </Form>
        </div>
    )
}

export default withRouter(Form.create({ name: 'normal_login' })(LoginForm));
