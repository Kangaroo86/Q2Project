function array.find(searchFunction)
{
  for (int i = 0; i < array.length; i++)
  {
    if (searchFunction(array[i]) == true)
      return array[i];
  }

  return undefined
}



onApplyLabelSelectedMessages = label => {
  this.state.messages.forEach(message => {
    let itemId = message.id;
    let newLabels = [message.labels];
    //let newLabels = [];
    if (!newLabels.includes(label)) {
      newLabels.push(label);
    }
    updateMessage(itemId, { labels: newLabels.toString() })
      .then(updatedMessage => {
        this.setState(prevState => {
          let newMessages = prevState.messages;
          newMessages = newMessages.map(
            message => (message.id === itemId ? updatedMessage : message)
          );

          return { messages: newMessages };
        });
      })
      .catch(error => {});
  });
};
