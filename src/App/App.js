import React, { Component } from 'react';
import './App.scss';
import MemberSection from './components/MemberSection';
import GroupSection from './components/GroupSection';
import {
  addNewMembersUrl,
  assignGroupUrl,
  getAllMembersUrl,
  makeHttpRequest,
  renameTeamNameUrl,
} from './utils/http';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      members: [],
      teamList: [],
      addMemberInputVisible: false,
    };
  }

  componentDidMount() {
    makeHttpRequest('get', getAllMembersUrl).then((response) => {
      console.log(response.data);
      this.setState({
        members: response.data.memberList,
      });
    });
  }

  onAddMemberKeyPress = (event) => {
    if (event.key === 'Enter') {
      makeHttpRequest('post', addNewMembersUrl, {
        name: event.target.value,
      })
        .then((response) => {
          this.setState({
            members: response.data.memberList,
            addMemberInputVisible: false,
          });
        })
        .catch((error) => {
          // do nothing here
          console.log(error);
        });
    }
  };

  onRenameKeyPress = (event, index) => {
    if (event.key === 'Enter') {
      makeHttpRequest('post', renameTeamNameUrl, {
        newName: event.target.value,
        index,
      })
        .then((response) => {
          if (response.status === 200) {
            console.log('success');
          } else if (response.status === 409) {
            console.log('repeat name');
          }
        })
        .catch((error) => {
          // do nothing here
          console.log(error);
        });
    }
  };

  changeAddMemberInputVisible = () => {
    this.setState({
      // eslint-disable-next-line react/no-access-state-in-setstate
      addMemberInputVisible: !this.state.addMemberInputVisible,
    });
  };

  onClickAssignButton = () => {
    makeHttpRequest('get', assignGroupUrl)
      .then((response) => {
        console.log(response.data);
        this.setState({
          teamList: response.data.teamList,
        });
      })
      .catch((error) => {
        // do nothing here
        console.log(error);
      });
  };

  render() {
    return (
      <body className="App">
        <main>
          <GroupSection
            teamList={this.state.teamList}
            onKeyPress={this.onRenameKeyPress}
            onClickButton={this.onClickAssignButton}
          />
          <MemberSection
            members={this.state.members}
            inputVisible={this.state.addMemberInputVisible}
            onKeyPress={this.onAddMemberKeyPress}
            changeInputVisible={this.changeAddMemberInputVisible}
          />
        </main>
      </body>
    );
  }
}

export default App;
