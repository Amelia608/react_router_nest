import React, { Component } from "react";
import Main from './User/Main';
import Info from './User/Info';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="p_nest">
                <ul className="left">
                    <li>
                      <Link to="/user/">主页</Link>
                    </li>
                    <li>
                    <Link to="/user/info">个人信息</Link>
                    </li>
                </ul>
                <div className="right">
                    <Switch>
                        <Route exact path="/user/" component={Main} />
                        <Route path="/user/info" component={Info} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default User;
