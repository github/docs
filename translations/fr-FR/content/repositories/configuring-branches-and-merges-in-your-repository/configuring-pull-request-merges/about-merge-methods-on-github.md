---
title: À propos des méthodes de fusion sur GitHub
intro: 'Vous pouvez autoriser les contributeurs disposant d’un accès de transmission de type push à votre référentiel pour fusionner leurs demandes de tirage (pull request) sur {% data variables.product.product_location %} avec différentes options de fusion ou appliquer une méthode de fusion spécifique pour toutes les demandes de tirage (pull request) de votre référentiel.'
redirect_from:
  - /articles/about-merge-methods-on-github
  - /github/administering-a-repository/about-merge-methods-on-github
  - /github/administering-a-repository/configuring-pull-request-merges/about-merge-methods-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: About merge methods
ms.openlocfilehash: 97e8b7159ebadf1fe02ae56f707728c2bc8c439d
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882440'
---
{% data reusables.pull_requests.configure_pull_request_merges_intro %} Vous pouvez appliquer un type de méthode de fusion, tel que le squashing de commit ou le rebasing, en activant uniquement la méthode souhaitée pour votre dépôt.

{% ifversion fpt or ghec %} {% note %}

**Remarque :** Lorsque vous utilisez la file d’attente de fusion, vous ne pouvez plus choisir la méthode de fusion, car elle est contrôlée par la file d’attente. {% data reusables.pull_requests.merge-queue-references %}

{% endnote %} {% endif %}

{% data reusables.pull_requests.default_merge_option %}

La méthode de fusion par défaut crée un commit de fusion. Vous pouvez empêcher toute personne de pousser des commits de fusion vers une branche protégée en appliquant un historique de commit linéaire. Pour plus d’informations, consultez « [À propos des branches protégées](/github/administering-a-repository/about-protected-branches#require-linear-history) ».

## Squashing de vos commits de fusion

{% data reusables.pull_requests.squash_and_merge_summary %}

Avant d’activer le squashing de commit, tenez compte de ces inconvénients :
- Vous perdez les informations sur le moment où des modifications spécifiques ont été initialement apportées, et sur qui a créé les commits squashés.
- Si vous continuez à travailler sur la branche principale d’une demande de tirage (pull request) après le squashing et la fusion, et que vous créez ensuite une nouvelle demande de tirage entre les mêmes branches, les commits que vous avez squashés et fusionnés seront listés dans la nouvelle demande de tirage. Vous pouvez également avoir des conflits que vous devrez résoudre à plusieurs reprises dans chaque demande de tirage successive. Pour plus d’informations, consultez « [À propos des fusions de demandes de tirage](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges#squashing-and-merging-a-long-running-branch) ».
- Certaines commandes Git qui utilisent l’ID « SHA » ou « hash » peuvent être plus difficiles à utiliser, car l’ID SHA pour les commits d’origine est perdu. Par exemple, l’utilisation de [`git rerere`](https://git-scm.com/docs/git-rerere) peut ne pas être aussi efficace.

Pour plus d’informations, consultez « [Configuration du squashing de commit pour les demandes de tirage](/articles/configuring-commit-squashing-for-pull-requests) ».

## Rebasing et fusion de vos commits

{% data reusables.pull_requests.rebase_and_merge_summary %}

Avant d’activer la rebasing de commit, tenez compte des inconvénients suivants :
- Les contributeurs de dépôts devront peut-être rebaser sur la ligne de commande, résoudre les conflits et forcer la poussée de leurs modifications vers la branche de rubrique de la demande de tirage (ou la branche principale distante) avant de pouvoir utiliser l’option **Rebaser et fusionner** sur {% data variables.product.product_location %}. La poussée forcée doit être effectuée avec soin, afin que les contributeurs ne remplacent pas le travail sur lequel d’autres personnes ont basé leur travail. Pour en savoir plus sur le moment où l’option **Rebaser et fusionner** est désactivée sur {% data variables.product.product_location %} et le workflow pour le réactiver, consultez « [À propos des fusions de demandes de tirage](/articles/about-pull-request-merges/#rebase-and-merge-your-pull-request-commits) ».
- {% indented_data_reference reusables.pull_requests.rebase_and_merge_verification spaces=3 %}

Pour plus d’informations, consultez « [Configuration du rebasing de commit pour les demandes de tirage](/articles/configuring-commit-rebasing-for-pull-requests) ».
