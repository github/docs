---
title: Planification de la création d’un problème
intro: 'Vous pouvez utiliser {% data variables.product.prodname_actions %} pour créer un problème régulièrement pour des éléments tels que des réunions quotidiennes ou des révisions trimestrielles.'
redirect_from:
  - /actions/guides/scheduling-issue-creation
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
ms.openlocfilehash: 6a68e7cab1c20a7f89bdef438d299c5bda32315c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410059'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

Ce tutoriel montre comment utiliser [l’action `imjohnbo/issue-bot`](https://github.com/marketplace/actions/issue-bot-action) pour créer un problème sur une base régulière. Par exemple, vous pouvez créer un problème chaque semaine afin de l’utiliser comme ordre du jour d’une réunion d’équipe.

Dans le tutoriel, vous allez d’abord créer un fichier de workflow qui utilise [l’action `imjohnbo/issue-bot`](https://github.com/marketplace/actions/issue-bot-action). Ensuite, vous personnaliserez le workflow en fonction de vos besoins.

## Création du workflow

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. Copiez le contenu YAML suivant dans votre fichier de workflow.

    ```yaml{:copy}
{% indented_data_reference reusables.actions.actions-not-certified-by-github-comment spaces=4 %}

{% indented_data_reference reusables.actions.actions-use-sha-pinning-comment spaces=4 %}
    
    name: Weekly Team Sync
    on:
      schedule:
        - cron: 20 07 * * 1

    jobs:
      create_issue:
        name: Create team sync issue
        runs-on: ubuntu-latest
        permissions:
          issues: write
        steps:
          - name: Create team sync issue
            uses: imjohnbo/issue-bot@3daae12aa54d38685d7ff8459fc8a2aee8cea98b
            with:
              assignees: "monalisa, doctocat, hubot"
              labels: "weekly sync, docs-team"
              title: "Team sync"
              body: |
                ### Agenda

                - [ ] Start the recording
                - [ ] Check-ins
                - [ ] Discussion points
                - [ ] Post the recording
                        
                ### Discussion Points
                Add things to discuss below

                - [Work this week](https://github.com/orgs/github/projects/3)
              pinned: false
              close-previous: false
            env:
              GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
    ```

4. Personnalisez les paramètres dans votre fichier de workflow :
   - Modifiez la valeur de `on.schedule` pour déterminer quand vous souhaitez que ce workflow s’exécute. Dans l’exemple ci-dessus, le workflow s’exécutera tous les lundis à 7h20 UTC. Pour plus d’informations sur les workflows planifiés, consultez « [Événements planifiés](/actions/reference/events-that-trigger-workflows#scheduled-events) ».
   - Remplacez la valeur de `assignees` par la liste des noms d’utilisateur {% data variables.product.prodname_dotcom %} que vous souhaitez attribuer au problème.
   - Remplacez la valeur de `labels` par la liste des étiquettes que vous souhaitez appliquer au problème.
   - Remplacez la valeur de `title` par le titre que vous souhaitez attribuer au problème.
   - Remplacez la valeur de `body` par le texte que vous souhaitez afficher dans le corps du message. Le caractère `|` vous permet d’utiliser une valeur multiligne pour ce paramètre.
   - Si vous souhaitez épingler ce problème dans votre référentiel, définissez `pinned` sur `true`. Pour plus d’informations sur les problèmes épinglés, consultez « [Épinglage d’un problème dans votre référentiel](/articles/pinning-an-issue-to-your-repository) ».
   - Si vous souhaitez fermer le problème précédent généré par ce workflow chaque fois qu’un nouveau problème est créé, définissez `close-previous` sur `true`. Le workflow ferme alors le problème le plus récent dont les étiquettes sont définies dans le champ `labels`. Pour éviter de fermer le mauvais problème, utilisez une étiquette unique ou une combinaison d’étiquettes.
5. {% data reusables.actions.commit-workflow %}

## Résultats attendus

En fonction du paramètre `schedule` (par exemple, tous les lundis à 7h20 UTC), votre workflow crée un nouveau problème avec les personnes responsables, les étiquettes, le titre et le corps que vous avez spécifiés. Si vous définissez `pinned` sur `true`, le workflow épingle le problème dans votre référentiel. Si vous définissez `close-previous` sur true, le workflow ferme le problème le plus récent doté des étiquettes correspondantes.

{% data reusables.actions.schedule-delay %}

Vous pouvez consulter l’historique de vos exécutions de workflow pour afficher régulièrement cette exécution de workflow. Pour plus d’informations, consultez « [Affichage de l’historique des exécutions de workflows](/actions/managing-workflow-runs/viewing-workflow-run-history) ».

## Étapes suivantes

- Pour en savoir plus sur les autres possibilités offertes par l’action `imjohnbo/issue-bot`, comme la rotation des personnes responsables ou l’utilisation d’un modèle de problème, consultez la documentation de l'action [`imjohnbo/issue-bot`](https://github.com/marketplace/actions/issue-bot-action).
- [Recherchez sur GitHub](https://github.com/search?q=%22uses%3A+imjohnbo%2Fissue-bot%22&type=code) des exemples de workflow utilisant cette action.
