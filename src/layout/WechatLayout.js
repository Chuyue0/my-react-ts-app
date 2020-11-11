/**
 * 微信路由导向
 * 进行访问鉴权
 */
import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from '../routes/wechat/home'
import { connect } from 'react-redux'

class WechatLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {

    }
    render() {
        const classNames = 'Wechat-layout';
        return (
            <div className={`${classNames}`}>
                <header>our manage wechat layout</header>
                <main>
                    <Switch>
                        <Route path={`${this.props.match.path}/home`} component={Home}></Route>
                    </Switch>
                </main>
            </div>
        );
    }
}

/**
 * mapStateToProps
 * 和上面组件state无关系，用dispatch方法触发reducer。
 * 使用mapStateToProps将函数注入到props中，在相应的函数调用。
 * redux，每个模块有对应的action和reducer，action不能复用，即使触发相同的reducer。
 * state对应的key，在其他文件声明。
 */
const mapStateToProps = state => ({
    reducer: state.wechatLayout
});

export default connect(mapStateToProps)(WechatLayout)