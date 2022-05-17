---
title: 全局 web 挂钩
intro: 全局 web 挂钩安装在企业上。 您可以使用全局 web 挂钩来自动监视、响应或实施针对企业上的用户、组织、团队和仓库的规则。
versions:
  ghes: '*'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

全局 web 挂钩可以订阅[组织](/developers/webhooks-and-events/webhook-events-and-payloads#organization)、[用户](/developers/webhooks-and-events/webhook-events-and-payloads#user)、[仓库](/developers/webhooks-and-events/webhook-events-and-payloads#repository)、[团队](/developers/webhooks-and-events/webhook-events-and-payloads#team)、[成员](/developers/webhooks-and-events/webhook-events-and-payloads#member)、[成员身份](/developers/webhooks-and-events/webhook-events-and-payloads#membership)、[复刻](/developers/webhooks-and-events/webhook-events-and-payloads#fork)和 [ping](/developers/webhooks-and-events/about-webhooks#ping-event) 事件类型。

*此 API 只适用于[经过身份验证的](/rest/overview/resources-in-the-rest-api#authentication)站点管理员。*普通用户尝试访问它时会收到 `404` 响应。 要了解如何配置全局 web 挂钩，请参阅[关于全局 web 挂钩](/enterprise/admin/user-management/about-global-webhooks)。
