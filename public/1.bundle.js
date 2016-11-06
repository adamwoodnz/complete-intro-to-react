webpackJsonp([1],{

/***/ 238:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	var _require = __webpack_require__(159);

	var browserHistory = _require.browserHistory;
	var _React$PropTypes = React.PropTypes;
	var func = _React$PropTypes.func;
	var string = _React$PropTypes.string;

	var _require2 = __webpack_require__(159);

	var Link = _require2.Link;

	var _require3 = __webpack_require__(235);

	var connector = _require3.connector;


	var Landing = React.createClass({
	  displayName: 'Landing',

	  propTypes: {
	    setSearchTerm: func,
	    searchTerm: string
	  },

	  goToSearch: function goToSearch(event) {
	    event.preventDefault();
	    browserHistory.push('search');
	  },
	  handleSearchTermEvent: function handleSearchTermEvent(event) {
	    this.props.setSearchTerm(event.target.value);
	  },
	  render: function render() {
	    var searchTerm = this.props.searchTerm;


	    return React.createElement(
	      'div',
	      { className: 'home-info' },
	      React.createElement(
	        'h1',
	        { className: 'title' },
	        'svideo'
	      ),
	      React.createElement(
	        'form',
	        { onSubmit: this.goToSearch },
	        React.createElement('input', { className: 'search', type: 'text', placeholder: 'Search', value: searchTerm, onChange: this.handleSearchTermEvent })
	      ),
	      React.createElement(
	        Link,
	        { to: '/search/', className: 'browse-all' },
	        'Browse All'
	      )
	    );
	  }
	});

	module.exports = connector(Landing);

/***/ }

});