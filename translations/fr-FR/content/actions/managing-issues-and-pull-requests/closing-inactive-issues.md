---
title: Fermeture des problèmes inactifs
intro: 'Vous pouvez utiliser {% data variables.product.prodname_actions %} pour commenter ou clôturer les questions qui sont restées inactives pendant un certain temps.'
redirect_from:
  - /actions/guides/closing-inactive-issues
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
ms.openlocfilehash: 7d0cab4c1ef7ac5fda67a0487b50817adfb5dfd8
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063609'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

Ce tutoriel montre comment utiliser [l’action `actions/stale`](https://github.com/marketplace/actions/close-stale-issues) pour commenter et fermer les problèmes qui ont été inactifs pendant une certaine période. Par exemple, vous pouvez commenter si un problème a été inactif pendant 30 jours pour inviter les participants à prendre des mesures. Ensuite, si aucune activité supplémentaire ne se produit dans les 14 jours, vous pouvez fermer le problème.

Dans le tutoriel, vous allez d’abord créer un fichier de workflow qui utilise [l’action `actions/stale`](https://github.com/marketplace/actions/close-stale-issues). Ensuite, vous personnaliserez le workflow en fonction de vos besoins.

## Création du workflow

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. Copiez le contenu YAML suivant dans votre fichier de workflow.

    ```yaml{:copy}
    name: Close inactive issues
    on:
      schedule:
        - cron: "30 1 * * *"

    jobs:
      close-issues:
        runs-on: ubuntu-latest
        permissions:
          issues: write
          pull-requests: write
        steps:
          - uses: {% data reusables.actions.action-stale %}
            with:
              days-before-issue-stale: 30
              days-before-issue-close: 14
              stale-issue-label: "stale"
              stale-issue-message: "This issue is stale because it has been open for 30 days with no activity."
              close-issue-message: "This issue was closed because it has been inactive for 14 days since being marked as stale."
              days-before-pr-stale: -1
              days-before-pr-close: -1
              repo-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
    ```

4. Personnalisez les paramètres dans votre fichier de workflow :
   - Modifiez la valeur de `on.schedule` pour déterminer quand vous souhaitez que ce workflow s’exécute. Dans l’exemple ci-dessus, le workflow s’exécute tous les jours à 1 h 30 UTC. Pour plus d’informations sur les workflows planifiés, consultez « [Événements planifiés](/actions/reference/events-that-trigger-workflows#scheduled-events) ».
   - Modifiez la valeur de `days-before-issue-stale` pour le nombre de jours sans activité avant que l’action `actions/stale` n’étiquette un problème. Si vous ne souhaitez jamais que cette action étiquette les problèmes, définissez cette valeur sur `-1`.
   - Modifiez la valeur de `days-before-issue-close` pour le nombre de jours sans activité avant que l’action `actions/stale` ne ferme un problème. Si vous ne souhaitez jamais que cette action ferme les problèmes, définissez cette valeur sur `-1`.
   - Modifiez la valeur de l’étiquette `stale-issue-label` que vous souhaitez appliquer aux problèmes qui ont été inactifs pendant la durée spécifiée par `days-before-issue-stale`.
   - Modifiez la valeur du commentaire `stale-issue-message` que vous souhaitez ajouter aux problèmes étiquetés par l’action `actions/stale`.
   - Modifiez la valeur du commentaire `close-issue-message` que vous souhaitez ajouter aux problèmes fermés par l’action `actions/stale`.
5. {% data reusables.actions.commit-workflow %}

## Résultats attendus

En fonction du paramètre `schedule` (par exemple, tous les jours à 1 h 30 UTC), votre workflow trouve les problèmes inactifs pendant la période spécifiée et ajoute le commentaire et l’étiquette spécifiés. De plus, votre workflow ferme les problèmes précédemment étiquetés si aucune activité supplémentaire n’a eu lieu pendant la période spécifiée.

{% data reusables.actions.schedule-delay %}

Vous pouvez consulter l’historique de vos exécutions de workflow pour afficher régulièrement cette exécution de workflow. Pour plus d’informations, consultez « [Affichage de l’historique des exécutions de workflows](/actions/managing-workflow-runs/viewing-workflow-run-history) ».

Ce workflow étiquette et/ou ferme uniquement 30 problèmes à la fois afin d’éviter de dépasser une limite de débit. Vous pouvez configurer cela avec le paramètre `operations-per-run`. Pour plus d’informations, consultez la [documentation de l’action`actions/stale`](https://github.com/marketplace/actions/close-stale-issues).

## Étapes suivantes

- Pour en savoir plus sur les choses supplémentaires que vous pouvez faire avec l’action `actions/stale`, comme fermer les demandes de tirage inactives, ignorer les problèmes liés à certaines étiquettes ou certains jalons, ou uniquement vérifier les problèmes avec certaines étiquettes, consultez la [documentation de l’action `actions/stale`](https://github.com/marketplace/actions/close-stale-issues).
- [Visitez GitHub](https://github.com/search?q=%22uses%3A+actions%2Fstale%22&type=code) pour trouver des exemples de workflow utilisant cette action.
