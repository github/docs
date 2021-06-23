---
title: Organizations
allowTitleToDifferFromFilename: true
redirect_from:
  - /v3/orgs
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

{% if currentVersion == "free-pro-team@latest" %}
## Blocking users

The token used to authenticate the call must have the `admin:org` scope in order to make any blocking calls for an organization. Otherwise, the response returns `HTTP 404`.  

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'blocking' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

## Members

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'members' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Outside collaborators

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'outside-collaborators' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Webhooks

Organization webhooks allow you to receive HTTP `POST` payloads whenever certain events happen within the organization. Subscribing to these events makes it possible to build integrations that react to events on {% data variables.product.product_name %}. For more information on actions you can subscribe to, see "[{% data variables.product.prodname_dotcom %} event types](/developers/webhooks-and-events/github-event-types)."

### Scopes & Restrictions

All actions against organization webhooks require the authenticated user to be an admin of the organization being managed. Additionally, OAuth tokens require the `admin:org_hook` scope. For more information, see "[Scopes for OAuth Apps](/developers/apps/scopes-for-oauth-apps)."

In order to protect sensitive data which may be present in webhook configurations, we also enforce the following access control rules:

- OAuth applications cannot list, view, or edit webhooks which they did not create.
- Users cannot list, view, or edit webhooks which were created by OAuth applications.

### Receiving Webhooks

In order for {% data variables.product.product_name %} to send webhook payloads, your server needs to be accessible from the Internet. We also highly suggest using SSL so that we can send encrypted payloads over HTTPS.

For more best practices, [see our guide](/guides/best-practices-for-integrators/).

#### Webhook headers

{% data variables.product.product_name %} will send along several HTTP headers to differentiate between event types and payload identifiers. See [webhook headers](/webhooks/event-payloads/#delivery-headers) for details.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'webhooks' %}{% include rest_operation %}{% endif %}
{% endfor %}
