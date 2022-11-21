---
title: Fusion d’une demande de tirage avec une file d’attente de fusion
intro: "Si une file d’attente de fusion est requise par le paramètre de protection de branche pour la branche, vous pouvez ajouter vos demandes de tirage (pull request) à une file d’attente de fusion\_; {% data variables.product.product_name %} fusionne les demandes de tirage pour vous une fois que toutes les vérifications requises ont réussi."
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Merge PR with merge queue
redirect_from:
  - /pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/adding-a-pull-request-to-the-merge-queue
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/adding-a-pull-request-to-the-merge-queue
ms.openlocfilehash: ce2bc87b82e3590c2a7f55f528fc9f71dc0ceb0d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147614270'
---
{% data reusables.pull_requests.merge-queue-beta %}

## À propos des files d’attente de fusion

{% data reusables.pull_requests.merge-queue-overview %} {% data reusables.pull_requests.merge-queue-references %}

## Ajout d’une demande de tirage à une file d’attente de fusion

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}

1. Dans la liste « Demandes de tirage », cliquez sur la demande de tirage que vous voulez ajouter à une file d’attente de fusion.

1. Cliquez sur **Fusionner quand vous êtes prêt** pour ajouter la demande de tirage à la file d’attente de fusion. Sinon, si vous êtes administrateur, vous pouvez :
   -  Fusionnez directement la demande de tirage en cochant **Fusionner sans attendre que les exigences soient remplies ({% ifversion bypass-branch-protections %}contourner les protections de branche{% else %}administrateurs uniquement{% endif %})** , si les paramètres de protection de branche le permettent, et suivez le flux standard.
   ![Options de la file d’attente de fusion](/assets/images/help/pull_requests/merge-queue-options.png)

  {% tip %}

  **Astuce :** Vous pouvez cliquer sur **Fusionner quand vous êtes prêt** dès que vous êtes prêt à fusionner les changements que vous proposez. {% data variables.product.product_name %} ajoute automatiquement la demande de tirage à la file d’attente de fusion une fois que les conditions de vérification d’approbation et d’état nécessaires sont remplies.

  {% endtip %}

1. Confirmez que vous voulez ajouter la demande de tirage à la file d’attente de fusion en cliquant sur **Confirmer la fusion quand vous êtes prêt**.

## Suppression d’une demande de tirage dans une file d’attente de fusion

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}

1. Dans la liste « Demandes de tirage », cliquez sur la demande de tirage que vous voulez supprimer d’une file d’attente de fusion.

1. Pour supprimer la demande de tirage de la file d’attente, cliquez sur **Supprimer de la file d’attente**.
  ![Supprimer la demande de tirage de la file d’attente](/assets/images/help/pull_requests/remove-from-queue-button.png)

Vous pouvez également accéder à la page de file d’attente de fusion de la branche de base, cliquer sur **...** à côté de la demande de tirage à supprimer et sélectionner **Supprimer de la file d’attente**. Pour plus d’informations sur l’accès à la page de file d’attente de fusion de la branche de base, consultez la section ci-dessous.

## Consultation des files d’attente de fusion

Vous pouvez voir la file d’attente de fusion d’une branche de base dans différents emplacements sur {% data variables.product.product_name %}.

- Dans la page **Branches** du dépôt. Nous vous recommandons d’utiliser cette route si vous n’avez pas de demande de tirage dans une file d’attente et que vous voulez voir ce que contient cette file d’attente. Pour plus d’informations, consultez « [Consultation des branches dans votre dépôt](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/viewing-branches-in-your-repository) ».

  ![Voir la file d’attente de fusion dans la page Branches](/assets/images/help/pull_requests/merge-queue-branches-page.png)

- Dans la page **Demandes de tirage** de votre dépôt, cliquez sur {% octicon "clock" aria-label="The clock symbol" %} à côté de n’importe quelle demande de tirage de la file d’attente de fusion.

  ![Voir la file d’attente de fusion dans la page Demandes de tirage](/assets/images/help/pull_requests/clock-icon-in-pull-request-list.png)

- Dans la page de demandes de tirage quand la file d’attente de fusion est demandée pour la fusion, faites défiler vers le bas de la chronologie et cliquez sur le lien **file d’attente de fusion**.

  ![Lien de la file d’attente de fusion sur la demande de tirage](/assets/images/help/pull_requests/merge-queue-link.png)

- La vue de la file d’attente de fusion affiche les demandes de tirage actuellement dans la file d’attente, avec vos demandes de tirage clairement marquées.

  ![Vue de la file d’attente de fusion](/assets/images/help/pull_requests/merge-queue-view.png)

## Traitement des demandes de tirage supprimées de la file d’attente de fusion

{% data reusables.pull_requests.merge-queue-reject %}
