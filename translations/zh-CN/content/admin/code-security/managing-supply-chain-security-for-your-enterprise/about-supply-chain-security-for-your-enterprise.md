---
title: 关于企业的供应链安全
intro: 你可以启用可帮助开发人员了解和更新其代码所依赖的依赖项的功能。
shortTitle: About supply chain security
permissions: ''
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Security
  - Dependency graph
ms.openlocfilehash: edfa8c2abecfa4eb7dc797d1dac3a06827fff5d7
ms.sourcegitcommit: 6bd8fe6d49214743f82fa2dc71847c241f140c87
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135693'
---
可以通过{% ifversion ghes %}启用{% elsif ghae %}使用{% endif %} {% data variables.location.product_location %}的依赖项关系图来使用户能够识别其项目的依赖关系。 有关详细信息，请参阅“{% ifversion ghes %}[为企业启用依赖项关系图](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise){% elsif ghae %}[关于依赖项关系图](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph){% endif %}。”

{% data reusables.dependency-review.dependency-review-enabled-ghes %}

还可以通过启用 {% data variables.product.prodname_dependabot_alerts %}{% ifversion ghes %}和 {% data variables.product.prodname_dependabot_updates %}{% endif %}来允许 {% data variables.location.product_location %}上的用户查找并修复其代码依赖关系中的漏洞。 有关详细信息，请参阅“[对企业启用 {% data variables.product.prodname_dependabot %}](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)”。

启用 {% data variables.product.prodname_dependabot_alerts %}后，可以从 {% data variables.location.product_location %}上的 {% data variables.product.prodname_advisory_database %} 查看漏洞数据并手动同步数据。 有关详细信息，请参阅“[查看企业的漏洞数据](/admin/code-security/managing-supply-chain-security-for-your-enterprise/viewing-the-vulnerability-data-for-your-enterprise)”。
