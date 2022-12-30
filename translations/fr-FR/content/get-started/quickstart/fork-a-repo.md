---
title: Fork a repo
redirect_from:
  - /fork-a-repo
  - /forking
  - /articles/fork-a-repo
  - /github/getting-started-with-github/fork-a-repo
  - /github/getting-started-with-github/quickstart/fork-a-repo
intro: Une duplication est un nouveau référentiel qui partage le code et les paramètres de visibilité avec le référentiel « en amont » d’origine.
permissions: '{% data reusables.enterprise-accounts.emu-permission-fork %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Notifications
  - Accounts
ms.openlocfilehash: 6756defd7567983cc7dbb1a9bfe36256e5b41a09
ms.sourcegitcommit: 468a0323fa636517985a3e08e2772dbb0545cab8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/03/2022
ms.locfileid: '148191337'
---
## À propos des duplications (fork)

{% data reusables.repositories.fork-definition-long %}  Pour plus d’informations, consultez « [Utilisation des duplications](/github/collaborating-with-issues-and-pull-requests/working-with-forks) ».

### Proposer des modifications à apporter au projet d’une autre personne

Par exemple, vous pouvez utiliser des duplications pour proposer des modifications liées à la correction d’un bogue. Au lieu de journaliser un problème pour un bogue que vous avez trouvé, vous pouvez :

- Dupliquez (fork) le dépôt.
- Appliquer le correctif.
- Soumettre une demande de tirage au propriétaire du projet.

### Utiliser le projet d’une autre personne comme point de départ de votre propre idée.

