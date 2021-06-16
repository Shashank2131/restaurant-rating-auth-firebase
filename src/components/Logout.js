import React from 'react'
import HomePage from '../components/HomePage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

async function Logout() {
	   
    return (
        <Router>
            <Switch>
				<Route exact path="/" component={HomePage} />
            </Switch>
        </Router>
    )

}
export default Logout