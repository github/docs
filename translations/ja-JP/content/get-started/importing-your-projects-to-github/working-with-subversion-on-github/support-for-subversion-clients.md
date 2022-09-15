---
title: Subversion クライアントのサポート
intro: GitHub リポジトリは、Git および Subversion (SVN) クライアントの両方からアクセスできます。 この記事では、GitHub 上での Subversion の使用および経験する可能性のあるいくつかの主な問題を取り上げます。
redirect_from:
  - /articles/support-for-subversion-clients
  - /github/importing-your-projects-to-github/support-for-subversion-clients
  - /github/importing-your-projects-to-github/working-with-subversion-on-github/support-for-subversion-clients
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Support for Subversion clients
ms.openlocfilehash: 49422fbd5dd07b84975172f077091e92bcd5b543
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145131219'
---
GitHubは、HTTPS プロコトルを介して Subversion クライアントをサポートします。 GitHub に svn コマンドを伝えるには、Subversion ブリッジを使います。

## GitHub 上でサポートされる Subversion の機能

### チェックアウト

最初に Subversion チェックアウトを行いましょう。  Git クローンは、ワーキングディレクトリ (ファイルを編集する場所) をリポジトリデータと分けたままにします。そのため、この時点でワーキングディレクトリにはブランチが 1 つしかありません。

Subversion チェックアウトは異なります。作業ディレクトリ内のリポジトリ データが混在するため、各ブランチの作業ディレクトリとチェックアウトしたタグがあります。多数のブランチとタグがあるリポジトリの場合、すべてをチェックアウトすることは帯域幅の負担になる可能性があるため、部分的なチェックアウトから始める必要があります。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.copy-clone-url %}

3. リポジトリのエンプティチェックアウトをします:
  ```shell
  $ svn co --depth empty https://github.com/<em>user</em>/<em>repo</em>
  > Checked out revision 1.
  $ cd <em>repo</em>
  ```

4. `trunk` ブランチを取得します。 Subversion ブリッジは、トランクを Git の HEAD ブランチにマップします。
  ```shell
  $ svn up trunk
  > A    trunk
  > A    trunk/README.md
  > A    trunk/gizmo.rb
  > Updated to revision 1.
  ```

5. `branches` ディレクトリのエンプティ チェックアウトを取得します。  ここは、すべての `HEAD` でないブランチが存在し、かつ、機能ブランチを作成する場所です。
  ```shell
  $ svn up --depth empty branches
  Updated to revision 1.
  ```

### ブランチを作成する

Subversion ブリッジを使って GitHub にブランチを作成することもできます。

svn クライアントで `trunk` を更新して、既定のブランチが最新であることを確認します。
```shell
$ svn up trunk
> At revision 1.
```

次に、`svn copy` を使用して新しいブランチを作成することができます。
```shell
$ svn copy trunk branches/more_awesome
> A    branches/more_awesome
$ svn commit -m 'Added more_awesome topic branch'
> Adding    branches/more_awesome

> Committed revision 2.
```

リポジトリのブランチドロップダウンに新しいブランチが存在することを確認できます:

![ブランチスナップショット](/assets/images/help/branch/svnflow-branch-snapshot.png)

コマンドラインで新しいブランチを確認することもできます:

```shell
$ git fetch
> From https://github.com/<em>user</em>/<em>repo</em>/
> * [new branch]    more_awesome -> origin/more_awesome
```

### Subversion にコミットを作成する

いくつかの機能を追加しバグを修正した後は、GitHub にこれらの変更をコミットしましょう。 この手順は、あなたが慣れ親しんだ Subversion と非常に似ています。 ファイルを編集し、`svn commit` を使用して変更を記録します。

```shell
$ svn status
> M    gizmo.rb
$ svn commit -m 'Guard against known problems'
> Sending    more_awesome/gizmo.rb
> Transmitting file data .
> Committed revision 3.
$ svn status
> ?    test
$ svn add test
> A    test
> A    test/gizmo_test.rb
$ svn commit -m 'Test coverage for problems'
> Adding    more_awesome/test
> Adding    more_awesome/test/gizmo_test.rb
> Transmitting file data .
> Committed revision 4.
```

### ブランチ間の切り替え

ブランチを切り替えるには、`trunk` のチェックアウトから始めることをお勧めします。

```shell
$ svn co --depth empty https://github.com/<em>user</em>/<em>repo</em>/trunk
```

次に、他のブランチにスイッチします:

```shell
$ svn switch https://github.com/<em>user</em>/<em>repo</em>/branches/more_awesome
```

## Subversion コミットのために Git コミット SHA を検索する

Github の Subversion サーバーは、Subversion コミットのために Git コミット SHA を開示します。

コミット SHA を表示するには、`git-commit` のバージョンのないリモート プロパティを要求する必要があります。

```shell
$ svn propget git-commit --revprop -r HEAD https://github.com/<em>user</em>/<em>repo</em>
05fcc584ed53d7b0c92e116cb7e64d198b13c4e3
```

このコミット SHA によって、たとえば、GitHub 上の関連 Git コミットを検索できます。

## 参考資料

* 「[GitHub がサポートする Subversion プロパティ](/articles/subversion-properties-supported-by-github)」
