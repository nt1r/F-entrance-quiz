import React from 'react';
import '../App.scss';
import { makeHttpRequest } from '../utils/http';
import MemberTag from './MemberTag';

const HOST_IP = 'http://localhost:8080';
const getAllMembersUrl = `${HOST_IP}/group-api/init-list`;

class MemberSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      members: [],
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

  render() {
    return (
      <section>
        <h1>学员列表</h1>
        <div className="member_list_div">
          {this.state.members.map((member) => {
            return <MemberTag id={member.id} name={member.name} />;
          })}
        </div>
      </section>
    );
  }
}

export default MemberSection;
