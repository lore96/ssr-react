import React, { Component } from 'react';
import styled from 'styled-components';

import LogoIcon from '../../components/LogoIcon/LogoIcon';

import { NavLink } from 'react-router-dom';

const HomeContainer = styled.div`
    text-align: center;
`;

const HomeHeader = styled.div`
    background-color: #green;
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
          <NavLink to="/newroute">New Route with Link</NavLink>
        </HomeHeader>
      </HomeContainer>
    );
  }
}

export default Home;
