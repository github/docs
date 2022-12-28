---
title: 管理组织的自定义存储库角色
intro: 可以为组织创建、编辑或删除自定义存储库角色。
permissions: Organization owners can manage custom repository roles.
versions:
  feature: custom-repository-roles
topics:
  - Organizations
  - Teams
shortTitle: Manage custom roles
redirect_from:
  - /early-access/github/articles/managing-custom-repository-roles-for-an-organization
ms.openlocfilehash: f7f8be4eda3ecf62a1b587a509881f9fee1a463f
ms.sourcegitcommit: ca040a1871ab5e929b596686ef955b02c5afa051
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/02/2022
ms.locfileid: '148130994'
---
{% data reusables.organizations.custom-repo-roles-ghec-only %}

## 关于自定义存储库角色

{% data reusables.organizations.about-custom-repo-roles %} 有关详细信息，请参阅“[关于自定义存储库角色](/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-repository-roles)”。

## 创建存储库角色

要创建新的存储库角色，请向继承的角色添加权限并为自定义角色命名。

{% data reusables.profile.access_profile %} {% data reusables.profile.access_org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.org-list %} {% data reusables.organizations.org-settings-repository-roles %}
5. 单击“创建角色”。
  ![“创建角色”按钮的屏幕截图](/assets/images/help/organizations/repository-role-create-role.png)
4. 在“Name（名称）”下，键入存储库角色的名称。
  ![用于键入存储库角色名称的字段](/assets/images/help/organizations/repository-role-name.png)
5. 在“Description（描述）”下，键入存储库角色的描述。
  ![用于键入存储库角色说明的字段](/assets/images/help/organizations/repository-role-description.png)
6. 在“Choose a role to inherit（选择要继承的角色）”下，选择要继承的角色。
  ![选择存储库角色基础角色选项](/assets/images/help/organizations/repository-role-base-role-option.png)
7. 在“Add Permissions（添加权限）”下，使用下拉菜单选择您希望自定义角色包含的权限。
  ![从存储库角色下拉列表中选择权限级别](/assets/images/help/organizations/repository-role-drop-down.png)
7. 单击“创建角色”。
  ![确认创建存储库角色](/assets/images/help/organizations/repository-role-creation-confirm.png)

## 编辑存储库角色

{% data reusables.profile.access_profile %} {% data reusables.profile.access_org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.org-list %} {% data reusables.organizations.org-settings-repository-roles %}
3. 在要编辑的角色右侧，单击 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}，然后单击“编辑”。
  ![存储库角色下拉菜单中的“编辑”选项](/assets/images/help/organizations/repository-role-edit-setting.png)
4. 编辑，然后单击“更新角色”。
  ![编辑字段和更新存储库角色](/assets/images/help/organizations/repository-role-update.png)

## 删除存储库角色

如果您删除现有存储库角色，则所有具有自定义角色的待处理邀请、团队和用户都将被重新分配给组织的基本权限。

{% data reusables.profile.access_profile %} {% data reusables.profile.access_org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.org-list %} {% data reusables.organizations.org-settings-repository-roles %}
3. 在要删除的角色右侧，单击 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}，然后单击“删除”。
  ![存储库角色下拉菜单中的“编辑”选项](/assets/images/help/organizations/repository-role-delete-setting.png)
4. 查看要删除的角色的更改，然后单击“删除角色”。
  ![确认删除存储库角色](/assets/images/help/organizations/repository-role-delete-confirm.png)
