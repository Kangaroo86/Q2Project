export default function createMessage(message) {
  console.log('message', message);
  return fetch('https://api.airtable.com/v0/app9W2SSELvaPePpI/messages/', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer keyrIMJRMlgyfWv0r',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fields: message
    })
  })
    .then(response => response.json())
    .then(record => {
      return {
        id: record.id,
        body: record.fields.body,
        subject: record.fields.subject,
        read: record.fields.read,
        starred: record.fields.starred,
        labels: record.fields.labels ? record.fields.labels.split(',') : ''
      };
    })
    .then(message => {
      return message;
    });
}
