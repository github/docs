---
title: Externe Mitarbeiter zu Organisations-Repositorys hinzufügen
intro: Du kannst Personen, die nicht Mitglieder deiner Organisation sind, den Zugriff auf Repositorys gewähren, die deine Organisation besitzt.
redirect_from:
- /articles/adding-outside-collaborators-to-repositories-in-your-organization
- /github/setting-up-and-managing-organizations-and-teams/adding-outside-collaborators-to-repositories-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Add outside collaborator
permissions: People with admin access to a repository can add an outside collaborator to the repository.
ms.openlocfilehash: caac79aba845f433effd3a3461e739d07cee135b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "145130737"
---
## Informationen zu externen Projektmitarbeitern

Ein*e externe*r Projektmitarbeiter*in ist eine Person, die kein Mitglied deiner Organisation ist, aber Zugriff auf eine oder mehrere Repositorys deiner Organisation hat. Du kannst die Zugriffsstufe auswählen, die für jede*n externe*n Projektmitarbeiter*in gewährt werden soll. {% data reusables.organizations.outside_collaborator_forks %}

{% data reusables.organizations.outside-collaborators-use-seats %}

{% ifversion fpt %} Organisationen, die {% data variables.product.prodname_ghe_cloud %} verwenden, können die Möglichkeit einschränken, Projektmitarbeiter einzuladen. Weitere Informationen findest du unter [Festlegen von Berechtigungen zum Hinzufügen von externen Projektmitarbeitern](/enterprise-cloud@latest/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators) in der Dokumentation für {% data variables.product.prodname_ghe_cloud %}.
{% else %} Ein Organisationsbesitzer kann die Möglichkeit einschränken, Projektmitarbeiter einzuladen. Weitere Informationen findest du unter [Festlegen von Berechtigungen zum Hinzufügen externer Mitarbeiter](/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators).
{% endif %}

{% ifversion ghes %} Bevor du jemanden als externen Projektmitarbeiter zu einem Repository hinzufügen kannst, muss die Person über ein persönliches Konto an {% data variables.product.product_location %} verfügen. Wenn dein Unternehmen ein externes Authentifizierungssystem wie SAML oder LDAP verwendet, muss sich die Person, die du hinzufügen möchtest, über dieses System anmelden, um ein Konto zu erstellen. Wenn die Person keinen Zugriff auf das Authentifizierungssystem hat und die integrierte Authentifizierung für dein Unternehmen aktiviert ist, kann ein*e Siteadministrator*in ein Konto für die Person erstellen. Weitere Informationen findest du unter [Konfigurieren der integrierten Authentifizierung](/admin/identity-and-access-management/using-built-in-authentication/configuring-built-in-authentication).
{% endif %}

{% ifversion not ghae %} Wenn deine Organisation zweistufige Authentifizierung erfordert, müssen alle externen Projektmitarbeiter*innen die zweistufige Authentifizierung aktivieren, bevor sie deine Einladung zur Zusammenarbeit an einem Repository akzeptieren. Weitere Informationen findest du unter [Erfordern der zweistufigen Authentifizierung in deiner Organisation](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization).
{% endif %}

## Hinzufügen von externen Projektmitarbeitern zu einem Repository

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %} In deinen Repositoryeinstellungen kannst du externen Projektmitarbeiter*innen Zugriff auf ein Repository gewähren. Weitere Informationen findest du [Teams und Personen mit Zugriff auf dein Repository verwalten](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#inviting-a-team-or-person). {% else %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
5. Klicke auf der linken Randleiste auf **Mitarbeiter & Teams**.
  ![Seitenleiste der Repository-Einstellungen, wobei „Projektmitarbeiter und Teams“ hervorgehoben ist](/assets/images/help/repository/org-repo-settings-collaborators-and-teams.png)
6. Gib unter „Projektmitarbeiter“ den Namen der Person ein, der du Zugriff auf das Repository gewähren möchtest, und klicke dann auf **Projektmitarbeiter hinzufügen**.
![Der Bereich „Projektmitarbeiter“ mit eingegebenem Octocat-Benutzernamen im Suchfeld](/assets/images/help/repository/org-repo-collaborators-find-name.png)
7. Verwende das Dropdownmenü neben dem Namen des neuen Projektmitarbeiter bzw. der neuen Mitarbeiterin, und wähle die entsprechende Zugriffsebene aus.
![Die Repository-Berechtigungsauswahl](/assets/images/help/repository/org-repo-collaborators-choose-permissions.png) {% endif %}
