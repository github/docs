---
ms.openlocfilehash: a58f8cdbd481991312d9bce77e1cd41a35ffad75
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145130616"
---
認証を受けて、{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}上のOrganization のリソース{% elsif ghae %}{% data variables.product.product_location %}{% endif %}にアクセスできるようにするには、定期的にSAML IdPで認証を受けなければなりません。 このログイン間隔は利用しているアイデンティティプロバイダ (IdP) によって指定されますが、一般的には 24 時間です。 このように定期的にログインしなければならないことから、アクセスの長さには制限があり、アクセスを続行するには再認証が必要になります。 {% ifversion fpt or ghec %}アクティブな SAML セッションは、セキュリティ設定で表示および管理できます。 詳細については、「[アクティブな SAML セッションの表示と管理](/articles/viewing-and-managing-your-active-saml-sessions)」を参照してください。{% endif %}
