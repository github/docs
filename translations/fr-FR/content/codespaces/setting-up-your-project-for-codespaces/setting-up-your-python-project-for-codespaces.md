---
title: Configuration de votre projet Python pour GitHub Codespaces
allowTitleToDifferFromFilename: true
shortTitle: Setting up your Python project
intro: 'Commencez votre projet Python dans {% data variables.product.prodname_github_codespaces %} en créant un conteneur de développement personnalisé.'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /codespaces/getting-started-with-codespaces/getting-started-with-your-python-project-in-codespaces
type: tutorial
topics:
  - Codespaces
  - Developer
  - Python
hasExperimentalAlternative: true
hidden: true
ms.openlocfilehash: 2d9c627907f447a3efd873fceba963b899b57c39
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159564'
---
## Introduction

Ce guide vous montre comment configurer votre projet Python {% data reusables.codespaces.setting-up-project-intro %}

### Prérequis

- Vous devez disposer d’un projet Python existant dans un référentiel sur {% data variables.product.prodname_dotcom_the_website %}. Si vous n’avez pas de projet, vous pouvez essayer ce tutoriel avec l’exemple suivant : https://github.com/2percentsilk/python-quickstart.
- Vous devez activer {% data variables.product.prodname_github_codespaces %} pour votre organisation.

## Étape 1 : ouvrir votre projet dans un codespace

1. Sous le nom du dépôt, utilisez le menu déroulant **{% octicon "code" aria-label="The code icon" %} Code**. Ensuite, sous l’onglet **Codespaces**, cliquez sur le signe plus ({% octicon "plus" aria-label="The plus icon" %}).

  ![Bouton Nouveau codespace](/assets/images/help/codespaces/new-codespace-button.png)

Lorsque vous créez un codespace, votre projet est créé sur une machine virtuelle distante qui vous est dédiée. Par défaut, le conteneur de votre codespace comporte de nombreux langages et runtimes, notamment Node.js, JavaScript, Typescript, nvm, npm et yarn. Il inclut également un ensemble commun d’outils tels que git, wget, rsync, openssh et nano.

{% data reusables.codespaces.customize-vcpus-and-ram %}

## Étape 2 : ajouter une configuration de conteneur de développement à votre référentiel à partir d’un modèle

Le conteneur de développement par défaut, ou « conteneur dev », de {% data variables.product.prodname_github_codespaces %} est fourni avec la dernière version de Python, gestionnaires de package (pip, Miniconda) et d’autres outils communs préinstallés. Toutefois, nous vous recommandons de configurer votre propre conteneur de développement afin d’inclure tous les outils et scripts dont votre projet a besoin. Cela garantit un environnement entièrement reproductible pour tous les utilisateurs {% data variables.product.prodname_github_codespaces %} de votre référentiel.

{% data reusables.codespaces.setup-custom-devcontainer %}

{% data reusables.codespaces.command-palette-container %}
1. Pour cet exemple, cliquez sur **Python 3**. Si vous avez besoin de fonctionnalités supplémentaires, vous pouvez sélectionner n’importe quel conteneur spécifique à Python ou une combinaison d’outils comme Python 3 et PostgreSQL.
  ![Sélectionnez l’option Python dans la liste](/assets/images/help/codespaces/add-python-prebuilt-container.png)
1. Cliquez sur la version recommandée de Python.
  ![Sélection de la version de Python](/assets/images/help/codespaces/add-python-version.png)
1. Acceptez l’option par défaut pour ajouter Node.js à votre personnalisation.
  ![Ajouter la sélection Node.js](/assets/images/help/codespaces/add-nodejs-selection.png) {% data reusables.codespaces.rebuild-command %}

### Anatomie de votre conteneur de développement

L’ajout du modèle de conteneur de développement Python ajoute un répertoire `.devcontainer` à la racine du référentiel de votre projet avec les fichiers suivants :

- `devcontainer.json`
- Dockerfile

Le fichier `devcontainer.json` nouvellement ajouté définit quelques propriétés décrites après l’exemple.

#### devcontainer.json

```json
{
    "name": "Python 3",
    "build": {
        "dockerfile": "Dockerfile",
        "context": "..",
        "args": {
            // Update 'VARIANT' to pick a Python version: 3, 3.6, 3.7, 3.8, 3.9
            "VARIANT": "3",
            // Options
            "INSTALL_NODE": "true",
            "NODE_VERSION": "lts/*"
        }
    },

    // Set *default* container specific settings.json values on container create.
    "settings": {
        "terminal.integrated.shell.linux": "/bin/bash",
        "python.pythonPath": "/usr/local/bin/python",
        "python.linting.enabled": true,
        "python.linting.pylintEnabled": true,
        "python.formatting.autopep8Path": "/usr/local/py-utils/bin/autopep8",
        "python.formatting.blackPath": "/usr/local/py-utils/bin/black",
        "python.formatting.yapfPath": "/usr/local/py-utils/bin/yapf",
        "python.linting.banditPath": "/usr/local/py-utils/bin/bandit",
        "python.linting.flake8Path": "/usr/local/py-utils/bin/flake8",
        "python.linting.mypyPath": "/usr/local/py-utils/bin/mypy",
        "python.linting.pycodestylePath": "/usr/local/py-utils/bin/pycodestyle",
        "python.linting.pydocstylePath": "/usr/local/py-utils/bin/pydocstyle",
        "python.linting.pylintPath": "/usr/local/py-utils/bin/pylint"
    },

    // Add the IDs of extensions you want installed when the container is created.
    "extensions": [
        "ms-python.python"
    ],

    // Use 'forwardPorts' to make a list of ports inside the container available locally.
    // "forwardPorts": [],

    // Use 'postCreateCommand' to run commands after the container is created.
    // "postCreateCommand": "pip3 install --user -r requirements.txt",

    // Comment out connect as root instead. More info: https://aka.ms/vscode-remote/containers/non-root.
    "remoteUser": "vscode"
}
```

