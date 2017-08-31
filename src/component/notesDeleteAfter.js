//index.js



//App.js


/////////FOR Container//////////////////


//short way of creating state, not official with ES6
class App extends Component {
  state {
    menuItems:data.menuItems.slice(0);
    orderItems:[];
    customerInfor: null;
    onAdditem={this._addItem}
    
    //
  };

}



this.setState(prevState => {
  //old approach//
  // const newOderItems = prevState.roderItems.slice(0);
  // newOderItems.push(prevState.menuItems.find(item => item.id === itemId));

  //using spread operator//
  return {
    orderItems: [...prevState.orderitems, prevState.menuItems.find(item => item.id === itemId)];
  };
})
