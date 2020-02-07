import React from 'react'
import { Table, Pagination, Button } from 'antd';
// import NavLink from 'umi/navlink'
import style from './index.css'


const columns = [
    {
        title: '学号',
        dataIndex: 'sNo',
        key: 'sNo',
    },
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '出生年份',
        dataIndex: 'birth',
        key: 'birth',
    },
    {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
        render: text => text === 0 ? "男" : "女"
    },
    {
        title: '联系方式',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: '地址',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '邮箱',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: '操作',
        dataIndex: '',
        key: 'detail',
        align: "center",
        render: (text, record, index) => {
            return (
                <>
                <Button type="primary" href={`/student/${text.sNo}`} size={"small"} >详情</Button>
                {/* <NavLink to={`/student/${text.sNo}`}><Tag color="cyan">详情</Tag></NavLink> */}
                </>
            )
        }
    }
];

export default function (props) {
    const stuDatas = props.stu.datas;
    const data = stuDatas.map((item, index) => {
        return {
            ...item,
            key: item.sNo
        }
    })
    const pageChange = (page, pageSize) => {
        props.onPageChange(page);
    }
    return (
        <div>
            <Table
                pagination={false}
                bordered={true}
                columns={columns}
                dataSource={data}
                loading={props.isLoading}
                size={"small"}
            />

            <Pagination
                className={style.pager}
                current={props.page}
                pageSize={props.limit}
                total={props.stu.total}
                onChange={pageChange}
            />
        </div>
    )
}
