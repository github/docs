---
ms.openlocfilehash: eb37bb6abd26f8638202d7779b1919c4beda1d02
ms.sourcegitcommit: 96bbb6b8f3c9172209d80cb1502017ace3019807
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879598"
---
クエリが将来の分析に含まれ続けるかに影響することがあるので、ドロップダウンメニューから適切な理由を選択することは重要です。 {% ifversion comment-dismissed-code-scanning-alert %}必要に応じて、無視にコメントを付けて、アラートを無視するコンテキストを記録できます。 無視のコメントはアラート タイムラインに追加され、監査と報告の間に正当な理由として使用できます。 コード スキャン REST API を使用して、コメントを取得または設定できます。 コメントは、`alerts/{alert_number}` エンドポイントの `dismissed_comment` に含まれます。 詳細については、[コード スキャン](/rest/code-scanning#update-a-code-scanning-alert)に関するページを参照してください。
{% endif %}
