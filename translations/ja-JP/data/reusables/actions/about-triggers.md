---
ms.openlocfilehash: 27c764ba249fba171877221492b486d59bde7230
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145114886"
---
ワークフロー トリガーは、ワークフローの実行を引き起こすイベントです。 次のようなイベントがあります。

- ワークフローのリポジトリ内で発生するイベント
- {% data variables.product.product_name %} の外部で発生し、{% data variables.product.product_name %} で `repository_dispatch` イベントをトリガーするイベント
- スケジュールされた時刻
- マニュアル

たとえば、リポジトリの既定のブランチに対してプッシュが行われたときや、リリースが作成されたとき、またはイシューが開かれたときに実行するようにワークフローを構成できます。
