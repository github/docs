---
title: Ajout de code hébergé localement dans GitHub
intro: 'Découvrez comment ajouter du code source ou des dépôts existants dans {% data variables.product.product_name %} à partir de la ligne de commande en utilisant des commandes {% data variables.product.prodname_cli %} ou Git. Ensuite, partagez votre code et invitez d’autres utilisateurs à travailler avec vous.'
redirect_from:
  - /articles/add-an-existing-project-to-github
  - /articles/adding-an-existing-project-to-github-using-the-command-line
  - /github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line
  - /github/importing-your-projects-to-github/importing-source-code-to-github/adding-an-existing-project-to-github-using-the-command-line
  - /get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-an-existing-project-to-github-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Add locally hosted code
ms.openlocfilehash: 646ea2b0267ffebe546cf014ba7af74ab3c36284
ms.sourcegitcommit: f4e3a8d53078409382c84d26a350dae6e35ba3aa
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/06/2022
ms.locfileid: '147855039'
---
## À propos de l’ajout de code source existant dans {% data variables.product.product_name %}

Si vous avez du code source existant ou des dépôts stockés localement sur votre ordinateur ou réseau privé, vous pouvez les ajouter dans {% data variables.product.product_name %} en tapant les commandes appropriées dans un terminal. Vous pouvez le faire en tapant directement les commandes Git ou en utilisant {% data variables.product.prodname_cli %}.

