---
title: 为赞助帐户中的事件配置 web 挂钩
intro: 您可以配置 web 挂钩以在您获得新的赞助或现有赞助者更改其赞助时收到提醒。
versions:
  free-pro-team: '*'
---

To monitor changes to your sponsorships, such as cancellations at the end of a pay period, you can create webhooks for your sponsored user or organization account. When you set up a webhook for your sponsored user or organization account, you'll receive updates when sponsorships are created, edited, or deleted. 更多信息请参阅 [`sponsorship` web 挂钩事件](/webhooks/event-payloads/#sponsorship)。

### 管理被赞助用户帐户的 web 挂钩

{% data reusables.sponsors.navigate-to-dev-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-webhooks-tab %}
{% data reusables.sponsors.add-webhook %}
{% data reusables.sponsors.add-payload-url %}
{% data reusables.sponsors.webhook-content-formatting %}
{% data reusables.sponsors.webhook-secret-token %}
{% data reusables.sponsors.add-active-triggers %}
{% data reusables.sponsors.confirm-add-webhook %}
{% data reusables.sponsors.manage-existing-webhooks %}

### 管理被赞助组织的 web 挂钩

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
