---
title: Managing global webhooks
shortTitle: Manage global webhooks
intro: You can configure global webhooks to notify external web servers when events occur within your enterprise.
permissions: Enterprise owners can manage global webhooks for an enterprise account.
redirect_from:
  - /enterprise/admin/user-management/about-global-webhooks
  - /enterprise/admin/user-management/managing-global-webhooks
  - /admin/user-management/managing-global-webhooks
  - /admin/user-management/managing-users-in-your-enterprise/managing-global-webhooks
  - /github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /articles/configuring-webhooks-for-organization-events-in-your-business-account
  - /articles/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /admin/user-management/monitoring-activity-in-your-enterprise/managing-global-webhooks
  - /admin/monitoring-activity-in-your-enterprise/exploring-user-activity/managing-global-webhooks
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Webhooks
---

## About global webhooks

You can use global webhooks to notify an external web server when events occur within your enterprise. You can configure the server to receive the webhook's payload, then run an application or code that monitors, responds to, or enforces rules for user and organization management for your enterprise. For more information, see "[AUTOTITLE](/webhooks-and-events/webhooks)."

For example, you can configure {% data variables.location.product_location %} to send a webhook when someone creates, deletes, or modifies a repository or organization within your enterprise. You can configure the server to automatically perform a task after receiving the webhook.

{% data reusables.enterprise_user_management.manage-global-webhooks-api %}

## Adding a global webhook

You can add a global webhook for your enterprise. For more information, see "[AUTOTITLE](/webhooks/using-webhooks/creating-webhooks#creating-a-global-webhook-for-a-github-enterprise)."

## Editing a global webhook

You can edit a global webhook to change any of the settings that were selected when the webhook was initially created. For more information, see "[AUTOTITLE](/webhooks/using-webhooks/editing-webhooks#editing-a-global-webhook-for-a-github-enterprise)."

## Disabling a global webhook

You can disable or delete a global webhook. For more information, see "[AUTOTITLE](/webhooks/using-webhooks/disabling-webhooks#disabling-a-global-webhook-for-a-github-enterprise)."

## Viewing recent deliveries and responses

You can view details about webhook deliveries that occurred in the past {% data variables.webhooks.retention %} days. For more information, see "[AUTOTITLE](/webhooks/testing-and-troubleshooting-webhooks/viewing-webhook-deliveries)."
