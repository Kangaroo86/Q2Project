import React, { Component } from 'react';
import InboxPage from './component/InboxPage';
import getMessages from './api/getMessages.js';
import updateMessage from './api/updateMessage.js';

export default class App extends Component {
  state = {
    messages: [],
    selectedMessageIds: [],
    showComposeForm: false,
    showApiError: false
  };

  //FETCH JSON DATA
  componentDidMount() {
    getMessages().then(data => {
      //this.setState({ messages: data });
      this.setState({ messages: [...data] });
      //console.log(this.state.messages, 'messages-------');
    });
  }

  //MESSSAGE_COMPONENT: onSTAR_MESSAGE
  onStarMessage = itemId => {
    updateMessage(itemId, { starred: true }).then(updatedMessage => {
      this.setState(prevState => {
        //let copy = prevState.messages.slice() //this is equivalent to spread operators
        let copy = [...prevState.messages];
        copy.find(item => item.id === itemId).starred = true;
        return { messages: copy };
      });
    });
  };

  //MESSSAGE_COMPONENT: onUNSTAR_MESSAGE
  onUnstarMessage = itemId => {
    updateMessage(itemId, { starred: false }).then(updatedMessage => {
      //console.log('---------', updatedMessage);
      this.setState(prevState => {
        let copy = [...prevState.messages];
        copy.find(item => item.id === itemId).starred = false;
        return { messages: copy };
      });
    });
  };

  //MESSSAGE_COMPONENT: CHECKBOX_SELECT_MESSAGE
  onSelectMessage = itemId => {
    updateMessage(itemId, { selected: true }).then(updatedMessage => {
      //console.log('itemId----', itemId);
      this.setState(prevState => {
        //console.log(prevState, '----------');
        let copy = [...prevState.messages];
        copy.find(item => item.id === itemId).selected = true;
        return { messages: copy };
      });
    });
  };

  //MESSSAGE_COMPONENT: CHECKBOX_UNSELECT_MESSAGE;
  onDeselectMessage = itemId => {
    updateMessage(itemId, { selected: false }).then(updatedMessage => {
      //console.log('itemId----', itemId);
      this.setState(prevState => {
        let copy = [...prevState.messages];
        copy.find(item => item.id === itemId).selected = false;
        return { messages: copy };
      });
    });
  };

  // //THIS IS FOR MESSAGE READ
  // let onMarkAsReadMessage = function(itemId) {
  //   let matchedObject = seedData.find(function(message) {
  //     return message.id === itemId;
  //   });
  //   if (matchedObject !== undefined) {
  //     matchedObject.read = true;
  //   }
  //   render();
  // };

  // onMarkAsReadSelectedMessages = itemId => {
  //   updateMessage(itemId, { read: true }).then(updatedMessage => {
  //     this.setState(prevState => {
  //       let copy = [...prevState.messages];
  //       console.log(copy, '----------');
  //       copy.find(item => item.read === itemId).read = true;
  //       return { messages: copy };
  //     });
  //   });
  // };

  render() {
    return (
      <InboxPage
        messages={this.state.messages}
        selectedMessageIds={this.state.selectedMessageIds}
        showComposeForm={this.state.showComposeForm}
        onToggleComposeForm={this._toggleComposeForm}
        onSelectAllMessages={this._selectAllMessages}
        onDeselectAllMessages={this._deselectAllMessages}
        onMarkAsReadSelectedMessages={this.onMarkAsReadSelectedMessages} //pending
        onMarkAsUnreadSelectedMessages={this._markAsUnreadSelectedMessages}
        onApplyLabelSelectedMessages={this._applyLabelSelectedMessages}
        onRemoveLabelSelectedMessages={this._removeLabelSelectedMessages}
        onDeleteSelectedMessages={this._deleteSelectedMessages}
        onMarkAsReadMessage={this._markAsReadMessage}
        onSelectMessage={this.onSelectMessage} //done
        onDeselectMessage={this.onDeselectMessage} //done
        onStarMessage={this.onStarMessage} //done
        onUnstarMessage={this.onUnstarMessage} //done
        onComposeFormSubmit={this._composeFormSubmit}
        onComposeFormCancel={this._composeFormCancel}
      />
    );
  }
  _toggleComposeForm = () => {
    /* ... */
  };
  _selectAllMessages = () => {
    /* ... */
  };
  _deselectAllMessages = () => {
    /* ... */
  };
  _markAsReadSelectedMessages = () => {
    /* ... */
  };
  _markAsUnreadSelectedMessages = () => {
    /* ... */
  };
  _applyLabelSelectedMessages = label => {
    /* ... */
  };
  _removeLabelSelectedMessages = labelToBeRemoved => {
    /* ... */
  };
  _deleteSelectedMessages = () => {
    /* ... */
  };
  _markAsReadMessage = messageId => {
    /* ... */
  };
  _selectMessage = messageId => {
    /* ... */
  };
  _deselectMessage = messageId => {
    /* ... */
  };
  _starMessage = messageId => {
    /* ... */
  };
  _unstarMessage = messageId => {
    /* ... */
  };
  _composeFormSubmit = ({ subject, body }) => {
    /* ... */
  };
  _composeFormCancel = () => {
    /* ... */
  };
}
