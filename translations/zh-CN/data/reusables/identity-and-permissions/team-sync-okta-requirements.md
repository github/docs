---
ms.openlocfilehash: bc73b3b92f131cf0af80606a2650ac5ce898055e
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "147876088"
---
对 Okta 启用团队同步之前，你或你的 IdP 管理员必须：

- 使用 Okta 为组织配置 SAML、SSO 和 SCIM 集成。 有关详细信息，请参阅“[使用 Okta 配置 SAML 单一登录和 SCIM](/organizations/managing-saml-single-sign-on-for-your-organization/configuring-saml-single-sign-on-and-scim-using-okta)”。
- 提供 Okta 实例的租户 URL。
- 为 Okta 安装（作为服务用户）生成具有只读管理员权限的有效 SSWS 令牌。 有关详细信息，请参阅 Okta 文档中的[创建令牌](https://developer.okta.com/docs/guides/create-an-api-token/create-the-token/)和[服务用户](https://help.okta.com/asa/en-us/Content/Topics/Adv_Server_Access/docs/service-users.htm)。
