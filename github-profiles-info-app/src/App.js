import React, { Component } from 'react';
import Content from './Content';
import Header from "./Header";
import GitHubAccountList from "./GitHubAccountList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="GitHub profiles">
        </Header>
        <Content>
          <GitHubAccountList/>
        </Content>
      </div>
    );
  }
}

export default App;
