import React from 'react';
import MessageComponent from './MessageComponent.js';

export default function MessagesComponent({
  selectedMessageIds,
  messages,
  onUnstarMessage,
  onSelectMessage,
  onDeselectMessage,
  onMarkAsReadMessage,
  onStarMessage
}) {
  return (
    <div>
      {messages.map(element => {
        // console.log(selectedMessageIds.indexOf(element.id) > -1 ? true : false);
        return (
          <MessageComponent
            key={element.id}
            message={element}
            selected={
              selectedMessageIds.indexOf(element.id) > -1 ? true : false
            }
            onStarMessage={onStarMessage}
            onUnstarMessage={onUnstarMessage}
            onSelectMessage={onSelectMessage}
            onDeselectMessage={onDeselectMessage}
            onMarkAsReadMessage={onMarkAsReadMessage}
          />
        );
      })}
    </div>
  );
}
