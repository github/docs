---
title: Commit de changements sur une branche de demande de tirage créée à partir d’une duplication
intro: Vous pouvez commiter des changements sur une branche de demande de tirage (pull request) qui a été créée à partir d’une duplication (fork) de votre dépôt avec l’autorisation du créateur de la demande de tirage.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork
  - /articles/committing-changes-to-a-pull-request-branch-created-from-a-fork
  - /github/collaborating-with-issues-and-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Commit to PR branch from fork
ms.openlocfilehash: 123775ecbcc199382fe2082f22ad04db21fb9661
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145132979'
---
Vous pouvez uniquement effectuer des commits sur les branches de demande de tirage qui :
- sont ouvertes dans un dépôt sur lequel vous avez le droit de pousser et qui ont été créées à partir d’une duplication de ce dépôt
- se trouvent dans une duplication appartenant à l’utilisateur
- ont une autorisation accordée par le créateur de la demande de tirage
- n’ont pas de [restrictions de branche](/github/administering-a-repository/about-protected-branches#restrict-who-can-push-to-matching-branches) qui vous empêchent de commiter

Seul l’utilisateur qui a créé la demande de tirage peut vous donner l’autorisation de pousser des commits sur la duplication qui lui appartient. Pour plus d’informations, consultez « [Autorisation de changements sur une branche de demande de tirage créée à partir d’une duplication](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork) ».

{% note %}

**Remarque :** Vous pouvez également effectuer des commits dans une branche de demande de tirage d’une duplication de votre dépôt à travers {% data variables.product.product_location %} en créant votre propre copie (ou duplication) de la duplication de votre dépôt et en commitant les changements sur la même branche principale que celle sur laquelle les changements de demande de tirage d’origine ont été créés. Pour obtenir des instructions générales, consultez « [Création d’une demande de tirage à partir d’une duplication](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) ».

{% endnote %}

1. Sur {% data variables.product.product_name %}, accédez à la page principale de la duplication (ou de la copie de votre dépôt) où a été créée la branche de demande de tirage.
{% data reusables.repositories.copy-clone-url %} {% data reusables.command_line.open_the_multi_os_terminal %} {% tip %}

 **Astuce :** Si vous préférez cloner la duplication en utilisant {% data variables.product.prodname_desktop %}, consultez « [Clonage d’un dépôt sur {% data variables.product.prodname_desktop %}](/articles/cloning-a-repository/#cloning-a-repository-to-github-desktop) ».

 {% endtip %}
4. Remplacez le répertoire de travail actuel par l’emplacement où vous voulez télécharger le répertoire cloné.
  ```shell
  $ cd open-source-projects
  ```
5. Tapez `git clone`, puis collez l’URL que vous avez copiée à l’étape 3.
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>FORK-OF-THE-REPOSITORY</em>
  ```
6. Appuyez sur **Entrée**. Votre clone local va être créé.
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>FORK-OF-THE-REPOSITORY</em>
  > Cloning into `FORK-OF-THE-REPOSITORY`...
  > remote: Counting objects: 10, done.
  > remote: Compressing objects: 100% (8/8), done.
  > remove: Total 10 (delta 1), reused 10 (delta 1)
  > Unpacking objects: 100% (10/10), done.
  ```
 {% tip %}

 **Astuce :** Le message d’erreur « erreur irrécupérable : le chemin de destination « REPOSITORY-NAME » existe déjà et n’est pas un répertoire vide » signifie que votre répertoire de travail actuel contient déjà un dépôt du même nom. Pour résoudre l’erreur, vous devez cloner la duplication dans un autre répertoire.

 {% endtip %}
7. Accédez à votre nouveau dépôt cloné.
  ```shell
  $ cd <em>FORK-OF-THE-REPOSITORY</em>
  ```
7. Basculez les branches vers la branche de comparaison de la demande de tirage où les changements d’origine ont été faits. Si vous accédez à la demande de tirage d’origine, vous voyez la branche de comparaison en haut de la demande de tirage.
![compare-branch-example](/assets/images/help/pull_requests/compare-branch-example.png) Dans cet exemple, la branche de comparaison est `test-branch` :
  ```shell
  $ git checkout <em>test-branch</em>
  ```

 {% tip %}

 **Astuce :** Pour plus d’informations sur les branches de demande de tirage, y compris des exemples, consultez « [Création d’une demande de tirage](/articles/creating-a-pull-request#changing-the-branch-range-and-destination-repository) ».

 {% endtip %}
8. À ce stade, vous pouvez faire tout ce que vous voulez avec cette branche. Vous pouvez y pousser de nouveaux commits, exécuter des tests locaux ou fusionner d’autres branches dans la branche. Faites les changements de votre choix.
9. Une fois que vous avez commité vos changements dans la branche principale de la demande de tirage, vous pouvez les poussez directement dans la demande de tirage d’origine. Dans cet exemple, la branche principale est `test-branch` :
  ```shell
  $ git push origin <em>test-branch</em>
  > Counting objects: 32, done.
  > Delta compression using up to 8 threads.
  > Compressing objects: 100% (26/26), done.
  > Writing objects: 100% (29/29), 74.94 KiB | 0 bytes/s, done.
  > Total 29 (delta 8), reused 0 (delta 0)
  > To https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>FORK-OF-THE-REPOSITORY</em>.git
  > 12da2e9..250e946  <em>test-branch</em> -> <em>test-branch</em>
  ```

Vos nouveaux commits sont reflétés dans la demande de tirage d’origine sur {% data variables.product.product_location %}.

## En savoir plus

- « [À propos des duplications](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks) »
