import React, { Suspense, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './screens/Home'
import Tokens from './components/Tokens'

const routes = () => {
    return (
        <Fragment>
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path='/' component={Tokens} />
                    </Switch>
                </Suspense>
            </Router>
        </Fragment>
    )
}

export default routes
