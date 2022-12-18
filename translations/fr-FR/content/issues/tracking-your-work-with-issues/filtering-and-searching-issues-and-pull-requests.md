---
title: Filtrage et recherche de problèmes et de demandes de tirage
intro: 'Pour trouver des informations détaillées sur un référentiel sur {% data variables.product.product_name %}, vous pouvez filtrer, trier et rechercher des problèmes et des demandes de tirage (pull request) pertinentes pour le référentiel.'
redirect_from:
  - /github/managing-your-work-on-github/finding-information-in-a-repository/filtering-issues-and-pull-requests-by-assignees
  - /articles/filtering-issues-and-pull-requests-by-assignees
  - /github/managing-your-work-on-github/filtering-issues-and-pull-requests-by-assignees
  - /github/managing-your-work-on-github/finding-information-in-a-repository/filtering-issues-and-pull-requests-by-labels
  - /articles/filtering-issues-and-pull-requests-by-labels
  - /github/managing-your-work-on-github/filtering-issues-and-pull-requests-by-labels
  - /github/managing-your-work-on-github/finding-information-in-a-repository/filtering-issues-and-pull-requests
  - /articles/filtering-issues-and-pull-requests
  - /github/managing-your-work-on-github/filtering-issues-and-pull-requests
  - /github/managing-your-work-on-github/finding-information-in-a-repository/filtering-pull-requests-by-review-status
  - /articles/filtering-pull-requests-by-review-status
  - /github/managing-your-work-on-github/filtering-pull-requests-by-review-status
  - /github/managing-your-work-on-github/finding-information-in-a-repository
  - /articles/finding-information-in-a-repository
  - /github/managing-your-work-on-github/finding-information-in-a-repository/sharing-filters
  - /articles/sharing-filters
  - /github/managing-your-work-on-github/sharing-filters
  - /github/managing-your-work-on-github/finding-information-in-a-repository/using-search-to-filter-issues-and-pull-requests
  - /articles/using-search-to-filter-issues-and-pull-requests
  - /github/managing-your-work-on-github/using-search-to-filter-issues-and-pull-requests
  - /github/managing-your-work-on-github/finding-information-in-a-repository/sorting-issues-and-pull-requests
  - /articles/sorting-issues-and-pull-requests
  - /github/managing-your-work-on-github/sorting-issues-and-pull-requests
  - /github/administering-a-repository/finding-information-in-a-repository
  - /github/administering-a-repository/finding-information-in-a-repository/filtering-issues-and-pull-requests
  - /github/administering-a-repository/finding-information-in-a-repository/filtering-issues-and-pull-requests-by-assignees
  - /github/administering-a-repository/finding-information-in-a-repository/filtering-issues-and-pull-requests-by-labels
  - /github/administering-a-repository/finding-information-in-a-repository/filtering-pull-requests-by-review-status
  - /github/administering-a-repository/finding-information-in-a-repository/sorting-issues-and-pull-requests
  - /github/administering-a-repository/finding-information-in-a-repository/using-search-to-filter-issues-and-pull-requests
  - /github/administering-a-repository/finding-information-in-a-repository/sharing-filters
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Issues
  - Pull requests
shortTitle: Filter and search
type: how_to
ms.openlocfilehash: 24f91958f98f4b6744ee3b21bf3d748aef062eb6
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107596'
---
{% data reusables.cli.filter-issues-and-pull-requests-tip %}

## Filtrage de problèmes et de demandes de tirage

Les problèmes et les demandes de tirage sont assortis d’un ensemble de filtres par défaut que vous pouvez appliquer pour organiser vos référencements.

{% data reusables.search.requested_reviews_search %}

Vous pouvez filtrer les problèmes et les demandes de tirage pour trouver :
- L’ensemble des problèmes et des demandes de tirage ouverts
- Les problèmes et les demandes de tirage que vous avez créés
- Les problèmes et les demandes de tirage qui vous sont affectés
- Les problèmes et les demandes de tirage où vous êtes [ **@mentioned**](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)

{% data reusables.cli.filter-issues-and-pull-requests-tip %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %}
3. Cliquez sur **Filtres** pour choisir le type de filtre qui vous intéresse.
  ![Utilisation de la liste déroulante Filtres](/assets/images/help/issues/issues_filter_dropdown.png)

## Filtrage des problèmes et des demandes de tirage par destinataire

