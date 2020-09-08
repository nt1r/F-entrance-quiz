import React, { Component } from 'react';
import './App.scss';
import MemberSection from './components/MemberSection';
import GroupSection from './components/GroupSection';

class App extends Component {
  render() {
    return (
      <body className="App">
        <main>
          <GroupSection />
          <MemberSection />
        </main>
      </body>
    );
  }
}

export default App;
