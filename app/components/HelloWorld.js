import React from 'react'
import radium from 'radium'
import { type, palette } from 'settings'


const HelloWorld = () => {
  const styles = {
    base: {
      color: palette.alpha.darker,
    },
  }

  return (
    <div style={ styles.base }>
      <p
        style={ type.h1 }
      >
        While React is extremely flexible in terms of how you can structure your
        application’s UI, I’ve found that a few patterns for style composition have
        helped me keep things organized and easy to work with.
      </p>
      <p
        style={ type.h2 }
      >
        While React is extremely flexible in terms of how you can structure your
        application’s UI, I’ve found that a few patterns for style composition have
        helped me keep things organized and easy to work with.
      </p>
      <p
        style={ type.h3 }
      >
        While React is extremely flexible in terms of how you can structure your
        application’s UI, I’ve found that a few patterns for style composition have
        helped me keep things organized and easy to work with.
      </p>
      <p
        style={ type.h4 }
      >
        While React is extremely flexible in terms of how you can structure your
        application’s UI, I’ve found that a few patterns for style composition have
        helped me keep things organized and easy to work with.
      </p>
      <p
        style={ type.p }
      >
        While React is extremely flexible in terms of how you can structure your
        application’s UI, I’ve found that a few patterns for style composition have
        helped me keep things organized and easy to work with.
      </p>
      <p
        style={ type.small }
      >
        While React is extremely flexible in terms of how you can structure your
        application’s UI, I’ve found that a few patterns for style composition have
        helped me keep things organized and easy to work with.
      </p>
    </div>
  )
}

export default radium(HelloWorld)
