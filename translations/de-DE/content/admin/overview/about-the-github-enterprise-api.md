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
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
shortTitle: GitHub Enterprise API
---

With the APIs, you can automate many administrative tasks. Darunter beispielsweise:

{% ifversion ghes %}
- Änderungen in der {% data variables.enterprise.management_console %} durchführen. For more information, see "[{% data variables.enterprise.management_console %}](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#management-console)."
- Die LDAP-Synchronisierung konfigurieren. For more information, see "[LDAP](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#ldap)."{% endif %}
- Collect statistics about your enterprise. Weitere Informationen finden Sie unter „[Administratorstatistiken](/rest/reference/enterprise-admin#admin-stats)“.
- Verwalte Dein Unternehmenskonto. Weitere Informationen findest Du unter „[Unternehmenskonten](/graphql/guides/managing-enterprise-accounts).“

For the complete documentation for {% data variables.product.prodname_enterprise_api %}, see [{% data variables.product.prodname_dotcom %} REST API](/rest) and [{% data variables.product.prodname_dotcom%} GraphQL API](/graphql). 
