---
title: Daten aus Drittanbieter-Quellcodeverwaltungssystemen importieren
intro: 'Mit der Sammlung von git-import-Tools kannst du Elemente aus Subversion, Mercurial und der Team Foundation-Versionskontrolle in Git-Repositorys in {% data variables.product.prodname_ghe_server %} importieren.'
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
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332006'
---
## Projekte aus Mercurial importieren

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Erstelle einen Klon im Rohdatenformat des Projekts. Führe dazu den folgenden Befehl aus. Gib dazu die URL des Quellprojekts und einen Pfad zum temporären Repository an:
  ```shell
  $ git-import-hg-raw <em>HG-CLONE-URL</em> /<em>PATH</em>/<em>REPO-NAME</em>.git
  # Creates a new repository with one or more Git refs in "refs/import/" in the specified path.
  ```
{% data reusables.enterprise_migrations.review-the-import-csv %}
4. Schreibt die Autoren und Branches mit der CSV-Datei um:
  ```shell
  $ git-import-rewrite --flavor hg --authors /<em>PATH</em>/<em>AUTHORS-MAP-FILE</em>.csv /<em>PATH</em>/<em>REPO-NAME</em>.git
  ```
5. Wenn dies noch nicht erfolgt ist, [erstelle ein neues leeres Repository auf {% data variables.product.prodname_ghe_server %}](/enterprise/user/articles/creating-a-new-repository).
{% data reusables.command_line.switching_directories_procedural %}
7. Übertrage das importierte Repository per Push-Vorgang an {% data variables.product.prodname_ghe_server %}:
  ```shell
  $ git push --mirror <em>PUSH-URL-ON-GITHUB-ENTERPRISE</em>
  ```

## Projekte aus Subversion importieren

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Erstelle einen Klon im Rohdatenformat des Projekts. Führe dazu den folgenden Befehl aus. Gib dazu die URL des Quellprojekts und einen Pfad zum temporären Repository an:
  ```shell
  $ git-import-svn-raw <em>SVN-CLONE-URL</em> /<em>PATH</em>/<em>REPO-NAME</em>.git
  # Creates a new repository with one or more Git refs in "refs/import/" in the specified path.
  ```
{% data reusables.enterprise_migrations.review-the-import-csv %}
4. Schreibt die Autoren und Branches mit der CSV-Datei um:
  ```shell
  $ git-import-rewrite --flavor svn --authors /<em>PATH</em>/<em>AUTHORS-MAP-FILE</em>.csv /<em>PATH</em>/<em>REPO-NAME</em>.git
  ```
5. Wenn dies noch nicht erfolgt ist, [erstelle ein neues leeres Repository auf {% data variables.product.prodname_ghe_server %}](/enterprise/user/articles/creating-a-new-repository).
{% data reusables.command_line.switching_directories_procedural %}
7. Übertrage das importierte Repository per Push-Vorgang an {% data variables.product.prodname_ghe_server %}:
  ```shell
  $ git push --mirror <em>PUSH-URL-ON-GITHUB-ENTERPRISE</em>
  ```

## Projekte aus der Team Foundation-Versionskontrolle importieren

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Erstelle einen Klon im Rohdatenformat des Projekts. Führe dazu den folgenden Befehl aus. Gib dazu die URL des Quellprojekts und einen Pfad zum temporären Repository an:
  ```shell
  $ git-import-tfs-raw <em>TEAM-FOUNDATION-CLONE-URL</em> /<em>PATH</em>/<em>REPO-NAME</em>.git
  # Creates a new repository with one or more Git refs in "refs/import/" in the specified path.
  ```
{% data reusables.enterprise_migrations.review-the-import-csv %}
4. Schreibt die Autoren und Branches mit der CSV-Datei um:
  ```shell
  $ git-import-rewrite --flavor tfs --authors /<em>PATH</em>/<em>AUTHORS-MAP-FILE</em>.csv /<em>PATH</em>/<em>REPO-NAME</em>.git
  ```
5. Wenn dies noch nicht erfolgt ist, [erstelle ein neues leeres Repository auf {% data variables.product.prodname_ghe_server %}](/enterprise/user/articles/creating-a-new-repository).
{% data reusables.command_line.switching_directories_procedural %}
7. Übertrage das importierte Repository per Push-Vorgang an {% data variables.product.prodname_ghe_server %}:
  ```shell
  $ git push --mirror <em>PUSH-URL-ON-GITHUB-ENTERPRISE</em>
  ```

## Weiterführende Themen

- [Befehlszeilenprogramme](/enterprise/admin/guides/installation/command-line-utilities/#import-and-export)
