import React, { Component } from 'react';
import './App.scss';
import MemberSection from './components/MemberSection';
import GroupSection from './components/GroupSection';

class App extends Component {
  render() {
    return (
      <main>
        <MemberSection />
        <GroupSection />
      </main>
    );
  }
}

export default App;
