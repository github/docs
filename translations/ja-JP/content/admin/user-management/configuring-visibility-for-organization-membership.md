---
title: Organizationのメンバーシップの可視性の設定
intro: インスタンスにわたって新しい Organization のメンバーの可視性をパブリックあるいはプライベートに設定できます。 また、メンバーが自分の可視性をデフォルトから変更できないようにすることもできます。
redirect_from:
  - /enterprise/admin/user-management/configuring-visibility-for-organization-membership
versions:
  enterprise-server: '*'
---

インスタンス内の現在のOrganizationのすべてのメンバーに対し、コマンドラインユーティリティを使ってデフォルト設定を適用することもできます。 たとえばすべてのOrganizationのメンバーの可視性をパブリックにしたい場合、管理設定でデフォルトをパブリックにしてすべての新しいメンバーにデフォルトを適用し、それからコマンドラインユーティリティを使ってパブリック設定を既存のメンバーに適用できます。

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% if currentVersion ver_gt "enterprise-server@2.21" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
3. [Default organization membership visibility] で、ドロップダウンメニューを使用して [**Private**] または [**Public**] をクリックします。 ![デフォルトの Organization のメンバーシップの可視性をパブリックあるいはプライベートに設定するオプションを持つドロップダウンメニュー](/assets/images/enterprise/site-admin-settings/default-organization-membership-visibility-drop-down-menu.png)
4. メンバーがデフォルトからメンバーシップの可視性を変更できないようにするために、**Enforce on organization members（Organizationのメンバーに適用）**を選択することもできます。 ![デフォルト設定を全メンバーに強制するチェックボックス](/assets/images/enterprise/site-admin-settings/enforce-default-org-membership-visibility-setting.png)
5. 新しい可視性の設定をすべての既存メンバーに適用したい場合は、`ghe-org-membership-update`コマンドラインユーティリティを使ってください。 詳細は「[コマンドラインユーティリティ](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-org-membership-update)」を参照してください。
