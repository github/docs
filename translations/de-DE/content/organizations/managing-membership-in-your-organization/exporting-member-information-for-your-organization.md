---
title: Exportieren von Mitgliedsinformationen für deine Organisation
intro: Du kannst Informationen zu Mitgliedern in deiner Organisation direkt über die Benutzeroberfläche exportieren.
permissions: Organization owners can export member information for their organization.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Export member information
ms.openlocfilehash: 2777e125f5eb43bfcf8ec1172db29fe7338bdbad
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145101504'
---
Du kannst Informationen zu Mitgliedern in deiner Organisation exportieren. Dies ist nützlich, wenn du Benutzer innerhalb der Organisation überwachen möchtest.

Die exportierten Informationen umfassen:
- Benutzernamen- und Anzeigenamendetails
- Ob der Benutzer die zweistufige Authentifizierung aktiviert hat
- Ob die Mitgliedschaft öffentlich oder privat ist
- Ob der Benutzer ein Organisationsbesitzer oder Mitglied ist
- Datum und Uhrzeit der letzten Aktivität des Benutzers (eine vollständige Liste der relevanten Aktivitäten findest du unter [Verwalten ruhender Benutzer](/admin/user-management/managing-users-in-your-enterprise/managing-dormant-users))
- Die SAML-NameID des Benutzers, sofern verfügbar

Du kannst Mitgliederinformationen direkt über die {% data variables.product.product_name %}-Benutzeroberfläche oder mit APIs abrufen. In diesem Artikel wird erläutert, wie du Mitgliederinformationen aus {% data variables.product.product_name %} abrufst.

Weitere Informationen zu den APIs findest du in der [GraphQL-API](/graphql/reference/objects#user)- und [REST-API](/rest/reference/users)-Dokumentation zu Benutzern.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.people-export %}
