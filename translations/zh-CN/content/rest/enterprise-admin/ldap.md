---
title: LDAP
intro: '您可以使用 LDAP API 来更新 {% data variables.product.product_name %} 用户或团队与其关联的 LDAP 条目之间的帐户关系，或者排队新同步。'
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

通过 LDAP 映射端点，您可以更新用户或团队所映射的识别名称 (DN) 。 请注意，LDAP 端点通常只在您的 {% data variables.product.product_name %} 设备[启用了 LDAP 同步](/enterprise/admin/authentication/using-ldap)时才有效。 启用了 LDAP 后，即使禁用 LDAP 同步，也可以使用[更新用户的 LDAP 映射](#update-ldap-mapping-for-a-user)端点。
