---
title: "Bien démarrage avec GitHub Codespaces pour le Machine\_Learning"
shortTitle: Machine learning
intro: "Découvrez comment travailler sur des projets Machine\_Learning avec {% data variables.product.prodname_github_codespaces %} et ses outils prêts à l’emploi."
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
  - Codespaces
  - Developer
ms.openlocfilehash: 905d5b14bfba5e47d1fdfdd7f0be75b16750652d
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158916'
---
## Introduction

Ce guide vous présente le Machine Learning avec {% data variables.product.prodname_github_codespaces %}. Vous allez générer un classifieur d’images simple, découvrir certains des outils qui sont préinstallés dans {% data variables.product.prodname_github_codespaces %}, configurer votre environnement de développement pour NVIDIA CUDA et ouvrir votre codespace dans JupyterLab.

## Génération d’un classifieur d’images simple

Nous allons utiliser un notebook Jupyter pour générer un classifieur d’images simple. 

Les notebooks Jupyter sont des ensembles de cellules que vous pouvez exécuter l’une après l’autre. Le notebook que nous allons utiliser comprend un certain nombre de cellules qui génèrent un classifieur d’images à l’aide de [PyTorch](https://pytorch.org/). Chaque cellule est une phase différente de ce processus : télécharger un jeu de données, configurer un réseau neuronal, entraîner un modèle, puis tester ce modèle.

Nous allons exécuter toutes les cellules, l’une après l’autre, pour effectuer toutes les phases de génération du classifieur d’images. Lorsque nous effectuons cette opération, Jupyter enregistre la sortie dans le notebook pour vous permettre d’examiner les résultats.

### Création d’un codespace

1. Accédez au dépôt de modèles [github/codespaces-jupyter](https://github.com/github/codespaces-jupyter).
{% data reusables.codespaces.open-template-in-codespace-step %}

Un codespace pour ce modèle s’ouvre dans une version web de {% data variables.product.prodname_vscode %}.

### Ouverture du notebook du classifieur d’images 

L’image conteneur par défaut utilisée par {% data variables.product.prodname_github_codespaces %} inclut un ensemble de bibliothèques de Machine Learning préinstallées dans votre codespace. Par exemple, Numpy, pandas, SciPy, Matplotlib, seaborn, scikit-learn, Keras, PyTorch, Requests et Plotly. Pour plus d’informations sur l’image par défaut, consultez « [Présentation des conteneurs de développement](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#using-the-default-dev-container-configuration) » et [le dépôt `devcontainers/images`](https://github.com/devcontainers/images/tree/main/src/universal).

1. Dans l’éditeur {% data variables.product.prodname_vscode_shortname %}, fermez tous les onglets « Bien démarrer. » qui s’affichent.
1. Ouvrez le fichier de notebook `notebooks/image-classifier.ipynb`.

### Génération du classifieur d’images

Le notebook du classifieur d’images contient tout le code dont vous avez besoin pour télécharger un jeu de données, entraîner un réseau neuronal et évaluer ses performances.

1. Cliquez sur **Exécuter tout** pour exécuter toutes les cellules du notebook.

   ![Capture d’écran du bouton Exécuter tout](/assets/images/help/codespaces/jupyter-run-all.png)

1. Faites défiler l’écran vers le bas pour voir la sortie de chaque cellule.

   ![Capture d’écran de l’étape 3 de l’éditeur](/assets/images/help/codespaces/jupyter-notebook-step3.png)

## Configuration de NVIDIA CUDA pour votre codespace

Certains logiciels exigent que vous installiez NVIDIA CUDA pour utiliser le GPU de votre codespace. Dans ce cas, vous pouvez créer votre propre configuration personnalisée à l’aide d’un fichier `devcontainer.json` et spécifier que CUDA doit être installé. Pour plus d’informations sur la création d’une configuration personnalisée, consultez « [Présentation des conteneurs de développement](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#creating-a-custom-dev-container-configuration) ».

{% note %}

**Remarque** : Pour obtenir toutes les informations sur le script qui est exécuté lorsque vous ajoutez la fonctionnalité `nvidia-cuda`, consultez [le dépôt devcontainers/features](https://github.com/devcontainers/features/tree/main/src/nvidia-cuda).

{% endnote %}

1. Dans le codespace, ouvrez le fichier `.devcontainer/devcontainer.json` dans l’éditeur.
1. Ajoutez un objet `features` de niveau supérieur avec le contenu suivant :

   ```json{:copy}
     "features": {
       "ghcr.io/devcontainers/features/nvidia-cuda:1": { 
         "installCudnn": true
       }
     }
   ```

   Pour plus d’informations sur l’objet `features`, consultez la [spécification de conteneurs de développement](https://containers.dev/implementors/features/#devcontainer-json-properties).

   Si vous utilisez le fichier `devcontainer.json` à partir du dépôt de classifieur d’images que vous avez créé pour ce tutoriel, votre fichier `devcontainer.json` ressemble maintenant à ceci :

   ```json
   {
     "customizations": {
       "vscode": {
         "extensions": [
           "ms-python.python",
           "ms-toolsai.jupyter"
         ]
       }
     },
     "features": {
       "ghcr.io/devcontainers/features/nvidia-cuda:1": { 
         "installCudnn": true
       }
     }
   }
   ```

1. Enregistrez la modification.
{% data reusables.codespaces.rebuild-command %} Le conteneur de codespace est regénéré. Ceci peut prendre plusieurs minutes. Une fois la regénération terminée, le codespace est rouvert automatiquement.
1. Publiez votre modification dans un dépôt afin que CUDA soit installé dans tous les codespaces que vous créez ensuite à partir de ce dépôt. Pour plus d’informations, consultez « [Création d’un codespace à partir d’un modèle](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template#publishing-from-vs-code) ».

## Ouverture de votre codespace dans JupyterLab

Vous pouvez ouvrir votre codespace dans JupyterLab à partir de la page « Vos codespaces » à l’adresse [github.com/codespaces](https://github.com/codespaces) ou en utilisant {% data variables.product.prodname_cli %}. Pour plus d’informations, consultez « [Ouverture d’un codespace existant](/codespaces/developing-in-codespaces/opening-an-existing-codespace) ».

{% data reusables.codespaces.jupyterlab-installed-in-codespace %}
