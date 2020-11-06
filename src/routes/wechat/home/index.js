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
         * 触发reducer
         * payload是请求带的参数，该参数会传入到saga中间层，去调用真正的后端请求；请求成功后调用put()更新state。
         */
        this.props.dispatch({ type: 'WATCH_GET_PROJECT', payload: { projectName: 'tap4fun' } })
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