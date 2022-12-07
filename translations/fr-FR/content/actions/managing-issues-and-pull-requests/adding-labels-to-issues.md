---
title: Ajout d’étiquettes à des problèmes
shortTitle: Add labels to issues
intro: 'Vous pouvez utiliser {% data variables.product.prodname_actions %} pour étiqueter automatiquement les problèmes.'
redirect_from:
  - /actions/guides/adding-labels-to-issues
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
ms.openlocfilehash: a3523069b9422ecd8107007ca5e00fb0071dd738
ms.sourcegitcommit: 4d6d3735d32540cb6de3b95ea9a75b8b247c580d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/30/2022
ms.locfileid: '148185560'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

Ce tutoriel montre comment utiliser [l’action `actions/github-script`](https://github.com/marketplace/actions/github-script) dans un workflow pour étiqueter les problèmes nouvellement ouverts ou rouverts. Par exemple, vous pouvez ajouter l’étiquette `triage` chaque fois qu’un problème est ouvert ou rouvert. Ensuite, vous pouvez voir tous les problèmes qui doivent être triés en filtrant les problèmes à l’aide de l’étiquette `triage`.

L’action `actions/github-script` vous permet d’utiliser facilement l’API {% data variables.product.prodname_dotcom %} dans un workflow.

Dans le tutoriel, vous allez d’abord créer un fichier de workflow qui utilise [l’action `actions/github-script`](https://github.com/marketplace/actions/github-script). Ensuite, vous personnaliserez le workflow en fonction de vos besoins.

## Création du workflow

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. Copiez le contenu YAML suivant dans votre fichier de workflow.
  
    ```yaml{:copy}
    name: Label issues
    on:
      issues:
        types:
          - reopened
          - opened
    jobs:
      label_issues:
        runs-on: ubuntu-latest
        permissions:
          issues: write
        steps:
          - uses: {% data reusables.actions.action-github-script %}
            with:
              script: |
                github.rest.issues.addLabels({
                  issue_number: context.issue.number,
                  owner: context.repo.owner,
                  repo: context.repo.repo,
                  labels: ["triage"]
                })
    ```

4. Personnalisez le paramètre `script` dans votre fichier de workflow :
   - Les valeurs `issue_number`, `owner` et `repo` sont automatiquement définies à l’aide de l’objet `context` . Il est inutile de les modifier.
   - Remplacez la valeur de `labels` par la liste des étiquettes que vous souhaitez ajouter au problème. Séparez plusieurs étiquettes par des virgules. Par exemple : `["help wanted", "good first issue"]`. Pour plus d’informations sur les étiquettes, consultez « [Gestion des étiquettes](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests) ».
5. {% data reusables.actions.commit-workflow %}

## Test du workflow

Chaque fois qu’un problème dans votre dépôt est ouvert ou rouvert, ce workflow ajoute les étiquettes que vous avez spécifiées au problème.

Testez votre workflow en créant un problème dans votre dépôt.

1. Créez un problème dans votre dépôt. Pour plus d’informations, consultez « [Création d’un problème](/github/managing-your-work-on-github/creating-an-issue) ».
2. Pour voir l’exécution du workflow qui a été déclenchée par la création du problème, affichez l’historique des exécutions de votre workflow. Pour plus d’informations, consultez « [Affichage de l’historique des exécutions de workflows](/actions/managing-workflow-runs/viewing-workflow-run-history) ».
3. Une fois le workflow terminé, les étiquettes spécifiées doivent avoir été ajoutées au problème que vous avez créé.

## Étapes suivantes

- Pour en savoir plus sur d’autres choses que vous pouvez faire avec l’action `actions/github-script`, consultez la [`actions/github-script`documentation sur l’action](https://github.com/marketplace/actions/github-script).
- Pour en savoir plus sur les différents événements qui peuvent déclencher votre workflow, consultez « [Événements qui déclenchent des workflows](/actions/reference/events-that-trigger-workflows#issues) ».
- [Visitez GitHub](https://github.com/search?q=%22uses:+actions/github-script%22&type=code) pour trouver des exemples de workflow utilisant cette action.
