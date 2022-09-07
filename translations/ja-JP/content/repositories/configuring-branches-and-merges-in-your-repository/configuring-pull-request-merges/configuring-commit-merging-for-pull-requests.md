---
title: pull request のコミット マージを構成する
intro: 'リポジトリ内の {% data variables.product.product_location %} 上のすべての pull request マージについて、マージ コミットを使ったマージを強制、許可、または無効にすることができます。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Configure commit merging
ms.openlocfilehash: 322f74168935175a75f3a8f19cc4faca2cde174b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147580762'
---
{% data reusables.pull_requests.configure_pull_request_merges_intro %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. {% ifversion fpt or ghec or ghes > 3.5 or ghae-issue-6069 %}[pull request]{% else %}[Merge button]\(マージ ボタン\){% endif %} の下にある **[Allow merge commits]\(マージ コミットを許可する\)** を選びます。 こうすることで、共同作成者は、pull request とコミットの完全な履歴をマージすることができます。{% ifversion default-merge-squash-commit-message %}![マージ コミットを許可するチェックボックスが強調表示された [pull request] 設定のスクリーンショット](/assets/images/help/repository/allow-merge-commits.png){% endif %}{% ifversion ghes = 3.6 %}![マージ コミットを許可するチェックボックスが強調表示された [pull request] 設定のスクリーンショット](/assets/images/help/repository/allow-merge-commits-no-dropdown.png){% endif %} {% ifversion ghes < 3.6  %} ![allow_standard_merge_commits](/assets/images/help/repository/pr-merge-full-commits.png){% endif %} {% ifversion default-merge-squash-commit-message %}
1. 必要に応じて、 **[Allow merge commits]\(マージ コミットを許可する\)** の下にあるドロップダウンを使って、マージ時に共同作成者に表示するコミット メッセージの形式を選びます。 既定のメッセージには、pull request の番号とタイトルが含まれています。 たとえば、`Merge pull request #123 from patch-1` のようにします。 また、pull request のタイトルのみ、または pull request のタイトルと説明を使うこともできます。 
![既定のコミット メッセージ ドロップダウンが強調表示されたスクリーンショット](/assets/images/help/repository/default-commit-message-dropdown.png) {% endif %}

複数のマージ方法を選んだ場合、コラボレーターは pull request をマージするときに使用するマージコミットの種類を選べます。 {% data reusables.repositories.squash-and-rebase-linear-commit-history %}

## 参考資料

- "[pull request のマージについて](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)"
- 「[pull request のマージ](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)」
