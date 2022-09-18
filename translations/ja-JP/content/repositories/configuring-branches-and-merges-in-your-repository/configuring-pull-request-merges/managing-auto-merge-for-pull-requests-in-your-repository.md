---
title: リポジトリ内のプルリクエストの自動マージを管理する
intro: リポジトリ内のプルリクエストの自動マージを許可または禁止できます。
product: '{% data reusables.gated-features.auto-merge %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
permissions: People with maintainer permissions can manage auto-merge for pull requests in a repository.
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository
  - /github/administering-a-repository/configuring-pull-request-merges/managing-auto-merge-for-pull-requests-in-your-repository
shortTitle: Manage auto merge
ms.openlocfilehash: 4d0f0d465ea3c8551dc909d56620a06ee9864c1c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883442'
---
## 自動マージについて

リポジトリ内でプルリクエストの自動マージを許可すると、書き込み権限を持つユーザは、マージの要件がすべて満たされた際に、リポジトリ内の個々のプルリクエストを、自動的にマージするよう設定できます。 書き込みアクセス許可を持たないユーザーが、自動マージが有効になっている pull request に変更をプッシュすると、その pull request の自動マージは無効になります。 詳細については、「[pull request を自動的にマージする](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request)」を参照してください。

## 自動マージを管理する

{% data reusables.pull_requests.auto-merge-requires-branch-protection %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}[プルリクエスト]{% else %}[マージ] ボタン{% endif %} で、 **[自動マージを許可]** を選択または選択解除します。
  ![自動マージを許可または禁止するチェックボックス](/assets/images/help/pull_requests/allow-auto-merge-checkbox.png)
