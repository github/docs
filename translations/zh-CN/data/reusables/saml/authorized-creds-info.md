---
ms.openlocfilehash: 4055717eec0cdd95951ec6fb5bdea20efaed1948
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "147573375"
---
在可以授权个人访问令牌或 SSH 密钥之前，必须拥有一个链接的 SAML 标识。 如果你是已启用 SAML SSO 的组织的成员，则可以至少通过使用 IdP 向组织进行一次身份验证来创建链接标识。 有关详细信息，请参阅“[关于通过 SAML 单一登录进行身份验证](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on)”。

授予个人访问令牌或 SSH 密钥后，令牌或密钥将保持授权状态，直到以下列方式之一吊销。
- 组织或企业所有者撤销授权。
- 你已从组织中移除。
- 已编辑个人访问令牌中的范围，或重新生成令牌。
- 创建期间定义的个人访问令牌已过期。
