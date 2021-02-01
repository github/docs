---
title: ブランチについて
intro: '開発作業をリポジトリ内の他のブランチに影響することなく分離するために、ブランチを使ってください。 各リポジトリには1つのデフォルトブランチがあり、複数の他のブランチを持つことができます。 プルリクエストを使えば、ブランチを他のブランチにマージできます。'
redirect_from:
  - /articles/working-with-protected-branches/
  - /articles/about-branches
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---


### ブランチについて

ブランチを使用すると、リポジトリ内の領域で機能を開発したり、バグを修正したり、新しいアイデアを安全に試したりすることができます。

ブランチは常に既存のものから作成します。 通常、リポジトリのデフォルトブランチから新しいブランチを作成します。 その後、他の人がリポジトリに加えた変更とは別に、新しいブランチで作業できます。 機能を構築するために作成するブランチは、通常、フィーチャブランチまたはトピックブランチと呼ばれます。 詳しい情報については[リポジトリ内でのブランチの作成と削除](/articles/creating-and-deleting-branches-within-your-repository/)を参照してください。

また、{% data variables.product.prodname_pages %}サイトを公開するためにブランチを使うこともできます。 詳しい情報については「[{% data variables.product.prodname_pages %}について](/articles/what-is-github-pages)」を参照してください。

ブランチの作成、プルリクエストのオープン、プルリクエスト中でのブランチの削除とリストアを行うためには、リポジトリへの書き込みアクセスを持っていなければなりません。 詳細は「[{% data variables.product.prodname_dotcom %} 上のアクセス権限](/github/getting-started-with-github/access-permissions-on-github)」を参照してください。

### About the default branch

{% data reusables.branches.new-repo-default-branch %} デフォルトブランチは、誰かがあなたのリポジトリにアクセスしたときに {% data variables.product.prodname_dotcom %} が表示されるブランチです。 また、デフォルトブランチは、誰かがリポジトリのクローンを作成したときに Git がローカルでチェックアウトする最初のブランチでもあります。 {% data reusables.branches.default-branch-automatically-base-branch %}

デフォルトでは、{% data variables.product.product_name %} は新しいリポジトリのデフォルトブランチ {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}`main`{% else %}`master`{% endif %} に名前を付けます。

{% data reusables.branches.set-default-branch %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}

{% data reusables.branches.set-default-branch %}

{% endif %}

### ブランチを使用する

満足の行くところまで作業したら、プルリクエストをオープンして、現在のブランチ（*head* ブランチ）の変更を別のブランチ（*base* ブランチ）にマージできます。 詳しい情報については[プルリクエストについて](/articles/about-pull-requests)を参照してください。

プルリクエストがマージまたはクローズされた後、head ブランチは不要になり削除できます。 ブランチを削除するには、リポジトリへの書き込みアクセスが必要です。 オープンなプルリクエストに直接関連付けられているブランチは削除できません。 詳しい情報については「[プルリクエスト中のブランチの削除と復元](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request)」を参照してください。

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
{% data reusables.pull_requests.retargeted-on-branch-deletion %}
以下の図は次のような内容を示しています。

 ユーザが `master` ブランチから `feature1` というブランチを作成し、`feature1` から `feature2` というブランチを作成しました。 両方のブランチにオープンなプルリクエストがあります。 矢印は、各プルリクエストの現在のベースブランチを示します。 この時点で、`feature1` は `feature2` のベースブランチとなります。 ここで、`feature2` のプルリクエストがマージされると、`feature2` ブランチが `feature1` にマージされます。

 ![[Merge pull request] ボタン](/assets/images/help/branches/pr-retargeting-diagram1.png)

次の図では、`feature1` のプルリクエストを `master` ブランチにマージし、`feature1` ブランチを削除しています。 その結果、{% data variables.product.prodname_dotcom %} は、`feature2` のプルリクエストを自動的にリターゲットして、ベースブランチが `master` になるようにしました。

 ![[Merge pull request] ボタン](/assets/images/help/branches/pr-retargeting-diagram2.png)

これで、`feature2` プルリクエストをマージすると、`master` ブランチにマージされます。
{% endif %}

### 保護されたブランチでの作業

リポジトリ管理者は、ブランチの保護を有効化できます。 保護されたブランチで作業しているなら、ブランチを削除したり、ブランチにフォースプッシュしたりすることはできません。 リポジトリ管理者は、保護されたブランチの他の設定を有効化し、ブランチがマージできるようになる前に様々なワークフローを適用できます。

{% note %}

**ノート：**リポジトリ管理者は、ブランチの保護で"Include administrators（管理者を含む）"が設定されていなければ、要求を満たしていないプルリクエストを保護が有効化されたブランチにマージできます。

{% endnote %}

プルリクエストがマージできるかを調べるには、プルリクエストの** Conversation（会話）**タブの下部にあるマージボックスを見てください。 詳しい情報については[保護されたブランチについて](/articles/about-protected-branches)を参照してください。

ブランチが保護されていると、以下のようになります。

- ブランチの削除やブランチへのフォースプッシュはできません。
- ブランチでステータスチェック必須が有効化されていると、必要なCIテストがすべてパスするまで、変更をブランチにマージできません。 詳しい情報については[ステータスチェックについて](/articles/about-status-checks)を参照してください。
- ブランチでプルリクエストレビュー必須が有効化されている場合、プルリクエストレビューポリシー中のすべての要求が満たされるまでは、ブランチに変更をマージできません。 詳しい情報については[プルリクエストのマージ](/articles/merging-a-pull-request)を参照してください。
- ブランチでコードオーナーからの必須レビューが有効化されており、プルリクエストがオーナーを持つコードを変更している場合、コードオーナーがプルリクエストを承認しなければ、そのプルリクエストはマージできません。 詳細は「[コードオーナーについて](/articles/about-code-owners)」を参照してください。
- ブランチでコミット署名必須が有効化されている場合、署名および検証されていないコミットはブランチにプッシュできません。 For more information, see "[About commit signature verification](/articles/about-commit-signature-verification)" and "[About protected branches](/github/administering-a-repository/about-protected-branches#require-signed-commits)."{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
- {% data variables.product.prodname_dotcom %} のコンフリクトエディタを使用して、保護されたブランチから作成したプルリクエストのコンフリクトを修正する場合、{% data variables.product.prodname_dotcom %} はプルリクエストの代替ブランチを作成して、コンフリクトの解決をマージできるようにします。 詳しい情報については、「[{% data variables.product.prodname_dotcom %} でマージコンフリクトを解決する](/github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-on-github)」を参照してください。{% endif %}

### 参考リンク

- [プルリクエストについて](/articles/about-pull-requests)
- {% data variables.product.prodname_dotcom %} 用語集中の[ブランチ](/articles/github-glossary/#branch)
- Gitのドキュメンテーション中の[ブランチの要約](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)
