---
title: Git Large File Storage のアップロード エラーを解決する
intro: 'お使いの {% data variables.large_files.product_name_short %} ファイルが正しくアップロードできない場合、アップロード エラーのトラブルシューティングを行うためにいくつかの手順を実行できます。'
redirect_from:
  - /articles/resolving-git-large-file-storage-upload-failures
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data variables.large_files.product_name_short %} の整合性チェックでは、プッシュで参照されたすべての {% data variables.large_files.product_name_short %} ファイルが正しくアップロードされていることを確認します。 そのチェックによりアップロードされていない参照ファイルが検出されると、エラー メッセージが表示されてプッシュはブロックされます。

エラー メッセージを解決するには、ローカルの {% data variables.large_files.product_name_short %} クライアントを再インストールして、参照された {% data variables.large_files.product_name_short %} ファイルを今後正しくアップロードできるようにする必要があります。

1. ターミナルを開きます。
2. {% data variables.large_files.product_name_short %} を再インストールします。
  ```shell
  $ git lfs install
  ```
3. 参照された {% data variables.large_files.product_name_short %} ファイルをすべてプッシュします。
  ```shell
  $ git lfs push --all origin
  ```
