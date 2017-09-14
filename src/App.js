import React, { Component } from 'react';
import InboxPage from './component/InboxPage';
import getMessages from './api/getMessages.js';
import updateMessage from './api/updateMessage.js';
import createMessage from './api/createMessage.js';
import deleteMessage from './api/deleteMessage.js';

export default class App extends Component {
  state = {
    messages: [],
    selectedMessageIds: [],
    showComposeForm: false,
    selectedMessageCount: 0,
    showApiError: false
  };

  //***FETCH JSON DATA***//
  componentDidMount() {
    getMessages().then(data => {
      //this.setState({ messages: data });
      this.setState({ messages: [...data] });
      //console.log(this.state.messages, 'messages-------');
    });
  }

  //*MESSSAGE_COMPONENT: onStarMessage*//
  onStarMessage = itemId => {
    updateMessage(itemId, { starred: true }).then(updatedMessage => {
      this.setState(prevState => {
        //let copy = prevState.messages.slice(0) //this is equivalent to spread operators
        let copy = [...prevState.messages];
        copy.find(item => item.id === itemId).starred = true;
        return { messages: copy };
      });
    });
  };

  //*MESSSAGE_COMPONENT: onUnstarMessage*//
  onUnstarMessage = itemId => {
    updateMessage(itemId, { starred: false }).then(updatedMessage => {
      this.setState(prevState => {
        let copy = [...prevState.messages];
        copy.find(item => item.id === itemId).starred = false;
        return { messages: copy };
      });
    });
  };

  //*MESSSAGE_COMPONENT: onDeselectMessage*//
  onDeselectMessage = itemId => {
    let found = this.state.selectedMessageIds.indexOf(itemId);
    this.setState(currentState => {
      const newSelectedMessageIds = currentState.selectedMessageIds;
      newSelectedMessageIds.splice(found, 1);
      return { selectedMessagesIds: newSelectedMessageIds };
    });
  };

  //*MESSAGES_COMPONENT: onSelectMessage*//
  onSelectMessage = itemId => {
    //console.log('itemId', itemId);
    this.setState(prevState => {
      const newSelectedMessageIds = [...prevState.selectedMessageIds];
      newSelectedMessageIds.push(itemId);
      return { selectedMessageIds: newSelectedMessageIds };
    });
  };

  //*MESSSAGE_COMPONENT: onMarkAsReadMessage*//
  onMarkAsReadMessage = itemId => {
    updateMessage(itemId, { read: true }).then(updatedMessage => {
      this.setState(prevState => {
        let copy = [...prevState.messages];
        copy.find(item => item.id === itemId).read = true;
        return { messages: copy };
      });
    });
  };

  //*MESSSAGE_COMPONENT: onMarkAsUnReadMessage*//
  onMarkAsUnReadMessage = itemId => {
    updateMessage(itemId, { read: false }).then(updatedMessage => {
      this.setState(prevState => {
        let copy = [...prevState.messages];
        copy.find(item => item.id === itemId).read = false;
        return { messages: copy };
      });
    });
  };

  //*TOOLBAR_COMPONENT: onApplyLabelSelectedMessages*//
  onApplyLabelSelectedMessages = label => {
    let results = [];
    this.state.selectedMessageIds.forEach(id => {
      results.push(
        this.state.messages.find(messageResults => {
          return messageResults.id === id;
        })
      );
    });

    results.forEach(message => {
      const newObj = message.labels.concat(label);
      const message_id = message.id;

      updateMessage(message_id, {
        labels: newObj.toString()
      }).then(updatedMessage => {
        this.setState(currentState => {
          let copy = [...currentState.messages];
          copy = copy.map(
            element => (element.id === message_id ? updatedMessage : element)
          );
          return { messages: copy };
        });
      });
    });
  };

