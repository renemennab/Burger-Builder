import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';


class App extends Component {
	componentDidMount() {
		this.props.onTryAutoSignup();
	}
	
	render () {
		const baseUrl = 'burger-builder';
		let routes = (
			<Switch>
				<Route path={baseUrl + '/auth'} component={Auth} />
				<Route path={baseUrl + '/'} exact component={BurgerBuilder} />
				<Redirect to={baseUrl + '/'} />
			</Switch>
		);

		if (this.props.isAuthenticated){
			routes = (
				<Switch>
					<Route path={baseUrl + '/checkout'} component={Checkout} />
					<Route path={baseUrl + '/auth'} component={Auth} />
					<Route path={baseUrl + '/orders'} component={Orders} />
					<Route path={baseUrl + '/logout'} component={Logout} />
					<Route path={baseUrl + '/'} exact component={BurgerBuilder} />
					<Redirect to={baseUrl + '/'} />
				</Switch>
			);
		}
		return (
			<div>
				<Layout>
					{routes}
				</Layout>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		isAuthenticated: state.auth.token !== null 
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onTryAutoSignup: () => dispatch(actions.authCheckState())
	};
};

App.propTypes = {
	onTryAutoSignup: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool.isRequired,
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
