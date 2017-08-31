import React from 'react';
import MessageComponent from './MessageComponent.js';
var classNames = require('classnames');

export default function ToolbarComponent({ messages, selectedMessageCount }) {
  let classes;

  if (messages.length === selectedMessageCount) {
    classes = classNames({
      fa: true,
      'fa-check-square-o': true
    });
  } else if (selectedMessageCount >= 1) {
    classes = classNames({
      fa: true,
      'fa-minus-square-o': true
    });
  } else if (selectedMessageCount == 0) {
    classes = classNames({
      fa: true,
      'fa-check-square-o': true,
      btn: true,
      'btn-default': false
    });
  } else {
    classes = classNames({
      fa: true,
      'fa-check-square-o': true
    });
  }

  return (
    <div className="row toolbar">
      <div className="col-md-12">
        <p className="pull-right">
          <span className="badge badge">2</span>
          unread messages
        </p>

        <button className="btn btn-default">
          <i className={classes} />
        </button>

        <button className={classes}>Mark As Read</button>

        <button className={classes}>Mark As Unread</button>

        <select className="form-control label-select">
          <option>Apply label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <select className="form-control label-select">
          <option>Remove label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <button className="btn btn-default">
          <i className="fa fa-trash-o" />
        </button>
      </div>

      {/* <div>
        {messages.map(element =>
          <MessageComponent
            message={element}
            selected={selectedMessageCount}
            debug={'toolbar'}
          />
        )}
      </div> */}
    </div>
  );
  //
}
