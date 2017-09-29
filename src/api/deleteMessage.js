export default function deleteMessages(itemId) {
  return fetch(
    `https://api.airtable.com/v0/app9W2SSELvaPePpI/messages/${itemId}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer keyrIMJRMlgyfWv0r`
      }
    }
  );
}
