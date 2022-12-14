---
ms.openlocfilehash: bdac96b27d23e6b1d65f6e513ca8b173df8a99d6
ms.sourcegitcommit: ea9a577cff7ec16ded25ed57417c83ec04816428
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 04/07/2022
ms.locfileid: "141509375"
---
## <a name="tags"></a>タグ

Git タグは [Git リファレンス](/rest/reference/git#refs)に似ていますが、これがポイントする Git コミットが変更されることはありません。 Git タグは、特定のリリースを指すときに役立ちます。 これらのエンドポイントを使用すると、{% data variables.product.product_name %} 上の Git データベースに[タグ オブジェクト](https://git-scm.com/book/en/v1/Git-Internals-Git-References#Tags)を読み書きできます。 Git タグ API では、軽量タグではなく、[注釈付きタグ オブジェクト](https://git-scm.com/book/en/v1/Git-Internals-Git-References#Tags)のみをサポートします。
