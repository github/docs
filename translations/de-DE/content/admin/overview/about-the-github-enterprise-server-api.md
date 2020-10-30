---
title: Informationen zur GitHub Enterprise Server-API
intro: '{% data variables.product.prodname_ghe_server %} unterstützt dieselbe leistungsstarke API, die auf {% data variables.product.prodname_dotcom_the_website %} verfügbar ist, und den eigenen Satz an API-Endpunkten.'
redirect_from:
  - /enterprise/admin/installation/about-the-github-enterprise-server-api
  - /enterprise/admin/articles/about-the-enterprise-api/
  - /enterprise/admin/articles/using-the-api/
  - /enterprise/admin/categories/api/
  - /enterprise/admin/overview/about-the-github-enterprise-server-api
versions:
  enterprise-server: '*'
---

For the complete documentation for {% data variables.product.prodname_enterprise_api %}, see [{% data variables.product.prodname_enterprise_api %} REST API reference docs](/enterprise/{{ currentVersion }}/v3/). Mit der API können Sie viele Verwaltungsaufgaben automatisieren. Darunter beispielsweise:

- Änderungen in der {% data variables.enterprise.management_console %} durchführen. For more information, see "[{% data variables.enterprise.management_console %}](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#management-console)."
- Statistiken zu Ihrer Instanz erfassen. For more information, see "[Admin stats](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#admin-stats)."
- Die LDAP-Synchronisierung konfigurieren. For more information, see "[LDAP](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#ldap)."{% if currentVersion ver_gt "enterprise-server@2.18" %}
- Verwalte Dein Unternehmenskonto. Weitere Informationen findest Du unter „[Unternehmenskonten](/v4/guides/managing-enterprise-accounts).“{% endif %}
