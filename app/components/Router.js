import React from "react"
import { Router, Route, Link, browserHistory } from "react-router"
import { StyleRoot } from "radium"

import App from "components/App"
import HelloWorld from "components/HelloWorld"

export default class AppRouter extends React.Component {
  render() {

    const routes = {
      path: "/",
      component: App,
      indexRoute: { onEnter: (nextState, replace) => replace("/hello-world") },
      childRoutes: [
    	{
    	  path: "hello-world",
    	  component: HelloWorld
    	}
      ]
    }

    return (
      <StyleRoot>
        <Router history={ browserHistory } routes={ routes }></Router>
      </StyleRoot>
    )
  }
}
