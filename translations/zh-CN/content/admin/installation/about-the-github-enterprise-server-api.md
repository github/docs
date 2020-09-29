---
title: 关于 GitHub Enterprise Server API
intro: '{% data variables.product.prodname_ghe_server %} 支持 {% data variables.product.prodname_dotcom_the_website %} 提供的强大 API 及其自身的 API 端点集合。'
redirect_from:
  - /enterprise/admin/articles/about-the-enterprise-api/
  - /enterprise/admin/articles/using-the-api/
  - /enterprise/admin/categories/api/
  - /enterprise/admin/installation/about-the-github-enterprise-server-api
versions:
  enterprise-server: '*'
---

The complete documentation for the {% data variables.product.prodname_enterprise_api %} is available at </enterprise/{{>. 利用 API，您可以自动处理多种管理任务。 包含以下例子：

- 对 {% data variables.enterprise.management_console %} 进行更改。 For more information, see "[{% data variables.enterprise.management_console %}](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#management-console)."
- 收集关于实例的统计信息。 For more information, see "[Admin stats](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#admin-stats)."
- 配置 LDAP 同步。 For more information, see "[LDAP](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#ldap)."{% if currentVersion ver_gt "enterprise-server@2.18" %}
- 管理企业帐户。 更多信息请参阅“[企业帐户](/v4/guides/managing-enterprise-accounts)”。{% endif %}
