import React from 'react';

export default function ComposeFormComponent({
  onComposeFormSubmit,
  onComposeFormCancel
}) {
  function handle_click_submit(event) {
    event.preventDefault();
    const $form = event.target;
    const subject = $form.subject.value;
    const body = $form.body.value;
    onComposeFormSubmit(subject, body);
  }

  function handle_click_cancel(event) {
    event.preventDefault();
    onComposeFormCancel();
  }

  return (
    <form
      className="form-horizontal well"
      onSubmit={handle_click_submit}
      onReset={handle_click_cancel}>
      <div className="form-group">
        <div className="col-sm-8 col-sm-offset-2">
          <h4>Compose Message</h4>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="subject" className="col-sm-2 control-label">
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
        <label htmlFor="body" className="col-sm-2 control-label">
          Body
        </label>
        <div className="col-sm-8">
          <textarea name="body" id="body" className="form-control" />
        </div>
      </div>
      <div className="form-group">
        <div className="col-sm-8 col-sm-offset-2">
          <input type="submit" value="Send" className="btn btn-primary" />
          <input type="reset" value="Cancel" className="btn btn-default" />
        </div>
      </div>
    </form>
  );
}
