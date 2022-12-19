---
title: Meilleures pratiques pour les organisations
shortTitle: Best practices
intro: 'Découvrez les pratiques recommandées par {% data variables.product.prodname_dotcom %} pour votre organisation.'
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
ms.contentlocale: fr-FR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163439'
---
## Attribuer plusieurs propriétaires

{% data reusables.organizations.org-ownership-recommendation %} Pour plus d’informations, consultez « [Maintien de la continuité de la propriété pour votre organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization) ».

## Utiliser des équipes

Nous vous recommandons de former des équipes pour faciliter la collaboration au sein de votre organisation. Pour plus d’informations, consultez « [À propos des équipes](/organizations/organizing-members-into-teams/about-teams) ».

{% ifversion ghec %} Nous vous recommandons vivement de gérer l’appartenance à une équipe via votre fournisseur d’identité (IdP). Pour plus d’informations, consultez « [Gestion de la synchronisation d’équipe dans l’organisation](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization) ».

{% data reusables.enterprise-accounts.emu-scim-note %} {% endif %}

Nous vous recommandons de garder les équipes visibles dans la mesure du possible et de réserver les équipes secrètes pour les situations sensibles. Pour plus d’informations, consultez « [Modification de la visibilité d’une équipe](/organizations/organizing-members-into-teams/changing-team-visibility) ».

{% ifversion ghec or ghes or ghae %}
## Utiliser la vue d'ensemble de la sécurité

{% data reusables.security-overview.about-the-security-overview %} Pour plus d’informations, consultez « [À propos de la vue d'ensemble de la sécurité](/code-security/security-overview/about-the-security-overview) ».
{% endif %}
