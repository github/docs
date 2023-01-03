---
title: Utilisation d’étiquettes avec des exécuteurs auto-hébergés
intro: Vous pouvez utiliser des étiquettes pour organiser vos exécuteurs autohébergés en fonction de leurs caractéristiques.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Label runners
ms.openlocfilehash: 3b26db5c8b6494ebb63cc3ce9cc9a0109bac4545
ms.sourcegitcommit: 929818065a8545476e4cf8e2cab6517f40345ef0
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163251'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

Pour obtenir des informations sur l’utilisation d’étiquettes pour router des travaux vers des types spécifiques d’exécuteurs auto-hébergés, consultez « [Utilisation d’exécuteurs auto-hébergés dans un workflow](/actions/hosting-your-own-runners/using-self-hosted-runners-in-a-workflow) ». {% ifversion target-runner-groups %}Vous pouvez également router des travaux vers des exécuteurs dans un groupe spécifique. Pour plus d’informations, consultez « [Ciblage des exécuteurs dans un groupe](/actions/using-jobs/choosing-the-runner-for-a-job#targeting-runners-in-a-group) ».{% endif %}

{% data reusables.actions.self-hosted-runner-management-permissions-required %}

## Création d’une étiquette personnalisée

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.settings-sidebar-actions-runner-selection %}
 1. Dans la section « Étiquettes », cliquez sur {% octicon "gear" aria-label="The Gear icon" %}.
 1. Dans le champ « Rechercher ou créer une étiquette », tapez le nom de votre nouvelle étiquette, puis cliquez sur **Créer une nouvelle étiquette**.
 L’étiquette personnalisée est créée et affectée à l’exécuteur auto-hébergé. Les étiquettes personnalisées peuvent être supprimées des exécuteurs auto-hébergés, mais elles ne peuvent pas être supprimées manuellement. {% data reusables.actions.actions-unused-labels %} {% elsif ghae or ghes < 3.4 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.self-hosted-runner-list %} {% data reusables.actions.self-hosted-runner-list-group %} {% data reusables.actions.self-hosted-runner-labels-view-assigned-labels %}
1. Dans le champ « Filtrer les étiquettes », tapez le nom de votre nouvelle étiquette, puis cliquez sur **Créer une nouvelle étiquette**.
    ![Ajouter une étiquette d’exécuteur](/assets/images/help/settings/actions-add-runner-label.png)
    
L’étiquette personnalisée est créée et affectée à l’exécuteur auto-hébergé. Les étiquettes personnalisées peuvent être supprimées des exécuteurs auto-hébergés, mais elles ne peuvent pas être supprimées manuellement. {% data reusables.actions.actions-unused-labels %} {% endif %}

## Affectation d’une étiquette à un exécuteur auto-hébergé

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.settings-sidebar-actions-runner-selection %} {% data reusables.actions.runner-label-settings %}
  1. Pour affecter une étiquette à votre exécuteur auto-hébergé, dans le champ « Rechercher ou créer une étiquette », cliquez sur l’étiquette. {% elsif ghae or ghes < 3.4 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.self-hosted-runner-list %} {% data reusables.actions.self-hosted-runner-list-group %} {% data reusables.actions.self-hosted-runner-labels-view-assigned-labels %}
1. Cliquez sur une étiquette pour l’affecter à votre exécuteur auto-hébergé. {% endif %}

## Suppression d’une étiquette personnalisée d’un exécuteur auto-hébergé

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.settings-sidebar-actions-runner-selection %} {% data reusables.actions.runner-label-settings %}
  1. Dans le champ « Rechercher ou créer une étiquette », les étiquettes affectées sont marquées avec l’icône {% octicon "check" aria-label="The Check icon" %}. Cliquez sur une étiquette marquée pour annuler son affectation à l’exécuteur auto-hébergé. {% elsif ghae or ghes < 3.4 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.self-hosted-runner-list %} {% data reusables.actions.self-hosted-runner-list-group %} {% data reusables.actions.self-hosted-runner-labels-view-assigned-labels %}
1. Cliquez sur l’étiquette affectée pour la supprimer de votre exécuteur auto-hébergé. {% data reusables.actions.actions-unused-labels %} {% endif %}

## Attribuer des étiquettes par programmation

Vous pouvez attribuer par programmation des étiquettes à un exécuteur auto-hébergé après la création de l’exécuteur ou pendant sa configuration initiale.

* Pour attribuer par programmation des étiquettes à un exécuteur auto-hébergé existant, vous devez utiliser l’API REST. Pour plus d’informations, consultez l’API REST « [Exécuteurs auto-hébergés](/rest/actions/self-hosted-runners) ».
* Pour attribuer par programmation des étiquettes à un exécuteur auto-hébergé pendant sa configuration initiale, vous pouvez passer des noms d’étiquettes au script `config` à l’aide du paramètre `labels`.

  {% note %}
  
  **Remarque :** vous ne pouvez pas utiliser le script `config` pour attribuer des étiquettes à un exécuteur auto-hébergé existant.
  
  {% endnote %}

  Par exemple, cette commande attribue une étiquette nommée `gpu` lors de la configuration d’un nouvel exécuteur auto-hébergé :

  ```
  ./config.sh --url <REPOSITORY_URL> --token <REGISTRATION_TOKEN> --labels gpu
  ```

  L’étiquette est créée si elle n’existe pas encore. Vous pouvez également utiliser cette approche pour affecter les étiquettes par défaut aux exécuteurs, tels que `x64` ou `linux`. Lorsque des étiquettes par défaut sont affectées à l’aide du script de configuration, {% data variables.product.prodname_actions %} les accepte telles qu’elles sont donnés et ne vérifie pas si l’exécuteur utilise réellement ce système d’exploitation ou cette architecture.

  Vous pouvez utiliser des virgules de séparation pour affecter plusieurs étiquettes. Par exemple :

  ```
  ./config.sh --url <REPOSITORY_URL> --token <REGISTRATION_TOKEN> --labels gpu,x64,linux
  ```

  {% note %}

  ** Remarque :** Si vous remplacez un exécuteur existant, vous devez réaffecter toutes les étiquettes personnalisées.

  {% endnote %}
