import React, { Component } from 'react';
import InboxPage from './component/InboxPage';
import getMessages from './api/getMessages.js';
import updateMessage from './api/updateMessage.js';
import createMessage from './api/createMessage.js';
import deleteMessage from './api/deleteMessage.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      selectedMessageIds: [],
      showComposeForm: false,
      selectedMessageCount: 0,
      showApiError: false
    };

    this.props.store.subscribe(() => {
      this.setState(this.props.store.getState());
    });
  }

  //***FETCH JSON DATA***//
  componentDidMount() {
    getMessages().then(messages => {
      this.props.store.dispatch({
        type: 'GET_MESSAGES',
        messages: messages,
        selectedMessageCount: messages.filter(message => message.read !== true)
          .length
      });
    });
  }

  //*MESSSAGE_COMPONENT: onStarMessage*//
  onStarMessage = itemId => {
    updateMessage(itemId, { starred: true }).then(updatedMessage => {
      this.props.store.dispatch({
        type: 'UPDATE_MESSAGE',
        id: itemId,
        message: updatedMessage
      });
    });
  };

  //*MESSSAGE_COMPONENT: onUnstarMessage*//
  onUnstarMessage = itemId => {
    updateMessage(itemId, { starred: false }).then(updatedMessage => {
      this.props.store.dispatch({
        type: 'UPDATE_MESSAGE',
        id: itemId,
        message: updatedMessage
      });
    });
  };

  //*MESSSAGE_COMPONENT: onDeselectMessage*//
  onDeselectMessage = itemId => {
    this.props.store.dispatch({ type: 'DESELECT_MESSAGE', id: itemId });
  };

  //*MESSAGES_COMPONENT: onSelectMessage*//
  onSelectMessage = itemId => {
    this.props.store.dispatch({ type: 'SELECT_MESSAGE', id: itemId });
  };

  //*MESSSAGE_COMPONENT: onMarkAsReadMessage*//
  onMarkAsReadMessage = itemId => {
    updateMessage(itemId, { read: true }).then(updatedMessage => {
      this.props.store.dispatch({
        type: 'UPDATE_MESSAGE',
        change: 'UPDATING',
        id: itemId,
        message: updatedMessage
      });
    });
  };

  //*MESSSAGE_COMPONENT: onMarkAsUnReadMessage*//
  onMarkAsUnReadMessage = itemId => {
    updateMessage(itemId, { read: false }).then(updatedMessage => {
      this.props.store.dispatch({
        type: 'UPDATE_MESSAGE',
        id: itemId,
        message: updatedMessage
      });
    });
  };

  //*TOOLBAR_COMPONENT: onApplyLabelSelectedMessages*//
  onApplyLabelSelectedMessages = label => {
    this.state.selectedMessageIds.forEach(id =>
      this.onApplyLabelMessage(label, id)
    );
  };

  onApplyLabelMessage = (label, itemId) => {
    let newMessage = this.state.messages.find(message => message.id === itemId);
    newMessage.labels
      ? newMessage.labels.push(label)
      : (newMessage.labels = [label]);
    updateMessage(itemId, {
      labels: newMessage.labels.join(',')
    }).then(message => {
      this.props.store.dispatch({
        type: 'UPDATE_MESSAGE',
        id: itemId,
        message: message
      });
    });
  };

  //*TOOLBAR_COMPONENT: onRemoveLabelMessage*//
  onRemoveLabelMessage = (label, itemId) => {
    let newMessage = this.state.messages.find(message => message.id === itemId);
    if (newMessage.labels.includes(label)) {
      newMessage.labels.splice(newMessage.labels.indexOf(label), 1);
    }
    updateMessage(itemId, {
      labels: newMessage.labels.join(',')
    }).then(message => {
      this.props.store.dispatch({
        type: 'UPDATE_MESSAGE',
        id: itemId,
        message: message
      });
    });
  };

  onRemoveLabelSelectedMessages = label => {
    this.state.selectedMessageIds.forEach(id =>
      this.onRemoveLabelMessage(label, id)
    );
  };

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
    this.state.messages.forEach(getmessage => {
      if (!this.state.selectedMessageIds.includes(getmessage.id)) {
        this.props.store.dispatch({
          type: 'SELECT_MESSAGE',
          id: getmessage.id
        });
      }
    });
  };

  //*TOOLBAR_COMPONENT: onDeselectAllMessages*//
  onDeselectAllMessages = () => {
    this.state.messages.forEach(getmessage =>
      this.props.store.dispatch({ type: 'DESELECT_MESSAGE', id: getmessage.id })
    );
  };

  //*COMPOSE_FORM: onOpenComposeForm*//
  onOpenComposeForm = () => {
    this.props.store.dispatch({ type: 'FORM_SHOW' });
  };

  //*COMPOSE_FORM: onComposeFormCancel*//
  onComposeFormCancel = () => {
    this.props.store.dispatch({ type: 'FORM_CANCEL' });
  };

  //*ComposeForm: onComposeFormSubmit*//
  onComposeFormSubmit = (subject, body) => {
    createMessage(subject, body).then(message => {
      this.props.store.dispatch({ type: 'CREATE_MESSAGE', message: message });
    });
  };

  //*TOOLBAR_COMPONENT: onDeleteSelectedMessages*//
  onDeleteSelectedMessages = () => {
    this.state.selectedMessageIds.forEach(id => this.onDeleteMessage(id));
  };

  onDeleteMessage = itemId => {
    deleteMessage(itemId).then(() => {
      this.props.store.dispatch({ type: 'DELETE_MESSAGE', id: itemId });
    });
  };

  render() {
    return (
      <InboxPage
        messages={this.state.messages} //done
        selectedMessageIds={this.state.selectedMessageIds} //done
        selectedMessageCount={this.state.selectedMessageCount} //done
        onToggleComposeForm={this.toggleComposeForm} //
        onSelectAllMessages={this.onSelectAllMessages} //done
        onDeselectAllMessages={this.onDeselectAllMessages}
        onMarkAsReadSelectedMessages={this.onMarkAsReadSelectedMessages} //done
        onMarkAsUnreadSelectedMessages={this.onMarkAsUnreadSelectedMessages} //done
        onApplyLabelSelectedMessages={this.onApplyLabelSelectedMessages} //done
        onRemoveLabelSelectedMessages={this.onRemoveLabelSelectedMessages} //done
        onDeleteSelectedMessages={this.onDeleteSelectedMessages} //done
        onMarkAsReadMessage={this.onMarkAsReadMessage}
        onSelectMessage={this.onSelectMessage} //done
        onDeselectMessage={this.onDeselectMessage} //done
        onStarMessage={this.onStarMessage} //done
        onUnstarMessage={this.onUnstarMessage} //done
        onOpenComposeForm={this.onOpenComposeForm} //done
        onComposeFormSubmit={this.onComposeFormSubmit} //done
        onComposeFormCancel={this.onComposeFormCancel} //done
        showComposeForm={this.state.showComposeForm} //done
      />
    );
  }
}
