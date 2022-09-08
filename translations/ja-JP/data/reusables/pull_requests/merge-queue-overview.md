---
ms.openlocfilehash: 9960ade469b1d52c0f880067e4dd449082b190c6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145090897"
---
マージ キューを使用すると、必要なすべてのブランチ保護チェックに合格することを保証しつつ、pull request がビジー状態のターゲット ブランチにマージされる速度を上げることができます。

pull request が必要なすべてのブランチ保護チェックに合格すると、リポジトリへの書き込みアクセス権を持つユーザーは、その pull request をマージ キューに追加できます。

マージ キューでは、{% data variables.product.prodname_actions %} を使用できます。 詳細については、「[{% data variables.product.prodname_actions %}](/actions/)」を参照してください。
