---
ms.openlocfilehash: 1f59c95d79ab5fa0f778e05379112ec4b82afd42
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "145099477"
---
{% ifversion fpt or ghec %} 在输入密码进行登录、创建帐户或更改密码时，{% data variables.product.product_name %} 将根据 HaveIBeenPwned 等资料集检查你输入的密码是否被视为弱密码。 即使是以前从未用过的密码，也可能被视为弱密码。

{% data variables.product.product_name %} 仅在您输入密码时检查密码，绝不会以纯文本存储您输入的密码。 有关详细信息，请参阅 [HaveIBeenPwned](https://haveibeenpwned.com/)。
{% endif %}
