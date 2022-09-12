---
ms.openlocfilehash: 27c764ba249fba171877221492b486d59bde7230
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145114886"
---
ワークフロー トリガーは、ワークフローの実行を引き起こすイベントです。 次のようなイベントがあります。

- ワークフローのリポジトリ内で発生するイベント
- {% data variables.product.product_name %} の外部で発生し、{% data variables.product.product_name %} で `repository_dispatch` イベントをトリガーするイベント
- スケジュールされた時刻
- マニュアル

たとえば、リポジトリの既定のブランチに対してプッシュが行われたときや、リリースが作成されたとき、またはイシューが開かれたときに実行するようにワークフローを構成できます。
