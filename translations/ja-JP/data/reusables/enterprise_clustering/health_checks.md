---
ms.openlocfilehash: da828b3b969dfc24b1f71400f336cccfa1f4d004
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145123861"
---
以下のURLのいずれかをチェックするようにロードバランサを設定してください。
 - `https://HOSTNAME/status` HTTPS が有効な場合 (既定)
 - `http://HOSTNAME/status` HTTPS が無効な場合

ノードが正常でエンドユーザーからの要求に応えられる場合、このチェックによって状態コード `200` (OK) が返されます。
