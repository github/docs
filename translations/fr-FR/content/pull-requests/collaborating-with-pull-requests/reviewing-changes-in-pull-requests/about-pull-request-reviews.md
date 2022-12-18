---
title: À propos des révisions de demande de tirage
intro: 'Les révisions permettent aux collaborateurs de commenter les modifications proposées dans les demandes de tirage (pull request), d’approuver les modifications ou de demander d’autres modifications avant la fusion de la demande de tirage. Les administrateurs de dépôt peuvent exiger que toutes les demandes de tirage soient approuvées avant d’être fusionnées.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews
  - /articles/about-pull-request-reviews
  - /github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: About PR reviews
ms.openlocfilehash: b68da308dc1e405f2b8fff5b0dd85dadbeabef80
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146179406'
---
## À propos des révisions de demande de tirage

Une fois une demande de tirage ouverte, toute personne disposant d’un accès *en lecture* peut réviser et commenter les modifications qu’elle propose. Vous pouvez également suggérer des modifications spécifiques de lignes de code, que l’auteur peut appliquer directement à partir de la demande de tirage. Pour plus d’informations, consultez « [Révision des modifications proposées dans une demande de tirage](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request) ».

{% ifversion pull-request-approval-limit %}{% data reusables.pull_requests.code-review-limits %}{% endif %}

Les propriétaires et collaborateurs du dépôt peuvent demander une révision de demande de tirage d’une personne spécifique. Des membres de l’organisation peuvent également demander une révision de demande de tirage d’une équipe disposant d’un accès en lecture au dépôt. Pour plus d’informations, consultez « [Demande d’une révision de demande de tirage](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review) ». Vous pouvez spécifier un sous-ensemble de membres de l’équipe à saisir automatiquement à la place de l’équipe toute entière. Pour plus d’informations, consultez « [Gestion des paramètres de révision du code pour votre équipe](/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team) ».

Les révisions permettent de discuter des modifications proposées et de s’assurer que celles-ci sont conformes aux directives de contribution du dépôt, ainsi qu’à d’autres normes de qualité. Vous pouvez définir quelles personnes ou équipes possèdent certains types ou zones de code dans un fichier CODEOWNERS. Quand une demande de tirage modifie du code ayant un propriétaire défini, cette personne ou équipe sera automatiquement invitée à intervenir en tant que réviseur. Pour plus d’informations, consultez « [À propos des propriétaires de code](/articles/about-code-owners/) ».

{% ifversion fpt or ghec %}Vous pouvez planifier des rappels pour les demandes de tirage à réviser. Pour plus d’informations, consultez « [Gestion des rappels planifiés pour les demandes de tirage](/github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-pull-requests) ».{% endif %}

![En-tête de révision demandant des modifications avec commentaires en ligne](/assets/images/help/pull_requests/review-header-with-line-comment.png)

Une révision a trois statuts possibles :
- **Commenter** : formuler des commentaires généraux sans approuver explicitement les modifications ou demander des modifications supplémentaires.
- **Approuver** : formuler des commentaires et approuver la fusion des modifications proposées dans la demande de tirage.
- **Demander des modifications** : formuler des commentaires qui doivent être traités avant que la demande de tirage puisse être fusionnée.

![Image des statuts de révision](/assets/images/help/pull_requests/pull-request-review-statuses.png)

{% data reusables.repositories.request-changes-tips %}

Vous pouvez afficher toutes les révisions qu’une demande de tirage a reçues dans la chronologie de la conversation, ainsi que les révisions par les propriétaires et collaborateurs du dépôt dans la zone de fusion de la demande de tirage.

![Image des révisions dans une zone de fusion](/assets/images/help/pull_requests/merge_box/pr-reviews-in-merge-box.png)

{% data reusables.search.requested_reviews_search_tip %}

{% data reusables.pull_requests.resolving-conversations %}

## Re-demander une révision

{% data reusables.pull_requests.re-request-review %}

## Révisions requises

{% data reusables.pull_requests.required-reviews-for-prs-summary %} Pour plus d’informations, consultez « [À propos des branches protégées](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging) ».

{% tip %}

**Astuce** : si nécessaire, une personne disposant d’un accès *en administration* ou *en écriture* à un dépôt peut ignorer une révision de demande de tirage. Pour plus d’informations, consultez « [Abandonner une revue de demande de tirage](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review) ».

{% endtip %}

## Pour aller plus loin

- « [Révision des modifications proposées dans une demande de tirage](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request) »
- « [Affichage d’une révision de demande de tirage](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/viewing-a-pull-request-review) »
- « [Définition de recommandations pour les contributeurs de dépôt](/articles/setting-guidelines-for-repository-contributors) »