Une fois que vous avez [affecté un problème ou une demande de tirage à quelqu’un](/articles/assigning-issues-and-pull-requests-to-other-github-users), vous pouvez trouver des éléments en fonction de qui travaille dessus.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %}
3. Dans l’angle supérieur droit, sélectionnez le menu déroulant Destinataire.
4. Le menu déroulant Destinataire répertorie toutes les personnes disposant d’un accès en écriture à votre dépôt. Cliquez sur le nom de la personne dont vous souhaitez voir les éléments affectés, ou cliquez sur **Affecté à personne** pour voir quels problèmes ne sont pas affectés.
![Utilisation de l’onglet déroulant Destinataires](/assets/images/help/issues/issues_assignee_dropdown.png)

{% tip %}

Pour effacer votre sélection de filtre, cliquez sur **Effacer la requête de recherche, les filtres et les tris actuels**.

{% endtip %}

## Filtrage des problèmes et des demandes de tirage par étiquettes

Une fois que vous avez [appliqué des étiquettes à un problème ou à une demande de tirage](/articles/applying-labels-to-issues-and-pull-requests), vous pouvez trouver des éléments en fonction de leurs étiquettes.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %} {% data reusables.project-management.labels %}
4. Dans la liste des étiquettes, cliquez sur une étiquette pour voir les problèmes et les demandes de tirage auxquels elle a été appliquée.
  ![Liste des étiquettes d’un dépôt](/assets/images/help/issues/labels-page.png)

{% tip %}

**Astuce** : pour effacer votre sélection de filtre, cliquez sur **Effacer la requête de recherche, les filtres et les tris actuels**.

{% endtip %}

## Filtrage des demandes de tirage par état de révision

Vous pouvez utiliser des filtres pour répertorier des demandes de tirage par état de révision, et trouver des demandes de tirage que vous avez révisées ou que d’autres personnes vous ont demandé de réviser.

Vous pouvez filtrer la liste des demandes de tirage d’un dépôt à trouver :
- Demandes de tirage qui n’ont pas encore été [révisées](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)
- Demandes de tirage qui [requièrent une révision](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging) avant fusion
- Demandes de tirage qu’un réviseur a approuvées
- Demandes de tirage dans lesquelles un réviseur a demandé des modifications
- Demandes de tirage que vous avez révisées
- Demandes de tirage que quelqu’un vous a demandé directement de réviser
- Demandes de tirage que [quelqu’un vous a demandé, ou a demandé à une équipe dont vous êtes membre, de réviser](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review)

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}
3. Dans l’angle supérieur droit, sélectionnez le menu déroulant Révisions.
  ![Menu déroulant Révisions dans le menu filtre au-dessus de la liste des demandes de tirage](/assets/images/help/pull_requests/reviews-filter-dropdown.png)
4. Choisissez un filtre pour trouver toutes les demandes de tirage ayant l’état de ce filtre.
  ![Liste des filtres dans le menu déroulant Révisions](/assets/images/help/pull_requests/pr-review-filters.png)

## Utilisation d’une recherche pour filtrer les problèmes et les demandes de tirage

Vous pouvez utiliser des filtres avancés pour rechercher des problèmes et des demandes de tirage répondant à des critères spécifiques.

### Recherche de problèmes et de demandes de tirage

{% webui %}

La barre de recherche de problèmes et de demandes de tirage vous permettent de définir vos propres filtres personnalisés et de trier sur un vaste éventail de critères. Vous trouverez la barre de recherche sous les onglets **Problèmes** et **Demandes de tirage** de chaque dépôt, ainsi que sur vos [tableaux de bord Problèmes et Demandes de tirage](/articles/viewing-all-of-your-issues-and-pull-requests).

![Barre de recherche de problèmes et de demandes de tirage](/assets/images/help/issues/issues_search_bar.png)

{% tip %}

**Astuce :** {% data reusables.search.search_issues_and_pull_requests_shortcut %}

