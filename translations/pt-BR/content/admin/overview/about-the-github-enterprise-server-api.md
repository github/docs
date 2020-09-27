---
title: Sobre a API do GitHub Enterprise Server
intro: 'O {{ site.data.variables.product.prodname_ghe_server }} dá suporte à mesma API avançada disponível no {{ site.data.variables.product.prodname_dotcom_the_website }} e tem seu próprio conjunto de pontos de extremidade de API.'
redirect_from:
  - /enterprise/admin/installation/about-the-github-enterprise-server-api
  - /enterprise/admin/articles/about-the-enterprise-api/
  - /enterprise/admin/articles/using-the-api/
  - /enterprise/admin/categories/api/
  - /enterprise/admin/overview/about-the-github-enterprise-server-api
versions:
  enterprise-server: '*'
---

Para a documentação completa para {{ site.data.variables.product.prodname_enterprise_api }}, consulte [ documentação de referência da API REST de {{ site.data.variables.product.prodname_enterprise_api }}](/enterprise/{{ currentVersion }}/v3/). A API permite automatizar várias tarefas administrativas. Veja alguns exemplos:

- Fazer alterações no {{ site.data.variables.enterprise.management_console }}. Para obter mais informações, consulte "[{{ site.data.variables.enterprise.management_console }}](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#management-console)."
- Coletar dados estatísticos sobre a sua instância. Para obter mais informações, consulte "[Estatísticas do administrador](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#admin-stats)".
- Configurar a sincronização LDAP. Para obter mais informações, consulte "[LDAP](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#admin-stats)".{% if currentVersion ver_gt "enterprise-server@2.18" %}
- Gerenciar sua conta corporativa. Para obter mais informações, consulte "[Contas corporativas](/v4/guides/managing-enterprise-accounts)".{% endif %}
