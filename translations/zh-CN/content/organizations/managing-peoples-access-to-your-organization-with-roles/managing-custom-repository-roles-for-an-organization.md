---
title: 管理组织的自定义存储库角色
intro: 通过创建自定义存储库角色，可以更精细地控制对组织存储库的访问。
permissions: Organization owners can manage custom repository roles.
versions:
  feature: custom-repository-roles
topics:
  - Organizations
  - Teams
shortTitle: Custom repository roles
redirect_from:
  - /early-access/github/articles/managing-custom-repository-roles-for-an-organization
ms.openlocfilehash: e37e7822abc378cd91fb719dd472edaf35af4465
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/09/2022
ms.locfileid: '147858682'
---
## 关于自定义存储库角色

要对 {% data variables.product.product_name %} 执行任何操作，例如在存储库中创建拉取请求或更改组织的计费设置，人员必须具有对相关帐户或资源的足够访问权限。 此访问由权限控制。 权限是执行特定操作的能力。 例如，删除问题的能力是一种权限。 角色是你可以分配给个人或团队的一组权限。

在组织内，您可以在组织、团队和存储库级别分配角色。 有关不同级别角色的详细信息，请参阅“[组织中的角色](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)”。

通过创建最多三个自定义存储库角色，可以更精细地控制在存储库级授予的权限。 自定义存储库角色是一组可配置的权限，具有您选择的自定义名称。 创建自定义角色后，对存储库具有管理员访问权限的任何人都可以将该角色分配给个人或团队。 有关详细信息，请参阅“[管理个人对组织存储库的访问](/organizations/managing-access-to-your-organizations-repositories/managing-an-individuals-access-to-an-organization-repository)”和“[管理团队对组织存储库的访问](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)。”

{% ifversion custom-repo-role-api %}

还可以使用 REST API 创建和管理自定义存储库角色。 有关详细信息，请参阅“[自定义存储库角色](/rest/orgs/custom-roles)。”

{% else %}

还可以使用 REST API 列出组织中可用的自定义存储库角色。 有关详细信息，请参阅“[自定义存储库角色 API](/rest/orgs/custom-roles)。”

{% endif %}

## 关于继承的角色

