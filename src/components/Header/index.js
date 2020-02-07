import React, { Fragment } from 'react'
import style from './index.css'
import { Row, Col, Typography, Icon } from 'antd';

export default function index(props) {
    const userName = props.userName;

    return (
        <Fragment>
            <Row className={style.header} type="flex" justify="space-between">
                <Col>
                    <Typography.Title level={2} className={style.title}>学生管理系统</Typography.Title>
                </Col>
                <Col>
                    <span>欢迎你</span>
                    <span>{userName || "游客"}</span>
                    {
                        userName ?
                            <Icon type="logout" className={style.btn} onClick={() => {
                                props.onLogout && props.onLogout()
                            }} /> :
                            <Icon type="login" className={style.btn} onClick={() => {
                                props.onLogin && props.onLogin()
                            }} />
                    }
                </Col>
            </Row>
        </Fragment>
    )
}
