---
title: Informationen zu benutzerdefinierten Repositoryrollen
intro: Du kannst den Zugriff auf die Repositorys deiner Organisation mit benutzerdefinierten Repositoryrollen genauer steuern.
versions:
  feature: custom-repository-roles
topics:
  - Organizations
  - Teams
shortTitle: About custom roles
ms.openlocfilehash: c4e7f791b9402b45160b31aab2653bf80150ddee
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160688'
---
{% data reusables.organizations.custom-repo-roles-ghec-only %}

## Informationen zu benutzerdefinierten Repositoryrollen

Zum Ausführen von Aktionen für {% data variables.product.product_name %}, z. B. zum Erstellen eines Pull Requests in einem Repository oder zum Ändern der Abrechnungseinstellungen einer Organisation, muss eine Person über ausreichenden Zugriff auf das relevante Konto oder die entsprechende Ressource verfügen. Dieser Zugriff wird mit Berechtigungen gesteuert. Eine Berechtigung ist die Möglichkeit, eine bestimmte Aktion auszuführen. Die Möglichkeit, ein Issue zu löschen, ist beispielsweise eine Berechtigung. Eine Rolle ist eine Reihe von Berechtigungen, die du Personen oder Teams zuweisen kannst.

Innerhalb einer Organisation kannst du Rollen auf Organisations-, Team- und Repositoryebene zuweisen. Weitere Informationen zu den verschiedenen Rollenebenen findest du unter [Rollen in einer Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization).

Du kannst genauere Kontrolle über die Berechtigungen auf Repositoryebene haben, indem du bis zu drei benutzerdefinierte Repositoryrollen erstellst. {% data reusables.organizations.about-custom-repo-roles %} Weitere Informationen findest du unter „[Verwalten benutzerdefinierter Repositoryrollen für eine Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)“.

Nachdem du eine benutzerdefinierte Rolle erstellt hast, können Benutzer*innen mit Administratorzugriff auf ein Repository die Rolle einer Person oder einem Team zuweisen. Weitere Informationen findest du unter [Verwalten des Zugriffs einer Person auf ein Organisationsrepository](/organizations/managing-access-to-your-organizations-repositories/managing-an-individuals-access-to-an-organization-repository) und [Verwalten des Zugriffs eines Teams auf ein Organisationsrepository](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository).

{% ifversion custom-repo-role-api %}

Du kannst auch die REST-API verwenden, um benutzerdefinierte Repositoryrollen zu erstellen und zu verwalten. Weitere Informationen findest du unter [Benutzerdefinierte Repositoryrollen](/rest/orgs/custom-roles).

{% else %}

Du kannst die REST-API auch verwenden, um die in deiner Organisation verfügbaren benutzerdefinierten Repositoryrollen aufzulisten. Weitere Informationen findest du unter [API für benutzerdefinierte Repositoryrollen](/rest/orgs/custom-roles).

{% endif %}

## Informationen zur geerbten Rolle

