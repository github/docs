---
title: SCIM
intro: Du kannst den Zugriff der Mitglieder deiner GitHub-Organisation über die SCIM-API steuern und verwalten.
versions:
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/scim
ms.openlocfilehash: 314ed9433ffeb1ef3f189795727a3b654c529c96
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883043'
---
## Informationen zur SCIM-API

### Bereitstellen von SCIM für Organisationen

Die SCIM-API wird von SCIM-fähigen Identitätsanbietern (IdPs) dazu verwendet, das Bereitstellen der Organisationsmitgliedschaft für {% data variables.product.product_name %} zu automatisieren. Die API von {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} basiert auf Version 2.0 des [SCIM-Standard](http://www.simplecloud.info/). Der SCIM-Endpunkt von {% data variables.product.product_name %}, den ein Identitätsanbieter verwenden sollte, lautet: `{% data variables.product.api_url_code %}/scim/v2/organizations/{org}/`.

{% note %}

**Hinweise:** 
  - Die SCIM-API ist nur für einzelne Organisationen verfügbar, die [{% data variables.product.prodname_ghe_cloud %}](/billing/managing-billing-for-your-github-account/about-billing-for-github-accounts) mit aktiviertem [einmaligen SAML-Anmelden](/rest/overview/other-authentication-methods#authenticating-for-saml-sso) verwenden. Weitere Informationen zu SCIM findest du unter [Informationen zu SCIM für Organisationen](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations).
  - Die SCIM-API kann nicht mit einem Unternehmenskonto oder mit einer {% data variables.product.prodname_emu_org %} verwendet werden.

{% endnote %}

### Authentifizieren von Aufrufen der SCIM-API

Du musst dich als Besitzer*in einer Organisation von {% data variables.product.product_name %} authentifizieren, um die zugehörige SCIM-API zu verwenden. Die API erwartet, dass ein [OAuth 2.0 Bearer](/developers/apps/authenticating-with-github-apps)-Token in den Header `Authorization` aufgenommen wird. Du kannst auch ein persönliches Zugriffstoken verwenden, doch du musst es erst [für die Verwendung mit deiner SAML-SSO-Organisation autorisieren](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on).

### Zuordnen von SAML- und SCIM-Daten

{% data reusables.scim.nameid-and-username-must-match %}

### Unterstützte SCIM-Benutzerattribute

Name | type | BESCHREIBUNG
-----|------|--------------
`userName`|`string` | Der Benutzername für den oder die Benutzer*in
`name.givenName`|`string` | Der Vorname des Benutzers.
`name.familyName`|`string` | Der Nachname des Benutzers.
`emails` | `array` | Liste der Benutzer-E-Mails
`externalId` | `string` | Dieser Bezeichner wird vom SAML-Anbieter generiert und als eindeutige ID verwendet, um ihn einem oder einer GitHub-Benutzer*in zuzuordnen. Du findest die `externalID` für Benutzer*innen entweder beim SAML-Anbieter oder indem du den Endpunkt von [Auflisten durch SCIM bereitgestellter Identitäten](#list-scim-provisioned-identities) verwendest und nach anderen bekannten Attributen filterst, z. B. nach dem GitHub-Benutzernamen oder der E-Mail-Adresse.
`id` | `string` | Bezeichner, der vom GitHub-SCIM-Endpunkt generiert wurde
`active` | `boolean` | Gibt an, ob die Identität aktiv (true) ist oder die Bereitstellung aufgehoben werden soll (false)

{% note %}

**Hinweis:** Bei Endpunkt-URLs für die SCIM-API muss die Groß-/Kleinschreibung beachtet werden. Beispielsweise muss der erste Buchstabe des `Users`-Endpunkts großgeschrieben werden:

```shell
GET /scim/v2/organizations/{org}/Users/{scim_user_id}
```

{% endnote %}