{% endtip %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Vous pouvez utiliser la {% data variables.product.prodname_cli %} pour rechercher des problèmes ou des demandes de tirage. Utilisez ou sous-commande `gh issue list` ou `gh pr list` avec l’argument `--search` et une requête de recherche.

Par exemple, vous pouvez répertorier dans l’ordre de la date de création tous les problèmes qui n’ont pas de destinataire et ont l’étiquette `help wanted` ou `bug`.

```shell
gh issue list --search 'no:assignee label:"help wanted",bug sort:created-asc'
```

Vous pouvez également répertorier toutes les demandes de tirage qui mentionnent l’équipe `octo-org/octo-team`.

```shell
gh pr list --search "team:octo-org/octo-team"
```

{% endcli %}

### À propos des termes de recherche

Les termes de recherche de problème et de demande de tirage vous permettent d’effectuer les opérations suivantes :

- Filtrer les problèmes et les demandes de tirage par auteur : `state:open type:issue author:octocat`
- Filtrer les problèmes et les demandes de tirage qui impliquent certaines personnes sans nécessairement en faire [ **@mention**](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) : `state:open type:issue involves:octocat`
- Filtrer les problèmes et les demandes de tirage par destinataire : `state:open type:issue assignee:octocat`
- Filtrer les problèmes et les demandes de tirage par étiquette : `state:open type:issue label:"bug"`
- Filtrer les termes de recherche en utilisant `-` devant le terme : `state:open type:issue -author:octocat`

{% tip %}

**Astuce :** vous pouvez filtrer des problèmes et des demandes de tirage par étiquette à l’aide des opérateurs logiques OR ou AND.
- Pour filtrer des problèmes à l’aide de l’opérateur logique OR, utilisez la syntaxe de virgules : `label:"bug","wip"`.
- Pour filtrer des problèmes à l’aide de l’opérateur logique AND, utilisez des filtres d’étiquette distincts : `label:"bug" label:"wip"`.

{% endtip %}

Pour les problèmes, vous pouvez également utiliser une recherche pour :

- Filtrer des problèmes liés à une demande de tirage (pull request) par une référence fermante : `linked:pr`{% ifversion issue-close-reasons %}
- Problèmes de filtrage par la raison pour laquelle ils ont été fermés : `is:closed reason:complete` ou `is:closed reason:"not planned"`{% endif %}

Pour les demandes de tirage, vous pouvez également utiliser une recherche pour :
- Filtrer des [brouillons](/articles/about-pull-requests#draft-pull-requests) de demande de tirage : `is:draft`
- Filtrer les demandes de tirage qui n’ont pas encore été [révisées](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews) : `state:open type:pr review:none`
- Filtrer les demandes de tirage qui [requièrent une révision](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging) avant fusion : `state:open type:pr review:required`
- Filtrer les demandes de tirage qu’un réviseur a approuvées : `state:open type:pr review:approved`
- Filtrer les demandes de tirage dans lesquelles un réviseur a demandé des modifications : `state:open type:pr review:changes_requested`
- Filtrer les demandes de tirage par [réviseur](/articles/about-pull-request-reviews/) : `state:open type:pr reviewed-by:octocat`
- Filtrer les demandes de tirage selon l’utilisateur spécifique [demandé pour la révision](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review) : `state:open type:pr review-requested:octocat`
- Filtrer les demandes de tirage que quelqu’un vous a demandé directement de réviser : `state:open type:pr user-review-requested:@me`
- Filtrer les demandes de tirage par équipe demandée pour la révision : `state:open type:pr team-review-requested:github/docs`
- Filtrer les demandes de tirage pour trouver celles qui sont liées à un problème que la demande de tirage peut clore : `linked:issue`

## Tri des problèmes et des demandes de tirage

Les filtres peuvent être triés pour fournir de meilleures informations pendant une période spécifique.

Vous pouvez trier n’importe quel affichage filtré par :

* Problèmes ou demandes de tirage dont la création est la plus récente
* Problèmes ou demandes de tirage dont la création est la plus ancienne
* Problèmes ou demandes de tirage les plus commentés
* Problèmes ou demandes de tirage les moins commentés
* Problèmes ou demandes de tirage dont la mise à jour est la plus récente
* Problèmes ou demandes de tirage dont la mise à jour est la plus ancienne
* Réaction la plus ajoutée à des problèmes ou demandes de tirage

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %}
1. Dans l’angle supérieur droit, sélectionnez le menu déroulant Trier.
  ![Utilisation de l’onglet déroulant Trier](/assets/images/help/issues/issues_sort_dropdown.png)

Pour effacer votre sélection de tri, cliquez sur **Trier** > **Plus récent**.

## Partage de filtres

Lorsque vous filtrez ou triez des problèmes et des demandes de tirage, l’URL de votre navigateur est automatiquement mise à jour pour correspondre au nouvel affichage.

Vous pouvez envoyer l’URL générée par les problèmes à n’importe quel utilisateur qui pourra voir l’affichage de filtre que vous voyez.

Par exemple, si vous filtrez sur les problèmes affectés à Hubot et triez sur les problèmes ouverts les plus anciens, votre URL est mise à jour pour ressembler à ceci :

```
/issues?q=state:open+type:issue+assignee:hubot+sort:created-asc
```

## Pour aller plus loin

- « [Recherche de problèmes et de demandes de tirage](/articles/searching-issues) »
