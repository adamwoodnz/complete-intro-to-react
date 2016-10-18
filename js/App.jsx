const React = require('react')
const { browserHistory, IndexRoute, Route, Router } = require('react-router')
const { Provider } = require('react-redux')

const { store } = require('./Store')

const Details = require('./Details')
const Landing = require('./Landing')
const Layout = require('./Layout')
const Search = require('./Search')

const routes = (props) => (
  <Route path='/' component={Layout}>
    <IndexRoute component={Landing} />
    <Route path='/search' component={Search} />
    <Route path='/show/:id' component={Details} />
  </Route>
)

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          {routes()}
        </Router>
      </Provider>
    )
  }
})

App.routes = routes

module.exports = App
