---
title: Configuration d’un dépôt modèle pour GitHub Codespaces
shortTitle: Set up a template repo
intro: 'Vous pouvez aider les utilisateurs à bien démarrer avec un projet en configurant un dépôt modèle à utiliser avec {% data variables.product.prodname_github_codespaces %}.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
ms.openlocfilehash: 155aa9bf839301439d2746b4b6f0f0575d2e60ff
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159596'
---
## Introduction

En configurant un dépôt modèle, vous aidez les utilisateurs à démarrer avec votre framework, bibliothèque ou autre projet dans {% data variables.product.prodname_github_codespaces %}. Les utilisateurs peuvent ainsi commencer à utiliser immédiatement vos fichiers modèles dans un environnement de développement cloud sans avoir à se soucier du clonage de votre dépôt ou de l’installation d’outils ou d’autres dépendances. Après quelques étapes de configuration, vous pouvez configurer des utilisateurs dans un codespace comprenant des fichiers importants ouverts pour modification et une application en cours d’exécution sous un onglet de navigateur d’aperçu dans l’éditeur web {% data variables.product.prodname_vscode_shortname %}.

Toute personne ayant accès en lecture à votre dépôt modèle peut créer un codespace à partir de la page du dépôt sur {% data variables.product.product_name %}. Vous pouvez transformer n’importe quel dépôt existant en modèle sans qu’il vous soit nécessaire de modifier des paramètres pour permettre aux utilisateurs de créer un codespace à partir de votre dépôt modèle. Pour plus d’informations sur la transformation d’un dépôt en modèle, consultez « [Création d’un dépôt modèle](/repositories/creating-and-managing-repositories/creating-a-template-repository) ».

Vous pouvez fournir un lien au format `https://github.com/codespaces/new?template_repository=OWNER/TEMPLATE-REPO` pour diriger directement les utilisateurs vers une page « Créer un codespace » pour votre modèle.

![Capture d’écran de la page « Créer un codespace »](/assets/images/help/codespaces/create-a-new-codespace-page.png)

Par exemple, vous pouvez fournir ce lien dans un tutoriel pour démarrer avec votre framework. Dans votre lien, remplacez `OWNER/TEMPLATE-REPO` par le nom de votre dépôt modèle. Par exemple : `monalisa/octo-template`.

Quand quelqu’un crée un codespace à partir de votre modèle, le contenu de votre dépôt modèle est cloné dans son codespace. Quand l’utilisateur est prêt, il peut publier son travail dans un nouveau dépôt sur {% data variables.product.product_name %} appartenant à son compte personnel. Tous les frais d’utilisation du codespace sont facturés à l’utilisateur qui l’a créé. Pour plus d’informations, consultez « [Création d’un codespace à partir d’un modèle](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template) ».

## Décrire votre modèle

Si vous n’en avez pas, créez un fichier README pour votre dépôt modèle afin de décrire l’objectif de votre modèle et comment démarrer. Pour plus d’informations, consultez « [À propos des fichiers README](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes) ».

La page « Créer un codespace » où les utilisateurs arrivent quand ils suivent le lien `https://github.com/codespaces/new?template_repository=OWNER/TEMPLATE-REPO` contient une brève description de votre modèle. Cette description provient du champ **Description** que vous pouvez définir quand vous créez un dépôt. Vous pouvez modifier cette description à tout moment en accédant à la page du dépôt et en cliquant sur **{% octicon "gear" aria-label="The Settings gear" %}** à côté de la section **À propos de** à droite de la page.

![Capture d’écran de la section « À propos » dans une page de dépôt](/assets/images/help/repository/repository-settings-icon.png)

## Ajouter des fichiers de démarrage

Les dépôts modèles contiennent généralement des fichiers de démarrage avec du code réutilisable pour permettre aux utilisateurs de démarrer rapidement avec une bibliothèque, un framework ou une autre technologie.

Pour obtenir des conseils sur les types de fichiers à inclure, vous pouvez consulter les fichiers de démarrage inclus dans les modèles {% data variables.product.company_short %} officiels pour {% data variables.product.prodname_github_codespaces %}, comme suit.

{% data reusables.codespaces.your-codespaces-procedure-step %} {% data reusables.codespaces.view-all-templates-step %}
1. Pour afficher le dépôt modèle contenant les fichiers du modèle, cliquez sur le nom du modèle.

   ![Capture d’écran de la section « Explorer les modèles de démarrage rapide », avec « React » mis en évidence](/assets/images/help/codespaces/react-template-name.png)

## Configurer l’image conteneur

Vous pouvez ajouter des fichiers de configuration de conteneur de développement à votre dépôt modèle afin de personnaliser l’environnement de développement pour les personnes utilisant votre modèle avec {% data variables.product.prodname_github_codespaces %}. Vous pouvez choisir parmi une liste de paramètres de configuration prédéfinis dans {% data variables.product.prodname_vscode %} ou vous pouvez créer une configuration personnalisée en écrivant votre propre fichier `devcontainer.json`. Si vous n’ajoutez pas de fichiers de configuration, l’image conteneur par défaut est utilisée. Pour plus d’informations, consultez « [Présentation des conteneurs de développement](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers) » et « [Ajouter une configuration de conteneur de développement à votre dépôt](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces) ».

{% note %}

**Remarque :** {% data reusables.codespaces.configuration-choice-templates %}

{% endnote %}

Vous devez configurer votre conteneur de développement avec les outils et les personnalisations nécessaires pour offrir aux utilisateurs la meilleure expérience possible avec votre modèle. Par exemple, dans votre fichier `devcontainer.json` : 
- Vous pouvez utiliser la propriété `openFiles` pour définir une liste de fichiers à ouvrir automatiquement dans le client web {% data variables.product.prodname_vscode_shortname %} quand un codespace est créé à partir de votre modèle.
- Si votre modèle contient des fichiers pour une application web, vous pouvez l’exécuter automatiquement dans le codespace de l’utilisateur. Pour cela, utilisez la propriété `postAttachCommand` pour exécuter un script qui démarre l’application sur un serveur local dès que le client web {% data variables.product.prodname_vscode_shortname %} se connecte au codespace, puis définissez la propriété `onAutoForward` d’un port sur `openPreview` pour afficher l’application exécutée sur ce port dans un navigateur simple incorporé au client web {% data variables.product.prodname_vscode_shortname %}.

Les paramètres de configuration suivants pour un modèle React ouvrent le fichier `app.js` dans l’éditeur de l’utilisateur, exécutent `npm start` (défini dans un fichier `package.json`) pour démarrer un serveur local et transfèrent le port `3000` vers un onglet de navigateur d’aperçu dans le codespace.

```JSON
{
    "postAttachCommand": {
      "server": "npm start",
    },

    "portsAttributes": {
      "3000": {
        "label": "Application",
        "onAutoForward": "openPreview"
      }
    },

    "customizations": {
      "codespaces": {
        "openFiles": ["src/App.js"]
      }
    }
}
```
Pour plus d’informations, consultez « [Ouverture automatique de fichiers dans les codespaces d’un dépôt](/codespaces/setting-up-your-project-for-codespaces/automatically-opening-files-in-the-codespaces-for-a-repository) » et la [spécification des conteneurs de développement](https://containers.dev/implementors/json_reference/#general-properties) sur containers.dev.
