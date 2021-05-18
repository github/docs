---
title: ブランチの名前を変更する
intro: リポジトリにあるブランチの名前を変更できます。
permissions: People with write permissions to a repository can rename a branch in the repository. People with admin permissions can rename the default branch.
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.2'
topics:
  - Repositories
---

### ブランチの名前変更について

{% data variables.product.product_location %} にあるリポジトリのブランチの名前を変更できます。 ブランチ関する詳しい情報については、「[ブランチについて](/github/collaborating-with-issues-and-pull-requests/about-branches)」を参照してください。

{% data variables.product.product_location %} 上のブランチ名を変更すると、古いブランチ名を含む URL は、名前を変更したブランチの URL に自動的にリダイレクトされます。 ブランチ保護ポリシー、オープンなプルリクエストのベースブランチ (フォーク含む) およびドラフトリリースも更新されます。 名前の変更が完了すると、{% data variables.product.prodname_dotcom %} は、リポジトリのホームページに、コントリビューターにローカルの Git 環境を更新するよう指示を掲載します。

ファイル URL は自動的にリダイレクトされますが、生のファイル URL はリダイレクトされません。 また、ユーザが以前のブランチ名に対して `git pull` を実行した場合、{% data variables.product.prodname_dotcom %} はリダイレクトを行いません。

{% data variables.product.prodname_actions %} workflows do not follow renames, so if your repository publishes an action, anyone using that action with `@{old-branch-name}` will break. You should consider adding a new branch with the original content plus an additional commit reporting that the banch name is deprecated and suggesting that users migrate to the new branch name.

### ブランチの名前を変更する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-branches %}
1. ブランチのリストで、名前を変更するブランチの右にある {% octicon "pencil" aria-label="The edit icon" %} をクリックします。 ![名前を変更するブランチの右にある鉛筆アイコン](/assets/images/help/branch/branch-rename-edit.png)
1. ブランチの新しい名前を入力します。 ![新しいブランチ名を入力するためのテキストフィールド](/assets/images/help/branch/branch-rename-type.png)
1. ローカル環境についての情報を確認し、[**Rename branch**] をクリックします。 ![ローカル環境情報と [Rename branch] ボタン](/assets/images/help/branch/branch-rename-rename.png)

### ブランチ名の変更後にローカルクローンを更新する

{% data variables.product.product_name %} 上のリポジトリにあるブランチ名の変更後、そのリポジトリのローカルクローンのコラボレータは、クローンを更新する必要があります。

コンピュータ上にあるリポジトリのローカルクローンから、以下のコマンドを実行してデフォルトブランチ名を更新します。

```shell
$ git branch -m <em>OLD-BRANCH-NAME</em> <em>NEW-BRANCH-NAME</em>
$ git fetch origin
$ git branch -u origin/<em>NEW-BRANCH-NAME</em> <em>NEW-BRANCH-NAME</em>
$ git remote set-head origin -a
```

必要に応じて次のコマンドを実行し、古いブランチ名への追跡参照を削除します。
```
$ git remote prune origin
```
