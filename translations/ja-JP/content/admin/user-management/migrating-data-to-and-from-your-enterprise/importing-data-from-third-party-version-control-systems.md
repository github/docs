---
title: サードパーティのバージョン コントロール システムからのデータのインポート
intro: 'git-import スイートのツールを使用すると、Subversion、Mercurial、Team Foundation Version Control から {% data variables.product.prodname_ghe_server %} 上の Git リポジトリにインポートできます。'
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
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '146332009'
---
## Mercurialからのプロジェクトのインポート

{% data reusables.enterprise_installation.ssh-into-instance %}
2. ソースプロジェクトのURLと一時リポジトリへのパスを指定して、以下のコマンドを使ってプロジェクトの生のクローンを作成してください。
  ```shell
  $ git-import-hg-raw <em>HG-CLONE-URL</em> /<em>PATH</em>/<em>REPO-NAME</em>.git
  # Creates a new repository with one or more Git refs in "refs/import/" in the specified path.
  ```
{% data reusables.enterprise_migrations.review-the-import-csv %}
4. CSV ファイルを使って作者とブランチを書き直します:
  ```shell
  $ git-import-rewrite --flavor hg --authors /<em>PATH</em>/<em>AUTHORS-MAP-FILE</em>.csv /<em>PATH</em>/<em>REPO-NAME</em>.git
  ```
5. [{% data variables.product.prodname_ghe_server %} に新しい空のリポジトリを作成します](/enterprise/user/articles/creating-a-new-repository) (まだ作成していない場合)。
{% data reusables.command_line.switching_directories_procedural %}
7. インポートされたリポジトリを {% data variables.product.prodname_ghe_server %} にプッシュします。
  ```shell
  $ git push --mirror <em>PUSH-URL-ON-GITHUB-ENTERPRISE</em>
  ```

## SubVersionからのプロジェクトのインポート

{% data reusables.enterprise_installation.ssh-into-instance %}
2. ソースプロジェクトのURLと一時リポジトリへのパスを指定して、以下のコマンドを使ってプロジェクトの生のクローンを作成してください。
  ```shell
  $ git-import-svn-raw <em>SVN-CLONE-URL</em> /<em>PATH</em>/<em>REPO-NAME</em>.git
  # Creates a new repository with one or more Git refs in "refs/import/" in the specified path.
  ```
{% data reusables.enterprise_migrations.review-the-import-csv %}
4. CSV ファイルを使って作者とブランチを書き直します:
  ```shell
  $ git-import-rewrite --flavor svn --authors /<em>PATH</em>/<em>AUTHORS-MAP-FILE</em>.csv /<em>PATH</em>/<em>REPO-NAME</em>.git
  ```
5. [{% data variables.product.prodname_ghe_server %} に新しい空のリポジトリを作成します](/enterprise/user/articles/creating-a-new-repository) (まだ作成していない場合)。
{% data reusables.command_line.switching_directories_procedural %}
7. インポートされたリポジトリを {% data variables.product.prodname_ghe_server %} にプッシュします。
  ```shell
  $ git push --mirror <em>PUSH-URL-ON-GITHUB-ENTERPRISE</em>
  ```

## Team Foundation Version Controlからのプロジェクトのインポート

{% data reusables.enterprise_installation.ssh-into-instance %}
2. ソースプロジェクトのURLと一時リポジトリへのパスを指定して、以下のコマンドを使ってプロジェクトの生のクローンを作成してください。
  ```shell
  $ git-import-tfs-raw <em>TEAM-FOUNDATION-CLONE-URL</em> /<em>PATH</em>/<em>REPO-NAME</em>.git
  # Creates a new repository with one or more Git refs in "refs/import/" in the specified path.
  ```
{% data reusables.enterprise_migrations.review-the-import-csv %}
4. CSV ファイルを使って作者とブランチを書き直します:
  ```shell
  $ git-import-rewrite --flavor tfs --authors /<em>PATH</em>/<em>AUTHORS-MAP-FILE</em>.csv /<em>PATH</em>/<em>REPO-NAME</em>.git
  ```
5. [{% data variables.product.prodname_ghe_server %} に新しい空のリポジトリを作成します](/enterprise/user/articles/creating-a-new-repository) (まだ作成していない場合)。
{% data reusables.command_line.switching_directories_procedural %}
7. インポートされたリポジトリを {% data variables.product.prodname_ghe_server %} にプッシュします。
  ```shell
  $ git push --mirror <em>PUSH-URL-ON-GITHUB-ENTERPRISE</em>
  ```

## 参考資料

- 「[コマンド ライン ユーティリティ](/enterprise/admin/guides/installation/command-line-utilities/#import-and-export)」
