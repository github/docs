---
title: Contribution aux projets
intro: Découvrez comment contribuer à un projet par le biais de la duplication.
permissions: '{% data reusables.enterprise-accounts.emu-permission-fork %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Forks
  - GitHub
  - Open Source
ms.openlocfilehash: da38c6f5b3ea953fc58bf79080b9fa4eb5a2712d
ms.sourcegitcommit: 468a0323fa636517985a3e08e2772dbb0545cab8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/03/2022
ms.locfileid: '148191345'
---
## À propos de la duplication (fork)

Si vous souhaitez contribuer au projet d’une autre personne, mais que vous n’avez pas accès en écriture au référentiel, vous pouvez utiliser un workflow « duplication (fork) et demande de tirage (pull request) ». 

{% data reusables.repositories.fork-definition-long %}

Vous pouvez contribuer en soumettant des demandes de tirage à partir de votre duplication au référentiel en amont. Pour plus d’informations, consultez « [Dupliquer (fork) un dépôt](/get-started/quickstart/fork-a-repo) ».

## Duplication (fork) d’un dépôt

Ce tutoriel utilise [le projet Spoon-Knife](https://github.com/octocat/Spoon-Knife), un dépôt de test hébergé sur {% data variables.product.prodname_dotcom_the_website %} qui vous permet de tester le workflow de duplication (fork) et de demande de tirage (pull request).

1. Accédez au projet `Spoon-Knife` à l’adresse https://github.com/octocat/Spoon-Knife.
2. Cliquez sur **Dupliquer (fork)** .
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

**Remarque :** si vous souhaitez copier des branches supplémentaires à partir du référentiel en amont, vous pouvez le faire depuis la page **Branches**. Pour plus d’informations, consultez « [Création et suppression de branches dans votre dépôt](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository) ».

{% endnote %} {% endif %}

## Clonage d’une duplication (fork)

Vous avez correctement dupliqué (fork) le dépôt Spoon-Knife, mais jusqu’à présent, il existe uniquement sur {% data variables.product.product_name %}. Pour pouvoir travailler sur le projet, vous avez besoin de le cloner sur votre ordinateur.

Vous pouvez cloner votre duplication (fork) avec la ligne de commande, {% data variables.product.prodname_cli %} ou {% data variables.product.prodname_desktop %}.

{% webui %}

1. Sur {% data variables.product.product_name %}, accédez à **votre duplication (fork)** du dépôt Spoon-Knife.
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
  > remove: Total 10 (delta 1), reused 10 (delta 1)
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

## Création d’une branche sur laquelle travailler

Avant d’apporter des modifications au projet, vous devez créer une nouvelle branche et l’extraire. En conservant les modifications apportées à sa propre branche, vous suivez GitHub Flow et vous garantissez qu’il sera plus facile de contribuer à nouveau au même projet dans le futur. Pour plus d’informations, consultez « [GitHub Flow](/get-started/quickstart/github-flow#following-github-flow) ».

{% webui %}

```shell
git branch BRANCH-NAME
git checkout BRANCH-NAME
```

{% endwebui %}

{% cli %}

```shell
git branch BRANCH-NAME
git checkout BRANCH-NAME
```

{% endcli %}

{% desktop %}

Pour plus d’informations sur la création et la gestion des branches dans {% data variables.product.prodname_desktop %}, consultez « [Gestion des branches](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/managing-branches) ».

{% enddesktop %}

## Apporter et pousser (push) des modifications

Poursuivez en apportant quelques modifications au projet à l’aide de votre éditeur de texte favori, comme [Visual Studio Code](https://code.visualstudio.com). Vous pouvez, par exemple, modifier le texte dans `index.html` pour ajouter votre nom d’utilisateur GitHub.

Quand vous êtes prêt à soumettre vos modifications, indexez-les et commitez-les. `git add .` indique à Git que vous voulez inclure toutes vos modifications dans le commit suivant. `git commit` prend un instantané de ces modifications.

{% webui %}

```shell
git add .
git commit -m "a short description of the change"
```

{% endwebui %}

{% cli %}

```shell
git add .
git commit -m "a short description of the change"
```

{% endcli %}

{% desktop %}

Pour plus d’informations sur la manière d’indexer et commiter des modifications dans {% data variables.product.prodname_desktop %}, consultez « [Commit et revue des changements apportés à votre projet](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project#selecting-changes-to-include-in-a-commit) ».

{% enddesktop %}

Quand vous indexez et commitez des fichiers, vous indiquez grosso modo à Git de prendre un instantané de vos modifications. Vous pouvez continuer à apporter d’autres modifications et prendre d’autres instantanés de commit.

Pour le moment, vos modifications existent uniquement en local. Quand vous êtes prêt à pousser (push) vos modifications vers {% data variables.product.product_name %}, poussez-les vers le dépôt distant.

{% webui %}

```shell
git push
```

{% endwebui %}

{% cli %}

```shell
git push
```

{% endcli %}

{% desktop %}

Pour plus d’informations sur la façon de pousser (push) des modifications dans {% data variables.product.prodname_desktop %}, consultez « [Pousser (push) des modifications vers GitHub](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/pushing-changes-to-github) ».

{% enddesktop %}

## Déroulement d’une demande de tirage

Enfin, vous voilà prêt à proposer des modifications dans le projet principal ! Il s’agit de la dernière étape de la production d’une duplication (fork) du projet d’une autre personne, et sans doute la plus importante. Si vous avez apporté une modification qui, à votre avis, pourrait être bénéfique pour l’ensemble de la communauté, envisagez sérieusement d’apporter votre contribution.

Pour cela, accédez au dépôt {% data variables.product.product_name %} où réside votre projet. Dans cet exemple, il s’agit de `https://github.com/<your_username>/Spoon-Knife`. Vous allez voir une bannière indiquant que votre branche a un commit d’avance sur `octocat:main`. Cliquez sur **Contribuer**, puis **Ouvrir une demande de tirage**.

{% data variables.product.product_name %} vous fait accéder à une page qui indique les différences entre votre duplication (fork) et le dépôt `octocat/Spoon-Knife`. Cliquez sur **Create pull request** (Créer une demande de tirage).

{% data variables.product.product_name %} vous fait accéder à une page dans laquelle vous pouvez entrer le titre et la description de vos modifications. Il est important de fournir autant d’informations utiles que possible, ainsi que la raison pour laquelle vous effectuez cette demande de tirage de prime abord. Le propriétaire du projet a besoin d’être en mesure de déterminer si votre modification s’avère aussi utile pour tout le monde que vous le pensez. Enfin, cliquez sur **Créer une demande de tirage**.

## Gestion des commentaires

Les demandes de tirage sont un lieu de discussion. Dans cet exemple, Octocat est très occupé et ne va probablement pas fusionner vos modifications. Pour d’autres projets, n’en prenez pas ombrage si le propriétaire du projet rejette votre demande de tirage ou demande plus d’informations sur la raison pour laquelle vous l’avez effectuée. Il peut même s’avérer que le propriétaire du projet choisisse de ne pas fusionner votre demande de tirage, et c’est totalement acceptable. Vos modifications existent dans votre duplication. Et qui sait ? Peut-être que quelqu’un que vous n’avez jamais rencontré trouvera vos modifications beaucoup plus précieuses que le projet d’origine.

## Recherche de projets

Vous avez correctement dupliqué (fork) et contribué à un dépôt. Lancez-vous et contribuez encore !{% ifversion fpt %} Pour plus d’informations, consultez « [Trouver des moyens de contribuer à l’open source sur GitHub](/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github) ».{% endif %}
