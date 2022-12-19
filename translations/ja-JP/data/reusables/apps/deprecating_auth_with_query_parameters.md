---
ms.openlocfilehash: 1ba4f5242c21b752ac7e3bd9a424e0c8c4e96b2a
ms.sourcegitcommit: 72e1c60459a610944184ca00e3ae60bf1f5fc6db
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: "147878615"
---
{% warning %}

**非推奨の注意:** {% data variables.product.prodname_dotcom %} では、クエリ パラメーターを使った API の認証が廃止されます。 API の認証は、[HTTP 基本認証](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens)を使って行う必要があります。{% ifversion fpt or ghec %}クエリ パラメーターを使った API の認証は、2021 年 5 月 5 日に機能しなくなります。 {% endif %} スケジュールされたブラウンアウトなど、詳しい情報については、[ブログの投稿](https://developer.github.com/changes/2020-02-10-deprecating-auth-through-query-param/)を参照してください。

{% ifversion ghes or ghae %} クエリ パラメーターを使った API の認証は、利用はできるものの、セキュリティ上の懸念からサポートされなくなりました。 代わりに、`client_id`、または `client_secret` のアクセス トークンをヘッダーに移動することをインテグレーターにお勧めします。 {% data variables.product.prodname_dotcom %}は、クエリパラメータによる認証の削除を、事前に通知します。 {% endif %}

{% endwarning %}
