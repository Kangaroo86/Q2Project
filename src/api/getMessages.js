export default function getMenuItems() {
  return fetch(`https://api.airtable.com/v0/app9W2SSELvaPePpI/messages/`, {
    headers: {
      Authorization: `Bearer keyrIMJRMlgyfWv0r`
    }
  })
    .then(response => response.json())
    .then(data =>
      data.records.map(record => ({
        id: record.id,
        body: record.fields.body,
        subject: record.fields.subject,
        read: record.fields.read,
        starred: record.fields.starred,
        selected: record.fields.selected,
        labels: record.fields.labels ? record.fields.labels.split(',') : ''
      }))
    )
    .then(messages => {
      return messages;
      //console.log(messages, '----------------');
    });
}
