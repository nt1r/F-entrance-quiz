import React from 'react';
import '../App.scss';
import { makeHttpRequest } from '../utils/http';
import MemberTag from './MemberTag';

const HOST_IP = 'http://localhost:8080';
const getAllMembersUrl = `${HOST_IP}/group-api/init-list`;
const addNewMembersUrl = `${HOST_IP}/group-api/member`;

class MemberSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      members: [],
      inputVisible: false,
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

  changeInputVisible = () => {
    this.setState({
      // eslint-disable-next-line react/no-access-state-in-setstate
      inputVisible: !this.state.inputVisible,
    });
  };

  onKeyPress = (event) => {
    if (event.key === 'Enter') {
      makeHttpRequest('post', addNewMembersUrl, {
        name: event.target.value,
      })
        .then((response) => {
          this.setState({
            members: response.data.memberList,
            inputVisible: false,
          });
        })
        .catch((error) => {
          // do nothing here
          console.log(error);
        });
    }
  };

  render() {
    return (
      <section>
        <h1>学员列表</h1>
        <div className="member_list_div">
          {this.state.members.map((member) => {
            return <MemberTag id={member.id} name={member.name} />;
          })}
          {this.state.inputVisible ? (
            <input type="text" className="add_member_input" onKeyPress={this.onKeyPress} />
          ) : (
            <button type="button" className="memberTagButton" onClick={this.changeInputVisible}>
              + 添加学员
            </button>
          )}
        </div>
      </section>
    );
  }
}

export default MemberSection;
