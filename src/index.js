import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import ComposeFormComponent from './component/ComposeFormComponent.js';
import MessageComponent from './component/MessageComponent.js';
import InboxPage from './component/InboxPage.js';

let selected = function() {};
let message = function() {};
let onMarkAsReadMessage = function() {};

//THIS IS FOR CHECK
let onSelectMessage = function(itemId) {
  let matchedObject = seedData.find(function(message) {
    return message.id === itemId;
  });

  if (matchedObject !== undefined) {
    matchedObject.selected = true;
  }
  render();
};
let onDeselectMessage = function(itemId) {
  let matchedObject = seedData.find(function(message) {
    return message.id === itemId;
  });

  if (matchedObject !== undefined) {
    matchedObject.selected = false;
  }
  render();
};

//THIS IS FOR STAR
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

let onUnstarMessage = function(itemId) {
  console.log('unstared entered the function');
  let matchedObject = seedData.find(function(message) {
    return message.id === itemId;
  });
  console.log('unstared matchedobj', matchedObject);
  if (matchedObject !== undefined) {
    matchedObject.starred = false;
    console.log('unstared entered the if');
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

let inputMesseges = [];

function render() {
  ReactDOM.render(
    <InboxPage
      messages={seedData}
      selectedMessageIds={inputMesseges}
      showComposeForm={ComposeFormComponent}
      onStarMessage={onStarMessage}
      onUnstarMessage={onUnstarMessage}
      onSelectMessage={onSelectMessage}
      onDeselectMessage={onDeselectMessage}
    />,
    document.getElementById('root')
  );
}
render();
//registerServiceWorker();
