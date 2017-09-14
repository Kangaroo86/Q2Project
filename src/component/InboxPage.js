import React from 'react';
import ComposeFormComponent from './ComposeFormComponent.js';
import MessagesComponent from './MessagesComponent.js'; //message id
import InboxPageLayout from './InboxPageLayout.js';
import ToolbarComponent from './ToolbarComponent.js';

export default function InboxPage({
  messages,
  selectedMessageIds,
  showComposeForm,
  onStarMessage,
  onUnstarMessage,
  onSelectMessage,
  onDeselectMessage,
  onMarkAsReadMessage,
  onOpenComposeForm,
  onSelectAllMessages,
  onDeselectAllMessages,
  selectedMessageCount,
  onMarkAsReadSelectedMessages,
  onMarkAsUnreadSelectedMessages,
  onApplyLabelSelectedMessages,
  onRemoveLabelSelectedMessages,
  onDeleteSelectedMessages,
  onComposeFormCancel,
  onComposeFormSubmit
}) {
  return (
    <InboxPageLayout>
      <ToolbarComponent
        messages={messages}
        selectedMessageCount={selectedMessageIds.length}
        onOpenComposeForm={onOpenComposeForm}
        onSelectAllMessages={onSelectAllMessages}
        onDeselectAllMessages={onDeselectAllMessages}
        selectedMessageIds={selectedMessageIds}
        onMarkAsReadSelectedMessages={onMarkAsReadSelectedMessages}
        onMarkAsUnreadSelectedMessages={onMarkAsUnreadSelectedMessages}
        onApplyLabelSelectedMessages={onApplyLabelSelectedMessages}
        onRemoveLabelSelectedMessages={onRemoveLabelSelectedMessages}
        onDeleteSelectedMessages={onDeleteSelectedMessages}
      />
      <MessagesComponent
        selectedMessageIds={selectedMessageIds}
        messages={messages}
        onMarkAsReadMessage={onMarkAsReadMessage}
        onSelectMessage={onSelectMessage}
        onDeselectMessage={onDeselectMessage}
        onStarMessage={onStarMessage}
        onUnstarMessage={onUnstarMessage}
      />
      {showComposeForm
        ? <ComposeFormComponent
            onComposeFormCancel={onComposeFormCancel}
            onComposeFormSubmit={onComposeFormSubmit}
          />
        : undefined}
    </InboxPageLayout>
  );
}
