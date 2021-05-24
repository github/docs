---
title: Organizationのメンバーシップの可視性の設定
intro: Enterprise 全体の新しい Organization メンバーの可視性をパブリックまたはプライベートに設定できます。 また、メンバーが自分の可視性をデフォルトから変更できないようにすることもできます。
redirect_from:
  - /enterprise/admin/user-management/configuring-visibility-for-organization-membership
  - /admin/user-management/configuring-visibility-for-organization-membership
versions:
  enterprise-server: '*'
  github-ae: '*'
type: how_to
topics:
  - Enterprise
  - Organizations
  - User account
---
{% if enterpriseServerVersions contains currentVersion %}
インスタンス内の現在のOrganizationのすべてのメンバーに対し、コマンドラインユーティリティを使ってデフォルト設定を適用することもできます。 たとえばすべてのOrganizationのメンバーの可視性をパブリックにしたい場合、管理設定でデフォルトをパブリックにしてすべての新しいメンバーにデフォルトを適用し、それからコマンドラインユーティリティを使ってパブリック設定を既存のメンバーに適用できます。
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% if currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
3. [Default organization membership visibility] で、ドロップダウンメニューを使用して [**Private**] または [**Public**] をクリックします。 ![デフォルトの Organization のメンバーシップの可視性をパブリックあるいはプライベートに設定するオプションを持つドロップダウンメニュー](/assets/images/enterprise/site-admin-settings/default-organization-membership-visibility-drop-down-menu.png)
4. メンバーがデフォルトからメンバーシップの可視性を変更できないようにするために、**Enforce on organization members（Organizationのメンバーに適用）**を選択することもできます。 ![Checkbox to enforce the default setting on all members](/assets/images/enterprise/site-admin-settings/enforce-default-org-membership-visibility-setting.png){% if enterpriseServerVersions contains currentVersion %}
5. 新しい可視性の設定をすべての既存メンバーに適用したい場合は、`ghe-org-membership-update`コマンドラインユーティリティを使ってください。 詳しい情報については、「[コマンドラインユーティリティ](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-org-membership-update)」を参照してください。{% endif %}
