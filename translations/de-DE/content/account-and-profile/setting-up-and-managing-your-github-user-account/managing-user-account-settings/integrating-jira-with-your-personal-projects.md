---
title: Jira in Deine persönlichen Projekte integrieren
intro: You can integrate Jira Cloud with your personal account to scan commits and pull requests, creating relevant metadata and hyperlinks in any mentioned Jira issues.
redirect_from:
- /articles/integrating-jira-with-your-personal-projects
- /github/setting-up-and-managing-your-github-user-account/integrating-jira-with-your-personal-projects
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/integrating-jira-with-your-personal-projects
versions:
  ghes: '*'
  ghae: '*'
shortTitle: Integrate Jira with projects
ms.openlocfilehash: a9106d979aa0f219bd20fc5b27042dfe8e81fc8c
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 05/17/2022
ms.locfileid: "145088892"
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

## <a name="further-reading"></a>Weiterführende Themen

- [Jira in das Projektboard deiner Organisation integrieren](/articles/integrating-jira-with-your-organization-project-board)
- <a href="https://confluence.atlassian.com/adminjiracloud/connect-jira-cloud-to-github-814188429.html" data-proofer-ignore>Verbinden der Jira Cloud mit GitHub</a> (Atlassian-Dokumentation)
