---
ms.openlocfilehash: 059e56c6821926e1d6a604c95dd1fa167de2db6a
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "145131868"
---
# REST

`/content/rest` ディレクトリは、GitHub REST API ドキュメントが保存されている場所です。

* `/content/rest/guides` と `/content/rest/overview` のディレクトリには、通常の記事が含まれています。 これらは人間が判読できる記事です。
* `/content/rest/reference` ディレクトリには、GitHub REST API の各エンドポイント グループについての記事があります。 このディレクトリ内のコンテンツのほとんどは、`include` タグを使ってレンダリングされます。

  `include` タグによってレンダリングされるコンテンツは、`/lib/rest/static` ディレクトリから取得され、これは GitHub で内部的に API ソース コードから自動的に生成されます。ユーザーは編集しないでください。 詳細については、[`/lib/rest/README.md`](/lib/rest/README.md) を参照してください。

  **`include` タグによってレンダリングされたコンテンツへの変更は受け入れられません。ただし、表示させたい変更を記述した issue をオープンすることはできます。**
