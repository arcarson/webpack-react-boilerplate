import React from "react"
import { StyleRoot } from "radium"
import HelloWorld from "components/HelloWorld"

export default class App extends React.Component {
  render() {
    return (
      <StyleRoot>
        <HelloWorld />
      </StyleRoot>
    )
  }
}
