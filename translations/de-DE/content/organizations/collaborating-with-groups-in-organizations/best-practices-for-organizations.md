---
title: Bewährte Methoden für Organisationen
shortTitle: Best practices
intro: 'Lerne die von {% data variables.product.prodname_dotcom %} empfohlenen Vorgehensweisen für deine Organisation kennen.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163440'
---
## Zuweisen mehrerer Besitzer

{% data reusables.organizations.org-ownership-recommendation %} Weitere Informationen findest du unter [Verwalten der Besitzkontinuität für deine Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization).

## Verwenden von Teams

Wir empfehlen die Verwendung von Teams, um die Zusammenarbeit in deinem Unternehmen zu erleichtern. Weitere Informationen findest du unter [Informationen zu Teams](/organizations/organizing-members-into-teams/about-teams).

{% ifversion ghec %} Es wird dringend empfohlen, die Teammitgliedschaft über deinen Identitätsanbieter (IdP) zu verwalten. Weitere Informationen findest du unter [Verwalten der Teamsynchronisierung für deine Organisation](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization).

{% data reusables.enterprise-accounts.emu-scim-note %} {% endif %}

Wir empfehlen, nach Möglichkeit sichtbare Teams zu verwenden und geheime Teams nur für vertrauliche Situationen zu nutzen. Weitere Informationen findest du unter [Ändern der Teamsichtbarkeit](/organizations/organizing-members-into-teams/changing-team-visibility).

{% ifversion ghec or ghes or ghae %}
## Verwenden der Sicherheitsübersicht

{% data reusables.security-overview.about-the-security-overview %} Weitere Informationen findest du unter [Informationen zur Sicherheitsübersicht](/code-security/security-overview/about-the-security-overview).
{% endif %}
