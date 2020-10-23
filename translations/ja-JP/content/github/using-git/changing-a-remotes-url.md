---
title: リモートの URL の変更
redirect_from:
  - /articles/changing-a-remote-s-url
  - /articles/changing-a-remotes-url
intro: '「git remote set-url」コマンドにより、既存のリモートリポジトリ URL を変更できます。'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% tip %}

**ヒント:** HTTPS と SSH URL との違いについては、「[どのリモート URL を使うべきか?](/articles/which-remote-url-should-i-use)」を参照してください。

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

### リモート URL の SSH から HTTPS への切り替え

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

次にリモートリポジトリに対して `git fetch`、`git pull`、または `git push` を実行するときに、GitHub ユーザ名とパスワードを求められます。

- [2要素認証](/articles/securing-your-account-with-two-factor-authentication-2fa) を有効にしている場合は、[パーソナルアクセストークンを作成](/github/authenticating-to-github/creating-a-personal-access-token)して、GitHub パスワードのかわりに使用することができます。
- Git が GitHub と通信するたびに GitHub のユーザ名とパスワードを思い出すよう、[認証情報ヘルパーを使用する](/github/using-git/caching-your-github-credentials-in-git)ことができます。

### Switching remote URLs from HTTPS to SSH

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

### トラブルシューティング

リモートを変更しようとすると、以下のエラーが生じることがあります。

#### No such remote '[name]'

このエラーは、変更しようとしたリモートが存在しないことを意味します。

```shell
$ git remote set-url sofake https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife
> fatal: No such remote 'sofake'
```

リモート名を正しく入力したか確認してください。

### 参考リンク

- [_Pro Git_ ブックの「リモートでの作業」](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)
