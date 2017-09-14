onApplyLabelSelectedMessages = label => {
  this.state.messages.forEach(message => {
    let itemId = message.id;
    let labels = [message.labels];

    if (!labels.includes(label)) {
      labels.push(label);
    }

    updateMessage(itemId, {
      labels: labels.toString()
    }).then(updatedMessage => {
      this.setState(prevState => {
        let newMessages = prevState.messages;

        newMessages = newMessages.map(
          message => (message.id === itemId ? updatedMessage : message)
        );
        return { messages: newMessages };
      });
    });
  });
};
