import React from 'react';
import styled from "styled-components"
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Player from '../components/Player';



function CoreLayout({ children , props }) {

  return (
    <StyledCoreLayout className="main">
      <SideBar props={props}/>
      <div className="main__content">
        <Header props={props} />
        <div className="main__content__child">
          {children}
        </div>
      </div>
      <Player />
    </StyledCoreLayout>
  );
}

const StyledCoreLayout = styled.div`
  background-color: ${props => props.theme.mainBackground};
`



export default CoreLayout
