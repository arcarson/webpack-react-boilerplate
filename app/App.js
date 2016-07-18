import React from "react"
import { StyleRoot } from "radium"
import Greeter from "./Greeter"

export default class App extends React.Component {
  render() {
    return (
      <StyleRoot>
        <Greeter />
      </StyleRoot>
    )
  }
}
