---
title: 作者情報の変更
redirect_from:
  - /change-author-info/
  - /changing-author-info/
  - /articles/changing-author-info
intro: 既存のコミットに記録された名前やメールアドレスを変更するには、Git リポジトリの履歴全体を書き換える必要があります。
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% warning %}

**警告**: このアクションはリポジトリの履歴を乱します。 リポジトリを他の人と共同で利用している場合、公開済みの履歴を書き換えるのは好ましくない行為です。 これを行うのは、緊急時のみにとどめるべきです。

{% endwarning %}

### スクリプトによるリポジトリの Git 履歴の変更

作者またはコミッターのフィールドに、古いメールアドレスがあるものを正しい名前およびメールアドレスに変更するスクリプトを作成しました。

{% tip %}

**メモ**: このスクリプトを実行すると、そのリポジトリの全コラボレータの履歴が書き換えられます。 この手順を実行した後、フォークやクローンをしている人は書き換えられた履歴をフェッチし、書き換えられた履歴にローカルの変更をすべてリベースする必要があります。

{% endtip %}

このスクリプトを実行する前に、以下を準備する必要があります:

* 変更したい作者/コミッターフィールドに表示されている、古いメールアドレス
* コミットに関連付けたい正しい名前およびメールアドレス

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 以下のコマンドで、リポジトリの、新しいベアクローンを作成します:
  ```shell
  git clone --bare https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git
  cd <em>repo</em>.git
  ```
3. スクリプトをコピーして貼り付けます。以下の変数については、収集した情報に基づいて置き換えてください:
    * `OLD_EMAIL (古いメールアドレス)`
    * `CORRECT_NAME (正しい名前)`
    * `CORRECT_EMAIL (正しいメールアドレス)`

  ```shell
  #!/bin/sh

  git filter-branch --env-filter '

  OLD_EMAIL="your-old-email@example.com"
  CORRECT_NAME="Your Correct Name"
  CORRECT_EMAIL="your-correct-email@example.com"

  if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
  then
  export GIT_COMMITTER_NAME="$CORRECT_NAME"
  export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
  fi
  if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
  then
  export GIT_AUTHOR_NAME="$CORRECT_NAME"
  export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
  fi
  ' --tag-name-filter cat -- --branches --tags
  ```

4. [**Enter**] を押してスクリプトを実行します。
5. 新しい Git 履歴に間違いがないかレビューします。
6. 以下のコマンドで、修正した履歴を {% data variables.product.product_name %} にプッシュします:
  ```shell
  git push --force --tags origin 'refs/heads/*'
  ```
7. 以下のコマンドで、テンポラリなクローンをクリーンアップします:
  ```shell
  cd ..
  rm -rf <em>repo</em>.git
  ```
