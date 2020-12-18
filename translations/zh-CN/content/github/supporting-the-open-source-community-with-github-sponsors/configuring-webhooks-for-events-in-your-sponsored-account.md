---
title: 为赞助帐户中的事件配置 web 挂钩
intro: 您可以配置 web 挂钩以在您获得新的赞助或现有赞助者更改其赞助时收到提醒。
versions:
  free-pro-team: '*'
---

### About webhooks for events in your sponsored account

要监视赞助变更，例如在付款期结束时取消，您可以为被赞助的用户或组织帐户创建 web 挂钩。 When you set up a webhook for your sponsored account, you'll receive updates when sponsorships are created, edited, or deleted. 更多信息请参阅 [`sponsorship` web 挂钩事件](/webhooks/event-payloads/#sponsorship)。

### Managing webhooks for events in your sponsored account

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-webhooks-tab %}
{% data reusables.sponsors.add-webhook %}
{% data reusables.sponsors.add-payload-url %}
{% data reusables.sponsors.webhook-content-formatting %}
{% data reusables.sponsors.webhook-secret-token %}
{% data reusables.sponsors.add-active-triggers %}
{% data reusables.sponsors.confirm-add-webhook %}
{% data reusables.sponsors.manage-existing-webhooks %}