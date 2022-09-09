---
ms.openlocfilehash: d810c1d04e070750ead1b64ff62e54842a86feb1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145068057"
---
{% data variables.product.prodname_actions %}サービスが一時的に利用できなくなっている場合、ワークフローの実行はトリガーされてから30分以内にキューイングされていなければ、破棄されます。 たとえば、ワークフローがトリガーされ、そして{% data variables.product.prodname_actions %}サービスが31分以上利用できなければ、そのワークフローの実行は処理されません。
