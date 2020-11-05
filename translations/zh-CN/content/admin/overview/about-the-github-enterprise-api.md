---
title: About the GitHub Enterprise API
intro: '{% data variables.product.product_name %} supports REST and GraphQL APIs.'
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
---

With the APIs, you can automate many administrative tasks. 包含以下例子：

{% if enterpriseServerVersions contains currentVersion %}
- 对 {% data variables.enterprise.management_console %} 进行更改。 更多信息请参阅“[{% data variables.enterprise.management_console %}](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#management-console)”。
- 配置 LDAP 同步。 更多信息请参阅“[LDAP](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#ldap)”。{% endif %}
- Collect statistics about your enterprise. For more information, see "[Admin stats](/rest/reference/enterprise-admin#admin-stats)."
- 管理企业帐户。 更多信息请参阅“[企业帐户](/v4/guides/managing-enterprise-accounts)”。

For the complete documentation for {% data variables.product.prodname_enterprise_api %}, see [{% data variables.product.prodname_dotcom %} REST API](/rest) and [{% data variables.product.prodname_dotcom%} GraphQL API](/graphql). 