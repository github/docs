---
title: Erzwingen von Richtlinien für Advanced Security in deinem Unternehmen
intro: Du kannst Richtlinien für die Verwaltung von {% data variables.product.prodname_GH_advanced_security %}-Features in den Organisationen deines Unternehmens erzwingen oder Richtlinien in jeder Organisation festlegen lassen.
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145104791"
---
## Informationen zu Richtlinien für {% data variables.product.prodname_GH_advanced_security %} in deinem Unternehmen

{% data reusables.advanced-security.ghas-helps-developers %} Weitere Informationen finden Sie unter [Informationen zu {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security).

{% ifversion ghes or ghec %}Wenn du eine Lizenz für {% data variables.product.prodname_GH_advanced_security %} erwirbst, kann jede beliebige{% else %}Any{% endif %} Organisation für {% data variables.product.product_location %} Features von {% data variables.product.prodname_advanced_security %} verwenden. Du kannst Richtlinien erzwingen, um zu steuern, wie Mitglieder deines Unternehmens in {% data variables.product.product_name %} {% data variables.product.prodname_advanced_security %} verwenden.

## Erzwingen einer Richtlinie für die Verwendung von {% data variables.product.prodname_GH_advanced_security %} in deinem Unternehmen

{% data reusables.advanced-security.about-ghas-organization-policy %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.advanced-security-policies %} {% data reusables.enterprise-accounts.advanced-security-organization-policy-drop-down %} {% data reusables.enterprise-accounts.advanced-security-individual-organization-policy-drop-down %}
