const React = require('react')
const ReactDOM = require('react-dom')
const { match } = require('react-router')

const App = require('./App')

match({ history: App.history, routes: App.routes }, (error, redirectLocation, renderProps) => {
  if (error) {
    return console.error('BrowserEntry error', error)
  }
  ReactDOM.render(<App {...renderProps} />, document.getElementById('app'))
})
