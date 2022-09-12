---
ms.openlocfilehash: 81a94e9dce7fe1354dc1a32f0540ef90a4fe8dcb
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "145118389"
---
同じ名前で複数の環境変数が定義されている場合、{% data variables.product.prodname_dotcom %}は最も具体的な環境変数を使用します。 たとえば、ステップ中で定義された環境変数は、ジョブやワークフローの同じ名前の変数をステップの実行の間オーバーライドします。 ジョブで定義された変数は、そのジョブの実行の間はワークフローで定義された同じ名前の変数をオーバーライドします。
