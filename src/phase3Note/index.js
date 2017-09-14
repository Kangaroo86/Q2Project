import React from 'react';
import ReactDOM from 'react-dom'
import


const store = setupStore();



store.subscribe(() => {
  console.log(store.getState(), '<<<<<');
})


store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });


ReactDOM.render(<App />, document.getElementById('root'));
