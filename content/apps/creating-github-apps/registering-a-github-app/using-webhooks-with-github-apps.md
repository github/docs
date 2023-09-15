---
title: Using webhooks with GitHub Apps
shortTitle: Webhooks
intro: 'Your {% data variables.product.prodname_github_app %} can subscribe to webhook events to receive notifications whenever certain activity occurs.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
redirect_from:
  - /apps/creating-github-apps/creating-github-apps/using-webhooks-with-github-apps
  - /apps/creating-github-apps/setting-up-a-github-app/using-webhooks-with-github-apps
---

## About webhooks and {% data variables.product.prodname_github_apps %}

Webhooks enable your {% data variables.product.prodname_github_app %} to receive real-time notifications when events happen on {% data variables.product.prodname_dotcom %}, such as when someone pushes a commit or opens a pull request in a repository that your app can access. For more information about webhooks, see "[AUTOTITLE](/webhooks-and-events/webhooks/about-webhooks)." For a tutorial that demonstrates how to use webhooks with a {% data variables.product.prodname_github_app %}, see "[AUTOTITLE](/apps/creating-github-apps/guides/building-a-github-app-that-responds-to-webhook-events)."

You can configure your {% data variables.product.prodname_github_app %} to receive webhooks for specific events on {% data variables.product.prodname_dotcom %} and automatically take action on them. For more information about the types of webhooks you can receive, see "[AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads)."

To receive webhook events in your {% data variables.product.prodname_github_app %}, you must enable webhooks for your {% data variables.product.prodname_github_app %} registration and specify a webhook URL where {% data variables.product.prodname_dotcom %} will send the webhook payloads.

If your {% data variables.product.prodname_github_app %} does not need to respond to webhooks or will only be used for authentication, you can turn off the webhook function for your {% data variables.product.prodname_github_app %} registration. You do not need to specify a webhook URL.

For more information about registering a {% data variables.product.prodname_github_app %}, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/creating-a-github-app)." For more information about changing the webhooks that a {% data variables.product.prodname_github_app %} registration subscribes to, see "[AUTOTITLE](/apps/maintaining-github-apps/modifying-a-github-app)."

## Choosing a webhook URL

When you activate webhooks for your {% data variables.product.prodname_github_app %} registration, you will need to specify a webhook URL. The webhook URL is the address of a web server that will receive the webhook event payloads sent to your {% data variables.product.prodname_github_app %}. The server can then take action based on the content of the payload. You should choose a web server that's appropriate for the volume of webhook traffic that your {% data variables.product.prodname_github_app %} will encounter.

### Choosing a webhook URL for development and testing

While you develop and test your app, you can use a webhook payload delivery service like [Smee](https://smee.io/) to capture and forward webhook payloads to your local development environment. Never use Smee for an application in production, because Smee channels are not authenticated or secure. Alternatively, you can use a tool like [ngrok](https://dashboard.ngrok.com/get-started), [localtunnel](https://localtunnel.github.io/www/), or the [Hookdeck Console](https://console.hookdeck.com?provider=github) that exposes your local machine to the internet to receive the payloads.

#### Creating a webhook URL with Smee

You can use Smee to create a unique domain where {% data variables.product.prodname_dotcom %} can send webhook payloads, without exposing your local development to the internet. Smee calls this unique domain a "Webhook Proxy URL." You can use Smee's Webhook Proxy URL as the webhook URL for your {% data variables.product.prodname_github_app %}.

1. To use Smee to create a unique domain, go to https://smee.io and click **Start a new channel**.
1. On the Smee channel page, follow the instructions under "Use the CLI" to install and run the Smee client.
1. To connect your Smee webhook URL to your {% data variables.product.prodname_github_app %}, enter your unique Smee domain in the "Webhook URL" field on your {% data variables.product.prodname_github_app %} registration page. For more information, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/creating-a-github-app)" and "[AUTOTITLE](/apps/maintaining-github-apps/modifying-a-github-app)."

### Choosing a webhook URL for production

For an application in production that receives a low volume of webhook traffic, you can host it on any dynamic application server. The server-side code for handling the webhook can receive the event, deserialize its JSON payload, and decide what action to take, such as storing the data in a database or calling the {% data variables.product.prodname_dotcom %} API.

To handle a higher volume of webhook traffic for a large app in production, consider using asynchronous webhook handling on a dedicated server. You can achieve this by employing a queue, where the webhook handler pushes data to the queue, and separate processes perform subsequent actions based on the events. Additionally, you can use cloud functions such as [Azure Functions](https://azure.microsoft.com/en-us/products/functions/), [AWS Lambda](https://aws.amazon.com/lambda/), or [Hookdeck](https://hookdeck.com) to help scale the app for handling large volumes of webhook events.

## Securing your webhooks with a webhook secret

Once you've configured your server to receive payloads, it will listen for any payload sent to the server. For security reasons, you should limit incoming requests to only those originating from {% data variables.product.prodname_dotcom %}. You can do that by creating a webhook secret for your app.

To create a webhook secret for your GitHub App, type a secret token under "Webhook secret" on your {% data variables.product.prodname_github_app %} registration page. You should choose a random string of text with high entropy. For more information, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/creating-a-github-app)" and "[AUTOTITLE](/apps/maintaining-github-apps/modifying-a-github-app)."

After creating a webhook secret for your app, you will need to configure your server to securely store and validate the webhook secret token. For more information, see "[AUTOTITLE](/webhooks-and-events/webhooks/securing-your-webhooks)."

## Subscribing to webhook events

You can subscribe your {% data variables.product.prodname_github_app %} to receive webhook payloads for specific events. {% data reusables.apps.webhooks-and-apps %} For more information, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/choosing-permissions-for-a-github-app)."

For example, if you would like your app to receive a webhook event payload whenever a new issue is opened in your repository, you would first need to give your app permission to access "Issues" under "Repository permissions." Then under "Subscribe to events" you can select "Issues."

For more information about the permissions that are required for each webhook event, see "[AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads)."
