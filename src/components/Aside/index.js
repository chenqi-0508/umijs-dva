import React from 'react'
import { NavLink } from 'umi'
import withRouter from 'umi/withRouter'
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;

function Aside({ location }) {
    return (
        <>
            <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]}>
                <Menu.Item key="/">
                    <NavLink exact to="/">
                        <Icon type="home" />
                        <span>系统首页</span>
                    </NavLink>
                </Menu.Item>
                <SubMenu title={
                    <span>
                        <Icon type="user" />
                        <span>学生管理</span>
                    </span>
                }>
                    <Menu.Item key="/student">
                        <NavLink exact to="/student">
                            <Icon type="search" />
                            <span>查询学生</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="/student/add">
                        <NavLink exact to="/student/add">
                            <Icon type="user-add" />
                            <span>添加学生</span>
                        </NavLink>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        </>
    )
}

export default withRouter(Aside);
