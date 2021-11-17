import React, { Suspense, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './screens/Home'
import Tokens from './components/Tokens'
import Timeline from './components/Timeline'


const routes = () => {
    return (
        <Fragment>
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path='/' component={Timeline} />
                    </Switch>
                </Suspense>
            </Router>
        </Fragment>
    )
}

export default routes
