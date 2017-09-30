export default function rootReducer(
  currentState = {
    messages: null, //used to be []
    selectedMessageIds: [],
    showComposeForm: false,
    selectedMessageCount: 0,
    showApiError: false
  },
  action
) {
  switch (action.type) {
    case 'GET_MESSAGES':
      return {
        ...currentState,
        messages: action.messages,
        selectedMessageCount: action.selectedMessageCount
      };

    case 'SELECT_MESSAGE':
      const newStateSelect = currentState.selectedMessageIds.slice();
      newStateSelect.push(action.id);
      return {
        ...currentState,
        selectedMessageIds: newStateSelect
      };

    case 'DESELECT_MESSAGE':
      const newStateDeselect = currentState.selectedMessageIds.slice();
      newStateDeselect.splice(
        currentState.selectedMessageIds.indexOf(action.id),
        1
      );
      return {
        ...currentState,
        selectedMessageIds: newStateDeselect
      };

    case 'SELECT_ALL_MESSAGES':
      let newArr = currentState.messages.map(message => message.id);

      return {
        ...currentState,
        selectedMessageIds: newArr,
        selectedMessageCount: newArr.length
      };

    case 'DESELECT_ALL_MESSAGES':
      return {
        ...currentState,
        selectedMessageIds: [],
        selectedMessageCount: 0
      };

    case 'COMPOSE':
      return { ...currentState, showComposeForm: action.showComposeForm };

    case 'FORM_CANCEL':
      return { ...currentState, showComposeForm: false };

    case 'FORM_SHOW':
      return {
        ...currentState,
        showComposeForm: !currentState.showComposeForm
      };

    case 'CREATE_MESSAGE':
      const newArray = currentState.messages.slice();
      newArray.push(action.message);
      return {
        ...currentState,
        messages: newArray,
        selectedMessageCount: newArray.filter(message => message.read !== true)
          .length
      };

    case 'DELETE_MESSAGE':
      const remainingMessages = currentState.messages.slice();
      return {
        ...currentState,
        messages: remainingMessages,
        selectedMessageIds: [],
        selectedMessageCount: currentState.messages.filter(
          message => message.read !== true
        ).length
      };

    case 'UPDATE_MESSAGE':
      let newMessages = currentState.messages.slice();
      let updatedMessages = newMessages.map(message => {
        return message.id === action.id ? action.message : message;
      });
      return {
        ...currentState,
        messages: updatedMessages
      };

    default:
      return currentState;
  }
}