Les logiciels open source reposent sur l’idée que le partage de leur code nous permet de les améliorer et de les rendre plus fiables. Pour plus d’informations, consultez « [À propos de l’initiative open source](https://opensource.org/about) » sur le site Open Source Initiative.

Pour plus d’informations sur l’application des principes open source au travail de développement de votre organisation sur {% data variables.location.product_location %}, consultez le livre blanc de {% data variables.product.prodname_dotcom %} intitulé « [An introduction to innersource](https://resources.github.com/whitepapers/introduction-to-innersource/) ».

{% ifversion fpt or ghes or ghec %}

Quand vous créez votre dépôt public à partir d’une duplication du projet d’une autre personne, veillez à inclure un fichier de licence qui détermine la façon dont vous souhaitez que votre projet soit partagé avec d’autres personnes. Pour plus d’informations, consultez la page « [Choose an open source license](https://choosealicense.com/) » du site choosealicense.com.

{% data reusables.open-source.open-source-guide-repositories %} {% data reusables.open-source.open-source-learning %}

{% endif %}

## Prérequis

Si vous ne l’avez pas encore fait, configurez d’abord Git et l’authentification avec {% data variables.location.product_location %} à partir de Git. Pour plus d’informations, consultez « [Configurer Git](/articles/set-up-git) ».

## Duplication d’un dépôt

{% webui %}

Vous pouvez dupliquer un projet pour proposer des modifications au référentiel en amont. Dans ce cas, une bonne pratique consiste à synchroniser régulièrement votre duplication avec le dépôt en amont. Pour cela, vous avez besoin d’utiliser Git sur la ligne de commande. Vous pouvez vous entraîner à définir le dépôt en amont à l’aide du même dépôt [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) que vous venez de dupliquer (fork).

1. Sur {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% else %}{% data variables.location.product_location %}{% endif %}, accédez au dépôt [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife).
2. Dans le coin supérieur droit de la page, cliquez sur **Dupliquer**.
   ![Bouton Dupliquer](/assets/images/help/repository/fork_button.png){% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.5 %}
3. Sélectionnez un propriétaire pour le dépôt dupliqué.
   ![PCréer unePévidence](/assets/images/help/repository/fork-choose-owner.png)
4. Par défaut, les duplications ont le même nom que leurs référentiels en amont. Vous pouvez changer le nom de la duplication pour mieux la différencier. 
   ![Page Créer une duplication avec le champ Nom du dépôt mis en évidence](/assets/images/help/repository/fork-choose-repo-name.png)
5. Ajoutez éventuellement une description pour votre duplication.
   ![Page Créer une duplication avec le champ Description mis en évidence](/assets/images/help/repository/fork-description.png)
6. Choisissez entre copier uniquement la branche par défaut ou toutes les branches dans la nouvelle duplication. Dans de nombreux scénarios de duplication, tels que la contribution à des projets open source, vous devez uniquement copier la branche par défaut. Par défaut, seule la branche par défaut est copiée.
   ![Option permettant de copier uniquement la branche par défaut](/assets/images/help/repository/copy-default-branch-only.png)
7. Cliquez sur **Créer une duplication**.
   ![Bouton Créer une duplication mis en évidence](/assets/images/help/repository/fork-create-button.png)


{% note %}

**Remarque :** si vous souhaitez copier des branches supplémentaires à partir du référentiel en amont, vous pouvez le faire depuis la page **Branches**. Pour plus d’informations, consultez « [Création et suppression de branches dans votre dépôt](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository) ».{% endnote %}{% endif %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Pour créer une duplication d’un dépôt, utilisez la sous-commande `gh repo fork`.

```shell
gh repo fork REPOSITORY
```

Pour créer la duplication dans une organisation, utilisez l’indicateur `--org`.

```shell
gh repo fork REPOSITORY --org "octo-org"
```

{% endcli %}

{% desktop %} {% enddesktop %}

## Clonage de votre dépôt dupliqué

Pour l’instant, vous disposez d’une duplication du dépôt Spoon-Knife, mais les fichiers inclus dans ce dépôt ne sont pas localement sur votre ordinateur.

{% webui %}

1. Sur {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% else %}{% data variables.location.product_location %}{% endif %}, accédez à **votre duplication** du dépôt Spoon-Knife.
{% data reusables.repositories.copy-clone-url %} {% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.command_line.change-current-directory-clone %}
4. Tapez `git clone`, puis collez l’URL que vous avez copiée précédemment. Voici ce à quoi cela ressemble, avec votre nom d’utilisateur {% data variables.product.product_name %} au lieu de `YOUR-USERNAME` :
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/YOUR-USERNAME/Spoon-Knife
  ```

5. Appuyez sur **Entrée**. Votre clone local va être créé.
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/YOUR-USERNAME/Spoon-Knife
  > Cloning into `Spoon-Knife`...
  > remote: Counting objects: 10, done.
  > remote: Compressing objects: 100% (8/8), done.
  > remote: Total 10 (delta 1), reused 10 (delta 1)
  > Unpacking objects: 100% (10/10), done.
  ```

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Pour créer un clone de votre duplication, utilisez l’indicateur `--clone`.

```shell
gh repo fork REPOSITORY --clone=true
```

{% endcli %}

{% desktop %}

{% data reusables.desktop.choose-clone-repository %} {% data reusables.desktop.cloning-location-tab %} {% data reusables.desktop.cloning-repository-list %} {% data reusables.desktop.choose-local-path %} {% data reusables.desktop.click-clone %}

{% enddesktop %}

## Configuration de Git pour synchroniser votre duplication avec le référentiel en amont

Quand vous dupliquez un projet pour proposer des modifications du référentiel en amont, vous pouvez configurer Git pour tirer (pull) des modifications depuis le référentiel en amont vers le clone local de votre duplication.

{% webui %}

1. Sur {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% else %}{% data variables.location.product_location %}{% endif %}, accédez au dépôt [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife).
{% data reusables.repositories.copy-clone-url %} {% data reusables.command_line.open_the_multi_os_terminal %}
4. Changez de répertoire pour accéder à l’emplacement de la duplication que vous avez clonée.
    - Pour accéder à votre répertoire de base, tapez simplement `cd` sans aucun autre texte.
    - Pour lister les fichiers et dossiers inclus dans votre répertoire actuel, tapez `ls`.
    - Pour accéder à l’un de vos répertoires listés, tapez `cd your_listed_directory`.
    - Pour monter d’un répertoire, tapez `cd ..`.
5. Tapez `git remote -v`, puis appuyez sur **Entrée**. Vous allez voir le dépôt distant actuellement configuré pour votre duplication.
  ```shell
  $ git remote -v
  > origin  https://{% data variables.command_line.codeblock %}/YOUR_USERNAME/YOUR_FORK.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/YOUR_USERNAME/YOUR_FORK.git (push)
  ```

6. Tapez `git remote add upstream`, collez l’URL que vous avez copiée à l’étape 3, puis appuyez sur **Entrée**. Voici le résultat :
  ```shell
  $ git remote add upstream https://{% data variables.command_line.codeblock %}/ORIGINAL_OWNER/Spoon-Knife.git
  ```

7. Pour vérifier le nouveau dépôt en amont que vous avez spécifié pour votre duplication, retapez `git remote -v`. Vous devriez voir l’URL de votre duplication indiquée en tant que `origin` et l’URL du référentiel en amont indiquée en tant que `upstream`.
  ```shell
  $ git remote -v
  > origin    https://{% data variables.command_line.codeblock %}/YOUR_USERNAME/YOUR_FORK.git (fetch)
  > origin    https://{% data variables.command_line.codeblock %}/YOUR_USERNAME/YOUR_FORK.git (push)
  > upstream  https://{% data variables.command_line.codeblock %}/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (fetch)
  > upstream  https://{% data variables.command_line.codeblock %}/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (push)
  ```

À présent, vous pouvez garder votre duplication synchronisée avec le dépôt en amont à l’aide de quelques commandes Git. Pour plus d’informations, consultez « [Synchronisation d’une duplication](/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork) ».

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Pour configurer un dépôt distant pour le dépôt dupliqué, utilisez l’indicateur `--remote`.

```shell
gh repo fork REPOSITORY --remote=true
```

Pour spécifier le nom du dépôt distant, utilisez l’indicateur `--remote-name`.

```shell
gh repo fork REPOSITORY --remote-name "main-remote-repo"
```

{% endcli %}

### Modification d’une duplication

Vous pouvez apporter des modifications à une duplication, notamment :

- **Créer des branches :** Les [*branches*](/articles/creating-and-deleting-branches-within-your-repository/) vous permettent de générer de nouvelles fonctionnalités ou de tester des idées sans faire courir le moindre risque à votre projet principal (main).
- **Ouvrir des demandes de tirage :** si vous espérez contribuer à nouveau au référentiel en amont, vous pouvez demander à l’auteur original de tirer votre duplication dans son référentiel en lui envoyant une [demande de tirage](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests).

## Rechercher un autre dépôt à dupliquer
Dupliquez un dépôt pour commencer à contribuer à un projet. {% data reusables.repositories.you-can-fork %}

{% ifversion fpt or ghec %}Vous pouvez parcourir la page [Explorer](https://github.com/explore) pour trouver des projets et commencer à apporter votre contribution à des dépôts open source. Pour plus d’informations, consultez « [Trouver des moyens de contribuer à l’open source sur {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github) ».

{% endif %}

## Étapes suivantes

Vous avez maintenant dupliqué un dépôt, vous vous êtes entraîné à cloner votre duplication et vous avez configuré un dépôt en amont.

* Pour plus d’informations sur le clonage de la duplication et la synchronisation des modifications dans un dépôt dupliqué à partir de votre ordinateur, consultez « [Configurer Git](/articles/set-up-git) ».

* Vous pouvez également créer un dépôt dans lequel vous pouvez placer tous vos projets et partager le code sur {% data variables.product.prodname_dotcom %}. {% data reusables.getting-started.create-a-repository %}"

* {% data reusables.getting-started.being-social %}

* {% data reusables.support.connect-in-the-forum-bootcamp %}
