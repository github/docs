---
title: Intégration de Jira à vos projets personnels
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
ms.contentlocale: fr-FR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145086167"
---
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.oauth_apps %}
1. Cliquez sur **Inscrire une nouvelle application**.
2. Sous **Nom de l’application**, tapez « Jira ».
3. Sous **URL de page d’accueil**, tapez l’URL complète de votre instance Jira.
4. Sous **URL de rappel d’autorisation**, tapez l’URL complète de votre instance Jira.
5. Cliquez sur **Register application**.
![Bouton Inscrire l’application](/assets/images/help/oauth/register-application-button.png)
8. Sous **Applications de développeur**, notez les valeurs « ID client » et « Clé secrète client ».
![ID client et Clé secrète client](/assets/images/help/oauth/client-id-and-secret.png) {% data reusables.user-settings.jira_help_docs %}

## <a name="further-reading"></a>Pour aller plus loin

- [« Intégration de Jira à votre tableau de projet d’organisation »](/articles/integrating-jira-with-your-organization-project-board)
- <a href="https://confluence.atlassian.com/adminjiracloud/connect-jira-cloud-to-github-814188429.html" data-proofer-ignore>Connecter Jira Cloud à GitHub</a> (documentation Atlassian)
