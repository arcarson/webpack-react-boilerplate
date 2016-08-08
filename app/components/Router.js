import React from "react"
import { Router, Route, Link, browserHistory } from "react-router"
import App from "components/App"

export default class AppRouter extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}></Route>
      </Router>
    )
  }
}
