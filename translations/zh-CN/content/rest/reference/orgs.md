---
title: 组织
allowTitleToDifferFromFilename: true
redirect_from:
  - /v3/orgs
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## 阻止用户

用于对调用进行身份验证的令牌必须具有 `admin:org` 作用域才可对组织进行任何阻止调用。 否则，响应将返回 `HTTP 404`。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'blocking' %}{% include rest_operation %}{% endif %}
{% endfor %}

## 成员

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'members' %}{% include rest_operation %}{% endif %}
{% endfor %}

## 外部协作者

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'outside-collaborators' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Web 挂钩

组织 web 挂钩允许您在组织内发生特定事件时接收 HTTP `POST` 有效负载。 订阅这些事件可以构建对 {% data variables.product.prodname_dotcom %}.com 上的操作做出反应的集成。 有关您可以订阅的操作的更多信息，请参阅“[{% data variables.product.prodname_dotcom %} 事件类型](/developers/webhooks-and-events/github-event-types)”。

### 范围和限制

对组织 web 挂钩的所有操作都需要经过身份验证的用户是所管理组织的管理员。 此外，OAuth 令牌需要 `admin:org_hook` 作用域。 更多信息请参阅“[OAuth 应用程序的作用域](/developers/apps/scopes-for-oauth-apps)”。

为了保护 web 挂钩配置中可能存在的敏感数据，我们还强制实施以下访问控制规则：

- OAuth 应用程序无法列出、查看或编辑不是它们创建的 web 挂钩。
- 用户无法列出、查看或编辑由 OAuth 应用程序创建的 web 挂钩。

### 接收 web 挂钩

为了让 {% data variables.product.product_name %} 发送 web 挂钩有效负载，您的服务器需要能够从 Internet 访问。 我们还强烈建议使用 SSL，以便我们可以通过 HTTPS 发送加密的有效负载。

有关更多最佳实践，[请参阅我们的指南](/guides/best-practices-for-integrators/)。

#### Web 挂钩标头

{% data variables.product.product_name %} 发送时将附带几个 HTTP 标头，以区分事件类型和有效负载标识符。 更多信息请参阅 [web 挂钩标头](/webhooks/event-payloads/#delivery-headers)。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'hooks' %}{% include rest_operation %}{% endif %}
{% endfor %}
