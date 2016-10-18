const React = require('react')
const { Link } = require('react-router')
const { bool, func, string } = React.PropTypes

const { connector } = require('./Store')

const Header = React.createClass({
  propTypes: {
    setSearchTerm: func,
    showSearch: bool,
    searchTerm: string
  },

  handleSearchTermEvent (event) {
    this.props.setSearchTerm(event.target.value)
  },

  render () {
    const { searchTerm, showSearch } = this.props
    let utilSpace

    if (showSearch) {
      utilSpace = <input type='text' className='search-input' placeholder='Search' value={searchTerm} onChange={this.handleSearchTermEvent} />
    } else {
      utilSpace = <h2 className='header-back'><Link to='/search'>Back</Link></h2>
    }

    return (
      <header className='header'>
        <h1 className='brand'>
          <Link to='/' className='brand-link'>svideo</Link>
        </h1>
        {utilSpace}
      </header>
    )
  }
})

module.exports = connector(Header)
