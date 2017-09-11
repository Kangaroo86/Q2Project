import React from 'react';

export default function ComposeFormComponent({
  onComposeFormCancel,
  handle_onSubmit
}) {
  let handle_onComposeFormCancel = function(event) {
    event.preventDefault();
    onComposeFormCancel();
    //
  };

  let onSubmit = function(event) {
    console.log('clicked', event.target.subject.value);
    event.preventDefault();
    handle_onSubmit(event.target);
  };

  return (
    <form className="form-horizontal well" onSubmit={onSubmit}>
      <div className="form-group">
        <div className="col-sm-8 col-sm-offset-2">
          <h4>Compose Message</h4>
        </div>
      </div>
      <div className="form-group">
        <label for="subject" className="col-sm-2 control-label">
          Subject
        </label>
        <div className="col-sm-8">
          <input
            type="text"
            className="form-control"
            id="subject"
            placeholder="Enter a subject"
            name="subject"
          />
        </div>
      </div>
      <div className="form-group">
        <label for="body" className="col-sm-2 control-label">
          Body
        </label>
        <div className="col-sm-8">
          <textarea name="body" id="body" className="form-control" />
        </div>
      </div>
      <div className="form-group">
        <div className="col-sm-8 col-sm-offset-2">
          <button type="submit" value="Send" className="btn btn-primary">
            Submit
          </button>
        </div>
        <input
          type="reset"
          value="Cancel"
          className="btn btn-default"
          onClick={handle_onComposeFormCancel}
        />
      </div>
    </form>
  );
}
