import React, {Fragment} from 'react'
import {Route} from 'react-router-dom'
import LoginPage from '../Components/Login'

const Main = () => {
    return (
        <Fragment>
            <Route exact path="/">
                <LoginPage/>
            </Route>
        </Fragment>
    )
}

export default Main;