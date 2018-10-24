import React, { Component } from 'react';
import styled from 'styled-components';

import LogoIcon from '../../components/LogoIcon/LogoIcon';

// Our single Styled Component definition
// const EmojiContainerDiv = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: fixed;
//   width: 100%;
//   height: 100%;
//   font-size: 40px;
//   background: linear-gradient(20deg, rgb(219, 112, 147), #daa357);
// `;

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
    // return (<EmojiContainerDiv><span role="img" aria-label="emoji">💅</span></EmojiContainerDiv>
    return(
      <HomeContainer>
        <HomeHeader>
          <LogoIcon />
          <p>
            Hi, I'm your react home page!
          </p>
          <HomeLink
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </HomeLink>
        </HomeHeader>
      </HomeContainer>
    );
  }
}

export default Home;
