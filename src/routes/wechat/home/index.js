/**
 * wechat 路由
 */
import React from 'react';
import { connect } from 'react-redux';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        /**
         * dispatch()
         * 触发reducer action
         * payload是请求带的参数，该参数会传入到saga中间层，去调用真正的后端请求；请求成功后调用put()更新state。
         * 
         * 触发action失败，报错了？？？？？？？
         * 丄解决方法：type值错误，找不到就报错了
         */
        this.props.dispatch({ type: 'GET_PROJECT', payload: { projectName: '我的wechat名字:Rosea' } });
    }
    render() {
        return (
            <div className='Wechat-home'>
                <h1>Wechat Home ...</h1>
                <div>名称是：{this.props.reducer.projectName}</div>
            </div>
        );
    }
}

const mapStateToProps = state=>({
    reducer: state.wechat
})
export default connect(mapStateToProps)(Home)