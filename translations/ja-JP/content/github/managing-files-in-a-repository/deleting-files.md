---
title: ファイルの削除
intro: '{% data variables.product.product_name %} のリポジトリにあるファイルはどれも削除できます。'
redirect_from:
  - /articles/deleting-files
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% tip %}

**ヒント**: あなたがアクセス権のないリポジトリにあるファイルを削除しようとすると、Github はそのプロジェクトをあなたのユーザアカウントにフォークします。あなたはそこで変更をコミットし、オリジナルのリポジトリに[プルリクエスト](/articles/about-pull-requests)を送信できます。

{% endtip %}

1. リポジトリ内で削除対象のファイルを見つけます。
2. At the top of the file, click
{% octicon "trashcan" aria-label="The trashcan icon" %}.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

{% danger %}

**注意**: Git はバージョン管理システムであるため、後でファイルを復元したいときのために常にバックアップを取っています。 ただし、機密性の高いファイルを誤ってコミットしてしまったなど、何らかの理由により本当に*どうしても*リポジトリからファイルを**完全に**削除する必要がある場合は、[機密性の高いデータの削除に関する記事](/articles/removing-sensitive-data-from-a-repository)の手順に従ってください。

{% enddanger %}
