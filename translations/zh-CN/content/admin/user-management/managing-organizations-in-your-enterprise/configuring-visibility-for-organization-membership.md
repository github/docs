---
title: 配置组织成员关系的可见性
intro: 您可以将企业中新组织成员的可见性设置为公开或私密。 您还可以阻止成员将其可见性改为非默认值。
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
您也可以使用命令行实用程序，在您的实例的所有当前组织成员中强制执行默认设置。 例如，如果您需要每个组织成员的可见性都设为公开，可以将默认值设为公开，并在管理员设置中为所有新成员强制使用默认值，然后使用命令行实用程序在现有成员中强制使用公开设置。
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% if currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
3. 在“Default organization membership visibility（默认组织成员可见性）”下，使用下拉菜单，然后单击 **Private（私密）**或 **Public（公开）**。 ![包含用于将默认组织成员关系可见性配置为公开或私密的选项的下拉菜单](/assets/images/enterprise/site-admin-settings/default-organization-membership-visibility-drop-down-menu.png)
4. 或者，为了阻止成员将他们的成员关系可见性改为非默认值，也可以选择 **Enforce on organization members**。 ![Checkbox to enforce the default setting on all members](/assets/images/enterprise/site-admin-settings/enforce-default-org-membership-visibility-setting.png){% if enterpriseServerVersions contains currentVersion %}
5. 如果您想在所有现有成员中强制使用新的可见性设置，请使用 `ghe-org-membership-update` 命令行实用程序。 更多信息请参阅“[命令行实用程序](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-org-membership-update)”。{% endif %}
