const React = require('react');
const PropTypes = require('prop-types');

function Header({title, ...props}) {
	return (
		<div {...props}>
			<div>
				{title}
			</div>
		</div>
	);
}

Header.propTypes = {
	title: PropTypes.string.isRequired,
	foo: PropTypes.string.isRequired
};

module.exports = Header;
