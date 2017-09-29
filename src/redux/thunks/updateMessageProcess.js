import updateMessage from '../../api/updateMessage';

export default function updateMessageProcess(itemId, change) {
  return (dispatch, getState) => {
    return updateMessage(itemId, change).then(updatedMessage => {
      dispatch({
        type: 'UPDATE_MESSAGE',
        id: itemId,
        message: updatedMessage
      });
      return updatedMessage;
    });
  };
}
