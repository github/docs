---
title: 新しいファイルの作成
intro: '{% data variables.product.product_name %}上で書き込みアクセスを持つリポジトリであればどこにでも直接、新しいファイルを作成できます。'
redirect_from:
  - /articles/creating-new-files
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data variables.product.product_name %}上でファイルを作成するときは、以下にご注意ください:

- アクセス権を持たないリポジトリでの新しいファイル作成を試みている場合、変更をコミットした後で、ユーザーアカウントにプロジェクトをフォークして [プルリクエスト](/articles/about-pull-requests)をオリジナルのリポジトリに送信できるようお手伝いします。
- Web インターフェイスを介して作成されるファイル名では英数字とハイフン (`-`) しか使用できません。 他の文字を使用するには、[ローカルにファイルを作成してからコミットし、{% data variables.product.product_name %} 上のリポジトリにプッシュします](/articles/adding-a-file-to-a-repository-using-the-command-line)。

{% data reusables.repositories.sensitive-info-warning %}

{% data reusables.repositories.navigate-to-repo %}
2. 自分のリポジトリで、ファイルを作成するフォルダへ移動します。
{% data reusables.files.add-file %}
4. ファイル名フィールドにファイル名と拡張子を入力します。 サブディレクトリを作成するには、ディレクトリの区切り文字 `/` を入力します。 ![新しいファイルの名前](/assets/images/help/repository/new-file-name.png)
5. [**Edit new file**] タブで、ファイルにコンテンツを追加します。 ![新しいファイルのコンテンツ](/assets/images/help/repository/new-file-content.png)
6. 新しいコンテンツを見直すには、[**Preview**] をクリックします。 ![[New file preview] ボタン](/assets/images/help/repository/new-file-preview.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}

### 参考リンク

- [リポジトリへのファイルの追加](/articles/adding-a-file-to-a-repository)
- [コマンドラインを使用してリポジトリにファイルを追加する](/articles/adding-a-file-to-a-repository-using-the-command-line)