创建自定义存储库角色时，首先从一组预定义选项中选择继承的角色。 继承的角色确定自定义角色中包含的初始权限集。 然后，您可以通过选择其他权限来授予角色，从而进一步自定义角色。 有关可用权限的完整列表，请参阅“[自定义角色的其他权限](#additional-permissions-for-custom-roles)”。

继承角色的选项已针对存储库中不同类型的参与者进行了标准化。

| 继承的角色 | 用途 |
|----|----|
| **读取** | 想要查看或讨论项目的非代码参与者。 |
| **会审** | 需要主动管理问题和在没有写入访问权限的情况下拉取请求的参与者。 |
| **写入** | 积极推动项目的组织成员和协作者。 |
| **维护** | 需要管理存储库而无法访问敏感或破坏性操作的项目经理。

## 自定义角色示例

以下是您可以配置的自定义存储库角色的一些示例。

| 自定义存储库角色 | 总结 | 继承的角色 | 其他权限 |
|----|----|----|----|
| 安全工程师 | 能够贡献代码并维护安全管道 | **维护** | 删除代码扫描结果 |
| 承办商 | 能够开发 web 挂钩集成 | **写入** | 管理 web 挂钩 |
| 社区经理 | 能够处理所有社区互动，而无需贡献代码 | **读取** | - 将问题标记为重复问题 <br> - 管理 GitHub 页面设置 <br> - 管理 Wiki 设置 <br> - 设置社交预览 <br> - 编辑存储库元数据 <br> - 会审讨论 |

## 自定义角色的其他权限

选择继承角色后，您可以为自定义角色选择其他权限。

仅当继承的角色中尚未包含其他权限时，才能选择该权限。 例如，如果继承的角色提供对存储库的写入访问权限，则“关闭拉取请求”权限将已包含在继承的角色中。

{% ifversion discussions %}
### 讨论

- **创建讨论类别**：能够创建新的讨论类别。 有关详细信息，请参阅“[创建新的讨论类别](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions#creating-a-category)”。
- **编辑讨论类别**：能够编辑讨论类别。 有关详细信息，请参阅“[编辑讨论类别](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions#editing-a-category)”。
- **删除讨论类别**：能够删除讨论类别。 有关详细信息，请参阅“[删除讨论类别](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions#deleting-a-category)”。
- **标记或取消标记讨论答案**：如果讨论的类别可接受答案，则能够标记讨论的答案。 有关详细信息，请参阅“[将讨论中的评论标记或取消标记为答案](/discussions/managing-discussions-for-your-community/moderating-discussions#marking-a-comment-as-an-answer)”。 
- **隐藏或取消隐藏讨论评论**：能够在讨论中隐藏和取消隐藏评论。  有关详细信息，请参阅“[审查讨论](/communities/moderating-comments-and-conversations/managing-disruptive-comments#hiding-a-comment)”。
- **将问题转换为讨论**：能够将问题转换为讨论。  有关详细信息，请参阅“[将问题转换为讨论](/discussions/managing-discussions-for-your-community/moderating-discussions#converting-an-issue-to-a-discussion)”。
{% endif %}

### 议题和拉取请求

- **分配或删除用户**：将用户分配给问题或拉取请求，或从问题或拉取请求中删除用户。
- **添加或删除标签**：向问题或拉取请求添加标签，或从问题或拉取请求中删除标签。

### 问题

- **关闭问题**
- **重新打开已关闭的问题**
- **删除问题**
- **将问题标记为重复问题**

### 拉取请求

- **关闭拉取请求**
- **重新打开已关闭的拉取请求**
- **请求拉取请求评审**：请求用户或团队进行评审。

### 存储库

- **设置里程碑**：向问题或拉取请求添加里程碑。
- **管理 Wiki 设置**：为存储库启用 Wiki。
- **管理项目设置**：为存储库启用项目。
- **管理拉取请求合并设置**：选择存储库中允许的合并提交类型，例如合并、压缩或变基。
- **管理 {% data variables.product.prodname_pages %} 设置**：为存储库启用 {% data variables.product.prodname_pages %}，然后选择要发布的分支。 有关详细信息，请参阅“[为 {% data variables.product.prodname_pages %} 站点配置发布源](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)”。
- **管理 Webhook**：将 Webhook 添加到存储库。
- **管理部署密钥**：将部署密钥添加到存储库。
- **编辑存储库元数据**：更新存储库说明以及存储库主题。
{%- ifversion ghec %}
- **设置交互限制**：暂时限制某些用户在公共存储库中发表评论、提出问题或创建拉取请求，以强制在一段时间内执行有限的活动。 有关详细信息，请参阅“[限制存储库中的交互](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)。”
{%- endif %}
- **设置社交预览**：将识别图像添加到存储库，该图像在链接存储库时显示在社交媒体平台上。 有关详细信息，请参阅“[自定义存储库的社交媒体预览](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/customizing-your-repositorys-social-media-preview)”。
- **将提交推送到受保护的分支**：推送到标记为受保护分支的分支。 分支保护规则仍将适用，并可能导致推送遭到拒绝。
- **创建受保护的标记**：创建符合标记保护规则的标记。 有关详细信息，请参阅“[配置标记保护规则](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/configuring-tag-protection-rules)”。
- **删除受保护的标记**：删除符合标记保护规则的标记。 有关详细信息，请参阅“[配置标记保护规则](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/configuring-tag-protection-rules)”。{% ifversion bypass-branch-protections %}
- 绕过分支保护：无需遵守分支保护规则即可推送到受保护分支。{% endif %}

### 安全性

- **查看 {% data variables.product.prodname_code_scanning %} 结果**：能够查看 {% data variables.product.prodname_code_scanning %} 警报。
- **关闭或重新打开 {% data variables.product.prodname_code_scanning %} 结果**：能够关闭或重新打开 {% data variables.product.prodname_code_scanning %} 警报。
- **删除 {% data variables.product.prodname_code_scanning %} 结果**：能够删除 {% data variables.product.prodname_code_scanning %} 警报。
- **查看 {% data variables.product.prodname_dependabot_alerts %}** ：能够查看 {% data variables.product.prodname_dependabot_alerts %}。
- **关闭或重新打开 {% data variables.product.prodname_dependabot_alerts %}** ：能够关闭或重新打开 {% data variables.product.prodname_dependabot_alerts %}。
- **查看 {% data variables.product.prodname_secret_scanning %} 结果**：能够查看 {% data variables.product.prodname_secret_scanning %} 警报。
- **关闭或重新打开 {% data variables.product.prodname_secret_scanning %} 结果**：能够关闭或重新打开 {% data variables.product.prodname_secret_scanning %} 警报。

## 不同级别访问的优先级

如果通过不同的途径（如团队成员身份和组织的基本权限）为某人授予不同级别的访问权限，则最高访问权限将覆盖其他访问权限。 例如，如果组织所有者向组织成员提供使用“读取”继承角色的自定义角色，然后组织所有者将组织的基本权限设置为“写入”，则此自定义角色将具有写入权限以及自定义角色中包含的任何其他权限。

{% data reusables.organizations.mixed-roles-warning %}

要解决冲突的访问权限，您可以调整组织的基本权限或团队的访问权限，或编辑自定义角色。 有关详细信息，请参阅：
  - [为组织设置基本权限](/github/setting-up-and-managing-organizations-and-teams/setting-base-permissions-for-an-organization)
  - “[管理团队对组织存储库的访问](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)”
  - [编辑存储库角色](#editing-a-repository-role)

## 创建存储库角色

要创建新的存储库角色，请向继承的角色添加权限并为自定义角色命名。

{% ifversion ghec %} {% note %}

注意：只有使用 {% data variables.product.prodname_ghe_cloud %} 的组织才能创建自定义存储库角色。 {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %} {% endif %}

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
