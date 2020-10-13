import { Route, BrowserRouter, Switch } from 'react-router-dom'
import React from 'react'

//pages
import Landing from './pages/landing'
import Orphanages from './pages/OrphanagesMap' 

function Routes() {
return(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/app" component={Orphanages} />
        </Switch>
    </BrowserRouter>
)
}

export default Routes