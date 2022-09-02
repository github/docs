---
title: Sobre a API do GitHub Enterprise
intro: '{% data variables.product.product_name %} é compatível com APIs REST e do GraphQL.'
redirect_from:
  - /enterprise/admin/installation/about-the-github-enterprise-server-api
  - /enterprise/admin/articles/about-the-enterprise-api
  - /enterprise/admin/articles/using-the-api
  - /enterprise/admin/categories/api
  - /enterprise/admin/overview/about-the-github-enterprise-server-api
  - /admin/overview/about-the-github-enterprise-server-api
versions:
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
shortTitle: GitHub Enterprise API
---

Com as APIs, você pode automatizar muitas tarefas administrativas. Veja alguns exemplos:

{% ifversion ghes %}
- Fazer alterações no {% data variables.enterprise.management_console %}. Para obter mais informações, consulte "[{% data variables.enterprise.management_console %}](/enterprise/user/rest/reference/enterprise-admin#management-console)."
- Configurar a sincronização LDAP. Para obter mais informações, consulte "[LDAP](/enterprise/user/rest/reference/enterprise-admin#ldap)".{% endif %}
- Colete estatísticas sobre sua empresa. Para obter mais informações, consulte " As[Estatísticas de Administrador](/rest/reference/enterprise-admin#admin-stats)".
- Gerenciar sua conta corporativa. Para obter mais informações, consulte "[Contas corporativas](/graphql/guides/managing-enterprise-accounts)".

Para a documentação completa sobre {% data variables.product.prodname_enterprise_api %}, consulte [{% data variables.product.prodname_dotcom %} API REST](/rest) e [{% data variables.product.prodname_dotcom%} API do GraphQL](/graphql). 
