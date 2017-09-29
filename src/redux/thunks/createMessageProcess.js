import createMessage from '../../api/createMessage';

export default function createMessageProcess(subject, body) {
  return (dispatch, getState) => {
    return createMessage(subject, body).then(message => {
      dispatch({
        type: 'CREATE_MESSAGE',
        message: message
      });
      return message;
    });
  };
}
