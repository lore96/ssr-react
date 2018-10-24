import React, { Component } from 'react';
import styled from 'styled-components';

import LogoIcon from '../../components/LogoIcon/LogoIcon';

const AnotherContainer = styled.div`
    text-align: center;
`;

const AnotherHeader = styled.div`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

const AnotherLink = styled.a`
    color: #61dafb;
`;

class newRoute extends Component {
  render() {
    return(
      <AnotherContainer>
        <AnotherHeader>
          <LogoIcon />
          <p>
            Hi, I'm another react page!
          </p>
          <AnotherLink
            href="/"
          >
            Go home
          </AnotherLink>
        </AnotherHeader>
      </AnotherContainer>
    );
  }
}

export default newRoute;