import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

import LogoIcon from './components/LogoIcon/LogoIcon';

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

const AppContainer = styled.div`
    text-align: center;
`;

const AppHeader = styled.div`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

const AppLink = styled.a`
    color: #61dafb;
`;

const AppLogoSpinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const LogoSvg = styled.svg`
  animation: ${AppLogoSpinAnimation} infinite 20s linear;
  height: 40vmin;
`;

class App extends Component {
  render() {
    // return (<EmojiContainerDiv><span role="img" aria-label="emoji">💅</span></EmojiContainerDiv>
    return(
      <AppContainer>
        <AppHeader>
          <LogoIcon />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <AppLink
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </AppLink>
        </AppHeader>
      </AppContainer>

    );
  }
}

export default App;
