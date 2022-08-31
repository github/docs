---
title: 新しいファイルの作成
intro: '{% data variables.product.product_name %}上で書き込みアクセスを持つリポジトリであればどこにでも直接、新しいファイルを作成できます。'
redirect_from:
  - /articles/creating-new-files
  - /github/managing-files-in-a-repository/creating-new-files
  - /github/managing-files-in-a-repository/managing-files-on-github/creating-new-files
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---

{% data variables.product.product_name %}上でファイルを作成するときは、以下にご注意ください:

- If you try to create a new file in a repository that you don’t have access to, we will fork the project to your personal account and help you send [a pull request](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) to the original repository after you commit your change.
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
