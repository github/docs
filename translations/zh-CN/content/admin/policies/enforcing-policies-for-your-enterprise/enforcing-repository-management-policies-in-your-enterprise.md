---
title: 在企业中实施仓库管理策略
intro: 您可以在企业组织内执行仓库管理策略，或允许在每个组织中设置策略。
permissions: Enterprise owners can enforce policies for repository management in an enterprise.
redirect_from:
  - /enterprise/admin/installation/configuring-the-default-visibility-of-new-repositories-on-your-appliance
  - /enterprise/admin/guides/user-management/preventing-users-from-changing-a-repository-s-visibility
  - /enterprise/admin/user-management/preventing-users-from-changing-a-repositorys-visibility
  - /enterprise/admin/user-management/restricting-repository-creation-in-your-instance
  - /enterprise/admin/user-management/preventing-users-from-deleting-organization-repositories
  - /enterprise/admin/installation/setting-git-push-limits
  - /enterprise/admin/guides/installation/git-server-settings
  - /enterprise/admin/articles/setting-git-push-limits
  - /enterprise/admin/user-management/allowing-admins-to-enable-anonymous-git-read-access-to-public-repositories
  - /enterprise/admin/installation/disabling-the-merge-conflict-editor-for-pull-requests-between-repositories
  - /enterprise/admin/developer-workflow/blocking-force-pushes-on-your-appliance
  - /enterprise/admin/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization
  - /enterprise/admin/developer-workflow/blocking-force-pushes-to-a-repository
  - /enterprise/admin/articles/blocking-force-pushes-on-your-appliance
  - /enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access-to-a-repository
  - /enterprise/admin/user-management/preventing-users-from-changing-anonymous-git-read-access
  - /enterprise/admin/articles/blocking-force-pushes-to-a-repository
  - /enterprise/admin/articles/block-force-pushes
  - /enterprise/admin/articles/blocking-force-pushes-for-a-user-account
  - /enterprise/admin/articles/blocking-force-pushes-for-an-organization
  - /enterprise/admin/articles/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization
  - /enterprise/admin/developer-workflow/blocking-force-pushes
  - /enterprise/admin/policies/enforcing-repository-management-policies-in-your-enterprise
  - /admin/policies/enforcing-repository-management-policies-in-your-enterprise
  - /articles/enforcing-repository-management-settings-for-organizations-in-your-business-account
  - /articles/enforcing-repository-management-policies-for-organizations-in-your-enterprise-account
  - /articles/enforcing-repository-management-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-repository-management-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-repository-management-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-repository-management-policies-in-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Repositories
  - Security
shortTitle: 仓库管理策略
---

## 关于企业中的仓库管理策略

您可以执行策略来控制企业在 {% data variables.product.product_name %} 上的企业成员如何管理仓库。 您也可以允许组织所有者管理仓库管理策略。 更多信息请参阅“[创建和管理仓库](/repositories/creating-and-managing-repositories) ”和“[组织和团队](/organizations)”。

{% ifversion ghes or ghae %}

## 配置新仓库的默认可见性

每次有人在您的企业上创建新仓库时，此人必须选择仓库的可见性。 当您配置企业的默认可见性设置时，需要选择默认可见性。 有关仓库可见性的更多信息，请参阅“[关于仓库](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)。”

