import React from 'react';
import './ProfileHeader.css';

const ProfileHeader = (props) => {
  let { imgurl } = props;
    let app = (
      <div>
        <img className="profilePic" alt= "" src={imgurl} align="center"/>
  </div>
    )
  return app;
}

export default ProfileHeader;