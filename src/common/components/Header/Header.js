import React from 'react';
import styled from "styled-components"
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Hero } from '../../../assets/images/hero.svg';
import './_header.scss';


const StyledHeader = styled.div`
  background: ${props => props.theme.headerBackground};
`

export default function Header({props}) {
  return (
    <StyledHeader className="header">
      <Hero />
      <div>
        <h1>Your favourite tunes</h1>
        <h2>All <FontAwesomeIcon icon={faSun} /> and all <FontAwesomeIcon icon={faMoon} /></h2>
      </div>
    </StyledHeader>
  );
}
