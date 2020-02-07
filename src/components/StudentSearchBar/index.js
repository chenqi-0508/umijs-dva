import React, { Component } from 'react'
import { Input, Radio, Button, Row, Col } from 'antd';
import style from './index.css'

export default class index extends Component {
    state = {
        search: this.props.search,
        sex: this.props.sex
    };

    onChange = e => {
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        return (
            <div className={style.searchBar}>
                <Row gutter={[10, 20]}>
                    <Col span={3} offset={1}>
                        <Input addonBefore="关键字" placeholder="请输入关键字" className={style.keyWord} value={this.state.search} size={"small"}
                            onChange={({ target: { value } }) => {
                                this.setState({
                                    search: value
                                })
                            }} />
                    </Col>
                    <Col span={3} offset={1}>
                        <Radio.Group className={style.sex} onChange={this.onChange} value={this.state.sex} size={"small"}
                            // eslint-disable-next-line react/jsx-no-duplicate-props
                            onChange={({ target: { value } }) => {
                                this.setState({
                                    sex: value
                                })
                            }}>
                            <Radio.Button value={0}>男</Radio.Button>
                            <Radio.Button value={1}>女</Radio.Button>
                            <Radio.Button value={-1}>不限</Radio.Button>
                        </Radio.Group>
                    </Col>
                    <Col span={3} offset={0}>
                        <Button type="primary" icon="search" size={"small"} onClick={() => {
                            this.props.onSearch({
                                search: this.state.search,
                                sex: this.state.sex
                            });
                        }}>
                            搜索
                        </Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

