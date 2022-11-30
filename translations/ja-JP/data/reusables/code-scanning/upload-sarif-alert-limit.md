---
ms.openlocfilehash: 0b7740ddd22bccfe9899f98ac44af4d4b94b4ed4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145115494"
---
{% note %}

**注:** 
- SARIF アップロードでは、アップロードごとに最大 5,000 件の結果がサポートされます。 この制限を超える結果はすべて無視されます。 ツールで生成される結果が多すぎる場合は、最も重要なルールまたはクエリの結果に焦点を当てるように構成を更新する必要があります。

 - SARIF アップロードでサポートされる `gzip` 圧縮の SARIF ファイルの最大サイズは、アップロードごとに 10 MB となります。 この制限を超えるアップロードはすべて拒否されます。 含まれる結果が多すぎるために SARIF ファイルが大きくなりすぎた場合は、最も重要なルールまたはクエリの結果に焦点を当てるように構成を更新する必要があります。

{% endnote %}
