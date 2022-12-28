---
title: "Configuration de votre projet\_C# (.NET) pour GitHub Codespaces"
shortTitle: Setting up your C# (.NET) project
allowTitleToDifferFromFilename: true
intro: "Commencez votre projet\_C# (.NET) dans {% data variables.product.prodname_github_codespaces %} en créant un conteneur de développement personnalisé."
redirect_from:
  - /codespaces/getting-started-with-codespaces/getting-started-with-your-dotnet-project
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
hasExperimentalAlternative: true
hidden: true
ms.openlocfilehash: 10282aedf3bdb239fa238e546c2fc6280787a6a0
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158612'
---
## Introduction

Ce guide vous montre comment configurer votre projet C# (.NET) {% data reusables.codespaces.setting-up-project-intro %}

### Prérequis

- Vous devez disposer d’un projet C# (.NET) existant dans un référentiel sur {% data variables.product.prodname_dotcom_the_website %}. Si vous n’avez pas de projet, vous pouvez suivre ce tutoriel avec l’exemple suivant : https://github.com/2percentsilk/dotnet-quickstart.
- Vous devez activer {% data variables.product.prodname_github_codespaces %} pour votre organisation.

## Étape 1 : ouvrir votre projet dans un codespace

1. Sous le nom du dépôt, utilisez le menu déroulant **{% octicon "code" aria-label="The code icon" %} Code**. Ensuite, sous l’onglet **Codespaces**, cliquez sur le signe plus ({% octicon "plus" aria-label="The plus icon" %}).

  ![Bouton Nouveau codespace](/assets/images/help/codespaces/new-codespace-button.png)

Lorsque vous créez un codespace, votre projet est créé sur une machine virtuelle distante qui vous est dédiée. Par défaut, le conteneur de votre codespace comporte de nombreux langages et runtimes, dont .NET. Il inclut également un ensemble commun d’outils tels que git, wget, rsync, openssh et nano.

{% data reusables.codespaces.customize-vcpus-and-ram %}

## Étape 2 : Ajouter une configuration de conteneur de développement à votre référentiel à partir d’un modèle

Le conteneur de développement par défaut, ou « conteneur dev », de {% data variables.product.prodname_github_codespaces %} est fourni avec la dernière version de .NET, et les outils les plus courants y sont préinstallés. Toutefois, nous vous recommandons de configurer votre propre conteneur de développement afin d’inclure tous les outils et scripts dont votre projet a besoin. Cela garantit un environnement entièrement reproductible pour tous les utilisateurs {% data variables.product.prodname_github_codespaces %} de votre référentiel.

{% data reusables.codespaces.setup-custom-devcontainer %}

