import React, { useState } from 'react'
import style from './index.css'

import { Layout } from 'antd';

const { Header, Sider, Content } = Layout;

export default function (props) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <Layout>
                <Header>{props.header}</Header>
                <Layout className={style.main}>
                    <Sider
                        collapsible={true}
                        collapsed={collapsed}
                        onCollapse={collapsed => setCollapsed(collapsed)}
                    >
                        {props.aside}
                    </Sider>
                    <Content>{props.container}</Content>
                </Layout>
            </Layout>
        </>
    )
}
