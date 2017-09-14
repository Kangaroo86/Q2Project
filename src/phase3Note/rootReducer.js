export default function rootReducer(currentState = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: currentState.count + 1 };
    case 'DECREMENT':
      return { count: currentState.count - 1 };
    default:
      return currentState;
  }
  return currentState;
  //
}
