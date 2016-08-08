import React from "react"
import Radium from "radium"
import Colours from "Colours"

function styleFunc() {
  return {
    display: "inline-block",
    background: "orange",
    border: `solid 1px ${Colours.pink}`,
    color: "red"
  }
}

const otherStyles = {
  background: "teal"
}

let styles = {
  base: [
    styleFunc(),
    {
      color: Colours.pink,
      fontSize: "1.5rem",
      "@media screen and (min-width: 900px)": {
        color: Colours.purple
      }
    }
  ],
  orange: {
    color: "orange"
  }
}

@Radium
export default class HelloWorld extends React.Component {
  render() {
    return (
      <div style={styles.base}>Hello world</div>
    )
  }
}
