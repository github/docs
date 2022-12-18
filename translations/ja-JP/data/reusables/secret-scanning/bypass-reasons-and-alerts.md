---
ms.openlocfilehash: eb4b729cf490728306961ff3d2ef2835700c8735
ms.sourcegitcommit: 80edcdbff4726de4d196584fcb603bca2efffd1f
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/24/2022
ms.locfileid: "148181806"
---
次の表は、ユーザーがプッシュ保護ブロックをバイパスする方法ごとのアラートの動作を示しています。

| バイパスの理由         | アラート動作                                              |
|-----------------------|------------------------------------------------------|
| It's used in tests (テストで使用)    | {% data variables.product.prodname_dotcom %} は、"テストで使用" として解決されたクローズしたアラートを作成します  |
| It's a false positive (偽陽性) | {% data variables.product.prodname_dotcom %} は、"偽陽性" として解決されたクローズしたアラートを作成します |
| I'll fix it later (後で修正)     | {% data variables.product.prodname_dotcom %} は、オープンなアラートを作成します                                |