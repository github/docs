---
ms.openlocfilehash: da828b3b969dfc24b1f71400f336cccfa1f4d004
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145123861"
---
以下のURLのいずれかをチェックするようにロードバランサを設定してください。
 - `https://HOSTNAME/status` HTTPS が有効な場合 (既定)
 - `http://HOSTNAME/status` HTTPS が無効な場合

ノードが正常でエンドユーザーからの要求に応えられる場合、このチェックによって状態コード `200` (OK) が返されます。
