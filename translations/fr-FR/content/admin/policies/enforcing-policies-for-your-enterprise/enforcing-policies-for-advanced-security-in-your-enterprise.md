---
title: Application de stratégies pour Advanced Security dans votre entreprise
intro: Vous pouvez appliquer des stratégies pour gérer les fonctionnalités de {% data variables.product.prodname_GH_advanced_security %} au sein des organisations de votre entreprise ou autoriser la définition de stratégies dans chaque organisation.
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
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145104790"
---
## À propos des stratégies pour {% data variables.product.prodname_GH_advanced_security %} dans votre entreprise

{% data reusables.advanced-security.ghas-helps-developers %} Pour plus d’informations, consultez « [À propos de {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) ».

{% ifversion ghes or ghec %}Si vous achetez une licence pour {% data variables.product.prodname_GH_advanced_security %}, toute{% else %}Toute{% endif %} organisation sur {% data variables.product.product_location %} peut utiliser les fonctionnalités d’{% data variables.product.prodname_advanced_security %}. Vous pouvez appliquer des stratégies pour contrôler la façon dont les membres de votre entreprise sur {% data variables.product.product_name %} utilisent {% data variables.product.prodname_advanced_security %}.

## Application d’une stratégie pour l’utilisation de {% data variables.product.prodname_GH_advanced_security %} dans votre entreprise

{% data reusables.advanced-security.about-ghas-organization-policy %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.advanced-security-policies %} {% data reusables.enterprise-accounts.advanced-security-organization-policy-drop-down %} {% data reusables.enterprise-accounts.advanced-security-individual-organization-policy-drop-down %}
