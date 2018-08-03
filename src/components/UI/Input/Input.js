import React from 'react';
import PropTypes from 'prop-types';

import classes from './Input.css';

const input = ( props ) => {
	let inputElement = null;
	const inputClasses = [classes.InputElement];

	if (props.invalid && props.shouldValidate && props.touched) {
		inputClasses.push(classes.Invalid);
	}

	switch ( props.elementType ) {
	case ( 'input' ):
		inputElement = <input
			className={inputClasses.join(' ')}
			{...props.elementConfig}
			value={props.value}
			onChange={props.changed} />;
		break;
	case ( 'textarea' ):
		inputElement = <textarea
			className={inputClasses.join(' ')}
			{...props.elementConfig}
			value={props.value}
			onChange={props.changed} />;
		break;
	case ( 'select' ):
		inputElement = (
			<select
				className={inputClasses.join(' ')}
				value={props.value}
				onChange={props.changed}>
				{props.elementConfig.options.map(option => (
					<option key={option.value} value={option.value}>
						{option.displayValue}
					</option>
				))}
			</select>
		);
		break;
	default:
		inputElement = <input
			className={inputClasses.join(' ')}
			{...props.elementConfig}
			value={props.value}
			onChange={props.changed} />;
	}

	return (
		<div className={classes.Input}>
			<label className={classes.Label}>{props.label}</label>
			{inputElement}
		</div>
	);

};

input.propTypes = {
	invalid: PropTypes.bool.isRequired,
	shouldValidate: PropTypes.object.isRequired,
	touched: PropTypes.bool,
	elementType: PropTypes.string.isRequired,
	elementConfig: PropTypes.object.isRequired,
	value: PropTypes.string.isRequired,
	changed: PropTypes.func.isRequired,
	label: PropTypes.node,
};

export default input;