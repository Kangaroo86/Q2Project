import React from 'react';
import ComposeFormComponent from './ComposeFormComponent.js';
import MessageComponent from './MessageComponent.js';
import MessagesComponent from './MessagesComponent.js'; //message id
import InboxPageLayout from './InboxPageLayout.js';
import ToolbarComponent from './ToolbarComponent.js';

export default function InboxPage({
  messages,
  selectedMessageIds,
  showComposeForm
}) {
  return (
    <InboxPageLayout>
      <ToolbarComponent
        messages={messages}
        selectedMessageCount={selectedMessageIds.length}
      />
      <MessagesComponent
        messages={messages}
        selectedMessageIds={selectedMessageIds}
      />
      {showComposeForm && <ComposeFormComponent />}
    </InboxPageLayout>
  );
}
