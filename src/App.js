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
      console.log('element result: ----', element);
      //console.log('item id result: ----', item_id);
      //console.log('item read result: ----', item_read);

      if (element.selected) {
        console.log('boolean result:-----', element.selected);
        return (item_read = false); //returning unedefined
      }
      //console.log('id ---', element.subject);
      //console.log('item read :-----', item_read);
      updateMessage(item_id, { read: item_read }).then(updatedMessage => {
        //console.log('updated----', updatedMessage);
        this.setState(currentState => {
          let copy = [...currentState.messages];
          copy = copy.map(
            element => (element.id === item_id ? updatedMessage : element)
          );
          return { messages: copy };
        });
        // console.log(updatedMessage);
        //
      });
    });
  };
  //

  // //MARK ALL READ
  // let onMarkAsReadSelectedMessages = function() {
  //   seedData.forEach(element => (element.read = true));
  //   render();
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
        onMarkAsReadSelectedMessages={this.onMarkAsReadSelectedMessages} //
        onMarkAsUnreadSelectedMessages={this._markAsUnreadSelectedMessages}
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
