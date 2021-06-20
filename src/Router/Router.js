import React from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import App from '../App';
import Button from '../Button/Button'
import createHashHistory from 'history/createHashHistory';

const hashHistory = createHashHistory();
const BasicRoute = ()=>{
    return(
        <HashRouter history={hashHistory}>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/app" component={App}/>
            <Route exact path="/button/:id" component={Button}/>
        </Switch>
    </HashRouter>
    )
}

export default BasicRoute;