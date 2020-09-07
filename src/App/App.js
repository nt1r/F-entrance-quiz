import React, { Component } from 'react';
import './App.scss';
import MemberSection from './components/MemberSection';
import GroupSection from './components/GroupSection';

class App extends Component {
  render() {
    return (
      <main>
        <section>
          <MemberSection />
        </section>
        <section>
          <GroupSection />
        </section>
      </main>
    );
  }
}

export default App;
