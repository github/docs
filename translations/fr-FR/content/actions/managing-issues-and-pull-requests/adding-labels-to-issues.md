---
title: Ajout d’étiquettes à des problèmes
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
ms.openlocfilehash: 8e80990a1a533ed303f47cbad8dafb95c890893d
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884308'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

Ce tutoriel montre comment utiliser [l’action `andymckay/labeler`](https://github.com/marketplace/actions/simple-issue-labeler) dans un workflow pour étiqueter les problèmes nouvellement ouverts ou rouverts. Par exemple, vous pouvez ajouter l’étiquette `triage` chaque fois qu’un problème est ouvert ou rouvert. Ensuite, vous pouvez voir tous les problèmes qui doivent être triés en filtrant les problèmes à l’aide de l’étiquette `triage`.

Dans ce tutoriel, vous allez d’abord créer un fichier de workflow qui utilise [l’action `andymckay/labeler`](https://github.com/marketplace/actions/simple-issue-labeler). Ensuite, vous personnaliserez le workflow en fonction de vos besoins.

## Création du workflow

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. Copiez le contenu YAML suivant dans votre fichier de workflow.

    ```yaml{:copy}
{% indented_data_reference reusables.actions.actions-not-certified-by-github-comment spaces=4 %}

{% indented_data_reference reusables.actions.actions-use-sha-pinning-comment spaces=4 %}

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
          - name: Label issues
            uses: andymckay/labeler@e6c4322d0397f3240f0e7e30a33b5c5df2d39e90
            with:
              add-labels: "triage"
              repo-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
    ```

4. Personnalisez les paramètres dans votre fichier de workflow :
   - Remplacez la valeur de `add-labels` par la liste des étiquettes que vous souhaitez ajouter au problème. Séparez plusieurs étiquettes par des virgules. Par exemple : `"help wanted, good first issue"`. Pour plus d’informations sur les étiquettes, consultez « [Gestion des étiquettes](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests) ».
5. {% data reusables.actions.commit-workflow %}

## Test du workflow

Chaque fois qu’un problème dans votre dépôt est ouvert ou rouvert, ce workflow ajoute les étiquettes que vous avez spécifiées au problème.

Testez votre workflow en créant un problème dans votre dépôt.

1. Créez un problème dans votre dépôt. Pour plus d’informations, consultez « [Création d’un problème](/github/managing-your-work-on-github/creating-an-issue) ».
2. Pour voir l’exécution du workflow qui a été déclenchée par la création du problème, affichez l’historique des exécutions de votre workflow. Pour plus d’informations, consultez « [Affichage de l’historique des exécutions de workflows](/actions/managing-workflow-runs/viewing-workflow-run-history) ».
3. Une fois le workflow terminé, les étiquettes spécifiées doivent avoir été ajoutées au problème que vous avez créé.

## Étapes suivantes

- Pour en savoir plus sur d’autres opérations que vous pouvez effectuer avec l’action `andymckay/labeler`, notamment la suppression d’étiquettes ou le fait d’ignorer cette action si le problème est affecté ou a une étiquette spécifique, consultez la [documentation sur l’action `andymckay/labeler`](https://github.com/marketplace/actions/simple-issue-labeler).
- Pour en savoir plus sur les différents événements qui peuvent déclencher votre workflow, consultez « [Événements qui déclenchent des workflows](/actions/reference/events-that-trigger-workflows#issues) ». L’action `andymckay/labeler` fonctionne uniquement sur les événements `issues`, `pull_request` ou `project_card`.
- [Visitez GitHub](https://github.com/search?q=%22uses:+andymckay/labeler%22&type=code) pour trouver des exemples de workflows utilisant cette action.
