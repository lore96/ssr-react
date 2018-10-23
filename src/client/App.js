import React, { Component } from 'react';

import styled from 'styled-components';

// Our single Styled Component definition
const EmojiContainerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  font-size: 40px;
  background: linear-gradient(20deg, rgb(219, 112, 147), #daa357);
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <EmojiContainerDiv><span role="img" aria-label="emoji">💅</span></EmojiContainerDiv>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
