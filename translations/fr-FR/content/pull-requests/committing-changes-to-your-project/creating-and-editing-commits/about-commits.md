---
title: À propos des commits
intro: Vous pouvez enregistrer de petits groupes de modifications significatives en tant que validations.
redirect_from:
  - /articles/why-are-my-commits-in-the-wrong-order
  - /github/committing-changes-to-your-project/why-are-my-commits-in-the-wrong-order
  - /github/committing-changes-to-your-project/about-commits
  - /github/committing-changes-to-your-project/creating-and-editing-commits/about-commits
  - /pull-requests/committing-changes-to-your-project/viewing-and-comparing-commits/commit-branch-and-tag-labels
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 6847b0a2e69fb17e648b7841a9ae250eaa9b38fa
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410522'
---
## À propos des commits

{% data reusables.commits.about-commits %}

{% ifversion commit-signoffs %} Si les validations de commits obligatoires sont activées dans le dépôt où vous effectuez des commits et que vous utilisez l’interface web pour vos commits, ces derniers sont automatiquement validés dans le cadre du processus de commit. Pour plus d’informations, consultez « [Gestion de la stratégie de validation de commits pour votre dépôt](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-commit-signoff-policy-for-your-repository) ». {% endif %}

Vous pouvez ajouter un co-auteur aux commits sur lesquels vous collaborez. Pour plus d’informations, consultez « [Création d’un commit avec plusieurs auteurs](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors) ».

{% ifversion fpt or ghec %} Vous pouvez également créer un commit pour le compte d’une organisation. Pour plus d’informations, consultez « [Création d’un commit pour le compte d’une organisation](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-on-behalf-of-an-organization) ».{% endif %}

Le rebasage vous permet de changer une série de commits et de modifier l’ordre des commits dans votre chronologie. Pour plus d’informations, consultez « [À propos du rebasage Git](/github/getting-started-with-github/about-git-rebase) ».

## À propos des branches de commit et des étiquettes

Vous pouvez voir la branche d’un commit en regardant les étiquettes sous le commit dans la page des commits.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.navigate-to-commit-page %}
1. Accédez au commit en cliquant sur le lien du message de commit.
   ![Capture d’écran d’un commit avec le lien du message de commit mis en évidence](/assets/images/help/commits/commit-message-link.png)
2. Pour voir la branche du commit, vérifiez l’étiquette sous le message de commit.
   ![Capture d’écran du commit avec l’indicateur de branche de commit mis en évidence](/assets/images/help/commits/commit-branch-indicator.png)

Si votre commit n’est pas sur la branche par défaut (`main`), l’étiquette montre les branches qui contiennent le commit. Si le commit fait partie d’une demande de tirage non fusionnée, vous pouvez cliquer sur le lien pour accéder à la demande de tirage.

Une fois que le commit est sur la branche par défaut, toutes les étiquettes qui contiennent le commit s’affichent et la branche par défaut est la seule branche listée. Pour plus d’informations sur les étiquettes, consultez « [Principes de base de Git - Étiquetage](https://git-scm.com/book/en/v2/Git-Basics-Tagging) » dans la documentation Git.

![Capture d’écran du commit avec l’étiquette de commit mise en évidence](/assets/images/help/commits/commit-tag-label.png)

{% ifversion commit-tree-view %}

## Utilisation de l’arborescence de fichiers

Vous pouvez utiliser l’arborescence de fichiers pour naviguer entre les fichiers d’une validation.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.navigate-to-commit-page %}
1. Accédez au commit en cliquant sur le lien du message de commit.
   ![Capture d’écran d’un commit avec le lien du message de commit mis en évidence](/assets/images/help/commits/commit-message-link.png)
1. Cliquez sur un fichier dans l’arborescence de fichiers pour afficher la différence de fichier correspondante. Si l’arborescence des fichiers est masquée, cliquez sur {% octicon "sidebar-collapse" aria-label="The sidebar collapse icon" %} pour afficher l’arborescence des fichiers.

  {% note %}

  **Remarque** : l’arborescence de fichiers ne s’affiche pas si la largeur de l’écran est trop étroite ou si la validation ne contient qu’un seul fichier.

  {% endnote %}
  
  ![Capture d’écran de la zone de recherche des fichiers modifiés et de l’arborescence des fichiers mis en évidence](/assets/images/help/repository/file-tree.png)
1. Pour filtrer par chemin d’accès au fichier, entrez une partie ou tout le chemin d’accès du fichier dans la zone de recherche **Filtrer les fichiers modifiés**.

{% endif %}

## Pour aller plus loin
- « [Commit et révision des changements de votre projet](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project#about-commits) » sur {% data variables.product.prodname_desktop %}
