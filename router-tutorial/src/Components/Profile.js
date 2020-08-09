import React from 'react';

const data = {
  yujo: {
    name: 'JO YUN HO',
    description: 'Learning React',
  },
  sucho: {
    name: 'CHO SUNG YONG',
    description: 'CUB3D',
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>Can not find this USER</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
