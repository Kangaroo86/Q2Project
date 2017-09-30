import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import InboxPage from '../../component/InboxPage';
import createMessageProcess from '../thunks/createMessageProcess';
import deleteMessageProcess from '../thunks/deleteMessageProcess';
import getMessagesProcess from '../thunks/getMessagesProcess';
import updateMessageProcess from '../thunks/updateMessageProcess';

function mapStateToProps(state, ownProps) {
  return {
    messages: state.messages,
    selectedMessageIds: state.selectedMessageIds,
    showComposeForm: state.showComposeForm,
    selectedMessageCount: state.selectedMessageCount,
    showApiError: state.showApiError
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMount: () => {
      dispatch(getMessagesProcess());
    },
    onStarMessage: itemId => {
      dispatch(updateMessageProcess(itemId, { starred: true }));
    },
    onUnstarMessage: itemId => {
      dispatch(updateMessageProcess(itemId, { starred: false }));
    },
    onDeselectMessage: itemId => {
      dispatch({ type: 'DESELECT_MESSAGE', id: itemId });
    },
    onSelectMessage: itemId => {
      dispatch({ type: 'SELECT_MESSAGE', id: itemId });
    },
    onMarkAsReadMessage: itemId => {
      dispatch(updateMessageProcess(itemId, { read: true }));
    },
    onApplyLabelSelectedMessages: (label, selectedMessageIds, messages) => {
      selectedMessageIds.forEach(id => {
        if (
          !messages.find(message => message.id === id).labels.includes(label)
        ) {
          let newMessage = messages.find(message => message.id === id);
          newMessage.labels
            ? newMessage.labels.push(label)
            : (newMessage.labels = [label]);
          dispatch(
            updateMessageProcess(id, { labels: newMessage.labels.join(',') })
          );
        }
      });
    },
    onRemoveLabelSelectedMessages: (label, selectedMessageIds, messages) => {
      selectedMessageIds.forEach(id => {
        if (
          messages.find(message => message.id === id).labels.includes(label)
        ) {
          let newMessage = messages.find(message => message.id === id);
          if (newMessage.labels.includes(label)) {
            newMessage.labels.splice(newMessage.labels.indexOf(label), 1);
          }
          dispatch(
            updateMessageProcess(id, { labels: newMessage.labels.join(',') })
          );
        }
      });
    },
    onMarkAsReadSelectedMessages: selectedMessageIds => {
      selectedMessageIds.forEach(id =>
        dispatch(updateMessageProcess(id, { read: true }))
      );
    },
    onMarkAsUnreadSelectedMessages: selectedMessageIds => {
      selectedMessageIds.forEach(id =>
        dispatch(updateMessageProcess(id, { read: false }))
      );
    },
    onSelectAllMessages: messages => {
      dispatch({ type: 'SELECT_ALL_MESSAGES', messages: messages });
    },
    onDeselectAllMessages: messages => {
      dispatch({ type: 'DESELECT_MESSAGE', messages: messages });
    },
    onOpenComposeForm: () => {
      dispatch({ type: 'FORM_SHOW' });
    },
    onComposeFormCancel: () => {
      dispatch({ type: 'FORM_CANCEL' });
    },
    onComposeFormSubmit: (subject, body) => {
      dispatch(createMessageProcess(subject, body));
    },
    onDeleteSelectedMessages: selectedMessageIds => {
      selectedMessageIds.forEach(id => {
        dispatch(deleteMessageProcess(id));
      });
    }
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
  }
});

export default compose(connectToStore, onDidMount)(InboxPage);
