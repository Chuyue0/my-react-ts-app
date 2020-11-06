/**
 * 全局路由导向
 * 根据一级路由进入不同的container
 * eg:WechatLayout的路由是/wechat
 * /表示是默认路径home
 */

import React,{ Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../routes/home';
import WechatLayout from './WechatLayout';

export default class AppLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a: '123'
        }
    }
    render() {
        return (
            <div className='App'>
                <main>
                    <Switch>
                        <Route exact path='/' component={Home}></Route>
                        <Route path='/wechat' component={WechatLayout} />
                    </Switch>
                </main>
            </div>
        );
    }
}