import deleteMessage from '../../api/deleteMessage';

export default function deleteMessageProcess(itemId) {
  return (dispatch, getState) => {
    return deleteMessage(itemId).then(() => {
      dispatch({
        type: 'DELETE_MESSAGE',
        id: itemId
      });
    });
  };
}
