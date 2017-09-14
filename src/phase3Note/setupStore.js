import { createStore } from 'redux'; //npm install redux
import rootReducer from './reducers/rootReducer';

export default function() {
  return createStore(rootReducer);
}
