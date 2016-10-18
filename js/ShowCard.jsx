const React = require('react')
const { string } = React.PropTypes
const { Link } = require('react-router')

const ShowCard = ({title, description, imdbID, poster, year}) => (
  <Link to={`/show/${imdbID}`} title={title} className='show-card'>
    <img className='show-card-img' src={`/public/img/posters/${poster}`} alt={title} />
    <div className='show-card-text'>
      <h3 className='show-card-title'>{title}</h3>
      <h4 className='show-card-year'>({year})</h4>
      <p className='show-card-description'>{description}</p>
    </div>
  </Link>
)

ShowCard.propTypes = {
  imdbID: string,
  title: string,
  poster: string,
  description: string,
  year: string
}

module.exports = ShowCard
