---
title: プルリクエストにコミットのリベースを設定する
intro: 'リポジトリで、{% data variables.product.product_location %} でのすべてのプルリクエストマージについて、コミットのリベースを強制、許可、または無効にできます。'
redirect_from:
  - /articles/configuring-commit-rebasing-for-pull-requests
  - /github/administering-a-repository/configuring-commit-rebasing-for-pull-requests
  - /github/administering-a-repository/configuring-pull-request-merges/configuring-commit-rebasing-for-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Configure commit rebasing
ms.openlocfilehash: e2614349b5baab9be33d1fe6d80a99a78811d8df
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147580528'
---
{% data reusables.pull_requests.configure_pull_request_merges_intro %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. {% ifversion fpt or ghec or ghes > 3.5 or ghae-issue-6069 %}[pull request]{% else %}[Merge button]\(マージ ボタン\){% endif %} の下にある **[Allow rebase merging]\(リベース マージを許可する\)** を選びます。 これにより、コントリビューターが個々のコミットをベースブランチにリベースすることでプルリクエストをマージできるようになります。 
{% ifversion default-merge-squash-commit-message %}![リベース マージを許可するチェックボックスが強調表示されている [pull request] 設定のスクリーンショット](/assets/images/help/repository/allow-rebase-merging.png){% endif %}{% ifversion ghes = 3.6  %}![リベース マージを許可するチェックボックスが強調表示されている [pull request] 設定のスクリーンショット](/assets/images/help/repository/allow-rebase-merging-no-dropdown.png){% endif %} {% ifversion ghes < 3.6  %}![pull request のリベースされたコミット](/assets/images/help/repository/pr-merge-rebase.png){% endif %}

ここで他のマージ方法も選択した場合、コラボレーターはプルリクエストをマージする時にコミットのマージ方法を選択できます。 {% data reusables.repositories.squash-and-rebase-linear-commit-history %}
