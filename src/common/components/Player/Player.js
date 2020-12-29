import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from "styled-components"
import {
  faStepForward,
  faPlayCircle,
  faStepBackward,
  faEllipsisH
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faRandom } from '@fortawesome/free-solid-svg-icons';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
import { faVolumeDown } from '@fortawesome/free-solid-svg-icons';
import './_player.scss';


const StyledPlayer = styled.div`
  background: ${props => props.theme.playerBackground};
  & .player__album > p{
    color: ${props => props.theme.playerMusicTitle};
  }
`

export default function Player() {
  return (
    <StyledPlayer className="player">
      <div className="player__album">
        <span />
        <p>Nothing's playing</p>
      </div>
      <div className="player__controls">
        <FontAwesomeIcon icon={faStepBackward} />
        <FontAwesomeIcon icon={faPlayCircle} />
        <FontAwesomeIcon icon={faStepForward} />
      </div>
      <div className="player__seekbar" />
      <div className="player__actions">
        <FontAwesomeIcon icon={faEllipsisH} />
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faRandom} />
        <FontAwesomeIcon icon={faRetweet} />
        <FontAwesomeIcon icon={faVolumeDown} />
      </div>
    </StyledPlayer>
  );
}
