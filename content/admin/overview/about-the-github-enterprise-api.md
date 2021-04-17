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
topics:
  - enterprise
---

With the APIs, you can automate many administrative tasks. Some examples include:

{% if enterpriseServerVersions contains currentVersion %}
- Perform changes to the {% data variables.enterprise.management_console %}. For more information, see "[{% data variables.enterprise.management_console %}](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#management-console)."
- Configure LDAP sync. For more information, see "[LDAP](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#ldap)."{% endif %}
- Collect statistics about your enterprise. For more information, see "[Admin stats](/rest/reference/enterprise-admin#admin-stats)."
- Manage your enterprise account. For more information, see "[Enterprise accounts](/graphql/guides/managing-enterprise-accounts)."

For the complete documentation for {% data variables.product.prodname_enterprise_api %}, see [{% data variables.product.prodname_dotcom %} REST API](/rest) and [{% data variables.product.prodname_dotcom%} GraphQL API](/graphql). 
