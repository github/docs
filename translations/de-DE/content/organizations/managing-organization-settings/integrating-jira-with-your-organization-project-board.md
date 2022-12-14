---
title: Jira in das Projektboard Deiner Organisation integrieren
intro: 'Du kannst Jira Cloud in das Konto deiner Organisation integrieren, um Commits und Pull Requests zu scannen und relevante Metadaten und Hyperlinks in allen erwähnten Jira-Issues zu erstellen.'
redirect_from:
  - /articles/integrating-jira-with-your-organization-project-board
  - /github/setting-up-and-managing-organizations-and-teams/integrating-jira-with-your-organization-project-board
versions:
  ghes: '*'
  ghae: '*'
shortTitle: Integrate Jira
ms.openlocfilehash: 0b773dc865373ab006f7c596b50ac81af5d6636a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145125730'
---
{% ifversion ghes > 3.4 or ghae-issue-5658 %} {% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Klicke in der linken Seitenleiste auf **{% octicon "code" aria-label="The code icon" %}- Entwicklereinstellungen** und anschließend auf **OAuth Apps**.
  ![Registerkarte „OAuth-Anwendungen“ in der linken Seitenleiste](/assets/images/help/organizations/org-oauth-applications-ghe.png)
1. Klicke auf **Neue OAuth-App**.
{% else %} {% data reusables.user-settings.access_settings %}
1. Klicke auf der linken Seitenleiste unter **Organisationseinstellungen** auf den Namen Ihrer Organisation.
![Organisationsname in Seitenleiste](/assets/images/help/settings/organization-settings-from-sidebar.png)
1. Klicke in der linken Seitenleiste unter **Entwicklereinstellungen** auf **OAuth-Anwendungen**.
  ![Registerkarte „OAuth-Anwendungen“ in der linken Seitenleiste](/assets/images/help/organizations/org-oauth-applications-ghe.png)
1. Klicke auf **Neue Anwendung registrieren**.
{% endif %}
1. Gib unter **Anwendungsname** „Jira“ ein.
2. Gib unter **Homepage-URL** die vollständige URL zu deiner Jira-Instanz ein.
3. Gib unter **Autorisierungsrückruf-URL** die vollständige URL zu deiner Jira-Instanz ein.
4. Klicke auf **Anwendung registrieren**.
![Schaltfläche „Anwendung registrieren“](/assets/images/help/oauth/register-application-button.png)
9. Notiere dich unter **Anwendungen im Besitz der Organisation** die Werte für „Client-ID“ und „Clientgeheimnis“.
![Client-ID und Geheimer Clientschlüssel](/assets/images/help/oauth/client-id-and-secret.png) {% data reusables.user-settings.jira_help_docs %}

## Weiterführende Themen

- [„Jira in Ihre persönlichen Projekte integrieren“](/articles/integrating-jira-with-your-personal-projects)
- <a href="https://confluence.atlassian.com/adminjiracloud/connect-jira-cloud-to-github-814188429.html" data-proofer-ignore>Verbinden der Jira Cloud mit GitHub</a> (Atlassian-Dokumentation)
