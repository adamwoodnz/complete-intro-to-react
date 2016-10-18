const React = require('react')
const { array, object } = React.PropTypes
const { connector } = require('./Store')

const Header = require('./Header')

class Details extends React.Component {
  render () {
    const { description, poster, title, trailer, year } = this.props.shows.find((show) => show.imdbID === this.props.params.id)

    return (
      <div className='container'>
        <Header/>
        <div className='video-info'>
          <h2 className='video-title'>{title}</h2>
          <h3 className='video-year'>({year})</h3>
          <img src={`/public/img/posters/${poster}`} alt={title} className='video-poster'/>
          <p className='video-description'>{description}</p>
        </div>
        <div className='video-container'>
          <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`} frameBorder='0' allowFullScreen></iframe>
        </div>
      </div>
    )
  }
}

Details.propTypes = {
  params: object.isRequired,
  shows: array.isRequired
}

module.exports = connector(Details)
