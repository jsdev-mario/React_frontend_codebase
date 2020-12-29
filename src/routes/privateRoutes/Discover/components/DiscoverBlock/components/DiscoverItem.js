import React from 'react';
import styled from "styled-components"
import '../styles/_discover-item.scss';


const DiscoverItemTitle = styled.p`
  color: ${props => props.theme.text};
`

export default function DiscoverItem({ images, name }) {
  return (
    <div className="discover-item animate__animated animate__fadeIn">
      <div
        className="discover-item__art"
        style={{ backgroundImage: `url(${images[0].url})` }}
      />
      <DiscoverItemTitle className="discover-item__title">{name}</DiscoverItemTitle>
    </div>
  );
}
