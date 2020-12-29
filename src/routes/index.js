import React from 'react';
import {withRouter, Redirect, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import loadable from '@loadable/component'
import {ThemeProvider} from "styled-components";
import { lightTheme, darkTheme} from '../theme'
import PrivateRoutes from './privateRoutes'

const SignIn = loadable(() => import('./publicRoutes/SignIn'))

const RestrictedRoute = ({component: Component, user, ...rest}) =>
	<Route {...rest} 
		render={ 
			props => user ? 
			<Component {...props} /> : 
			<Redirect to={{ pathname: '/signin', state: {from: props.location} }} />
		}
	/>;
class Routes extends React.Component {

	constructor(props){

		super(props);

		this.state = {}
	}

	render() {

		const {match, user, themeMode} = this.props;

		const theme = themeMode === 'light' ? lightTheme : darkTheme

		return (
			<ThemeProvider theme={theme}>				
				<Switch>
					<Route path='/signin' component={SignIn}/>
					<RestrictedRoute path={`${match.url}`} user={user} component={PrivateRoutes}/>
				</Switch>
			</ThemeProvider>
		);
	}
}


const mapStateToProps = ({system}) => {
	const { user, themeMode } = system;
	return {user, themeMode }
};

export default withRouter(connect(mapStateToProps, {})(Routes));