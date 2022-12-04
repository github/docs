---
title: Présentation des conteneurs de développement
intro: 'Lorsque vous travaillez dans un codespace, l’environnement dans lequel vous travaillez est créé à l’aide d’un conteneur de développement hébergé sur une machine virtuelle.'
permissions: People with write permissions to a repository can create or edit the codespace configuration.
redirect_from:
  - /github/developing-online-with-github-codespaces/configuring-github-codespaces-for-your-project
  - /codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project
  - /github/developing-online-with-codespaces/configuring-codespaces-for-your-project
  - /codespaces/customizing-your-codespace/configuring-codespaces-for-your-project
  - /codespaces/setting-up-your-project-for-codespaces/configuring-codespaces-for-your-project
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
  - Fundamentals
ms.openlocfilehash: 646f8068e68040f1d12f8155c3ba9e2bdb84c2ca
ms.sourcegitcommit: 7fb7ec2e665856fc5f7cd209b53bd0fb1c9bbc67
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185090'
---
## À propos des conteneurs de développement

Les conteneurs de développement sont des conteneurs Docker spécifiquement configurés pour fournir un environnement de développement complet. Chaque fois que vous travaillez dans un codespace, vous utilisez un conteneur de développement sur une machine virtuelle.

Vous pouvez configurer le conteneur de développement pour un dépôt de façon à ce que les codespaces créés pour ce dépôt vous offrent un environnement sur mesure et complet avec l’ensemble des outils et runtimes dont vous avez besoin pour travailler sur un projet spécifique. Si vous ne définissez pas de configuration dans le dépôt, {% data variables.product.prodname_github_codespaces %} utilise une configuration par défaut contenant de nombreux outils courants dont votre équipe pourrait avoir besoin pour le développement de votre projet. Pour plus d’informations, consultez « [Utilisation de la configuration de conteneur de développement par défaut](#using-the-default-dev-container-configuration) ».

Les fichiers de configuration d’un conteneur de développement sont contenus dans un répertoire `.devcontainer` dans votre dépôt. Vous pouvez utiliser {% data variables.product.prodname_vscode %} pour ajouter des fichiers de configuration à votre place. Vous pouvez opérer un choix dans une sélection de configurations prédéfinies pour différents types de projet. Vous pouvez utiliser celles-ci sans configuration supplémentaire, ou les modifier pour affiner l’environnement de développement qu’elles produisent. Pour plus d’informations, consultez « [Utilisation d’une configuration de conteneur de développement prédéfinie](#using-a-predefined-dev-container-configuration) ».

Vous pouvez également ajouter vos propres fichiers de configuration personnalisés. Pour plus d’informations, consultez « [Création d’une configuration de conteneur de développement personnalisée](#creating-a-custom-dev-container-configuration) ».

Vous pouvez définir une configuration de conteneur de développement unique pour un dépôt, différentes configurations pour différentes branches ou plusieurs configurations. Lorsque plusieurs configurations sont disponibles, les utilisateurs peuvent choisir leur configuration préférée quand ils créent un codespace. Cela est particulièrement utile pour les dépôts volumineux contenant du code source dans différents langages de programmation ou pour différents projets. Vous pouvez créer un choix de configurations qui permettent à différentes équipes de travailler dans un codespace configuré de manière appropriée pour le travail qu’elles accomplissent.

Quand vous créez un codespace à partir d’un modèle, vous pouvez commencer avec un ou plusieurs fichiers de configuration de conteneur de développement dans votre espace de travail. Pour configurer davantage votre environnement, vous pouvez ajouter des paramètres à ces fichiers ou en supprimer et regénérer le conteneur pour appliquer les modifications au codespace dans lequel vous travaillez. Si vous publiez votre codespace dans un dépôt sur {% data variables.product.product_name %}, tous les codespaces créés à partir de ce dépôt partagent la configuration que vous avez définie. Pour plus d’informations, consultez « [Application de modifications de configuration à un codespace](#applying-configuration-changes-to-a-codespace) » et « [Création d’un codespace à partir d’un modèle](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template#publishing-to-a-remote-repository) ».

### devcontainer.json

Le fichier principal d’une configuration de conteneur de développement est le fichier `devcontainer.json`. Vous pouvez l’utiliser pour déterminer l’environnement de codespaces créés pour votre dépôt. Le contenu de ce fichier définit un conteneur de développement qui peut inclure des infrastructures, des outils, des extensions et un réacheminement de port. Le fichier `devcontainer.json` contient généralement une référence à un Dockerfile qui est normalement situé à côté du fichier `devcontainer.json`.

Si vous créez un codespace à partir d’un dépôt sans fichier `devcontainer.json` ou que vous commencez à partir du modèle vide de {% data variables.product.company_short %}, la configuration de conteneur de développement par défaut est utilisée. Pour plus d’informations, consultez « [Utilisation de la configuration de conteneur de développement par défaut](#using-the-default-dev-container-configuration) ».

Le fichier `devcontainer.json` se trouve généralement dans le répertoire `.devcontainer` de votre dépôt. Vous pouvez également le placer directement à la racine du dépôt, auquel cas le nom de fichier doit commencer par un point : `.devcontainer.json`. 

Si vous souhaitez disposer d’un choix de configurations de conteneur de développement dans votre dépôt, toutes les alternatives au fichier `.devcontainer/devcontainer.json` (ou `.devcontainer.json`) doivent se trouver dans leur propre sous-répertoire dans le chemin d’accès `.devcontainer/SUBDIRECTORY/devcontainer.json`. Par exemple, vous pourriez avoir le choix entre deux configurations : 
* `.devcontainer/database-dev/devcontainer.json` 
* `.devcontainer/gui-dev/devcontainer.json`

Lorsque vous avez plusieurs fichiers `devcontainer.json` dans votre dépôt, chaque codespace est créé à partir d’une seule des configurations. Des paramètres ne peuvent pas être importés ou hérités entre fichiers `devcontainer.json`. Si un fichier `devcontainer.json` dans un sous-répertoire personnalisé a des fichiers dépendants, tels que le Dockerfile ou des scripts exécutés par des commandes dans le fichier `devcontainer.json`, il est recommandé de colocaliser ces fichiers dans le même sous-répertoire.

Pour plus d’informations sur la façon de choisir votre configuration de conteneur de développement préférée quand vous créez un codespace, consultez « [Création d’un codespace pour un dépôt](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository) ».

{% data reusables.codespaces.more-info-devcontainer %}

#### Comment utiliser le devcontainer.json

Il est utile de considérer que le fichier `devcontainer.json` fournit une « customisation » plutôt qu’une « personnalisation ». Vous ne devriez inclure que des éléments dont toute personne travaillant sur votre codebase a besoin en tant que composants standard de l’environnement de développement, pas des éléments correspondant à des préférences personnelles. Il est bon de normaliser des éléments tels que des linters en exigeant que chacun les installe, et par conséquent de les inclure dans votre fichier `devcontainer.json`. En revanche, des éléments tels que des éléments décoratifs ou des thèmes d’interface utilisateur sont des choix personnels qui n’ont pas leur place dans le fichier `devcontainer.json`.

Vous pouvez personnaliser vos codespaces à l’aide de dotfiles et d’une Synchronisation des paramètres. Pour plus d’informations, consultez « [Personnalisation de {% data variables.product.prodname_github_codespaces %} pour votre compte](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account) ».

### Dockerfile

Vous pouvez ajouter un Dockerfile à votre configuration de conteneur de développement. 

Le Dockerfile est un fichier texte contenant les instructions nécessaires pour créer une image conteneur Docker. Cette image est utilisée pour générer un conteneur de développement chaque fois que quelqu’un crée un codespace à l’aide du fichier `devcontainer.json` référençant ce Dockerfile. Les instructions figurant dans le Dockerfile commencent généralement par référencer une image parente sur laquelle sera basée la nouvelle image qui sera créée. Viennent ensuite des commandes qui sont exécutées pendant le processus de création de l’image, par exemple, pour installer des packages logiciels.

Le Dockerfile d’un conteneur de développement se trouve généralement dans le dossier `.devcontainer`, à proximité du `devcontainer.json` dans lequel il est référencé. 

{% note %}

**Remarque** : au lieu d’utiliser un Dockerfile, vous pouvez utiliser la propriété `image` dans le fichier `devcontainer.json` pour faire référence directement à une image existante que vous souhaitez utiliser. L’image que vous spécifiez ici doit être autorisée par toute stratégie d’image d’organisation qui a été définie. Pour plus d’informations, consultez « [Restriction de l’image de base pour les codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-base-image-for-codespaces) ». En l’absence de Dockerfile ou d’image, l’image conteneur par défaut est utilisée. Pour plus d’informations, consultez « [Utilisation de la configuration de conteneur de développement par défaut](#using-the-default-dev-container-configuration) ».

{% endnote %}

#### Exemple Dockerfile simple

L’exemple suivant utilise quatre instructions :

`ARG` définit une variable de temps de génération.

`FROM` spécifie l’image parente sur laquelle l’image Docker générée sera basée.

`COPY` copie un fichier et l’ajoute au système de fichiers. 

`RUN` met à jour les listes de packages et exécute un script. Vous pouvez également utiliser une instruction `RUN` pour installer des logiciels, comme l’indiquent les instructions commentées. Pour exécuter plusieurs commandes, utilisez `&&` pour combiner les commandes dans une seule instruction `RUN`.

```Dockerfile{:copy}
ARG VARIANT="16-buster"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node modules
# RUN su node -c "npm install -g <your-package-list-here>"

COPY library-scripts/github-debian.sh /tmp/library-scripts/
RUN apt-get update && bash /tmp/library-scripts/github-debian.sh
```

Pour plus d’informations sur les instructions concernant Dockerfile, consultez « [Dockerfile reference](https://docs.docker.com/engine/reference/builder) » dans la documentation Docker.

#### Utilisation d’un Dockerfile

Pour utiliser un Dockerfile dans une configuration de conteneur de développement, référencez-le dans votre fichier `devcontainer.json` à l’aide de la propriété `dockerfile`.

```json{:copy}
{
  ...
  "build": { "dockerfile": "Dockerfile" },
  ...
}
```

Différentes options s’offrent à vous si vous souhaitez utiliser l’orchestration de conteneur existante dans votre conteneur de développement. Pour plus d’informations, consultez la section « Options d’orchestration » de la [spécification](https://containers.dev/implementors/spec/#orchestration-options) sur le site web Conteneurs de développement.

## Utilisation de la configuration de conteneur de développement par défaut

Si vous ne définissez pas de configuration dans votre dépôt, {% data variables.product.prodname_dotcom %} crée un codespace à l’aide d’une image Linux par défaut. Cette image Linux inclut un certain nombre de versions de runtime pour des langages populaires tels que Python, Node, PHP, Java, Go, C++, Ruby et .NET Core/C#. Les dernières versions LTS de ces langages sont utilisées. Il y a également des outils pour prendre en charge la science des données et l’apprentissage automatique, tels que JupyterLab et Conda. L’image inclut également d’autres outils et utilitaires de développement tels que Git, GitHub CLI, yarn, openssh et vim. Pour voir l’ensemble des langages, runtimes et outils inclus, utilisez la commande `devcontainer-info content-url` à l’intérieur de votre terminal codespace, et suivez l’URL que la commande génère.

Pour plus d’informations sur ce qui est inclus dans l’image Linux par défaut, consultez le dépôt [`devcontainers/images`](https://github.com/devcontainers/images/tree/main/src/universal). 

La configuration par défaut est une bonne option si vous travaillez sur un petit projet utilisant les langages et outils fournis par {% data variables.product.prodname_github_codespaces %}.

## Utilisation d’une configuration de conteneur de développement prédéfinie

Si vous utilisez {% data variables.product.prodname_codespaces %} dans {% data variables.product.prodname_vscode %} ou dans un navigateur web, vous pouvez créer une configuration de conteneur de développement pour votre dépôt en choisissant parmi une liste de configurations prédéfinies. Ces configurations fournissent des paramétrages courants pour des types de projets particuliers et peuvent vous aider à démarrer rapidement avec une configuration comprenant déjà les options de conteneur, les paramètres {% data variables.product.prodname_vscode %} et les extensions {% data variables.product.prodname_vscode %} appropriés à installer.

L’utilisation d’une configuration prédéfinie est une excellente idée si vous avez besoin d’une extensibilité supplémentaire. Vous pouvez également commencer avec une configuration prédéfinie et la modifier en fonction des besoins de votre projet. Pour plus d’informations sur les définitions de conteneurs de développement prédéfinis, consultez le dépôt [`devcontainers/images`](https://github.com/devcontainers/images/tree/main/src).

Vous pouvez ajouter une configuration de conteneur de développement prédéfinie lorsque vous travaillez dans un codespace ou localement sur un dépôt. Pour y parvenir dans {% data variables.product.prodname_vscode_shortname %} quand vous travaillez localement et que vous n’êtes pas connecté à un codespace, l’extension l’extension « Conteneurs de développement » doit être installée et activée. Pour plus d’informations sur cette extension, consultez la [{% data variables.product.prodname_vs_marketplace_shortname %}](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers). La procédure suivante décrit le processus quand vous utilisez un codespace. Les étapes décrites dans {% data variables.product.prodname_vscode_shortname %} quand vous n’êtes pas connecté à un codespace sont très similaires.

{% data reusables.codespaces.command-palette-container %}
1. Cliquez sur la définition que vous souhaitez utiliser.

   ![Capture d’écran d’une liste de définitions de conteneur prédéfinies](/assets/images/help/codespaces/predefined-container-definitions-list.png)

1. Suivez les invites pour personnaliser votre définition. Pour plus d’informations sur les options permettant de personnaliser votre définition, consultez « [Ajout de fonctionnalités à votre fichier `devcontainer.json`](#adding-additional-features-to-your-devcontainerjson-file) ».
1. Cliquez sur **OK**.

   ![Capture d’écran du bouton OK](/assets/images/help/codespaces/prebuilt-container-ok-button.png)

1. Si vous travaillez dans un codespace, appliquez vos modifications en cliquant sur **Régénérer maintenant** dans le message en bas à droite de la fenêtre. Pour plus d’informations sur la régénération de votre conteneur, consultez « [Application de modifications à votre configuration](#applying-configuration-changes-to-a-codespace) ».

   ![Capture d’écran d’une invite à « regénérer maintenant »](/assets/images/help/codespaces/rebuild-prompt.png)

### Ajout de fonctionnalités à votre fichier `devcontainer.json`

{% data reusables.codespaces.about-features %} Pour plus d’informations, consultez « [Ajout de fonctionnalités à un fichier `devcontainer.json`](/codespaces/setting-up-your-project-for-codespaces/adding-features-to-a-devcontainer-file?tool=vscode) ».

## Création d’une configuration de conteneur de développement personnalisée

Si aucune des configurations prédéfinies ne répond à vos besoins, vous pouvez créer une configuration personnalisée en écrivant votre propre fichier `devcontainer.json`.

* Si vous ajoutez un seul fichier `devcontainer.json` qui sera utilisé par toute personne créant un codespace à partir de votre dépôt, créez le fichier dans un répertoire `.devcontainer` à la racine du dépôt. 
* Si vous souhaitez offrir aux utilisateurs un choix de configuration, vous pouvez créer plusieurs fichiers `devcontainer.json` personnalisés, chacun situé dans un sous-répertoire distinct du répertoire `.devcontainer`.

   {% note %}

   **Remarques**:
   - Vous ne pouvez pas placer vos fichiers `devcontainer.json` dans des répertoires situés plusieurs niveaux en dessous de `.devcontainer`. Par exemple, un fichier à l’emplacement `.devcontainer/teamA/devcontainer.json` fonctionnera, mais pas `.devcontainer/teamA/testing/devcontainer.json`.
   - {% data reusables.codespaces.configuration-choice-templates %} Pour plus d’informations, consultez « [Configuration d’un dépôt modèle pour {% data variables.product.prodname_github_codespaces %}](/codespaces/setting-up-your-project-for-codespaces/setting-up-a-template-repository-for-github-codespaces) ».

   {% endnote %}

   Si plusieurs fichiers `devcontainer.json` se trouvent dans le dépôt, ils sont répertoriés dans la page des options de création de codespace. Pour plus d’informations, consultez « [Création d’un codespace pour un dépôt](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository) ».

   ![Capture d’écran d’un choix de fichiers de configuration](/assets/images/help/codespaces/configuration-file-choice.png)

### Ajout d’un fichier `devcontainer.json`

Si vous n’avez pas encore de fichier `devcontainer.json` dans votre dépôt, vous pouvez rapidement en ajouter un à partir de {% data variables.product.prodname_dotcom_the_website %}.
1. Accédez à votre dépôt et cliquez sur la liste déroulante **{% octicon "code" aria-label="The code icon" %} Code**.
1. Sous l’onglet **Codespaces**, cliquez sur les points de suspension ( **...** ), puis sélectionnez **Configurer le conteneur de développement**.

   ![Capture d’écran de la liste déroulante Code avec « Configurer le conteneur de développement » mis en évidence](/assets/images/help/codespaces/configure-dev-container.png)

Un nouveau fichier `.devcontainer/devcontainer.json` s’ouvre dans l’éditeur. Le fichier contient certaines propriétés initiales, notamment un objet `features` auquel vous pouvez ajouter de nouveaux outils, bibliothèques ou runtimes. Pour plus d’informations, consultez « [Ajout de fonctionnalités à un fichier `devcontainer.json`](/codespaces/setting-up-your-project-for-codespaces/adding-features-to-a-devcontainer-file?tool=webui) ».

Si votre dépôt contient déjà un ou plusieurs fichiers `devcontainer.json`, cliquez sur **Configurer le conteneur de développement** pour ouvrir le fichier `devcontainer.json` existant avec la priorité la plus élevée en fonction de la [spécification](https://containers.dev/implementors/spec/#devcontainerjson) sur containers.dev. 

### Sélection de configuration par défaut lors de la création d’un codespace

Si les fichiers `.devcontainer/devcontainer.json` ou `.devcontainer.json` existent, il s’agit de la sélection par défaut dans la liste des fichiers de configuration disponibles lorsque vous créez un codespace. Si aucun des fichiers n’existe, la configuration du conteneur de développement par défaut est sélectionnée par défaut. 

![Capture d’écran montrant le choix de la configuration par défaut sélectionné](/assets/images/help/codespaces/configuration-file-choice-default.png)

### Édition du fichier devcontainer.json

Vous pouvez ajouter et modifier les clés de configuration prises en charge dans le fichier `devcontainer.json` pour spécifier des aspects de l’environnement du codespace, comme les extensions {% data variables.product.prodname_vscode_shortname %} qui seront installées. {% data reusables.codespaces.more-info-devcontainer %}

Le fichier `devcontainer.json` est écrit au format JSONC (JSON avec commentaires). Cela vous permet d’inclure des commentaires dans le fichier de configuration. Pour plus d’informations, consultez « [Édition de JSON avec {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/docs/languages/json#_json-with-comments) » dans la documentation {% data variables.product.prodname_vscode_shortname %}.

{% note %}

**Remarque** : si vous utilisez un linter pour valider le fichier `devcontainer.json`, assurez-vous que celui-ci est défini sur JSONC, non JSON, sans quoi les commentaires seront signalés comme des erreurs.

{% endnote %}

### Paramètres d’interface pour {% data variables.product.prodname_vscode_shortname %}

Vous pouvez configurer les paramètres d’interface pour {% data variables.product.prodname_vscode_shortname %} avec trois étendues : Espace de travail, [Codespaces] distants et Utilisateur. Vous pouvez afficher ces étendues dans l’éditeur Paramètres de {% data variables.product.prodname_vscode_shortname %}.

![Capture d’écran montrant le choix des étendues dans l’éditeur Paramètres](/assets/images/help/codespaces/scopes-for-vscode.png)

Si un paramètre est défini dans plusieurs étendues, les paramètres de l’étendue Espace de travail sont prioritaires, suivis de ceux de l’étendue [Codespaces] distants et de ceux de l’étendue Utilisateur.

Vous pouvez définir des paramètres d’interface par défaut pour {% data variables.product.prodname_vscode_shortname %} à deux endroits.

* Les paramètres d’interface définis dans le fichier `.vscode/settings.json` dans votre dépôt sont appliqués en tant que paramètres délimités à l’espace de travail dans le codespace.
* Les paramètres d’interface définis dans la clé `settings` dans le fichier `devcontainer.json` sont appliqués en tant que paramètres délimités à [Codespaces] distants dans le codespace.

## Application de modifications de configuration à un codespace

Les modifications apportées à une configuration seront appliquées la prochaine fois que vous créerez un codespace. Toutefois, vous pouvez appliquer vos modifications à un codespace existant en régénérant le conteneur. Vous pouvez effectuer cette opération dans un codespace dans le client web ou l’application de bureau {% data variables.product.prodname_vscode_shortname %}, ou vous pouvez utiliser {% data variables.product.prodname_cli %}.

### Regénération du conteneur de développement dans le client web ou l’application de bureau {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.rebuild-command %}
1. {% data reusables.codespaces.recovery-mode %}

   ![Capture d’écran du message d’erreur concernant le mode de récupération](/assets/images/help/codespaces/recovery-mode-error-message.png)

   - Pour diagnostiquer l’erreur en révisant les journaux de création, cliquez sur **Afficher le journal de création**.
   - Pour corriger les erreurs identifiées dans les journaux, mettez à jour votre fichier `devcontainer.json`.
   - Pour appliquer les modifications, régénérez votre conteneur. 

### Utilisation de {% data variables.product.prodname_cli %} pour régénérer un conteneur de développement

Si vous avez modifié une configuration de conteneur de développement en dehors de VS Code (par exemple, sur {% data variables.product.prodname_dotcom_the_website %} ou dans un IDE JetBrains), vous pouvez utiliser {% data variables.product.prodname_cli %} pour reconstruire le conteneur de développement d’un codespace existant.

1. Dans le terminal, entrez la commande suivante.

   ```
   gh cs rebuild
   ```

   Vos codespaces sont répertoriés.

1. Utilisez les touches de direction de votre clavier pour mettre en surbrillance l’espace de code requis, puis appuyez sur <kbd>Entrée</kbd>.


## Pour aller plus loin

- « [Pré-génération de vos codespaces](/codespaces/prebuilding-your-codespaces) »
