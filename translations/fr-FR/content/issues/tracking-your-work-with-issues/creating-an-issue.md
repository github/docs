---
title: Création d’un problème
intro: Les problèmes peuvent être créés de différentes façons. Vous pouvez donc choisir la méthode la plus pratique pour votre workflow.
permissions: 'People with read access can create an issue in a repository where issues are enabled. {% data reusables.enterprise-accounts.emu-permission-repo %}'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/creating-an-issue
  - /articles/creating-an-issue
  - /github/managing-your-work-on-github/creating-an-issue
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/opening-an-issue-from-a-comment
  - /github/managing-your-work-on-github/opening-an-issue-from-a-comment
  - /issues/tracking-your-work-with-issues/creating-issues/opening-an-issue-from-a-comment
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/opening-an-issue-from-code
  - /articles/opening-an-issue-from-code
  - /github/managing-your-work-on-github/opening-an-issue-from-code
  - /issues/tracking-your-work-with-issues/creating-issues/opening-an-issue-from-code
  - /issues/tracking-your-work-with-issues/creating-issues/about-automation-for-issues-and-pull-requests-with-query-parameters
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/about-automation-for-issues-and-pull-requests-with-query-parameters
  - /articles/about-automation-for-issues-and-pull-requests-with-query-parameters
  - /github/managing-your-work-on-github/about-automation-for-issues-and-pull-requests-with-query-parameters
  - /issues/tracking-your-work-with-issues/creating-issues/creating-an-issue
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Project management
shortTitle: Create an issue
type: how_to
ms.openlocfilehash: 21bef9325848b6242b505a8c28ec65483b36448f
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147410082'
---
Les problèmes peuvent être utilisés pour suivre les bogues, les améliorations ou d’autres demandes. Pour plus d’informations, consultez « [À propos des problèmes](/issues/tracking-your-work-with-issues/about-issues) ».

{% data reusables.repositories.administrators-can-disable-issues %}

## Création d’un problème à partir d’un dépôt

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issues %} {% data reusables.repositories.new_issue %}
1. Si votre dépôt utilise des modèles de problème, cliquez sur **Démarrage** à côté du type de problème que vous souhaitez ouvrir.
  ![Sélectionnez le type de problème que vous souhaitez créer](/assets/images/help/issues/issue_template_get_started_button.png) ou cliquez sur **Ouvrir un problème vide** si le type de problème que vous souhaitez ouvrir ne figure pas dans les options disponibles.
   ![Lien pour ouvrir un problème vide](/assets/images/help/issues/blank_issue_link.png) {% data reusables.repositories.type-issue-title-and-description %} {% data reusables.repositories.assign-an-issue-as-project-maintainer %} {% data reusables.repositories.submit-new-issue %}

## Création d’un problème avec {% data variables.product.prodname_cli %}

