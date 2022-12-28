---
title: Configuration de votre projet Node.js pour GitHub Codespaces
allowTitleToDifferFromFilename: true
shortTitle: Setting up your Node.js project
intro: 'Commencez votre projet JavaScript, Node.js ou TypeScript dans {% data variables.product.prodname_github_codespaces %} en créant un conteneur de développement personnalisé.'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /codespaces/getting-started-with-codespaces/getting-started-with-your-nodejs-project-in-codespaces
type: tutorial
topics:
  - Codespaces
  - Developer
  - Node
  - JavaScript
hasExperimentalAlternative: true
hidden: true
ms.openlocfilehash: 19c29f7d3c8110d1c671a9af46227a399a467800
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159592'
---
## Introduction

Ce guide vous montre comment configurer votre projet JavaScript, Node.js ou TypeScript {% data reusables.codespaces.setting-up-project-intro %}

### Prérequis

- Vous devez disposer d’un projet JavaScript, Node.js ou TypeScript existant dans un référentiel sur {% data variables.product.prodname_dotcom_the_website %}. Si vous n’avez pas de projet, vous pouvez essayer ce tutoriel avec l’exemple suivant : https://github.com/microsoft/vscode-remote-try-node
- Vous devez activer {% data variables.product.prodname_github_codespaces %} pour votre organisation.

## Étape 1 : ouvrir votre projet dans un codespace

1. Sous le nom du dépôt, utilisez le menu déroulant **{% octicon "code" aria-label="The code icon" %} Code**. Ensuite, sous l’onglet **Codespaces**, cliquez sur le signe plus ({% octicon "plus" aria-label="The plus icon" %}).

   ![Bouton Nouveau codespace](/assets/images/help/codespaces/new-codespace-button.png)

Lorsque vous créez un codespace, votre projet est créé sur une machine virtuelle distante qui vous est dédiée. Par défaut, le conteneur de votre codespace comporte de nombreux langages et runtimes, notamment Node.js, JavaScript, Typescript, nvm, npm et yarn. Il inclut également un ensemble commun d’outils tels que git, wget, rsync, openssh et nano.

{% data reusables.codespaces.customize-vcpus-and-ram %}

## Étape 2 : Ajouter une configuration de conteneur de développement à votre référentiel à partir d’un modèle

