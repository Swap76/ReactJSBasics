import React, {Component} from 'react';
import './ProfileHeader.css';

class ProfileHeader extends Component {
  render() {
    let {imgurl} = this.props;
    return (
      <div>
        <img className="profilePic" alt= "" src={imgurl} align="center"/>
      </div>
    )
  }
}

export default ProfileHeader;