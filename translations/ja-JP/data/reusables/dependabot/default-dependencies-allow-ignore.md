---
ms.openlocfilehash: 082f3b30b23ed6c8b2a7a4261cace89e32f0a8c9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145138843"
---
デフォルトでは、マニフェストあるいはロックファイルで明示的に定義されたすべての依存関係は、最新の状態に保たれます。 `allow` と `ignore` を使用して、バージョン アップデートでどの依存関係を維持するかをカスタマイズできます。 {% data variables.product.prodname_dependabot %}は許可されたすべての依存関係をチェックし、それから無視された依存関係やバージョンをフィルタリングします。 そのため、`allow` と `ignore` の両方で一致する依存関係は無視されます。
