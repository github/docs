---
ms.openlocfilehash: 0ef0e7666a800328e3344636b954096fe0280d8b
ms.sourcegitcommit: b0323777cfe4324a09552d0ea268d1afacc3da37
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 08/17/2022
ms.locfileid: "147580724"
---
{% ifversion ghes > 3.1 or ghes < 3.5 %}

在某些情况下，升级到 GitHub Enterprise Server 3.5 或更高版本的 GitHub Advanced Security 客户可能会注意到 Web UI 和 REST API 中缺少来自机密扫描的警报。 若要确保警报保持可见，请勿在从早期版本升级到 3.5 或更高版本时跳过 3.4。 即将发布的补丁版本将提供 3.5 及更高版本的修补程序。

若要计划到 3.4 的升级，请参阅[升级助手](https://support.github.com/enterprise/server-upgrade)。 [更新日期：2022-08-16]

{% elsif ghes > 3.4 or ghes < 3.7 %}

在某些情况下，升级到 GitHub Enterprise Server {{ currentVersion }} 的 GitHub Advanced Security 客户可能会注意到 Web UI 和 REST API 中缺少来自机密扫描的警报。 若要确保警报保持可见，请勿在升级到最新版本时跳过 3.4。 若要计划到 3.4 的升级，请参阅[升级助手](https://support.github.com/enterprise/server-upgrade)。

- 若要显示组织拥有的所有存储库的缺失警报，组织所有者可以导航到组织的“代码安全和分析”设置，然后单击“启用所有”进行机密扫描。 有关详细信息，请参阅[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization#enabling-or-disabling-a-feature-for-all-existing-repositories)。
- 若要显示单个存储库的缺失警报，具有存储库管理员访问权限的人员可以禁用该存储库，然后为其启用机密扫描。 有关详细信息，请参阅“[管理存储库的安全和分析设置](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)”。

即将发布的补丁版本中将提供此修补程序。 [更新日期：2022-08-16]

{% endif %}
