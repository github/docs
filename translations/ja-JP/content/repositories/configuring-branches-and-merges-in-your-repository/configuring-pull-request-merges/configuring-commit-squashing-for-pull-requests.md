---
title: プルリクエストにコミットの squash を設定する
intro: 'リポジトリで、{% data variables.product.product_location %} でのすべてのプルリクエストマージについて、コミットの squash を強制、許可、または無効にできます。'
redirect_from:
  - /articles/configuring-commit-squashing-for-pull-requests
  - /github/administering-a-repository/configuring-commit-squashing-for-pull-requests
  - /github/administering-a-repository/configuring-pull-request-merges/configuring-commit-squashing-for-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Configure commit squashing
ms.openlocfilehash: 8d53a558163b6a847fa4fb509399b1e7b7c6c05c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147580712'
---
{% data reusables.pull_requests.configure_pull_request_merges_intro %}

{% data reusables.pull_requests.default-commit-message-squash-merge %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. {% ifversion fpt or ghec or ghes > 3.5 or ghae-issue-6069 %}[pull request]{% else %}[Merge button]\(マージ ボタン\){% endif %} の下にある **[Allow squash merging]\(スカッシュ マージを許可する\)** を選びます。 これにより、コントリビューターが全てのコミットを 1 つのコミットに squash してプルリクエストをマージできるようになります。 マージ時に共同作成者に表示される既定のコミット メッセージは、pull request に含まれるコミットが 1 つのみの場合はコミットのタイトルとメッセージ、pull request に含まれるコミットが 2 つ以上の場合は pull request のタイトルとコミットの一覧です。 {% ifversion ghes = 3.6 %}pull request 内のコミット数に関係なく常に pull request のタイトルを使うには、 **[Default to PR title for squash merge commits]\(スカッシュ マージ コミットの既定値を PR のタイトルにする\)** を選びます。{% endif %}{% ifversion default-merge-squash-commit-message %}![pull request のスカッシュされたコミット](/assets/images/help/repository/allow-squash-merging.png){% endif %}{% ifversion ghes = 3.6 %}![マージ コミットを許可するチェックボックスが強調された [pull request] 設定のスクリーンショット](/assets/images/help/repository/allow-squash-merging-no-dropdown.png){% endif %} {% ifversion ghes < 3.6  %}![pull request のスカッシュされたコミット](/assets/images/enterprise/3.5/repository/pr-merge-squash.png){% endif %} {% ifversion default-merge-squash-commit-message %}
1. 必要に応じて、 **[Allow squash merging]\(スカッシュ マージを許可する\)** の下にあるドロップダウンを使って、マージ時に共同作成者に表示する既定のスカッシュ コミット メッセージの形式を選びます。 既定のメッセージには、pull request に含まれるコミットが 1 つのみの場合はコミットのタイトルとメッセージ、pull request に含まれるコミットが 2 つ以上の場合は pull request のタイトルとコミットの一覧が使われます。 また、pull request のタイトルのみ、pull request のタイトルとコミットの詳細、pull request のタイトルと説明を使うこともできます。
![強調表示された既定のスカッシュ メッセージ ドロップダウンのスクリーンショット](/assets/images/help/repository/default-squash-message-dropdown.png) {% endif %}

複数のマージ方法を選んだ場合、コラボレーターは pull request をマージするときに使用するマージコミットの種類を選べます。 {% data reusables.repositories.squash-and-rebase-linear-commit-history %}

## 参考資料

- "[pull request のマージについて](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)"
- 「[pull request のマージ](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)」
