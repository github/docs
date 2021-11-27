---
title: ブランチについて
intro: 開発作業をリポジトリ内の他のブランチに影響することなく分離するために、ブランチを使ってください。 各リポジトリには1つのデフォルトブランチがあり、複数の他のブランチを持つことができます。 プルリクエストを使えば、ブランチを他のブランチにマージできます。
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches
  - /articles/working-with-protected-branches/
  - /articles/about-branches
  - /github/collaborating-with-issues-and-pull-requests/about-branches
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
---

## ブランチについて

ブランチを使用すると、リポジトリ内の領域で機能を開発したり、バグを修正したり、新しいアイデアを安全に試したりすることができます。

ブランチは常に既存のものから作成します。 通常、リポジトリのデフォルトブランチから新しいブランチを作成します。 その後、他の人がリポジトリに加えた変更とは別に、新しいブランチで作業できます。 機能を構築するために作成するブランチは、通常、フィーチャブランチまたはトピックブランチと呼ばれます。 詳しい情報については[リポジトリ内でのブランチの作成と削除](/articles/creating-and-deleting-branches-within-your-repository/)を参照してください。

また、{% data variables.product.prodname_pages %}サイトを公開するためにブランチを使うこともできます。 詳しい情報については「[{% data variables.product.prodname_pages %}について](/articles/what-is-github-pages)」を参照してください。

ブランチの作成、プルリクエストのオープン、プルリクエスト中でのブランチの削除とリストアを行うためには、リポジトリへの書き込みアクセスを持っていなければなりません。 詳細は「[{% data variables.product.prodname_dotcom %} 上のアクセス権限](/github/getting-started-with-github/access-permissions-on-github)」を参照してください。

## デフォルトブランチについて

{% data reusables.branches.new-repo-default-branch %} デフォルトブランチは、誰かがあなたのリポジトリにアクセスしたときに {% data variables.product.prodname_dotcom %} が表示されるブランチです。 また、デフォルトブランチは、誰かがリポジトリのクローンを作成したときに Git がローカルでチェックアウトする最初のブランチでもあります。 {% data reusables.branches.default-branch-automatically-base-branch %}

By default, {% data variables.product.product_name %} names the default branch `main` in any new repository.

{% data reusables.branches.set-default-branch %}

{% data reusables.branches.set-default-branch %}

## ブランチを使用する

満足の行くところまで作業したら、プルリクエストをオープンして、現在のブランチ（*head* ブランチ）の変更を別のブランチ（*base* ブランチ）にマージできます。 詳しい情報については[プルリクエストについて](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)を参照してください。

プルリクエストがマージまたはクローズされた後、head ブランチは不要になり削除できます。 ブランチを削除するには、リポジトリへの書き込みアクセスが必要です。 オープンなプルリクエストに直接関連付けられているブランチは削除できません。 詳しい情報については「[プルリクエスト中のブランチの削除と復元](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request)」を参照してください。

{% data reusables.pull_requests.retargeted-on-branch-deletion %}
以下の図は次のような内容を示しています。

 Here someone has created a branch called `feature1` from the `main` branch, and you've then created a branch called `feature2` from `feature1`. 両方のブランチにオープンなプルリクエストがあります。 矢印は、各プルリクエストの現在のベースブランチを示します。 この時点で、`feature1` は `feature2` のベースブランチとなります。 ここで、`feature2` のプルリクエストがマージされると、`feature2` ブランチが `feature1` にマージされます。

 ![[Merge pull request] ボタン](/assets/images/help/branches/pr-retargeting-diagram1.png)

In the next diagram, someone has merged the pull request for `feature1` into the `main` branch, and they have deleted the `feature1` branch. As a result, {% data variables.product.prodname_dotcom %} has automatically retargeted the pull request for `feature2` so that its base branch is now `main`.

 ![[Merge pull request] ボタン](/assets/images/help/branches/pr-retargeting-diagram2.png)

Now when you merge the `feature2` pull request, it'll be merged into the `main` branch.

## 保護されたブランチでの作業

リポジトリ管理者は、ブランチの保護を有効化できます。 保護されたブランチで作業しているなら、ブランチを削除したり、ブランチにフォースプッシュしたりすることはできません。 リポジトリ管理者は、保護されたブランチの他の設定を有効化し、ブランチがマージできるようになる前に様々なワークフローを適用できます。

{% note %}

**ノート：**リポジトリ管理者は、ブランチの保護で"Include administrators（管理者を含む）"が設定されていなければ、要求を満たしていないプルリクエストを保護が有効化されたブランチにマージできます。

{% endnote %}

プルリクエストがマージできるかを調べるには、プルリクエストの** Conversation（会話）**タブの下部にあるマージボックスを見てください。 詳しい情報については[保護されたブランチについて](/articles/about-protected-branches)を参照してください。

ブランチが保護されていると、以下のようになります。

- ブランチの削除やブランチへのフォースプッシュはできません。
- ブランチでステータスチェック必須が有効化されていると、必要なCIテストがすべてパスするまで、変更をブランチにマージできません。 詳しい情報については[ステータスチェックについて](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)を参照してください。
- ブランチでプルリクエストレビュー必須が有効化されている場合、プルリクエストレビューポリシー中のすべての要求が満たされるまでは、ブランチに変更をマージできません。 詳しい情報については[プルリクエストのマージ](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)を参照してください。
- ブランチでコードオーナーからの必須レビューが有効化されており、プルリクエストがオーナーを持つコードを変更している場合、コードオーナーがプルリクエストを承認しなければ、そのプルリクエストはマージできません。 詳細は「[コードオーナーについて](/articles/about-code-owners)」を参照してください。
- ブランチでコミット署名必須が有効化されている場合、署名および検証されていないコミットはブランチにプッシュできません。 詳しい情報については、「[コミット署名の検証について](/articles/about-commit-signature-verification)」および「[保護されたブランチについて](/github/administering-a-repository/about-protected-branches#require-signed-commits)」を参照してください。
- {% data variables.product.prodname_dotcom %} のコンフリクトエディタを使用して、保護されたブランチから作成したプルリクエストのコンフリクトを修正する場合、{% data variables.product.prodname_dotcom %} はプルリクエストの代替ブランチを作成して、コンフリクトの解決をマージできるようにします。 詳しい情報については、「[{% data variables.product.prodname_dotcom %} でマージコンフリクトを解決する](/github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-on-github)」を参照してください。

## 参考リンク

- [プルリクエストについて](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
- {% data variables.product.prodname_dotcom %} 用語集中の[ブランチ](/articles/github-glossary/#branch)
- Gitのドキュメンテーション中の[ブランチの要約](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)
