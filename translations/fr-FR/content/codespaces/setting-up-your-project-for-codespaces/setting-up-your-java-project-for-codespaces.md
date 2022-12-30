---
title: Configuration de votre projet Java pour GitHub Codespaces
allowTitleToDifferFromFilename: true
shortTitle: Setting up with your Java project
intro: 'Commencez votre projet Java dans {% data variables.product.prodname_github_codespaces %} en créant un conteneur de développement personnalisé.'
redirect_from:
  - /codespaces/getting-started-with-codespaces/getting-started-with-your-java-project-in-codespaces
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
hasExperimentalAlternative: true
hidden: true
ms.openlocfilehash: b861744483f61bc01e8069188c1ce6298411d57e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158764'
---
## Introduction

Ce guide vous montre comment configurer votre projet Java {% data reusables.codespaces.setting-up-project-intro %}

### Prérequis

- Vous devez disposer d’un projet Java existant dans un référentiel sur {% data variables.product.prodname_dotcom_the_website %}. Si vous n’avez pas de projet, vous pouvez essayer ce tutoriel avec l’exemple suivant : https://github.com/microsoft/vscode-remote-try-java
- Vous devez activer {% data variables.product.prodname_github_codespaces %} pour votre organisation.

## Étape 1 : ouvrir votre projet dans un codespace

1. Sous le nom du dépôt, utilisez le menu déroulant **{% octicon "code" aria-label="The code icon" %} Code**. Ensuite, sous l’onglet **Codespaces**, cliquez sur le signe plus ({% octicon "plus" aria-label="The plus icon" %}).

  ![Bouton Nouveau codespace](/assets/images/help/codespaces/new-codespace-button.png)

Lorsque vous créez un codespace, votre projet est créé sur une machine virtuelle distante qui vous est dédiée. Par défaut, le conteneur de votre codespace comporte de nombreux langages et runtimes, dont Java, nvm, npm et Yarn. Il comprend également un ensemble d’outils couramment utilisés comme git, wget, rsync, openssh et nano.

{% data reusables.codespaces.customize-vcpus-and-ram %}

## Étape 2 : ajouter une configuration de conteneur de développement à votre référentiel à partir d’un modèle

Le conteneur de développement par défaut, ou « conteneur dev », de {% data variables.product.prodname_github_codespaces %} est fourni avec la dernière version de Java, gestionnaires de package (Maven, Gradle) et d’autres outils communs préinstallés. Toutefois, nous vous recommandons de configurer votre propre conteneur de développement afin d’inclure tous les outils et scripts dont votre projet a besoin. Cela garantit un environnement entièrement reproductible pour tous les utilisateurs {% data variables.product.prodname_github_codespaces %} de votre référentiel.

{% data reusables.codespaces.setup-custom-devcontainer %}

{% data reusables.codespaces.command-palette-container %}
1. Pour cet exemple, cliquez sur **Java**. Dans la pratique, vous pouvez sélectionner n’importe quel conteneur spécifique à Java ou une combinaison d’outils tels que Java et Azure Functions.
  ![Sélectionnez l’option Java dans la liste](/assets/images/help/codespaces/add-java-prebuilt-container.png)
1. Cliquez sur la version recommandée de Java.
  ![Sélection de la version Java](/assets/images/help/codespaces/add-java-version.png) {% data reusables.codespaces.rebuild-command %}

### Anatomie de votre conteneur de développement

L’ajout du modèle de conteneur de développement Java ajoute un répertoire `.devcontainer` à la racine du référentiel de votre projet avec les fichiers suivants :

- `devcontainer.json`
- Dockerfile

Le fichier `devcontainer.json` nouvellement ajouté définit quelques propriétés décrites après l’exemple.

#### devcontainer.json

```json
// For format details, see https://aka.ms/vscode-remote/devcontainer.json or this file's README at:
// https://github.com/microsoft/vscode-dev-containers/tree/v0.159.0/containers/java
{
    "name": "Java",
    "build": {
        "dockerfile": "Dockerfile",
        "args": {
            // Update the VARIANT arg to pick a Java version: 11, 14
            "VARIANT": "11",
            // Options
            "INSTALL_MAVEN": "true",
            "INSTALL_GRADLE": "false",
            "INSTALL_NODE": "false",
            "NODE_VERSION": "lts/*"
        }
    },

    // Set *default* container specific settings.json values on container create.
    "settings": {
        "terminal.integrated.shell.linux": "/bin/bash",
        "java.home": "/docker-java-home",
        "maven.executable.path": "/usr/local/sdkman/candidates/maven/current/bin/mvn"
    },

    // Add the IDs of extensions you want installed when the container is created.
    "extensions": [
        "vscjava.vscode-java-pack"
    ],

    // Use 'forwardPorts' to make a list of ports inside the container available locally.
    // "forwardPorts": [],

    // Use 'postCreateCommand' to run commands after the container is created.
    // "postCreateCommand": "java -version",

    // Uncomment to connect as a non-root user. See https://aka.ms/vscode-remote/containers/non-root.
    "remoteUser": "vscode"
}
```

