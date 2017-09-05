import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
//import ComposeFormComponent from './component/ComposeFormComponent.js';
import MessageComponent from './component/MessageComponent.js';
import InboxPage from './component/InboxPage.js';

let selected = function() {};
let message = function() {};

//APPLY LABELS
let onApplyLabelSelectedMessages = function(label) {
  seedData.forEach(element => {
    if (element.selected === true) {
      element.labels.push(label);
      //console.log(element, '<<<<<');
    }
  });
  render();
};

//REMOVE LABELS
let onRemoveLabelSelectedMessages = function(label) {
  seedData.forEach(element => {
    if (element.selected === true) {
      let index = element.labels.indexOf(label);
      element.labels.splice(index, 1);
      //console.log(test, '--------');
    }
  });
  render();
};

//DELETE MESSAGES
let onDeleteSelectedMessages = function() {
  seedData.forEach(element => {
    if (element.selected == true) {
      let objId = element.id;
      let index = seedData.indexOf(objId);
      seedData.splice(index, 1);
    }
  });
};

//MARK ALL READ
let onMarkAsReadSelectedMessages = function() {
  seedData.forEach(element => (element.read = true));
  render();
};

//MARK ALL UNDREAD
let onMarkAsUnreadSelectedMessages = function() {
  seedData.forEach(element => (element.read = false));
  render();
};

//SELECT ALL MESSAGES
let onSelectAllMessages = function() {
  seedData.forEach(element => (element.selected = true));
  render();
};

//DESELECT ALL MESSAGES
let onDeselectAllMessages = function() {
  seedData.forEach(element => (element.selected = false));
  render();
};

//OPEN COMPOSE FORM
let showComposeForm = false;
let onOpenComposeForm = function() {
  showComposeForm = true;
  render();
};

//CLOSE COMPOSE FORM
let handleClickCancel = function() {
  //console.log('clicked');
  showComposeForm = false;
  render();
};

//SEND MESSAGE
let handle_onSubmit = function({ subject, body }) {
  let newObj = {
    id: 9,
    subject: subject,
    read: false,
    starred: true,
    labels: ['dev']
  };
  showComposeForm = true;
  seedData.push(newObj);
  render();
};

//THIS IS FOR MESSAGE READ
let onMarkAsReadMessage = function(itemId) {
  let matchedObject = seedData.find(function(message) {
    return message.id === itemId;
  });
  if (matchedObject !== undefined) {
    matchedObject.read = true;
  }
  render();
};

//SELECT MESSAGES
let onSelectMessage = function(itemId) {
  let matchedObject = seedData.find(function(message) {
    return message.id === itemId;
  });

  if (matchedObject !== undefined) {
    matchedObject.selected = true;
  }
  render();
};

//UNSELECT MESSAGES
let onDeselectMessage = function(itemId) {
  let matchedObject = seedData.find(function(message) {
    return message.id === itemId;
  });

  if (matchedObject !== undefined) {
    matchedObject.selected = false;
  }
  render();
};

//STAR MESSAGES
//loop through an array checking for conditional, set star to
let onStarMessage = function(itemId) {
  let matchedObject = seedData.find(function(message) {
    return message.id === itemId;
  });

  if (matchedObject !== undefined) {
    matchedObject.starred = true;
  }
  render();
};

//UNSTARED MESSAGES
let onUnstarMessage = function(itemId) {
  let matchedObject = seedData.find(function(message) {
    return message.id === itemId;
  });
  if (matchedObject !== undefined) {
    matchedObject.starred = false;
  }
  render();
};

const seedData = [
  {
    id: 1,
    subject:
      "You can't input the protocol without calculating the mobile RSS protocol!",
    read: false,
    starred: true,
    labels: ['dev', 'personal']
  },
  {
    id: 2,
    subject:
      "connecting the system won't do anything, we need to input the mobile AI panel!",
    read: false,
    starred: false,
    selected: true,
    labels: []
  },
  {
    id: 3,
    subject:
      'Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!',
    read: false,
    starred: true,
    labels: ['dev']
  },
  {
    id: 4,
    subject: 'We need to program the primary TCP hard drive!',
    read: true,
    starred: false,
    selected: true,
    labels: []
  },
  {
    id: 5,
    subject:
      'If we override the interface, we can get to the HTTP feed through the virtual EXE interface!',
    read: false,
    starred: false,
    labels: ['personal']
  },
  {
    id: 6,
    subject: 'We need to back up the wireless GB driver!',
    read: true,
    starred: true,
    labels: []
  },
  {
    id: 7,
    subject: 'We need to index the mobile PCI bus!',
    read: true,
    starred: false,
    labels: ['dev', 'personal']
  },
  {
    id: 8,
    subject:
      'If we connect the sensor, we can get to the HDD port through the redundant IB firewall!',
    read: true,
    starred: true,
    labels: []
  }
];

let selectedMessageIds = [];
//let inputMesseges = [];

function render() {
  ReactDOM.render(
    <InboxPage
      messages={seedData}
      selectedMessageIds={selectedMessageIds}
      showComposeForm={showComposeForm}
      onOpenComposeForm={onOpenComposeForm}
      onStarMessage={onStarMessage}
      onUnstarMessage={onUnstarMessage}
      onSelectMessage={onSelectMessage}
      onDeselectMessage={onDeselectMessage}
      onMarkAsReadMessage={onMarkAsReadMessage}
      //notMarkAsReadMessage={notMarkAsReadMessage}
      // showCompose={showCompose}
      onSelectAllMessages={onSelectAllMessages}
      onDeselectAllMessages={onDeselectAllMessages}
      onMarkAsReadSelectedMessages={onMarkAsReadSelectedMessages}
      onMarkAsUnreadSelectedMessages={onMarkAsUnreadSelectedMessages}
      onApplyLabelSelectedMessages={onApplyLabelSelectedMessages}
      onRemoveLabelSelectedMessages={onRemoveLabelSelectedMessages}
      onDeleteSelectedMessages={onDeleteSelectedMessages}
      handleClickCancel={handleClickCancel}
      handle_onSubmit={handle_onSubmit}
    />,
    document.getElementById('root')
  );
}
render();
//registerServiceWorker();
