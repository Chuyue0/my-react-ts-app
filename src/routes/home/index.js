/**
 * Home路由
 */

import React from 'react';
import { Link } from "react-router-dom";

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return (
            <div className='Home'>
                <h1>Home ...</h1>
                <div>
                    <Link to={'/wechat/home'}>Manage Home</Link>
                </div>
            </div>
        );
    }
}
export default Home;