import React from "react"
import { StyleRoot } from "radium"

import "normalize.css"

export default class App extends React.Component {
  render() {
    return (
      <StyleRoot>
        {this.props.children}
      </StyleRoot>
    )
  }
}
