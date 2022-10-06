---
title: Pull Request を打ち消す
intro: Pull Request は上流ブランチへのマージ後に元に戻すことができます。
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/reverting-a-pull-request
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/reverting-a-pull-request
  - /articles/reverting-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/reverting-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 9e94b6e9358089da8f62ff5152800e14556db3e7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145139660'
---
## プルリクエストの打ち消しについて

{% data variables.product.product_name %} で pull request を打ち消すと、マージされた元の pull request からマージ コミットを 1 回元に戻した、新しい pull request が作成されます。 pull request を元に戻すには、リポジトリの[書き込みアクセス許可](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)が必要です。 

## Pull Request を打ち消す

{% note %}

**注釈:** 次のいずれかに該当する場合、pull request の個々のコミットを元に戻す必要がある場合があります。

- Pull Request を打ち消すとマージコンフリクトが起こる
- 元のプルリクエストが {% data variables.product.product_name %} でマージされていなかった場合。 たとえば、コマンドラインで fast-forward マージを使用してプルリクエストをマージした可能性があります。

Git を使用して個々のコミットを手動で元に戻す方法については、Git ドキュメントの [Git で元に戻す](https://git-scm.com/docs/git-revert.html)方法に関するページを参照してください。

{% endnote %}

{% data reusables.repositories.sidebar-pr %}
2. [Pull Requests] のリストで、打ち消す Pull Request をクリックします。
3. その pull request の下部周辺で、 **[元に戻す]** をクリックします。 **[元に戻す]** オプションが表示されていない場合、リポジトリの管理者に書き込みアクセス許可を求める必要があります。
  ![[Revert pull request]](/assets/images/help/pull_requests/revert-pull-request-link.png) リンク
4. 結果の Pull Request をマージします。 詳細については、[pull request のマージ](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)に関するページを参照してください。
