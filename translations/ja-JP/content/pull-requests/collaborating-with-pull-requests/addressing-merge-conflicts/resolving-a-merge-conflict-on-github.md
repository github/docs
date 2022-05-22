---
title: GitHub でのマージ コンフリクトを解決する
intro: コンフリクト エディターを使用すれば、GitHub で行の変更が競合している単純なマージ コンフリクトを解決できます。
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github
  - /articles/resolving-a-merge-conflict-on-github
  - /github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-on-github
  - /github/resolving-a-merge-conflict-on-github
  - /github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Resolve merge conflicts
---

{% data variables.product.product_name %}で解決できるマージコンフリクトは、Git リポジトリの別々のブランチで、同じファイルの同じ行に異なる変更がなされた場合など、互いに矛盾する行変更を原因とするもののみです。 その他すべての種類のマージ コンフリクトについては、コマンド ラインでコンフリクトをローカルに解決する必要があります。 詳細は「[コマンド ラインを使用してマージコンフリクトを解決する](/articles/resolving-a-merge-conflict-using-the-command-line)」を参照してください。

{% ifversion ghes or ghae %}
サイトの管理者がリポジトリ間の Pull Request に対してマージ コンフリクト エディターを無効にしている場合、{% data variables.product.product_name %} ではコンフリクト エディターを使用できず、コマンドラインでマージ コンフリクトを解決する必要があります。 たとえば、マージ コンフリクト エディターが無効な場合、フォークと上流リポジトリの間の Pull Request ではそれを使用できません。
{% endif %}

{% warning %}

**警告:** {% data variables.product.product_name %} でマージコンフリクトを解決すると、プルリクエストの[ベースブランチ](/github/getting-started-with-github/github-glossary#base-branch)全体が [head ブランチ](/github/getting-started-with-github/github-glossary#head-branch)にマージされます このブランチにコミットすることが間違いでないことを確認してください。 head ブランチがリポジトリのデフォルトブランチである場合、プルリクエストの head ブランチとして機能する新しいブランチを作成するオプションが表示されます。 head ブランチが保護されている場合、コンフリクトの解決をマージすることができないため、新しい head ブランチを作成するように求められます。 詳しい情報については[保護されたブランチについて](/github/administering-a-repository/about-protected-branches)を参照してください。

{% endwarning %}

{% data reusables.repositories.sidebar-pr %}
1. [Pull Requests] リストで、解決するマージ コンフリクトを起こしている Pull Request をクリックします。
1. 指定した Pull Request の下部周辺で、[**Resolve conflicts**] をクリックします。 ![[Resolve merge conflicts] ボタン](/assets/images/help/pull_requests/resolve-merge-conflicts-button.png)

 {% tip %}

 **ヒント:** [**Resolve conflicts**] ボタンが作動しない場合、指定した Pull Request のマージ コンフリクトは {% data variables.product.product_name %} で解決するには複雑すぎ{% ifversion ghes or ghae %} るか、サイトの管理者がリポジトリ間の Pull Request に対してコンフリクト エディターを無効にしてい{% endif %}ます。 別の Git クライアントを使用するか、コマンドラインで Git を使用して、マージのコンフリクトを解決する必要があります。 For more information see "\[Resolving a merge conflict using the command line\](/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line."

 {% endtip %}
{% data reusables.pull_requests.decide-how-to-resolve-competing-line-change-merge-conflict %}
 ![コンフリクトマーカー付きのマージコンフリクトの例を表示する](/assets/images/help/pull_requests/view-merge-conflict-with-markers.png)
1. ファイルに複数のマージ コンフリクトがある場合は、次の一連のコンフリクト マーカーまで下にスクロールし、ステップ 4 と 5 を繰り返してマージ コンフリクトを解決します。
1. ファイル内のコンフリクトをすべて解決したら、[**Mark as resolved**] をクリックします。 ![[Mark as resolved] ボタンをクリックする](/assets/images/help/pull_requests/mark-as-resolved-button.png)
1. コンフリクトしているファイルが複数ある場合は、[conflicting files] の下のページの左側で編集する次のファイルを選択し、Pull Request のマージ コンフリクトをすべて解決するまでステップ 4 から 7 を繰り返します。 ![コンフリクトしている次のファイルを選択する（該当する場合）](/assets/images/help/pull_requests/resolve-merge-conflict-select-conflicting-file.png)
1. マージ コンフリクトをすべて解決したら、[**Commit merge**] をクリックします。 これにより、Base ブランチ全体が Head ブランチにマージされます。 ![[Resolve merge conflicts] ボタン](/assets/images/help/pull_requests/merge-conflict-commit-changes.png)
1. プロンプトに従い、コミット先のブランチをレビューします。

   head ブランチがリポジトリのデフォルトブランチである場合、コンフリクトを解決するために加えた変更でこのブランチを更新するか、新しいブランチを作成してこれをプルリクエストのヘッドブランチとして使用するかを選択できます。 ![更新するブランチの確認を求める](/assets/images/help/pull_requests/conflict-resolution-merge-dialog-box.png)

   新しいブランチを作成する場合は、ブランチの名前を入力します。

   プルリクエストの head ブランチが保護されている場合は、新しいブランチを作成する必要があります。 保護されたブランチを更新するオプションはありません。

   [**Create branch and update my pull request**] または [**I understand, continue updating _BRANCH_**] をクリックします。 ボタンテキストは、実行中のアクションに対応しています。
1. Pull Request をマージするには、[**Merge pull request**] をクリックします。 Pull Request のマージ オプションの詳細については、「 [Pull Request をマージする](/articles/merging-a-pull-request/)」を参照してください。

## 参考リンク

- [プルリクエストのマージについて](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)
