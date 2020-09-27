---
title: インスタンス内でのリポジトリの作成を制限する
intro: '{{ site.data.variables.product.prodname_ghe_server }}のOrganizationのメンバーがリポジトリを作成できるようにするか、そしてメンバーが作成できるリポジトリの種類を選択できます。'
redirect_from:
  - /enterprise/admin/user-management/restricting-repository-creation-in-your-instance
versions:
  enterprise-server: '*'
---

{{ site.data.reusables.organizations.repo-creation-constants }}

{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.business }}
{{ site.data.reusables.enterprise-accounts.policies-tab }}
{{ site.data.reusables.enterprise-accounts.repositories-tab }}
5. [Repository creation] で、設定変更に関する情報を読みます。 {{ site.data.reusables.enterprise-accounts.view-current-policy-config-orgs }}
{% if currentVersion ver_gt "enterprise-server@2.19" %}
{{ site.data.reusables.enterprise-accounts.repo-creation-policy }}
{{ site.data.reusables.enterprise-accounts.repo-creation-types }}
{% else %}
6. [Repository creation（リポジトリの作成）] で、ドロップダウンメニューを使用してポリシーを選択します。 ![リポジトリ作成ポリシーのドロップダウンメニュー](/assets/images/enterprise/site-admin-settings/repository-creation-drop-down.png)
{% endif %}
