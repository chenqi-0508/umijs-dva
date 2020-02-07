import React from 'react'
import withRouter from 'umi/withRouter'
import {
    Form,
    Input,
    Radio,
    Select,
    Button,
    Spin,
    message
} from 'antd';

function AddStudentForm(props) {

    const { getFieldDecorator } = props.form;

    //出生年份范围
    const selectValues = [];
    for (let i = 1980; i <= 2000; i++) {
        selectValues.push(<Select.Option value={i} key={i} title={i}>{i}</Select.Option>)
    }

    //添加学生
    async function addStudent(stuInfo) {
        const { status, msg } = await props.onAddHandle(stuInfo);
        if (status === "success") {
            //跳转学生查询页
            message.success(msg, 3, props.history.push('/student'))
        } else {
            message.error(msg, 3);
        }
    }
    //修改学生
    async function updateStudent(stuInfo) {
        const { status, msg } = await props.onUpdateHandle(stuInfo);
        if (status === "success") {
            //跳转学生查询页
            message.success(msg, 3, props.history.push('/student'))
        } else {
            message.error(msg, 3);
        }
    }

    //提交表单事件
    function handleSubmit(e) {
        e.preventDefault();
        props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                if (props.stuInfo) {
                    updateStudent(values);
                } else {
                    addStudent(values);
                }
            }
        });
    }

    return (
        <Spin spinning={props.isLoading} tip="提交中，请稍后...">
            <Form onSubmit={handleSubmit}>
                <Form.Item label="学号" labelCol={{ span: 4, offset: 1 }} wrapperCol={{ span: 6 }}>
                    {getFieldDecorator("sNo", {
                        rules: [
                            {
                                required: true,
                                message: "请输入学号！"
                            }
                        ]
                    })(<Input disabled={props.stuInfo !== undefined} />)}
                </Form.Item>

                <Form.Item label="姓名" labelCol={{ span: 4, offset: 1 }} wrapperCol={{ span: 6 }}>
                    {getFieldDecorator("name", {
                        rules: [
                            {
                                required: true,
                                message: "请输入姓名！"
                            }
                        ]
                    })(<Input />)}
                </Form.Item>



                <Form.Item label="性别" labelCol={{ span: 4, offset: 1 }} wrapperCol={{ span: 6 }}>
                    {getFieldDecorator("sex", {
                        initialValue: 0,
                        rules: [
                            {
                                required: true,
                                message: "请选择性别！"
                            }
                        ]
                    })(
                        <Radio.Group>
                            <Radio.Button value={0}>男</Radio.Button>
                            <Radio.Button value={1}>女</Radio.Button>
                        </Radio.Group>)}
                </Form.Item>

                <Form.Item label="出生年份" labelCol={{ span: 4, offset: 1 }} wrapperCol={{ span: 6 }}>
                    {getFieldDecorator("birth", {
                        rules: [
                            {
                                required: true,
                                message: "请选择出生年份！"
                            }
                        ]
                    })(
                        <Select>
                            {selectValues}
                        </Select>
                    )}
                </Form.Item>

                <Form.Item label="联系方式" labelCol={{ span: 4, offset: 1 }} wrapperCol={{ span: 6 }}>
                    {getFieldDecorator("phone", {
                        rules: [
                            {
                                required: true,
                                message: "请输入学号！"
                            }
                        ]
                    })(<Input />)}
                </Form.Item>

                <Form.Item label="地址" labelCol={{ span: 4, offset: 1 }} wrapperCol={{ span: 6 }}>
                    {getFieldDecorator("address", {
                        rules: [
                            {
                                required: true,
                                message: "请输入地址！"
                            }
                        ]
                    })(<Input />)}
                </Form.Item>

                <Form.Item label="邮箱" labelCol={{ span: 4, offset: 1 }} wrapperCol={{ span: 6 }}>
                    {getFieldDecorator("email", {
                        rules: [
                            {
                                required: true,
                                message: "请输入邮箱！"
                            }, {
                                type: 'email',
                                message: '请填写正确的邮箱格式！',
                            }

                        ]
                    })(<Input />)}
                </Form.Item>

                <Form.Item wrapperCol={{ span: 4, offset: 7 }}>
                    <Button type="primary" htmlType="submit">提交</Button>
                </Form.Item>
            </Form>
        </Spin>
    )
}

function getFieldConfig(obj) {
    let result = {};
    for (const prop in obj) {
        result[prop] = Form.createFormField({
            value: obj[prop]
        });
    }
    return result;
}

const WrapperAddStudentForm = Form.create({
    mapPropsToFields: props => (getFieldConfig(props.stuInfo))
})(AddStudentForm);

export default withRouter(WrapperAddStudentForm);
