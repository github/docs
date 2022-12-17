---
title: Intégration de Jira avec votre tableau de projet d’organisation
intro: 'Vous pouvez intégrer Jira Cloud à votre compte d’organisation pour analyser les commits et les demandes de tirage (pull request), en créant des métadonnées et des liens hypertexte pertinents dans tous les problèmes Jira mentionnés.'
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145109461'
---
{% ifversion ghes > 3.4 or ghae-issue-5658 %} {% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Dans la barre latérale gauche, sélectionnez **{% octicon "code" aria-label="The code icon" %} Paramètres du développeur**, puis cliquez sur **Applications OAuth**.
  ![Onglet Applications OAuth dans la barre latérale gauche](/assets/images/help/organizations/org-oauth-applications-ghe.png)
1. Cliquez sur **Nouvelle application OAuth**.
{% else %} {% data reusables.user-settings.access_settings %}
1. Dans la barre latérale gauche, sous **Paramètres de l’organisation**, cliquez sur le nom de votre organisation.
![Nom de l’organisation dans la barre latérale](/assets/images/help/settings/organization-settings-from-sidebar.png)
1. Dans la barre latérale gauche, sous **Paramètres du développeur**, cliquez sur **Applications OAuth**.
  ![Onglet Applications OAuth dans la barre latérale gauche](/assets/images/help/organizations/org-oauth-applications-ghe.png)
1. Cliquez sur **Inscrire une nouvelle application**.
{% endif %}
1. Sous **Nom de l’application**, tapez « Jira ».
2. Sous **URL de page d’accueil**, tapez l’URL complète de votre instance Jira.
3. Sous **URL de rappel d’autorisation**, tapez l’URL complète de votre instance Jira.
4. Cliquez sur **Register application**.
![Bouton Inscrire l’application](/assets/images/help/oauth/register-application-button.png)
9. Sous **Applications appartenant à l’organisation**, notez les valeurs « ID client » et « Clé secrète client ».
![ID client et Clé secrète client](/assets/images/help/oauth/client-id-and-secret.png) {% data reusables.user-settings.jira_help_docs %}

## Pour aller plus loin

- [« Intégration de Jira avec vos projets personnels »](/articles/integrating-jira-with-your-personal-projects)
- <a href="https://confluence.atlassian.com/adminjiracloud/connect-jira-cloud-to-github-814188429.html" data-proofer-ignore>Connecter Jira Cloud à GitHub</a> (documentation Atlassian)
