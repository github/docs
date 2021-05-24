---
title: ファイルをリポジトリの履歴から削除する
intro: 'サイズの大きいファイルをリポジトリから削除するには、ローカルリポジトリと {% data variables.product.product_location %} から完全に削除する必要があります。'
redirect_from:
  - /articles/removing-files-from-a-repository-s-history
  - /articles/removing-files-from-a-repositorys-history
  - /github/managing-large-files/removing-files-from-a-repositorys-history
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
{% warning %}

**警告**: この手順では、ファイルをコンピュータのリポジトリと {% data variables.product.product_location %} から恒久的に削除します。 ファイルが重要なものである場合は、ローカルバックアップコピーをリポジトリ外にあるディレクトリに作成してください。

{% endwarning %}

### プッシュされていない直近のコミットで追加されたファイルを削除する

ファイルが直近のコミットで追加され、{% data variables.product.product_location %} にプッシュしていない場合は、ファイルを削除してコミットを修正することができます。

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.switching_directories_procedural %}
3. ファイルを削除するため、`git rm --cached` を入力します。
  ```shell
  $ git rm --cached <em>サイズの大きいファイル</em>
  # サイズの大きいファイルを削除するためにステージするが、ディスクには残す
  ```
4. `--amend -CHEAD` を使用して、この変更をコミットします。
  ```shell
  $ git commit --amend -CHEAD
  # 以前のコミットを変更して修正する
  # プッシュされていない履歴からもファイルを削除する必要があるため
  # 単に新しいコミットを行うだけでは機能しない
  ```
5. コミットを {% data variables.product.product_location %} にプッシュします。
  ```shell
  $ git push
  # 書き換えられサイズが小さくなったコミットをプッシュする
  ```

### 以前のコミットで追加されたファイルを削除する

以前のコミットでファイルを追加した場合は、リポジトリの履歴から削除する必要があります。 リポジトリの履歴からファイルを削除するには、BFG Repo-Cleaner または `git filter-branch` コマンドを使用できます。 詳細は「[機密データをリポジトリから削除する](/github/authenticating-to-github/removing-sensitive-data-from-a-repository)」を参照してください。
