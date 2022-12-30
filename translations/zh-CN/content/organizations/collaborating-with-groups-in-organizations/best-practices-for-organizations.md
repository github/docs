---
title: 组织最佳做法
shortTitle: Best practices
intro: '了解 {% data variables.product.prodname_dotcom %} 为组织推荐的做法。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
ms.openlocfilehash: 015c74d7a69a1feb5c8ff9467a4219753f2cb5eb
ms.sourcegitcommit: c2aa10a61db44ee111c09565b6114dd5c97b6e2e
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163429'
---
## 分配多个所有者

{% data reusables.organizations.org-ownership-recommendation %}有关详细信息，请参阅“[维护组织的所有权连续性](/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization)”。

## 使用团队

建议使用团队来促进组织中的协作。 有关详细信息，请参阅“[关于团队](/organizations/organizing-members-into-teams/about-teams)”。

{% ifversion ghec %} 强烈建议通过标识提供者 (IdP) 管理团队成员身份。 有关详细信息，请参阅[管理组织的团队同步](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)。

{% data reusables.enterprise-accounts.emu-scim-note %} {% endif %}

建议尽可能保持团队可见，并为敏感情况保留机密团队。 有关详细信息，请参阅“[更改团队可见性](/organizations/organizing-members-into-teams/changing-team-visibility)”。

{% ifversion ghec or ghes or ghae %}
## 使用安全概览

{% data reusables.security-overview.about-the-security-overview %} 有关详细信息，请参阅“[关于安全概览](/code-security/security-overview/about-the-security-overview)”。
{% endif %}
