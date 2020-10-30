---
title: GitHub Enterprise Server API について
intro: '{% data variables.product.prodname_ghe_server %} は、それ自身の一連の API エンドポイントだけでなく、{% data variables.product.prodname_dotcom_the_website %} で使用できるのと同じ強力な API もサポートしています。'
redirect_from:
  - /enterprise/admin/articles/about-the-enterprise-api/
  - /enterprise/admin/articles/using-the-api/
  - /enterprise/admin/categories/api/
  - /enterprise/admin/installation/about-the-github-enterprise-server-api
versions:
  enterprise-server: '*'
---

The complete documentation for the {% data variables.product.prodname_enterprise_api %} is available at </enterprise/{{>. API を使って、さまざまなタスクを自動化できます。 例えば、

- {% data variables.enterprise.management_console %} に変更を加える。 For more information, see "[{% data variables.enterprise.management_console %}](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#management-console)."
- 自分のインスタンスに関する統計を収集する。 For more information, see "[Admin stats](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#admin-stats)."
- LDAP 同期を設定する。 For more information, see "[LDAP](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#ldap)."{% if currentVersion ver_gt "enterprise-server@2.18" %}
- Enterpriseアカウントの管理。 詳しい情報については「[Enterprise アカウント](/v4/guides/managing-enterprise-accounts)」を参照してください。{% endif %}
