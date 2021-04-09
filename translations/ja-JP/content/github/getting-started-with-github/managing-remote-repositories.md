---
title: リモートリポジトリを管理する
intro: 'お手元のコンピューター上にあるローカルリポジトリと、{% data variables.product.product_name %} にホストされているリポジトリを使用する方法を学びます。'
redirect_from:
  - /categories/18/articles/
  - /remotes/
  - /categories/managing-remotes/
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
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Adding a remote repository

To add a new remote, use the `git remote add` command on the terminal, in the directory your repository is stored at.

`git remote add` コマンドは 2 つの引数を取ります:
* リモート名。たとえば `origin`
* リモート URL。たとえば `https://{% data variables.command_line.backticks %}/user/repo.git`

例:

```shell
$ git remote add origin https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git
# 新しいリモートの設定

$ git remote -v
# 新しいリモートの検証
> origin  https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git (push)
```

For more information on which URL to use, see "[About remote repositories](/github/getting-started-with-github/about-remote-repositories)."

#### Troubleshooting: Remote origin already exists

This error means you've tried to add a remote with a name that already exists in your local repository.

```shell
$ git remote add origin https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife.git
> fatal: remote origin already exists.
```

To fix this, you can:
* 新しいリモートに別の名前を使う
* Rename the existing remote repository
* Delete the existing remote repository

### Changing a remote repository's URL

The `git remote set-url` command changes an existing remote repository URL.

{% tip %}

**Tip:** For information on the difference between HTTPS and SSH URLs, see "[About remote repositories](/github/getting-started-with-github/about-remote-repositories)."

{% endtip %}

`git remote set-url`コマンドは 2 つの引数を取ります:

* 既存のリモート名。 `origin` や `upstream` がよく使われます。
* リモートの新しい URL。 例:
  * HTTPS を使うよう更新する場合、URL は以下のようになります:
```shell
https://{% data variables.command_line.backticks %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git
```
  * SSH を使うよう更新する場合、URL は以下のようになります:
```shell
git@{% data variables.command_line.codeblock %}:<em>USERNAME</em>/<em>REPOSITORY</em>.git
```

#### リモート URL の SSH から HTTPS への切り替え

{% data reusables.command_line.open_the_multi_os_terminal %}
2. ワーキングディレクトリをローカルプロジェクトに変更します。
3. 変更したいリモートの名前を取得するため、既存のリモート一覧を表示します。
  ```shell
  $ git remote -v
  > origin  git@{% data variables.command_line.codeblock %}:<em>USERNAME/REPOSITORY</em>.git (fetch)
  > origin  git@{% data variables.command_line.codeblock %}:<em>USERNAME/REPOSITORY</em>.git (push)
  ```
4. `git remote set-url` コマンドでリモートの URL を SSH から HTTPS に変更します。
  ```shell
  $ git remote set-url origin https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git
  ```
5. リモート URL が変更されたことを検証します。
  ```shell
  $ git remote -v
  # Verify new remote URL
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/REPOSITORY</em>.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/REPOSITORY</em>.git (push)
  ```

次にリモートリポジトリに対して `git fetch`、`git pull`、または `git push` を実行するときに、GitHub ユーザ名とパスワードを求められます。 {% data reusables.user_settings.password-authentication-deprecation %}

You can [use a credential helper](/github/getting-started-with-github/caching-your-github-credentials-in-git) so Git will remember your GitHub username and personal access token every time it talks to GitHub.

#### Switching remote URLs from HTTPS to SSH

{% data reusables.command_line.open_the_multi_os_terminal %}
2. ワーキングディレクトリをローカルプロジェクトに変更します。
3. 変更したいリモートの名前を取得するため、既存のリモート一覧を表示します。
  ```shell
  $ git remote -v
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/REPOSITORY</em>.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/REPOSITORY</em>.git (push)
  ```
4. `git remote set-url` コマンドでリモートの URL を HTTPS から SSH に変更します。
  ```shell
  $ git remote set-url origin git@{% data variables.command_line.codeblock %}:<em>USERNAME</em>/<em>REPOSITORY</em>.git
  ```
