---
title: 包
intro: 'With the {% data variables.product.prodname_registry %} API, you can manage packages for your {% data variables.product.prodname_dotcom %} repositories and organizations.'
product: '{% data reusables.gated-features.packages %}'
versions:
  fpt: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

{% data variables.product.prodname_registry %} API 允许您使用 REST API 管理包。 要了解有关恢复或删除包的更多信息，请参阅“[恢复和删除包](/packages/learn-github-packages/deleting-and-restoring-a-package)”。

要使用此 API ，您必须使用个人访问令牌进行验证。
  - 要访问包元数据，您的令牌必须包括 `read:packages` 范围。
  - 要删除包和包版本，您的令牌必须包括 `read:packages` 和 `delete:packages` 范围。
  - 要恢复包和包版本，您的令牌必须包括 `read:packages` 和 `write:packages` 范围。

如果您的 `package_type` 是 `npm`、`maven`、`rubygems` 或 `nuget`，则您的令牌必须还包括 `repo` 范围，因为您的包从 {% data variables.product.prodname_dotcom %} 仓库继承权限。 如果您的包位于 {% data variables.product.prodname_container_registry %}，则 `package_type` 是 `container`，且令牌不需要 `repo` 作用域便可访问或管理此 `package_type`。 `container` 包提供与仓库分开的粒度权限。 更多信息请参阅“[关于 {% data variables.product.prodname_registry %} 的权限](/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries)”。

如果您想使用 {% data variables.product.prodname_registry %} API 访问已启用 SSO 的组织中的资源，则必须对个人访问令牌启用 SSO。 更多信息请参阅“[授权个人访问令牌用于 SAML 单点登录](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)”。

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}
