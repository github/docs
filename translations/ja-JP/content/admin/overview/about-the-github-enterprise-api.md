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

With the APIs, you can automate many administrative tasks. 例えば、

{% if enterpriseServerVersions contains currentVersion %}
- {% data variables.enterprise.management_console %} に変更を加える。 詳しい情報については、「[{% data variables.enterprise.management_console %}](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#management-console)」を参照してください。
- LDAP 同期を設定する。 詳しい情報については、「[LDAP](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#ldap)」を参照してください。{% endif %}
- Collect statistics about your enterprise. For more information, see "[Admin stats](/rest/reference/enterprise-admin#admin-stats)."
- Enterpriseアカウントの管理。 詳しい情報については「[Enterprise アカウント](/graphql/guides/managing-enterprise-accounts)」を参照してください。

For the complete documentation for {% data variables.product.prodname_enterprise_api %}, see [{% data variables.product.prodname_dotcom %} REST API](/rest) and [{% data variables.product.prodname_dotcom%} GraphQL API](/graphql). 
