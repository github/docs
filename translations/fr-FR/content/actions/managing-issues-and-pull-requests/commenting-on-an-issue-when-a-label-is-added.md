---
title: Commentaire sur un problème lors de l’ajout d’une étiquette
intro: 'Vous pouvez utiliser {% data variables.product.prodname_actions %} pour commenter automatiquement les problèmes lorsqu’une étiquette spécifique est appliquée.'
redirect_from:
  - /actions/guides/commenting-on-an-issue-when-a-label-is-added
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
shortTitle: Add label to comment on issue
ms.openlocfilehash: 02484ffce5af753f06ac0523ef8e6ab853f47454
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409037'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

Ce tutoriel montre comment utiliser [l’action `peter-evans/create-or-update-comment`](https://github.com/marketplace/actions/create-or-update-comment) pour commenter un problème lors de l’application d’une étiquette spécifique. Par exemple, quand l’étiquette `help-wanted` est ajoutée à un problème, vous pouvez ajouter un commentaire pour encourager les contributeurs à travailler sur le problème.

Dans le tutoriel, vous allez d’abord créer un fichier de workflow qui utilise [l’action `peter-evans/create-or-update-comment`](https://github.com/marketplace/actions/create-or-update-comment). Ensuite, vous personnaliserez le workflow en fonction de vos besoins.

## Création du workflow

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. Copiez le contenu YAML suivant dans votre fichier de workflow.

    ```yaml{:copy}
{% indented_data_reference reusables.actions.actions-not-certified-by-github-comment spaces=4 %}

{% indented_data_reference reusables.actions.actions-use-sha-pinning-comment spaces=4 %}

    name: Add comment
    on:
      issues:
        types:
          - labeled
    jobs:
      add-comment:
        if: github.event.label.name == 'help-wanted'
        runs-on: ubuntu-latest
        permissions:
          issues: write
        steps:
          - name: Add comment
            uses: peter-evans/create-or-update-comment@a35cf36e5301d70b76f316e867e7788a55a31dae
            with:
              issue-number: {% raw %}${{ github.event.issue.number }}{% endraw %}
              body: |
                This issue is available for anyone to work on. **Make sure to reference this issue in your pull request.** :sparkles: Thank you for your contribution! :sparkles:
    ```

4. Personnalisez les paramètres dans votre fichier de workflow :
   - Remplacez `help-wanted` dans `if: github.event.label.name == 'help-wanted'` par l’étiquette sur laquelle vous souhaitez agir. Si vous souhaitez agir sur plusieurs étiquettes, séparez les conditions avec `||`. Par exemple, `if: github.event.label.name == 'bug' || github.event.label.name == 'fix me'` commentera chaque fois que les étiquettes `bug` ou `fix me` seront ajoutées à un problème.
   - Modifiez la valeur de `body` pour le commentaire que vous souhaitez ajouter. Le markdown adapté à GitHub est pris en charge. Pour plus d’informations sur le markdown, consultez « [Syntaxe de base pour l’écriture et la mise en forme ](/github/writing-on-github/basic-writing-and-formatting-syntax) ».
5. {% data reusables.actions.commit-workflow %}

## Test du workflow

Chaque fois qu’un problème dans votre dépôt est étiqueté, ce workflow s’exécute. Si l’étiquette ajoutée est l’une de celles que vous avez spécifiées dans votre fichier de workflow, l’action `peter-evans/create-or-update-comment` ajoute le commentaire que vous avez spécifié au problème.

Testez votre workflow en appliquant votre étiquette spécifiée à un problème.

1. Ouvrez un problème dans votre dépôt. Pour plus d’informations, consultez « [Création d’un problème](/github/managing-your-work-on-github/creating-an-issue) ».
2. Étiquetez le problème avec l’étiquette spécifiée dans votre fichier de workflow. Pour plus d’informations, consultez « [Gestion des étiquettes](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests) ».
3. Pour voir l’exécution du workflow déclenchée par l’étiquetage du problème, affichez l’historique des exécutions de votre workflow. Pour plus d’informations, consultez « [Affichage de l’historique des exécutions de workflows](/actions/managing-workflow-runs/viewing-workflow-run-history) ».
4. Une fois le workflow terminé, le problème que vous avez étiqueté doit avoir un commentaire ajouté.

## Étapes suivantes

- Pour en savoir plus sur d’autres choses que vous pouvez faire avec l’action `peter-evans/create-or-update-comment`, comme ajouter des réactions, consultez la [documentation sur l’action `peter-evans/create-or-update-comment`](https://github.com/marketplace/actions/create-or-update-comment).
