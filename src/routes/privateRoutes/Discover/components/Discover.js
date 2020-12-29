import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  userLogout,
  searchNewReleases,
  searchPlaylists,
  searchCategories
} from '../../../../store/actions'
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';

class Discover extends Component {
  constructor() {
    super();

    this.state = {
      newReleases: [],
      playlists: [],
      categories: []
    };
  }

  componentDidMount = () => {

    this.props.searchNewReleases()
    this.props.searchPlaylists()
    this.props.searchCategories()
  }
  
  componentDidUpdate = (prevProps) => {

    if (!prevProps.newReleases && this.props.newReleases){
      this.setState({ newReleases: this.props.newReleases})
    }

    if (!prevProps.playlists && this.props.playlists){
      this.setState({ playlists: this.props.playlists})
    }

    if (!prevProps.categories && this.props.categories){
      this.setState({ categories: this.props.categories})
    }
  }

  render() {

    const { newReleases, playlists, categories } = this.state;

    return (
      <div className="discover">
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
        <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
      </div>
    );
  }
}

const mapStateToProps = ({ system }) => {
	const { user, newReleases, playlists, categories } = system;
	return { user, newReleases, playlists, categories }
};

export default connect(mapStateToProps, {
  userLogout,
  searchNewReleases,
  searchPlaylists,
  searchCategories
})(Discover);