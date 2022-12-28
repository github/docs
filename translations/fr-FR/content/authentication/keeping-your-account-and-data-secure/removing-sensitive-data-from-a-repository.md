---
title: Suppression de données sensibles dans un dépôt
intro: 'Si vous commitez des données sensibles, telles qu’un mot de passe ou une clé SSH dans un dépôt Git, vous pouvez les supprimer de l’historique. Pour supprimer entièrement les fichiers indésirables de l’historique d’un dépôt, vous pouvez utiliser l’outil `git filter-repo` ou l’outil open source BFG Repo-Cleaner.'
redirect_from:
  - /remove-sensitive-data
  - /removing-sensitive-data
  - /articles/remove-sensitive-data
  - /articles/removing-sensitive-data-from-a-repository
  - /github/authenticating-to-github/removing-sensitive-data-from-a-repository
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Remove sensitive data
ms.openlocfilehash: 4c93f372f1d537fd94f06e66986e53d6641923d2
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145086029'
---
L’outil `git filter-repo` et BFG Repo-Cleaner réécrivent l’historique de votre dépôt, ce qui change les SHA pour les commits existants que vous modifiez et tous les commits dépendants. Des SHA de commits modifiés peuvent affecter les demandes de tirage dans votre dépôt. Nous vous recommandons de fusionner ou de fermer toutes les demandes de tirage ouvertes avant de supprimer des fichiers de votre dépôt.

Vous pouvez supprimer le fichier du commit le plus récent avec `git rm`. Pour obtenir des informations sur la suppression d’un fichier ajouté avec le commit le plus récent, consultez « [À propos des grands fichiers sur {% data variables.product.prodname_dotcom %}](/repositories/working-with-files/managing-large-files/about-large-files-on-github#removing-files-from-a-repositorys-history) ».

{% warning %}

**Avertissement** : Cet article vous explique comment effectuer des commits avec des données sensibles inaccessibles aux branches ou étiquettes dans votre dépôt sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}. Toutefois, ces commits peuvent rester accessibles dans les clones ou les duplications (fork) de votre dépôt, directement par le biais de leurs hachages SHA-1 dans les vues en cache sur {% data variables.product.product_name %} et par le biais de toute demande de tirage (pull request) qui les référence. Vous ne pouvez pas supprimer les données sensibles de clones ou duplications d’autres utilisateurs de votre dépôt, mais vous pouvez supprimer définitivement les vues en cache et les références aux données sensibles dans les demandes de tirage sur {% data variables.product.product_name %} en contactant le {% data variables.contact.contact_support %}. 

**Quand vous poussez (push) un commit sur {% data variables.product.product_name %}, vous devez considérer toutes les données sensibles figurant dans le commit comme compromises.** Si vous avez commité un mot de passe, modifiez-le. Si vous avez commité une clé, générez-en une autre. La suppression des données compromises ne résout pas leur exposition initiale, en particulier dans les clones ou duplications existants de votre dépôt. Tenez compte de ces limitations quand vous décidez de réécrire l’historique de votre dépôt.

{% endwarning %}

## Supprimer définitivement un fichier de l’historique de votre dépôt

Vous pouvez supprimer définitivement un fichier de l’historique de votre dépôt à l’aide de l’outil `git filter-repo` ou de l’outil open source BFG Repo-Cleaner.

### Utilisation de BFG

[BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/) est un outil conçu et géré par la communauté open source. Il offre une alternative plus rapide et plus simple à `git filter-branch` pour la suppression de données indésirables. 

Par exemple, pour supprimer votre fichier contenant des données sensibles et laisser intact le dernier commit, exécutez :

```shell
$ bfg --delete-files <em>YOUR-FILE-WITH-SENSITIVE-DATA</em>
```

Pour remplacer tout le texte listé dans `passwords.txt` où qu’il se trouve dans l’historique de votre dépôt, exécutez :

```shell
$ bfg --replace-text passwords.txt
```

Après la suppression des données sensibles, vous devez forcer la poussée de vos modifications sur {% data variables.product.product_name %}. La poussée forcée réécrit l’historique du dépôt, ce qui supprime les données sensibles de l’historique des commits. Si vous forcez la poussée, les commits sur lesquelles d’autres personnes ont basé leur travail peuvent être remplacés.

```shell
$ git push --force
```

Pour obtenir des instructions complètes d’utilisation et de téléchargement, consultez la documentation de [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/).

### Utilisation de git filter-repo

{% warning %}

