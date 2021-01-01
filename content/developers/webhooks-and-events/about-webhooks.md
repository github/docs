---
title: About webhooks
intro: Learn the basics of how webhooks work to help you build and set up integrations.
redirect_from:
  - /webhooks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---


Webhooks allow you to build or set up integrations, such as [{% data variables.product.prodname_github_app %}s](/apps/building-github-apps/) or [{% data variables.product.prodname_oauth_app %}s](/apps/building-oauth-apps/), which subscribe to certain events on GitHub.com. When one of those events is triggered, we'll send a HTTP POST payload to the webhook's configured URL. Webhooks can be used to update an external issue tracker, trigger CI builds, update a backup mirror, or even deploy to your production server. You're only limited by your imagination.

Webhooks can be installed on{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %} [{% data variables.product.prodname_enterprise %}](/rest/reference/enterprise-admin#global-webhooks/),{% endif %} an [organization][org-hooks], a specific [repository][repo-hooks], or a {% data variables.product.prodname_github_app %}. Once installed, the webhook will be sent each time one or more subscribed events occurs.

You can create up to {% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}250{% else %}20{% endif %} webhooks for each event on each installation target {% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}({% data variables.product.prodname_ghe_server %} instance, specific organization, or specific repository).{% else %}(specific organization or specific repository).{% endif %}

### Events

{% data reusables.webhooks.webhooks_intro %}

Each event corresponds to a certain set of actions that can happen to your organization and/or repository. For example, if you subscribe to the `issues` event you'll receive detailed payloads every time an issue is opened, closed, labeled, etc.

See "[Webhook event payloads](/webhooks/event-payloads)" for the list of available webhook events and their payloads.

### Ping event

{% data reusables.webhooks.ping_short_desc %}

For more information about the `ping` event webhook payload, see the [`ping`](/webhooks/event-payloads/#ping) event.

[org-hooks]: /rest/reference/orgs#webhooks/
[repo-hooks]: /rest/reference/repos#hooks
