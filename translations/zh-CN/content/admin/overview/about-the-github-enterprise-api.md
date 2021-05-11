---
title: 关于 GitHub Enterprise API
intro: '{% data variables.product.product_name %} 支持 REST 和 GraphQL API。'
redirect_from:
  - /enterprise/admin/installation/about-the-github-enterprise-server-api
  - /enterprise/admin/articles/about-the-enterprise-api/
  - /enterprise/admin/articles/using-the-api/
  - /enterprise/admin/categories/api/
  - /enterprise/admin/overview/about-the-github-enterprise-server-api
  - /admin/overview/about-the-github-enterprise-server-api
versions:
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Enterprise
---

利用 API，您可以自动处理多种管理任务。 包含以下例子：

{% if enterpriseServerVersions contains currentVersion %}
- 对 {% data variables.enterprise.management_console %} 进行更改。 更多信息请参阅“[{% data variables.enterprise.management_console %}](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#management-console)”。
- 配置 LDAP 同步。 更多信息请参阅“[LDAP](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#ldap)”。{% endif %}
- 收集关于企业的统计信息。 更多信息请参阅“[管理统计](/rest/reference/enterprise-admin#admin-stats)”。
- 管理企业帐户。 更多信息请参阅“[企业帐户](/graphql/guides/managing-enterprise-accounts)”。

有关 {% data variables.product.prodname_enterprise_api %} 的完整文档，请参阅 [{% data variables.product.prodname_dotcom %} REST API](/rest) and [{% data variables.product.prodname_dotcom%} GraphQL API](/graphql)。 
