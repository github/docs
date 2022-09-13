---
title: 排除企业的标识和访问管理故障
shortTitle: Troubleshoot IAM
intro: 查看企业的标识和访问管理的常见问题和解决方案。
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - Security
  - SSO
  - Troubleshooting
ms.openlocfilehash: 806db249c8ad083965136005843d30fd1a3f5015
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147093161'
---
## 用户名冲突

{% ifversion ghec %}如果企业使用 {% data variables.product.prodname_emus %}，{% endif %}{% data variables.product.product_name %} 会规范化标识提供者 (IdP) 提供的标识符，以在 {% data variables.product.prodname_dotcom %} 上创建每个人员的用户名。 如果多个帐户被规范化为同一个 {% data variables.product.prodname_dotcom %} 用户名，则会发生用户名冲突，并且只会创建第一个用户帐户。 有关详细信息，请参阅“[外部身份验证的用户名注意事项](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)”。

{% ifversion ghec %}
## 切换身份验证配置时出错

如果在不同身份验证配置之间切换时遇到问题，例如将 SAML SSO 配置从组织更改为企业帐户或从 SAML 迁移到 {% data variables.product.prodname_emus %} 的 OIDC，请确保遵循更改操作的最佳做法。

- [将 SAML 配置从组织切换到企业帐户](/admin/identity-and-access-management/using-saml-for-enterprise-iam/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)
- [从 SAML 迁移到 OIDC](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/migrating-from-saml-to-oidc)

## 当 SSO 不可用时访问企业

当标识提供者 IdP 的配置错误或问题阻止你使用 SSO 时，可以使用恢复代码访问你的企业。 有关详细信息，请参阅“[在标识提供者不可用时访问企业帐户](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/accessing-your-enterprise-account-if-your-identity-provider-is-unavailable)”。
{% endif %}

## SAML 身份验证错误

如果用户在尝试使用 SAML 进行身份验证时遇到错误，请参阅“[对 SAML 身份验证进行故障排除](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication)”。

{% ifversion ghec %}
## 延伸阅读

- [排除组织的标识和访问管理故障](/organizations/managing-saml-single-sign-on-for-your-organization/troubleshooting-identity-and-access-management-for-your-organization){% endif %}
