---
title: Ignorer la révision d’une demande de tirage
intro: 'Si votre dépôt nécessite des révisions, vous pouvez ignorer les révisions de demande de tirage (pull request) qui ne sont plus valides ou qui ne peuvent plus être approuvées par le réviseur.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review
  - /articles/dismissing-a-pull-request-review
  - /github/collaborating-with-issues-and-pull-requests/dismissing-a-pull-request-review
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Dismiss a PR review
ms.openlocfilehash: 658f0b69a24c622a3b5f75d6e330d132040d62c5
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147876944'
---
{% data reusables.pull_requests.dismiss_review %} Cette opération change l’état de la révision en commentaire de révision. Quand vous ignorez une révision, vous devez ajouter un commentaire expliquant pourquoi vous l’ignorez. Votre commentaire est ajouté à la conversation de la demande de tirage.

{% data reusables.search.requested_reviews_search %}

{% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.choose-pr-review %}
3. Sous l’onglet « Conversation », faites défiler jusqu’à la révision que vous voulez ignorer, puis cliquez sur {% octicon "chevron-down" aria-label="The down button" %}. ![Icône de chevron dans la zone de fusion](/assets/images/help/pull_requests/merge_box/pull-request-open-menu.png)
4. Cliquez sur {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, puis cliquez sur **Ignorer la révision**.
![Icône des trois points dans la zone de fusion](/assets/images/help/pull_requests/merge_box/pull-request-dismiss-review.png)
5. Tapez la raison pour laquelle vous ignorez la révision, puis cliquez sur **Ignorer la révision**.
  ![Bouton Ignorer la révision](/assets/images/help/pull_requests/merge_box/pull-request-dismiss-review-button.png)

## Pour aller plus loin

- « [À propos des révisions de demande de tirage](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews) »
- « [Révision des modifications proposées dans une demande de tirage](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request) »
- « [À propos des branches protégées](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging) »
