---
title: Anzeigen deiner Codespaces-Nutzung
shortTitle: Viewing your usage
intro: Du kannst die Compute- und Speichernutzung von {% data variables.product.prodname_codespaces %} anzeigen.
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
ms.contentlocale: de-DE
ms.lasthandoff: 07/13/2022
ms.locfileid: "147062034"
---
## <a name="viewing--data-variablesproductprodname_codespaces--usage-for-your-organization"></a>Anzeigen der {% data variables.product.prodname_codespaces %}-Nutzung deiner Organisation

Organisationsinhaber und Abrechnungsmanager können die Nutzung von {% data variables.product.prodname_codespaces %} für eine Organisation anzeigen. Für Organisationen, die von einem Unternehmenskonto verwaltet werden, können die Organisationsinhaber die {% data variables.product.prodname_codespaces %}-Nutzung auf der Abrechnungsseite der Organisation anzeigen, und Unternehmensadministratoren können die Nutzung für das gesamte Unternehmen anzeigen.

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.codespaces-minutes %} {% data reusables.dotcom_billing.actions-packages-report-download-org-account %}

{% ifversion ghec %}
## <a name="viewing--data-variablesproductprodname_codespaces--usage-for-your-enterprise-account"></a>Anzeigen der {% data variables.product.prodname_codespaces %}-Nutzung für dein Unternehmenskonto

Unternehmensinhaber und Abrechnungsmanager können die Nutzung von {% data variables.product.prodname_codespaces %} für ein Unternehmenskonto anzeigen.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. Unter „{% data variables.product.prodname_codespaces %}“ kannst du die Nutzungsdetails für jede Organisation in deinem Unternehmenskonto anzeigen.
{% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %} {% endif %}