**Avertissement :** Si vous exécutez `git filter-repo` après avoir remisé (stash) des modifications, vous ne pourrez pas récupérer vos modifications avec d’autres commandes stash. Avant d’exécuter `git filter-repo`, nous vous recommandons de déremiser les modifications que vous avez apportées. Pour déremiser le dernier ensemble de modifications que vous avez remisées, exécutez `git stash show -p | git apply -R`. Pour plus d’informations, consultez [Git Tools - Stashing and Cleaning](https://git-scm.com/book/en/v2/Git-Tools-Stashing-and-Cleaning) (Outils Git - remiser et nettoyer).

{% endwarning %}

Pour illustrer le fonctionnement de `git filter-repo`, nous allons vous montrer comment supprimer votre fichier contenant des données sensibles de l’historique de votre dépôt et comment l’ajouter à `.gitignore` pour garantir qu’il n’est pas recommité accidentellement.

1. Installez la dernière version de l’outil [git filter-repo](https://github.com/newren/git-filter-repo). Vous pouvez installer `git-filter-repo` manuellement ou en utilisant un gestionnaire de package. Par exemple, pour installer l’outil avec HomeBrew, utilisez la commande `brew install`.
  ```
  brew install git-filter-repo
  ```
  Pour plus d’informations, consultez [*INSTALL.md*](https://github.com/newren/git-filter-repo/blob/main/INSTALL.md) dans le dépôt `newren/git-filter-repo`.

2. Si vous ne disposez pas déjà d’une copie locale de votre dépôt avec des données sensibles dans son historique, [clonez le dépôt](/articles/cloning-a-repository/) sur votre ordinateur local.
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>YOUR-USERNAME</em>/<em>YOUR-REPOSITORY</em>
  > Initialized empty Git repository in /Users/<em>YOUR-FILE-PATH</em>/<em>YOUR-REPOSITORY</em>/.git/
  > remote: Counting objects: 1301, done.
  > remote: Compressing objects: 100% (769/769), done.
  > remote: Total 1301 (delta 724), reused 910 (delta 522)
  > Receiving objects: 100% (1301/1301), 164.39 KiB, done.
  > Resolving deltas: 100% (724/724), done.
  ```
3. Accédez au répertoire de travail du dépôt.
  ```shell
  $ cd <em>YOUR-REPOSITORY</em>
  ```
4. Exécutez la commande suivante en remplaçant `PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA` par le **chemin du fichier que vous voulez supprimer, et pas seulement par son nom de fichier**. Ces arguments vont :
    - Forcer Git à traiter, mais pas à extraire, l’historique complet de chaque branche et chaque étiquette
    - Supprimer le fichier spécifié ainsi que tous les commits générés en tant que résultat
    - Supprimer certaines configurations comme l’URL distante, stockées dans le fichier *.git/config* Vous pouvez sauvegarder ce fichier avant pour le restaurer ultérieurement.
    - **Remplacer vos étiquettes existantes**
        ```shell
        $ git filter-repo --invert-paths --path PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA
        Parsed 197 commits
        New history written in 0.11 seconds; now repacking/cleaning...
        Repacking your repo and cleaning out old unneeded objects
        Enumerating objects: 210, done.
        Counting objects: 100% (210/210), done.
        Delta compression using up to 12 threads
        Compressing objects: 100% (127/127), done.
        Writing objects: 100% (210/210), done.
        Building bitmaps: 100% (48/48), done.
        Total 210 (delta 98), reused 144 (delta 75), pack-reused 0
        Completely finished after 0.64 seconds.
        ```

  {% note %}

  **Remarque** : Si le fichier avec des données sensibles existait dans d’autres chemins (et a été déplacé ou renommé), vous devez également exécuter cette commande sur ces chemins.

  {% endnote %}

5. Ajoutez votre fichier avec des données sensibles à `.gitignore` pour garantir que vous ne le recommitez pas accidentellement.

  ```shell
  $ echo "<em>YOUR-FILE-WITH-SENSITIVE-DATA</em>" >> .gitignore
  $ git add .gitignore
  $ git commit -m "Add <em>YOUR-FILE-WITH-SENSITIVE-DATA</em> to .gitignore"
  > [main 051452f] Add <em>YOUR-FILE-WITH-SENSITIVE-DATA</em> to .gitignore
  >  1 files changed, 1 insertions(+), 0 deletions(-)
  ```
6. Vérifiez bien que vous avez supprimé tout ce que vous vouliez de l’historique de votre dépôt et que toutes vos branches sont extraites.
7. Quand vous êtes satisfait de l’état de votre dépôt, forcez la poussée des modifications locales pour remplacer votre dépôt sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} ainsi que toutes les branches que vous avez poussées. Une poussée forcée est nécessaire pour supprimer les données sensibles de votre historique des commits.
  ```shell
  $ git push origin --force --all
  > Counting objects: 1074, done.
  > Delta compression using 2 threads.
  > Compressing objects: 100% (677/677), done.
  > Writing objects: 100% (1058/1058), 148.85 KiB, done.
  > Total 1058 (delta 590), reused 602 (delta 378)
  > To https://{% data variables.command_line.codeblock %}/<em>YOUR-USERNAME</em>/<em>YOUR-REPOSITORY</em>.git
  >  + 48dc599...051452f main -> main (forced update)
  ```
8. Pour supprimer le fichier sensible de [vos versions étiquetées](/articles/about-releases), vous devez également effectuer un envoi (push) forcé sur vos étiquettes Git :
  ```shell
  $ git push origin --force --tags
  > Counting objects: 321, done.
  > Delta compression using up to 8 threads.
  > Compressing objects: 100% (166/166), done.
  > Writing objects: 100% (321/321), 331.74 KiB | 0 bytes/s, done.
  > Total 321 (delta 124), reused 269 (delta 108)
  > To https://{% data variables.command_line.codeblock %}/<em>YOUR-USERNAME</em>/<em>YOUR-REPOSITORY</em>.git
  >  + 48dc599...051452f main -> main (forced update)
  ```

## Suppression complète des données de {% data variables.product.prodname_dotcom %}

Après avoir utilisé l’outil BFG ou `git filter-repo` pour supprimer les données sensibles et poussé vos modifications sur {% data variables.product.product_name %}, vous devez effectuer quelques étapes supplémentaires pour supprimer entièrement les données de {% data variables.product.product_name %}.

1. Contactez le {% data variables.contact.contact_support %} et demandez-leur de supprimer les vues en cache et les références aux données sensibles dans les demandes de tirage sur {% data variables.product.product_name %}. Indiquez le nom du dépôt et/ou un lien vers le commit que vous devez supprimer.{% ifversion ghes %} Pour plus d’informations sur la façon dont les administrateurs de site peuvent supprimer des objets Git inaccessibles, consultez « [Utilitaires de ligne de commande](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-repo-gc) ».{% endif %}

2. Dites à vos collaborateurs de [rebaser](https://git-scm.com/book/en/Git-Branching-Rebasing) et *non* de fusionner les branches qu’ils ont créées à partir de l’ancien historique de votre dépôt (compromis). Un commit de fusion pourrait réintroduire une partie ou l’ensemble de l’histoire compromis que vous vous êtes donné la peine de supprimer.

3. Au bout d’un certain temps, quand vous avez la certitude que l’outil BFG ou `git filter-repo` n’a pas eu d’effet secondaire inattendu, vous pouvez forcer le déréférencement et le nettoyage de tous les objets de votre dépôt local avec les commandes suivantes (à l’aide de Git 1.8.5 ou d’une version ultérieure) :
  ```shell
  $ git for-each-ref --format="delete %(refname)" refs/original | git update-ref --stdin
  $ git reflog expire --expire=now --all
  $ git gc --prune=now
  > Counting objects: 2437, done.
  > Delta compression using up to 4 threads.
  > Compressing objects: 100% (1378/1378), done.
  > Writing objects: 100% (2437/2437), done.
  > Total 2437 (delta 1461), reused 1802 (delta 1048)
  ```
  {% note %}

   **Remarque :** Pour cela, vous pouvez également pousser votre historique filtré sur un dépôt nouveau ou vide, puis générer un nouveau clone à partir de {% data variables.product.product_name %}.

  {% endnote %}

## Éviter les commits accidentels à l’avenir

Vous pouvez éviter les commits accidentels en suivant quelques astuces simples :

- Utilisez un programme visuel comme [{% data variables.product.prodname_desktop %}](https://desktop.github.com/) ou [gitk](https://git-scm.com/docs/gitk) pour commiter les modifications. Généralement, les programmes visuels permettent de voir plus facilement les fichiers exacts qui seront ajoutés, supprimés et modifiés avec chaque commit.
- Évitez les commandes génériques `git add .` et `git commit -a` dans la ligne de commande : utilisez plutôt `git add filename` et `git rm filename` pour indexer les fichiers individuellement.
- Utilisez `git add --interactive` pour vérifier et indexer les modifications dans chaque fichier.
- Utilisez `git diff --cached` pour vérifier les modifications que vous avez indexées pour le commit. Il s’agit de la différence exacte que `git commit` produira tant que vous n’utilisez pas l’indicateur `-a`.

## Pour aller plus loin

- [Page man `git filter-repo`](https://htmlpreview.github.io/?https://github.com/newren/git-filter-repo/blob/docs/html/git-filter-repo.html)
- [Pro Git : Git Tools - Rewriting History](https://git-scm.com/book/en/Git-Tools-Rewriting-History) (Outils Git - Réécriture de l’historique)
- « [À propos de l’analyse des secrets](/code-security/secret-security/about-secret-scanning) »
