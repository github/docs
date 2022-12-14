---
title: Utilisation de Codespaces avec GitHub CLI
shortTitle: GitHub CLI
intro: Vous pouvez utiliser {% data variables.product.prodname_github_codespaces %} directement à partir de votre ligne de commande à l’aide de `gh`, l’interface de ligne de commande {% data variables.product.product_name %}.
product: '{% data reusables.gated-features.codespaces %}'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
type: how_to
topics:
- Codespaces
- CLI
- Developer
ms.openlocfilehash: 3ad93a4c72d2f2fedc526b3593ad4a39597e8fc3
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145179788"
---
## <a name="about--data-variablesproductprodname_cli-"></a>À propos de {% data variables.product.prodname_cli %} 

{% data reusables.cli.about-cli %} Pour plus d’informations, consultez « [À propos de {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli) ».

Vous pouvez utiliser {% data variables.product.prodname_codespaces %} dans {% data variables.product.prodname_cli %} pour :
- [Répertorier vos codespaces](#list-all-of-your-codespaces)
- [Créer un codespace](#create-a-new-codespace)
- [Arrêter un codespace](#stop-a-codespace)
- [Supprimer un codespace](#delete-a-codespace)
- [Établir une connexion SSH à un codespace](#ssh-into-a-codespace)
- [Ouvrir un codespace dans {% data variables.product.prodname_vscode %}](#open-a-codespace-in-visual-studio-code)
- [Ouvrir un espace de code dans JupyterLab](#open-a-codespace-in-jupyterlab)
- [Copie d’un fichier vers/depuis un codespace](#copy-a-file-tofrom-a-codespace)
- [Modifier des ports dans un codespace](#modify-ports-in-a-codespace)
- [Accéder aux journaux de codespace](#access-codespace-logs)

## <a name="installing--data-variablesproductprodname_cli-"></a>Installation de {% data variables.product.prodname_cli %}

{% data reusables.cli.cli-installation %}
 
## <a name="using--data-variablesproductprodname_cli-"></a>Utilisation de {% data variables.product.prodname_cli %}

Si vous ne l’avez déjà fait, exécutez `gh auth login` pour vous authentifier auprès de votre compte {% data variables.product.prodname_dotcom %}. 

Pour utiliser `gh` pour travailler avec {% data variables.product.prodname_codespaces %}, tapez `gh codespace <COMMAND>` ou son alias `gh cs <COMMAND>`.

En guise d’exemple de série de commandes que vous pourriez pour travailler avec {% data variables.product.prodname_github_codespaces %}, vous pouvez : 

* Répertorier vos codespaces actuels pour vérifier si vous disposez d’un codespace pour un dépôt particulier :<br>
  `gh codespace list`
* Créer un codespace pour la branche de dépôt requise :<br>
  `gh codespace create -r github/docs -b main`
* Établir une connexion SSH au nouveau codespace :<br>
  `gh codespace ssh -c mona-github-docs-v4qxrv7rfwv9w`
* Transférer un port vers votre ordinateur local :<br>
  `gh codespace ports forward 8000:8000 -c mona-github-docs-v4qxrv7rfwv9w`

## <a name="gh-commands-for--data-variablesproductprodname_github_codespaces-"></a>Commandes `gh` pour {% data variables.product.prodname_github_codespaces %}

Les sections ci-dessous donnent des exemples de commandes pour chacune des opérations disponibles.

Pour obtenir une référence complète des commandes `gh` pour {% data variables.product.prodname_github_codespaces %}, incluant des détails sur toutes les options disponibles pour chaque commande, consultez l’aide en ligne de {% data variables.product.prodname_cli %} pour « [gh codespace](https://cli.github.com/manual/gh_codespace) ». Vous pouvez également utiliser `gh codespace [<SUBCOMMAND>...] --help` sur la ligne de commande.

{% note %}

**Remarque** : l’indicateur `-c <em>codespace-name</em>` utilisé avec de nombreuses commandes est facultative. Si vous l’omettez, une liste de codespaces s’affiche, dans laquelle vous pouvez opérer un choix.

{% endnote %}

### <a name="list-all-of-your-codespaces"></a>Répertorier tous codespaces

```shell
gh codespace list
```

La liste inclut le nom unique de chaque espace de codespace, que vous pouvez utiliser dans d’autres commandes `gh codespace`.

### <a name="create-a-new-codespace"></a>Créer un codespace

```shell
gh codespace create -r <em>owner/repository</em> [-b <em>branch</em>]
```

Pour plus d’informations, consultez « [Création d’un espace de code](/codespaces/developing-in-codespaces/creating-a-codespace) ».

### <a name="stop-a-codespace"></a>Arrêter un codespace

```shell
gh codespace stop -c <em>codespace-name</em>
```

Pour plus d’informations, consultez « [Présentation approfondie des codespaces](/codespaces/getting-started/deep-dive#closing-or-stopping-your-codespace) ».

### <a name="delete-a-codespace"></a>Supprimer un codespace

```shell
gh codespace delete -c <em>codespace-name</em>
```

Pour plus d’informations, consultez « [Suppression d’un codespace](/codespaces/developing-in-codespaces/deleting-a-codespace) ».

### <a name="ssh-into-a-codespace"></a>Établir une connexion SSH à un codespace

Pour exécuter des commandes sur la machine de codespace distante, à partir de votre terminal, vous pouvez établir une connexion SSH au codespace.

```shell
gh codespace ssh -c <em>codespace-name</em>
```

{% data variables.product.prodname_github_codespaces %} copie vos clés SSH GitHub dans le codespace lors de la création pour une expérience d’authentification transparente. Il se peut que vous soyez invité à entrer la phrase secrète pour votre clé SSH, après quoi vous recevrez une invite de commandes de la machine de codespace distante.

Si vous n’avez pas de clé SSH, suivez les instructions fournies dans « [Génération d’une nouvelle clé SSH et ajout de celle-ci à ssh-agent](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) ».

### <a name="open-a-codespace-in--data-variablesproductprodname_vscode-"></a>Ouvrir un codespace dans {% data variables.product.prodname_vscode %}

```shell
gh codespace code -c <em>codespace-name</em>
```

Pour plus d’informations, consultez « [Utilisation de {% data variables.product.prodname_codespaces %} dans {% data variables.product.prodname_vscode %}](/codespaces/developing-in-codespaces/using-codespaces-in-visual-studio-code) ».

### <a name="open-a-codespace-in-jupyterlab"></a>Ouvrir un espace de code dans JupyterLab

```shell
gh codespace jupyter -c <em>codespace-name</em>
```

### <a name="copy-a-file-tofrom-a-codespace"></a>Copier un fichier vers/depuis un codespace

```shell
gh codespace cp [-r] <em>source(s)</em> <em>destination</em> 
```

Utilisez le préfixe `remote:` sur un nom de fichier ou de répertoire pour indiquer qu’il se trouve sur le codespace. Comme avec la commande UNIX `cp`, le premier argument spécifie la source, et le dernier spécifie la destination. Si la destination est un répertoire, vous pouvez spécifier plusieurs sources. Utilisez l’indicateur `-r` (récursif) si l’une des sources est un répertoire.

L’emplacement des fichiers et répertoires sur le codespace est relatif au répertoire de base de l’utilisateur distant.

#### <a name="examples"></a>Exemples

* Copier un fichier de l’ordinateur local vers le répertoire `$HOME` d’un codespace :

   `gh codespace cp myfile.txt remote:`

* Copier un fichier vers le répertoire dans lequel un dépôt est extrait dans un codespace :

   `gh codespace cp myfile.txt remote:/workspaces/<REPOSITORY-NAME>`

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

### <a name="modify-ports-in-a-codespace"></a>Modifier des ports dans un codespace

Vous pouvez transférer un port sur un codespace vers un port local. Le port reste transféré tant que le processus est en cours d’exécution. Pour arrêter le transfert du port, appuyez sur <kbd>Ctrl</kbd>+<kbd>C</kbd>.

```shell
gh codespace ports forward <em>codespace-port-number</em>:<em>local-port-number</em> -c <em>codespace-name</em>
```

Pour afficher les détails de ports transférés, entrez `gh codespace ports`, puis choisissez un codespace.

Vous pouvez définir la visibilité d’un port transféré. {% data reusables.codespaces.port-visibility-settings %}

```shell
gh codespace ports visibility <em>codespace-port</em>:<em>private|org|public</em> -c <em>codespace-name</em>
```

Vous pouvez définir la visibilité de plusieurs ports avec une seule commande. Par exemple :

```shell
gh codespace ports visibility 80:private 3000:public 3306:org -c <em>codespace-name</em>
```

Pour plus d’informations, consultez « [Transfert de ports dans votre codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace) ».

### <a name="access-codespace-logs"></a>Accéder aux journaux de codespace

Vous pouvez voir le journal de création d’un codespace. Après avoir entré cette commande, vous êtes invité à entrer la phrase secrète pour votre clé SSH.

```shell
gh codespace logs -c <em>codespace-name</em>
```

Pour plus d’informations sur le journal de création, consultez « [Journaux Codespaces](/codespaces/troubleshooting/codespaces-logs#creation-logs) ».
