import React from 'react'
import radium from 'radium'

import 'normalize.css'


const App = ({ children }) => {
  const styles = {
    main: {
      width: '650px',
      margin: '0 auto',
    },
  }

  return (
    <div
      style={ styles.main }
    >
      { children }
    </div>
  )
}

App.propTypes = {
  children: React.PropTypes.node,
}

export default radium(App)
