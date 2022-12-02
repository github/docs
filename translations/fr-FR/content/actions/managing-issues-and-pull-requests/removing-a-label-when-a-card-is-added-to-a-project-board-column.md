---
title: Suppression d’une étiquette lorsqu’une carte est ajoutée à une colonne de tableau de projet
intro: 'Vous pouvez utiliser {% data variables.product.prodname_actions %} pour supprimer automatiquement une étiquette quand un problème ou une demande de tirage est ajouté à une colonne spécifique d’un {% data variables.projects.projects_v1_board %}.'
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
ms.openlocfilehash: d86d9e5ad198c9cf8811b47f2a6c8a7114e20104
ms.sourcegitcommit: 4d6d3735d32540cb6de3b95ea9a75b8b247c580d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/30/2022
ms.locfileid: '148185628'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

Ce tutoriel montre comment utiliser [l’action `actions/github-script`](https://github.com/marketplace/actions/github-script) avec une condition pour supprimer une étiquette des problèmes et des demandes de tirage qui sont ajoutées à une colonne spécifique sur un {% data variables.projects.projects_v1_board %}. Par exemple, vous pouvez supprimer l’étiquette `needs review` lorsque les cartes de projet sont déplacées vers la colonne `Done`.

Dans le tutoriel, vous allez d’abord créer un fichier de workflow qui utilise [l’action `actions/github-script`](https://github.com/marketplace/actions/github-script). Ensuite, vous personnaliserez le workflow en fonction de vos besoins.

## Création du workflow

1. {% data reusables.actions.choose-repo %}
2. Choisissez un {% data variables.projects.projects_v1_board %} qui appartient au dépôt. Ce workflow ne peut pas être utilisé avec des projets appartenant à des utilisateurs ou à des organisations. Vous pouvez utiliser un {% data variables.projects.projects_v1_board %}, ou créer un {% data variables.projects.projects_v1_board %}. Pour plus d’informations sur la création d’un projet, consultez « [Création d’un {% data variables.product.prodname_project_v1 %}](/github/managing-your-work-on-github/creating-a-project-board) ».
3. {% data reusables.actions.make-workflow-file %}
4. Copiez le contenu YAML suivant dans votre fichier de workflow.

    ```yaml{:copy}
    name: Remove a label
    on:
      project_card:
        types:
          - moved
    jobs:
      remove_label:
        if: github.event.project_card.column_id == '12345678'
        runs-on: ubuntu-latest
        permissions:
          issues: write
          pull-requests: write
        steps:
          - uses: {% data reusables.actions.action-github-script %}
            with:
              script: |
                // this gets the number at the end of the content URL, which should be the issue/PR number
                const issue_num = context.payload.project_card.content_url.split('/').pop()
                github.rest.issues.removeLabel({
                  issue_number: issue_num,
                  owner: context.repo.owner,
                  repo: context.repo.repo,
                  name: ["needs review"]
                })
    ```

5. Personnalisez les paramètres dans votre fichier de workflow :
   - Dans `github.event.project_card.column_id == '12345678'`, remplacez `12345678` par l’ID de la colonne dans laquelle vous souhaitez annuler l’étiquette des problèmes et les demandes de tirage déplacées vers cet emplacement.

     Pour trouver l’ID de colonne, accédez à votre {% data variables.projects.projects_v1_board %}. En regard du titre de la colonne, cliquez sur {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} puis cliquez sur **Copier le lien de colonne**. L’ID de colonne est le numéro affiché à la fin du lien copié. Par exemple, `24687531` est l’ID de colonne pour `https://github.com/octocat/octo-repo/projects/1#column-24687531`.

     Si vous souhaitez agir sur plusieurs colonnes, séparez les conditions avec `||`. Par exemple, `if github.event.project_card.column_id == '12345678' || github.event.project_card.column_id == '87654321'` intervient chaque fois qu’une carte de projet est ajoutée à la colonne `12345678` ou `87654321`. Les colonnes peuvent se trouver sur différents tableaux de projet.
   - Remplacez la valeur de `name` dans la fonction `github.rest.issues.removeLabel()` par le nom de l’étiquette que vous souhaitez supprimer des problèmes ou des demandes de tirage qui sont déplacés vers la ou les colonnes spécifiées. Pour plus d’informations sur les étiquettes, consultez « [Gestion des étiquettes](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests) ».
6. {% data reusables.actions.commit-workflow %}

## Test du workflow

Chaque fois qu’une carte de projet sur un {% data variables.projects.projects_v1_board %} de votre dépôt se déplace, ce workflow s’exécute. Si la carte est un problème ou une demande de tirage et est déplacée dans la colonne que vous avez spécifiée, le workflow supprime l’étiquette spécifiée du problème ou d’une demande de tirage. Les cartes qui sont des notes ne seront pas affectées.

Testez votre workflow en déplaçant un problème de votre {% data variables.projects.projects_v1_board %} vers la colonne cible.

1. Ouvrez un problème dans votre référentiel. Pour plus d’informations, consultez « [Création d’un problème](/github/managing-your-work-on-github/creating-an-issue) ».
2. Étiquetez le problème avec l’étiquette que vous souhaitez supprimer du workflow. Pour plus d’informations, consultez « [Gestion des étiquettes](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests) ».
3. Ajoutez le problème à la colonne de {% data variables.projects.projects_v1_board %} que vous avez spécifiée dans votre fichier de workflow. Pour plus d’informations, consultez « [Ajout de problèmes et de demandes de tirage à un {% data variables.product.prodname_project_v1 %}](/github/managing-your-work-on-github/adding-issues-and-pull-requests-to-a-project-board) ».
4. Pour afficher l’exécution du workflow qui a été déclenchée en ajoutant le problème au projet, affichez l’historique de vos exécutions de workflow. Pour plus d’informations, consultez « [Affichage de l’historique des exécutions de workflows](/actions/managing-workflow-runs/viewing-workflow-run-history) ».
5. Une fois le workflow terminé, le problème que vous avez ajouté à la colonne de projet doit avoir l’étiquette spécifiée supprimée.

## Étapes suivantes

- Pour en savoir plus sur d’autres choses que vous pouvez faire avec l’action `actions/github-script`, consultez la [documentation sur l’action `actions/github-script`](https://github.com/marketplace/actions/github-script).
- [Visitez GitHub](https://github.com/search?q=%22uses:+actions/github-script%22&type=code) pour trouver des exemples de workflow utilisant cette action.
