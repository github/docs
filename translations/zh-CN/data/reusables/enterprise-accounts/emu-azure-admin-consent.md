---
ms.openlocfilehash: af0baef0abb9baffb7c9356f6f14aa9a0b9754f3
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/22/2022
ms.locfileid: "148180118"
---
1. 在 {% data variables.product.product_name %} 将你重定向到 IdP 后，登录，然后按照说明授予同意并安装 {% data variables.product.prodname_emu_idp_oidc_application %} 应用程序。 在 Azure AD 通过 OIDC 请求 {% data variables.product.company_short %} {% data variables.product.prodname_emus %} 的权限后，启用“代表组织同意”，然后单击“接受” 。 
   {% warning %}

   警告：必须以具有全局管理员权限的用户身份登录到 Azure AD，才能同意安装 {% data variables.product.prodname_emu_idp_oidc_application %} 应用程序。

   {% endwarning %}
