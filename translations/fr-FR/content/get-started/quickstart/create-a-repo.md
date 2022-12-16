---
title: Créer un référentiel
redirect_from:
  - /create-a-repo
  - /articles/create-a-repo
  - /github/getting-started-with-github/create-a-repo
  - /github/getting-started-with-github/quickstart/create-a-repo
intro: 'Pour mettre votre projet sur {% data variables.product.prodname_dotcom %}, vous devez créer un dépôt pour qu’il y réside.'
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
ms.openlocfilehash: 66db99def4463929236197fdc4903f82bfc1cbe2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146682292'
---
## Créer un référentiel

{% ifversion fpt or ghec %}

Vous pouvez stocker un large éventail de projets dans des dépôts {% data variables.product.prodname_dotcom %}, notamment des projets open source. Avec des projets open source, vous pouvez partager du code pour créer de meilleurs logiciels plus fiables. Vous pouvez utiliser des dépôts pour collaborer avec d’autres personnes et suivre votre travail. Pour plus d’informations, consultez « [À propos des dépôts](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repositories) ». Pour en savoir plus sur les projets open source, visitez [OpenSource.org](https://opensource.org/about).

{% elsif ghes or ghae %}

Vous pouvez stocker un large éventail de projets dans des dépôts {% data variables.product.product_name %}, notamment des projets innersource. Avec l’innersource, vous pouvez partager du code pour créer de meilleurs logiciels plus faibles. Pour plus d’informations sur l’innersource, consultez le livre blanc de {% data variables.product.company_short %} intitulé « [An introduction to innersource](https://resources.github.com/whitepapers/introduction-to-innersource/) ».

{% endif %}

{% ifversion fpt or ghec %}

{% note %}

**Remarques :** 
- Vous pouvez créer des dépôts publics pour un projet open source. Quand vous créez votre dépôt public, veillez à inclure un [fichier de licence](https://choosealicense.com/) qui détermine la façon dont vous souhaitez que votre projet soit partagé avec d’autres personnes. {% data reusables.open-source.open-source-guide-repositories %} 
- {% data reusables.open-source.open-source-learning %} 
- Vous pouvez également ajouter des fichiers d’intégrité de la communauté à vos dépôts pour définir des instructions sur la façon de contribuer, de garder vos dépôts en sécurité et bien plus encore. Pour plus d’informations, consultez « [Création d’un fichier d’intégrité de la communauté par défaut](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file) ». 

{% endnote %}

{% endif %}

{% webui %}

{% data reusables.repositories.create_new %}
2. Tapez un nom abrégé et facile à retenir pour votre dépôt. Par exemple, « hello-world ».
  ![Champ pour entrer un nom de dépôt](/assets/images/help/repository/create-repository-name.png)
3. Ajoutez éventuellement une description pour votre dépôt. Par exemple, « Mon premier dépôt sur {% data variables.product.product_name %} ».
  ![Champ pour entrer une description de dépôt](/assets/images/help/repository/create-repository-desc.png) {% data reusables.repositories.choose-repo-visibility %} {% data reusables.repositories.initialize-with-readme %} {% data reusables.repositories.create-repo %}

Félicitations ! Vous avez réussi à créer votre premier dépôt, puis à l’initialiser avec un fichier *LISEZ-MOI*.

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

1. Dans la ligne de commande, accédez au répertoire dans lequel vous voulez créer un clone local de votre nouveau projet.
2. Pour créer un dépôt pour votre projet, utilisez la sous-commande `gh repo create`. À l’invite, sélectionnez **Créer un dépôt sur GitHub ex nihilo** et entrez le nom de votre nouveau projet. Si vous voulez que votre projet appartienne à une organisation plutôt qu’à votre compte personnel, spécifiez le nom de l’organisation et le nom du projet avec `organization-name/project-name`. 
3. Suivez les invites interactives. Pour cloner le dépôt localement, répondez oui quand vous êtes invité à cloner le répertoire du projet distant.  
4. Sinon, pour ignorer les invites, indiquez le nom du dépôt et un indicateur de visibilité (`--public`, `--private` ou `--internal`). Par exemple : `gh repo create project-name --public`. Pour cloner le dépôt localement, passez l’indicateur `--clone`.  Pour plus d’informations sur les arguments possibles, consultez le [manuel de GitHub CLI](https://cli.github.com/manual/gh_repo_create).

{% endcli %}

## Commiter votre première modification

{% webui %}

Un *[commit](/articles/github-glossary#commit)* s’apparente à un instantané de tous les fichiers inclus dans votre projet à un moment donné.

Quand vous avez créé votre dépôt, vous l’avez initialisé avec un fichier *LISEZ-MOI*. Les fichiers *LISEZ-MOI* sont parfaits pour décrire votre projet plus en détail ou pour ajouter des documents tels que des consignes d’installation ou d’utilisation de votre projet. Le contenu de votre fichier *LISEZ-MOI* apparaît automatiquement dans la page d’accueil de votre dépôt.

Nous allons commiter une modification apportée au fichier *LISEZ-MOI*.

1. Dans la liste de fichiers de votre dépôt, cliquez sur ***LISEZ-MOI.md***.
  ![Fichier LISEZ-MOI dans la liste de fichiers](/assets/images/help/repository/create-commit-open-readme.png)
2. Au-dessus du contenu du fichier, cliquez sur {% octicon "pencil" aria-label="The edit icon" %}.
3. Sous l’onglet **Modifier le fichier**, tapez quelques informations sur vous-même.
  ![Nouveau contenu dans le fichier](/assets/images/help/repository/edit-readme-light.png) {% data reusables.files.preview_change %}
5. Passez en revue les modifications apportées au fichier. Vous allez voir que le nouveau contenu est en vert.
  ![Affichage de l’aperçu du fichier](/assets/images/help/repository/create-commit-review.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

{% endwebui %}

{% cli %}

Maintenant que vous avez créé un projet, vous pouvez commencer à commiter des modifications.

Les fichiers *LISEZ-MOI* sont parfaits pour décrire votre projet plus en détail ou pour ajouter des documents tels que des consignes d’installation ou d’utilisation de votre projet. Le contenu de votre fichier *LISEZ-MOI* apparaît automatiquement dans la page d’accueil de votre dépôt. Suivez ces étapes pour ajouter un fichier *LISEZ-MOI*.

1. Dans la ligne de commande, accédez au répertoire racine de votre nouveau projet. (Ce répertoire a été créé lorsque vous avez exécuté la commande `gh repo create`.)
1. Créez un fichier *LISEZ-MOI* contenant quelques informations sur le projet.

    ```shell
    echo "info about this project" >> README.md
    ```

1. Entrez `git status`. Vous allez voir que vous avez un fichier `README.md` non suivi.

    ```shell
    $ git status

    Untracked files:
      (use "git add <file>..." to include in what will be committed)
      README.md

    nothing added to commit but untracked files present (use "git add" to track)
    ```

1. Indexez et commitez le fichier.

    ```shell
    git add README.md && git commit -m "Add README"
    ```

1. Poussez (push) les modifications vers votre branche.

    ```shell
    git push --set-upstream origin HEAD
    ```

{% endcli %}

## Étapes suivantes

Vous avez maintenant créé un dépôt, qui comprend un fichier *LISEZ-MOI*, puis créé votre premier commit sur {% data variables.product.product_location %}.

{% webui %}

* Vous pouvez maintenant cloner un dépôt {% data variables.product.prodname_dotcom %} pour créer une copie locale sur votre ordinateur. À partir de votre dépôt local, vous pouvez commiter des modifications, puis créer une demande de tirage afin de les mettre à jour dans le dépôt en amont. Pour plus d’informations, consultez « [Clonage d’un dépôt](/github/creating-cloning-and-archiving-repositories/cloning-a-repository) » et « [Configurer Git](/articles/set-up-git) ».

{% endwebui %}

* Vous pouvez trouver des projets et des dépôts intéressants sur {% data variables.product.prodname_dotcom %} et leur apporter des modifications en créant une duplication (fork) de dépôt. {% data reusables.getting-started.fork-a-repository %}

* {% data reusables.getting-started.being-social %}

* {% data reusables.support.connect-in-the-forum-bootcamp %}
