---
title: Affichage de votre utilisation de Codespaces
shortTitle: Viewing your usage
intro: Vous pouvez visualiser les minutes de calcul et le stockage utilisés par {% data variables.product.prodname_codespaces %}.
permissions: To manage billing for Codespaces for an organization, you must be an organization owner or a billing manager.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
- Codespaces
- Billing
ms.openlocfilehash: 025b93aca321b381989a55389ff93fac3cef02c2
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 07/13/2022
ms.locfileid: "147062033"
---
## <a name="viewing--data-variablesproductprodname_codespaces--usage-for-your-organization"></a>Affichage de l’utilisation de {% data variables.product.prodname_codespaces %} pour votre organisation

Les propriétaires d’organisation et les gestionnaires de facturation peuvent afficher l’utilisation de {% data variables.product.prodname_codespaces %} pour une organisation. Pour les organisations gérées par un compte d’entreprise, les propriétaires d’organisation peuvent afficher l’utilisation de {% data variables.product.prodname_codespaces %} dans la page de facturation de l’organisation, tandis que les administrateurs d’entreprise peuvent afficher l’utilisation pour l’ensemble de l’entreprise.

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.codespaces-minutes %} {% data reusables.dotcom_billing.actions-packages-report-download-org-account %}

{% ifversion ghec %}
## <a name="viewing--data-variablesproductprodname_codespaces--usage-for-your-enterprise-account"></a>Affichage de l’utilisation de {% data variables.product.prodname_codespaces %} pour votre compte d’entreprise

Les propriétaires d’entreprise et les gestionnaires de facturation peuvent afficher l’utilisation de {% data variables.product.prodname_codespaces %} pour un compte d’entreprise.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. Sous « {% data variables.product.prodname_codespaces %} », affichez les détails d’utilisation de chaque organisation dans votre compte d’entreprise.
{% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %} {% endif %}
