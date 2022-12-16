---
title: Teamsynchronisierung
intro: 'Mit der Teamsynchronisierungs-API kannst du Verbindungen zwischen {% data variables.product.product_name %}-Teams und externen Identitätsanbietergruppen verwalten.'
versions:
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 6a5d379b1050e10f9e31e14ed2b094a684676737
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147067162'
---
## Informationen zur Teamsynchronisierungs-API

Um diese API verwenden zu können, müssen authentifizierte Benutzer*innen entweder Teamverwalter*innen oder Besitzer*innen der Organisation sein, die dem Team zugeordnet ist. Das Token, das du zum Authentifizieren verwendest, muss auch für die Verwendung mit deinem IdP-Anbieter (SSO) autorisiert werden. Weitere Informationen findest du unter [Autorisieren eines persönlichen Zugriffstokens für die Verwendung in einer Organisation, die SAML-SSO verwendet](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on).

Du kannst GitHub-Teammitglieder über deinen IdP mit der Teamsynchronisierung verwalten. Die Teamsynchronisierung muss aktiviert sein, damit du die Teamsynchronisierungs-API verwenden kannst. Weitere Informationen findest du unter [Synchronisieren von Teams zwischen deinem Identitätsanbieter und GitHub](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization).

{% note %}

**Hinweis:** Die Teamsynchronisierungs-API kann nicht gemeinsam mit {% data variables.product.prodname_emus %} verwendet werden. Weitere Informationen zum Verwalten einer {% data variables.product.prodname_emu_org %} findest du unter [Externe Gruppen-API](/enterprise-cloud@latest/rest/reference/teams#external-groups).

{% endnote %}
