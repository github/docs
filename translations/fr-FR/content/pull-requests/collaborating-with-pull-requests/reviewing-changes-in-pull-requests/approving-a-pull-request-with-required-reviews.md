---
title: Approbation d’une demande de tirage comportant des revues obligatoires
intro: 'Si votre dépôt nécessite des révisions, les demandes de tirage (pull request) doivent avoir un nombre spécifique de révisions d’approbation de la part de personnes disposant d’autorisations d’_écriture_ ou d’_administrateur_ dans le dépôt avant de pouvoir être fusionnées.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/approving-a-pull-request-with-required-reviews
  - /articles/approving-a-pull-request-with-required-reviews
  - /github/collaborating-with-issues-and-pull-requests/approving-a-pull-request-with-required-reviews
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/approving-a-pull-request-with-required-reviews
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Required reviews
ms.openlocfilehash: 4554ac9e9b9d0c0f184e0b6b60e732806d2f4a17
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145133892'
---
Pour plus d’informations sur les revues obligatoires, consultez « [À propos des branches protégées](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging) ».

Vous pouvez commenter une demande de tirage, approuver les changements ou demander des améliorations avant de l’approuver. Pour plus d’informations, consultez « [Révision des modifications proposées dans une demande de tirage](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request) ».

{% data reusables.search.requested_reviews_search %}

{% tip %}

**Conseil** : Si une demande de tirage que vous avez approuvée a changé de manière significative, vous pouvez masquer votre revue. La demande de tirage a besoin d’une nouvelle revue avant de pouvoir être fusionnée. Pour plus d’informations, consultez « [Abandonner une revue de demande de tirage](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review) ».

{% endtip %}

{% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.choose-pr-review %} {% data reusables.repositories.changed-files %}
4. Passez en revue les changements apportés à la demande de tirage et, si vous le voulez, [commentez des lignes spécifiques](/articles/reviewing-proposed-changes-in-a-pull-request/#starting-a-review).
{% data reusables.repositories.review-changes %} {% data reusables.repositories.review-summary-comment %}
7. Sélectionnez **Approuver** pour approuver la fusion des changements proposés dans la demande de tirage.
{% data reusables.repositories.submit-review %}

{% data reusables.repositories.request-changes-tips %}

## Pour aller plus loin

- « [Révision des modifications proposées dans une demande de tirage](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request) »
- « [Commentaires sur une demande de tirage](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request) »
