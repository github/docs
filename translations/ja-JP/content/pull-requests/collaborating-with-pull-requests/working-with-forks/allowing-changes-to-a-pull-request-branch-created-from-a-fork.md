---
title: フォークから作成されたプルリクエストのブランチへの変更の許可
intro: コラボレーションを強化するために、個人アカウントが所有するフォークから作成したブランチでのコミットを許可できます。
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork
  - /articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork
  - /github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork
  - /github/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork
permissions: People with push access to the upstream repository of a fork owned by a personal account can commit to the forked branches.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Allow changes to a branch
ms.openlocfilehash: 26255f5aeab3bcaa5ecc1aa6cf865981990c456a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145139179'
---
プルリクエストの作者だけが、上流のリポジトリメンテナ、あるいは上流のリポジトリへのプッシュアクセスを持っている人に対し、ユーザ所有のフォークでプルリクエストの比較ブランチにコミットする権限を与えることができます。 アップストリーム リポジトリの詳細については、「[フォークについて](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)」を参照してください。

プルリクエストの作者は、ユーザが所有するフォークからプルリクエストを最初に作成するとき、またはプルリクエストを作成した後に、これらの権限を与えることができます。 詳細については、「[フォークからプルリクエストを作成する](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)」を参照してください。

最初にフォークからプルリクエストを作成する時に、コミットの権限を設定できます。 詳細については、「[フォークからプルリクエストを作成する](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)」を参照してください。 加えて、既存のプルリクエストを変更して、リポジトリメンテナがそのブランチにコミットできるようにすることもできます。

## 既存のプルリクエストへのリポジトリメンテナの権限の有効化

1. {% data variables.product.product_name %}で、プルリクエストの上流リポジトリのメインページにアクセスします。
2. アップストリーム リポジトリ名の下にある {% octicon "git-pull-request" aria-label="The pull request icon" %} **[プルリクエスト]** をクリックします。
![[Issue] および [プルリクエスト] タブの選択](/assets/images/help/repository/repo-tabs-pull-requests.png)
3. プルリクエストのリストの中で、コミットを許可するプルリクエストを見つけます。
{% data reusables.repositories.allow-maintainers-user-forks %}

  ![メンテナに変更を許可するサイドバーのチェックボックス](/assets/images/help/pull_requests/allow-maintainers-to-make-edits-sidebar-checkbox.png)

## 参考資料

- 「[フォークから作成された pull request のブランチへの変更をコミットする](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork)」
