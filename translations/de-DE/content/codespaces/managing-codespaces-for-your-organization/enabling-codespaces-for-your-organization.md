---
title: Aktivieren von Codespaces für deine Organisation
shortTitle: Enable Codespaces
intro: Du kannst steuern, welche Benutzer*innen in deiner Organisation {% data variables.product.prodname_codespaces %} nutzen können.
product: '{% data reusables.gated-features.codespaces %}'
permissions: To manage user permissions for {% data variables.product.prodname_codespaces %} for an organization, you must be an organization owner.
redirect_from:
- /codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Codespaces
- Permissions
- Administrator
ms.openlocfilehash: bd4518ef6db3887e504b13459abb5c6a682c8659
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 07/13/2022
ms.locfileid: "145106559"
---
## <a name="about-enabling--data-variablesproductprodname_codespaces--for-your-organization"></a>Informationen zum Aktivieren von {% data variables.product.prodname_codespaces %} für deine Organisation

Organisationsbesitzer können steuern, welche Benutzer*innen in der Organisation Codespaces erstellen und verwenden können.

Um Codespaces in deiner Organisation zu verwenden, musst du folgendermaßen vorgehen:

- Stelle sicher, dass Benutzer*innen [mindestens Schreibzugriff](/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization) auf die Repositorys haben, in denen sie einen Codespace verwenden möchten. 
- [Aktiviere {% data variables.product.prodname_codespaces %} für Benutzer*innen in deiner Organisation](#enable-codespaces-for-users-in-your-organization). Du kannst auswählen, ob du {% data variables.product.prodname_codespaces %} für ausgewählte Benutzer*innen oder nur für bestimmte Benutzer*innen zulassen möchtest.
- [Festlegen eines Ausgabenlimits](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)
- Stelle sicher, dass für deine Organisation keine Zulassungsliste für IP-Adressen aktiviert ist. Weitere Informationen findest du unter [Verwalten zulässiger IP-Adressen für deine Organisation](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list){% ifversion fpt %} in der {% data variables.product.prodname_ghe_cloud %}-Dokumentation.{% else %}.{% endif %}

Standardmäßig kann ein Codespace nur auf das Repository zugreifen, aus dem er erstellt wurde. Wenn Codespaces in deiner Organisation auf andere Organisationsrepositorys zugreifen können sollen, auf die auch Codespace-Ersteller*innen zugreifen können, lies [Verwalten von Zugriff und Sicherheit für {% data variables.product.prodname_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces).

## <a name="enable--data-variablesproductprodname_codespaces--for-users-in-your-organization"></a>Aktivieren von {% data variables.product.prodname_codespaces %} für Benutzer*innen in deiner Organisation

{% ifversion fpt %} {% note %}

**Hinweis:** Wenn du verifizierte*r Kursleiter*in oder Lehrkraft bist, musst du {% data variables.product.prodname_codespaces %} von einem {% data variables.product.prodname_classroom %} aus aktivieren, um deinen {% data variables.product.prodname_codespaces %} Education-Vorteil zu nutzen. Weitere Informationen findest du unter [Verwenden von GitHub Codespaces mit GitHub Classroom](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom#about-the-codespaces-education-benefit-for-verified-teachers).

{% endnote %} {% endif %} {% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.click-codespaces %}
1. Wähle unter „Benutzerberechtigungen“ eine der folgenden Optionen aus:

   * **Ausgewählte Benutzer**, um bestimmte Organisationsmitglieder auszuwählen, die {% data variables.product.prodname_codespaces %} verwenden dürfen.
   * **Für alle Mitglieder zulassen**, um alle Organisationsmitglieder für die Verwendung von {% data variables.product.prodname_codespaces %} auszuwählen.
   * **Für alle Mitglieder und externe Mitarbeiter zulassen**, damit alle Mitglieder deiner Organisation sowie externe Mitarbeiter*innen {% data variables.product.prodname_codespaces %} verwenden können.

   ![Optionsfelder für „Benutzerberechtigungen“](/assets/images/help/codespaces/org-user-permission-settings-outside-collaborators.png)

   {% note %}

   **Hinweis**: Wenn du **Für alle Mitglieder und externe Mitarbeiter zulassen** auswählst, können alle externen Mitarbeiter*innen, die zu bestimmten Repositorys hinzugefügt wurden, {% data variables.product.prodname_codespaces %} erstellen und verwenden. Deiner Organisation wird die gesamte Nutzung durch externe Mitarbeiter*innen in Rechnung gestellt. Weitere Informationen zum Verwalten externer Mitarbeiter*innen findest du unter [Informationen zu externen Mitarbeiter*innen](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization#about-outside-collaborators).

   {% endnote %}

1. Klicke auf **Speichern**.

## <a name="disabling--data-variablesproductprodname_codespaces--for-your-organization"></a>Deaktivieren von {% data variables.product.prodname_codespaces %} für deine Organisation

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.click-codespaces %}
1. Wähle unter „Benutzerberechtigungen“ die Option **Deaktiviert** aus.

## <a name="setting-a-spending-limit"></a>Festlegen eines Ausgabenlimits

{% data reusables.codespaces.codespaces-spending-limit-requirement %} 

Informationen zum Verwalten und Ändern des Ausgabenlimits deines Kontos findest du unter [Verwalten deines Ausgabenlimits für {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces).
