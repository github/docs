---
title: 在企业帐户中实施仓库管理策略
intro: 企业所有者可为企业帐户拥有的所有组织实施特定仓库管理策略，或允许在每个组织中设置策略。
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /articles/enforcing-repository-management-settings-for-organizations-in-your-business-account/
  - /articles/enforcing-repository-management-policies-for-organizations-in-your-enterprise-account/
  - /articles/enforcing-repository-management-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-repository-management-policies-in-your-enterprise-account
versions:
  free-pro-team: '*'
---
更多信息请参阅“[组织的仓库权限级别](/articles/repository-permission-levels-for-an-organization)”。

### 实施有关默认仓库权限的策略

在您的企业帐户拥有的所有组织中，您可以为组织成员设置默认仓库权限级别（无、读取、写入或管理），或允许所有者在组织级别管理设置。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
4. 在 **Repository policies（仓库策略）**选项卡中的“Default permissions（默认权限）”下，审查有关更改设置的信息。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. 在“Default permissions（默认权限）”下，使用下拉菜单并选择策略。 ![带有仓库权限策略选项的下拉菜单](/assets/images/help/business-accounts/repository-permissions-policy-drop-down.png)

### 实施有关创建仓库的策略

在企业帐户拥有的所有组织中，您可以允许成员创建仓库、将仓库创建限于组织所有者或允许所有者在组织级别管理设置。 如果允许成员创建仓库，您可以选择成员能否创建公共、私有和内部仓库的任意组合。 {% data reusables.repositories.internal-repo-default %} 有关内部仓库的更多信息，请参阅“[创建内部仓库](/articles/creating-an-internal-repository)”。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. 在 **Repository policies（仓库策略）**选项卡中的“Repository creation（仓库创建）”下，审查有关更改设置的信息。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
{% data reusables.enterprise-accounts.repo-creation-policy %}
{% data reusables.enterprise-accounts.repo-creation-types %}
6. 单击 **Save（保存）**。

### 实施有关复刻私有或内部仓库的策略

在企业帐户拥有的所有组织中，您可以允许有权访问私有或内部仓库的人员复刻仓库、永远不允许分支私有或内部仓库，或者允许所有者在组织级别管理设置。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. 在 **Repository policies（仓库策略）**选项卡中的“Repository forking（仓库复刻）”下，审查有关更改设置的信息。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. 在“Repository forking（仓库复刻）”下，使用下拉菜单并选择策略。 ![带有仓库复刻策略选项的下拉菜单](/assets/images/help/business-accounts/repository-forking-policy-drop-down.png)

### 实施有关邀请外部协作者加入仓库的策略

在您的企业帐户拥有的所有组织中，您可以允许成员邀请外部协作者加入仓库、将外部协作者邀请限制为组织所有者或允许所有者在组织级别管理设置。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. 在 **Repository policies（仓库策略）**选项卡中的“Repository invitations（仓库邀请）”下，审查有关更改设置的信息。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. 在“Repository invitations（仓库邀请）”下，使用下拉菜单并选择策略。  
   ![带有外部协作者邀请策略选项的下拉菜单](/assets/images/help/business-accounts/repository-invitation-policy-drop-down.png)

### 实施有关更改仓库可见性的策略

在您的企业帐户拥有的所有组织中，您可以允许具有管理员权限的成员更改仓库的可见性、将仓库可见性更改限制为组织所有者或允许所有者在组织级别管理设置。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. 在 **Repository policies（仓库策略）**选项卡中的“Repository visibility change（仓库可见性更改）”下，审查有关更改设置的信息。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
{% data reusables.enterprise-accounts.repository-visibility-policy %}

### 实施有关删除或转让仓库的策略

在您的企业帐户拥有的所有组织中，您可以允许具有管理员权限的成员删除或转让仓库、将仓库删除和转让限制为组织所有者或允许所有者在组织级别管理设置。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. 在 **Repository policies（仓库策略）**选项卡中的“Repository deletion and transfer（仓库删除和转让）”下，审查有关更改设置的信息。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
{% data reusables.enterprise-accounts.repository-deletion-policy %}

### 实施有关删除议题的策略

在您的企业帐户拥有的所有组织中，您可以允许具有管理员权限的成员删除仓库中的议题、将议题删除限制为组织所有者或允许所有者在组织级别管理设置。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. 在 **Repository policies（仓库策略）**选项卡中的“Repository issue deletion（仓库议题删除）”下，审查有关更改设置的信息。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. 在“Repository issue deletion（仓库议题删除）”下，使用下拉菜单并选择策略。 ![带有议题删除策略选项的下拉菜单](/assets/images/help/business-accounts/repository-issue-deletion-policy-drop-down.png)

### 对默认分支名称实施策略

在企业帐户拥有的所有组织中，您可以为成员创建的任何新仓库设置默认分支名称。 您可以选择在所有组织中强制实施默认分支名称，或允许个别组织设置不同的名称。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. 在 **Repository policies（仓库策略）**选项卡的“Default branch name（默认分支名称）”下，输入新仓库应使用的默认分支名称。 ![输入默认分支名称的文本框](/assets/images/help/business-accounts/default-branch-name-text.png)
4. （可选）要对企业中的所有组织强制实施默认分支名称，请选择 **Enforce across this enterprise（在整个企业中实施）**。 ![强制实施复选框](/assets/images/help/business-accounts/default-branch-name-enforce.png)
5. 单击 **Update（更新）**。 ![更新按钮](/assets/images/help/business-accounts/default-branch-name-update.png)
