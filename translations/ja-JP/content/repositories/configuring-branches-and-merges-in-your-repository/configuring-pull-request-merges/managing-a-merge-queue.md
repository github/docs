---
title: マージキューの管理
intro: リポジトリ内の pull request のマージ キューを使って、開発速度を向上させることができます。
versions:
  fpt: '*'
  ghec: '*'
permissions: People with admin permissions can manage merge queues for pull requests targeting selected branches of a repository.
topics:
  - Repositories
  - Pull requests
shortTitle: Managing merge queue
redirect_from:
  - /repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/using-a-merge-queue
ms.openlocfilehash: 2cdbbdc72dde5c9970d49f7060e5cb583b6dd1dd
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147496491'
---
{% data reusables.pull_requests.merge-queue-beta %}

## マージ キューについて

{% data reusables.pull_requests.merge-queue-overview %}

pull request 変更の有効性を検証する特別なプレフィックスを付け、一時的なブランチがマージキューによって作成されます。 次に、pull request の変更は、`base_branch` の最新バージョンとキューでそれに先行する変更と共に、`merge_group` にグループ化されます。 {% data variables.product.product_name %} では、`base_branch` のブランチに必須のチェックで合格すると、これらの変更がすべてマージし、`base_branch` が作られます。


マージ方法について詳しくは、「[pull request のマージについて](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)」を参照してください。

{% note %}

**注:**

* マージキューは、ブランチ名パターンにワイルドカード文字 (`*`) を使用するブランチ保護ルールで有効にできません。

{% endnote %}

{% data reusables.pull_requests.merge-queue-reject %}

### {% data variables.product.prodname_actions %} を使ってマージ グループのチェックをトリガーする

`merge_group` イベントを使って、pull request がマージ キューに追加されたときに {% data variables.product.prodname_actions %} ワークフローをトリガーできます。 これは `pull_request` イベントや `push` イベントとは異なるイベントであることに注意してください。

ターゲット ブランチの保護で必要なチェックを報告するワークフローは、次のようになります。

```yaml
on:
  pull_request:
  merge_group:
```

詳細については、「[ワークフローをトリガーするイベント](/actions/using-workflows/events-that-trigger-workflows#merge-group)」を参照してください。

### 他の CI プロバイダーを使ってマージ グループのチェックをトリガーする

他の CI プロバイダーを使う場合、特別なプレフィックス `gh-readonly-queue/{base_branch}` で始まるブランチが作成されたときに実行するように CI 構成を更新する必要がある場合があります。

## マージキューの管理

リポジトリ管理者は、ベースブランチの保護ルールで「マージキューを必須にする」ブランチ保護設定を有効にし、マージを必須にできます。

マージキュー保護設定を有効にする方法については、「[ブランチ保護ルールの管理](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule#creating-a-branch-protection-rule)」を参照してください。

## 参考資料

* 「[pull request とマージキューのマージ](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request-with-a-merge-queue)」
* 「[About protected branches](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)」 (保護されたブランチについて)
