import React from "react"
import { Router, Route, Link, browserHistory } from "react-router"

import App from "components/App"
import HelloWorld from "components/HelloWorld"

export default class AppRouter extends React.Component {
  render() {

    const routes = {
      path: "/",
      component: App,
      childRoutes: [
    	{
    	  path: "hello-world",
    	  component: HelloWorld
    	}
      ]
    }

    return (
      <Router history={browserHistory} routes={routes}></Router>
    )
  }
}
