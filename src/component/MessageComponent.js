import React, { Component } from 'react';
var classNames = require('classnames');

export default class MessageComponent extends Component {
  constructor(props) {
    //props have all of the shits pass in. this.props = props
    super(props); //purpose of super is calling 'constructor' method from 'Component'

    this.state = {
      toggler: false
    };
    this.handleCheckClick = this.handleCheckClick.bind(this);
    this.handleStarClick = this.handleStarClick.bind(this);
    this.handleReadMessageClick = this.handleReadMessageClick.bind(this);
  }

  //CHECK MESSAGES CLICK
  handleCheckClick(event) {
    //console.log(event, 'event---------');
    if (this.props.message.selected) {
      //console.log(this.props, 'this props------');
      this.props.onDeselectMessage(this.props.message.id);
    } else {
      this.props.onSelectMessage(this.props.message.id);
    }
  }

  //STAR MESSAGES CLICK
  handleStarClick(event) {
    event.preventDefault();
    if (this.props.message.starred) {
      this.props.onUnstarMessage(this.props.message.id);
    } else {
      this.props.onStarMessage(this.props.message.id);
    }
  }

  //READ MESSAGES CLICK
  handleReadMessageClick(event) {
    event.preventDefault();
    this.props.onMarkAsReadMessage(this.props.message.id);
  }

  render() {
    let star;
    let label;
    let check;
    let read;

    //for label
    // let classes = classNames({
    //   row: true,
    //   message: true,
    //   selected: false,
    //   unread: true
    // });

    //console.log('testing ----------', this.props.message.labels);
    if (this.props.message.labels.length !== 0) {
      //this.props.message is from MessagesComponent//
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

    //FOR STAR
    if (this.props.message.starred === true) {
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

    //FOR CHECK
    if (this.props.message.selected === true) {
      check = 'checked';
    } else {
      check = '';
    }

    //FOR READ
    if (this.props.message.read == true) {
      read = classNames({
        row: true,
        message: true,
        selected: false,
        unread: false
      });
    } else {
      read = classNames({
        row: true,
        message: true,
        selected: false,
        unread: true
      });
    }

    return (
      <div className={read}>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input
                type="checkbox"
                checked={check}
                onChange={this.handleCheckClick}
              />
            </div>
            <div className="col-xs-2">
              <i className={star} onClick={this.handleStarClick} />
            </div>
          </div>
        </div>
        <div className="col-xs-11">
          {/* {console.log(this.props.message.labels, '-----------')} */}
          {this.props.message.labels &&
            this.props.message.labels.map(label =>
              <span className="label label-warning">
                {label}
              </span>
            )}
          <a href="#" onClick={this.handleReadMessageClick}>
            {this.props.message.subject}
          </a>
        </div>
      </div>
    );
  }
}
