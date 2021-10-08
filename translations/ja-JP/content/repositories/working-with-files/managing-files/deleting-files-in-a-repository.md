---
title: リポジトリのファイルを削除する
intro: '{% data variables.product.product_name %} のリポジトリ内にある各ファイル{% ifversion fpt or ghes > 3.0 %}またはディレクトリ全体{% endif %}を削除できます。'
redirect_from:
  - /articles/deleting-files
  - /github/managing-files-in-a-repository/deleting-files
  - /github/managing-files-in-a-repository/deleting-a-file-or-directory
  - /github/managing-files-in-a-repository/deleting-files-in-a-repository
  - /github/managing-files-in-a-repository/managing-files-on-github/deleting-files-in-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
permissions: 'People with write permissions can delete files{% ifversion fpt or ghes > 3.0 %} or directories{% endif %} in a repository.'
topics:
  - Repositories
shortTitle: Delete files
---

## ファイル{% ifversion fpt or ghes > 3.0 %}とディレクトリ{% endif %}の削除について

リポジトリにある個々のファイル{% ifversion fpt or ghes > 3.0 %}、またはディレクトリにあるすべてのファイルを含むディレクトリ全体を削除できます{% endif %}。

If you try to delete a file{% ifversion fpt or ghes > 3.0 %} or directory{% endif %} in a repository that you don’t have write permissions to, we'll fork the project to your user account and help you send a pull request to the original repository after you commit your change. 詳しい情報については[プルリクエストについて](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)を参照してください。

削除したファイル{% ifversion fpt or ghes > 3.0 %}またはディレクトリ{% endif %}に機密データが含まれている場合、そのデータは引き続きリポジトリの Git 履歴で利用できます。 {% data variables.product.product_name %} からファイルを完全に削除するには、リポジトリの履歴からファイルを削除する必要があります。 詳細は「[機密データをリポジトリから削除する](/github/authenticating-to-github/removing-sensitive-data-from-a-repository)」を参照してください。

## ファイルを削除する

1. リポジトリ内で削除対象のファイルを見つけます。
2. ファイルの先頭にある {% octicon "trash" aria-label="The trash icon" %}をクリックします。
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

{% ifversion fpt or ghes > 3.0 %}
## ディレクトリを削除する

1. リポジトリ内で削除対象のディレクトリを見つけます。
1. 右上隅にある {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックしてから、[**Delete directory**] をクリックします。 ![ディレクトリを削除するボタン](/assets/images/help/repository/delete-directory-button.png)
1. 削除するファイルを確認します。
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}
{% endif %}
