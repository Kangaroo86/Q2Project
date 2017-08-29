import React from 'react';
import { storiesOf } from '@storybook/react';
import InboxPageLayout from './InboxPageLayout.js';
import ComposeFormComponent from './ComposeFormComponent.js';
import MessagesComponent from './MessagesComponent.js';
import MessageComponent from './MessageComponent.js';
import ToolbarComponent from './ToolbarComponent.js';

let selectedMessageIds = [0, 1, 2];
let showComposeForm = true;

storiesOf('InboxPageLayout', module)
  .add('Show ComposeFormComponent', () =>
    <InboxPageLayout>
      {showComposeForm && <ComposeFormComponent />}
      <ToolbarComponent
        messages={seedData}
        selectedMessageCount={selectedMessageIds.length}
      />
      <MessagesComponent
        messages={seedData}
        selectedMessageIds={selectedMessageIds}
      />
    </InboxPageLayout>
  )
  .add('Not Show ComposeFormComponent', () =>
    <InboxPageLayout>
      <ToolbarComponent
        messages={seedData}
        selectedMessageCount={selectedMessageIds.length}
      />
      {showComposeForm === false && <ComposeFormComponent />}
      <MessagesComponent
        messages={seedData}
        selectedMessageIds={selectedMessageIds}
      />
    </InboxPageLayout>
  );

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
