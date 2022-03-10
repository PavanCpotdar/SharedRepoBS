import React, {Fragment} from "react";
import './App.css';
import Main from "./Main";
import {Route, Switch} from "react-router-dom";
import LoginPage from "./Components/Login";

function App() {
    return (
        <Fragment>
            <Main/>
            <Switch>
                <Route exact path="/">
                    <LoginPage/>
                </Route>
            </Switch>
        </Fragment>
    );
}

export default App;
