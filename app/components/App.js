import React from "react"
import Radium from "radium"

import "normalize.css"

const {div} = React.DOM

const styles = {
  main: {
    width: "400px",
    margin: "0 auto"
  }
}

@Radium
export default class App extends React.Component {
  render() {
    return (
      div({style: styles.main}, this.props.children)
    )
  }
}