{% data reusables.cli.about-cli %} Pour en savoir plus sur {% data variables.product.prodname_cli %}, consultez « [À propos de {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli) ».

Pour créer un problème, utilisez la sous-commande `gh issue create`. Pour ignorer les invites interactives, incluez les indicateurs `--body` et `--title`.

```shell
gh issue create --title "My new issue" --body "Here are more details."
```

Vous pouvez également spécifier des destinataires, des étiquettes, des jalons et des projets.

```shell
gh issue create --title "My new issue" --body "Here are more details." --assignee @me,monalisa --label "bug,help wanted" --project onboarding --milestone "learning codebase"
```

## Création d’un problème à partir d’un commentaire

Vous pouvez ouvrir un nouveau problème à partir d’un commentaire dans un problème ou une demande de tirage. Quand vous ouvrez un problème à partir d’un commentaire, le problème contient un extrait de code indiquant où le commentaire a été initialement publié.

1. Accédez au commentaire à partir duquel vous souhaitez ouvrir un problème.
2. Dans ce commentaire, cliquez sur {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
  ![Bouton Kebab dans le commentaire de revue de la demande de tirage](/assets/images/help/pull_requests/kebab-in-pull-request-review-comment.png)
3. Cliquez sur **Référence dans un nouveau problème**.
  ![Élément de menu Référence dans un nouveau problème](/assets/images/help/pull_requests/reference-in-new-issue.png)
4. Utilisez le menu déroulant « Dépôt » et sélectionnez le dépôt dans lequel vous souhaitez ouvrir le problème.
  ![Liste déroulante du dépôt pour un nouveau problème](/assets/images/help/pull_requests/new-issue-repository.png)
5. Tapez un titre et un corps descriptifs pour le problème.
  ![Titre et corps du nouveau problème](/assets/images/help/pull_requests/new-issue-title-and-body.png)
6. Cliquez sur **Créer un problème**.
  ![Bouton pour créer un problème](/assets/images/help/pull_requests/create-issue.png) {% data reusables.repositories.assign-an-issue-as-project-maintainer %} {% data reusables.repositories.submit-new-issue %}

## Création d’un problème à partir du code

Vous pouvez ouvrir un nouveau problème à partir d’une ou plusieurs lignes de code spécifiques dans un fichier ou une demande de tirage. Quand vous ouvrez un problème à partir du code, le problème contient un extrait indiquant la ligne ou la plage de code que vous avez choisie. Vous ne pouvez ouvrir un problème que dans le même dépôt où le code est stocké.

![Extrait de code rendu dans un problème ouvert à partir du code](/assets/images/help/repository/issue-opened-from-code.png)

{% data reusables.repositories.navigate-to-repo %}
1. Localisez le code que vous souhaitez référencer dans un problème :
    - Pour ouvrir un problème concernant du code dans un fichier, accédez au fichier.
    - Pour ouvrir un problème concernant du code dans une demande de tirage, accédez à celle-ci, puis cliquez sur {% octicon "diff" aria-label="The file diff icon" %} **Fichiers modifiés**. Ensuite, accédez au fichier contenant le code que vous souhaitez inclure dans votre commentaire, puis cliquez sur **Afficher**.
{% data reusables.repositories.choose-line-or-range %}
4. À gauche de la plage de code, cliquez sur {% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %}. Dans le menu déroulant, cliquez sur **Référencer dans le nouveau problème**.
  ![Menu Kebab avec option permettant d’ouvrir un nouveau problème à partir d’une ligne sélectionnée](/assets/images/help/repository/open-new-issue-specific-line.png) {% data reusables.repositories.type-issue-title-and-description %} {% data reusables.repositories.assign-an-issue-as-project-maintainer %} {% data reusables.repositories.submit-new-issue %}

{% ifversion discussions %}

## Création d’un problème à partir d’une discussion

Les personnes disposant d’une autorisation de triage sur un dépôt peuvent créer un problème à partir d’une discussion.

Quand vous créez un problème à partir d’une discussion, le contenu du billet de discussion est automatiquement inclus dans le corps du problème et toutes les étiquettes sont conservées. La création d’un problème à partir d’une discussion ne convertit pas la discussion en problème et ne supprime pas la discussion existante. Pour plus d’informations sur {% data variables.product.prodname_discussions %}, consultez « [À propos des discussions](/discussions/collaborating-with-your-community-using-discussions/about-discussions) ».

{% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. Dans la barre latérale droite, cliquez sur {% octicon "issue-opened" aria-label="The issues icon" %} **Créer un problème à partir d’une discussion**.
   ![Bouton pour créer un problème à partir de la discussion](/assets/images/help/discussions/create-issue-from-discussion.jpg) {% data reusables.repositories.type-issue-title-and-description %} {% data reusables.repositories.assign-an-issue-as-project-maintainer %} {% data reusables.repositories.submit-new-issue %}

{% endif %}

## Création d’un problème à partir d’une note de tableau de projet

Si vous utilisez un tableau de projet pour suivre et hiérarchiser votre travail, vous pouvez convertir les notes du tableau de projet en problèmes. Pour plus d’informations, consultez « [À propos des tableaux de projet](/github/managing-your-work-on-github/about-project-boards) » et « [Ajout de notes à un tableau de projet](/github/managing-your-work-on-github/adding-notes-to-a-project-board#converting-a-note-to-an-issue) ».

{% ifversion fpt or ghec %}

## Création d’un problème à partir d’un élément de liste de tâches

Dans un problème, vous pouvez utiliser des listes de tâches pour diviser le travail en tâches plus petites et suivre l’ensemble du travail jusqu’à sa complétion. Si une tâche nécessite une discussion ou un suivi plus approfondi, vous pouvez convertir la tâche en problème en pointant sur la tâche et en cliquant sur {% octicon "issue-opened" aria-label="The issue opened icon" %} dans le coin supérieur droit de la tâche. Pour plus d’informations, consultez « [À propos des listes de tâches](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists) ».

{% endif %}

## Création d’un problème à partir d’une requête d’URL

Vous pouvez utiliser des paramètres de requête pour ouvrir des problèmes. Les paramètres de requête sont des éléments facultatifs d’URL que vous pouvez personnaliser pour partager une vue de page web spécifique, comme des résultats de filtre de recherche ou un modèle de problème sur {% data variables.product.prodname_dotcom %}. Pour créer vos propres paramètres de requête, vous devez faire correspondre la paire clé-valeur.

{% tip %}

**Astuce :** Vous pouvez également créer des modèles de problème qui s’ouvrent avec des étiquettes, des destinataires et un titre de problème par défaut. Pour plus d’informations, consultez « [Utilisation de modèles pour encourager les problèmes et demandes de tirage utiles](/communities/using-templates-to-encourage-useful-issues-and-pull-requests) ».

{% endtip %}

Vous devez disposer des autorisations appropriées pour chaque action dont vous voulez utiliser le paramètre de requête équivalent. Par exemple, vous devez avoir l’autorisation d’ajouter une étiquette à un problème pour utiliser le paramètre de requête `labels`. Pour plus d’informations, consultez « [Rôles de dépôt pour une organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization) ».

Si vous créez une URL non valide avec des paramètres de requête, ou si vous n’avez pas les autorisations appropriées, l’URL renvoie une page d’erreur `404 Not Found`. Si vous créez une URL qui dépasse la limite du serveur, l’URL retourne une page d’erreur `414 URI Too Long`.

Paramètre de requête. | Exemple
---  | ---
`title` | `https://github.com/octo-org/octo-repo/issues/new?labels=bug&title=New+bug+report` crée un problème avec l’étiquette « bug » et le titre « New bug report ».
`body` | `https://github.com/octo-org/octo-repo/issues/new?title=New+bug+report&body=Describe+the+problem.` crée un problème avec le titre « New bug report » et le commentaire « Describe the problem » dans le corps du problème.
`labels` | `https://github.com/octo-org/octo-repo/issues/new?labels=help+wanted,bug` crée un problème avec les étiquettes « help wanted » et « bug ».
`milestone` | `https://github.com/octo-org/octo-repo/issues/new?milestone=testing+milestones` crée un problème avec le jalon « testing milestones ».
`assignees` | `https://github.com/octo-org/octo-repo/issues/new?assignees=octocat` crée un problème et l’affecte à @octocat.
`projects` | `https://github.com/octo-org/octo-repo/issues/new?title=Bug+fix&projects=octo-org/1` crée un problème avec le titre « Bug fix » et l’ajoute au tableau de projet 1 de l’organisation.
`template` | `https://github.com/octo-org/octo-repo/issues/new?template=issue_template.md` crée un problème avec un modèle dans le corps du problème. Le paramètre de requête `template` fonctionne avec des modèles stockés dans un sous-répertoire `ISSUE_TEMPLATE` dans le répertoire racine, `docs/` ou `.github/` d’un dépôt. Pour plus d’informations, consultez « [Utilisation de modèles pour encourager les problèmes et demandes de tirage utiles](/communities/using-templates-to-encourage-useful-issues-and-pull-requests) ».

{% ifversion code-scanning-task-lists %}
## Création d’un problème à partir d’une alerte {% data variables.product.prodname_code_scanning %}

{% data reusables.code-scanning.beta-alert-tracking-in-issues %} Si vous utilisez des problèmes pour suivre et hiérarchiser votre travail, vous pouvez utiliser des problèmes pour suivre les alertes {% data variables.product.prodname_code_scanning %}.
{% data reusables.code-scanning.alert-tracking-link %}

{% endif %}

## Pour aller plus loin

- « [Écriture sur GitHub](/github/writing-on-github) »
