---
title: GitHub Enterprise Server API について
intro: '{% data variables.product.prodname_ghe_server %} は、それ自身の一連の API エンドポイントだけでなく、{% data variables.product.prodname_dotcom_the_website %} で使用できるのと同じ強力な API もサポートしています。'
redirect_from:
  - /enterprise/admin/installation/about-the-github-enterprise-server-api
  - /enterprise/admin/articles/about-the-enterprise-api/
  - /enterprise/admin/articles/using-the-api/
  - /enterprise/admin/categories/api/
  - /enterprise/admin/overview/about-the-github-enterprise-server-api
versions:
  enterprise-server: '*'
---

{% data variables.product.prodname_enterprise_api %} の完全なドキュメントについては、「[{% data variables.product.prodname_enterprise_api %} REST API リファレンスドキュメント](/enterprise/{{ currentVersion }}/v3/)」をご覧ください。 API を使って、さまざまなタスクを自動化できます。 例えば、

- {% data variables.enterprise.management_console %} に変更を加える。 詳しい情報については、「[{% data variables.enterprise.management_console %}](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#management-console)」を参照してください。
- 自分のインスタンスに関する統計を収集する。 詳しい情報については、「[管理統計](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#admin-stats)」を参照してください。
- LDAP 同期を設定する。 詳しい情報については、「[LDAP](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#ldap)」を参照してください。{% if currentVersion ver_gt "enterprise-server@2.18" %}
- Enterpriseアカウントの管理。 詳しい情報については「[Enterprise アカウント](/v4/guides/managing-enterprise-accounts)」を参照してください。{% endif %}
