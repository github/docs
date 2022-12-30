---
ms.openlocfilehash: 3928c2b26666cfad7694d10b900ae93e5475454c
ms.sourcegitcommit: ea9a577cff7ec16ded25ed57417c83ec04816428
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 04/07/2022
ms.locfileid: "141528602"
---
{% data variables.product.prodname_ghe_server %} ユーザー名には、英数字とダッシュ (`-`) のみを含めることができます。 {% data variables.product.prodname_ghe_server %}は、アカウントのユーザ名に含まれている非英数字をダッシュに変換します。 たとえば、`gregory.st.john` というユーザー名は `gregory-st-john` に正規化されます。 変換されたユーザ名の先頭及び末尾はダッシュであってはならないことに注意してください。 2つの連続するダッシュを含めることもできません。

メール アドレスから作成されたユーザー名は、`@` 文字の前の正規化された文字から作成されます。

複数のアカウントが変換後に同じ{% data variables.product.prodname_ghe_server %}のユーザ名になる場合、最初のユーザアカウントだけが作成されます。 同じユーザ名のそれ以降のユーザは、サインインできません。
