---
title: Wiki へのアクセス権限の変更
intro: '既定では、{% ifversion fpt or ghec or ghes %}パブリック {% endif %}リポジトリの Wiki を編集できるのはリポジトリ コラボレーターだけですが、{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} のアカウントを持つすべてのユーザーにあなたの Wiki の編集を許可できます。'
product: '{% data reusables.gated-features.wikis %}'
redirect_from:
  - /articles/changing-access-permissions-for-wikis
  - /github/building-a-strong-community/changing-access-permissions-for-wikis
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Change access permissions
ms.openlocfilehash: 51a9ec690f0bdad1be302592091565b65e5f9b9b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145090334'
---
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. [機能] で、 **[編集をコラボレーターのみに制限する]** の選択を解除します。
   ![Wiki の編集制限](/assets/images/help/wiki/wiki_restrict_editing.png)

## 参考資料

- 「[Wiki を無効化する](/communities/documenting-your-project-with-wikis/disabling-wikis)」
