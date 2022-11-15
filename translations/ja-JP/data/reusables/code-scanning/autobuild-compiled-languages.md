---
ms.openlocfilehash: 982b04961e4f780a5f1e284dad5620157f68569b
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/11/2022
ms.locfileid: "148161063"
---
サポートされているコンパイル言語の場合、{% data variables.code-scanning.codeql_workflow %}の `autobuild` アクションを使ってコードをビルドできます。 これにより、C/C++、C#、{% ifversion codeql-go-autobuild %}Go、{% endif %}および Java の明示的なビルド コマンドを指定する必要がなくなります。