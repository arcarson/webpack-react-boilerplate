import React from 'react'
import { Router, browserHistory } from 'react-router'
import { StyleRoot } from 'radium'

import App from 'components/App'
import HelloWorld from 'components/HelloWorld'


const AppRouter = () => {
  const routes = {
    path: '/',
    component: App,
    indexRoute: { onEnter: (nextState, replace) => replace('/hello-world') },
    childRoutes: [
      {
        path: 'hello-world',
        component: HelloWorld,
      },
    ],
  }

  return (
    <StyleRoot>
      <Router history={ browserHistory } routes={ routes } />
    </StyleRoot>
  )
}

export default AppRouter
