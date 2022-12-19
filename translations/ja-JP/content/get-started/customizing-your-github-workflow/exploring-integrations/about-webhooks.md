---
title: webhook について
redirect_from:
  - /post-receive-hooks
  - /articles/post-receive-hooks
  - /articles/creating-webhooks
  - /articles/about-webhooks
  - /github/extending-github/about-webhooks
intro: webhook は、特定のアクションがリポジトリあるいは Organization で生じたときに外部の Web サーバーへ通知を配信する方法を提供します。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 30232a560237d473f17ec01d6451cb25195521fc
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880614'
---
{% tip %}

**ヒント:** {% data reusables.organizations.owners-and-admins-can %} は、組織の Webhook を管理します。 {% data reusables.organizations.new-org-permissions-more-info %}

{% endtip %}

webhook は、リポジトリあるいは Organization にさまざまなアクションが行われたときに動作します。 たとえば以下のような場合に動作するよう webhook を設定できます:

* リポジトリへのプッシュ
* プルリクエストのオープン
* {% data variables.product.prodname_pages %}サイトの構築
* Team への新しいメンバーの追加

{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API を使用すると、これらの Webhook で外部のイシュー トラッカーを更新したり、CI ビルドをトリガーしたり、バックアップ ミラーを更新したり、運用サーバーに展開したりできます。

新しい webhook をセットアップするには、外部サーバーにアクセスでき、関連する技術的な手順に精通している必要があります。 関連付けることができるアクションの完全な一覧など、Webhook の構築に関するヘルプについては、「[Webhook](/webhooks)」を参照してください。
