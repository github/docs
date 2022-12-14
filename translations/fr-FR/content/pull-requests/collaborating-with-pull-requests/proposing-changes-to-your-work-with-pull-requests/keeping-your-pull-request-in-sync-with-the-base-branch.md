---
title: Maintien de la synchronisation de votre demande de tirage avec la branche de base
intro: 'Une fois que vous avez ouvert une demande de tirage (pull request), vous pouvez mettre à jour la branche head, qui contient vos modifications, avec toutes les modifications apportées dans la branche de base.'
permissions: People with write permissions to the repository to which the head branch of the pull request belongs can update the head branch with changes that have been made in the base branch.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Update the head branch
ms.openlocfilehash: d7819b45cf3290c09e3b231825e494fd1d82daea
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145133904'
---
## À propos du maintien de la synchronisation de votre demande de tirage

Avant de fusionner vos demandes de tirage, d’autres modifications peuvent être fusionnées dans la branche de base, ce qui entraîne la désynchronisation de la branche head de votre demande de tirage. La mise à jour de votre demande de tirage avec les dernières modifications de la branche de base peut vous aider à détecter les problèmes avant la fusion.

Vous pouvez mettre à jour la branche head d’une demande de tirage à partir de la ligne de commande ou de la page de demande de tirage. Le bouton **Mettre à jour la branche** s’affiche lorsque toutes ces valeurs sont remplies :

* Il n’existe aucun conflit de fusion entre la branche de demande de tirage et la branche de base.
* La branche de demande de tirage n’est pas à jour avec la branche de base.
* La branche de base nécessite que les branches soient à jour avant de fusionner{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %} ou le paramètre permettant de toujours suggérer que la mise à jour des branches est activée{% endif %}.

Pour plus d’informations, consultez « [Exiger des vérifications d’état avant de fusionner](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches){% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %} » et « [Gestion des suggestions pour mettre à jour les branches de demande de tirage](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-suggestions-to-update-pull-request-branches){% endif %} ».

S’il existe des modifications apportées à la branche de base qui provoquent des conflits de fusion dans votre branche de demande de tirage, vous ne pourrez pas mettre à jour la branche tant que tous les conflits ne seront pas résolus. Pour plus d’informations, consultez « [À propos des conflits de fusion](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts) ».

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %} À partir de la page de demande de tirage, vous pouvez mettre à jour la branche de votre demande de tirage à l’aide d’une fusion traditionnelle ou en refondation. Une fusion traditionnelle entraîne une validation de fusion qui fusionne la branche de base dans la branche principale de la demande de tirage. La refondation applique les modifications de _votre_ branche à la dernière version de la branche de base. Le résultat est une branche avec un historique linéaire, car aucune validation de fusion n’est créée.
{% else %} La mise à jour de votre branche à partir de la page de demande de tirage effectue une fusion traditionnelle. La validation de fusion résultante fusionne la branche de base dans la branche principale de la demande de tirage.
{% endif %}

## Mise à jour de votre branche de demande de tirage

{% data reusables.repositories.sidebar-pr %}

1. Dans la liste « Demandes de tirage », cliquez sur la demande de tirage que vous souhaitez fusionner.

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}
1. Dans la section de fusion située en bas de la page, vous pouvez :
   - Cliquez sur **Mettre à jour la branche** pour effectuer une fusion traditionnelle.
   ![Bouton pour mettre à jour la branche](/assets/images/help/pull_requests/pull-request-update-branch-with-dropdown.png)
   - Cliquez sur le menu déroulant Mettre à jour la branche, cliquez sur **Mettre à jour avec refondation**, puis sur **Refondation de la branche** pour mettre à jour par une refondation de la branche de base.
   ![Menu déroulant montrant les options de fusion et refondation](/assets/images/help/pull_requests/pull-request-update-branch-rebase-option.png) {% else %}
1. Dans la section de fusion située en bas de la page, cliquez sur **Mettre à jour la branche** pour effectuer une fusion traditionnelle.
  ![Bouton pour mettre à jour la branche](/assets/images/help/pull_requests/pull-request-update-branch.png) {% endif %}

## Pour aller plus loin

- « [À propos des demandes de tirage (pull requests)](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) »
- « [Modification de l’étape d’une demande de tirage](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request) »
- « [Validation des changements sur une branche de demande de tirage créée à partir d’une duplication](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork) »
