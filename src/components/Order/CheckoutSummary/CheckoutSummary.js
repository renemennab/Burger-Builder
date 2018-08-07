import React from 'react';
import PropTypes from 'prop-types';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
	return (
		<div className={classes.CheckoutSummary}>
			<h1>We hope it tastes well!</h1>
			<div style={{width: '100%', margin: 'auto'}}>
				<Burger ingredients={props.ingredients}/>
				<h3>Total Price: {props.price.toFixed(2)}</h3>
			</div>
			<Button 
				btnType="Danger"
				clicked={props.checkoutCancelled}>CANCEL</Button>
			<Button 
				btnType="Success"
				clicked={props.checkoutContinued}>CONTINUE</Button>
		</div>
	);
};

checkoutSummary.propTypes = {
	ingredients: PropTypes.object.isRequired,
	checkoutCancelled: PropTypes.func.isRequired,
	checkoutContinued: PropTypes.func.isRequired,
	price: PropTypes.number.isRequired,
};

export default checkoutSummary;