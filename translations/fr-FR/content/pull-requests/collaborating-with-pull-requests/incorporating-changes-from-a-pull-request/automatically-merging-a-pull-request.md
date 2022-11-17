---
title: Fusion automatique d’une demande de tirage
intro: Vous pouvez augmenter la vitesse de développement en activant la fusion automatique pour une demande de tirage (pull request) afin que celle-ci se fusionne automatiquement quand toutes les exigences de fusion sont remplies.
product: '{% data reusables.gated-features.auto-merge %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/automatically-merging-a-pull-request
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request
shortTitle: Merge PR automatically
ms.openlocfilehash: 07069657c870751849d3b7e80c7817f908c2bda5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147770912'
---
## À propos de la fusion automatique

Si vous activez la fusion automatique pour une demande de tirage, celle-ci se fusionne automatiquement quand toutes les révisions nécessaires sont satisfaites et toutes les vérifications d’état nécessaires ont réussi. La fusion automatique vous évite d’avoir à attendre que les exigences soient remplies. Vous pouvez donc passer à d’autres tâches.

Avant de pouvoir utiliser la fusion automatique avec une demande de tirage, la fusion automatique doit être activée pour le référentiel. Pour plus d’informations, consultez « [Gestion de la fusion automatique pour les demandes de tirage dans votre dépôt](/github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository) ».

Après avoir activé la fusion automatique pour une demande de tirage, si une personne qui n’a pas d’autorisations d’écriture sur le référentiel envoie de nouvelles modifications à la branche principale ou bascule la branche de base de la demande de tirage, la fusion automatique est désactivée. Par exemple, si un responsable de maintenance active la fusion automatique pour une demande de tirage à partir d’une duplication, la fusion automatique est désactivée après qu’un contributeur pousse (push) de nouvelles modifications vers la demande de tirage.

Vous pouvez fournir des commentaires sur la fusion automatique par le biais d’une [discussion {% data variables.product.prodname_github_community %}](https://github.com/orgs/community/discussions/categories/pull-requests).

## Activation de la fusion automatique

{% data reusables.pull_requests.auto-merge-requires-branch-protection %}

Les personnes disposant d’autorisations d’écriture dans un référentiel peuvent activer la fusion automatique pour une demande de tirage.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}
1. Dans la liste « Demandes de tirage », cliquez sur la demande de tirage que vous souhaitez fusionner automatiquement.
1. Si vous le souhaitez, pour choisir une méthode de fusion, sélectionnez le menu déroulant **Activer la fusion automatique**, puis cliquez sur une méthode de fusion. Pour plus d’informations, consultez « [À propos des fusions de demandes de tirage](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges) ».
  ![Menu déroulant « Activer la fusion automatique »](/assets/images/help/pull_requests/enable-auto-merge-drop-down.png)
1. Cliquez sur **Activer la fusion automatique**.
  ![Bouton permettant d’activer la fusion automatique](/assets/images/help/pull_requests/enable-auto-merge-button.png) {% ifversion fpt %}
1. Si vous avez choisi les méthodes fusion ou fusion et squash, tapez un message de validation et une description, puis choisissez l’adresse e-mail que vous souhaitez pour créer la validation de fusion.
  ![Champs pour entrer le message de validation et la description, puis choisir l’adresse e-mail de l’auteur de validation](/assets/images/help/pull_requests/pull-request-information-fields.png) {% note %}

  **Remarque :** Le menu déroulant de l’e-mail n’est pas disponible si la confidentialité de l’e-mail est activée ou si vous n’avez qu’un e-mail vérifié et visible associé à votre compte {% data variables.product.company_short %}.

  {% endnote %} {% endif %} {% ifversion ghes or ghae or ghec %}
1. Si vous avez choisi les méthodes fusion ou fusion et squash, tapez un message de validation et une description.
   ![Champs pour entrer le message de validation et la description](/assets/images/help/pull_requests/pull-request-information-fields-enterprise.png) {% endif %}
1. Cliquez sur **Confirmer la fusion automatique**.

## Désactivation de la fusion automatique

Les personnes disposant d’autorisations d’écriture dans un référentiel et les auteurs de demandes de tirage peuvent désactiver la fusion automatique pour une demande de tirage.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}
1. Dans la liste « Demandes de tirage », cliquez sur la demande de tirage pour laquelle vous souhaitez désactiver la fusion automatique.
1. Dans la zone de fusion, cliquez sur **Désactiver la fusion automatique**.
  ![Bouton permettant de désactiver la fusion automatique](/assets/images/help/pull_requests/disable-auto-merge-button.png)
