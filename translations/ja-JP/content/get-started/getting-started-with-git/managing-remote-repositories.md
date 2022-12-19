---
title: リモートリポジトリを管理する
intro: 'お手元のコンピューター上にあるローカルリポジトリと、{% data variables.product.product_name %} にホストされているリポジトリを使用する方法を学びます。'
redirect_from:
  - /categories/18/articles
  - /remotes
  - /categories/managing-remotes
  - /articles/managing-remote-repositories
  - /articles/adding-a-remote
  - /github/using-git/adding-a-remote
  - /articles/changing-a-remote-s-url
  - /articles/changing-a-remotes-url
  - /github/using-git/changing-a-remotes-url
  - /articles/renaming-a-remote
  - /github/using-git/renaming-a-remote
  - /articles/removing-a-remote
  - /github/using-git/removing-a-remote
  - /github/using-git/managing-remote-repositories
  - /github/getting-started-with-github/managing-remote-repositories
  - /github/getting-started-with-github/getting-started-with-git/managing-remote-repositories
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Manage remote repositories
ms.openlocfilehash: d89a9c008128154e7de045be0de54db04168cb33
ms.sourcegitcommit: 7fb7ec2e665856fc5f7cd209b53bd0fb1c9bbc67
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185052'
---
## リモート リポジトリの追加

新しいリモートを追加するには、リポジトリが保存されているディレクトリでターミナルから `git remote add` コマンドを使います。

`git remote add` コマンドは 2 つの引数を取ります。
* リモート名 (例: `origin`)
* リモート URL (例: `https://{% data variables.command_line.backticks %}/user/repo.git`)

たとえば次のような点です。

```shell
$ git remote add origin https://{% data variables.command_line.codeblock %}/USER/REPO.git
# Set a new remote

$ git remote -v
# Verify new remote
> origin  https://{% data variables.command_line.codeblock %}/USER/REPO.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/USER/REPO.git (push)
```

使用する URL の詳細については、「[リモート リポジトリについて](/github/getting-started-with-github/about-remote-repositories)」を参照してください。

### トラブルシューティング: リモート配信元が既に存在します

このエラーは、ローカルのリポジトリに既に存在している名前でリモートを追加しようとしたということです。

```shell
$ git remote add origin https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife.git
> fatal: remote origin already exists.
```

