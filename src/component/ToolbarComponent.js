import React from 'react';

export default function ToolbarComponent({
  messages,
  selectedMessageCount,
  selectedMessageIds,
  onOpenComposeForm,
  onSelectAllMessages,
  onDeselectAllMessages,
  onMarkAsReadSelectedMessages,
  onMarkAsUnreadSelectedMessages,
  onApplyLabelSelectedMessages,
  onRemoveLabelSelectedMessages,
  onDeleteSelectedMessages
}) {
  let status = 'fa fa-square-o';

  if (messages === null) {
    return null;
  }
  if (selectedMessageCount === messages.length) {
    status = 'fa fa-check-square-o'; //all
  } else if (selectedMessageCount !== 0) {
    status = 'fa fa-minus-square-o'; // some
  }

  //onOpenComposeForm
  function handle_onOpenComposeForm(event) {
    event.preventDefault();
    onOpenComposeForm();
  }

  function handle_onSelectAllMessages(event) {
    if (selectedMessageCount === 0) {
      onSelectAllMessages();
    } else {
      onDeselectAllMessages();
    }
  }

  //MARK AS READ BUTTON
  function handle_onMarkAsReadSelectedMessages(event) {
    event.preventDefault();
    onMarkAsReadSelectedMessages(selectedMessageIds);
  }

  //MARK AS UNREAD BUTTON
  function handle_onMarkAsUnreadSelectedMessages(event) {
    event.preventDefault();
    onMarkAsUnreadSelectedMessages(selectedMessageIds);
  }

  //APPLY LABELS
  function handle_onApplyLabelSelectedMessages(event) {
    event.preventDefault();
    onApplyLabelSelectedMessages(
      event.target.value,
      selectedMessageIds,
      messages
    );
  }

  //REMOVE LABELS
  function handle_onRemoveLabelSelectedMessages(event) {
    event.preventDefault();
    onRemoveLabelSelectedMessages(
      event.target.value,
      selectedMessageIds,
      messages
    );
  }

  //DELETE MESSAGES
  function handle_onDeleteSelectedMessages() {
    onDeleteSelectedMessages(selectedMessageIds);
  }

  return (
    <div className="row toolbar">
      <div className="col-md-12">
        <p className="pull-right">
          <span className="badge badge">2</span>
          unread messages
        </p>

        <a className="btn btn-danger" onClick={handle_onOpenComposeForm}>
          <i className="fa fa-plus" />
        </a>

        <button
          className="btn btn-default"
          onClick={handle_onSelectAllMessages}>
          <i className={status} />
        </button>

        <button
          className="btn btn-default"
          onClick={handle_onMarkAsReadSelectedMessages}>
          Mark As Read
        </button>
        <button
          className="btn btn-default"
          onClick={handle_onMarkAsUnreadSelectedMessages}>
          Mark As Unread
        </button>

        <select
          className="form-control label-select"
          onChange={handle_onApplyLabelSelectedMessages}>
          <option>Apply label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <select
          className="form-control label-select"
          onChange={handle_onRemoveLabelSelectedMessages}>
          <option>Remove label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <button className="btn btn-default">
          <i
            className="fa fa-trash-o"
            onClick={handle_onDeleteSelectedMessages}
          />
        </button>
      </div>
    </div>
  );
  //
}
