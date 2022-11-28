---
title: Exécutions de workflow ignorées
intro: Vous pouvez ignorer les exécutions de workflow déclenchées par les événements `push` et `pull_request` en incluant une commande dans votre message de validation.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Skip workflow runs
ms.openlocfilehash: 32808741dc6de5aacd79f51c9ba098324a3ee57c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146199969'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% note %}

**Remarque :** si un workflow est ignoré en raison d’un [filtrage de chemin d’accès](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore), d’un [filtrage de branche](/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore) ou d’un message de validation (voir ci-dessous), les vérifications associées à ce workflow restent à l’état « En attente ». La fusion d’une demande de tirage (pull request) nécessitant la réussite de ces vérifications sera bloquée.

{% endnote %}

Les workflows qui seraient autrement déclenchés à l’aide de `on: push` ou `on: pull_request` ne seront pas déclenchés si vous ajoutez l’une des chaînes suivantes au message de validation d’un envoi (push), ou à la validation HEAD d’une demande de tirage :

* `[skip ci]`
* `[ci skip]`
* `[no ci]`
* `[skip actions]`
* `[actions skip]`

Vous pouvez également terminer le message de validation avec deux lignes vides suivies au choix de :
- `skip-checks:true`
- `skip-checks: true`

Vous ne pourrez pas fusionner la demande de tirage (pull request) si votre référentiel est configuré pour exiger que des vérifications spécifiques soient effectuées au préalable. Pour autoriser la fusion de la demande de tirage, vous pouvez envoyer (push) une nouvelle validation à la demande de tirage sans instruction skip dans le message de validation.

{% note %}

**Remarque :** les instructions skip s’appliquent uniquement aux événements `push` et `pull_request`. Par exemple, l’ajout de `[skip ci]` à un message de validation n’empêchera pas l’exécution d’un workflow déclenché `on: pull_request_target`.

{% endnote %}

Les instructions skip s’appliquent uniquement aux exécutions de workflow déclenchées par la validation qui contient ces instructions. Vous pouvez également désactiver l’exécution d’un workflow. Pour plus d’informations, consultez « [Désactivation et activation d’un workflow](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow) ».
