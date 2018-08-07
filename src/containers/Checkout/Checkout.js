import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

checkoutCancelledHandler = () => {
	this.props.history.goBack();
}

checkoutContinuedHandler = () => {
	this.props.history.replace( '/checkout/contact-data' );
}

render () {
	let summary = <Redirect to='/'/>;
	if(this.props.ings){
		const purchasedRedirect = this.props.purchased ? <Redirect to="/"/> : null;
		summary = (
			<div>
				{purchasedRedirect}
				<CheckoutSummary
					ingredients={this.props.ings}
					price={this.props.price}
					checkoutCancelled={this.checkoutCancelledHandler}
					checkoutContinued={this.checkoutContinuedHandler} />
				<Route 
					path={this.props.match.path + '/contact-data'} 
					component={ContactData} />
			</div>
		);
	}
	return summary;
}
}

const mapStateToProps = state => {
	return {
		ings: state.burgerBuilder.ingredients,
		purchased: state.order.purchased,
		price: state.burgerBuilder.totalPrice
	};
};

Checkout.propTypes = {
	ings: PropTypes.object,
	history: PropTypes.object.isRequired,
	purchased: PropTypes.bool.isRequired,
	match: PropTypes.object.isRequired,
	price: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Checkout);