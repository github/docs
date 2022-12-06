---
ms.openlocfilehash: 7e0f711826a1f1ea1bee8cec18bf5b4614815174
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108132"
---
## 用户反复重定向到身份验证

如果在循环中反复将用户重定向到 SAML 身份验证提示，则可能需要在 IdP 设置中增加 SAML 会话持续时间。 

SAML 响应中发送的 `SessionNotOnOrAfter` 值决定何时将用户重定向回 IdP 进行身份验证。 如果 SAML 会话持续时间配置为 2 小时或更短，{% data variables.product.prodname_dotcom_the_website %} 将在 SAML 会话过期前 5 分钟刷新它。 如果会话持续时间配置为 5 分钟或更短，则用户可能会卡在 SAML 身份验证循环中。 

若要解决此问题，建议将 SAML 会话的最短持续时间配置为 4 小时。 有关详细信息，请参阅“[SAML 配置参考](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#session-duration-and-timeout)”。
