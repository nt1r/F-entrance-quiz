import React from 'react';
import '../App.scss';
import SectionTitle from './SectionTitle';

const HOST_IP = 'http://localhost:8080';
const getAllMembersUrl = `${HOST_IP}/group-api/init-list`;

class MemberSection extends React.Component {
  componentDidMount() {
    this.makeHttpRequest('GET', getAllMembersUrl).then((response) => {
      console.log(response);
    });
  }

  // eslint-disable-next-line class-methods-use-this
  makeHttpRequest(method, url) {
    return new Promise((resolve, reject) => {
      const xmlRequest = new XMLHttpRequest();
      xmlRequest.open(method, url);
      xmlRequest.onreadystatechange = () => {
        if (xmlRequest.readyState === 4) {
          if (xmlRequest.status === 200) {
            resolve(xmlRequest.responseText);
          } else {
            reject(xmlRequest.statusText);
          }
        }
      };
      xmlRequest.send();
    });
  }

  render() {
    return (
      <section>
        <SectionTitle titleName="学员列表" />
      </section>
    );
  }
}

export default MemberSection;
