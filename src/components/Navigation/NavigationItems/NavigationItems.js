import React from 'react';
import PropTypes from 'prop-types';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
	<ul className={classes.NavigationItems}>
		<NavigationItem link="/" exact>Burger Builder</NavigationItem>
		{props.isAuthenticated ?
			<NavigationItem link="/orders">Orders</NavigationItem>
			: null}
		{!props.isAuthenticated ?
			<NavigationItem link="/auth">Login / Signup</NavigationItem>
			: <NavigationItem link="/logout">Logout</NavigationItem>}
	</ul>
);

navigationItems.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
};

export default navigationItems;