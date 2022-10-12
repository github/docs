---
ms.openlocfilehash: bae5803eba7e297fdf2c915f1e08f1e124ed7011
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "147428308"
---
リポジトリを作成することも、自分のサイト用の既存のリポジトリを選ぶこともできます。

リポジトリに対して {% data variables.product.prodname_pages %} サイトを作成したい場合、そのリポジトリ内のすべてのファイルがサイトに関連付けられるわけではないのなら、そのサイトに対して公開元を構成することができます。 たとえば、自分のサイト ソース ファイル {% ifversion pages-custom-workflow %} を保持する専用のブランチおよびフォルダーを用意したり、カスタムの {% data variables.product.prodname_actions %} ワークフローを使用してサイト ソース ファイルをビルドして展開したりできます{% endif %}。

{% ifversion fpt or ghec %}リポジトリを所有しているアカウントが {% data variables.product.prodname_free_user %} または Organization 用の {% data variables.product.prodname_free_team %} を使用している場合、そのリポジトリはパブリックである必要があります。{% endif %}

既存のリポジトリにサイトを作成する場合は、「[サイトを作成する](#creating-your-site)」セクションに進んでください。
