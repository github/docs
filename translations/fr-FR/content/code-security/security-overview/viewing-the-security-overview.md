---
title: Affichage de la vue d’ensemble de la sécurité
intro: Accédez aux différentes vues disponibles dans la vue d’ensemble de la sécurité
permissions: '{% data reusables.security-overview.permissions %}'
product: '{% data reusables.gated-features.security-overview %}'
allowTitleToDifferFromFilename: true
versions:
  ghae: '>= 3.4'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Security overview
  - Advanced Security
  - Alerts
  - Organizations
  - Teams
shortTitle: View the security overview
ms.openlocfilehash: bc802d290406bb4e480050ee21bb7a4687475d97
ms.sourcegitcommit: 094dff459fcbf7d0634930e02405606dfffd7f0a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/12/2022
ms.locfileid: '148163218'
---
{% ifversion ghes < 3.5 or ghae %} {% data reusables.security-overview.beta %} {% endif %}

{% data reusables.security-overview.information-varies-GHAS %}

## Affichage de la vue d’ensemble de la sécurité pour une organisation

{% data reusables.security-overview.beta-org-risk-coverage %}

{% ifversion security-overview-org-risk-coverage %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.security-overview %}
1. Choisissez la vue d’ensemble que vous souhaitez afficher parmi les options de la barre latérale.
1. Utilisez les filtres déroulants et la zone de recherche pour vous concentrer sur les informations qui vous intéressent le plus. Les vues « Risque de sécurité » et « Couverture de sécurité » ont également un en-tête interactif que vous pouvez utiliser pour filtrer les résultats.

  ![Capture d’écran de la vue Risque de sécurité avec l’en-tête interactif mis en surbrillance](/assets/images/help/security-overview/security-risk-interactive-header.png)

{% else %}

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.security-overview %}
1. Pour afficher des informations d’agrégation sur les types d’alertes, cliquez sur **Afficher plus**.
  ![Bouton Afficher plus](/assets/images/help/security-overview/security-overview-show-more-button.png) {% data reusables.organizations.filter-security-overview %} {% ifversion security-overview-alert-views %} {% data reusables.organizations.security-overview-feature-specific-page %} ![Capture d’écran de la page spécifique à l’analyse du code](/assets/images/help/security-overview/security-overview-code-scanning-alerts.png) {% endif %}

{% endif %}

{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %}
## Affichage de la vue d’ensemble de la sécurité pour une entreprise

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
1. Dans la barre latérale gauche, cliquez sur {% octicon "shield" aria-label="The shield icon" %} **Sécurité du code**.
{% ifversion security-overview-feature-specific-alert-page %} {% data reusables.organizations.security-overview-feature-specific-page %} {% endif %}

{% endif %}

{% ifversion ghes < 3.7 or ghae < 3.7 %}
## Affichage de la vue d’ensemble de la sécurité pour une équipe

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team-security-overview %} {% data reusables.organizations.filter-security-overview %} {% endif %}
