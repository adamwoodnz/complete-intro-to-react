webpackJsonp([2],{

/***/ 239:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var _React$PropTypes = React.PropTypes;
	var array = _React$PropTypes.array;
	var string = _React$PropTypes.string;

	var _require = __webpack_require__(235);

	var connector = _require.connector;


	var Header = __webpack_require__(240);
	var ShowCard = __webpack_require__(241);

	var Search = function Search(props) {
	  return React.createElement(
	    'div',
	    { className: 'container' },
	    React.createElement(Header, { showSearch: true }),
	    React.createElement(
	      'div',
	      { className: 'shows' },
	      props.shows.filter(function (show) {
	        return (show.title + ' ' + show.description).toUpperCase().indexOf(props.searchTerm.toUpperCase()) >= 0;
	      }).map(function (show) {
	        return React.createElement(ShowCard, _extends({}, show, { key: show.imdbID }));
	      })
	    )
	  );
	};

	Search.propTypes = {
	  shows: array,
	  searchTerm: string
	};

	module.exports = connector(Search);

/***/ },

/***/ 240:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	var _require = __webpack_require__(159);

	var Link = _require.Link;
	var _React$PropTypes = React.PropTypes;
	var bool = _React$PropTypes.bool;
	var func = _React$PropTypes.func;
	var string = _React$PropTypes.string;

	var _require2 = __webpack_require__(235);

	var connector = _require2.connector;


	var Header = React.createClass({
	  displayName: 'Header',

	  propTypes: {
	    setSearchTerm: func,
	    showSearch: bool,
	    searchTerm: string
	  },

	  handleSearchTermEvent: function handleSearchTermEvent(event) {
	    this.props.setSearchTerm(event.target.value);
	  },
	  render: function render() {
	    var _props = this.props;
	    var searchTerm = _props.searchTerm;
	    var showSearch = _props.showSearch;

	    var utilSpace = void 0;

	    if (showSearch) {
	      utilSpace = React.createElement('input', { type: 'text', className: 'search-input', placeholder: 'Search', value: searchTerm, onChange: this.handleSearchTermEvent });
	    } else {
	      utilSpace = React.createElement(
	        'h2',
	        { className: 'header-back' },
	        React.createElement(
	          Link,
	          { to: '/search' },
	          'Back'
	        )
	      );
	    }

	    return React.createElement(
	      'header',
	      { className: 'header' },
	      React.createElement(
	        'h1',
	        { className: 'brand' },
	        React.createElement(
	          Link,
	          { to: '/', className: 'brand-link' },
	          'svideo'
	        )
	      ),
	      utilSpace
	    );
	  }
	});

	module.exports = connector(Header);

/***/ },

/***/ 241:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var string = React.PropTypes.string;

	var _require = __webpack_require__(159);

	var Link = _require.Link;


	var ShowCard = function ShowCard(_ref) {
	  var title = _ref.title;
	  var description = _ref.description;
	  var imdbID = _ref.imdbID;
	  var poster = _ref.poster;
	  var year = _ref.year;
	  return React.createElement(
	    Link,
	    { to: '/show/' + imdbID, title: title, className: 'show-card' },
	    React.createElement('img', { className: 'show-card-img', src: '/public/img/posters/' + poster, alt: title }),
	    React.createElement(
	      'div',
	      { className: 'show-card-text' },
	      React.createElement(
	        'h3',
	        { className: 'show-card-title' },
	        title
	      ),
	      React.createElement(
	        'h4',
	        { className: 'show-card-year' },
	        '(',
	        year,
	        ')'
	      ),
	      React.createElement(
	        'p',
	        { className: 'show-card-description' },
	        description
	      )
	    )
	  );
	};

	ShowCard.propTypes = {
	  imdbID: string,
	  title: string,
	  poster: string,
	  description: string,
	  year: string
	};

	module.exports = ShowCard;

/***/ }

});