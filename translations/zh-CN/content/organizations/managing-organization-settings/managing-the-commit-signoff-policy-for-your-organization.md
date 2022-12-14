---
title: 管理组织的提交签核策略
intro: '你可以要求用户自动签核他们在 {% data variables.product.product_name %} 的 Web 界面中对组织拥有的存储库所做的所有提交。'
versions:
  feature: commit-signoffs
permissions: Organization owners can require all commits to repositories owned by the organization be signed off by the commit author.
topics:
  - Organizations
shortTitle: Manage the commit signoff policy
ms.openlocfilehash: 3d567d9f592758a2a9998df07556c4f2a04a852c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108211'
---
## 关于提交签核

为了确认提交符合管理存储库的规则和许可，许多组织要求开发人员在每次提交时进行签核。 如果组织需要提交签核，你可以通过为经由 {% data variables.product.product_name %} 的 Web 界面提交的用户启用强制提交签核来使签核成为提交过程中无缝的一部分。 为组织启用强制提交签核后，通过 {% data variables.product.product_name %} 的 Web 界面对该组织中的存储库进行的每个提交都将由提交作者自动签核。

对存储库具有管理员访问权限的人员还可以在存储库级别启用强制提交签核。 有关详细信息，请参阅“[管理存储库的提交签核策略](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-commit-signoff-policy-for-your-repository)”。

{% data reusables.repositories.commit-signoffs %}

## 管理组织的强制提交签核

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.repository-defaults %}
1. 选择或取消选择“要求参与者签核基于 Web 的提交”。
  ![“要求参与者签核基于 Web 的提交”的屏幕截图](/assets/images/help/organizations/require-signoffs.png)
