---
title: Импорт данных из сторонних систем управления версиями
intro: 'С помощью набора средств git-import можно импортировать данные из Subversion, Mercurial и системы управления версиями Team Foundation в репозитории Git на {% data variables.product.prodname_ghe_server %}.'
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
ms.openlocfilehash: a3a75779674330bdfddc4b22ba08639c9cc41290
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148008852'
---
## Импорт проектов из Mercurial

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Создайте необработанный клон проекта с помощью приведенной ниже команды, указав URL-адрес исходного проекта и путь к временному репозиторию:
  ```shell
  $ git-import-hg-raw HG-CLONE-URL/PATH/REPO-NAME.git
  # Creates a new repository with one or more Git refs in "refs/import/" in the specified path.
  ```
{% data reusables.enterprise_migrations.review-the-import-csv %}
4. Перезапись авторов и ветвей с помощью CSV-файла:
  ```shell
  $ git-import-rewrite --flavor hg --authors /PATH/AUTHORS-MAP-FILE.csv /PATH/REPO-NAME.git
  ```
5. [Создайте пустой репозиторий для {% data variables.product.prodname_ghe_server %}](/enterprise/user/articles/creating-a-new-repository), если он еще не создан.
{% data reusables.command_line.switching_directories_procedural %}
7. Передайте импортированный репозиторий в {% data variables.product.prodname_ghe_server %}:
  ```shell
  $ git push --mirror PUSH-URL-ON-GITHUB-ENTERPRISE
  ```

## Импорт проектов из Subversion

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Создайте необработанный клон проекта с помощью приведенной ниже команды, указав URL-адрес исходного проекта и путь к временному репозиторию:
  ```shell
  $ git-import-svn-raw SVN-CLONE-URL /PATH/REPO-NAME.git
  # Creates a new repository with one or more Git refs in "refs/import/" in the specified path.
  ```
{% data reusables.enterprise_migrations.review-the-import-csv %}
4. Перезапись авторов и ветвей с помощью CSV-файла:
  ```shell
  $ git-import-rewrite --flavor svn --authors /PATH/AUTHORS-MAP-FILE.csv /PATH/REPO-NAME.git
  ```
5. [Создайте пустой репозиторий для {% data variables.product.prodname_ghe_server %}](/enterprise/user/articles/creating-a-new-repository), если он еще не создан.
{% data reusables.command_line.switching_directories_procedural %}
7. Передайте импортированный репозиторий в {% data variables.product.prodname_ghe_server %}:
  ```shell
  $ git push --mirror PUSH-URL-ON-GITHUB-ENTERPRISE
  ```

## Импорт проектов из системы управления версиями Team Foundation

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Создайте необработанный клон проекта с помощью приведенной ниже команды, указав URL-адрес исходного проекта и путь к временному репозиторию:
  ```shell
  $ git-import-tfs-raw TEAM-FOUNDATION-CLONE-URL /PATH/REPO-NAME.git
  # Creates a new repository with one or more Git refs in "refs/import/" in the specified path.
  ```
{% data reusables.enterprise_migrations.review-the-import-csv %}
4. Перезапись авторов и ветвей с помощью CSV-файла:
  ```shell
  $ git-import-rewrite --flavor tfs --authors /PATH/AUTHORS-MAP-FILE.csv /PATH/REPO_NAME.git
  ```
5. [Создайте пустой репозиторий для {% data variables.product.prodname_ghe_server %}](/enterprise/user/articles/creating-a-new-repository), если он еще не создан.
{% data reusables.command_line.switching_directories_procedural %}
7. Передайте импортированный репозиторий в {% data variables.product.prodname_ghe_server %}:
  ```shell
  $ git push --mirror PUSH-URL-ON-GITHUB-ENTERPRISE
  ```

## Дополнительные материалы

- [Служебные программы командной строки](/enterprise/admin/guides/installation/command-line-utilities/#import-and-export)
