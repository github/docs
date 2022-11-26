---
ms.openlocfilehash: 255dcb0346e9413e32492c34a7724df6284cd325
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "146455742"
---
{% data variables.product.prodname_GH_advanced_security %} の優先順位を付けるリポジトリと Organization を決定するときは、それらを確認して次のことを特定する必要があります。

- 会社の成功にとって最も重要なコードベース。 これらは、脆弱性のあるコード、ハードコーディングされたシークレット、または安全でない依存関係が導入された場合、会社に最も大きな影響を及ぼすプロジェクトです。
- コミット頻度が最も高いコードベース。 これらは最も積極的に開発されたプロジェクトであるため、セキュリティの問題が発生するリスクが高くなります。

これらの組織またはリポジトリに対して {% data variables.product.prodname_GH_advanced_security %} を有効にした場合は、一意のコミッターに対する課金を発生させることなく、追加できるその他のコードベースを評価します。 最後に、残りの重要でビジーなコードベースを確認します。 {% ifversion fpt or ghes or ghec %}ライセンスのシート数を増やす場合は、{% data variables.contact.contact_enterprise_sales %} にお問い合わせください。{% endif %}
