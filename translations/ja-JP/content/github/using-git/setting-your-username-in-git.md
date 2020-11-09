---
title: Git でのユーザ名を設定する
intro: 'Git は、アイデンティティによってコミットを関連付けるためにユーザ名を使います。 Git ユーザ名は、{% data variables.product.product_name %} ユーザ名と同じではありません。'
redirect_from:
  - /articles/setting-your-username-in-git
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

`git config` コマンドを使って、Git コミットと関連付けられている名前を変更できます。 設定した新しい名前は、コマンドラインから {% data variables.product.product_name %} にプッシュするこれからのコミットに表示されます。 本名を非公開にしておきたい場合、Git ユーザ名としてどのテキストでも使うことができます。

`git config` を使って、Git コミットに関連付けられる名前を変更すると、新しい名前は以降のコミットにだけ影響し、これまでのコミットに使った名前は変更されません。

### コンピュータにある*すべての*リポジトリ用に Git ユーザ名を設定する

{% data reusables.command_line.open_the_multi_os_terminal %}

2. {% data reusables.user_settings.set_your_git_username %}
   ```shell
   $ git config --global user.name "<em>Mona Lisa</em>"
  ```

3. {% data reusables.user_settings.confirm_git_username_correct %}
   ```shell
   $ git config --global user.name
   > Mona Lisa
  ```

### 単一のリポジトリ用に Git ユーザ名を設定する

{% data reusables.command_line.open_the_multi_os_terminal %}

2. 現在のワーキングディレクトリをGitコミットと関連付けた名前を設定したいローカルリポジトリに変更します。

3. {% data reusables.user_settings.set_your_git_username %}
   ```shell
   $ git config user.name "<em>Mona Lisa</em>"
  ```

3. {% data reusables.user_settings.confirm_git_username_correct %}
   ```shell
   $ git config user.name
   > Mona Lisa
  ```

### 参考リンク

- [コミットメールアドレスを設定する](/articles/setting-your-commit-email-address)
- [_Pro Git_ ブックの "Git Configuration"](https://git-scm.com/book/en/Customizing-Git-Git-Configuration)
