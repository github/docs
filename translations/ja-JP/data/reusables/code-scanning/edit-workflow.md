---
ms.openlocfilehash: a697342c2435c479a3309cfb4619c15d4521098e
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/11/2022
ms.locfileid: "148161228"
---
通常、{% data variables.product.prodname_code_scanning %} のデフォルトのワークフローを編集する必要はありません。 ただし、必要な場合にはワークフローを編集して設定の一部をカスタマイズできます。 たとえば、{% data variables.product.prodname_dotcom %} の {% data variables.code-scanning.codeql_workflow %}を編集すると、スキャンの頻度、スキャンする言語やディレクトリ、{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} を使ったコード内での検索対象を指定できます。 コードのコンパイルに特定のコマンド セットを使う場合にも、{% data variables.code-scanning.codeql_workflow %}の編集が必要となる場合があります。
