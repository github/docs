---
title: Configuring webhooks for events in your sponsored account
intro: You can configure webhooks to alert you when you receive new sponsorships or existing sponsors make changes to their sponsorships.
redirect_from:
  - /github/supporting-the-open-source-community-with-github-sponsors/configuring-webhooks-for-events-in-your-sponsored-account
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Webhooks
  - Events
  - Open Source
shortTitle: Webhooks for events
---

## About webhooks for events in your sponsored account

To monitor changes to your sponsorships, such as cancellations at the end of a pay period, you can create webhooks for your sponsored user or organization account. When you set up a webhook for your sponsored account, you'll receive updates when sponsorships are created, edited, or deleted. For more information, see the [`sponsorship` webhook event](/webhooks-and-events/webhooks/webhook-events-and-payloads#sponsorship).

## Adding a webhook

You can add a webhook for your sponsorship. For more information, see "[AUTOTITLE](/webhooks/using-webhooks/creating-webhooks#creating-a-github-sponsors-webhook)."

## Editing a webhook

You can edit a webhook to change any of the settings that were selected when the sponsorship webhook was initially created. For more information, see "[AUTOTITLE](/webhooks/using-webhooks/editing-webhooks#editing-a-github-sponsors-webhook)."

## Disabling a webhook

You can disable or delete a webhook for your sponsorship. For more information, see "[AUTOTITLE](/webhooks/using-webhooks/disabling-webhooks#disabling-a-github-sponsors-webhook)."

## Viewing recent deliveries and responses

You can view details about webhook deliveries that occurred in the past {% data variables.webhooks.retention %} days. For more information, see "[AUTOTITLE](/webhooks/testing-and-troubleshooting-webhooks/viewing-webhook-deliveries)."
