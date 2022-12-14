---
ms.openlocfilehash: 6f389970efe1285e45a27f7e55a9b34672ed53e4
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: "148193591"
---
{% ifversion ghes = 3.5 or ghes = 3.6 or ghes = 3.7 or ghes = 3.8 %}

{% note %}

{%- ifversion ghes = 3.5 or ghes = 3.6 %}

**メモ**: `http(s)://render.HOSTNAME` サブドメインは、{% data variables.product.product_name %} 3.7 以降では非推奨になりました。 3\.7 以降にアップグレードした後、置換サービス (`http(s)://notebook.HOSTNAME` と `http(s)://viewscreen.HOSTNAME`) のサブドメインが TLS 証明書の対象となっていることを確認します。

{%- elsif ghes = 3.7 or ghes = 3.8 %}

**メモ**: {% data variables.product.product_name %} 3.7 では、`http(s)://render.HOSTNAME` に置き換わって、`http(s)://notebook.HOSTNAME` または `http(s)://viewscreen.HOSTNAME` サブドメインが新しく追加されています。 3\.7 以降にアップグレードした後は、置換サービス (`http(s)://notebook.HOSTNAME` と `http(s)://viewscreen.HOSTNAME`) のサブドメインが TLS 証明書の対象となっている必要があります。

{%- endif %}

{% endnote %}

{% endif %}
