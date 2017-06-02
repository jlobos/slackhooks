# slackhooks

[![Build Status](https://travis-ci.org/jlobos/slackhooks.svg?branch=master)](https://travis-ci.org/jlobos/slackhooks)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

> Send data into Slack in real-time by [Incoming Webhooks](https://api.slack.com/incoming-webhooks).

## Install

```
npm install --save slackhooks
```

## Usage

```js
const slack = require('slackhooks')

// id or full url
const me = 'T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX'
const backend = 'https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX'

slack('Hey today is birthday of Camila :tada:', me)
// or if is need response
slack('Hey today is birthday of Camila :tada:', me).then(res => {
  console.log(res)
})

// Advanced message formatting (Attachments, Message buttons)
// https://api.slack.com/docs/messages/builder
slack({
  text: 'Status: Deploy done :ok_hand: Your build exited with 0.',
  username: 'docker',
  icon_emoji: ':whale:',
  link_names: 1,
  channel: '#backend'
}, backend)
```

## License

MIT © [Jesús Lobos](https://jlobos.com/)
