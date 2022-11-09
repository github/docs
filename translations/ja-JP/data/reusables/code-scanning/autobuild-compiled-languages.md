---
ms.openlocfilehash: ac8f5fdb0d982d1c9427a99719e4f2bdf50ba56b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109235"
---
サポートされているコンパイル言語の場合、{% data variables.product.prodname_codeql_workflow %} の `autobuild` アクションを使用してコードをビルドできます。 これにより、C/C++、C#、{% ifversion codeql-go-autobuild %}Go、{% endif %}および Java の明示的なビルド コマンドを指定する必要がなくなります。