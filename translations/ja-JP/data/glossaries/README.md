---
ms.openlocfilehash: 6d982c0371125b4bf2536b0f7840abe05281db2d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145068285"
---
# 用語集

[Crowdin の用語集](https://support.crowdin.com/glossary/)は以下のファイルから構成されます。

* `external.yml` には、顧客向けの用語集のエントリが含まれています。
  * `external.yml` 内の文字列では Liquid 条件文がサポートされています。 [contributing/liquid-helpers.md](/contributing/liquid-helpers.md) を参照してください。
* `internal.yml` には、翻訳者だけが使用するエントリが含まれています。 これらの用語はCrowdinのUIに表示され、翻訳者に対して翻訳しているものに関する追加の文脈と、その後に対するローカライズされた文字列の提案を提供します。
* `candidates.yml` には、内部的あるいは外部的な用語集に含まれるべきではあるものの、まだ定義されていない用語が含まれています。