5. リモート URL が変更されたことを検証します。
  ```shell
  $ git remote -v
  # Verify new remote URL
  > origin  git@{% data variables.command_line.codeblock %}:<em>USERNAME/REPOSITORY</em>.git (fetch)
  > origin  git@{% data variables.command_line.codeblock %}:<em>USERNAME/REPOSITORY</em>.git (push)
  ```

#### Troubleshooting: No such remote '[name]'

このエラーは、変更しようとしたリモートが存在しないことを意味します。

```shell
$ git remote set-url sofake https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife
> fatal: No such remote 'sofake'
```

リモート名を正しく入力したか確認してください。

### Renaming a remote repository

Use the `git remote rename` command to rename an existing remote.

`git remote rename` コマンドは、次の 2 つの引数を取ります:
* 既存のリモート名（`origin` など）
* リモートの新しい名前 (`destination` など)

### サンプル

次の例は (推奨されるとおり) [HTTPS を使用してクローンを作成](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls)したと想定しています。

```shell
$ git remote -v
# 既存のリモートを表示
> origin https://{% data variables.command_line.codeblock %}/<em>オーナー</em>/<em>リポジトリ</em>.git (fetch)
> origin https://{% data variables.command_line.codeblock %}/<em>オーナー</em>/<em>リポジトリ</em>.git (push)

$ git remote rename origin destination
# リモート名を「origin」から「destination」に変更

$ git remote -v
# リモートの新しい名前を確認
> destination https://{% data variables.command_line.codeblock %}/<em>オーナー</em>/<em>リポジトリ</em>.git (fetch)
> destination https://{% data variables.command_line.codeblock %}/<em>オーナー</em>/<em>リポジトリ</em>.git (push)
```

#### Troubleshooting: Could not rename config section 'remote.[old name]' to 'remote.[new name]'

このエラーは、名前を変更しようとして入力した古いリモート名のリモートが存在しない、という意味です。

現在どのリモートが存在するかは、次のように `git remote -v` コマンドでチェックできます:

```shell
$ git remote -v
# 既存のリモートを表示
> origin  https://{% data variables.command_line.codeblock %}/<em>コードオーナー</em>/<em>リポジトリ</em>.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/<em>コードオーナー</em>/<em>リポジトリ</em>.git (push)
```

#### Troubleshooting: Remote [new name] already exists

このエラーは、使用しようとしたリモート名がすでに存在する、という意味です。 To solve this, either use a different remote name, or rename the original remote.

### Removing a remote repository

Use the `git remote rm` command to remove a remote URL from your repository.

`git remote rm` コマンドは 1 つの引数を取ります:
* リモート名 (`destination` など)

### サンプル

次の例は (推奨されるとおり) [HTTPS を使用してクローンを作成](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls)したと想定しています。

```shell
$ git remote -v
# 現在のリモートの表示
> origin  https://{% data variables.command_line.codeblock %}/<em>オーナー/リポジトリ</em>.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/<em>オーナー/リポジトリ</em>.git (push)
> destination  https://{% data variables.command_line.codeblock %}/<em>フォーカー/リポジトリ</em>.git (fetch)
> destination  https://{% data variables.command_line.codeblock %}/<em>フォーカー/リポジトリ</em>.git (push)

$ git remote rm destination
# リモートの削除
$ git remote -v
# 削除されていることの検証
> origin  https://{% data variables.command_line.codeblock %}/<em>オーナー/リポジトリ</em>.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/<em>オーナー/リポジトリ</em>.git (push)
```

{% warning %}

**メモ**: `git remote rm` はリモートリポジトリをサーバから削除するわけではありません。  リモートとその参照をローカルリポジトリから削除するだけです。

{% endwarning %}

#### Troubleshooting: Could not remove config section 'remote.[name]'

このエラーは、削除しようとしたリモートが存在しないことを意味します。

```shell
$ git remote rm sofake
> error: Could not remove config section 'remote.sofake'
```

リモート名を正しく入力したか確認してください。

### 参考リンク

- [書籍 _Pro Git_ のリモートでの作業](https://git-scm.com/book/ja/v2/Git-の基本-リモートでの作業)
