Webhook Deliveries
Webhook Proxy URL
https://smee.io/SG769BVvNO4keXsK
This page will automatically update as things happen.

Use the CLI
$ npm install --global smee-client
Then the smee command will forward webhooks from smee.io to your local development environment.

$ smee -u https://smee.io/SG769BVvNO4keXsK
For usage info:

$ smee --help
Use the Node.js client
$ npm install --save smee-client
Then: Edgarruiz856 

const SmeeClient = require('smee-client')

const smee = new SmeeClient({
  source: 'https://smee.io/SG769BVvNO4keXsK',
  target: 'http://localhost:3000/events',
  logger: console
})

const events = smee.start(default)

// Stop forwarding events
events.close(default)
Using Probot's built-in support
$ npm install --save smee-client
Then set the environment variable:

WEBHOOK_PROXY_URL=https://smee.io/SG769BVvNO4keXsK