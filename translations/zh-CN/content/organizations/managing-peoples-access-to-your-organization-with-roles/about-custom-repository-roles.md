---
title: 关于自定义存储库角色
intro: 通过自定义存储库角色，可以更精细地控制对组织存储库的访问。
versions:
  feature: custom-repository-roles
topics:
  - Organizations
  - Teams
shortTitle: About custom roles
ms.openlocfilehash: c4e7f791b9402b45160b31aab2653bf80150ddee
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160686'
---
{% data reusables.organizations.custom-repo-roles-ghec-only %}

## 关于自定义存储库角色

要对 {% data variables.product.product_name %} 执行任何操作，例如在存储库中创建拉取请求或更改组织的计费设置，人员必须具有对相关帐户或资源的足够访问权限。 此访问由权限控制。 权限是执行特定操作的能力。 例如，删除问题的能力是一种权限。 角色是你可以分配给个人或团队的一组权限。

在组织内，您可以在组织、团队和存储库级别分配角色。 有关不同级别角色的详细信息，请参阅“[组织中的角色](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)”。

通过创建最多三个自定义存储库角色，可以更精细地控制在存储库级授予的权限。 {% data reusables.organizations.about-custom-repo-roles %} 有关详细信息，请参阅“[管理组织的自定义存储库角色](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)”。

创建自定义角色后，对存储库具有管理员访问权限的任何人都可以将该角色分配给个人或团队。 有关详细信息，请参阅“[管理个人对组织存储库的访问](/organizations/managing-access-to-your-organizations-repositories/managing-an-individuals-access-to-an-organization-repository)”和“[管理团队对组织存储库的访问](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)。”

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
| **读取** | 想要查看或讨论你的项目的非代码参与者 |
| **会审** | 需要主动管理问题和拉取请求，但没有写入权限的参与者 |
| **写入** | 积极推动你的项目的组织成员和协作者 |
| **维护** | 需要管理存储库而又无法访问敏感或破坏性操作的项目经理 |

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

- 创建讨论类别
- 编辑讨论类别
- 删除讨论类别 
- 标记或取消标记讨论答案 
- 隐藏或取消隐藏讨论评论 
- 将问题转化为讨论 

有关详细信息，请参阅“[{% data variables.product.prodname_discussions %}](/discussions)”。
{% endif %}

### 议题和拉取请求

- 分配或删除用户 
- 添加或删除标签 

### 问题

- 关闭问题
- 重新打开已关闭的问题
- 删除问题
- 将问题标记为重复问题

### 拉取请求

- 关闭拉取请求
- 重新打开已关闭的拉取请求
- 请求拉取请求审查

### 存储库

- 设置里程碑
- 管理 Wiki 设置 
- 获取项目设置
- 管理拉取请求合并设置 
- 管理 {% data variables.product.prodname_pages %} 设置（请参阅“[为 {% data variables.product.prodname_pages %} 站点配置发布源](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)”）
- 管理 web 挂钩 
- 管理部署密钥 
- 编辑存储库元数据{%- ifversion ghec %}
- 设置交互限制{%- endif %}
- 设置社交预览 
- 将提交推送到受保护分支（分支保护规则仍然适用）
- 创建受保护的标记
- 删除受保护标记{%- ifversion bypass-branch-protections %}
- 绕过分支保护{%- endif %}

### 安全性

- 查看 {% data variables.product.prodname_code_scanning %} 结果 
- 关闭或重新打开 {% data variables.product.prodname_code_scanning %} 结果
- 删除 {% data variables.product.prodname_code_scanning %} 结果 
- 查看 {% data variables.product.prodname_dependabot_alerts %} 
- 关闭或重新打开 {% data variables.product.prodname_dependabot_alerts %} 
- 查看 {% data variables.product.prodname_secret_scanning %} results 
- 关闭或重新打开 {% data variables.product.prodname_secret_scanning %} 结果 

## 不同级别访问的优先级

如果通过不同的途径（如团队成员身份和组织的基本权限）为某人授予不同级别的访问权限，则最高访问权限将覆盖其他访问权限。 例如，如果组织所有者向组织成员提供使用“读取”继承角色的自定义角色，然后组织所有者将组织的基本权限设置为“写入”，则此自定义角色将具有写入权限以及自定义角色中包含的任何其他权限。

{% data reusables.organizations.mixed-roles-warning %}

要解决冲突的访问权限，您可以调整组织的基本权限或团队的访问权限，或编辑自定义角色。 有关详细信息，请参阅：
  - [为组织设置基本权限](/github/setting-up-and-managing-organizations-and-teams/setting-base-permissions-for-an-organization)
  - “[管理团队对组织存储库的访问](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)”
  - [编辑存储库角色](#editing-a-repository-role)
