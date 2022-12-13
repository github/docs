---
title: Intégration de Jira à vos projets personnels
intro: 'Vous pouvez intégrer Jira Cloud à votre compte personnel pour analyser les commits et les demandes de tirage, et créer ainsi des métadonnées et des liens hypertexte appropriés dans les problèmes Jira mentionnés.'
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145164886'
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

## Pour aller plus loin

- [« Intégration de Jira à votre tableau de projet d’organisation »](/articles/integrating-jira-with-your-organization-project-board)
- <a href="https://confluence.atlassian.com/adminjiracloud/connect-jira-cloud-to-github-814188429.html" data-proofer-ignore>Connecter Jira Cloud à GitHub</a> (documentation Atlassian)