{% data variables.product.prodname_cli %} est un outil open source permettant d’utiliser {% data variables.product.prodname_dotcom %} à partir de la ligne de commande de votre ordinateur. {% data variables.product.prodname_cli %} peut simplifier le processus d’ajout d’un projet existant dans {% data variables.product.product_name %} en utilisant la ligne de commande. Pour en savoir plus sur {% data variables.product.prodname_cli %}, consultez « [À propos de {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli) ».

{% tip %}

**Conseil :** Si vous préférez utiliser une interface utilisateur de type pointer-cliquer, essayez d’ajouter votre projet avec {% data variables.product.prodname_desktop %}. Pour plus d’informations, consultez « [Ajouter un dépôt de votre ordinateur local vers GitHub Desktop](/desktop/guides/contributing-to-projects/adding-a-repository-from-your-local-computer-to-github-desktop) » dans l’*Aide de {% data variables.product.prodname_desktop %}* .

{% endtip %}

{% data reusables.repositories.sensitive-info-warning %}

## Ajouter un dépôt local dans {% data variables.product.product_name %} avec {% data variables.product.prodname_cli %}

1. À partir de la ligne de commande, accédez au répertoire racine de votre projet.
1. Initialisez le répertoire local en tant que dépôt Git.

    ```shell
    git init -b main
    ```

1. Indexer et commiter tous les fichiers dans votre projet

   ```shell
   git add . && git commit -m "initial commit"
   ```

1. Pour créer un dépôt pour votre projet dans GitHub, utilisez la sous-commande `gh repo create`. Lorsque vous y êtes invité, sélectionnez **Pousser un dépôt local existant vers GitHub** et entrez le nom souhaité pour votre dépôt. Si vous voulez que votre projet appartienne à une organisation plutôt qu’à votre compte d’utilisateur, spécifiez le nom de l’organisation et le nom du projet avec `organization-name/project-name`.

1. Suivez les invites interactives. Pour ajouter le dépôt distant et le pousser, répondez oui quand vous êtes invité à ajouter le dépôt distant et à pousser les commits vers la branche active.

1. Vous pouvez aussi ignorer toutes les invites, fournir le chemin du dépôt avec l’indicateur `--source` et passer un indicateur de visibilité (`--public`, `--private` ou `--internal`). Par exemple : `gh repo create --source=. --public`. Spécifiez un dépôt distant avec l’indicateur `--remote`. Pour pousser vos commits, passez l’indicateur `--push`. Pour plus d’informations sur les arguments possibles, consultez le [manuel de GitHub CLI](https://cli.github.com/manual/gh_repo_create).

## Ajouter un dépôt local dans {% data variables.product.product_name %} en utilisant Git

{% mac %}

1. [Créez un dépôt](/repositories/creating-and-managing-repositories/creating-a-new-repository) dans {% data variables.product.product_location %}. Pour éviter les erreurs, n’initialisez pas le nouveau dépôt avec le fichier *README*, la licence ou les fichiers `gitignore`. Vous pouvez ajouter ces fichiers une fois que votre projet a été poussé vers {% data variables.product.product_name %}.
    ![Liste déroulante Nouveau dépôt](/assets/images/help/repository/repo-create.png) {% data reusables.command_line.open_the_multi_os_terminal %}
3. Changez le répertoire de travail actuel par votre projet local.
4. Utilisez la commande `init` pour initialiser le répertoire local en tant que dépôt Git. Par défaut, la branche initiale est appelée `master`.
   
   Si vous utilisez Git 2.28.0 ou une version ultérieure, vous pouvez définir le nom de la branche par défaut en utilisant `-b`.

   ``` shell
   $ git init -b main
   ```

   Si vous utilisez Git 2.27.1 ou une version antérieure, vous pouvez définir le nom de la branche par défaut en utilisant `&& git symbolic-ref HEAD refs/heads/main`.

   ``` shell
   $ git init && git symbolic-ref HEAD refs/heads/main
   ```
5. Ajoutez les fichiers dans votre nouveau dépôt local. Cette opération les indexe en vue du premier commit.
  
  ```shell
  $ git add .
  # Adds the files in the local repository and stages them for commit. {% data reusables.git.unstage-codeblock %}
  ```
6. Commitez les fichiers que vous avez indexés dans votre dépôt local.
  ```shell
  $ git commit -m "First commit"
  # Commits the tracked changes and prepares them to be pushed to a remote repository. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
7. En haut de votre dépôt dans la page Configuration rapide de l’instance {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, cliquez sur {% octicon "clippy" aria-label="The copy to clipboard icon" %} pour copier l’URL du dépôt distant.
    ![Champ Copier l’URL du dépôt distant](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
8. Dans Terminal, [ajoutez l’URL du dépôt distant](/github/getting-started-with-github/managing-remote-repositories) vers lequel votre dépôt local sera poussé.
  ```shell
  $ git remote add origin <em> &lt;REMOTE_URL> </em>
  # Sets the new remote
  $ git remote -v
  # Verifies the new remote URL
  ```
9. [Poussez les modifications](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/) de votre dépôt local vers {% data variables.product.product_location %}.
  ```shell
  $ git push -u origin main
  # Pushes the changes in your local repository up to the remote repository you specified as the origin
  ```

{% endmac %}

{% windows %}

1. [Créez un dépôt](/articles/creating-a-new-repository) dans {% data variables.product.product_location %}. Pour éviter les erreurs, n’initialisez pas le nouveau dépôt avec le fichier *README*, la licence ou les fichiers `gitignore`. Vous pouvez ajouter ces fichiers une fois que votre projet a été poussé vers {% data variables.product.product_name %}.
    ![Liste déroulante Nouveau dépôt](/assets/images/help/repository/repo-create.png) {% data reusables.command_line.open_the_multi_os_terminal %}
3. Changez le répertoire de travail actuel par votre projet local.
4. Utilisez la commande `init` pour initialiser le répertoire local en tant que dépôt Git. Par défaut, la branche initiale est appelée `master`.
   
   Si vous utilisez Git 2.28.0 ou une version ultérieure, vous pouvez définir le nom de la branche par défaut en utilisant `-b`.

   ``` shell
   $ git init -b main
   ```

   Si vous utilisez Git 2.27.1 ou une version antérieure, vous pouvez définir le nom de la branche par défaut en utilisant `&& git symbolic-ref HEAD refs/heads/main`.

   ``` shell
   $ git init && git symbolic-ref HEAD refs/heads/main
   ```
5. Ajoutez les fichiers dans votre nouveau dépôt local. Cette opération les indexe en vue du premier commit.
  ```shell
  $ git add .
  # Adds the files in the local repository and stages them for commit. {% data reusables.git.unstage-codeblock %}
  ```
6. Commitez les fichiers que vous avez indexés dans votre dépôt local.
  ```shell
  $ git commit -m "First commit"
  # Commits the tracked changes and prepares them to be pushed to a remote repository. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
7. En haut de votre dépôt dans la page Configuration rapide de l’instance {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, cliquez sur {% octicon "clippy" aria-label="The copy to clipboard icon" %} pour copier l’URL du dépôt distant.
    ![Champ Copier l’URL du dépôt distant](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
8. À partir de l’invite de commandes, [ajoutez l’URL du dépôt distant](/github/getting-started-with-github/managing-remote-repositories) vers lequel votre dépôt local sera poussé.
  ```shell
  $ git remote add origin <em> &lt;REMOTE_URL> </em>
  # Sets the new remote
  $ git remote -v
  # Verifies the new remote URL
  ```
9. [Poussez les modifications](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/) de votre dépôt local vers {% data variables.product.product_location %}.
  ```shell
  $ git push origin main
  # Pushes the changes in your local repository up to the remote repository you specified as the origin
  ```

{% endwindows %}

{% linux %}

1. [Créez un dépôt](/articles/creating-a-new-repository) dans {% data variables.product.product_location %}. Pour éviter les erreurs, n’initialisez pas le nouveau dépôt avec le fichier *README*, la licence ou les fichiers `gitignore`. Vous pouvez ajouter ces fichiers une fois que votre projet a été poussé vers {% data variables.product.product_name %}.
    ![Liste déroulante Nouveau dépôt](/assets/images/help/repository/repo-create.png) {% data reusables.command_line.open_the_multi_os_terminal %}
3. Changez le répertoire de travail actuel par votre projet local.
4. Utilisez la commande `init` pour initialiser le répertoire local en tant que dépôt Git. Par défaut, la branche initiale est appelée `master`.
   
   Si vous utilisez Git 2.28.0 ou une version ultérieure, vous pouvez définir le nom de la branche par défaut en utilisant `-b`.

   ``` shell
   $ git init -b main
   ```

   Si vous utilisez Git 2.27.1 ou une version antérieure, vous pouvez définir le nom de la branche par défaut en utilisant `&& git symbolic-ref HEAD refs/heads/main`.

   ``` shell
   $ git init && git symbolic-ref HEAD refs/heads/main
   ```
5. Ajoutez les fichiers dans votre nouveau dépôt local. Cette opération les indexe en vue du premier commit.
  ```shell
  $ git add .
  # Adds the files in the local repository and stages them for commit. {% data reusables.git.unstage-codeblock %}
  ```
6. Commitez les fichiers que vous avez indexés dans votre dépôt local.
  ```shell
  $ git commit -m "First commit"
  # Commits the tracked changes and prepares them to be pushed to a remote repository. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
7. En haut de votre dépôt dans la page Configuration rapide de l’instance {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, cliquez sur {% octicon "clippy" aria-label="The copy to clipboard icon" %} pour copier l’URL du dépôt distant.
    ![Champ Copier l’URL du dépôt distant](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
8. Dans Terminal, [ajoutez l’URL du dépôt distant](/github/getting-started-with-github/managing-remote-repositories) vers lequel votre dépôt local sera poussé.
  ```shell
  $ git remote add origin <em> &lt;REMOTE_URL> </em>
  # Sets the new remote
  $ git remote -v
  # Verifies the new remote URL
  ```
9. [Poussez les modifications](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/) de votre dépôt local vers {% data variables.product.product_location %}.
  ```shell
  $ git push origin main
  # Pushes the changes in your local repository up to the remote repository you specified as the origin
  ```

{% endlinux %}

## Pour aller plus loin

- « [Ajouter un fichier à un dépôt](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository#adding-a-file-to-a-repository-using-the-command-line) »
