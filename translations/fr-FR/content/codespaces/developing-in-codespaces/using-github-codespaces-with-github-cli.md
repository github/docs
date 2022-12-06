---
title: "Utilisation de GitHub Codespaces avec l’interface\_CLI de GitHub"
shortTitle: GitHub CLI
intro: 'Vous pouvez utiliser {% data variables.product.prodname_github_codespaces %} directement à partir de votre ligne de commande à l’aide de `gh`, l’interface de ligne de commande {% data variables.product.product_name %}.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - CLI
  - Developer
redirect_from:
  - /codespaces/developing-in-codespaces/using-codespaces-with-github-cli
ms.openlocfilehash: e9a268273e0a6d85a17a795f593e7bd3a7885718
ms.sourcegitcommit: 0a6e3eee6eea9b1e445aea1e4461d64cf6b63218
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163496'
---
## À propos de {% data variables.product.prodname_cli %} 

{% data reusables.cli.about-cli %} Pour plus d’informations, consultez « [À propos de {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli) ».

Vous pouvez utiliser {% data variables.product.prodname_github_codespaces %} dans {% data variables.product.prodname_cli %} pour :
  - [Répertorier tous codespaces](#list-all-of-your-codespaces)
  - [Créer un codespace](#create-a-new-codespace)
  - [Arrêter un codespace](#stop-a-codespace)
  - [Supprimer un codespace](#delete-a-codespace)
  - [Renommer un codespace](#rename-a-codespace)
  - [Établir une connexion SSH à un codespace](#ssh-into-a-codespace)
  - [Ouvrir un codespace dans {% data variables.product.prodname_vscode %}](#open-a-codespace-in--data-variablesproductprodname_vscode-)
  - [Ouvrir un espace de code dans JupyterLab](#open-a-codespace-in-jupyterlab)
  - [Copier un fichier vers/depuis un codespace](#copy-a-file-tofrom-a-codespace)
  - [Modifier des ports dans un codespace](#modify-ports-in-a-codespace)
  - [Accéder aux journaux de codespace](#access-codespace-logs)
  - [Accéder aux ressources distantes](#access-remote-resources)
  - [Modifier le type de machine d’un codespace](#change-the-machine-type-of-a-codespace)

## Installation de {% data variables.product.prodname_cli %}

{% data reusables.cli.cli-installation %}
 
## Utilisation de {% data variables.product.prodname_cli %}

Si vous ne l’avez déjà fait, exécutez `gh auth login` pour vous authentifier auprès de votre compte {% data variables.product.prodname_dotcom %}. 

Pour utiliser `gh` pour travailler avec {% data variables.product.prodname_github_codespaces %}, tapez `gh codespace SUBCOMMAND` ou son alias `gh cs SUBCOMMAND`.

En guise d’exemple de série de commandes que vous pourriez pour travailler avec {% data variables.product.prodname_github_codespaces %}, vous pouvez : 

* Répertorier vos codespaces actuels pour vérifier si vous disposez d’un codespace pour un dépôt particulier :<br>
  `gh codespace list`
* Créer un codespace pour la branche de dépôt requise :<br>
  `gh codespace create -r github/docs -b main`
* Établir une connexion SSH au nouveau codespace :<br>
  `gh codespace ssh -c octocat-literate-space-parakeet-7gwrqp9q9jcx4vq`
* Transférer un port vers votre ordinateur local :<br>
  `gh codespace ports forward 8000:8000 -c octocat-literate-space-parakeet-7gwrqp9q9jcx4vq`

## Commandes `gh` pour {% data variables.product.prodname_github_codespaces %}

Les sections ci-dessous donnent des exemples de commandes pour chacune des opérations disponibles.

Pour obtenir une référence complète des commandes `gh` pour {% data variables.product.prodname_github_codespaces %}, incluant des détails sur toutes les options disponibles pour chaque commande, consultez l’aide en ligne de {% data variables.product.prodname_cli %} pour « [gh codespace](https://cli.github.com/manual/gh_codespace) ». Sur la ligne de commande, vous pouvez également utiliser `gh codespace --help` pour obtenir une aide générale ou `gh codespace SUBCOMMAND --help` pour obtenir une aide sur une sous-commande spécifique.

{% note %}

**Remarque** : l’indicateur `-c CODESPACE_NAME` utilisé avec de nombreuses commandes est facultative. Si vous l’omettez, une liste de codespaces s’affiche, dans laquelle vous pouvez opérer un choix.

{% endnote %}

### Répertorier tous codespaces

```shell
gh codespace list
```

La liste inclut le nom unique de chaque espace de codespace, que vous pouvez utiliser dans d’autres commandes `gh codespace`.

Un astérisque à la fin du nom d’une branche d’un codespace indique qu’il existe des modifications non validées ou non envoyées dans ce codespace.

### Créer un codespace

```shell
gh codespace create -r OWNER/REPO_NAME [-b BRANCH]
```

Pour plus d’informations, consultez « [Création d’un codespace pour un dépôt](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository) ».

### Arrêter un codespace

```shell
gh codespace stop -c CODESPACE-NAME
```

Pour plus d’informations, consultez « [Présentation approfondie de {% data variables.product.prodname_github_codespaces %}](/codespaces/getting-started/deep-dive#closing-or-stopping-your-codespace) ».

### Supprimer un codespace

```shell
gh codespace delete -c CODESPACE-NAME
```

Pour plus d’informations, consultez « [Suppression d’un codespace](/codespaces/developing-in-codespaces/deleting-a-codespace) ».

### Renommer un codespace

```shell
gh codespace edit -c CODESPACE-NAME -d DISPLAY-NAME
```

Pour plus d’informations, consultez « [Renommage d’un codespace](/codespaces/customizing-your-codespace/renaming-a-codespace) ».

### Établir une connexion SSH à un codespace

Pour exécuter des commandes sur la machine de codespace distante, à partir de votre terminal, vous pouvez établir une connexion SSH au codespace.

```shell
gh codespace ssh -c CODESPACE-NAME
```

{% note %}

**Remarque** : {% data reusables.codespaces.ssh-server-installed %}

<br>Pour plus d’informations sur le fichier `devcontainer.json` et l’image conteneur par défaut, consultez « [Présentation des conteneurs de développement](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers) ».

{% endnote %}

{% data variables.product.prodname_github_codespaces %} copie vos clés SSH GitHub dans le codespace lors de la création pour une expérience d’authentification transparente. Il se peut que vous soyez invité à entrer la phrase secrète pour votre clé SSH, après quoi vous recevrez une invite de commandes de la machine de codespace distante.

Si vous n’avez pas de clé SSH, suivez les instructions fournies dans « [Génération d’une nouvelle clé SSH et ajout de celle-ci à ssh-agent](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) ».

### Ouvrir un codespace dans {% data variables.product.prodname_vscode %}

```shell
gh codespace code -c CODESPACE-NAME
```

Vous devez avoir installé {% data variables.product.prodname_vscode_shortname %} sur votre machine locale. Pour plus d’informations, consultez « [Utilisation de {% data variables.product.prodname_github_codespaces %} dans {% data variables.product.prodname_vscode %}](/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code) ».

### Ouvrir un espace de code dans JupyterLab

```shell
gh codespace jupyter -c CODESPACE-NAME
```

{% data reusables.codespaces.jupyterlab-installed-in-codespace %}

### Copier un fichier vers/depuis un codespace

```shell
gh codespace cp [-r] SOURCE(S) DESTINATION
```

Utilisez le préfixe `remote:` sur un nom de fichier ou de répertoire pour indiquer qu’il se trouve sur le codespace. Comme avec la commande UNIX `cp`, le premier argument spécifie la source, et le dernier spécifie la destination. Si la destination est un répertoire, vous pouvez spécifier plusieurs sources. Utilisez l’indicateur `-r` (récursif) si l’une des sources est un répertoire.

L’emplacement des fichiers et répertoires sur le codespace est relatif au répertoire de base de l’utilisateur distant.

#### Exemples

* Copier un fichier de l’ordinateur local vers le répertoire `$HOME` d’un codespace :

   `gh codespace cp myfile.txt remote:`

* Copier un fichier vers le répertoire dans lequel un dépôt est extrait dans un codespace :

   `gh codespace cp myfile.txt remote:/workspaces/REPOSITORY-NAME`

* Copier un fichier à partir d’un codespace vers le répertoire actif sur l’ordinateur local :

   `gh codespace cp remote:myfile.txt .`

* Copier trois fichiers locaux vers le répertoire `$HOME/temp` d’un codespace :

   `gh codespace cp a1.txt a2.txt a3.txt remote:temp`

* Copier trois fichiers d’un codespace vers le répertoire de travail actuel sur l’ordinateur local :

   `gh codespace cp remote:a1.txt remote:a2.txt remote:a3.txt .`

* Copier un répertoire local vers le répertoire `$HOME` d’un codespace :

   `gh codespace cp -r mydir remote:`

* Copier un répertoire à partir d’un codespace vers l’ordinateur local, en modifiant le nom du répertoire :

   `gh codespace cp -r remote:mydir mydir-localcopy`

Pour plus d’informations sur la commande `gh codespace cp`, y compris les indicateurs supplémentaires que vous pouvez utiliser, consultez le [manuel {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_codespace_cp).

### Modifier des ports dans un codespace

Vous pouvez transférer un port sur un codespace vers un port local. Le port reste transféré tant que le processus est en cours d’exécution. Pour arrêter le transfert du port, appuyez sur <kbd>Ctrl</kbd>+<kbd>C</kbd>.

```shell
gh codespace ports forward CODESPACE-PORT_NAME:LOCAL-PORT-NAME -c CODESPACE-NAME
```

Pour afficher les détails de ports transférés, entrez `gh codespace ports`, puis choisissez un codespace.

Vous pouvez définir la visibilité d’un port transféré. {% data reusables.codespaces.port-visibility-settings %}

```shell
gh codespace ports visibility CODESPACE-PORT:private|org|public -c CODESPACE-NAME
```

Vous pouvez définir la visibilité de plusieurs ports avec une seule commande. Par exemple :

```shell
gh codespace ports visibility 80:private 3000:public 3306:org -c CODESPACE-NAME
```

Pour plus d’informations, consultez « [Transfert de ports dans votre codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace) ».

### Accéder aux journaux de codespace

Vous pouvez voir le journal de création d’un codespace. Après avoir entré cette commande, vous êtes invité à entrer la phrase secrète pour votre clé SSH.

```shell
gh codespace logs -c CODESPACE-NAME
```

Pour plus d’informations sur le journal de création, consultez « [Journaux de {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/github-codespaces-logs#creation-logs) ».

### Accéder aux ressources distantes 
Vous pouvez utiliser l’extension {% data variables.product.prodname_cli %} pour créer un pont entre un codespace et votre ordinateur local, afin que le codespace puisse accéder à n’importe quelle ressource distante accessible à partir de votre ordinateur. Pour plus d’informations sur l’utilisation de l’extension, consultez « [Utilisation de {% data variables.product.prodname_cli %} pour accéder aux ressources distantes](https://github.com/github/gh-net#codespaces-network-bridge) ».

{% note %}

**Remarque :** L’extension {% data variables.product.prodname_cli %} est actuellement en version bêta et peut faire l’objet de modification. 

{% endnote %}

### Modifier le type de machine d’un codespace

```shell
gh codespace edit -m MACHINE-TYPE-NAME
```

Pour plus d’informations, consultez l’onglet « {% data variables.product.prodname_cli %} » de la rubrique « [Modification du type de machine pour votre codespace](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace) ».
