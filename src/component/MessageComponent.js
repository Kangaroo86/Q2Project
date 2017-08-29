import React from 'react';
var classNames = require('classnames');

export default function MessageComponent({ selected, message }) {
  let star; //for star
  let label; //for label

  //for label
  let classes = classNames({
    row: true,
    message: true
    // selected: selected,
    // unread: message.read
  });

  if (message.labels.length !== 0) {
    label = classNames({
      label: true,
      'label-warning': true
    });
  } else {
    label = classNames({
      label: false,
      'label-warning': false
    });
  }

  //for star
  if (!message.starred === true) {
    star = classNames({
      star: true,
      fa: true,
      'fa-star': true
    });
  } else {
    star = classNames({
      star: true,
      fa: true,
      'fa-star-o': true
    });
  }
  return (
    <div className={classes}>
      <div className="col-xs-1">
        <div className="row">
          <div className="col-xs-2">
            <input type="checkbox" checked="checked" />
          </div>
          <div className="col-xs-2">
            <i className={star} />
          </div>
        </div>
      </div>
      <div className="col-xs-11">
        <span className={label}>dev</span>
        <span className={label}>gschool</span>
        <a href="#">
          {message.subject}
        </a>
      </div>
    </div>
  );
}
