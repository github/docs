---
ms.openlocfilehash: 33f427d38193ad14c5df35ebab14bd08208c08e0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109515"
---
リポジトリを作成することも、自分のサイト用の既存のリポジトリを選ぶこともできます。

リポジトリに対して {% data variables.product.prodname_pages %} サイトを作成したい場合、そのリポジトリ内のすべてのファイルがサイトに関連付けられるわけではないのなら、そのサイトに対して公開元を構成することができます。 たとえば、専用のブランチおよびフォルダーを用意して自分のサイト ソース {% ifversion pages-custom-workflow %}ファイルを保持したり、カスタムの {% data variables.product.prodname_actions %} ワークフローを使用してサイト ソース ファイルをビルドして展開したりできます。 {% data reusables.actions.settings-ui.settings-actions-pages-custom-workflow %}{% else %}ファイルを保持できます。{% endif %}

{% ifversion fpt or ghec %}リポジトリを所有しているアカウントが {% data variables.product.prodname_free_user %} または Organization 用の {% data variables.product.prodname_free_team %} を使用している場合、そのリポジトリはパブリックである必要があります。{% endif %}

 既存のリポジトリにサイトを作成する場合は、「[サイトを作成する](#creating-your-site)」セクションに進んでください。