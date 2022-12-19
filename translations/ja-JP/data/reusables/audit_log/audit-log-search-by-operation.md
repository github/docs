---
ms.openlocfilehash: 3492de2cd163b4bbb59b912c17d152b7d2af5c68
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145113750"
---
### 操作に基づく検索

`operation` 修飾子は、アクションを特定の操作の種類に限定するときに使ってください。 たとえば次のような点です。

  * `operation:access` は、リソースがアクセスされたすべてのイベントを検索します。
  * `operation:authentication` は、認証イベントが実行されたすべてのイベントを検索します。
  * `operation:create` は、リソースが作成されたすべてのイベントを検索します。
  * `operation:modify` は、既存のリソースが変更されたすべてのイベントを検索します。
  * `operation:remove` は、既存のリソースが削除されたすべてのイベントを検索します。
  * `operation:restore` は、既存のリソースが復元されたすべてのイベントを検索します。
  * `operation:transfer` は、既存のリソースが移動されたすべてのイベントを検索します。
