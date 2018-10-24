import React, { Component } from 'react';
import styled from 'styled-components';

import LogoIcon from '../../components/LogoIcon/LogoIcon';

const HomeContainer = styled.div`
    text-align: center;
`;

const HomeHeader = styled.div`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

const HomeLink = styled.a`
    color: #61dafb;
`;

class Home extends Component {
  render() {
    return(
      <HomeContainer>
        <HomeHeader>
          <LogoIcon color="#61DAFB" />
          <p>
            Hi, I'm your react home page!
          </p>
          <HomeLink
            href="/newroute"
          >
            Switch Page
          </HomeLink>
        </HomeHeader>
      </HomeContainer>
    );
  }
}

export default Home;
