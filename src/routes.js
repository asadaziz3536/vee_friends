import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import PostDetail from "./screens/PostDetail";

const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path='' />
                    <Route exact path='/postdetails' component={PostDetail} />
                   


                </Switch>


            </Router>

        </div>
    )
}

export default Routes