Le conteneur de développement par défaut, ou « conteneur dev », pour {% data variables.product.prodname_github_codespaces %} prend en charge l’exécution de projets Node.js tels que [vscode-remote-try-node](https://github.com/microsoft/vscode-remote-try-node) sans configuration supplémentaire. Toutefois, nous vous recommandons de configurer votre propre conteneur de développement, car cela vous permet de définir tous les outils et scripts spécifiques dont votre projet a besoin. Cela garantit un environnement entièrement reproductible pour tous les utilisateurs {% data variables.product.prodname_github_codespaces %} de votre référentiel.

{% data reusables.codespaces.setup-custom-devcontainer %}

{% data reusables.codespaces.command-palette-container %}
1. Pour cet exemple, cliquez sur **Node.js**.  Si vous avez besoin de fonctionnalités supplémentaires, vous pouvez sélectionner n’importe quel conteneur spécifique à Node ou une combinaison d’outils comme Node et MongoDB.

   ![Sélectionnez l’option Node dans la liste](/assets/images/help/codespaces/add-node-prebuilt-container.png)

1. Cliquez sur la version recommandée de Node.js.

   ![Sélection de la version de Node.js](/assets/images/help/codespaces/add-node-version.png)

{% data reusables.codespaces.rebuild-command %}

### Anatomie de votre conteneur de développement

L’ajout du modèle de conteneur de développement Node.js ajoute un répertoire `.devcontainer` à la racine du référentiel de votre projet avec les fichiers suivants :

- `devcontainer.json`
- Dockerfile

Le fichier `devcontainer.json` nouvellement ajouté définit quelques propriétés décrites après l’exemple.

#### devcontainer.json

```json
// For format details, see https://aka.ms/devcontainer.json. For config options, see the README at:
// https://github.com/microsoft/vscode-dev-containers/tree/v0.162.0/containers/javascript-node
{
    "name": "Node.js",
    "build": {
        "dockerfile": "Dockerfile",
        // Update 'VARIANT' to pick a Node version: 10, 12, 14
        "args": { "VARIANT": "14" }
    },

    // Set *default* container specific settings.json values on container create.
    "settings": {
        "terminal.integrated.shell.linux": "/bin/bash"
    },

    // Add the IDs of extensions you want installed when the container is created.
    "extensions": [
        "dbaeumer.vscode-eslint"
    ],

    // Use 'forwardPorts' to make a list of ports inside the container available locally.
    // "forwardPorts": [],

    // Use 'postCreateCommand' to run commands after the container is created.
    // "postCreateCommand": "yarn install",

    // Comment out connect as root instead. More info: https://aka.ms/vscode-remote/containers/non-root.
    "remoteUser": "node"
}
```

- **nom** : vous pouvez nommer votre conteneur de développement comme vous le souhaitez, il s’agit simplement de la valeur par défaut.
- **build** : propriétés de build.
  - **dockerfile** : dans l’objet `build`, `dockerfile` contient le chemin d’accès au fichier Dockerfile qui a également été ajouté à partir du modèle.
  - **args**
    - **variant** : ce fichier ne contient qu’un seul argument de build, qui est la variante de nœud que nous voulons utiliser qui est passée dans le fichier Dockerfile.
- **settings** : il s’agit de paramètres {% data variables.product.prodname_vscode %} que vous pouvez définir.
  - **terminal.integrated.shell.linux** : bien que bash soit la valeur par défaut ici, vous pouvez utiliser d’autres interpréteurs de commandes en modifiant ce paramètre.
- **extensions** : il s’agit des extensions incluses par défaut.
  - **dbaeumer.vscode-eslint** : ES lint est une excellente extension pour le linting, mais pour JavaScript, il existe un certain nombre d’extensions de la Place de marché que vous pouvez également inclure.
- **forwardPorts** : tous les ports répertoriés ici seront transférés automatiquement. Pour plus d’informations, consultez « [Transfert de ports dans votre codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace) ».
- **postCreateCommand** : à utiliser pour exécuter des commandes qui ne sont pas définies dans le fichier Dockerfile, une fois le codespace créé.
- **remoteUser** : par défaut, vous travaillez en tant qu’utilisateur vscode, mais vous pouvez aussi définir cette valeur sur root.

#### Dockerfile

```bash
# [Choice] Node.js version: 14, 12, 10
ARG VARIANT="14-buster"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node modules
# RUN su node -c "npm install -g <your-package-list-here>"
```

Vous pouvez utiliser le fichier Dockerfile pour ajouter des couches de conteneur supplémentaires et spécifier des packages de système d’exploitation, des versions de nœud ou des packages globaux à inclure dans le conteneur.

## Étape 3 : modifier votre fichier devcontainer.json

Une fois votre configuration de conteneur de développement ajoutée et après avoir généralement compris le fonctionnement de chaque élément, vous pouvez désormais apporter des modifications pour personnaliser davantage votre environnement. Dans cet exemple, vous allez ajouter des propriétés pour installer npm lorsque votre espace de code démarre et créer une liste de ports à l’intérieur du conteneur disponible localement.

1. Dans l’explorateur, sélectionnez le fichier `devcontainer.json` dans l’arborescence pour l’ouvrir. Vous devrez peut-être développer le dossier `.devcontainer` pour le voir.

   ![Fichier devcontainer.json dans l’explorateur](/assets/images/help/codespaces/devcontainers-options.png)

2. Ajoutez les lignes suivantes à votre fichier `devcontainer.json` après `extensions` :

   ```json{:copy}
   "postCreateCommand": "npm install",
   "forwardPorts": [4000],
   ```

   {% data reusables.codespaces.more-info-devcontainer %}

{% data reusables.codespaces.rebuild-command %}

   {% data reusables.codespaces.rebuild-reason %}

## Étape 4 : Exécuter votre application

Dans la section précédente, vous avez utilisé `postCreateCommand` pour installer un ensemble de packages via npm. Vous pouvez maintenant l’utiliser pour exécuter notre application avec npm.

1. Exécutez votre commande de démarrage dans le terminal avec `npm start`.

   ![npm start dans le terminal](/assets/images/help/codespaces/codespaces-npmstart.png)

2. Quand votre projet démarre, vous devriez voir un message de notification « toast » dans le coin inférieur droit de {% data variables.product.prodname_vscode_shortname %}, avec une invite pour vous connecter au port utilisé par votre projet.

   ![Notification « toast » de transfert de port](/assets/images/help/codespaces/codespaces-port-toast.png)

## Étape 5 : valider vos modifications

{% data reusables.codespaces.committing-link-to-procedure %}

## Étapes suivantes

Vous devriez maintenant être en mesure de développer votre projet JavaScript dans {% data variables.product.prodname_github_codespaces %}. Voici quelques ressources supplémentaires pour les scénarios plus avancés.

{% data reusables.codespaces.next-steps-adding-devcontainer %}
