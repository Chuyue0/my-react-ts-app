/**
 * 微信路由导向
 * 进行访问鉴权
 */
import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from '../routes/wechat/home'
import { connect } from 'react-redux'

class WechatLayout extends React.component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentWillMount() {

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

const mapStateToProps = state => ({
    reducer: state.wechatLayout
});

export default connect(mapStateToProps)(WechatLayout)