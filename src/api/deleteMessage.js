export default function deleteMessages(messageId) {
  return fetch(
    'https://api.airtable.com/v0/app9W2SSELvaPePpI/messages/' + messageId,
    {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer keyrIMJRMlgyfWv0r'
      }
    }
  )
    .then(response => response.json())
    .then(data => {
      return data;
    });
}
