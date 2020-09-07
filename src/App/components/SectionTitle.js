import React from 'react';
import '../App.scss';

class SectionTitle extends React.Component {
  render() {
    const { sectionTitle } = this.props;
    return <div className="sectionTitle">{sectionTitle}</div>;
  }
}

export default SectionTitle;
