---
title: Création d’une demande de tirage
intro: 'Créez une demande de tirage pour proposer et collaborer sur des modifications apportées à un référentiel. Ces modifications sont proposées dans une *branche*, ce qui garantit que la branche par défaut contient uniquement le travail terminé et approuvé.'
permissions: 'Anyone with read access to a repository can create a pull request. {% data reusables.enterprise-accounts.emu-permission-propose %}'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request
  - /articles/creating-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/creating-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: de387cea338fb927d2baeedd79855eefbdbc82ec
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147110991'
---
Si vous voulez créer une branche pour votre demande de tirage et que vous n’avez pas d’autorisations d’accès en écriture au dépôt, vous pouvez commencer par dupliquer (fork) le dépôt. Pour plus d’informations, consultez « [Création d’une demande de tirage à partir d’une duplication](/articles/creating-a-pull-request-from-a-fork) » et « [À propos des duplications](/articles/about-forks) ».

Vous pouvez spécifier la branche dans laquelle vous voulez fusionner vos changements quand vous créez votre demande de tirage. Vous pouvez ouvrir des demandes de tirage uniquement entre deux branches différentes.

{% data reusables.pull_requests.perms-to-open-pull-request %}

{% data reusables.pull_requests.close-issues-using-keywords %}

## Changement de la plage de branches et du dépôt de destination

Par défaut, les demandes de tirage se basent sur la branche par défaut du dépôt parent. Pour plus d’informations, consultez « [À propos des branches](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch) ».

Si le dépôt parent par défaut n’est pas correct, vous pouvez changer à la fois le dépôt parent et la branche à l’aide des listes déroulantes. Vous pouvez aussi permuter vos branches principale et de base à l’aide des listes déroulantes pour établir des différences entre les points de référence. Les références doivent ici correspondre à des noms de branche inclus dans votre dépôt GitHub.

![Branches d’édition de demande de tirage](/assets/images/help/pull_requests/pull-request-review-edit-branch.png)

En ce qui concerne les branches, n’oubliez pas que la *branche de base* correspond à l’emplacement auquel les changements doivent être appliqués (**où**) et que la *branche principale* contient ce que vous aimeriez appliquer (**quoi**).

Quand vous modifiez le dépôt de base, vous modifiez également les notifications de la demande de tirage. Toute personne en mesure de pousser (push) vers le dépôt de base reçoit une notification par e-mail et voit la nouvelle demande de tirage dans son tableau de bord lors de sa prochaine connexion.

Quand vous modifiez l’une des informations dans la plage de branches, les zones d’aperçu Commit et Fichiers modifiés sont mises à jour pour présenter votre nouvelle plage.

{% tip %}

**Conseils** :
- À l’aide de la vue comparative, vous pouvez configurer des comparaisons sur la période de votre choix. Pour plus d’informations, consultez « [Comparaison des commits](/pull-requests/committing-changes-to-your-project/viewing-and-comparing-commits/comparing-commits) ».
- Les chargés de maintenance du projet peuvent ajouter un modèle de demande de tirage pour un dépôt. Les modèles incluent des invites d’insertion d’informations dans le corps d’une demande de tirage. Pour plus d’informations, consultez « [À propos des modèles de problème et de demande de tirage](/articles/about-issue-and-pull-request-templates) ».

{% endtip %}

## Création de la demande de tirage

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
2. Dans le menu « Branches », choisissez la branche qui contient vos commits.
  ![Menu déroulant Branche](/assets/images/help/pull_requests/branch-dropdown.png) {% data reusables.repositories.new-pull-request %}
4. Utilisez le menu déroulant de la branche de _base_ pour sélectionner la branche dans laquelle fusionner vos changements, puis utilisez le menu déroulant _comparer :_ pour choisir la branche de rubrique dans laquelle vous avez apporté vos changements.
  ![Menus déroulants pour le choix des branches de base et de comparaison](/assets/images/help/pull_requests/choose-base-and-compare-branches.png) {% data reusables.repositories.pr-title-description %} {% data reusables.repositories.create-pull-request %}

{% data reusables.repositories.asking-for-review %}

Une fois votre demande de tirage révisée, vous pouvez la [fusionner dans le dépôt](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request).

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Pour créer une demande de tirage, utilisez la sous-commande `gh pr create`.

```shell
gh pr create
```

Pour affecter une demande de tirage à une personne, utilisez les indicateurs `--assignee` ou `-a`. Vous pouvez utiliser `@me` pour vous affecter la demande de tirage.

```shell
gh pr create --assignee "@octocat"
```

Pour spécifier la branche dans laquelle vous voulez que la demande de tirage soit fusionnée, utilisez les indicateurs `--base` ou `-B`. Pour spécifier la branche qui contient les commits de votre demande de tirage, utilisez les indicateurs `--head` ou `-H`.

```shell
gh pr create --base my-base-branch --head my-changed-branch
```

Pour inclure un titre et un corps dans la nouvelle demande de tirage, utilisez les indicateurs `--title` et `--body`.

```shell
gh pr create --title "The bug is fixed" --body "Everything works again"
```

Pour marquer une demande de tirage en tant que brouillon, utilisez l’indicateur `--draft`.

