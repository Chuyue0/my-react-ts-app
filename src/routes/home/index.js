/**
 * Home路由
 */

import React from 'react';
import { Link } from "react-router-dom";
import { Button, Table, Tag, Space } from 'antd';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectColumnKeys: [],
            loading: false,
            hasColumnKey: false,
        };
    }
    // handler
    start = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({
                selectColumnKeys: [],
                loading: false
            })
        }, 1000);
    }
    onSelectChange = selectColumnKeys => {
        const hasColumnKey = selectColumnKeys && selectColumnKeys.length > 0;
        console.log(selectColumnKeys, hasColumnKey)
        this.setState({ selectColumnKeys, hasColumnKey })
    }
    render() {
        const { Column, ColumnGroup } = Table;
        const { loading, selectColumnKeys, hasColumnKey } = this.setState;
        const dataSource = [{
            key: '1',
            firstName: 'Joe',
            lastName: 'Brown',
            age: 31,
            address: null,
            tags: ['nice', 'developer'],
        }, {
            key: '2',
            firstName: 'Jim',
            lastName: 'Black',
            age: 20,
            address: 'Sidney No. 1 Lake Park',
            tags: ['loser'],
        }, {
            key: '3',
            firstName: 'Chim',
            lastName: 'Green',
            age: 22,
            address: 'null x',
            tags: ['cool', 'teacher'],
        }];
        const columns = [{
            title: '姓名',
            dataIndex: 'firstName',
            key: 'name',
        }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
            render: text => <Button>{text}</Button>,
        }]
        const dataSource2 = [];
        for (let i = 0; i < 46; i++) {
            dataSource2.push({
                key: i,
                firstName: `test name ${i}`,
                age: Math.floor(Math.random() * (100 - i + 1)) + i + 1,
                address: `test address no.${i + 1}`
            })
        }
        const rowSelection = {
            selectColumnKeys,
            onChange: this.onSelectChange,
        }
        // hasColumnKey不生效
        return (
            <div className='Home'>
                <h1>Home ...</h1>
                <div>
                    <Link to={'/wechat/home'}>Manage Home</Link>
                </div>
                <div>
                    <Button type="primary">Button</Button>
                    <Table dataSource={dataSource} columns={columns} />
                    <Table dataSource={dataSource}>
                        <ColumnGroup title='Name '>
                            <Column title='First Name' dataIndex='firstName' key='firstName' />
                            <Column title='Last Name' dataIndex='lastName' key='lastName' />
                        </ColumnGroup>
                        <Column title='Age' dataIndex='age' key='age' />
                        <Column title='Address' dataIndex='address' key='address' />
                        <Column title='Tags' dataIndex='tags' key='tags' render={tags => (
                            <>
                                {tags.map(tag => (
                                    <Tag color='blue' key={tag}>{tag}</Tag>
                                ))}
                            </>
                        )} />
                        <Column title='Action' key='action' render={(text, record) => (
                            <Space size='middle'>
                                <span>参加 {record.lastName}</span>
                                <Button>删除</Button>
                            </Space>
                        )}
                        />
                    </Table>
                </div>
                <div>
                    <div style={{ marginBottom: 16 }}>
                        <Button type='primary' onClick={this.start} disabled={!hasColumnKey} loading={loading}>Reload</Button>
                        <span style={{ marginLeft: 8 }}>{hasColumnKey ? `选中 ${selectColumnKeys.length} 项` : ''}</span>
                    </div>
                    <Table rowSelection={rowSelection} dataSource={dataSource2} columns={columns} />
                </div>
            </div>
        );
    }
}
export default Home;