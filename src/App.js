import React, { Component } from 'react';
import InboxPage from './component/InboxPage';
import getMessages from './api/getMessages.js';
import updateMessage from './api/updateMessage.js';

export default class App extends Component {
  state = {
    messages: [],
    selectedMessageIds: [],
    selectedMessageCount: 0,
    showComposeForm: false,
    showApiError: false
  };

  ////FETCH JSON DATA
  componentDidMount() {
    getMessages().then(data => {
      //this.setState({ messages: data });
      this.setState({ messages: [...data] });
      //console.log(this.state.messages, 'messages-------');
    });
  }

  ////MESSSAGE_COMPONENT: onSTAR_MESSAGE
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

  ////MESSSAGE_COMPONENT: onUNSTAR_MESSAGE
  onUnstarMessage = itemId => {
    updateMessage(itemId, { starred: false }).then(updatedMessage => {
      this.setState(prevState => {
        let copy = [...prevState.messages];
        copy.find(item => item.id === itemId).starred = false;
        return { messages: copy };
      });
    });
  };

  ////MESSSAGE_COMPONENT: CHECKBOX_SELECT_MESSAGE
  onSelectMessage = itemId => {
    updateMessage(itemId, { selected: true }).then(updatedMessage => {
      this.setState(prevState => {
        let copy = [...prevState.messages];
        copy.find(item => item.id === itemId).selected = true;
        return { messages: copy };
      });
    });
  };

  ////MESSSAGE_COMPONENT: CHECKBOX_UNSELECT_MESSAGE
  onDeselectMessage = itemId => {
    updateMessage(itemId, { selected: false }).then(updatedMessage => {
      this.setState(prevState => {
        let copy = [...prevState.messages];
        copy.find(item => item.id === itemId).selected = false;
        return { messages: copy };
      });
    });
  };

  ////MESSSAGE_COMPONENT: onMARK_AS_READMESSAGE
  onMarkAsReadMessage = itemId => {
    updateMessage(itemId, { read: true }).then(updatedMessage => {
      this.setState(prevState => {
        let copy = [...prevState.messages];
        copy.find(item => item.id === itemId).read = true;
        return { messages: copy };
      });
    });
    //
  };

  ////TOOLBAR_COMPONENT: APPLY_LABELS
  onApplyLabelSelectedMessages = label => {
    this.state.messages.forEach(element => {
      let item_Id = element.id;
      let item_Label = [element.labels];
      if (element.selected && !item_Label.includes(label)) {
        item_Label.push(label);
      }

      updateMessage(item_Id, {
        labels: item_Label.toString()
      }).then(updatedMessage => {
        this.setState(currentState => {
          let copy = [...currentState.messages];
          copy = copy.map(
            element => (element.id === item_Id ? updatedMessage : element)
          );
          return { messages: copy };
        });
      });
    });
  };

  ////TOOLBAR_COMPONENT: REMOVE LABELS
  onRemoveLabelSelectedMessages = label => {
    this.state.messages.forEach(element => {
      let item_id = element.id;
      let item_label = element.labels;

      if (element.selected && item_label.includes(label)) {
        let label_index = item_label.indexOf(label);
        item_label.splice(label_index, 1);
      }

      updateMessage(item_id, {
        labels: item_label.toString()
      }).then(updatedMessage => {
        this.setState(currentState => {
          let copy = [...currentState.messages];
          copy = copy.map(
            element => (element.id === item_id ? updatedMessage : element)
          );
          return { messages: copy };
        });
      });
    });
  };

  ////TOOLBAR_COMPONENT: MARK ALL READ
  onMarkAsReadSelectedMessages = () => {
    this.state.messages.forEach(element => {
      let item_id = element.id;
      let item_read = element.read;
      let selected = element.selected;

      // if (element.selected) {
      //   return (item_read = true); //returning unedefined
      // }

      updateMessage(item_id, { read: true }).then(updatedMessage => {
        this.setState(currentState => {
          let copy = [...currentState.messages];
          copy = copy.map(
            element => (element.id === item_id ? updatedMessage : element)
          );
          return { messages: copy };
        });
      });
    });
  };

  ////TOOLBAR_COMPONENT: MARK ALL UNREAD
  onMarkAsUnreadSelectedMessages = () => {
    this.state.messages.forEach(element => {
      let item_id = element.id;
      let item_read = element.read;
      let selected = element.selected;

      updateMessage(item_id, { read: false }).then(updatedMessage => {
        this.setState(currentState => {
          let copy = [...currentState.messages];
          copy = copy.map(
            element => (element.id === item_id ? updatedMessage : element)
          );
          return { messages: copy };
        });
      });
    });
  };

  onSelectAllMessages = () => {
    this.state.messages.forEach(element => {
      let item_id = element.id;

      updateMessage(item_id, { selected: true }).then(updatedMessage => {
        this.setState(currentState => {
          let copy = [...currentState.messages];
          console.log('testss', this.state.selectedMessageCount);
          copy = copy.map(
            element => (element.id === item_id ? updatedMessage : element)
          );
          return { messages: copy, selectedMessageCount: 8 };
        });
      });
    });
  };

  onDeselectAllMessages = () => {
    this.state.messages.forEach(element => {
      let item_id = element.id;

      updateMessage(item_id, { selected: false }).then(updatedMessage => {
        this.setState(currentState => {
          let copy = [...currentState.messages];
          copy = copy.map(
            element => (element.id === item_id ? updatedMessage : element)
          );
          return { messages: copy, selectedMessageCount: 0 };
        });
      });
    });
  };

  //OPEN COMPOSE FORM
  onOpenComposeForm = () => {
    //this.setState({ showComposeForm: true });
    console.log('click');
    //
  };
  // //OPEN COMPOSE FORM
  // let showComposeForm = false;
  // let onOpenComposeForm = function() {
  //   showComposeForm = true;
  //   render();
  // };
  //
  // //CLOSE COMPOSE FORM
  // let handleClickCancel = function() {
  //   showComposeForm = false;
  //   render();
  // };

  render() {
    return (
      <InboxPage
        messages={this.state.messages}
        selectedMessageIds={this.state.selectedMessageIds}
        selectedMessageCount={this.state.selectedMessageCount}
        onOpenComposeForm={this.state.onOpenComposeForm} //
        onToggleComposeForm={this._toggleComposeForm}
        onSelectAllMessages={this.onSelectAllMessages} //
        onDeselectAllMessages={this.onDeselectAllMessages}
        onMarkAsReadSelectedMessages={this.onMarkAsReadSelectedMessages} //done
        onMarkAsUnreadSelectedMessages={this.onMarkAsUnreadSelectedMessages} //done
        onApplyLabelSelectedMessages={this.onApplyLabelSelectedMessages} //done
        onRemoveLabelSelectedMessages={this.onRemoveLabelSelectedMessages} //done
        onDeleteSelectedMessages={this._deleteSelectedMessages}
        onMarkAsReadMessage={this.onMarkAsReadMessage} //done
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
