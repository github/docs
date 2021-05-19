---
title: 为企业帐户中的组织事件配置 web 挂钩
intro: 企业所有者可为企业帐户所拥有的组织中的事件配置 web 挂钩。
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /articles/configuring-webhooks-for-organization-events-in-your-business-account/
  - /articles/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-webhooks-for-organization-events-in-your-enterprise-account
versions:
  free-pro-team: '*'
topics:
  - Enterprise
---
您可以配置 web 挂钩以接收企业帐户所拥有的组织中的事件。 有关 web 挂钩的更多信息，请参阅“[web 挂钩](/webhooks/)”。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
4. 在“Web 挂钩”旁边，单击 **Add webhook（添加 web 挂钩）**。 ![Web 挂钩侧边栏中的添加 web 挂钩按钮](/assets/images/help/business-accounts/add-webhook-button.png)
5. 键入有效负载 URL，然后自定义配置（可选）。 更多信息请参阅“[创建 web 挂钩](/webhooks/creating/#creating-webhooks)”。 ![有效负载 URL 的字段和其他自定义选项](/assets/images/help/business-accounts/webhook-payload-url-and-customization-options.png)
6. 在“Which events would you like to trigger this webhook?（您希望哪些事件触发此 web 挂钩？）”下，选择 **Let me select individual events（让我选择各个事件）**。 ![选择各个事件](/assets/images/help/business-accounts/webhook-let-me-select-individual-events.png)
7. 选择 web 挂钩接收的一个或多个企业帐户事件。 更多信息请参阅“[事件类型和有效负载](/webhooks/event-payloads/)”。 ![选择各个事件](/assets/images/help/business-accounts/webhook-selected-events.png)
8. 要接收所选的触发 web 挂钩的事件，请选择 **Active（激活）**。 ![选择各个事件](/assets/images/help/business-accounts/webhook-active.png)
9. 单击 **Add webhook（添加 web 挂钩）**。