この問題を解決するには、以下を実行してください。
* 新しいリモートに別の名前を使う。
* 新しいリモートを追加する前に、既存のリモート リポジトリの名前を変更する。 詳細については、下記の「[リモート リポジトリの名前を変更する](#renaming-a-remote-repository)」を参照してください。
* 新しいリモートを追加する前に、既存のリモート リポジトリの名前を削除する。 詳細については、下記の「[リモート リポジトリの削除](#removing-a-remote-repository)」を参照してください。

## リモート リポジトリの URL の変更

`git remote set-url` コマンドは、既存のリモート リポジトリ URL を変更します。

{% tip %}

**ヒント:** HTTPS と SSH の URL の違いについては、「[リモート リポジトリについて](/github/getting-started-with-github/about-remote-repositories)」を参照してください。

{% endtip %}

`git remote set-url` コマンドは 2 つの引数を取ります。

* 既存のリモート名。 たとえば、`origin` や `upstream` の 2 つが一般的な選択肢です。
* リモートの新しい URL。 たとえば次のような点です。
  * HTTPS を使うよう更新する場合、URL は以下のようになります:
```shell
https://{% data variables.command_line.backticks %}/USERNAME/REPOSITORY.git
```
  * SSH を使うよう更新する場合、URL は以下のようになります:
```shell
git@{% data variables.command_line.codeblock %}:USERNAME/REPOSITORY.git
```

### リモート URL の SSH から HTTPS への切り替え

{% data reusables.command_line.open_the_multi_os_terminal %}
2. ワーキングディレクトリをローカルプロジェクトに変更します。
3. 変更したいリモートの名前を取得するため、既存のリモート一覧を表示します。
  ```shell
  $ git remote -v
  > origin  git@{% data variables.command_line.codeblock %}:USERNAME/REPOSITORY.git (fetch)
  > origin  git@{% data variables.command_line.codeblock %}:USERNAME/REPOSITORY.git (push)
  ```
4. `git remote set-url` コマンドを使用して、リモートの URL を SSH から HTTPS に変更します。
  ```shell
  $ git remote set-url origin https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git
  ```
5. リモート URL が変更されたことを検証します。
  ```shell
  $ git remote -v
  # Verify new remote URL
  > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git (push)
  ```

次回、リモート リポジトリに `git fetch`、`git pull`、`git push` を実行すると、GitHub のユーザー名とパスワードの入力を求められます。 {% data reusables.user-settings.password-authentication-deprecation %}

[資格情報ヘルパーを使用](/github/getting-started-with-github/caching-your-github-credentials-in-git)して、Git が GitHub と通信するたびに、GitHub ユーザー名と {% data variables.product.pat_generic %} を記憶させることができます。

### リモート URL の HTTPS から SSH への切り替え

{% data reusables.command_line.open_the_multi_os_terminal %}
2. ワーキングディレクトリをローカルプロジェクトに変更します。
3. 変更したいリモートの名前を取得するため、既存のリモート一覧を表示します。
  ```shell
  $ git remote -v
  > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git (push)
  ```
4. `git remote set-url` コマンドを使用して、リモートの URL を HTTPS から SSH に変更します。
  ```shell
  $ git remote set-url origin git@{% data variables.command_line.codeblock %}:USERNAME/REPOSITORY.git
  ```
5. リモート URL が変更されたことを検証します。
  ```shell
  $ git remote -v
  # Verify new remote URL
  > origin  git@{% data variables.command_line.codeblock %}: USERNAME/REPOSITORY.git (fetch)
  > origin  git@{% data variables.command_line.codeblock %}: USERNAME/REPOSITORY.git (push)
  ```

### トラブルシューティング: このようなリモート '[name]' はありません

このエラーは、変更しようとしたリモートが存在しないことを意味します。

```shell
$ git remote set-url sofake https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife
> fatal: No such remote 'sofake'
```

リモート名を正しく入力したか確認してください。

## リモート リポジトリの名前を変更する

`git remote rename` コマンドを使用して、既存のリモートの名前を変更します。

`git remote rename` コマンドは 2 つの引数を取ります。
* 既存のリモート名 (例: `origin`)
* リモートの新しい名前 (例: `destination`)

## 例

これらの例では、[HTTPS を使用して複製](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls)することを前提としています (推奨)。

```shell
$ git remote -v
# View existing remotes
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (push)

$ git remote rename origin destination
# Change remote name from 'origin' to 'destination'

$ git remote -v
# Verify remote's new name
> destination  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (fetch)
> destination  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (push)
```

### トラブルシューティング: 構成セクションの 'remote.[古い名前]' を 'remote.[新しい名前]' に変更できませんでした

このエラーは、入力した古いリモート名が存在しないことを意味します。

`git remote -v` コマンドを使用すると、現在存在するリモートを確認できます。

```shell
$ git remote -v
# View existing remotes
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (push)
```

### トラブルシューティング: リモート [新しい名前] は既に存在します

このエラーは、使用しようとしたリモート名がすでに存在する、という意味です。 これを解決するには、別のリモート名を使用するか、または元のリモートの名前を変更するかのいずれかです。

## リモート リポジトリを削除する 

`git remote rm` コマンドを使用して、リポジトリからリモート URL を削除します。

`git remote rm` コマンドは、次の 1 つの引数を受け取ります。
* リモート名 (例: `destination`)

リポジトリからリモート URL を削除すると、ローカルおよびリモート リポジトリのリンクのみが解除されます。 リモート リポジトリは削除されません。

## 例

これらの例では、[HTTPS を使用して複製](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls)することを前提としています (推奨)。

```shell
$ git remote -v
# View current remotes
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (push)
> destination  https://{% data variables.command_line.codeblock %}/FORKER/REPOSITORY.git (fetch)
> destination  https://{% data variables.command_line.codeblock %}/FORKER/REPOSITORY.git (push)

$ git remote rm destination
# Remove remote
$ git remote -v
# Verify it's gone
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (push)
```

{% warning %}

**注**: `git remote rm` リモート リポジトリをサーバーから削除しないでください。 リモートとその参照がローカル リポジトリから削除されるだけです。

{% endwarning %}

### トラブルシューティング: 構成セクションの 'remote' [名前]' を削除できませんでした。

このエラーは、削除しようとしたリモートが存在しないことを意味します。

```shell
$ git remote rm sofake
> error: Could not remove config section 'remote.sofake'
```

リモート名を正しく入力したか確認してください。

## 参考資料

- _Pro Git_ ブックの "[リモートの操作](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)"
