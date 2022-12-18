---
title: Gestion d’une file d’attente de fusion
intro: Vous pouvez augmenter la vitesse de développement avec une file d’attente de fusion pour les demandes de tirage dans votre référentiel.
versions:
  fpt: '*'
  ghec: '*'
permissions: People with admin permissions can manage merge queues for pull requests targeting selected branches of a repository.
topics:
  - Repositories
  - Pull requests
shortTitle: Managing merge queue
redirect_from:
  - /repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/using-a-merge-queue
ms.openlocfilehash: 2cdbbdc72dde5c9970d49f7060e5cb583b6dd1dd
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147496487'
---
{% data reusables.pull_requests.merge-queue-beta %}

## À propos des files d’attente de fusion

{% data reusables.pull_requests.merge-queue-overview %}

La file d’attente de fusion crée des branches temporaires avec un préfixe spécial pour valider les modifications de demande de tirage (pull request). Les modifications apportées à la demande de tirage (pull request) sont ensuite regroupées dans un `merge_group` avec la dernière version de `base_branch`, ainsi que les modifications qui la précèdent dans la file d’attente. {% data variables.product.product_name %} fusionne toutes ces modifications dans `base_branch` une fois que les vérifications requises par les protections de branche de `base_branch` ont réussi.


Pour plus d’informations sur les méthodes de fusion, consultez « [À propos des fusions de demandes de tirage](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges) ».

{% note %}

**Remarque :**

* Une file d’attente de fusion ne peut pas être activée avec des règles de protection de branche qui utilisent des caractères génériques (`*`) dans le modèle de nom de branche.

{% endnote %}

{% data reusables.pull_requests.merge-queue-reject %}

### Déclenchement de vérifications de groupe de fusion avec {% data variables.product.prodname_actions %}

Vous pouvez utiliser l’événement `merge_group` pour déclencher votre workflow {% data variables.product.prodname_actions %} quand une demande de tirage (pull request) est ajoutée à une file d’attente de fusion. Notez qu’il s’agit d’un événement différent des événements `pull_request` et `push`.

Voici comment se présente un workflow qui signale une vérification requise par les protections de la branche cible :

```yaml
on:
  pull_request:
  merge_group:
```

Pour plus d’informations, consultez « [Événements déclencheurs de workflows](/actions/using-workflows/events-that-trigger-workflows#merge-group) »

### Déclenchement de vérifications de groupe de fusion avec d’autres fournisseurs CI

Avec d’autres fournisseurs CI, vous devrez peut-être mettre à jour votre configuration CI pour permettre l’exécution quand une branche commençant par le préfixe spécial `gh-readonly-queue/{base_branch}` est créée.

## Gestion d’une file d’attente de fusion

Les administrateurs de dépôt peuvent exiger une fusion en activant le paramètre de protection de branche « Exiger une file d’attente de fusion » dans les règles de protection de la branche de base.

Pour plus d’informations sur l’activation du paramètre de protection de file d’attente de fusion, consultez « [Gestion d’une règle de protection de branche](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule#creating-a-branch-protection-rule) ».

## Pour aller plus loin

* « [Fusion d’une demande de tirage avec une file d’attente de fusion](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request-with-a-merge-queue) »
* « [À propos des branches protégées](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches) »
