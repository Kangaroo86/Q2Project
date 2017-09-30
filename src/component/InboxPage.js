import React from 'react';
import ComposeFormComponent from './ComposeFormComponent';
import MessagesComponent from './MessagesComponent';
import InboxPageLayout from './InboxPageLayout';
import ToolbarComponent from './ToolbarComponent';

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
        selectedMessageCount={selectedMessageIds && selectedMessageIds.length}
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
