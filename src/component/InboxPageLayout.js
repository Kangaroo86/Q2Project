import React from 'react';

export default function InboxPageLayout(props) {
  //console.log('what is props', props);

  return (
    <div className="container">
      <div className="row">
        <div className="col m8 s12">
          {props.children[0]}
        </div>
        <div className="col s12 m4">
          {props.children[1]}
          {props.children[2]}
        </div>
      </div>
    </div>
    //
  );
}
