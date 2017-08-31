import React from 'react';
import MessageComponent from './MessageComponent.js';

export default function MessagesComponent({
  messages,
  selectedMessageIds,
  onStarMessage,
  onUnstarMessage,
  onSelectMessage,
  onDeselectMessage
}) {
  //console.log(selectedMessageIds);
  return (
    <div>
      {/* {console.log('this is messages props', messages)} */}
      {messages.map(element =>
        <MessageComponent
          message={element}
          //selected={selectedMessageIds.indexOf(element.id) > -1 ? true : false}
          selected={element.selected ? element.selected : false}
          onStarMessage={onStarMessage}
          onUnstarMessage={onUnstarMessage}
          onSelectMessage={onSelectMessage}
          onDeselectMessage={onDeselectMessage}
        />
      )}
    </div>
  );
  //
}

// element.id = 6
// selectedMessageIds = [3,4,5]
// selectedMessageIds.indexOf(element.id);
// ? true : false

// if (selectedMessageIds.indexOf(element.id) > -1) {
//   return true
// } else {
//   return false
// }
