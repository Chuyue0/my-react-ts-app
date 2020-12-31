/**
 * React应用容器
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import AppLayout from '../layout/AppLayout';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    /**
     * 作为静态属性进行类型检查
     */
    static propTypes = {
        store: PropTypes.object.isRequired
    }
    componentDidMount() { }
    render() {
        const { store } = this.props;
        /**
         * Provider组件，将应用的容器AppLayout包裹，让下面的所有子组件拿到state；接收store作为props，通过该context往下传递。
         */
        return (
            <Provider store={store}>
                <Router>
                    <AppLayout />
                </Router>
            </Provider>
        );
    }
}
export default AppContainer;