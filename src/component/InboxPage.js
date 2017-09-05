import React from 'react';
import ComposeFormComponent from './ComposeFormComponent.js';
import MessageComponent from './MessageComponent.js';
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
  handleClickCancel,
  handle_onSubmit
  //notMarkAsReadMessage
}) {
  // let composeForm = undefined;
  // if (showComposeForm === true) {
  //   composeForm = ComposeFormComponent;
  // }

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
        //ComposeFormComponent={ComposeFormComponent}
      />
      <MessagesComponent
        messages={messages}
        selectedMessageIds={selectedMessageIds}
        onStarMessage={onStarMessage}
        onUnstarMessage={onUnstarMessage}
        onSelectMessage={onSelectMessage}
        onDeselectMessage={onDeselectMessage}
        onMarkAsReadMessage={onMarkAsReadMessage}
        //notMarkAsReadMessage={notMarkAsReadMessage}
      />
      {showComposeForm &&
        <ComposeFormComponent
          handleClickCancel={handleClickCancel}
          handle_onSubmit={handle_onSubmit}
        />}
    </InboxPageLayout>
  );
}
