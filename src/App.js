import React, { Component } from "react";
import Home from "./components/Home";
import User from "./components/User";
import Shop from "./components/Shop"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Router>
                <div className="App">
                    <header className="nav">
                        <ul className="nav-menu">
                            <li>
                                <Link to="/">首页</Link>
                            </li>
                            <li>
                                <Link to="/user">个人中心</Link>
                            </li>
                            <li>
                                <Link to="/shop">门店</Link>
                            </li>
                        </ul>
                    </header>
                    <div className="app_content">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/user" component={User} />
                            <Route path="/shop" component={Shop} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
