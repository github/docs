---
title: 标识提供者不可用时访问企业帐户
shortTitle: Access your enterprise account
intro: '即使标识提供者不可用，也可通过使用恢复代码绕过单一登录 (SSO) 登录到 {% data variables.product.product_name %}。'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
permissions: Enterprise owners can use a recovery code to access an enterprise account.
ms.openlocfilehash: d13a4cd336e67ab62087530b00cad8fd6939d64b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578802'
---
身份验证配置错误或标识提供者 (IdP) 问题阻止你使用 SSO 时，你可以使用恢复代码访问你的企业帐户。 

要以这种方式访问企业帐户，必须先下载并存储企业的恢复代码。 有关详细信息，请参阅“[下载企业帐户的单一登录恢复代码](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-single-sign-on-recovery-codes)”。

{% data reusables.saml.recovery-code-caveats %}

{% note %}

注意：如果企业使用 {% data variables.product.prodname_emus %}，则必须以安装用户身份登录才能使用恢复代码。

{% endnote %}

{% data reusables.saml.recovery-code-access %}
