---
ms.openlocfilehash: abb4b47406958c1933c5c2bdf7d7e2e2c1091907
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/28/2022
ms.locfileid: "148184039"
---
1. （可选）若要要求成员使用 SSH 证书，请选择“需要 SSH 证书”，然后单击“保存” 。
    ![“需要 SSH 证书”复选框和“保存”按钮](/assets/images/help/organizations/require-ssh-cert.png)

   {% note %}

   注意：需要 SSH 证书时，该要求不适用于获得授权的第三方集成或 {% data variables.product.prodname_dotcom %} 功能，例如 {% data variables.product.prodname_actions %}{% ifversion fpt or ghec %} 和 {% data variables.product.prodname_codespaces %}{% endif %}，它们是 {% data variables.product.prodname_dotcom %} 生态系统中的受信任环境。

   {% endnote %}
