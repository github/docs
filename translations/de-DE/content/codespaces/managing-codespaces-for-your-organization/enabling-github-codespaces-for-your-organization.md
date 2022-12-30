---
title: Aktivieren von GitHub Codespaces für deine Organisation
shortTitle: 'Enable {% data variables.product.prodname_codespaces %}'
intro: 'Du kannst steuern, welche Benutzer in deiner Organisation {% data variables.product.prodname_github_codespaces %} auf Kosten der Organisation nutzen können.'
permissions: 'To alter an organization''s billing settings, you must be an organization owner.'
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization
  - /codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Billing
  - Administrator
ms.openlocfilehash: 992d744e04ae00db4d760b59a9d08d1700846998
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158901'
---
## Informationen zum Aktivieren von {% data variables.product.prodname_github_codespaces %} für deine Organisation

Organisationsbesitzer können steuern, welche Benutzer in der Organisation Codespaces auf Kosten der Organisation erstellen und verwenden können. Informationen zu den Kosten findest du unter [Informationen zur Abrechnung für {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces).

Nur Personen, die Änderungen an ein Repository pushen oder das Repository forken können, können einen Codespace für dieses Repository erstellen. Um Personen das Erstellen von Codespaces für Repositorys im Besitz deiner Organisation zu ermöglichen, musst du Folgendes ausführen:

- Stelle sicher, dass Benutzer*innen mindestens Schreibzugriff auf die Repositorys haben, in denen sie einen Codespace verwenden möchten. Weitere Informationen findest du [Teams und Personen mit Zugriff auf dein Repository verwalten](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository).
- Stelle sicher, dass für deine Organisation keine Zulassungsliste für IP-Adressen aktiviert ist. Weitere Informationen findest du unter [Verwalten zulässiger IP-Adressen für deine Organisation](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization){% ifversion fpt %} in der {% data variables.product.prodname_ghe_cloud %}-Dokumentation.{% else %}.{% endif %}

Damit Personen Codespaces erstellen können, die deiner Organisation in Rechnung gestellt werden, musst du Folgendes ausführen:

- [Festlegen eines Ausgabenlimits](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)
- [Auswählen der Personen, die Codespaces auf Kosten deiner Organisation erstellen können](#choose-who-can-create-codespaces-that-are-billed-to-your-organization)

{% ifversion fpt %} {% note %}

**Hinweis:** Wenn du verifizierte*r Kursleiter*in oder Lehrkraft bist, musst du {% data variables.product.prodname_github_codespaces %} von einem {% data variables.product.prodname_classroom %} aus aktivieren, um deinen {% data variables.product.prodname_codespaces %} Education-Vorteil zu nutzen. Weitere Informationen findest Du unter „[Verwenden von {% data variables.product.prodname_github_codespaces %} mit {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom#about-the-codespaces-education-benefit-for-verified-teachers)“.

{% endnote %} {% endif %}

Standardmäßig kann ein Codespace nur auf das Repository zugreifen, aus dem er erstellt wurde. Wenn Codespaces in deiner Organisation auf andere Organisationsrepositorys zugreifen können sollen, auf die der Ersteller des Codespace Zugriff hat, findest du weitere Informationen unter [Verwalten des Repositoryzugriffs für die Codespaces deiner Organisation](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces).

## Auswählen der Personen, die Codespaces auf Kosten deiner Organisation erstellen können

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.click-codespaces %}
1. Wähle unter „Abrechnung“ eine der folgenden Optionen aus:

   * **Deaktiviert**: Deiner Organisation wird die Codespacenutzung nicht in Rechnung gestellt. Für die Repositorys deiner Organisation erstellte {% data variables.product.prodname_codespaces %} werden mit den einzelnen Benutzern abgerechnet, von denen sie erstellt werden.
   * **Ausgewählte Mitglieder**: Von ausgewählten Mitgliedern für Repositorys deiner Organisation erstellte {% data variables.product.prodname_codespaces %} werden der Organisation in Rechnung gestellt.
   * **Alle Mitglieder**: Von Mitgliedern deiner Organisation für Organisationsrepositorys erstellte {% data variables.product.prodname_codespaces %} werden der Organisation in Rechnung gestellt.
   * **Alle Mitglieder und externe Mitarbeiter**: Von Organisationsmitgliedern und externen Mitarbeitern für Organisationsrepositorys erstellte {% data variables.product.prodname_codespaces %} werden der Organisation in Rechnung gestellt.

   ![Optionsfelder für „Abrechnung“](/assets/images/help/codespaces/codespaces-org-billing-settings.png)

   {% note %}

   **Hinweis**: Wenn du **Alle Mitglieder und externe Mitarbeiter** auswählst, können alle externen Mitarbeiter, die bestimmten Repositorys hinzugefügt wurden, {% data variables.product.prodname_codespaces %} für diese Repositorys auf Kosten deiner Organisation erstellen und verwenden. Weitere Informationen zum Verwalten externer Mitarbeiter*innen findest du unter [Informationen zu externen Mitarbeiter*innen](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization#about-outside-collaborators).

   {% endnote %}

1. Klicke auf **Speichern**.
1. Wenn du **Ausgewählte Mitglieder** ausgewählt hast, wird ein Eingabefeld angezeigt, in dem du die Namen der gewünschten Benutzer eingeben kannst.

   ![Eingabefeld zum Auswählen von Benutzern](/assets/images/help/codespaces/codespaces-org-billing-add-users.png)

## Deaktivieren von {% data variables.product.prodname_codespaces %} für deine Organisation

Du kannst die Erstellung und Verwendung von Codespaces, die deiner Organisation in Rechnung gestellt werden können, verhindern.

{% data reusables.codespaces.codespaces-disabling-org-billing %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.click-codespaces %}
1. Wähle unter „Abrechnung“ die Option **Deaktiviert** aus.

## Festlegen eines Ausgabenlimits

{% data reusables.codespaces.codespaces-spending-limit-requirement %} 

Informationen zum Verwalten und Ändern des Ausgabenlimits deines Kontos findest du unter [Verwalten deines Ausgabenlimits für {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces).
