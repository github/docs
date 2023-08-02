---
title: About webhooks
intro: Webhooks provide a way for notifications to be delivered to an external web server whenever certain events occur on {% data variables.product.company_short %}.
redirect_from:
  - /webhooks
  - /developers/webhooks-and-events/about-webhooks
  - /developers/webhooks-and-events/webhooks/about-webhooks
  - /get-started/exploring-integrations/about-webhooks
  - /post-receive-hooks
  - /articles/post-receive-hooks
  - /articles/creating-webhooks
  - /articles/about-webhooks
  - /github/extending-github/about-webhooks
  - /get-started/customizing-your-github-workflow/exploring-integrations/about-webhooks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
---

Webhooks can be triggered whenever specific events occur on {% data variables.product.company_short %}. For example, you can configure a webhook to trigger whenever:

- Code is pushed to a repository
- A pull request is opened
- A {% data variables.product.prodname_pages %} site is built
- A new member is added to a team

You can add webhooks to{% ifversion ghes or ghae %} {% data variables.product.prodname_enterprise %},{% endif %} an organization, a repository, or a {% data variables.product.prodname_github_app %}.

When you add a webhook, you choose which events you want to subscribe to. To limit the number of HTTP requests to your server, you should only subscribe to the specific events that you plan on handling. By default, webhooks installed on {% ifversion ghes or ghae %} {% data variables.product.prodname_enterprise %},{% endif %} an organization or a repository  are only subscribed to the push event. By default, webhooks on {% data variables.product.prodname_github_apps %} are not subscribed to any events. You can change the events that a webhook is subscribed to at any time. For a complete list of webhook events, see "[AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads)."

You typically need a server to receive webhooks events. When you add a webhook, you specify a URL where you want to receive the webhook events. {% data variables.product.company_short %} will send a HTTP POST payload to this URL when any events that the webhook is subscribed to occur.

When your server receives a webhook event, it can process and respond to the webhook. For example, code running on your server could update an external issue tracker, trigger CI builds, update a backup mirror, or deploy to a production server when it receives a webhook event.

You can create up to {% ifversion ghes or ghae %}250{% else %}20{% endif %} webhooks for each event on each installation target {% ifversion ghes or ghae %}({% data variables.product.prodname_ghe_server %} instance, specific organization, or specific repository).{% else %}(specific organization or specific repository).{% endif %}

{% data reusables.webhooks.webhooks-ipv6 %}
