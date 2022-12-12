---
title: SCIM
intro: Benutzererstellung und Teammitgliedschaften können mithilfe der SCIM-API automatisiert werden.
versions:
  ghes: '>=3.6'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: ef20e958e8a0680425e116f9d7e576291b793766
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107277'
---
{% data reusables.scim.ghes-beta-note %}

{% data reusables.user-settings.enterprise-admin-api-classic-pat-only %}
## Informationen zur SCIM-API

{% data variables.product.product_name %} stellt eine SCIM-API für die Verwendung durch SCIM-fähige Identitätsanbieter (Identity Providers, IdP) bereit. Bei einer Integration mit dem IdP können mithilfe der API Benutzerkonten in einer {% data variables.product.product_name %}-Instanz, die das einmalige Anmelden mit SAML zur Authentifizierung verwendet, automatisch bereitgestellt, verwaltet oder die Bereitstellung aufgehoben werden. Weitere Informationen zum einmaligen Anmelden mit SAML findest du unter [Informationen zu SAML for Enterprise IAM](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam).

Die SCIM-API basiert auf SCIM 2.0. Weitere Informationen findest du in der [Spezifikation](https://www.simplecloud.info/#Specification).

### Endpunkt-URLs für die SCIM-API

Ein Identitätsanbieter kann über die folgende Stamm-URL mit der SCIM-API für eine {% data variables.product.product_name %}-Instanz kommunizieren.

```
{% data variables.product.api_url_code %}/scim/v2/
```

Bei Endpunkt-URLs für die SCIM-API muss die Groß-/Kleinschreibung beachtet werden. Beispielsweise muss der erste Buchstabe des `Users`-Endpunkts großgeschrieben werden.

```shell
GET /scim/v2/Users/{scim_user_id}
```

### Authentifizieren von Aufrufen der SCIM-API

Bei der SCIM-Integration mit dem Identitätsanbieter werden Aktionen im Auftrag eines Unternehmensbesitzers für die {% data variables.product.product_name %}-Instanz ausgeführt. Weitere Informationen findest du unter [Rollen in einem Unternehmen](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owners).

Zur Authentifizierung von Anforderungen an die API ist für die SCIM-Konfiguration beim Identitätsanbieter {% data variables.product.pat_v1 %} mit dem Bereich `admin:enterprise` erforderlich, die der IdP im `Authorization`-Header der Anforderung bereitstellen muss. Weitere Informationen zu {% data variables.product.pat_v1_plural %} findest du unter [Erstellen von {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

{% note %}

**Hinweis**: Unternehmensbesitzer müssen für die Authentifizierung von Anforderungen an die SCIM-API {% data variables.product.pat_v1 %} generieren und verwenden. {% ifversion ghes > 3.8 %}{% data variables.product.pat_v2_caps %} und {% endif %}Aufrufer der GitHub-App werden derzeit nicht unterstützt.

{% endnote %}

### Informationen zur Zuordnung von SAML- und SCIM-Daten
  
Die {% data variables.product.product_name %}-Instanz verknüpft alle Benutzer*innen, die sich erfolgreich über die einmalige Anmeldung mit SAML authentifiziert haben, mit einer SCIM-Identität. Für eine erfolgreiche Verknüpfung der Identitäten müssen der SAML-Identitätsanbieter und die SCIM-Integration für alle Benutzer*innen übereinstimmende SAML-`NameID`- und SCIM-`userName`-Werte verwenden.

{% ifversion ghes > 3.7 %} {% note %}

**Hinweis**: Wenn {% data variables.product.product_name %} Azure AD als SAML-Identitätsanbieter verwendet, überprüft {% data variables.product.product_name %} auch den SCIM-Anspruch `externalId` und den SAML-Anspruch `http://schemas.microsoft.com/identity/claims/objectidentifier`, anstelle von `NameID` und `userName`, um Benutzer*innen abzugleichen. 

{% endnote %} {% endif %}

### Unterstützte SCIM-Benutzerattribute

Die `User`-Endpunkte der SCIM-API unterstützen innerhalb eines Anforderungsparameters die folgenden Attribute.

| Name | type | BESCHREIBUNG |
| :- | :- | :- |
| `displayName` | String | Für Menschen lesbarer Benutzername. |
| `name.formatted` | String | Der vollständige und für die Anzeige formatierte Name des Benutzers/der Benutzerin, einschließlich aller zweiter Vornamen, Titel und Namenszusätze.
| `name.givenName` | String | Der Vorname des Benutzers. |
| `name.familyName` | String | Der Nachname des Benutzers. |
| `userName` | String | Der vom Identitätsanbieter generierte Benutzername des Benutzers/der Benutzerin. Wird vor der Verwendung einer [Normalisierung](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication#about-username-normalization) unterzogen. 
| `emails` | Array | Liste der Benutzer-E-Mails. |
| `roles` | Array | Liste der Benutzerrollen. |
| `externalId` | String | Dieser Bezeichner wird von einem Identitätsanbieter generiert. Du findest die `externalId` für Benutzer*innen entweder beim Identitätsanbieter oder indem du den Endpunkt zum [Auflisten durch SCIM bereitgestellter Identitäten](#list-scim-provisioned-identities-for-an-enterprise) verwendest und nach anderen bekannten Attributen filterst, z. B. dem Benutzernamen oder der E-Mail-Adresse in der {% data variables.product.product_name %}-Instanz. |
| `id` | String | Vom SCIM-Endpunkt der Instanz generierter Bezeichner. |
| `active` | Boolean | Gibt an, ob die Identität aktiv ist (`true`) oder angehalten werden soll (`false`). |

