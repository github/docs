---
title: 更改身份验证方法
intro: '您可以随时更改 {% data variables.product.prodname_ghe_server %} 对您现有的帐户进行身份验证的方法。'
redirect_from:
  - /enterprise/admin/user-management/changing-authentication-methods
  - /enterprise/admin/authentication/changing-authentication-methods
  - /admin/authentication/changing-authentication-methods
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/changing-authentication-methods
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/changing-authentication-methods
versions:
  ghes: '*'
type: overview
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
shortTitle: Change authentication methods
ms.openlocfilehash: 074c4fe8784d3ea7b8ada6b532e680384571facf
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145099983'
---
更改身份验证方法时，{% data variables.product.product_location %} 上的用户帐户将保留，只要他们的用户名没有发生变化，用户就可以继续登录原来的帐户。

如果新的身份验证方法更改了用户名，将创建新帐户。 作为管理员，可以通过站点管理员设置或使用[用户管理 API](/rest/reference/enterprise-admin#update-the-username-for-a-user) 重命名用户。

您应当考虑的其他问题包括：

* **密码：** 如果对实例改为使用内置身份验证方法，则用户必须在更改完成后 [设置密码](/enterprise/user/articles/how-can-i-reset-my-password/)。

* **站点管理员：** 管理权限 [在你使用 SAML 时由你的标识提供者控制](/enterprise/admin/guides/user-management/using-saml/#saml-attributes)，而 [在你使用 LDAP 时由组成员身份控制](/enterprise/admin/authentication/using-ldap#configuring-ldap-with-your-github-enterprise-server-instance)。

* **团队成员身份：** 只有 LDAP 可让你从目录服务器 [控制团队成员身份](/enterprise/admin/authentication/using-ldap#configuring-ldap-with-your-github-enterprise-server-instance)。

* **用户挂起：** 当你使用 LDAP 进行身份验证时，可以通过受限制的组控制对 {% data variables.product.prodname_ghe_server %} 的访问权限。 在切换到 LDAP 后，如果配置受限制的组，那么不属于其中任何一个组的现有用户将被挂起。 在用户登录或下一次 LDAP 同步期间将发生挂起。

* **组成员身份：** 当你使用 LDAP 进行身份验证时，系统会根据受限制的组成员身份和 Active Directory 中的帐户状态自动 [挂起和取消挂起](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users)。

* **Git 身份验证：** SAML 和 CAS 仅支持通过 HTTP 或 HTTPS 使用 [个人访问令牌](/articles/creating-an-access-token-for-command-line-use)进行的 Git 身份验证。 不支持通过 HTTP 或 HTTPS 进行的密码身份验证。 LDAP 默认支持基于密码的 Git 身份验证，但我们建议你[禁用该方法](/enterprise/admin/authentication/using-ldap#disabling-password-authentication-for-git-operations)，并强制通过个人访问令牌或 SSH 密钥进行身份验证。

* **API 身份验证：** SAML 和 CAS 仅支持使用 [个人访问令牌](/articles/creating-an-access-token-for-command-line-use)进行的 API 身份验证。 不支持基本身份验证。

* **双因素身份验证：** {% data reusables.enterprise_user_management.external_auth_disables_2fa %}

* **对在外部身份验证提供者中无帐户的用户进行身份验证：** 你可以邀请用户在 {% data variables.product.product_location %} 中进行身份验证，而无需将他们添加到标识提供者中。 有关详细信息，请参阅“[允许对提供者外部的用户使用内置身份验证](/admin/identity-and-access-management/managing-iam-for-your-enterprise/allowing-built-in-authentication-for-users-outside-your-provider)”。
