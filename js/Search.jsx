const React = require('react')
const { array, string } = React.PropTypes

const { connector } = require('./Store')

const Header = require('./Header')
const ShowCard = require('./ShowCard')

const Search = (props) => (
  <div className='container'>
    <Header showSearch />
    <div className='shows'>
      {props.shows
        .filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(props.searchTerm.toUpperCase()) >= 0)
        .map((show) => <ShowCard {...show} key={show.imdbID}/>)
      }
    </div>
  </div>
)

Search.propTypes = {
  shows: array,
  searchTerm: string
}

module.exports = connector(Search)
