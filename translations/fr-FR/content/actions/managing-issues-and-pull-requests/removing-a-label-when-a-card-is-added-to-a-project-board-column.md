---
title: Suppression d’une étiquette lorsqu’une carte est ajoutée à une colonne de tableau de projet
intro: 'Vous pouvez utiliser {% data variables.product.prodname_actions %} pour supprimer automatiquement une étiquette quand un problème ou une demande de tirage est ajouté à une colonne spécifique d’un tableau de projet.'
redirect_from:
  - /actions/guides/removing-a-label-when-a-card-is-added-to-a-project-board-column
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
shortTitle: Remove label when adding card
ms.openlocfilehash: c23edb495719c7059c9c5d8dab1c29acb0e78cb6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410106'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

Ce tutoriel montre comment utiliser [l’action `andymckay/labeler`](https://github.com/marketplace/actions/simple-issue-labeler) avec une condition pour supprimer une étiquette des problèmes et des demandes de tirage qui sont ajoutées à une colonne spécifique sur une carte de projet. Par exemple, vous pouvez supprimer l’étiquette `needs review` lorsque les cartes de projet sont déplacées vers la colonne `Done`.

Dans le tutoriel, vous allez d’abord créer un fichier de workflow qui utilise [l’action `andymckay/labeler`](https://github.com/marketplace/actions/simple-issue-labeler). Ensuite, vous personnaliserez le workflow en fonction de vos besoins.

## Création du workflow

1. {% data reusables.actions.choose-repo %}
2. Choisissez un projet qui appartient au référentiel. Ce workflow ne peut pas être utilisé avec des projets appartenant à des utilisateurs ou à des organisations. Vous pouvez utiliser un projet existant ou en créer un nouveau. Pour plus d’informations sur la création d’un projet, consultez « [Création d’un tableau de projet](/github/managing-your-work-on-github/creating-a-project-board) ».
3. {% data reusables.actions.make-workflow-file %}
4. Copiez le contenu YAML suivant dans votre fichier de workflow.
    ```yaml{:copy}
{% indented_data_reference reusables.actions.actions-not-certified-by-github-comment spaces=4 %}

{% indented_data_reference reusables.actions.actions-use-sha-pinning-comment spaces=4 %}

    name: Remove labels
    on:
      project_card:
        types:
          - moved
    jobs:
      remove_labels:
        if: github.event.project_card.column_id == '12345678'
        runs-on: ubuntu-latest
        permissions:
          issues: write
          pull-requests: write
        steps:
          - name: remove labels
            uses: andymckay/labeler@5c59dabdfd4dd5bd9c6e6d255b01b9d764af4414
            with:
              remove-labels: "needs review"
              repo-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
    ```

5. Personnalisez les paramètres dans votre fichier de workflow :
   - Dans `github.event.project_card.column_id == '12345678'`, remplacez `12345678` par l’ID de la colonne dans laquelle vous souhaitez annuler l’étiquette des problèmes et les demandes de tirage déplacées vers cet emplacement.

    Pour rechercher l’ID de colonne, accédez à votre carte de projet. En regard du titre de la colonne, cliquez sur {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} puis cliquez sur **Copier le lien de colonne**. L’ID de colonne est le numéro affiché à la fin du lien copié. Par exemple, `24687531` est l’ID de colonne pour `https://github.com/octocat/octo-repo/projects/1#column-24687531`.

     Si vous souhaitez agir sur plusieurs colonnes, séparez les conditions avec `||`. Par exemple, `if github.event.project_card.column_id == '12345678' || github.event.project_card.column_id == '87654321'` intervient chaque fois qu’une carte de projet est ajoutée à la colonne `12345678` ou `87654321`. Les colonnes peuvent se trouver sur différents tableaux de projet.
   - Remplacez la valeur par `remove-labels` la liste des étiquettes que vous souhaitez supprimer des problèmes ou des demandes de tirage qui sont déplacées vers la ou les colonnes spécifiées. Séparez plusieurs étiquettes par des virgules. Par exemple : `"help wanted, good first issue"`. Pour plus d’informations sur les étiquettes, consultez « [Gestion des étiquettes](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests) ».
6. {% data reusables.actions.commit-workflow %}

## Test du workflow

Chaque fois qu’une carte de projet sur un projet dans votre référentiel se déplace, ce workflow s’exécute. Si la carte est un problème ou une demande de tirage et est déplacée dans la colonne que vous avez spécifiée, le workflow supprime les étiquettes spécifiées du problème ou d’une demande de tirage. Les cartes qui sont des notes ne seront pas affectées.

Testez votre workflow en déplaçant un problème sur votre projet vers la colonne cible.

1. Ouvrez un problème dans votre référentiel. Pour plus d’informations, consultez « [Création d’un problème](/github/managing-your-work-on-github/creating-an-issue) ».
2. Étiquetez le problème avec les étiquettes que vous souhaitez supprimer du workflow. Pour plus d’informations, consultez « [Gestion des étiquettes](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests) ».
3. Ajoutez le problème à la colonne de projet que vous avez spécifiée dans votre fichier de workflow. Pour plus d’informations, consultez « [Ajout de problèmes et de demandes de tirage à un tableau de projet](/github/managing-your-work-on-github/adding-issues-and-pull-requests-to-a-project-board) ».
4. Pour afficher l’exécution du workflow qui a été déclenchée en ajoutant le problème au projet, affichez l’historique de vos exécutions de workflow. Pour plus d’informations, consultez « [Affichage de l’historique des exécutions de workflows](/actions/managing-workflow-runs/viewing-workflow-run-history) ».
5. Une fois le workflow terminé, le problème que vous avez ajouté à la colonne de projet doit avoir supprimé les étiquettes spécifiées.

## Étapes suivantes

- Pour en savoir plus sur d’autres opérations que vous pouvez effectuer avec l’action`andymckay/labeler`, notamment l’ajout d’étiquettes ou l’annulation de cette action si le problème est affecté ou a une étiquette spécifique, consultez la [documentation de l’action `andymckay/labeler`](https://github.com/marketplace/actions/simple-issue-labeler).
- [Visitez GitHub](https://github.com/search?q=%22uses:+andymckay/labeler%22&type=code) pour trouver des exemples de workflow utilisant cette action.
