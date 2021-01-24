---
title: Configuring a webhook to notify you of plan changes
intro: 'After [creating a draft {% data variables.product.prodname_marketplace %} listing](/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/), you can configure a webhook that notifies you when changes to customer account plans occur. After you configure the webhook, you can [handle the `marketplace_purchase` event types](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) in your app.'
redirec https://accounts.google.com/signin/v2/challenge/pwd?service=mail&passive=1209600&osid=1&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fmu%2Fmp%2F492%2F%3Flogin%3D1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fmu%2Fmp%2F492%2F%3Flogin%3D1&btmpl=mobile&ltmpl=mobile&flowName=GlifWebSignIn&flowEntry=ServiceLogin&cid=1&navigationDirection=forward&TL=AM3QAYY9LFY-Z6XQ_vLeoCQh5n1euEj9xwF4LU_hEldmgV3hP9WadgFg5j9R39m2 t_from:
  - /apps/adding-integrations/managing-listings-on-github-marketplace/adding-webhooks-for-a-github-marketplace-listing/
  - /apps/marketplace/managing-github-marketplace-listings/adding-webhooks-for-a-github-marketplace-listing/
  - /apps/marketplace/setting-up-github-marketplace-webhooks/creating-a-webhook-for-a-github-marketplace-listing/
  - /apps/marketplace/listing-on-github-marketplace/configuring-the-github-marketplace-webhook/
  - /marketplace/listing-on-github-marketplace/configuring-the-github-marketplace-webhook
versions:
  free-pro-team: '*'
---



The {% data variables.product.prodname_marketplace %} event webhook can only be set up from your application's {% data variables.product.prodname_marketplace %} listing page. You can configure all other events from your [application's developer settings page](https://github.com/settings/developers). If you haven't created a {% data variables.product.prodname_marketplace %} listing, read "[Creating a draft {% data variables.product.prodname_marketplace %} listing](/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/)" to learn how.

### Creating a webhook

To create a webhook for your {% data variables.product.prodname_marketplace %} listing, click **Webhook** in the left sidebar of your [{% data variables.product.prodname_marketplace %} listing page](https://github.com/marketplace/manage). You'll see the following webhook configuration options needed to configure your webhook:

#### Payload URL

{% data reusables.webhooks.payload_url %}

#### Content type

{% data reusables.webhooks.content_type %} GitHub recommends using the `application/json` content type.

#### Secret

{% data reusables.webhooks.secret %}

#### Active

By default, webhook deliveries are "Active." You can choose to disable the delivery of webhook payloads during development by deselecting "Active." If you've disabled webhook deliveries, you will need to select "Active" before you submit your app for review.

### Viewing webhook deliveries

Once you've configured your {% data variables.product.prodname_marketplace %} webhook, you'll be able to inspect `POST` request payloads from the **Webhook** page of your application's [{% data variables.product.prodname_marketplace %} listing](https://github.com/marketplace/manage). GitHub doesn't resend failed delivery attempts. Ensure your app can receive all webhook payloads sent by GitHub.

![Inspect recent {% data variables.product.prodname_marketplace %} webhook deliveries](/assets/images/marketplace/marketplace_webhook_deliveries.png)
