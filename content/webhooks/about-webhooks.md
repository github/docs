---
title: About webhooks
intro: 'Webhooks provide a way for notifications to be delivered to an external web server whenever certain events occur on {% data variables.product.company_short %}.'
redirect_from:
  - /developers/webhooks-and-events/about-webhooks
  - /developers/webhooks-and-events/webhooks/about-webhooks
  - /get-started/exploring-integrations/about-webhooks
  - /post-receive-hooks
  - /articles/post-receive-hooks
  - /articles/creating-webhooks
  - /articles/about-webhooks
  - /github/extending-github/about-webhooks
  - /get-started/customizing-your-github-workflow/exploring-integrations/about-webhooks
  - /webhooks-and-events/webhooks/about-webhooks
  - /webhooks/webhooks/about-webhooks
  - /webhooks-and-events/webhooks/replacing-github-services
  - /webhooks/replacing-github-services
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
---

## About webhooks

Webhooks are a method of communication that allows users to subscribe to events happening in a software system. Webhooks can be triggered whenever specific events occur on {% data variables.product.company_short %}. For example, you can configure a webhook to trigger whenever:

- Code is pushed to a repository
- A pull request is opened
- A {% data variables.product.prodname_pages %} site is built
- A new member is added to a team

You can create webhooks for{% ifversion ghec or ghes or ghae %} a {% data variables.product.prodname_enterprise %},{% endif %} an organization, a repository, or a {% data variables.product.prodname_github_app %}.{% ifversion fpt or ghec %} You can also create webhooks to subscribe to events relating to {% data variables.product.prodname_sponsors %} and {% data variables.product.prodname_marketplace %}. {% endif %}

You can create up to {% ifversion ghes or ghae %}250{% else %}20{% endif %} webhooks for each event on each installation target {% ifversion ghes or ghae %}({% data variables.product.prodname_ghe_server %} instance, specific organization, or specific repository).{% else %}(specific organization or specific repository).{% endif %}

For more information about creating webhooks, see "[AUTOTITLE](/webhooks/using-webhooks/creating-webhooks)."

{% data reusables.webhooks.webhooks-ipv6 %}

### About webhook events

When configuring a webhook, you can choose which events will send you payloads. To limit the number of HTTP requests to your server, you should only subscribe to the specific events that you plan on handling. For a complete list of webhook events and their payloads, see "[AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads)."

Some webhook events have actions, which are operations that can be performed on the resource that the webhook event represents. If a webhook event has multiple action types, each action will trigger a payload delivery. For example, the `package` webhook event will trigger a payload delivery when a package is either `updated` or `edited`. You cannot subscribe to individual webhook actions. When you configure a webhook, you will receive payloads for all of the actions related to that webhook.

By default, webhooks installed on {% ifversion ghes or ghae %} [{% data variables.product.prodname_enterprise %}](/rest/enterprise-admin#global-webhooks/),{% endif %} an [organization](/rest/orgs/webhooks) or a [repository](/rest/webhooks) are only subscribed to the `push` event. By default, webhooks on {% data variables.product.prodname_github_apps %} are not subscribed to any events. You can change events that a webhook is subscribed to at any time.

### About webhook deliveries

When you receive a webhook delivery, the payload will contain the name of the event and action that triggered the delivery, along with other information about the event itself. For more information about the delivery headers that are included with each payload, and an example delivery, see "[AUTOTITLE](/webhooks/webhook-events-and-payloads#about-webhook-events-and-payloads)." Some information is included in most or all webhook deliveries, such as the user who performed the event, or the organization or repository where the event occurred.

When you create a webhook, you will need to specify a URL where you want to receive the webhook events. {% data variables.product.company_short %} will send a HTTP POST payload to this URL when any events that the webhook is subscribed to occur. Your server can then process and respond to the webhook. For more information, see "[AUTOTITLE](/webhooks/using-webhooks/configuring-your-server-to-receive-payloads)."

{% note %}

**Note:** Payloads are capped at 25 MB. If your event generates a larger payload, a webhook will not be fired. This may happen, for example, on a `create` event if many branches or tags are pushed at once. We suggest monitoring your payload size to ensure delivery.

{% endnote %}

For information on viewing webhook deliveries, see "[AUTOTITLE](/webhooks/testing-and-troubleshooting-webhooks/viewing-webhook-deliveries)."

## When to use webhooks

Webhooks can be used in a wide range of scenarios, including:
- Triggering CI (continuous integration) pipelines on an external CI server. For example, to trigger CI in Jenkins or CircleCI when code is pushed to a branch.
- Sending notifications about events on {% data variables.product.company_short %} to collaboration platforms. For example, sending a notification to Discord or Slack when there's a review on a pull request.
- Updating an external issue tracker like Jira.
- Deploying to a production server.
- Logging events as they happen on {% data variables.product.company_short %}, for audit purposes.
  
Webhooks allow you to receive data as it happens, as opposed to calling an API intermittently to see if data is available, also known as polling for updates. You only need to express interest in an event once, when you create the webhook.

Webhooks have the following advantages over using the API:
- Webhooks require less effort and less resources than polling an API.
- Webhooks scale better than API calls. If you need to monitor many resources, calling the API for each resource may cause you to hit your API rate limit quota quickly. Instead, you can subscribe to multiple webhook events and receive information only when an event happens.
- Webhooks allow near real-time updates, since webhooks are triggered when an event happens.

If you only need information once or intermittently or only want to get information from a small set of resources with no plans to scale up, you can call the API when you need the relevant information.

For information on best practices to follow when using webhooks, see "[AUTOTITLE](/webhooks/using-webhooks/best-practices-for-using-webhooks)."
  
## About permissions for managing webhooks

To manage webhooks, you must own or have admin access to the resource that the webhook is created on and listening for events on. For example, to manage organization webhooks you need admin permissions for that organization. For more information about creating different webhook types, see "[AUTOTITLE](/webhooks/using-webhooks/creating-webhooks)."

## Replacing legacy GitHub Services with webhooks

GitHub Services (sometimes referred to as Service Hooks) is the legacy method of integrating where {% data variables.product.company_short %} hosted a portion of our integrator’s services via [the `github-services` repository](https://github.com/github/github-services). In 2019, we deprecated GitHub Services in favor of integrating with webhooks. For more information about the deprecation, see the [blog post](https://developer.github.com/changes/2018-04-25-github-services-deprecation/).
