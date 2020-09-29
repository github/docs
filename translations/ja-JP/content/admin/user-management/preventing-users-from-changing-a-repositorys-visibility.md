---
title: ユーザによるリポジトリの可視性の変更の禁止
intro: '{% data variables.product.prodname_ghe_server %} アプライアンス上で Organization が所有しているリポジトリの可視性を、メンバーが変更できないようすることができます。'
redirect_from:
  - /enterprise/admin/guides/user-management/preventing-users-from-changing-a-repository-s-visibility
  - /enterprise/admin/user-management/preventing-users-from-changing-a-repositorys-visibility
versions:
  enterprise-server: '*'
---

メンバーがリポジトリの可視性を変更できないようにすると、パブリックなリポジトリをプライベートにしたり、プライベートなリポジトリをパブリックにしたりできるのはサイト管理者だけになります。

サイト管理者がリポジトリの作成を Organization のオーナーのみに制限している場合、メンバーはリポジトリの可視性を変更できません。 サイト管理者がメンバーのリポジトリ作成をプライベート リポジトリのみに制限している場合、メンバーはリポジトリをパブリックからプライベートに変更すること以外はできません。 詳しい情報については、「[インスタンスでリポジトリ作成を制限する](/enterprise/{{ currentVersion }}/admin/guides/user-management/restricting-repository-creation-in-your-instance)」を参照してください。

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
5. [Repository visibility change] で、設定変更についての情報を確認します。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}

{% data reusables.enterprise-accounts.repository-visibility-policy %}
