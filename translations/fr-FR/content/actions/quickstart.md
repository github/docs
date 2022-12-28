---
title: Démarrage rapide pour GitHub Actions
intro: 'Essayez les fonctionnalités de {% data variables.product.prodname_actions %} en 5 minutes ou moins.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /actions/getting-started-with-github-actions/starting-with-preconfigured-workflow-templates
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: quick_start
topics:
  - Fundamentals
shortTitle: Quickstart
ms.openlocfilehash: 164aef041c509264c9e8440d5339bce3cf4aaaca
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146139456'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

Vous n’avez besoin que d’un dépôt {% data variables.product.prodname_dotcom %} pour créer et exécuter un workflow {% data variables.product.prodname_actions %}. Dans ce guide, vous allez ajouter un workflow qui illustre certaines des fonctionnalités essentielles de {% data variables.product.prodname_actions %}. 

L’exemple suivant vous montre comment les travaux {% data variables.product.prodname_actions %} peuvent être déclenchés automatiquement, où ils s’exécutent et comment ils peuvent interagir avec le code dans votre dépôt.

## Création de votre premier workflow

1. Créez un répertoire `.github/workflows` dans votre dépôt sur {% data variables.product.prodname_dotcom %} si ce répertoire n’existe pas déjà.
2. Dans le répertoire `.github/workflows`, créez un fichier nommé `github-actions-demo.yml`. Pour plus d’informations, consultez « [Création de nouveaux fichiers](/github/managing-files-in-a-repository/creating-new-files) ».
3. Copiez le contenu YAML suivant dans le fichier `github-actions-demo.yml` :  {% raw %}
    ```yaml{:copy}
    name: GitHub Actions Demo
    on: [push]
    jobs:
      Explore-GitHub-Actions:
        runs-on: ubuntu-latest
        steps:
          - run: echo "🎉 The job was automatically triggered by a ${{ github.event_name }} event."
          - run: echo "🐧 This job is now running on a ${{ runner.os }} server hosted by GitHub!"
          - run: echo "🔎 The name of your branch is ${{ github.ref }} and your repository is ${{ github.repository }}."{% endraw %}
          - name: Check out repository code
            uses: {% data reusables.actions.action-checkout %}{% raw %}
          - run: echo "💡 The ${{ github.repository }} repository has been cloned to the runner."
          - run: echo "🖥️ The workflow is now ready to test your code on the runner."
          - name: List files in the repository
            run: |
              ls ${{ github.workspace }}
          - run: echo "🍏 This job's status is ${{ job.status }}."

    ```
    {% endraw %}
3. Faites défiler la page jusqu’en bas et sélectionnez **Créer une branche pour ce commit, puis lancer une demande de tirage**. Ensuite, pour créer une demande de tirage (pull request), cliquez sur **Proposer un nouveau fichier**.
    ![Commiter le fichier de workflow](/assets/images/help/repository/actions-quickstart-commit-new-file.png)

Le commit du fichier de workflow dans une branche de votre dépôt déclenche l’événement `push` et exécute votre workflow.

## Affichage des résultats de votre workflow

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. Dans la barre latérale gauche, cliquez sur le workflow que vous souhaitez afficher.

   ![Liste de workflows dans la barre latérale gauche](/assets/images/help/repository/actions-quickstart-workflow-sidebar.png)
1. Dans la liste des exécutions de workflow, cliquez sur le nom de l’exécution que vous souhaitez voir.

   ![Nom de l’exécution de workflow](/assets/images/help/repository/actions-quickstart-run-name.png)
1. Sous **Jobs**, cliquez sur le travail **Explore-GitHub-Actions**.

   ![Localiser le travail](/assets/images/help/repository/actions-quickstart-job.png)
1. Le journal vous montre comment chacune des étapes a été traitée. Développez l’une des étapes pour afficher ses détails.

   ![Exemples de résultats de workflow](/assets/images/help/repository/actions-quickstart-logs.png)
   
   Par exemple, vous pouvez voir la liste des fichiers dans votre dépôt : ![exemple de détail de l’action](/assets/images/help/repository/actions-quickstart-log-detail.png)
   
## Plus de workflows de démarrage

{% data reusables.actions.workflow-template-overview %}

## Exemples plus complexes
{% data reusables.actions.link-to-example-library %}

## Étapes suivantes

L’exemple de workflow que vous venez d’ajouter s’exécute chaque fois que du code est envoyé (push) vers la branche et vous montre comment {% data variables.product.prodname_actions %} peut fonctionner avec le contenu de votre dépôt. Mais ce n’est que le début de ce que vous pouvez faire avec {% data variables.product.prodname_actions %} :

- Votre dépôt peut contenir plusieurs workflows qui déclenchent des travaux différents en fonction d’événements différents. 
- Vous pouvez utiliser un workflow pour installer des applications de test de logiciels et faire en sorte qu’elles testent automatiquement votre code sur les exécuteurs de {% data variables.product.prodname_dotcom %}. 

{% data variables.product.prodname_actions %} peut vous aider à automatiser presque tous les aspects de vos processus de développement d’applications. Vous êtes prêt à commencer ? Voici quelques ressources utiles pour effectuer vos étapes suivantes avec {% data variables.product.prodname_actions %} :

- « [Découvrir {% data variables.product.prodname_actions %}](/actions/learn-github-actions) » pour obtenir un tutoriel approfondi.