```shell
gh pr create --draft
```

Pour ajouter des étiquettes ou des jalons à la nouvelle demande de tirage, utilisez les indicateurs `--label` et `--milestone`.

```shell
gh pr create --label "bug,help wanted" --milestone octocat-milestone
```

Pour ajouter la nouvelle demande de tirage à un projet spécifique, utilisez l’indicateur `--project`.

```shell
gh pr create --project octocat-project
```

Pour désigner une personne ou une équipe en tant que réviseurs, utilisez l’indicateur `--reviewer`.

```shell
gh pr create --reviewer monalisa,hubot  --reviewer myorg/team-name
```

Pour créer la demande de tirage dans votre navigateur web par défaut, utilisez l’indicateur `--web`.

```shell
gh pr create --web
```

{% endcli %}

{% desktop %}

{% mac %}

1. Accédez à la branche pour laquelle vous voulez créer une demande de tirage. Pour plus d’informations, consultez « [Basculement entre les branches](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches) ».
2. Cliquez sur **Créer une demande de tirage**. {% data variables.product.prodname_desktop %} ouvre votre navigateur par défaut pour vous permettre d’accéder à {% data variables.product.prodname_dotcom %}.
  ![Bouton Créer une demande de tirage](/assets/images/help/desktop/mac-create-pull-request.png)
4. Sur {% data variables.product.prodname_dotcom %}, vérifiez que la branche dans le menu déroulant **base :** correspond à la branche dans laquelle vous souhaitez fusionner vos changements. Vérifiez que la branche dans le menu déroulant **comparer :** correspond à la branche de rubrique où vous avez apporté vos changements.
  ![Menus déroulants pour le choix des branches de base et de comparaison](/assets/images/help/desktop/base-and-compare-branches.png) {% data reusables.repositories.pr-title-description %} {% data reusables.repositories.create-pull-request %}

{% endmac %}

{% windows %}

1. Accédez à la branche pour laquelle vous voulez créer une demande de tirage. Pour plus d’informations, consultez « [Basculement entre les branches](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches) ».
2. Cliquez sur **Créer une demande de tirage**. {% data variables.product.prodname_desktop %} ouvre votre navigateur par défaut pour vous permettre d’accéder à {% data variables.product.prodname_dotcom %}.
  ![Bouton Créer une demande de tirage](/assets/images/help/desktop/windows-create-pull-request.png)
3. Sur {% data variables.product.prodname_dotcom %}, vérifiez que la branche dans le menu déroulant **base :** correspond à la branche dans laquelle vous souhaitez fusionner vos changements. Vérifiez que la branche dans le menu déroulant **comparer :** correspond à la branche de rubrique où vous avez apporté vos changements.
  ![Menus déroulants pour le choix des branches de base et de comparaison](/assets/images/help/desktop/base-and-compare-branches.png) {% data reusables.repositories.pr-title-description %} {% data reusables.repositories.create-pull-request %}

{% endwindows %}

{% enddesktop %}

{% ifversion fpt or ghec %}

{% codespaces %}

1. Une fois que vous avez commité les changements apportés à votre copie locale du dépôt, cliquez sur l’icône **Créer une demande de tirage**.
![Barre latérale de contrôle de code source avec bouton de préproduction mis en exergue](/assets/images/help/codespaces/codespaces-commit-pr-button.png)
1. Vérifiez que la branche locale, le dépôt à partir duquel vous effectuez la fusion, ainsi que la branche distante et le dépôt distant vers lesquels vous effectuez la fusion sont corrects. Donnez ensuite un titre et une description à la demande de tirage.
![Barre latérale de la demande de tirage GitHub](/assets/images/help/codespaces/codespaces-commit-pr.png)
1. Cliquez sur **Créer**.

Pour plus d’informations sur la création de demandes de tirage dans {% data variables.product.prodname_github_codespaces %}, consultez « [Utilisation de {% data variables.product.prodname_github_codespaces %} pour les demandes de tirage](/codespaces/developing-in-codespaces/using-github-codespaces-for-pull-requests) ».

{% endcodespaces %}

{% endif %}
## Pour aller plus loin

- « [Création d’une demande de tirage à partir d’une duplication](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) »
- « [Maintien de la synchronisation de votre demande de tirage avec la branche de base](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/keeping-your-pull-request-in-sync-with-the-base-branch) »
- « [Changement de la branche de base d’une demande de tirage](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request) »
- « [Ajout de problèmes et de demandes de tirage à un tableau de projet à partir de la barre latérale](/articles/adding-issues-and-pull-requests-to-a-project-board/#adding-issues-and-pull-requests-to-a-project-board-from-the-sidebar) »
- « [À propos de l’automatisation des problèmes et des demandes de tirage avec des paramètres de requête](/issues/tracking-your-work-with-issues/creating-issues/about-automation-for-issues-and-pull-requests-with-query-parameters) »
- « [Affectation de problèmes et demandes de tirage à d’autres utilisateurs GitHub](/issues/tracking-your-work-with-issues/managing-issues/assigning-issues-and-pull-requests-to-other-github-users) »
- « [Écriture sur GitHub](/github/writing-on-github) »
