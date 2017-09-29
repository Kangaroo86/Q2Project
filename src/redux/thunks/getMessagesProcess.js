import getMessages from '../../api/getMessages';

export default function getMessagesProcess() {
  return (dispatch, getState) => {
    return getMessages().then(messages => {
      dispatch({
        type: 'GET_MESSAGES',
        messages: messages,
        selectedMessageCount: messages.filter(message => message.read !== true)
          .length
      });
      return messages;
    });
  };
}