Wenn du eine benutzerdefinierte Repositoryrolle erstellst, beginnst du mit einer geerbten Rolle aus einer Reihe vordefinierter Optionen. Die geerbte Rolle bestimmt die anfänglichen Berechtigungen für die benutzerdefinierte Rolle. Anschließend kannst du die Rolle weiter anpassen, indem du zusätzliche Berechtigungen für sie auswählst. Eine vollständige Liste der verfügbaren Berechtigungen findest du unter [Zusätzliche Berechtigungen für benutzerdefinierte Rollen](#additional-permissions-for-custom-roles).

Deine Optionen für die geerbte Rolle werden für verschiedene Arten von Mitwirkenden in deinem Repository standardisiert.

| Geerbte Rolle | Vorgesehener Zweck |
|----|----|
| **Lesen** | Personen, die nicht zum Code beitragen und sich das Projekt nur ansehen oder darüber sprechen möchten |
| **Eingrenzung** | Mitwirkende, die ohne Schreibzugriff proaktiv Issues und Pull Requests verwalten müssen |
| **Schreiben** | Organisationsmitglieder und Projektmitarbeiter*innen, die aktiv an dein Projekt pushen |
| **Verwalten** | Projektmanager*innen, die das Repository ohne Zugriff auf vertrauliche oder destruktive Aktionen verwalten müssen |

## Beispiele für benutzerdefinierte Rollen

Hier findest du einige Beispiele für benutzerdefinierte Repositoryrollen, die du konfigurieren kannst.

| Benutzerdefinierte Repositoryrolle | Zusammenfassung | Geerbte Rolle | Zusätzliche Berechtigungen |
|----|----|----|----|
| Security Engineer | Kann am Code mitwirken und die Sicherheitspipeline verwalten | **Verwalten** | Löschen von Ergebnissen des Codescans |
| Contractor | Kann Webhooks-Integrationen entwickeln | **Schreiben** | Verwalten von Webhooks |
| Community-Manager | Kann alle Communityinteraktionen durchführen, ohne Code beitragen zu können | **Lesen** | - Markieren eines Issue als Duplikat <br> - Verwalten von GitHub-Seiteneinstellungen <br> - Verwalten von Wiki-Einstellungen <br> - Festlegen der Vorschau für soziale Netzwerke <br> - Bearbeiten von Repositorymetadaten <br> - Triagediskussionen |

## Zusätzliche Berechtigungen für benutzerdefinierte Rollen

Nachdem du eine geerbte Rolle ausgewählt hast, kannst du zusätzliche Berechtigungen für deine benutzerdefinierte Rolle auswählen.

Du kannst nur zusätzliche Berechtigungen auswählen, die noch nicht in der geerbten Rolle enthalten sind. Wenn die geerbte Rolle beispielsweise **Schreibzugriff** auf ein Repository bietet, ist die Berechtigung „Pull Request schließen“ bereits in der geerbten Rolle enthalten.

{% ifversion discussions %}
### Diskussionen

- Erstellen einer Diskussionskategorie
- Bearbeiten einer Diskussionskategorie
- Löschen einer Diskussionskategorie 
- Markieren oder Aufheben der Markierung von Diskussionsantworten 
- Ausblenden oder Einblenden von Diskussionskommentaren 
- Konvertieren von Issues in Diskussionen 

Weitere Informationen findest du unter [{% data variables.product.prodname_discussions %}](/discussions).
{% endif %}

### Issue und Pull Requests

- Zuweisen oder Entfernen eines Benutzers 
- Hinzufügen oder Entfernen einer Bezeichnung 

### Problem

- Schließen eines Issue
- Nochmaliges Öffnen eines geschlossenen Issue
- Löschen eines Issue
- Markieren eines Issue als Duplikat

### Pull Request

- Schließen eines Pull Request
- Nochmaliges Öffnen eines geschlossenen Pull Request
- Anfordern einer Pull-Request-Review

### Repository

- Festlegen von Meilensteinen
- Verwalten von Wiki-Einstellungen 
- Verwalten von Projekteinstellungen
- Verwalten von Pull Request-Zusammenführungseinstellungen 
- Verwalten von {% data variables.product.prodname_pages %}-Einstellungen (siehe [Konfigurieren einer Veröffentlichungsquelle für deine {% data variables.product.prodname_pages %}-Website](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site))
- Verwalten von Webhooks 
- Verwalten von Bereitstellungsschlüsseln 
- Bearbeiten von Repositorymetadaten {%- ifversion ghec %}
- Festlegen von Interaktionsgrenzwerten {%- endif %}
- Festlegen der Vorschau für soziale Netzwerke 
- Pushen von Commits in geschützte Branches (Branchschutzregeln gelten weiterhin)
- Erstellen geschützter Tags
- Löschen geschützter Tags {%- ifversion bypass-branch-protections %}
- Umgehen des Branchschutzes {%- endif %}

### Sicherheit

- Anzeigen von {% data variables.product.prodname_code_scanning %}-Ergebnissen 
- Schließen oder erneutes Öffnen von {% data variables.product.prodname_code_scanning %}-Ergebnissen
- Löschen von {% data variables.product.prodname_code_scanning %}-Ergebnissen 
- Anzeigen von {% data variables.product.prodname_dependabot_alerts %} 
- Schließen oder erneutes Öffnen von {% data variables.product.prodname_dependabot_alerts %} 
- Anzeigen von {% data variables.product.prodname_secret_scanning %}-Ergebnissen 
- Schließen oder erneutes Öffnen von {% data variables.product.prodname_secret_scanning %}-Ergebnissen 

## Rangfolge für unterschiedliche Zugriffsstufen

Wenn eine Person auf verschiedenen Wegen unterschiedliche Zugriffsstufen erhält, z. B. die Teammitgliedschaft und die Basisberechtigungen für eine Organisation, setzt die höchste Zugriffsstufe die anderen außer Kraft. Wenn ein*e Organisationsbesitzer*in Organisationsmitgliedern beispielsweise eine benutzerdefinierte Rolle zuteilt, die die geerbte Rolle „Lesezugriff“ verwendet, und dann ein*e Organisationsbesitzer*in die Basisberechtigung der Organisation auf „Schreibzugriff“ festlegt, verfügt diese benutzerdefinierte Rolle über Schreibzugriff sowie über alle zusätzlichen Berechtigungen, die in der benutzerdefinierten Rolle enthalten sind.

{% data reusables.organizations.mixed-roles-warning %}

Um Probleme durch miteinander im Widerspruch stehende Zugriffsberechtigungen zu lösen, kannst du die Basisberechtigungen deiner Organisation oder den Zugriff des Teams anpassen oder die benutzerdefinierte Rolle bearbeiten. Weitere Informationen findest du unter
  - [Festlegen von Basisberechtigungen für eine Organisation](/github/setting-up-and-managing-organizations-and-teams/setting-base-permissions-for-an-organization).
  - [Verwalten des Teamzugriffs auf ein Organisationsrepository](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository).
  - [Bearbeiten einer Repositoryrolle](#editing-a-repository-role).
