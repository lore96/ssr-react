import React, { Component } from 'react';
import styled from 'styled-components';

import LogoIcon from '../../components/LogoIcon/LogoIcon';
import { NavLink } from 'react-router-dom';


const AnotherContainer = styled.div`
    text-align: center;
`;

const AnotherHeader = styled.div`
    background-color: #8b0000;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

const AnotherLink = styled.a`
    color: #ff0000;
`;

class newRoute extends Component {
  render() {
    return(
      <AnotherContainer>
        <AnotherHeader>
          <LogoIcon color="#ff0000"/>
          <p>
            Hi, I'm another react page!
          </p>
          <AnotherLink
            href="/"
          >
            Go home
          </AnotherLink>
          <NavLink to="/">Go home with Link</NavLink>
        </AnotherHeader>
      </AnotherContainer>
    );
  }
}

export default newRoute;