- **nom** : vous pouvez nommer votre conteneur de développement comme vous le souhaitez, il s’agit simplement de la valeur par défaut.
- **build** : propriétés de build.
  - **dockerfile** : dans l’objet `build`, `dockerfile` contient le chemin d’accès au fichier Dockerfile qui a également été ajouté à partir du modèle.
  - **args**
    - **variante** : ce fichier ne contient qu’un seul argument de build, qui est la version Java passée dans le fichier Dockerfile.
- **paramètres** : il s’agit de paramètres {% data variables.product.prodname_vscode %} que vous pouvez définir.
  - **terminal.integrated.shell.linux** : bien que bash soit la valeur par défaut ici, vous pouvez utiliser d’autres interpréteurs de commandes en modifiant ce paramètre.
- **extensions** : il s’agit des extensions incluses par défaut.
  - **vscjava.vscode-java-pack** : le pack d’extension Java fournit des extensions populaires pour le développement Java pour vous aider à démarrer.
- **forwardPorts** : tous les ports répertoriés ici seront transférés automatiquement. Pour plus d’informations, consultez « [Transfert de ports dans votre codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace) ».
- **postCreateCommand** : utilisez cette propriété pour exécuter des commandes qui ne sont pas définies dans le fichier Dockerfile, une fois votre codespace créé.
- **remoteUser** : par défaut, vous travaillez en tant qu’utilisateur `vscode`, mais vous pouvez éventuellement définir cette valeur sur `root`.

#### Dockerfile

```bash
# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.159.0/containers/java/.devcontainer/base.Dockerfile
ARG VARIANT="14"
FROM mcr.microsoft.com/vscode/devcontainers/java:0-${VARIANT}

# [Optional] Install Maven or Gradle
ARG INSTALL_MAVEN="false"
ARG MAVEN_VERSION=3.6.3
ARG INSTALL_GRADLE="false"
ARG GRADLE_VERSION=5.4.1
RUN if [ "${INSTALL_MAVEN}" = "true" ]; then su vscode -c "source /usr/local/sdkman/bin/sdkman-init.sh && sdk install maven \"${MAVEN_VERSION}\""; fi \
    && if [ "${INSTALL_GRADLE}" = "true" ]; then su vscode -c "source /usr/local/sdkman/bin/sdkman-init.sh && sdk install gradle \"${GRADLE_VERSION}\""; fi

# [Optional] Install a version of Node.js using nvm for front end dev
ARG INSTALL_NODE="true"
ARG NODE_VERSION="lts/*"
RUN if [ "${INSTALL_NODE}" = "true" ]; then su vscode -c "source /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} 2>&1"; fi

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment this line to install global node packages.
# RUN su vscode -c "source /usr/local/share/nvm/nvm.sh && npm install -g <your-package-here>" 2>&1
```

Vous pouvez utiliser le fichier Dockerfile pour ajouter des couches de conteneur supplémentaires pour spécifier des packages de système d’exploitation, des versions Java ou des packages globaux à inclure dans le conteneur.

## Étape 3 : modifier votre fichier devcontainer.json

Une fois votre configuration de conteneur de développement ajoutée et après avoir généralement compris le fonctionnement de chaque élément, vous pouvez désormais apporter des modifications pour personnaliser davantage votre environnement. Dans cet exemple, vous allez ajouter des propriétés pour installer des extensions et les dépendances de votre projet lors du lancement de votre codespace.

1. Dans l’explorateur, accédez au fichier `devcontainer.json` et sélectionnez-le pour l’ouvrir. Vous devrez peut-être développer le dossier `.devcontainer` pour le voir.

   ![Fichier devcontainer.json dans Explorer](/assets/images/help/codespaces/devcontainers-options.png)

2. Ajoutez les lignes suivantes à votre fichier `devcontainer.json` après `extensions`.

   ```json{:copy}
   "postCreateCommand": "npm install",
   "forwardPorts": [4000],
   ```

   {% data reusables.codespaces.more-info-devcontainer %}

{% data reusables.codespaces.rebuild-command %}

   {% data reusables.codespaces.rebuild-reason %}

## Étape 4 : Exécuter votre application

Dans la section précédente, vous avez utilisé `postCreateCommand` pour installer un ensemble de packages via npm. Vous pouvez maintenant l’utiliser pour exécuter notre application avec npm.

1. Exécutez votre application en appuyant sur `F5`.

2. Quand votre projet démarre, vous devriez voir un message de notification « toast » dans le coin inférieur droit de {% data variables.product.prodname_vscode_shortname %}, avec une invite pour vous connecter au port utilisé par votre projet.

   ![Notification « toast » de transfert de port](/assets/images/help/codespaces/codespaces-port-toast.png)

## Étape 5 : valider vos modifications

{% data reusables.codespaces.committing-link-to-procedure %}

## Étapes suivantes

Vous devriez maintenant être en mesure de développer votre projet Java dans {% data variables.product.prodname_github_codespaces %}. Voici quelques ressources supplémentaires pour les scénarios plus avancés.

{% data reusables.codespaces.next-steps-adding-devcontainer %}
