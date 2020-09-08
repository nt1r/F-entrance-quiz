import React from 'react';
import '../App.scss';
import MemberTag from './MemberTag';

class TeamCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputVisible: props.inputVisible,
    };
  }

  render() {
    const { name, members, onKeyPress, index } = this.props;
    return (
      <div>
        {this.state.inputVisible ? (
          <input
            type="text"
            className="renameInput"
            onKeyPress={(event) => onKeyPress(event, index)}
          />
        ) : (
          <button
            type="button"
            className="teamNameButton"
            onClick={(event) => {
              console.log(event);
              this.setState({
                // eslint-disable-next-line react/no-access-state-in-setstate
                inputVisible: !this.state.inputVisible,
              });
            }}
          >
            {name}
          </button>
        )}
        <div>
          {members.map((member) => {
            return <MemberTag id={member.id} name={member.name} />;
          })}
        </div>
      </div>
    );
  }
}

export default TeamCard;
