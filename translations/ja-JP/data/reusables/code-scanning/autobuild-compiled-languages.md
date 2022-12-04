---
ms.openlocfilehash: 81bb084ee5dcb540c77b4a7b55c67890bab2d47a
ms.sourcegitcommit: dac72908e8660cb4a347fbf73beab61034eed8c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/25/2022
ms.locfileid: "148182291"
---
サポートされているコンパイル言語の場合、{% data variables.code-scanning.codeql_workflow %}の `autobuild` アクションを使ってコードをビルドできます。 これにより、C/C++、C#、{% ifversion codeql-go-autobuild %}Go、{% endif %}{% ifversion codeql-kotlin-beta %}Kotlin、{% endif %}Java の明示的なビルド コマンドを指定する必要がなくなります。