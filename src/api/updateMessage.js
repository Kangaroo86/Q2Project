export default function updateMessage(itemId, change) {
  return fetch(
    `https://api.airtable.com/v0/app9W2SSELvaPePpI/messages/${itemId}`,
    {
      method: 'PATCH',
      headers: {
        Authorization: 'Bearer keyrIMJRMlgyfWv0r',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fields: change
      })
    }
  )
    .then(response => response.json())
    .then(record => {
      return {
        id: record.id,
        body: record.fields.body,
        subject: record.fields.subject,
        read: record.fields.read,
        starred: record.fields.starred,
        selected: record.fields.selected,
        labels: record.fields.labels ? record.fields.labels.split(',') : ''
      };
    });
}
