---
title: 타사 버전 제어 시스템에서 데이터 가져오기
intro: 'git-import 도구 모음을 사용하여 Subversion, Mercurial, Team Foundation 버전 제어를 {% data variables.product.prodname_ghe_server %}의 Git 리포지토리로 가져올 수 있습니다.'
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
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148008851'
---
## Mercurial에서 프로젝트 가져오기

{% data reusables.enterprise_installation.ssh-into-instance %}
2. 아래 명령으로 원시 복제본을 만들어 원본 프로젝트의 URL 및 임시 리포지토리에 대한 경로를 지정합니다.
  ```shell
  $ git-import-hg-raw HG-CLONE-URL/PATH/REPO-NAME.git
  # Creates a new repository with one or more Git refs in "refs/import/" in the specified path.
  ```
{% data reusables.enterprise_migrations.review-the-import-csv %}
4. CSV 파일을 사용하여 작성자 및 분기를 다시 작성합니다.
  ```shell
  $ git-import-rewrite --flavor hg --authors /PATH/AUTHORS-MAP-FILE.csv /PATH/REPO-NAME.git
  ```
5. 아직 만들지 않은 경우 [{% data variables.product.prodname_ghe_server %}에 새로운 빈 리포지토리를 만듭니다](/enterprise/user/articles/creating-a-new-repository).
{% data reusables.command_line.switching_directories_procedural %}
7. 가져온 리포지토리를 {% data variables.product.prodname_ghe_server %}에 푸시합니다.
  ```shell
  $ git push --mirror PUSH-URL-ON-GITHUB-ENTERPRISE
  ```

## Subversion에서 프로젝트 가져오기

{% data reusables.enterprise_installation.ssh-into-instance %}
2. 아래 명령으로 원시 복제본을 만들어 원본 프로젝트의 URL 및 임시 리포지토리에 대한 경로를 지정합니다.
  ```shell
  $ git-import-svn-raw SVN-CLONE-URL /PATH/REPO-NAME.git
  # Creates a new repository with one or more Git refs in "refs/import/" in the specified path.
  ```
{% data reusables.enterprise_migrations.review-the-import-csv %}
4. CSV 파일을 사용하여 작성자 및 분기를 다시 작성합니다.
  ```shell
  $ git-import-rewrite --flavor svn --authors /PATH/AUTHORS-MAP-FILE.csv /PATH/REPO-NAME.git
  ```
5. 아직 만들지 않은 경우 [{% data variables.product.prodname_ghe_server %}에 새로운 빈 리포지토리를 만듭니다](/enterprise/user/articles/creating-a-new-repository).
{% data reusables.command_line.switching_directories_procedural %}
7. 가져온 리포지토리를 {% data variables.product.prodname_ghe_server %}에 푸시합니다.
  ```shell
  $ git push --mirror PUSH-URL-ON-GITHUB-ENTERPRISE
  ```

## Team Foundation 버전 제어에서 프로젝트 가져오기

{% data reusables.enterprise_installation.ssh-into-instance %}
2. 아래 명령으로 원시 복제본을 만들어 원본 프로젝트의 URL 및 임시 리포지토리에 대한 경로를 지정합니다.
  ```shell
  $ git-import-tfs-raw TEAM-FOUNDATION-CLONE-URL /PATH/REPO-NAME.git
  # Creates a new repository with one or more Git refs in "refs/import/" in the specified path.
  ```
{% data reusables.enterprise_migrations.review-the-import-csv %}
4. CSV 파일을 사용하여 작성자 및 분기를 다시 작성합니다.
  ```shell
  $ git-import-rewrite --flavor tfs --authors /PATH/AUTHORS-MAP-FILE.csv /PATH/REPO_NAME.git
  ```
5. 아직 만들지 않은 경우 [{% data variables.product.prodname_ghe_server %}에 새로운 빈 리포지토리를 만듭니다](/enterprise/user/articles/creating-a-new-repository).
{% data reusables.command_line.switching_directories_procedural %}
7. 가져온 리포지토리를 {% data variables.product.prodname_ghe_server %}에 푸시합니다.
  ```shell
  $ git push --mirror PUSH-URL-ON-GITHUB-ENTERPRISE
  ```

## 추가 참고 자료

- “[명령줄 유틸리티](/enterprise/admin/guides/installation/command-line-utilities/#import-and-export)”