- **nom** : vous pouvez nommer votre conteneur de développement comme vous le souhaitez, il s’agit simplement de la valeur par défaut.
- **build** : propriétés de build.
  - **dockerfile** : dans l’objet `build`, `dockerfile` contient le chemin d’accès au fichier Dockerfile qui a également été ajouté à partir du modèle.
  - **args**
    - **variante** : ce fichier ne contient qu’un seul argument de build, qui est la variante de nœud que nous voulons utiliser et qui est passée dans le fichier Dockerfile.
- **paramètres** : il s’agit de paramètres {% data variables.product.prodname_vscode %}.
  - **terminal.integrated.shell.linux** : bien que bash soit la valeur par défaut ici, vous pouvez utiliser d’autres interpréteurs de commandes en modifiant ce paramètre.
- **extensions** : il s’agit des extensions incluses par défaut.
  - **ms-python.python** - : l’extension Microsoft Python offre une prise en charge complète du langage Python (pour toutes les versions activement prises en charge du langage : >=3.6), notamment des fonctionnalités telles que IntelliSense, linting, débogage, navigation du code, mise en forme du code, refactorisation, explorateur de variables, explorateur de tests, etc.
- **forwardPorts** : tous les ports répertoriés ici seront transférés automatiquement. Pour plus d’informations, consultez « [Transfert de ports dans votre codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace) ».
- **postCreateCommand** : utilisez cette propriété pour exécuter des commandes qui ne sont pas définies dans le fichier Dockerfile, comme `pip3 install -r requirements`, une fois votre codespace créé.
- **remoteUser** : par défaut, vous travaillez en tant qu’utilisateur `vscode`, mais vous pouvez éventuellement définir cette valeur sur `root`.

#### Dockerfile

```bash
# [Choice] Python version: 3, 3.9, 3.8, 3.7, 3.6
ARG VARIANT="3"
FROM mcr.microsoft.com/vscode/devcontainers/python:0-${VARIANT}

# [Option] Install Node.js
ARG INSTALL_NODE="true"
ARG NODE_VERSION="lts/*"
RUN if [ "${INSTALL_NODE}" = "true" ]; then su vscode -c "umask 0002 && . /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} 2>&1"; fi

# [Optional] If your pip requirements rarely change, uncomment this section to add them to the image.
# COPY requirements.txt /tmp/pip-tmp/
# RUN pip3 --disable-pip-version-check --no-cache-dir install -r /tmp/pip-tmp/requirements.txt \
#    && rm -rf /tmp/pip-tmp

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment this line to install global node packages.
# RUN su vscode -c "source /usr/local/share/nvm/nvm.sh && npm install -g <your-package-here>" 2>&1
```

Vous pouvez utiliser le fichier Dockerfile pour ajouter des couches de conteneur supplémentaires et spécifier des packages de système d’exploitation, des versions de nœud ou des packages globaux à inclure dans le conteneur.

## Étape 3 : modifier votre fichier devcontainer.json

Une fois votre configuration de conteneur de développement ajoutée et après avoir généralement compris le fonctionnement de chaque élément, vous pouvez désormais apporter des modifications pour personnaliser davantage votre environnement. Dans cet exemple, vous allez ajouter des propriétés pour installer des extensions et les dépendances de votre projet lors du lancement de votre codespace.

1. Dans Explorer, développez le dossier `.devcontainer` et sélectionnez le fichier `devcontainer.json` dans l’arborescence pour l’ouvrir.

  ![Fichier devcontainer.json dans Explorer](/assets/images/help/codespaces/devcontainers-options.png)

2. Mettez à jour la liste `extensions` de votre fichier `devcontainer.json` pour ajouter quelques extensions utiles lors de l’utilisation de votre projet.

  ```json{:copy}
  "extensions": [
          "ms-python.python",
          "cstrap.flask-snippets",
          "streetsidesoftware.code-spell-checker"
      ],
  ```

3. Supprimez `postCreateCommand` pour installer automatiquement les exigences dans le cadre du processus d’installation de codespaces.

  ```json{:copy}
  // Use 'postCreateCommand' to run commands after the container is created.
  "postCreateCommand": "pip3 install --user -r requirements.txt",
  ```

{% data reusables.codespaces.rebuild-command %}

   {% data reusables.codespaces.rebuild-reason %}

5. Assurez-vous que vos modifications ont bien été appliquées en vérifiant que les extensions Code Spell Checker et Extrait Flask ont été installées.

   ![Liste des extensions](/assets/images/help/codespaces/python-extensions.png)

## Étape 4 : Exécuter votre application

Dans la section précédente, vous avez utilisé `postCreateCommand` pour installer un ensemble de packages via pip3. Une fois vos dépendances installées, vous pouvez exécuter votre application.

1. Exécutez votre application en appuyant sur `F5` ou en entrant `python -m flask run` dans votre terminal de codespace.

2. Quand votre projet démarre, vous devriez voir un message de notification « toast » dans le coin inférieur droit de {% data variables.product.prodname_vscode_shortname %}, avec une invite pour vous connecter au port utilisé par votre projet.

  ![Notification « toast » de transfert de port](/assets/images/help/codespaces/python-port-forwarding.png)

## Étape 5 : valider vos modifications

{% data reusables.codespaces.committing-link-to-procedure %}

## Étapes suivantes

Vous devriez maintenant être en mesure de développer votre projet Python dans {% data variables.product.prodname_github_codespaces %}. Voici quelques ressources supplémentaires pour les scénarios plus avancés.

{% data reusables.codespaces.next-steps-adding-devcontainer %}
