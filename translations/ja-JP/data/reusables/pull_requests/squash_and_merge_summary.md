---
ms.openlocfilehash: c7eea7975ef49a5a6e3deed2ade3cb6bb5543ac0
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145118526"
---
{% data variables.product.product_location %} の pull request で **[スカッシュしてマージ]** オプションを選択すると、その pull request のコミットは 1 つのコミットにスカッシュされます。 トピックブランチからコントリビュータの個々のコミットをすべて見る代わりに、コミットは１つのコミットにまとめられ、デフォルトブランチにマージされます。 スカッシュされたコミットを含む pull request は、[早送りオプション](https://git-scm.com/docs/git-merge#_fast_forward_merge)を使用してマージされます。

pull request をスカッシュしてマージするには、リポジトリに[書き込みアクセス許可](/articles/repository-permission-levels-for-an-organization/)が必要であり、リポジトリで[スカッシュ マージが許可](/articles/configuring-commit-squashing-for-pull-requests/)されている必要があります。

![commit-squashing-diagram](/assets/images/help/pull_requests/commit-squashing-diagram.png)

squashとマージは、よりスムーズなGitの履歴をリポジトリに作り出すために利用できます。 作業途中でのコミットは、フィーチャブランチで作業しているときには役立ちますが、必ずしもGitの履歴に残すほど重要とはかぎりません。 デフォルトブランチへのマージに際してそれらのコミットを１つのコミットにsquashすれば、明快なGitの履歴と共にオリジナルの変更を残しておけます。
