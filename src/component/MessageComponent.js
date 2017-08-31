import React, { Component } from 'react';
var classNames = require('classnames');

export default class MessageComponent extends Component {
  constructor(props) {
    //props have all of the shits pass in. this.props = props
    super(props); //purpose of super is calling 'constructor' method from 'Component'

    this.state = {
      toggler: false
    };
    //console.log('props----', props); //debugging
    //console.log('this.props----', this.props); //debugging
    this.handleCheckClick = this.handleCheckClick.bind(this);
    this.handleStarClick = this.handleStarClick.bind(this);
  }

  handleCheckClick(event) {
    //console.log('result --------', event); //debugging
    event.preventDefault();
    //console.log('starred: ' + message.id); //debugging
    //console.log('type ' + typeof this.props.onStarMessage); //debugging
    //console.log('this.props.onStarMesage ' + this.props.onStarMessage); //debugging
    //console.log('debug', this.props.debug);
    console.log('is it click');
    if (this.props.message.selected) {
      this.props.onDeselectMessage(this.props.message.id);
    } else {
      this.props.onSelectMessage(this.props.message.id);
    }
  }

  handleStarClick(event) {
    event.preventDefault();
    if (this.props.message.starred) {
      this.props.onUnstarMessage(this.props.message.id);
    } else {
      this.props.onStarMessage(this.props.message.id);
    }
  }

  render() {
    let star; //for star
    let label; //for label
    let check;

    //for label
    let classes = classNames({
      row: true,
      message: true
      // selected: selected,
      // unread: message.read
    });

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

    //for star
    //console.log(this.props.message.starred);
    if (this.props.message.starred === true) {
      star = classNames({
        star: true,
        fa: true,
        'fa-star': true
      });
      //console.log('hit the if');
    } else {
      //console.log('hit the else');
      star = classNames({
        star: true,
        fa: true,
        'fa-star-o': true
      });
    }
    //for check
    console.log('this.props.message.read', this.props.message.read);
    if (this.props.message.selected === true) {
      check = 'checked';
    } else {
      check = '';
    }
    //console.log('check', check);

    return (
      <div className={classes}>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input
                type="checkbox"
                checked={check}
                onClick={this.handleCheckClick}
              />
            </div>
            <div className="col-xs-2">
              <i className={star} onClick={this.handleStarClick} />
            </div>
          </div>
        </div>
        <div className="col-xs-11">
          <span className={label}>dev</span>
          <span className={label}>gschool</span>
          <a href="#">
            {this.props.message.subject}
          </a>
        </div>
      </div>
    );
  }
}

///////////////////////////////
// import React from 'react';
// var classNames = require('classnames');
//
// export default function MessageComponent({ selected, message }) {
//   let star; //for star
//   let label; //for label
//
//   //for label
//   let classes = classNames({
//     row: true,
//     message: true
//     // selected: selected,
//     // unread: message.read
//   });
//
//   if (message.labels.length !== 0) {
//     label = classNames({
//       label: true,
//       'label-warning': true
//     });
//   } else {
//     label = classNames({
//       label: false,
//       'label-warning': false
//     });
//   }
//
//   //for star
//   if (!message.starred === true) {
//     star = classNames({
//       star: true,
//       fa: true,
//       'fa-star': true //control star toggler
//     });
//   } else {
//     star = classNames({
//       star: true,
//       fa: true,
//       'fa-star-o': true //control star toggler
//     });
//   }
//   return (
//     <div className={classes}>
//       <div className="col-xs-1">
//         <div className="row">
//           <div className="col-xs-2">
//             <input type="checkbox" checked="checked" />
//           </div>
//           <div className="col-xs-2">
//             <i className={star} />
//           </div>
//         </div>
//       </div>
//       <div className="col-xs-11">
//         <span className={label}>dev</span>
//         <span className={label}>gschool</span>
//         <a href="#">
//           {message.subject}
//         </a>
//       </div>
//     </div>
//   );
// }
