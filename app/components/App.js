import React from "react"
import { StyleRoot } from "radium"
import HelloWorld from "components/HelloWorld"

import "normalize.css"

export default class App extends React.Component {
  render() {
    return (
      <StyleRoot>
        <HelloWorld />
      </StyleRoot>
    )
  }
}