如果企业所有者不允许成员创建某种类型的仓库，成员将无法创建此类仓库，即使可见性设置默认为此类型。 更多信息请参阅“[设置仓库创建策略](#setting-a-policy-for-repository-creation)”。

{% data reusables.enterprise-accounts.access-enterprise %}
{% ifversion ghes or ghae %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
1. 在“默认仓库可见性”下，使用下拉菜单并选择默认可见性。 ![用于选择企业的默认仓库可见性的下拉菜单](/assets/images/enterprise/site-admin-settings/default-repository-visibility-settings.png)

{% data reusables.enterprise_installation.image-urls-viewable-warning %}

{% endif %}

## 执行 {% ifversion ghec or ghes > 3.1 or ghae %}基础{% else %}默认{% endif %} 仓库权限的策略

在企业帐户拥有的所有组织中，您可以为组织成员设置{% ifversion ghec or ghes > 3.1 or ghae %}基础{% else %}默认{% endif %}仓库权限级别（无、读取、写入或管理），或允许所有者在组织级别管理设置。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
4. 在“{% ifversion ghec or ghes > 3.1 or ghae %}基础{% else %}默认{% endif %} 权限”下，查看有关更改设置的信息。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. 在“{% ifversion ghec or ghes > 3.1 or ghae %}基础{% else %}默认{% endif %} 权限”下，使用下拉菜单并选择策略。
  {% ifversion ghec or ghes > 3.1 or ghae %}
  ![带有仓库权限策略选项的下拉菜单](/assets/images/help/business-accounts/repository-permissions-policy-drop-down.png)
  {% else %}
  ![带有仓库权限策略选项的下拉菜单](/assets/images/enterprise/business-accounts/repository-permissions-policy-drop-down.png)
  {% endif %}

## 执行仓库创建策略

在企业拥有的所有组织中，您可以允许成员创建仓库、将仓库创建限于组织所有者或允许所有者在组织级别管理设置。 如果允许成员创建仓库，您可以选择成员能否创建公共、私有和内部仓库的任意组合。 {% data reusables.repositories.internal-repo-default %} 有关内部仓库的更多信息，请参阅“[创建内部仓库](/articles/creating-an-internal-repository)”。

{% data reusables.organizations.repo-creation-constants %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
5. 在“Repository creation”下，检查有关更改设置的信息。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
{% ifversion ghes or ghae %}
{% data reusables.enterprise-accounts.repo-creation-policy %}
{% data reusables.enterprise-accounts.repo-creation-types %}
{% else %}
6. 在“Repository creation（仓库创建）”下，使用下拉菜单并选择策略。 ![包含仓库创建策略的下拉菜单](/assets/images/enterprise/site-admin-settings/repository-creation-drop-down.png)
{% endif %}

## 实施有关复刻私有或内部仓库的策略

在企业拥有的所有组织中，您可以允许有权访问私有或内部仓库的人员复刻仓库、永远不允许分支私有或内部仓库，或者允许所有者在组织级别管理设置。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
3. 在“Repository forking”（仓库复刻）下，审查有关更改设置的信息。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. 在“Repository forking（仓库复刻）”下，使用下拉菜单并选择策略。 ![带有仓库复刻策略选项的下拉菜单](/assets/images/help/business-accounts/repository-forking-policy-drop-down.png)

## 执行邀请{% ifversion ghec %} 外部{% endif %} 协作者参与仓库的策略

在企业拥有的所有组织中，您可以允许成员邀请{% ifversion ghec %}外部{% endif %} 协作者访问存储库，限制{% ifversion ghec %}外部协作者 {% endif %}邀请组织所有者，{% ifversion prevent-org-admin-add-outside-collaborator %}限制{% ifversion ghec %}外部协作者 {% endif %}邀请企业所有者，{% endif %}或允许组织所有者在组织级别管理设置。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
3. 在“仓库 {% ifversion ghec %}外部协作者{% elsif ghes or ghae %}邀请{% endif %}”下，请查看有关更改设置的信息。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. 在“仓库 {% ifversion ghec %}外部协作者{% elsif ghes or ghae %}邀请{% endif %}”下，使用下拉菜单并选择策略。
  {% ifversion ghec %}
  ![带有外部协作者邀请策略选项的下拉菜单](/assets/images/help/business-accounts/repository-invitation-policy-drop-down.png)
  {% elsif ghes or ghae %}
  ![带邀请策略选项的下拉菜单](/assets/images/enterprise/business-accounts/repository-invitation-policy-drop-down.png)
  {% endif %}

{% ifversion ghec or ghes or ghae %}

## 对默认分支名称实施策略

在企业拥有的所有组织中，您可以为成员创建的任何新仓库设置默认分支名称。 您可以选择在所有组织中强制实施默认分支名称，或允许个别组织设置不同的名称。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. 在 **Repository policies（仓库策略）**选项卡的“Default branch name（默认分支名称）”下，输入新仓库应使用的默认分支名称。 ![输入默认分支名称的文本框](/assets/images/help/business-accounts/default-branch-name-text.png)
4. （可选）要对企业中的所有组织强制实施默认分支名称，请选择 **Enforce across this enterprise（在整个企业中实施）**。 ![强制实施复选框](/assets/images/help/business-accounts/default-branch-name-enforce.png)
5. 单击 **Update（更新）**。 ![更新按钮](/assets/images/help/business-accounts/default-branch-name-update.png)

{% endif %}

## 执行更改仓库可见性的策略

在您的企业拥有的所有组织中，您可以允许具有管理员权限的成员更改仓库的可见性、将仓库可见性更改限制为组织所有者或允许所有者在组织级别管理设置。 当您阻止成员更改仓库可见性时，只有企业所有者可以更改仓库的可见性。

如果企业所有者仅允许组织所有者创建仓库，则成员将无法更改仓库可见性。 如果企业所有者只允许私有仓库成员创建私有仓库，则成员只能将仓库的可见性更改为私有。 更多信息请参阅“[设置仓库创建策略](#setting-a-policy-for-repository-creation)”。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
5. 在“Repository visibility change”下，检查有关更改设置的信息。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}

{% data reusables.enterprise-accounts.repository-visibility-policy %}

## 执行仓库删除和转移的策略

在您的企业拥有的所有组织中，您可以允许具有管理员权限的成员删除或转让仓库、将仓库删除和转让限制为组织所有者或允许所有者在组织级别管理设置。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
5. 在“Repository deletion and transfer”下，检查有关更改设置的信息。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}

{% data reusables.enterprise-accounts.repository-deletion-policy %}

## 执行删除议题的策略

在您的企业拥有的所有组织中，您可以允许具有管理员权限的成员删除仓库中的议题、将议题删除限制为组织所有者或允许所有者在组织级别管理设置。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. 在 **Repository policies（仓库策略）**选项卡中的“Repository issue deletion（仓库议题删除）”下，审查有关更改设置的信息。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. 在“Repository issue deletion（仓库议题删除）”下，使用下拉菜单并选择策略。 ![带有议题删除策略选项的下拉菜单](/assets/images/help/business-accounts/repository-issue-deletion-policy-drop-down.png)

{% ifversion ghes or ghae %}

## 执行 Git 推送限制策略

要使仓库大小保持可管理并防止发生性能问题，可以为企业中的仓库配置文件大小限制。

默认情况下，强制执行仓库上传限制时，无法添加或上传超过 100 MB 的文件。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.options-tab %}
4. 在“Repository upload limit”下，使用下拉菜单，然后单击最大对象大小。 ![包含最大对象大小选项的下拉菜单](/assets/images/enterprise/site-admin-settings/repo-upload-limit-dropdown.png)
5. （可选）要对企业中的所有仓库实施最大上传限制，请选择 **Enforce on all repositories（对所有仓库强制执行）** ![对所有仓库选项强制执行最大对象限制](/assets/images/enterprise/site-admin-settings/all-repo-upload-limit-option.png)

## 为仓库之间的拉取请求配置合并冲突编辑器

要求用户在其计算机上本地解决合并冲突可以避免用户因疏忽而从分叉写入到上游仓库。

{% data reusables.enterprise-accounts.access-enterprise %}
{% ifversion ghes or ghae %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
1. 在“Conflict editor for pull requests between repositories”下，使用下拉菜单，然后单击 **Disabled**。 ![包含用于禁用合并冲突编辑器的选项的下拉菜单](/assets/images/enterprise/settings/conflict-editor-settings.png)

## 配置强制推送

每个仓库从拥有该仓库的用户帐户或组织的设置继承默认强制推送设置。 每个组织和用户帐户都会从企业的强制推送设置继承默认强制推送设置。 如果您更改企业的强制推送设置，此策略适用于任何用户或组织拥有的所有仓库。

### 阻止强制推送到所有仓库

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.options-tab %}
4. 在“Force pushes（强制推送）”下，使用下拉菜单，然后单击 **Allow（允许）**、**Block（阻止）**或 **Block to the default branch（阻止到默认分支）**。 ![强制推送下拉菜单](/assets/images/enterprise/site-admin-settings/force-pushes-dropdown.png)
5. 可以视情况选择 **Enforce on all repositories**，这将覆盖强制推送的组织和仓库级别设置。

### 阻止特定仓库的强制推送

{% data reusables.enterprise_site_admin_settings.override-policy %}

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
4. 在 **Push and Pull（推送和拉取）**下，选择 **Block（阻止）**或 **Block to the default branch（阻止到默认分支）**。 ![阻止强制推送](/assets/images/enterprise/site-admin-settings/repo/repo-block-force-pushes.png)

### 阻止对用户帐户或组织拥有的仓库进行强制推送

仓库从它们所属的用户帐户或组织继承强制推送设置。 反过来，用户帐户和组织从企业的强制推送设置继承其强制推送设置。

您可以通过配置用户帐户或组织的设置来覆盖默认的继承设置。

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user-or-org %}
{% data reusables.enterprise_site_admin_settings.click-user-or-org %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
5. 在“Force pushes”部分的“Repository default settings”下，选择
    - **Block** 来阻止对所有分支进行强制推送。
    - **Block to the default branch** 来仅阻止对默认分支进行强制推送。 ![阻止强制推送](/assets/images/enterprise/site-admin-settings/user/user-block-force-pushes.png)
6. 可以视情况选择 **Enforce on all repositories** 来覆盖仓库特定的设置。 注意，这**不**会覆盖企业范围的策略。 ![阻止强制推送](/assets/images/enterprise/site-admin-settings/user/user-block-all-force-pushes.png)

{% endif %}

{% ifversion ghes %}

## 配置匿名 Git 读取访问

{% data reusables.enterprise_user_management.disclaimer-for-git-read-access %}

{% ifversion ghes %}如果您已经在企业上[启用私密模式](/enterprise/admin/configuration/enabling-private-mode)，{% else %}您{% endif %}可以允许仓库管理员启用对公共仓库的匿名 Git 读取访问。

启用匿名 Git 读取允许用户在企业上为自定义工具绕过身份验证。 当您或仓库管理员为仓库启用此权限设置时，未经过身份验证的 Git 操作（和具有 {% data variables.product.product_name %} 的网络访问权限的任何人）将获得仓库的读取权限（无需身份验证）。

如有必要，您可以通过锁定仓库的访问设置，阻止仓库管理员更改企业上仓库的匿名 Git 访问设置。 在您锁定仓库的 Git 读取权限设置后，只有站点管理员可以更改设置。

{% data reusables.enterprise_site_admin_settings.list-of-repos-with-anonymous-git-read-access-enabled %}

{% data reusables.enterprise_user_management.exceptions-for-enabling-anonymous-git-read-access %}

### 设置所有仓库的匿名 Git 读取访问

{% data reusables.enterprise-accounts.access-enterprise %}
{% ifversion ghes or ghae %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
4. 在“Anonymous Git read access”下，使用下列菜单并单击 **Enabled**。 ![匿名 Git 读取权限下拉菜单显示菜单选项"Enabled（已启用）"和"Disabled（已禁用）"](/assets/images/enterprise/site-admin-settings/enable-anonymous-git-read-access.png)
3. 或者，如果要阻止仓库管理员为企业上的所有仓库更改匿名 Git 读取权限设置，请选择 **Prevent repository admins from changing anonymous Git read access**。 ![选中复选框可阻止仓库管理员更改企业上所有仓库的匿名 Git 读取权限设置。](/assets/images/enterprise/site-admin-settings/globally-lock-repos-from-changing-anonymous-git-read-access.png)

### 设置特定仓库的匿名 Git 读取访问

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
6. 在“Danger Zone”下的“Enable Anonymous Git read access”旁，请单击 **Enable**。 ![仓库站点管理员设置的危险区域中“Enable anonymous Git read access”下的“Enabled”按钮 ](/assets/images/enterprise/site-admin-settings/site-admin-enable-anonymous-git-read-access.png)
7. 审查更改。 要确认，请单击 **Yes, enable anonymous Git read access（是，启用匿名 Git 读取权限）**。 ![在弹出窗口中确认匿名 Git 读取权限设置](/assets/images/enterprise/site-admin-settings/confirm-anonymous-git-read-access-for-specific-repo-as-site-admin.png)
8. 或者，如果要阻止仓库管理员为此仓库更改设置，请选择 **Prevent repository admins from changing anonymous Git read access**。 ![选中复选框可阻止仓库管理员更改此仓库的匿名 Git 读取权限。](/assets/images/enterprise/site-admin-settings/lock_anonymous_git_access_for_specific_repo.png)

{% endif %}
