---
ms.openlocfilehash: d4d496d4b5c45f557d80aace29013b3b32e478c6
ms.sourcegitcommit: dac72908e8660cb4a347fbf73beab61034eed8c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/25/2022
ms.locfileid: "148182275"
---
`autobuild` が失敗した場合、または `autobuild` プロセスによってビルドされたものとは異なるソース ファイルのセットを分析する場合は、ワークフローから `autobuild` ステップを削除し、ビルド ステップを手動で追加する必要があります。 C/C++、C#、Go、{% ifversion codeql-kotlin-beta %}Kotlin、{% endif %}Java プロジェクトの場合、{% data variables.product.prodname_codeql %} では、指定したビルド ステップによってビルドされたソース コードを分析します。

