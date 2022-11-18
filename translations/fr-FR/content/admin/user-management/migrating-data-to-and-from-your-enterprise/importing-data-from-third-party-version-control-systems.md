---
title: Importation de données à partir de systèmes de gestion de versions tiers
intro: 'À l’aide de la suite d’outils git-import, vous pouvez importer à partir de Subversion, Mercurial et Team Foundation Version Control dans des référentiels Git sur {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/migrations/importing-data-from-third-party-version-control-systems
  - /enterprise/admin/user-management/importing-data-from-third-party-version-control-systems
  - /admin/user-management/importing-data-from-third-party-version-control-systems
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Migration
shortTitle: Import from another VCS
ms.openlocfilehash: 2647bf8eb0a08e4188d36ddc8bd7057ee1e2f208
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '146332003'
---
## Importation de projets à partir de Mercurial

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Créez un clone brut du projet à l’aide de la commande ci-dessous, en spécifiant l’URL du projet source et un chemin d’accès à un référentiel temporaire :
  ```shell
  $ git-import-hg-raw <em>HG-CLONE-URL</em> /<em>PATH</em>/<em>REPO-NAME</em>.git
  # Creates a new repository with one or more Git refs in "refs/import/" in the specified path.
  ```
{% data reusables.enterprise_migrations.review-the-import-csv %}
4. Réécrivez les auteurs et les branches à l’aide du fichier CSV :
  ```shell
  $ git-import-rewrite --flavor hg --authors /<em>PATH</em>/<em>AUTHORS-MAP-FILE</em>.csv /<em>PATH</em>/<em>REPO-NAME</em>.git
  ```
5. Si vous ne l’avez pas encore fait, [créez un référentiel vide sur {% data variables.product.prodname_ghe_server %}](/enterprise/user/articles/creating-a-new-repository).
{% data reusables.command_line.switching_directories_procedural %}
7. Envoyez le référentiel importé vers {% data variables.product.prodname_ghe_server %} :
  ```shell
  $ git push --mirror <em>PUSH-URL-ON-GITHUB-ENTERPRISE</em>
  ```

## Importation de projets à partir de Subversion

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Créez un clone brut du projet à l’aide de la commande ci-dessous, en spécifiant l’URL du projet source et un chemin d’accès à un référentiel temporaire :
  ```shell
  $ git-import-svn-raw <em>SVN-CLONE-URL</em> /<em>PATH</em>/<em>REPO-NAME</em>.git
  # Creates a new repository with one or more Git refs in "refs/import/" in the specified path.
  ```
{% data reusables.enterprise_migrations.review-the-import-csv %}
4. Réécrivez les auteurs et les branches à l’aide du fichier CSV :
  ```shell
  $ git-import-rewrite --flavor svn --authors /<em>PATH</em>/<em>AUTHORS-MAP-FILE</em>.csv /<em>PATH</em>/<em>REPO-NAME</em>.git
  ```
5. Si vous ne l’avez pas encore fait, [créez un référentiel vide sur {% data variables.product.prodname_ghe_server %}](/enterprise/user/articles/creating-a-new-repository).
{% data reusables.command_line.switching_directories_procedural %}
7. Envoyez le référentiel importé vers {% data variables.product.prodname_ghe_server %} :
  ```shell
  $ git push --mirror <em>PUSH-URL-ON-GITHUB-ENTERPRISE</em>
  ```

## Importation de projets à partir de Team Foundation Version Control

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Créez un clone brut du projet à l’aide de la commande ci-dessous, en spécifiant l’URL du projet source et un chemin d’accès à un référentiel temporaire :
  ```shell
  $ git-import-tfs-raw <em>TEAM-FOUNDATION-CLONE-URL</em> /<em>PATH</em>/<em>REPO-NAME</em>.git
  # Creates a new repository with one or more Git refs in "refs/import/" in the specified path.
  ```
{% data reusables.enterprise_migrations.review-the-import-csv %}
4. Réécrivez les auteurs et les branches à l’aide du fichier CSV :
  ```shell
  $ git-import-rewrite --flavor tfs --authors /<em>PATH</em>/<em>AUTHORS-MAP-FILE</em>.csv /<em>PATH</em>/<em>REPO-NAME</em>.git
  ```
5. Si vous ne l’avez pas encore fait, [créez un référentiel vide sur {% data variables.product.prodname_ghe_server %}](/enterprise/user/articles/creating-a-new-repository).
{% data reusables.command_line.switching_directories_procedural %}
7. Envoyez le référentiel importé vers {% data variables.product.prodname_ghe_server %} :
  ```shell
  $ git push --mirror <em>PUSH-URL-ON-GITHUB-ENTERPRISE</em>
  ```

## Pour aller plus loin

- « [Utilitaires en ligne de commande](/enterprise/admin/guides/installation/command-line-utilities/#import-and-export) »
