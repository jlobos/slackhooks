const url = require('url')
const fetch = require('node-fetch')

module.exports = async (message, id) => {
  const payload = (
    typeof message === 'string'
  ) ? {text: message} : message

  // Webhook url or only id
  const {pathname} = url.parse(id)
  id = pathname.replace('/services/', '')

  return fetch(`https://hooks.slack.com/services/${id}`, {
    method: 'POST',
    body: JSON.stringify(payload)
  }).then(res => res.text())
}
