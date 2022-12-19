---
title: 机密扫描模式
intro: '支持的机密列表和 {% data variables.product.company_short %} 与之合作的合作伙伴，以防止欺诈性使用意外提交的机密。'
product: '{% data reusables.gated-features.secret-scanning-partner %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: reference
topics:
  - Secret scanning
  - Advanced Security
redirect_from:
  - /code-security/secret-scanning/secret-scanning-partners
ms.openlocfilehash: 5684239d27daef532adf9aec79309d7430525a9e
ms.sourcegitcommit: fc8b57e068b6922b45318029e22ceb3d6c1c3087
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/29/2022
ms.locfileid: '148184502'
---
{% data reusables.secret-scanning.beta %} {% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

{% ifversion fpt or ghec %}
## 关于 {% data variables.product.prodname_secret_scanning %} 模式

{% data variables.product.product_name %} 维护这些不同的 {% data variables.product.prodname_secret_scanning %} 模式：

1. 合作伙伴模式。 用于检测所有公共存储库中的潜在机密。 有关详细信息，请参阅“[合作伙伴模式支持的机密](#supported-secrets-for-partner-patterns)”。
2. 高级安全模式。 用于检测启用了 {% data variables.product.prodname_secret_scanning %} 的存储库中的潜在机密。 {% ifversion ghec %} 有关详细信息，请参阅“[高级安全性支持的机密](#supported-secrets-for-advanced-security)”。{% endif %}{% ifversion secret-scanning-push-protection %}
3. 推送保护模式。 用于检测启用了作为推送保护的 {% data variables.product.prodname_secret_scanning %} 的存储库中的潜在机密。 有关详细信息，请参阅“[推送保护支持的机密](#supported-secrets-for-push-protection)”。{% endif %}

{% ifversion fpt %} 同时使用 {% data variables.product.prodname_ghe_cloud %} 和 {% data variables.product.prodname_GH_advanced_security %} 的组织可以在其存储库上启用 {% data variables.product.prodname_secret_scanning_GHAS %}。 有关这些模式的详细信息，请参阅 [{% data variables.product.prodname_ghe_cloud %} 文档](/enterprise-cloud@latest/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-advanced-security)。
{% endif %}

## 合作伙伴模式支持的机密

{% data variables.product.product_name %} 当前扫描公共存储库，查找由以下服务提供商颁发的机密，并在提交中检测到机密时向相关服务提供商发出警报。 有关 {% data variables.product.prodname_secret_scanning_partner %} 的详细信息，请参阅“[关于 {% data variables.product.prodname_secret_scanning_partner %}](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-partner-patterns)”。

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}

{% data reusables.secret-scanning.partner-secret-list-public-repo %} {% endif %}

{% ifversion ghec or ghae or ghes %}
## 高级安全性支持的机密{% ifversion ghec %} {% endif %}

启用 {% data variables.product.prodname_secret_scanning_GHAS %} 后，{% data variables.product.prodname_dotcom %} 会扫描以下服务提供商颁发的机密。 {% ifversion ghec %}有关 {% data variables.product.prodname_secret_scanning_GHAS %} 的详细信息，请参阅“[关于 About {% data variables.product.prodname_secret_scanning_GHAS %}](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-advanced-security)”。{% endif %}

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}

如果使用 REST API 进行机密扫描，可以使用 `Secret type` 报告来自特定颁发者的机密。 有关详细信息，请参阅“[机密扫描](/enterprise-cloud@latest/rest/secret-scanning)”。
 
{% ifversion ghes or ghae or ghec %} {% note %}

**注意：** 还可以为存储库、组织或企业定义自定义 {% data variables.product.prodname_secret_scanning %} 模式。 有关详细信息，请参阅“[定义 {% data variables.product.prodname_secret_scanning %} 的自定义模式](/code-security/secret-security/defining-custom-patterns-for-secret-scanning)”。

{% endnote %} {% endif %}

{% data reusables.secret-scanning.partner-secret-list-private-repo %} {% endif %}

{% ifversion secret-scanning-push-protection %}
## 推送保护支持的机密

{% data variables.product.prodname_secret_scanning_caps %} 作为推送保护，当前扫描存储库，查找以下服务提供商发布的机密。

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}

{% data reusables.secret-scanning.secret-list-private-push-protection %}

{% endif %}
## 延伸阅读

- [保护存储库](/code-security/getting-started/securing-your-repository)
- “[保护帐户和数据安全](/github/authenticating-to-github/keeping-your-account-and-data-secure)”{%- ifversion fpt or ghec %}
- “[{% data variables.product.prodname_secret_scanning_caps %} 合作伙伴计划](/developers/overview/secret-scanning-partner-program)”{%- else %}
- {% data variables.product.prodname_ghe_cloud %} 文档中的“[{% data variables.product.prodname_secret_scanning_caps %} 合作伙伴计划](/free-pro-team@latest/developers/overview/secret-scanning-partner-program)”{% endif %}
