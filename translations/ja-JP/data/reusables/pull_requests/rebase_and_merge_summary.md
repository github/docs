---
ms.openlocfilehash: 371057b7fbe8e92b564e8729b11442bdbf2c1a56
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "147882796"
---
{% data variables.product.product_location %} の pull request で **[リベースしてマージ]** オプションを選択すると、トピック ブランチ (またはヘッド ブランチ) からのすべてのコミットが、マージ コミットなしに個別にベース ブランチに追加されます。 このように、リベースとマージの動作は、線形プロジェクト履歴を維持することで、[早送りマージ](https://git-scm.com/docs/git-merge#_fast_forward_merge) に似ています。 しかし、リベースは、ベース ブランチのコミット履歴を新しいコミットで書き直すことでこれを実現します。

{% data variables.product.product_name %} でのリベースとマージの動作は、`git rebase` とは少し異なっています。 {% data variables.product.prodname_dotcom %} でリベースしてマージすると、常にコミッター情報が更新され、新しいコミット SHA が作成されますが、{% data variables.product.prodname_dotcom %} 外の `git rebase` は、先祖コミットの上でリベースが発生した場合、コミッター情報は変更されません。 `git rebase` の詳細については、Git ドキュメントの「[git-rebase](https://git-scm.com/docs/git-rebase)」を参照してください。

pull request をリベースしてマージするには、リポジトリに[書き込みアクセス許可](/articles/repository-permission-levels-for-an-organization/)が必要であり、リポジトリで[リベース マージが許可](/articles/configuring-commit-rebasing-for-pull-requests/)されている必要があります。

`git rebase` の視覚的表現については、[_ProGit_ ブックの「GitBranching-Rebasing」の章](https://git-scm.com/book/en/Git-Branching-Rebasing)を参照してください。
