---
title: About the GitHub Enterprise Server API
intro: '{% data variables.product.prodname_ghe_server %} supports the same powerful API available on {% data variables.product.prodname_dotcom_the_website %} as well as its own set of API endpoints.'
redirect_from:
  - /enterprise/admin/installation/about-the-github-enterprise-server-api
  - /enterprise/admin/articles/about-the-enterprise-api/
  - /enterprise/admin/articles/using-the-api/
  - /enterprise/admin/categories/api/
  - /enterprise/admin/overview/about-the-github-enterprise-server-api
  - /enterprise/admin/overview/about-the-github-enterprise-server-api
  - /enterprise/admin/overview/about-the-github-enterprise-server-api
versions:
  enterprise-server: '*'
---

For the complete documentation for {% data variables.product.prodname_enterprise_api %}, see [{% data variables.product.prodname_enterprise_api %} REST API reference docs](/enterprise/{{ currentVersion }}/v3/). With the API, you can automate many administrative tasks. Some examples include:

- Perform changes to the {% data variables.enterprise.management_console %}. For more information, see "[{% data variables.enterprise.management_console %}](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#management-console)."
- Collect statistics about your instance. For more information, see "[Admin stats](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#admin-stats)."
- Configure LDAP sync. For more information, see "[LDAP](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#ldap)."{% if currentVersion ver_gt "enterprise-server@2.18" %}
- Manage your enterprise account. For more information, see "[Enterprise accounts](/v4/guides/managing-enterprise-accounts)."{% endif %}
