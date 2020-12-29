import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import qs from 'qs'
import cx from 'classnames'
import store from 'store'
import { ReactComponent as SignInPhoto } from '../../../assets/images/hero.svg';
import { 
	getUser,
} from '../../../store/actions'
import './styles/_signin.scss'

const SPOTIFY_AUTH_SCOPE = [
	"user-read-email",
	"user-read-private",
	"user-top-read",
	"user-read-currently-playing",
	"user-read-playback-state",
]

class SignIn extends Component {

	constructor(props) {

		super(props);

		this.state={
			loading: false
		}
	}


	componentDidMount = () => {

		if (this.props.user) this.props.history.push('/')

		const sptyCodeObject = qs.parse(this.props.location.hash) 

		if (!sptyCodeObject) return;
		if (sptyCodeObject['error']) return;
		if (!sptyCodeObject["#access_token"]) return;

		store.set('access_token', sptyCodeObject["#access_token"]);
		this.setState({ loading: true })
		this.props.getUser()
	}


	componentDidUpdate = (prevProps) => {

		if (this.props.user) {
			this.setState({ loading: false })
			this.props.history.push('/')
		}
	}


	getAuthUrl = () => {

		const {
			REACT_APP_AUTH_URL, 
			REACT_APP_SPOTIFY_CLIENT_ID,
			REACT_APP_SPOTIFY_REDIRECT_URL,
			REACT_APP_SPOTIFY_STATE
		} = process.env

		return `${REACT_APP_AUTH_URL}?client_id=${REACT_APP_SPOTIFY_CLIENT_ID}
			&redirect_uri=${REACT_APP_SPOTIFY_REDIRECT_URL}
			&scope=${SPOTIFY_AUTH_SCOPE.join("%20")}
			&response_type=token
			&show_dialog=true
			&state=${REACT_APP_SPOTIFY_STATE}`
	}

	render() {

		return (
			<div className="signin">
				<div className="signin__photo">
					<SignInPhoto/>
				</div>
				<div className="signin__content">
					<h1 className="signin__content__title">Welcome</h1>
					<a className={cx('btn', 'btn-primary', 'signin__content__btn', { 'disable': this.state.loading })} 
						href={this.getAuthUrl()}>
						{this.state.loading ? 'Please wait...' : 'Log In with Spotify'}
					</a>
				</div>
			</div>
		)
	}
}

const mapStateToProps = ({system}) => {
	const { user } = system;
	return {user }
};

export default withRouter(connect(mapStateToProps, {
	getUser
})(SignIn));