---
title: Déplacement des problèmes attribués sur les tableaux de projet
intro: 'Vous pouvez utiliser {% data variables.product.prodname_actions %} pour déplacer automatiquement un problème vers une colonne spécifique d’un tableau de projet quand le problème est affecté.'
redirect_from:
  - /actions/guides/moving-assigned-issues-on-project-boards
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
shortTitle: Move assigned issues
ms.openlocfilehash: 88cec7ca6f2e7774fb29407b0b3ee14dc7041067
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147410458'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

Ce tutoriel montre comment utiliser [l’action `alex-page/github-project-automation-plus`](https://github.com/marketplace/actions/github-project-automation) pour déplacer automatiquement un problème vers une colonne spécifique d’un tableau de projet lorsque le problème est affecté. Par exemple, quand un problème est affecté, vous pouvez le placer dans la colonne `In Progress` de votre tableau de projet.

Dans ce tutoriel, vous allez d’abord créer un fichier de workflow qui utilise [l’action `alex-page/github-project-automation-plus`](https://github.com/marketplace/actions/github-project-automation). Ensuite, vous personnaliserez le workflow en fonction de vos besoins.

## Création du workflow

1. {% data reusables.actions.choose-repo %}
2. Dans votre dépôt, choisissez un tableau de projet. Vous pouvez utiliser un projet existant ou en créer un nouveau. Pour plus d’informations sur la création d’un projet, consultez « [Création d’un tableau de projet](/github/managing-your-work-on-github/creating-a-project-board) ».
3. {% data reusables.actions.make-workflow-file %}
4. Copiez le contenu YAML suivant dans votre fichier de workflow.

    ```yaml{:copy}
{% indented_data_reference reusables.actions.actions-not-certified-by-github-comment spaces=4 %}

{% indented_data_reference reusables.actions.actions-use-sha-pinning-comment spaces=4 %}

    name: Move assigned card
    on:
      issues:
        types:
          - assigned
    jobs:
      move-assigned-card:
        runs-on: ubuntu-latest
        steps:
          - uses: alex-page/github-project-automation-plus@5bcba1c1c091a222584d10913e5c060d32c44044
            with:
              project: Docs Work
              column: In Progress
              repo-token: {% raw %}${{ secrets.PERSONAL_ACCESS_TOKEN }}{% endraw %}
    ```

5. Personnalisez les paramètres dans votre fichier de workflow :
   - Remplacez la valeur de `project` par le nom de votre tableau de projet. Si vous avez plusieurs tableaux de projet portant le même nom, l’action `alex-page/github-project-automation-plus` agit sur tous les projets portant le nom spécifié.
   - Remplacez la valeur de `column` par le nom de la colonne dans laquelle vous souhaitez que les problèmes soient placés quand ils sont affectés.
   - Remplacez la valeur de `repo-token` :
     1. Créez un jeton d’accès personnel avec l’étendue `repo`. Pour plus d’informations, consultez « [Création d’un jeton d’accès personnel](/github/authenticating-to-github/creating-a-personal-access-token) ».
     1. Stockez ce jeton d’accès personnel comme secret dans votre dépôt. Pour plus d’informations sur le stockage de secrets, consultez « [Secrets chiffrés](/actions/reference/encrypted-secrets) ».
     1. Dans votre fichier de workflow, remplacez `PERSONAL_ACCESS_TOKEN` par le nom de votre secret.
6. {% data reusables.actions.commit-workflow %}

## Test du workflow

Chaque fois qu’un problème dans votre dépôt est affecté, le problème est placé dans la colonne de tableau de projet spécifiée. Si le problème ne figure pas encore dans le tableau de projet, il est ajouté au tableau de projet.

Si votre dépôt appartient à l’utilisateur, l’action `alex-page/github-project-automation-plus` agit sur tous les projets de votre dépôt ou compte personnel qui ont le nom et la colonne de projet spécifiés. De même, si votre dépôt appartient à l’organisation, l’action agit sur tous les projets de votre dépôt ou organisation qui ont le nom et la colonne de projet spécifiés.

Testez votre workflow en affectant un problème dans votre dépôt.

1. Ouvrez un problème dans votre dépôt. Pour plus d’informations, consultez « [Création d’un problème](/github/managing-your-work-on-github/creating-an-issue) ».
2. Affectez le problème. Pour plus d’informations, consultez « [Affectation de problèmes et de demandes de tirage à d’autres utilisateurs GitHub](/github/managing-your-work-on-github/assigning-issues-and-pull-requests-to-other-github-users) ».
3. Pour voir l’exécution de workflow déclenchée par l’affectation du problème, affichez l’historique de vos exécutions de workflow. Pour plus d’informations, consultez « [Affichage de l’historique des exécutions de workflows](/actions/managing-workflow-runs/viewing-workflow-run-history) ».
4. Une fois le workflow terminé, le problème que vous avez affecté doit être ajouté à la colonne de tableau de projet spécifiée.

## Étapes suivantes

- Pour en savoir plus sur d’autres choses que vous pouvez faire avec l’action `alex-page/github-project-automation-plus`, telles que la suppression ou l’archivage des tableaux de projet, consultez la [documentation de l’action `alex-page/github-project-automation-plus`](https://github.com/marketplace/actions/github-project-automation).
