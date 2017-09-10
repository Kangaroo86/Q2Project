import React from 'react';
var classNames = require('classnames');

export default function ToolbarComponent({
  messages,
  selectedMessageCount,
  onOpenComposeForm,
  onSelectAllMessages,
  onDeselectAllMessages,
  onMarkAsReadSelectedMessages,
  onMarkAsUnreadSelectedMessages,
  onApplyLabelSelectedMessages,
  onRemoveLabelSelectedMessages,
  onDeleteSelectedMessages
}) {
  let classes;
  let select_allMessage;

  //COMPOSE BUTTON
  function handle_onOpenComposeForm(event) {
    event.preventDefault();
    onOpenComposeForm();
  }

  //SELECT ALL MESSAGE BUTTON
  function handle_onSelectAllMessages(event) {
    event.preventDefault();
    onSelectAllMessages();
  }

  //UNSELECT ALL MESSAGE BUTTON
  function handle_onDeselectAllMessages(event) {
    event.preventDefault();
    onDeselectAllMessages();
  }

  //MARK AS READ BUTTON
  function handle_onMarkAsReadSelectedMessages(event) {
    event.preventDefault();
    onMarkAsReadSelectedMessages();
  }

  //MARK AS UNREAD BUTTON
  function handle_onMarkAsUnreadSelectedMessages(event) {
    event.preventDefault();
    onMarkAsUnreadSelectedMessages();
  }

  //APPLY LABELS
  function handle_onApplyLabelSelectedMessages(event) {
    event.preventDefault();
    onApplyLabelSelectedMessages(event.target.value);
  }

  //REMOVE LABELS
  function handle_onRemoveLabelSelectedMessages(event) {
    event.preventDefault();
    onRemoveLabelSelectedMessages(event.target.value);
  }

  //DELETE MESSAGES
  function handle_onDeleteSelectedMessages(event) {
    event.preventDefault();
    onDeleteSelectedMessages();
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
          {/* onClick={handle_onDeselectAllMessages}> */}
          <i className="fa fa-check-square-o" />
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
