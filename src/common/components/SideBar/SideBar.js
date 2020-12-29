import React from 'react';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from "styled-components"
import {
  faHeadphonesAlt,
  faHeart,
  faPlayCircle,
  faSearch, faStream,
  faHome,
  faMoon, faSun
} from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Avatar } from '../../../assets/images/avatar.svg';
import './_sidebar.scss';


const StyledSideBar = styled.div`
  background: ${props => props.theme.sidebarBackground};
  & .sidebar__option--selected {
    background: ${props => props.theme.sidebarSelectedItemBackground}
  }
`

export default function SideBar({props}) {

  function clickSideBarItem(link) {

    if (link === '/logout'){
      props.userLogout()
    }else{
      props.history.push(link)
    }
  }
  
  function renderSideBarOption(link, icon, text, { selected } = {}) {

    return (
      <div className={cx('sidebar__option', { 'sidebar__option--selected': selected })}
      onClick={() => clickSideBarItem(link)}>
        <FontAwesomeIcon icon={icon} />
        <p>{text}</p>
      </div>
    )
  }

  return (
    <StyledSideBar className="sidebar">
      <div className="sidebar__profile">
        <Avatar />
        <p>{props.user.display_name}</p>
      </div>
      <div className="sidebar__options">
        {renderSideBarOption('/', faHeadphonesAlt, 'Discover', { selected: true })}
        {renderSideBarOption('/search', faSearch, 'Search')}
        {renderSideBarOption('/favourites', faHeart, 'Favourites')}
        {renderSideBarOption('/playlists', faPlayCircle, 'Playlists')}
        {renderSideBarOption('/charts', faStream, 'Charts')}
        {renderSideBarOption('/logout', faHome, 'Logout')}
      </div>
      <button className={cx("sidebar__togglebtn", {
          "dark": props.themeMode === 'light',
          "light": props.themeMode === 'dark'
        })} 
          onClick={props.toggleTheme}>
            {
              props.themeMode === 'light' ? 
              <FontAwesomeIcon icon={faMoon}/>:
              <FontAwesomeIcon icon={faSun}/>
            }
          </button>
    </StyledSideBar>
  );
}
