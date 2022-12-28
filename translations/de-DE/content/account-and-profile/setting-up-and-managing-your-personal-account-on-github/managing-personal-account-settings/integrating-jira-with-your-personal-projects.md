---
title: Jira in deine persönlichen Projekte integrieren
intro: 'Du kannst Jira Cloud in dein persönliches Konto integrieren, um Commits und Pull Requests zu scannen und relevante Metadaten und Hyperlinks in allen erwähnten Jira-Issues zu erstellen.'
redirect_from:
  - /articles/integrating-jira-with-your-personal-projects
  - /github/setting-up-and-managing-your-github-user-account/integrating-jira-with-your-personal-projects
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/integrating-jira-with-your-personal-projects
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/integrating-jira-with-your-personal-projects
versions:
  ghes: '*'
  ghae: '*'
shortTitle: Integrate Jira with projects
ms.openlocfilehash: bc88d865cd9c1c88caf5498eab330b6f11cd2ec0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145164885'
---
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.oauth_apps %}
1. Klicke auf **Neue Anwendung registrieren**.
2. Gib unter **Anwendungsname** „Jira“ ein.
3. Gib unter **Homepage-URL** die vollständige URL zu deiner Jira-Instanz ein.
4. Gib unter **Autorisierungsrückruf-URL** die vollständige URL zu deiner Jira-Instanz ein.
5. Klicke auf **Anwendung registrieren**.
![Schaltfläche „Anwendung registrieren“](/assets/images/help/oauth/register-application-button.png)
8. Beachte unter **Entwickleranwendungen** die Werte „Client-ID“ und „Geheimer Clientschlüssel“.
![Client-ID und Geheimer Clientschlüssel](/assets/images/help/oauth/client-id-and-secret.png) {% data reusables.user-settings.jira_help_docs %}

## Weiterführende Themen

- [Integrieren von Jira in das Projektboard deiner Organisation](/articles/integrating-jira-with-your-organization-project-board)
- <a href="https://confluence.atlassian.com/adminjiracloud/connect-jira-cloud-to-github-814188429.html" data-proofer-ignore>Verbinden der Jira Cloud mit GitHub</a> (Atlassian-Dokumentation)
