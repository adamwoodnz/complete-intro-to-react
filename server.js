require('babel-register')
const express = require('express')
const _ = require('lodash')
const fs = require('fs')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const ReactRedux = require('react-redux')
const ReactRouter = require('react-router')

const App = require('./js/App.jsx')
const Store = require('./js/Store.js')

const Provider = ReactRedux.Provider
const match = ReactRouter.match
const RouterContext = ReactRouter.RouterContext
const routes = App.routes
const store = Store.store
const port = 5050
const baseTemplate = fs.readFileSync('./index.html')
const template = _.template(baseTemplate)

const app = express()

app.use('/public', express.static('./public'))

app.use((req, res) => {
  match({ routes: routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      const body = ReactDOMServer.renderToString(
        React.createElement(Provider, {store},
          React.createElement(RouterContext, renderProps)
        )
      )
      res.status(200).send(template({ body }))
    } else {
      res.status(404).send('Not found')
    }
  })
})

console.log('listening on port ' + port)
app.listen(port)
