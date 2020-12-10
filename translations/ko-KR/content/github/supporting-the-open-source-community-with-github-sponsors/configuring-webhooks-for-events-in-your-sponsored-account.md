---
title: Configuring webhooks for events in your sponsored account
intro: You can configure webhooks to alert you when you receive new sponsorships or existing sponsors make changes to their sponsorships.
versions:
  free-pro-team: '*'
---

To monitor changes to your sponsorships, such as cancellations at the end of a pay period, you can create webhooks for your sponsored user or organization account. When you set up a webhook for your sponsored user or organization account, you'll receive updates when sponsorships are created, edited, or deleted. For more information, see the [`sponsorship` webhook event](/webhooks/event-payloads/#sponsorship).

### Managing webhooks for your sponsored user account

{% data reusables.sponsors.navigate-to-dev-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-webhooks-tab %}
{% data reusables.sponsors.add-webhook %}
{% data reusables.sponsors.add-payload-url %}
{% data reusables.sponsors.webhook-content-formatting %}
{% data reusables.sponsors.webhook-secret-token %}
{% data reusables.sponsors.add-active-triggers %}
{% data reusables.sponsors.confirm-add-webhook %}
{% data reusables.sponsors.manage-existing-webhooks %}

### Managing webhooks for your sponsored organization

Organization owners can configure webhooks for a sponsored organization.

{% data reusables.sponsors.navigate-to-org-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-webhooks-tab %}
{% data reusables.sponsors.add-webhook %}
{% data reusables.sponsors.add-payload-url %}
{% data reusables.sponsors.webhook-content-formatting %}
{% data reusables.sponsors.webhook-secret-token %}
{% data reusables.sponsors.add-active-triggers %}
{% data reusables.sponsors.confirm-add-webhook %}
{% data reusables.sponsors.manage-existing-webhooks %}
