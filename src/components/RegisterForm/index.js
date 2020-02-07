import React from 'react'
import style from './index.css'
import withRouter from 'umi/withRouter'
import {
    Form,
    Input,
    Button,
    message
} from 'antd';

class RegistrationForm extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    //注册
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll(async (err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                const { status, msg } = await this.props.onRegisterSubmit(values)
                console.log({ status, msg });
                //注册成功
                if (status === 'success') {
                    message.success(msg, 1.5, () => {
                        this.props.history.push('/login');
                    });
                } else {
                    message.error(msg, 5);
                }
            }
        });
    };



    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };

    handleWebsiteChange = value => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({ autoCompleteResult });
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };

        return (
            <div className={style.registerForm}>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item label="账号">
                        {getFieldDecorator('account', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your account!',
                                },
                            ],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="用户名">
                        {getFieldDecorator('username', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="密码" hasFeedback>
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                                {
                                    validator: this.validateToNextPassword,
                                },
                            ],
                        })(<Input.Password />)}
                    </Form.Item>
                    <Form.Item label="重复密码" hasFeedback>
                        {getFieldDecorator('rePassword', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                {
                                    validator: this.compareToFirstPassword,
                                },
                            ],
                        })(<Input.Password onBlur={this.handleConfirmBlur} />)}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            立即注册
                    </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default withRouter(Form.create({ name: 'register' })(RegistrationForm));
