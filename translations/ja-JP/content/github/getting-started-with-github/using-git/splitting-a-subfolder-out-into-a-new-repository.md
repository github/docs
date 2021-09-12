---
title: サブフォルダを新規リポジトリに分割する
redirect_from:
  - /articles/splitting-a-subpath-out-into-a-new-repository/
  - /articles/splitting-a-subfolder-out-into-a-new-repository
  - /github/using-git/splitting-a-subfolder-out-into-a-new-repository
  - /github/getting-started-with-github/splitting-a-subfolder-out-into-a-new-repository
intro: Git リポジトリ内のフォルダを、全く新しいリポジトリに変更できます。
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

リポジトリの新しいクローンを作成した場合でも、フォルダを別のリポジトリに分割したとき、Git の履歴や変更を失うことはありません。

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 現在のワーキングディレクトリを、新しいリポジトリを作成したい場所に変更します。
3. サブフォルダのあるリポジトリをクローンします。
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY-NAME</em>
  ```
4. ワーキングディレクトリをクローンしたリポジトリに変更します。
  ```shell
  $ cd <em>REPOSITORY-NAME</em>
  ```
5. リポジトリのファイルからサブフォルダを抽出するには、以下の情報を指定して [`git filter-branch`](https://git-scm.com/docs/git-filter-branch) を実行します。
    - `FOLDER-NAME`: 別のリポジトリの作成元にしたい、プロジェクト内のフォルダです。

    {% windows %}

      {% tip %}

      **ヒント:** Windows ユーザは、 フォルダを区切るために、`/` を使ってください。

      {% endtip %}

    {% endwindows %}
    - `BRANCH-NAME`: `master` や `gh-pages` などの、現在のプロジェクトのデフォルトブランチです。
    ```shell
    $ git filter-branch --prune-empty --subdirectory-filter <em>FOLDER-NAME BRANCH-NAME</em>
    # ディレクトリ内の指定されたブランチをフィルタし、空のコミットを削除する
    > Rewrite 48dc599c80e20527ed902928085e7861e6b3cbe6 (89/89)
    > Ref 'refs/heads/<em>BRANCH-NAME</em>' was rewritten
    ```
  これで、リポジトリにはサブフォルダ内にあったファイルのみが含まれることになります。

6. {% data variables.product.product_name %} 上で[新しいリポジトリを作成](/articles/creating-a-new-repository/)します。
7. 新しい {% data variables.product.product_name %} リポジトリの Quick Setup ページの上部で、{% octicon "clippy" aria-label="The copy to clipboard icon" %} をクリックしてリモートリポジトリの URL をコピーしてください。 ![リモートリポジトリの URL フィールドのコピー](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)

  {% tip %}

  **Tip:** For information on the difference between HTTPS and SSH URLs, see "[About remote repositories](/github/getting-started-with-github/about-remote-repositories)."

  {% endtip %}

8. リポジトリの既存のリモート名を確認します。 `origin` や `upstream` がよく使われます。
  ```shell
  $ git remote -v
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/REPOSITORY-NAME</em>.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/REPOSITORY-NAME</em>.git (push)
  ```

9. 既存のリモート名およびステップ 7 でコピーしたリモートリポジトリ URL を使って、新しいリポジトリの新しいリモート URL をセットアップします。
  ```shell
  git remote set-url origin https://{% data variables.command_line.codeblock %}/<em>USERNAME/NEW-REPOSITORY-NAME</em>.git
  ```
10. 新しいリポジトリの名前を使い、リモート URL が変更されたことを確認します。
  ```shell
  $ git remote -v
  # Verify new remote URL
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/NEW-REPOSITORY-NAME</em>.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/NEW-REPOSITORY-NAME</em>.git (push)
  ```
11. 変更を {% data variables.product.product_name %} の新しいリポジトリにプッシュします。
  ```shell
  git push -u origin <em>BRANCH-NAME</em>
  ```
