---
title: プルリクエスト ブランチを更新する提案の管理
intro: ベース ブランチで最新ではない場合に、ユーザーが pull request ブランチを常に更新できるようにすることができます。
versions:
  fpt: '*'
  ghes: '> 3.4'
  ghae: '>= 3.5'
  ghec: '*'
topics:
  - Repositories
shortTitle: Manage branch updates
permissions: People with maintainer permissions can enable or disable the setting to suggest updating pull request branches.
ms.openlocfilehash: a29e2e9d11b24287cdad71b71f617a58e64df297
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578611'
---
## プルリクエスト ブランチを更新する提案について

リポジトリ内のプルリクエスト ブランチの更新を常に提案する設定を有効にした場合、書き込みアクセス許可を持つユーザーは、基本ブランチの最新情報が適用されていない場合に、プルリクエスト ページでプルリクエストのヘッド ブランチを更新することができます。 有効でない場合は、基本ブランチでマージ前にブランチを最新の状態にすることを要求していて、ブランチが最新でない場合にのみ更新できます。 詳細については、「[Keeping your pull request in sync with the base branch (プルリクエスト を基本ブランチと同期された状態に維持する)](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/keeping-your-pull-request-in-sync-with-the-base-branch)」を参照してください。

{% data reusables.enterprise.3-5-missing-feature %}

## プルリクエスト ブランチを更新するための提案の管理

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. [プルリクエスト] で、 **[プルリクエスト ブランチの更新を常に推奨する]** を選択または選択解除します。
  ![ブランチの更新を常に提案することを有効または無効にするチェックボックス](/assets/images/help/repository/always-suggest-updating-branches.png)
