---
title: GitHub Enterprise API について
intro: '{% data variables.product.product_name %} は、REST および GraphQL API をサポートしています。'
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

API を使用すると、さまざまなタスクを自動化できます。 例えば、

{% ifversion ghes %}
- {% data variables.enterprise.management_console %} に変更を加える。 詳しい情報については、「[{% data variables.enterprise.management_console %}](/enterprise/user/rest/reference/enterprise-admin#management-console)」を参照してください。
- LDAP 同期を設定する。 詳しい情報については、「[LDAP](/enterprise/user/rest/reference/enterprise-admin#ldap)」を参照してください。{% endif %}
- 自分の Enterprise に関する統計を収集する。 詳しい情報については、「[管理統計](/rest/reference/enterprise-admin#admin-stats)」を参照してください。
- Enterpriseアカウントの管理。 詳しい情報については「[Enterprise アカウント](/graphql/guides/managing-enterprise-accounts)」を参照してください。

{% data variables.product.prodname_enterprise_api %} の完全なドキュメントについては、[{% data variables.product.prodname_dotcom %}REST API](/rest) および [{% data variables.product.prodname_dotcom%}GraphQL API](/graphql) を参照してください。 
