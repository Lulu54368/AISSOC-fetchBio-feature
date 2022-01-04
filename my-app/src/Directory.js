import React from 'react';
import { Userlist } from './UserlIst';

export function Directory(props) {
  return (
    <div className="Directory">
      <h2>User directory</h2>
      <Userlist
        usernames={props.list}
        onChoose={props.onChoose}
      />
    </div>
  );
}

