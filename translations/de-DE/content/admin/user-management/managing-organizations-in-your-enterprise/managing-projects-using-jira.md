---
title: Verwalten von Projekten mithilfe von Jira
intro: 'Du kannst Jira mit {% data variables.product.product_name %} zur Projektverwaltung integrieren.'
redirect_from:
  - /enterprise/admin/guides/installation/project-management-using-jira
  - /enterprise/admin/articles/project-management-using-jira
  - /enterprise/admin/developer-workflow/managing-projects-using-jira
  - /enterprise/admin/developer-workflow/customizing-your-instance-with-integrations
  - /enterprise/admin/user-management/managing-projects-using-jira
  - /admin/user-management/managing-projects-using-jira
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Project management
shortTitle: Project management with Jira
ms.openlocfilehash: da1a02894bf8c916089de94a8642396ba7ceabe4
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145104167'
---
## Verbinden von Jira mit einer {% data variables.product.prodname_enterprise %}-Organisation

1. Melde dich bei deinem {% data variables.product.prodname_enterprise %}-Konto unter „http[s]://[hostname]/login“ an. Wenn du bereits angemeldet bist, klicke oben links auf das {% data variables.product.prodname_dotcom %}-Logo.
2. Klicke unter dem {% data variables.product.prodname_dotcom %}-Logo auf dein Profilsymbol, und wähle die Organisation aus, die du mit Jira verbinden möchtest.

  ![Auswählen einer Organisation](/assets/images/enterprise/orgs-and-teams/profile-select-organization.png)

3. Klicke auf den Link **Einstellungen für _Organisationsname_ bearbeiten**.

  ![Bearbeiten von Organisationseinstellungen](/assets/images/enterprise/orgs-and-teams/edit-organization-settings.png)

4. Klicke in der linken Seitenleiste unter **Entwicklereinstellungen** auf **OAuth-Apps**.

  ![Auswählen von OAuth-Apps](/assets/images/enterprise/orgs-and-teams/organization-dev-settings-oauth-apps.png)

5. Klicke auf die Schaltfläche **Neue Anwendung registrieren**.

  ![Schaltfläche „Neue Anwendung registrieren“](/assets/images/enterprise/orgs-and-teams/register-oauth-application-button.png)

6. Trage die Anwendungseinstellungen ein:
    - Gib im Feld **Anwendungsname** „Jira“ oder einen beliebigen Namen ein, mit dem du die Jira-Instanz identifizieren möchtest.
    - Gib im Feld **Homepage-URL** die vollständige URL deiner Jira-Instanz ein.
    - Gib im Feld **Autorisierungsrückruf-URL** die vollständige URL deiner Jira-Instanz ein.
7. Klicke auf **Anwendung registrieren**.
8. Notiere dir die **Client-ID** und den **geheimen Clientschlüssel**, die oben auf der Seite zu finden sind. Du benötigst diese Angaben zum Konfigurieren deiner Jira-Instanz.

## Konfiguration der Jira-Instanz

1. Melde dich in deiner Jira-Instanz bei einem Konto mit Administratorzugriff an.
2. Klicke oben auf der Seite auf das Symbol für „Einstellungen“ (Zahnrad), und wähle **Anwendungen** aus.

  ![Auswählen von „Anwendungen“ in Jira-Einstellungen](/assets/images/enterprise/orgs-and-teams/jira/jira-applications.png)

3. Klicke in der linken Seitenleiste unter **Integrationen** auf **DVCS-Konten**.

  ![Jira-Menü „Integrationen“ – DVCS-Konten](/assets/images/enterprise/orgs-and-teams/jira/jira-integrations-dvcs.png)

4. Klicke auf **Bitbucket Cloud- oder {% data variables.product.prodname_dotcom %}-Konto verknüpfen**.

  ![Verknüpfen des GitHub-Kontos mit Jira](/assets/images/enterprise/orgs-and-teams/jira/jira-link-github-account.png)

5. Gib im modalen Feld **Neues Konto hinzufügen** deine {% data variables.product.prodname_enterprise %}-Einstellungen ein:
    - Wähle in der Dropdownliste **Host** die Option **{% data variables.product.prodname_enterprise %}** aus.
    - Gib im Feld **Team- oder Benutzerkonto** den Namen deiner {% data variables.product.prodname_enterprise %}-Organisation oder deines Benutzerkontos ein.
    - Gib im Feld **OAuth-Schlüssel** die Client-ID deiner {% data variables.product.prodname_enterprise %}-Entwickleranwendung ein.
    - Gib im Feld **OAuth-Geheimnis** den geheimen Clientschlüssel für deine {% data variables.product.prodname_enterprise %}-Entwickleranwendung ein.
    - Wenn du die deiner {% data variables.product.prodname_enterprise %}-Organisation oder deinem Benutzerkonto gehörenden neuen Repositorys nicht verknüpfen möchtest, hebe die Auswahl von **Neue Repositorys automatisch verknüpfen** auf.
    - Wenn du Smart Commits nicht aktivieren möchtest, hebe die Auswahl von **Smart Commits aktivieren** auf.
    - Klicken Sie auf **Hinzufügen**.
6. Überprüfe die Berechtigungen, die du deinem {% data variables.product.prodname_enterprise %}-Konto erteilst, und klicke auf **Anwendung autorisieren**.
7. Gib zum Fortfahren bei Bedarf dein Kennwort ein.
