import React, {Component} from 'react';
import Counter from './components/Counter';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count = 0;
    }
  };
  this.props.store.subscribe(() => {
    this.setState(this.props.store.getState());
  });
}


render() {
  return (
    <div className = 'App'>
      <Counter count={this.state.count}
        onIncrement={this._increment}
        onDecrement={this._decrement}
      />
    </div>
  );
}




_increment = () => {

  this props.store.dispatch({
    type: 'INCREMENT'
  });
};

_decrement = () => {

  this props.store.dispatch({
    type: 'DECREMENT'
  });
};
