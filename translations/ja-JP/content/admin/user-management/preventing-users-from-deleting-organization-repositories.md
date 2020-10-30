---
title: ユーザによるOrganizationのリポジトリ削除の禁止
intro: 'メンバーが {% data variables.product.prodname_ghe_server %} アプライアンス上で Organization 内のリポジトリを削除したり移譲したりするのを禁止できます。'
redirect_from:
  - /enterprise/admin/user-management/preventing-users-from-deleting-organization-repositories
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
5. 「Repository deletion and transfer」で、設定変更に関する情報を確認します。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}

{% data reusables.enterprise-accounts.repository-deletion-policy %}
