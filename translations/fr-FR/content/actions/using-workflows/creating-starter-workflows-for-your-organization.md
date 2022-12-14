---
title: Création de workflows de démarrage pour votre organisation
shortTitle: Creating starter workflows
intro: Découvrez comment créer des workflows de démarrage pour aider les membres de votre équipe à ajouter plus facilement de nouveaux workflows.
redirect_from:
  - /actions/configuring-and-managing-workflows/sharing-workflow-templates-within-your-organization
  - /actions/learn-github-actions/creating-workflow-templates
  - /actions/learn-github-actions/creating-starter-workflows-for-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - CI
ms.openlocfilehash: cbaecefc90f3593b8883c7ccad5256b4addf972c
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884188'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Vue d’ensemble

{% data reusables.actions.workflow-organization-templates %}

{% data reusables.actions.starter-workflow-categories %}

## Création d’un workflow de démarrage

Les workflows de démarrage peuvent être créés par les utilisateurs disposant d’un accès en écriture au dépôt `.github` de l’organisation. Ils peuvent ensuite être utilisés par les membres de l’organisation qui disposent de l’autorisation de créer des workflows.

{% ifversion fpt %} Les workflows de démarrage créés par les utilisateurs ne peuvent être utilisés que pour créer des workflows dans des dépôts publics. Les organisations utilisant {% data variables.product.prodname_ghe_cloud %} peuvent également utiliser des workflows de démarrage pour créer des workflows dans des dépôts privés. Pour plus d’informations, consultez la [documentation {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/actions/learn-github-actions/creating-starter-workflows-for-your-organization).
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %} {% note %}

**Remarque :** Pour éviter la duplication entre les workflows de démarrage, vous pouvez appeler des workflows réutilisables à partir d’un workflows. La gestion de vos workflows peut s’en trouver simplifiée. Pour plus d’informations, consultez « [Réutilisation de workflows](/actions/learn-github-actions/reusing-workflows) ».

{% endnote %} {% endif %}

Cette procédure montre comment créer un workflow de démarrage et un fichier de métadonnées. Le fichier de métadonnées décrit la façon dont les workflows de démarrage sont présentés aux utilisateurs lors de la création d’un workflow.

1. S’il n’existe pas encore, créez un dépôt public nommé `.github` dans votre organisation.
2. Créez un répertoire nommé `workflow-templates`.
3. Créez votre nouveau fichier de workflow dans le répertoire `workflow-templates`.

   Si vous devez faire référence à la branche par défaut d’un dépôt, vous pouvez utiliser l’espace réservé `$default-branch`. Lorsqu’un workflow est créé, l’espace réservé est automatiquement remplacé par le nom de la branche par défaut du dépôt.

   Par exemple, ce fichier nommé `octo-organization-ci.yml` illustre un workflow de base.

   ```yaml
   name: Octo Organization CI

   on:
     push:
       branches: [ $default-branch ]
     pull_request:
       branches: [ $default-branch ]

   jobs:
     build:
       runs-on: ubuntu-latest

       steps:
         - uses: {% data reusables.actions.action-checkout %}

         - name: Run a one-line script
           run: echo Hello from Octo Organization
   ```
4. Créez un fichier de métadonnées dans le répertoire `workflow-templates`. Le fichier de métadonnées doit porter le même nom que le fichier de workflow, mais au lieu de l’extension `.yml`, l’extension `.properties.json` doit lui être ajoutée. Par exemple, ce fichier nommé `octo-organization-ci.properties.json` contient les métadonnées d’un fichier de workflow nommé `octo-organization-ci.yml` :
   ```yaml
   {
       "name": "Octo Organization Workflow",
       "description": "Octo Organization CI starter workflow.",
       "iconName": "example-icon",
       "categories": [
           "Go"
       ],
       "filePatterns": [
           "package.json$",
           "^Dockerfile",
           ".*\\.md$"
       ]
   }
   ```
   * `name` - **Obligatoire.** Nom du workflow. Celui-ci s’affiche dans la liste des workflows disponibles.
   * `description` - **Obligatoire.** Description du workflow. Celui-ci s’affiche dans la liste des workflows disponibles.
   * `iconName` - **Facultatif.** Spécifie une icône pour le workflow affiché dans la liste des workflows. La valeur `iconName` doit être le nom d’un fichier SVG, sans l’extension de nom de fichier, stocké dans le répertoire `workflow-templates`. Par exemple, un fichier SVG nommé `example-icon.svg` est référencé comme `example-icon` .
   * `categories` - **Facultatif.** Définit la catégorie de langage du workflow. Lorsqu’un utilisateur affiche les workflows de démarrage disponibles pour un dépôt, les workflows qui correspondent au langage identifié pour le projet sont davantage mis en évidence. Pour plus d’informations sur les catégories de langages disponibles, consultez https://github.com/github/linguist/blob/master/lib/linguist/languages.yml.
   * `filePatterns` - **Facultatif.** Permet d’utiliser le workflow si le dépôt de l’utilisateur a dans son répertoire racine un fichier qui correspond à une expression régulière définie.

Pour ajouter un autre workflow de démarrage, ajoutez vos fichiers au même répertoire `workflow-templates`. Par exemple :

![Fichiers de workflow](/assets/images/help/images/workflow-template-files.png)

## Étapes suivantes

Pour continuer à découvrir {% data variables.product.prodname_actions %}, consultez « [Utilisation de workflows de démarrage](/actions/using-workflows/using-starter-workflows) ».
