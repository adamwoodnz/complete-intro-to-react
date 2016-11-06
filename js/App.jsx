const React = require('react')
const { browserHistory, Router } = require('react-router')
const { Provider } = require('react-redux')

if (typeof module !== 'undefined' && module.require) {
  if (typeof require.ensure === 'undefined') {
    require.ensure = require('node-ensure')
  }
}

const { store } = require('./Store')
const Layout = require('./Layout')

const rootRoute = {
  component: Layout,
  path: '/',
  indexRoute: {
    getComponent (location, cb) {
      require.ensure([], () => {
        cb(null, require('./Landing'))
      })
    }
  },
  childRoutes: [
    {
      path: 'search',
      getComponent (location, cb) {
        require.ensure([], () => {
          cb(null, require('./Search'))
        })
      }
    }, {
      path: 'show/:id',
      getComponent (location, cb) {
        require.ensure([], () => {
          cb(null, require('./Details'))
        })
      }
    }
  ]
}

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory} routes={rootRoute} />
      </Provider>
    )
  }
})

App.routes = rootRoute
App.history = browserHistory

module.exports = App