  //*TOOLBAR_COMPONENT: onRemoveLabelSelectedMessages*//
  onRemoveLabelSelectedMessages = label => {
    let result = [];
    this.state.selectedMessageIds.forEach(id => {
      result.push(
        this.state.messages.find(messages => {
          return messages.id === id;
        })
      );

      let item_labels = result[0].labels;
      let item_id = result[0].id;

      if (item_id && item_labels.includes(label)) {
        let label_index = item_labels.indexOf(label);
        item_labels.splice(label_index, 1);
      }

      updateMessage(item_id, {
        labels: item_labels.toString()
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

  ///alternative onRemoveLabelSelectedMessages
  // this.setState(currentState => {
  //   const newMessages = currentState.messages.map(message => {
  //     if (message.id === this.state.selectedMessageIds) {
  //       return message.labels;
  //     } else {
  //       return message;
  //     }
  //     //if message.id is in this.state.selectedMessageIds,
  //     //then return a new message which is the same as message,
  //     //just with label removed
  //     //else return message
  //   });
  //   return { messages: newMessages };
  // });

  //*TOOLBAR_COMPONENT: onMarkAsReadSelectedMessages*//
  onMarkAsReadSelectedMessages = () => {
    this.state.selectedMessageIds.forEach(id => this.onMarkAsReadMessage(id));
  };

  //*TOOLBAR_COMPONENT: onMarkAsUnreadSelectedMessages*//
  onMarkAsUnreadSelectedMessages = () => {
    this.state.selectedMessageIds.forEach(id => this.onMarkAsUnReadMessage(id));
  };

  //*TOOLBAR_COMPONENT: onSelectAllMessages*//
  onSelectAllMessages = () => {
    this.setState(prevState => {
      let newArr = prevState.messages.map(message => message.id);
      return {
        selectedMessageIds: newArr,
        selectedMessageCount: newArr.length
      };
    });
  };

  //*TOOLBAR_COMPONENT: onDeselectAllMessages*//
  onDeselectAllMessages = () => {
    this.setState({
      selectedMessageIds: [],
      selectedMessageCount: 0
    });
  };

  //*COMPOSE_FORM: onOpenComposeForm*//
  onOpenComposeForm = () => {
    this.setState(currentState => {
      let copy = [...currentState.showComposeForm];
      copy = true;
      return { showComposeForm: copy };
    });
  };

  //*COMPOSE_FORM: onComposeFormCancel*//
  onComposeFormCancel = () => {
    this.setState(currentState => {
      let copy = [...currentState.showComposeForm];
      copy = false;
      return { showComposeForm: copy };
    });
  };

  //*TOOLBAR_COMPONENT: onDeleteSelectedMessages*//
  onDeleteSelectedMessages = () => {
    this.state.selectedMessageIds.forEach(message => {
      let itemId = message;

      deleteMessage(itemId).then(data => {
        this.setState(prevState => {
          prevState.messages.forEach((message, index) => {
            if (message.id === data.id) {
              prevState.messages.splice(index, 1);
            }
            return message;
          });
        });
      });
    });
  };

  //*ComposeForm: onComposeFormSubmit*//
  onComposeFormSubmit = ({ subject, body }) => {
    let newMessage = {
      subject: subject,
      body: body,
      read: false,
      starred: false,
      labels: ''
    };

    return createMessage(newMessage).then(updatedMessage => {
      this.setState(currentState => {
        let newMessages = [...currentState.messages];
        newMessages.unshift(updatedMessage);
        return {
          messages: newMessages,
          showComposeForm: false
        };
      });
    });
  };

  render() {
    return (
      <InboxPage
        messages={this.state.messages} //done
        selectedMessageIds={this.state.selectedMessageIds}
        selectedMessageCount={this.state.selectedMessageCount}
        onToggleComposeForm={this.toggleComposeForm} //
        onSelectAllMessages={this.onSelectAllMessages} //
        onDeselectAllMessages={this.onDeselectAllMessages}
        onMarkAsReadSelectedMessages={this.onMarkAsReadSelectedMessages} //done
        onMarkAsUnreadSelectedMessages={this.onMarkAsUnreadSelectedMessages} //done
        onApplyLabelSelectedMessages={this.onApplyLabelSelectedMessages} //done
        onRemoveLabelSelectedMessages={this.onRemoveLabelSelectedMessages} //done
        onDeleteSelectedMessages={this.onDeleteSelectedMessages} //
        onMarkAsReadMessage={this.onMarkAsReadMessage} //done
        onSelectMessage={this.onSelectMessage} //done
        onDeselectMessage={this.onDeselectMessage} //done
        onStarMessage={this.onStarMessage} //done
        onUnstarMessage={this.onUnstarMessage} //done
        onOpenComposeForm={this.onOpenComposeForm} //done
        onComposeFormSubmit={this.onComposeFormSubmit}
        onComposeFormCancel={this.onComposeFormCancel} //done
        showComposeForm={this.state.showComposeForm} //done
      />
    );
  }
}
