---
title: クエリ パラメーターを使って pull request を作成する
intro: クエリ パラメーターを使ってカスタム URL を作成し、事前に設定されたフィールドで pull request を開きます。
redirect_from:
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/using-query-parameters-to-create-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 89ca4b13ff6291f7b4449d25b3daa911734a22b9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145139588'
---
クエリ パラメーターを使うと、pull request をオープンできます。 クエリ パラメーターは、カスタマイズ可能な URL のオプション部分で、{% data variables.product.prodname_dotcom %} での検索フィルターの結果や pull request テンプレートなど、特定の Web ページ レビューを共有できます。 独自のクエリパラメータを作成するには、キーと値のペアをマッチさせなければなりません。

{% tip %}

**ヒント:** 既定のラベル、担当者、pull request タイトルでオープンできる pull request テンプレートも作成できます。 詳細については、「[テンプレートを使用して便利な issue や pull request を促進する](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)」を参照してください。

{% endtip %}

クエリパラメータを使うには、同等のアクションを行うための適切な権限を持っていなければなりません。 たとえば、`labels` クエリ パラメーターを使うには、pull request にラベルを追加する権限を持っている必要があります。 詳細については、「[Organization のリポジトリ ロール](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)」を参照してください。

クエリ パラメーターを使用して無効な URL を作成した場合、または適切なアクセス許可を持っていない場合は、URL から `404 Not Found` エラー ページが返されます。 サーバーの制限を超える URL を作成すると、URL から `414 URI Too Long` エラー ページが返されます。

Query parameter (クエリ パラメーター) | 例
---  | ---
`quick_pull` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1` を使うと、ベース ブランチ `main` とヘッド ブランチ `my-branch` を比較する pull request が作成されます。 `quick_pull=1` クエリを実行すると、[Pull request のオープン] ページに直接移動します。
`title` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&labels=bug&title=Bug+fix+report` を使うと、「bug」というラベルと「Bug fix」というタイトルの pull request が作成されます。
`body` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&title=Bug+fix&body=Describe+the+fix.` を使うと、「Bug fix」というタイトルと、pull request 本文に 「Describe the fix」というコメントがある pull request が作成されます。
`labels` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&labels=help+wanted,bug` を使うと、「help wanted」と「bug」というラベルの pull request が作成されます。
`milestone` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&milestone=testing+milestones` を使うと、「testing milestones」というマイルストーンが設定された pull request が作成されます。
`assignees` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&assignees=octocat` を使うと、pull request が作成されて @octocat に割り当てられます。
`projects` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&title=Bug+fix&projects=octo-org/1` を使うと、「Bug fix」というタイトルの pull request が作成されて Organization のプロジェクト ボード 1 に追加されます。
`template` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&template=issue_template.md` を使うと、pull request 本文にテンプレートが設定された pull request が作成されます。 `template` クエリ パラメーターは、リポジトリのルート ディレクトリ、`docs/` ディレクトリ、または `.github/` ディレクトリ内にある `PULL_REQUEST_TEMPLATE` サブディレクトリに保存されているテンプレートで動作します。 詳細については、「[テンプレートを使用して便利な issue や pull request を促進する](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)」を参照してください。
