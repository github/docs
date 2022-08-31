---
title: 外部组
intro: 外部组 API 允许您查看可用于组织的外部标识提供者组，并管理组织中外部组和团队之间的连接。
versions:
  fpt: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## 关于外部组 API

要使用此 API，经过身份验证的用户必须是团队维护员或与团队关联的组织的所有者。

{% ifversion ghec %}
{% note %}

**注意：**

- The external groups API is only available for organizations that are part of an enterprise using {% data variables.product.prodname_emus %}. 更多信息请参阅“[关于企业管理用户](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)”。
- 如果您的组织使用团队同步，则可以使用团队同步 API。 更多信息请参阅“[团队同步 API](#team-synchronization)”。

{% endnote %}
{% endif %}
