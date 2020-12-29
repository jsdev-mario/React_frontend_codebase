import React from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import loadable from '@loadable/component'
import {
  userLogout,
  toggleTheme
} from '../../store/actions'
import CoreLayout from '../../common/layouts/CoreLayout';

const Discover = loadable(() => import('./Discover'));

class PrivateRoutes extends React.Component {

  render() {
    return (
      <CoreLayout props={this.props}>
        <Switch>
          <Route path='/search' component={Discover}/>
          <Route path='/favourites' component={Discover}/>
          <Route path='/playlists' component={Discover}/>
          <Route path='/charts' component={Discover}/>
          <Route path='/' component={Discover}/>
        </Switch>
      </CoreLayout>
    )
  }
}


const mapStateToProps = ({ system }) => {
	const { user, themeMode } = system;
	return { user, themeMode }
};

export default withRouter(connect(mapStateToProps, {
  userLogout,
  toggleTheme
})(PrivateRoutes));