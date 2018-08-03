import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.css';

const button = (props) => (
	<button
		disabled={props.disabled}
		className={[classes.Button, classes[props.btnType]].join(' ')}
		onClick={props.clicked}>{props.children}</button>
);

button.propTypes = {
	disabled: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.object
	]),
	btnType: PropTypes.oneOf(['Danger', 'Success']),
	clicked: PropTypes.func,
	children: PropTypes.node.isRequired,
};

export default button;