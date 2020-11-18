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

With the APIs, you can automate many administrative tasks. Veja alguns exemplos:

{% if enterpriseServerVersions contains currentVersion %}
- Fazer alterações no {% data variables.enterprise.management_console %}. Para obter mais informações, consulte "[{% data variables.enterprise.management_console %}](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#management-console)."
- Configurar a sincronização LDAP. Para obter mais informações, consulte "[LDAP](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#admin-stats)".{% endif %}
- Collect statistics about your enterprise. For more information, see "[Admin stats](/rest/reference/enterprise-admin#admin-stats)."
- Gerenciar sua conta corporativa. Para obter mais informações, consulte "[Contas corporativas](/v4/guides/managing-enterprise-accounts)".

For the complete documentation for {% data variables.product.prodname_enterprise_api %}, see [{% data variables.product.prodname_dotcom %} REST API](/rest) and [{% data variables.product.prodname_dotcom%} GraphQL API](/graphql). 