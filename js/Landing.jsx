const React = require('react')
const { browserHistory } = require('react-router')
const { func, string } = React.PropTypes
const { Link } = require('react-router')

const { connector } = require('./Store')

const Landing = React.createClass({
  propTypes: {
    setSearchTerm: func,
    searchTerm: string
  },

  goToSearch (event) {
    event.preventDefault()
    browserHistory.push('search')
  },

  handleSearchTermEvent (event) {
    this.props.setSearchTerm(event.target.value)
  },

  render () {
    const { searchTerm } = this.props

    return (
      <div className='home-info'>
        <h1 className='title'>svideo</h1>
        <form onSubmit={this.goToSearch}>
          <input className='search' type='text' placeholder='Search' value={searchTerm} onChange={this.handleSearchTermEvent} />
        </form>
        <Link to='/search/' className='browse-all'>Browse All</Link>
      </div>
    )
  }
})

module.exports = connector(Landing)
