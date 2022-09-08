---
ms.openlocfilehash: e264eacc4226a90eb80980c2b19f48dc7c1889c7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145067987"
---
ジョブにセルフホステッド ランナーを指定するには、ワークフロー ファイルでセルフホステッド ランナーのラベルを使って `runs-on` を設定します。

すべてのセルフホステッド ランナーに `self-hosted` ラベルが含まれます。 このラベルのみを使うと、セルフホステッド ランナーが選ばれます。 オペレーティング システムやアーキテクチャなど、特定の条件を満たすランナーを選ぶには、`self-hosted` で始まり (リストの最初にこれを示す必要があります)、必要に応じて追加のラベルを含むラベルの配列を指定することをお勧めします。 ラベルの配列を指定すると、指定したラベルをすべて持つランナーのキューにジョブが入れられます。

`self-hosted` ラベルは必須ではありませんが、セルフホステッド ランナーを使う場合は、自分のジョブから現在または将来の {% data variables.product.prodname_dotcom %} ホスト ランナーが意図せずに指定されないことを確実にするため、それを指定することを強くお勧めします。
