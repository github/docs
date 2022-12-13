---
title: ブランチの概要
intro: 開発作業をリポジトリ内の他のブランチに影響することなく分離するために、ブランチを使ってください。 各リポジトリには1つのデフォルトブランチがあり、複数の他のブランチを持つことができます。 プルリクエストを使えば、ブランチを他のブランチにマージできます。
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches
  - /articles/working-with-protected-branches
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
ms.openlocfilehash: 0262a7a8fb0bb8556c3f6062e3fc8512eb9fa1c6
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145139659'
---
## ブランチの概要

ブランチを使用すると、リポジトリ内の領域で機能を開発したり、バグを修正したり、新しいアイデアを安全に試したりすることができます。

ブランチは常に既存のものから作成します。 通常、リポジトリのデフォルトブランチから新しいブランチを作成します。 その後、他の人がリポジトリに加えた変更とは別に、新しいブランチで作業できます。 機能を構築するために作成するブランチは、通常、フィーチャブランチまたはトピックブランチと呼ばれます。 詳細については、「[リポジトリ内でブランチを作成および削除する](/articles/creating-and-deleting-branches-within-your-repository/)」を参照してください。

また、{% data variables.product.prodname_pages %}サイトを公開するためにブランチを使うこともできます。 詳細については、「[{% data variables.product.prodname_pages %} について](/articles/what-is-github-pages)」を参照してください。

ブランチの作成、プルリクエストのオープン、プルリクエスト中でのブランチの削除とリストアを行うためには、リポジトリへの書き込みアクセスを持っていなければなりません。 詳細については、「[{% data variables.product.prodname_dotcom %} 上のアクセス権限](/github/getting-started-with-github/access-permissions-on-github)」を参照してください。

## デフォルトブランチについて

{% data reusables.branches.new-repo-default-branch %} デフォルトブランチは、誰かがあなたのリポジトリにアクセスしたときに {% data variables.product.prodname_dotcom %} が表示されるブランチです。 また、デフォルトブランチは、誰かがリポジトリのクローンを作成したときに Git がローカルでチェックアウトする最初のブランチでもあります。 {% data reusables.branches.default-branch-automatically-base-branch %}

既定では、すべての新しいリポジトリの既定のブランチに、{% data variables.product.product_name %} によっては `main` という名前が設定されます。

{% data reusables.branches.set-default-branch %}

{% data reusables.branches.set-default-branch %}

## ブランチを使用する

作業が満足できる状態になったら、pull request を開いて、現在のブランチ (*ヘッド* ブランチ) の変更を別のブランチ (*ベース* ブランチ) にマージできます。 詳細については、「[pull request について](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)」を参照してください。

プルリクエストがマージまたはクローズされた後、head ブランチは不要になり削除できます。 ブランチを削除するには、リポジトリへの書き込みアクセスが必要です。 オープンなプルリクエストに直接関連付けられているブランチは削除できません。 詳細については、「[プル リクエスト中のブランチの削除と復元](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request)」を参照してください。

{% data reusables.pull_requests.retargeted-on-branch-deletion %}次の図は、これを示したものです。

 ここでは、他のユーザーが `main` ブランチから `feature1` という名前のブランチを作成しており、自分は `feature1` から `feature2` という名前のブランチを作成しました。 両方のブランチにオープンなプルリクエストがあります。 矢印は、各プルリクエストの現在のベースブランチを示します。 この時点で、`feature1` は `feature2` のベース ブランチになります。 ここで `feature2` に対する pull request がマージされた場合、`feature2` ブランチは `feature1` にマージされます。

 ![merge-pull-request-button](/assets/images/help/branches/pr-retargeting-diagram1.png)

次の図では、他のユーザーが `feature1` に対する pull request を `main` ブランチにマージし、`feature1` ブランチを削除しました。 その結果、`feature2` に対する pull request は {% data variables.product.prodname_dotcom %} によって自動的にターゲット変更されて、ベース ブランチが `main` になります。

 ![merge-pull-request-button](/assets/images/help/branches/pr-retargeting-diagram2.png)

ここで `feature2` の pull request をマージすると、`main` ブランチにマージされます。

## 保護されたブランチでの作業

リポジトリ管理者は、ブランチの保護を有効化できます。 保護されたブランチで作業しているなら、ブランチを削除したり、ブランチにフォースプッシュしたりすることはできません。 リポジトリ管理者は、保護されたブランチの他の設定を有効化し、ブランチがマージできるようになる前に様々なワークフローを適用できます。

{% note %}

**注:** リポジトリ管理者は、ブランチの保護で [管理者を含める] が設定されていなければ、要件を満たしていない pull request であっても、ブランチの保護が有効になっているブランチにマージできます。

{% endnote %}

pull request をマージできるかどうかを確認するには、pull request の **[会話]** タブの下部にあるマージ ボックスを確認します。詳細については、「[保護されたブランチについて](/articles/about-protected-branches)」を参照してください。

ブランチが保護されていると、以下のようになります。

- ブランチの削除やブランチへのフォースプッシュはできません。
- ブランチでステータスチェック必須が有効化されていると、必要なCIテストがすべてパスするまで、変更をブランチにマージできません。 詳細については、「[ステータスチェックについて](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)」を参照してください。
- ブランチでプルリクエストレビュー必須が有効化されている場合、プルリクエストレビューポリシー中のすべての要求が満たされるまでは、ブランチに変更をマージできません。 詳細については、「[プル リクエストをマージする](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)」を参照してください。
- ブランチでコードオーナーからの必須レビューが有効化されており、プルリクエストがオーナーを持つコードを変更している場合、コードオーナーがプルリクエストを承認しなければ、そのプルリクエストはマージできません。 詳細については、「[コードオーナーについて](/articles/about-code-owners)」を参照してください。
- ブランチでコミット署名必須が有効化されている場合、署名および検証されていないコミットはブランチにプッシュできません。 詳細については、「[コミット署名の検証について](/articles/about-commit-signature-verification)」および「[保護されたブランチについて](/github/administering-a-repository/about-protected-branches#require-signed-commits)」を参照してください。
- {% data variables.product.prodname_dotcom %} のコンフリクトエディタを使用して、保護されたブランチから作成したプルリクエストのコンフリクトを修正する場合、{% data variables.product.prodname_dotcom %} はプルリクエストの代替ブランチを作成して、コンフリクトの解決をマージできるようにします。 詳細については、「[ {% data variables.product.prodname_dotcom %} でのマージ コンフリクトを解決する](/github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-on-github)」を参照してください。

## 参考資料

- "[プル リクエストについて](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)"
- {% data variables.product.prodname_dotcom %} 用語集の "[ブランチ](/articles/github-glossary/#branch)"
- Git ドキュメントの "[Nutshell でのブランチ](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)"
