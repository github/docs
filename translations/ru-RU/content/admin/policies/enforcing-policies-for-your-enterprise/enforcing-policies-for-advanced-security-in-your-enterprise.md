---
title: Применение политик для Advanced Security на предприятии
intro: Вы можете принудительно применить политики для управления функциями {% data variables.product.prodname_GH_advanced_security %} в организациях предприятия или разрешить настройку политик в каждой организации.
permissions: Enterprise owners can enforce policies for {% data variables.product.prodname_GH_advanced_security %} in an enterprise.
product: '{% data reusables.gated-features.ghas %}'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
- Advanced Security
- Code scanning
- Enterprise
- Policies
- Secret scanning
- Security
redirect_from:
- /admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise
- /github/setting-up-and-managing-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise-account
- /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-policies-for-advanced-security-in-your-enterprise-account
shortTitle: Advanced Security policies
ms.openlocfilehash: 1858a854f78695b2fa36e0b84944f2fa05db0d00
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "145116392"
---
## Сведения о политиках для {% data variables.product.prodname_GH_advanced_security %} на предприятии

{% data reusables.advanced-security.ghas-helps-developers %} Дополнительные сведения см. в разделе [Сведения о {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security).

{% ifversion ghes or ghec %}Если вы приобрели лицензию для {% data variables.product.prodname_GH_advanced_security %}, любая{% else %}любая{% endif %} организация в {% data variables.product.product_location %} может использовать функции {% data variables.product.prodname_advanced_security %}. Вы можете применять политики для управления тем, как члены предприятия в {% data variables.product.product_name %} используют {% data variables.product.prodname_advanced_security %}.

## Применение политики для использования {% data variables.product.prodname_GH_advanced_security %} на предприятии

{% data reusables.advanced-security.about-ghas-organization-policy %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.advanced-security-policies %} {% data reusables.enterprise-accounts.advanced-security-organization-policy-drop-down %} {% data reusables.enterprise-accounts.advanced-security-individual-organization-policy-drop-down %}