{% data reusables.codespaces.command-palette-container %}
1. Pour cet exemple, cliquez sur **C# (.NET)** . Si vous avez besoin de fonctionnalités supplémentaires, vous pouvez sélectionner n’importe quel conteneur spécifique à C# (.NET) ou une combinaison d’outils comme C# (.NET) et MS SQL.
  ![Sélectionnez l’option C# (.NET) dans la liste](/assets/images/help/codespaces/add-dotnet-prebuilt-container.png)
1. Cliquez sur la version recommandée de .NET.
  ![Sélection de la version de .NET](/assets/images/help/codespaces/add-dotnet-version.png)
1. Acceptez l’option par défaut pour ajouter Node.js à votre personnalisation.
  ![Ajouter la sélection Node.js](/assets/images/help/codespaces/dotnet-options.png) {% data reusables.codespaces.rebuild-command %}

### Anatomie de votre conteneur de développement

L’ajout du modèle de conteneur de développement C# (.NET) ajoute un dossier `.devcontainer` à la racine du référentiel de votre projet avec les fichiers suivants :

- `devcontainer.json`
- Dockerfile

Le fichier `devcontainer.json` nouvellement ajouté définit quelques propriétés décrites après l’exemple.

#### devcontainer.json

```json
{
    "name": "C# (.NET)",
    "build": {
        "dockerfile": "Dockerfile",
        "args": {
            // Update 'VARIANT' to pick a .NET Core version: 2.1, 3.1, 5.0
            "VARIANT": "5.0",
            // Options
            "INSTALL_NODE": "true",
            "NODE_VERSION": "lts/*",
            "INSTALL_AZURE_CLI": "false"
        }
    },

    // Set *default* container specific settings.json values on container create.
    "settings": {
        "terminal.integrated.shell.linux": "/bin/bash"
    },

    // Add the IDs of extensions you want installed when the container is created.
    "extensions": [
        "ms-dotnettools.csharp"
    ],

    // Use 'forwardPorts' to make a list of ports inside the container available locally.
    // "forwardPorts": [5000, 5001],

    // [Optional] To reuse of your local HTTPS dev cert:
    //
    // 1. Export it locally using this command:
    //    * Windows PowerShell:
    //        dotnet dev-certs https --trust; dotnet dev-certs https -ep "$env:USERPROFILE/.aspnet/https/aspnetapp.pfx" -p "SecurePwdGoesHere"
    //    * macOS/Linux terminal:
    //        dotnet dev-certs https --trust; dotnet dev-certs https -ep "${HOME}/.aspnet/https/aspnetapp.pfx" -p "SecurePwdGoesHere"
    //
    // 2. Uncomment these 'remoteEnv' lines:
    //    "remoteEnv": {
    //        "ASPNETCORE_Kestrel__Certificates__Default__Password": "SecurePwdGoesHere",
    //        "ASPNETCORE_Kestrel__Certificates__Default__Path": "/home/vscode/.aspnet/https/aspnetapp.pfx",
    //    },
    //
    // 3. Start the container.
    //
    // 4. Drag ~/.aspnet/https/aspnetapp.pfx into the root of the file explorer.
    //
    // 5. Open a terminal in VS Code and run "mkdir -p /home/vscode/.aspnet/https && mv aspnetapp.pfx /home/vscode/.aspnet/https".
    //

    // Use 'postCreateCommand' to run commands after the container is created.
    // "postCreateCommand": "dotnet restore",

    // Comment out connect as root instead. More info: https://aka.ms/vscode-remote/containers/non-root.
    "remoteUser": "vscode"
}
```

- **nom** : vous pouvez nommer votre conteneur de développement comme vous le souhaitez, il s’agit simplement de la valeur par défaut.
- **build** : propriétés de build.
  - **dockerfile** : dans l’objet `build`, `dockerfile` contient le chemin d’accès au fichier Dockerfile qui a également été ajouté à partir du modèle.
  - **args**
    - **variant** : ce fichier ne contient qu’un seul argument de génération, à savoir la version de .NET Core que nous voulons utiliser.
- **settings** : il s’agit de paramètres {% data variables.product.prodname_vscode %}.
  - **terminal.integrated.shell.linux** : bien que bash soit la valeur par défaut ici, vous pouvez utiliser d’autres interpréteurs de commandes en modifiant ce paramètre.
- **extensions** : il s’agit des extensions incluses par défaut.
  - **ms-dotnettools.csharp** : l’extension Microsoft C# offre une prise en charge enrichie pour le développement en C#, avec notamment les fonctionnalités suivantes : IntelliSense, linting, débogage, navigation dans le code, mise en forme du code, refactorisation, explorateur de variables, explorateur de tests, etc.
- **forwardPorts** : tous les ports répertoriés ici seront transférés automatiquement. Pour plus d’informations, consultez « [Transfert de ports dans votre codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace) ».
- **postCreateCommand** : à utiliser pour exécuter des commandes qui ne sont pas définies dans le fichier Dockerfile, une fois le codespace créé.
- **remoteUser** : par défaut, vous travaillez en tant qu’utilisateur vscode, mais vous pouvez aussi définir cette valeur sur root.

#### Dockerfile

```bash
# [Choice] .NET version: 5.0, 3.1, 2.1
ARG VARIANT="5.0"
FROM mcr.microsoft.com/vscode/devcontainers/dotnetcore:0-${VARIANT}

# [Option] Install Node.js
ARG INSTALL_NODE="true"
ARG NODE_VERSION="lts/*"
RUN if [ "${INSTALL_NODE}" = "true" ]; then su vscode -c "umask 0002 && . /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} 2>&1"; fi

# [Option] Install Azure CLI
ARG INSTALL_AZURE_CLI="false"
COPY library-scripts/azcli-debian.sh /tmp/library-scripts/
RUN if [ "$INSTALL_AZURE_CLI" = "true" ]; then bash /tmp/library-scripts/azcli-debian.sh; fi \
    && apt-get clean -y && rm -rf /var/lib/apt/lists/* /tmp/library-scripts

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment this line to install global node packages.
# RUN su vscode -c "source /usr/local/share/nvm/nvm.sh && npm install -g <your-package-here>" 2>&1
```

Vous pouvez utiliser le fichier Dockerfile pour ajouter des couches de conteneur supplémentaires et spécifier des packages de système d’exploitation, des versions de nœud ou des packages globaux à inclure dans le conteneur.

## Étape 3 : modifier votre fichier devcontainer.json

Une fois votre configuration de conteneur de développement ajoutée et après avoir généralement compris le fonctionnement de chaque élément, vous pouvez désormais apporter des modifications pour personnaliser davantage votre environnement. Dans cet exemple, vous allez ajouter des propriétés pour installer des extensions et les dépendances de votre projet lors du lancement de votre codespace.

1. Dans l’explorateur, accédez au fichier `devcontainer.json` et sélectionnez-le pour l’ouvrir. Vous devrez peut-être développer le dossier `.devcontainer` pour le voir.

   ![Fichier devcontainer.json dans l’explorateur](/assets/images/help/codespaces/devcontainers-options.png)

2. Mettez à jour la liste `extensions` de votre fichier `devcontainer.json` pour ajouter quelques extensions utiles lors de l’utilisation de votre projet.

   ```json{:copy}
   "extensions": [
          "ms-dotnettools.csharp",
          "streetsidesoftware.code-spell-checker",
      ],
   ```

3. Supprimez les marques de commentaire de `postCreateCommand` pour restaurer les dépendances dans le cadre du processus de configuration du codespace.

   ```json{:copy}
   // Use 'postCreateCommand' to run commands after the container is created.
   "postCreateCommand": "dotnet restore",
   ```

   {% data reusables.codespaces.more-info-devcontainer %}

{% data reusables.codespaces.rebuild-command %}

   {% data reusables.codespaces.rebuild-reason %}

5. Assurez-vous que vos modifications ont bien été appliquées en vérifiant que l’extension « Code Spell Checker » a été installée.

    ![Liste des extensions](/assets/images/help/codespaces/dotnet-extensions.png)

## Étape 4 : Exécuter votre application

Dans la section précédente, vous avez utilisé `postCreateCommand` pour installer un ensemble de packages via la commande `dotnet restore`. Maintenant que nos dépendances sont installées, nous pouvons exécuter notre application.

1. Exécutez votre application en appuyant `F5` ou en entrant `dotnet watch run` dans votre terminal.

2. Quand votre projet démarre, vous devriez voir un message de notification « toast » dans le coin inférieur droit de {% data variables.product.prodname_vscode_shortname %}, avec une invite pour vous connecter au port utilisé par votre projet.

   ![Notification « toast » de transfert de port](/assets/images/help/codespaces/python-port-forwarding.png)

## Étape 5 : valider vos modifications

{% data reusables.codespaces.committing-link-to-procedure %}

## Étapes suivantes

Vous devriez maintenant être en mesure de développer votre projet C# (.NET) dans {% data variables.product.prodname_github_codespaces %}. Voici quelques ressources supplémentaires pour les scénarios plus avancés.

{% data reusables.codespaces.next-steps-adding-devcontainer %}
