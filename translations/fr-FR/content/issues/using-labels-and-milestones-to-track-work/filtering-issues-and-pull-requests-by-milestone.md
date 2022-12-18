---
title: Filtrage des problèmes et des demandes de tirage par jalon
intro: 'Les problèmes et les demandes de tirage peuvent être filtrés en fonction du jalon auquel ils sont associés. Une fois que vous avez [associé un problème ou une demande de tirage à un jalon](/articles/associating-milestones-with-issues-and-pull-requests), vous pouvez trouver des éléments en fonction de leurs jalons. Dans un jalon, vous pouvez prioriser les problèmes et les demandes de tirage.'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-milestones/filtering-issues-and-pull-requests-by-milestone
  - /articles/filtering-issues-and-pull-requests-by-milestone
  - /github/managing-your-work-on-github/filtering-issues-and-pull-requests-by-milestone
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Filter by milestone
ms.openlocfilehash: 6eda4a52df3212b37c3052832291f03aa2285fd5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145128634'
---
{% tip %}

**Conseils :**

- Si vous préférez filtrer les problèmes et les demandes de tirage à l’aide de la barre de recherche, vous pouvez utiliser la syntaxe de recherche des jalons. Pour un jalon appelé « My Milestone », la syntaxe de recherche sera : `milestone:"My Milestone"`.
- Pour effacer votre sélection de filtre, cliquez sur **Effacer la requête de recherche, les filtres et les tris actuels**.
-  Vous pouvez également filtrer les problèmes ou les demandes de tirage à l’aide de {% data variables.product.prodname_cli %}. Pour plus d’informations, consultez « [`gh issue list`](https://cli.github.com/manual/gh_issue_list) » ou « [`gh pr list`](https://cli.github.com/manual/gh_pr_list) » dans la documentation {% data variables.product.prodname_cli %}.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %}
3. Sélectionnez **Jalons** pour afficher la liste de tous les jalons disponibles pour le dépôt.
  ![Bouton Jalons](/assets/images/help/issues/issues_milestone_button.png)
4. Sélectionnez le jalon qui vous intéresse dans la liste. Dans la page du jalon, vous pouvez afficher des informations pertinentes concernant le jalon, y compris tous les problèmes et toutes les demandes de tirage associés. Pour plus d’informations, consultez « [À propos des jalons](/articles/about-milestones) ».

## Pour aller plus loin

- « [Filtrage et recherche des problèmes et demandes de tirage](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests) »
- « [Filtrage des cartes d’un tableau de projet](/articles/filtering-cards-on-a-project-board) »
