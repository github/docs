---
title: Rollen in einem Unternehmen
intro: 'Jeder in einem Unternehmen ist Mitglied des Unternehmens. Um den Zugriff auf die Einstellungen und Daten deines Unternehmens zu steuern, kannst du unterschiedliche Rollen für Mitglieder deines Unternehmens zuweisen.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise
  - /github/setting-up-and-managing-your-enterprise-account/roles-for-an-enterprise-account
  - /articles/permission-levels-for-a-business-account
  - /articles/roles-for-an-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
ms.openlocfilehash: 10787e2326f2bb3c4768c5e499d445f65cf9e57d
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/12/2022
ms.locfileid: '146178455'
---
## Informationen zu Rollen in einem Unternehmen

Jeder in einem Unternehmen ist Mitglied des Unternehmens. Du kannst Mitgliedern deines Unternehmens auch Administratorrollen zuweisen. Die einzelnen Administratorrollen sind spezifischen Geschäftsfunktionen zugeordnet und beinhalten Berechtigungen für bestimmte Aufgaben innerhalb des Unternehmens.

{% data reusables.enterprise-accounts.enterprise-administrators %}

{% ifversion ghec %} Wenn {% data variables.product.prodname_emus %} in deinem Unternehmen nicht verwendet werden, kannst du eine Person anhand eines von ihr gesteuerten Benutzerkontos auf {% data variables.product.product_name %} zu einer Administratorrolle einladen. Weitere Informationen findest du unter [Einladen von Personen zum Verwalten deines Unternehmens](/github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise).

In einem Unternehmen mit {% data variables.product.prodname_emus %} müssen neue Besitzer*innen und Mitglieder über deinen Identitätsanbieter bereitgestellt werden. Unternehmensbesitzer und Organisationsbesitzer können dem Unternehmen keine neuen Mitglieder oder Besitzer über {% data variables.product.prodname_dotcom %} hinzufügen. Du kannst die Unternehmensrolle eines Mitglieds mithilfe deines IdP auswählen, und sie kann nicht auf {% data variables.product.prodname_dotcom %} geändert werden. Du kannst die Rolle eines Mitglieds in einer Organisation auf {% data variables.product.prodname_dotcom %} auswählen. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users).
{% else %} Weitere Informationen zum Hinzufügen von Personen zu deinem Unternehmen findest du unter [Authentifizierung](/admin/authentication).

{% endif %}

## Unternehmensbesitzer

Unternehmensbesitzer haben vollständige Kontrolle über das Unternehmen und können jede Aktion durchführen. Hierzu gehören folgende Aufgaben:
- Administratoren verwalten
- {% ifversion ghec %}Hinzufügen und Entfernen von{% elsif ghae or ghes %}Verwalten von{% endif %} Organisationen {% ifversion ghec %}zu bzw. aus{% elsif ghae or ghes %}in{% endif %} einem Unternehmen{% ifversion remove-enterprise-members %}
- Entfernen von Unternehmensmitgliedern aus allen Organisationen im Besitz des Unternehmens{% endif %}
- Enterprise-Einstellungen verwalten
- Organisationsübergreifendes Erzwingen von Richtlinien {% ifversion ghec %}- Verwalten von Abrechnungseinstellungen{% endif %}

{% ifversion enterprise-owner-join-org %} Unternehmensinhaber*innen verfügen standardmäßig nicht über Zugriff auf Organisationseinstellungen oder Inhalte. Um Zugriff zu erhalten, können Unternehmensbesitzer einer beliebigen Organisation beitreten, die ihrem Unternehmen gehört. Weitere Informationen findest du unter [Verwalten deiner Rolle in einer Organisation im Besitz deines Unternehmens](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise).

Besitzer von Organisationen in deinem Unternehmen haben nur dann Zugriff auf das Unternehmen selbst, wenn du sie als Unternehmensbesitzer festlegst.
{% else %} Unternehmensbesitzer können nur dann auf Organisationseinstellungen oder -inhalte zugreifen, wenn sie als Organisationsbesitzer festgelegt werden oder wenn ihnen direkter Zugriff auf das Repository einer Organisation erteilt wird. Ebenso haben Besitzer von Organisationen in deinem Unternehmen nur dann Zugriff auf das Unternehmen selbst, wenn du sie als Unternehmensbesitzer festlegst.
{% endif %}

Ein Unternehmensbesitzer verwendet nur dann eine Lizenz, wenn er Besitzer oder Mitglied von mindestens einer Organisation innerhalb des Unternehmens ist. Auch wenn ein Unternehmensbesitzer in mehreren Organisationen über eine Rolle verfügt, verbraucht er nur eine einzige Lizenz. {% ifversion ghec %}Unternehmensinhaber*innen müssen über ein persönliches Konto auf {% data variables.product.prodname_dotcom %} verfügen.{% endif %} Als bewährte Methode empfehlen wir, nur wenige Personen in deinem Unternehmen als Unternehmensinhaber*in festzulegen, um das Risiko für dein Unternehmen zu verringern.

## Enterprise-Mitglieder

Mitglieder von Organisationen im Besitz deines Unternehmens sind automatisch auch Mitglieder des Unternehmens. Mitglieder können in Organisationen zusammenarbeiten und Organisationsbesitzer sein, sie können jedoch nicht auf Unternehmenseinstellungen zugreifen oder diese konfigurieren{% ifversion ghec %}, auch nicht die Abrechnungseinstellungen{% endif %}.

Personen in deinem Unternehmen können über unterschiedliche Zugriffsebenen für die einzelnen Organisationen im Besitz deines Unternehmens und die Repositorys innerhalb dieser Organisationen verfügen. Du kannst anzeigen, auf welche Ressourcen die einzelnen Personen Zugriff haben. Weitere Informationen findest du unter [Anzeigen von Personen in deinem Unternehmen](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise).

Weitere Informationen zu Berechtigungen auf Organisationsebene findest du unter [Rollen in einer Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization).

Externe Mitarbeiter*innen mit Zugriff auf Repositorys im Besitz deiner Organisation werden ebenfalls auf der Registerkarte „Personen“ deines Unternehmens aufgeführt, sind jedoch keine Unternehmensmitglieder und haben keinerlei Zugriff auf das Unternehmen. Weitere Informationen zu externen Mitarbeitern findest du unter [Rollen in einer Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators).

{% ifversion ghec %}

## Abrechnungsmanager

Abrechnungsmanager*innen haben lediglich Zugriff auf die Abrechnungseinstellungen deines Unternehmens. Abrechnungsmanager*innen für dein Unternehmen können folgende Aufgaben durchführen:
- Benutzerlizenzen, {% data variables.large_files.product_name_short %}-Pakete und andere Abrechnungseinstellungen anzeigen und verwalten
- Liste der Abrechnungsmanager anzeigen
- Andere Abrechnungsmanager hinzufügen oder entfernen

Abrechnungsmanager verbrauchen nur dann eine Lizenz, wenn sie Besitzer oder Mitglied von mindestens einer Organisation innerhalb des Unternehmens ist. Abrechnungsmanager*innen haben keinen Zugriff auf die Organisationen und Repositorys in deinem Unternehmen. Du kannst auch keine Unternehmensinhaber*innen hinzufügen oder entfernen. Abrechnungsmanager müssen über ein persönliches Konto auf {% data variables.product.prodname_dotcom %} verfügen.

## Informationen zu Supportberechtigungen

{% data reusables.enterprise-accounts.support-entitlements %}

## Weiterführende Themen

- [Informationen zu Unternehmenskonten](/admin/overview/about-enterprise-accounts)

{% endif %}
