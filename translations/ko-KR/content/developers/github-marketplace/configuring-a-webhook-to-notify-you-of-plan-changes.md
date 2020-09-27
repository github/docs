---
title: Configuring a webhook to notify you of plan changes
intro: 'After [creating a draft {{ site.data.variables.product.prodname_marketplace }} listing](/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/), you can configure a webhook that notifies you when changes to customer account plans occur. After you configure the webhook, you can [handle the `marketplace_purchase` event types](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) in your app.'
redirect_from:
  - /apps/adding-integrations/managing-listings-on-github-marketplace/adding-webhooks-for-a-github-marketplace-listing/
  - /apps/marketplace/managing-github-marketplace-listings/adding-webhooks-for-a-github-marketplace-listing/
  - /apps/marketplace/setting-up-github-marketplace-webhooks/creating-a-webhook-for-a-github-marketplace-listing/
  - /apps/marketplace/listing-on-github-marketplace/configuring-the-github-marketplace-webhook/
  - /marketplace/listing-on-github-marketplace/configuring-the-github-marketplace-webhook
versions:
  free-pro-team: '*'
---



The {{ site.data.variables.product.prodname_marketplace }} event webhook can only be set up from your application's {{ site.data.variables.product.prodname_marketplace }} listing page. You can configure all other events from your [application's developer settings page](https://github.com/settings/developers). If you haven't created a {{ site.data.variables.product.prodname_marketplace }} listing, read "[Creating a draft {{ site.data.variables.product.prodname_marketplace }} listing](/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/)" to learn how.

### Creating a webhook

To create a webhook for your {{ site.data.variables.product.prodname_marketplace }} listing, click **Webhook** in the left sidebar of your [{{ site.data.variables.product.prodname_marketplace }} listing page](https://github.com/marketplace/manage). You'll see the following webhook configuration options needed to configure your webhook:

#### Payload URL

{{ site.data.reusables.webhooks.payload_url }}

#### Content type

{{ site.data.reusables.webhooks.content_type }} GitHub recommends using the `application/json` content type.

#### Secret

{{ site.data.reusables.webhooks.secret }}

#### Active

By default, webhook deliveries are "Active." You can choose to disable the delivery of webhook payloads during development by deselecting "Active." If you've disabled webhook deliveries, you will need to select "Active" before you submit your app for review.

### Viewing webhook deliveries

Once you've configured your {{ site.data.variables.product.prodname_marketplace }} webhook, you'll be able to inspect `POST` request payloads from the **Webhook** page of your application's [{{ site.data.variables.product.prodname_marketplace }} listing](https://github.com/marketplace/manage). GitHub doesn't resend failed delivery attempts. Ensure your app can receive all webhook payloads sent by GitHub.

![Inspect recent {{ site.data.variables.product.prodname_marketplace }} webhook deliveries](/assets/images/marketplace/marketplace_webhook_deliveries.png)
