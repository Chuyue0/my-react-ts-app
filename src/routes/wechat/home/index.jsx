/**
 * wechat 路由
 */
import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import 'mock/test.js'
import Counter from 'components/count.jsx'
class Home extends React.Component {
    constructor(props) {
        super(props); // props传递到父类的构造函数中
        this.state = {
            count: 0,
            mockData: []
        };
    }
    /**
     * 可以向class中添加任意的额外字段，不参与state或props的数据流。
     * state是私有的，受控于当前组件
     * componentDidMount 在组件被渲染到DOM后运行
     * componentWillUnmount 在组件被移除后运行
     * componentDidUpdate 在组件更新后运行
     */
    componentDidMount() {
        /**
         * dispatch()
         * 触发reducer action
         * payload是请求带的参数，该参数会传入到saga中间层，去调用真正的后端请求；请求成功后调用put()更新state。
         * 
         * 触发action失败， WATCH_GET_PROJECT报错了？？？？？？？
         * 丄解决方法：type值错误，找不到就报错了
         */
        this.props.dispatch({ type: 'GET_PROJECT', payload: { projectName: '我的wechat名字:Rosea' } });
        this.getMockDetail();
    }
    componentDidUpdate(prevProps, prevState) {
        // document.title = `点击${this.state.count}times`;
    }
    componentWillUnmount() {
        // 
    }
    // handler
    refreshHandle() {
        this.getMockDetail();
        this.setState((state) => ({
            count: state.count + 1
        }))
        /*
        clickhandler用法
        方式1： 标签上调用 this.handler， constructor()构造函数中定义 this.handler=this.handler.bind(this)，方法定义直接用 handler(){}
        方式2： 标签上调用 (e)=>this.handler(num,e) 或者是 this.handler.bind(this, num)，方法定义直接用 handler(){}
        方式3： 标签上调用 this.handler, 方法定义直接用handler=()=>{}
        */
    }
    // controller
    getMockDetail() {
        axios.get('/mock', { dataType: 'json' }).then(res => {
            console.log(res);
            let list = res.data.list;
            this.setState(() => ({
                mockData: list
            }))
        }).catch(err => {
            console.log(err);
        })
        /* 方式二
        this.setState(function (state, props) {
            return {
                mockData: list
            }
        }) */
    }
    render() {
        const list = this.state.mockData.map((item, index) =>
            <li key={item.id}><strong>id: {item.id} </strong>number: {item.num} color: {item.color}</li>
        );
        return (
            <div className='Wechat-home'>
                <h1>Wechat Home ...</h1>
                <div>名称是：{this.props.reducer.projectName}</div>
                <div>
                    mock数据为： <span onClick={() => this.refreshHandle()}>ICON点击刷新数据...</span>
                </div>
                <ul>
                    {list}
                </ul>
                <p>下面是hook内容</p>
                <Counter num='0' />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    reducer: state.wechat
})
export default connect(mapStateToProps)(Home)