---
title: 为赞助帐户中的事件配置 web 挂钩
intro: 您可以配置 web 挂钩以在您获得新的赞助或现有赞助者更改其赞助时收到提醒。
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
shortTitle: 事件的 Web 挂钩
---

## 关于被赞助帐户中事件的 web 挂钩

要监视赞助变更，例如在付款期结束时取消，您可以为被赞助的用户或组织帐户创建 web 挂钩。 为被赞助帐户创建 web 挂钩后，在创建、编辑或删除赞助时您将会收到更新消息。 更多信息请参阅 [`sponsorship` web 挂钩事件](/webhooks/event-payloads/#sponsorship)。

## 管理被赞助帐户中事件的 web 挂钩

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-webhooks-tab %}
{% data reusables.sponsors.add-webhook %}
{% data reusables.sponsors.add-payload-url %}
{% data reusables.sponsors.webhook-content-formatting %}
{% data reusables.sponsors.webhook-secret-token %}
{% data reusables.sponsors.add-active-triggers %}
{% data reusables.sponsors.confirm-add-webhook %}
{% data reusables.sponsors.manage-existing-webhooks %}
