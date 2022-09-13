---
title: 关于使用 SAML 单点登录进行身份验证
intro: '可以通过身份提供商 (IdP) {% ifversion ghae %}以 SAML 单一登录 (SSO) {% endif %}验证来访问{% ifversion ghae %}{% data variables.product.product_location %}{% elsif ghec %}使用 SAML 单一登录 (SSO) 的组织{% endif %}。'
redirect_from:
  - /articles/about-authentication-with-saml-single-sign-on
  - /github/authenticating-to-github/about-authentication-with-saml-single-sign-on
  - /github/authenticating-to-github/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on
versions:
  ghae: '*'
  ghec: '*'
topics:
  - SSO
shortTitle: SAML single sign-on
ms.openlocfilehash: 7fb15bab585093a618f9c082d340c2fe66d67df7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147527908'
---
## 关于使用 SAML SSO 进行身份验证

{% ifversion ghae %}

SAML SSO 允许企业所有者从 SAML IdP 集中控制和安全访问 {% data variables.product.product_name %}。 在浏览器中访问 {% data variables.product.product_location %} 时，{% data variables.product.product_name %} 会将用户重定向到您的 IdP 进行身份验证。 在使用 IdP 上的帐户成功进行身份验证后，IdP 会将您重定向回 {% data variables.product.product_location %}。 {% data variables.product.product_name %} 将验证 IdP 的响应，然后授予访问权限。

{% data reusables.saml.you-must-periodically-authenticate %}

如果您无法访问 {% data variables.product.product_name %}，请与本地企业所有者或 {% data variables.product.product_name %} 的管理员联系。 你可以在 {% data variables.product.product_name %} 上的任何页面底部单击“支持”找到企业的联系信息。 {% data variables.product.company_short %} 和 {% data variables.contact.github_support %} 无法访问您的 IdP，并且无法解决身份验证问题。 

{% endif %}

{% ifversion fpt or ghec %}

{% data reusables.saml.dotcom-saml-explanation %} 组织所有者可以邀请你在 {% data variables.product.prodname_dotcom %} 上的个人帐户加入其使用 SAML SSO 的组织，这样你可以对该组织做出贡献，并且保留你在 {% data variables.product.prodname_dotcom %} 上的现有身份和贡献。

如果你是 {% data variables.product.prodname_emu_enterprise %} 的成员，则将转而使用为你预配且由你的企业控制的新帐户。 {% data reusables.enterprise-accounts.emu-more-info-account %}

在访问使用 SAML SSO 的组织中的专用资源时，{% data variables.product.prodname_dotcom %} 会将你重定向到组织的 SAML IdP 进行身份验证。 在 IdP 上成功验证您的帐户后，IdP 会将您重定向回到 {% data variables.product.prodname_dotcom %}，您可以在那里访问组织的资源。

{% data reusables.saml.outside-collaborators-exemption %}

如果您最近在浏览器中使用组织的 SAML IdP 进行过身份验证，则在访问使用 SAML SSO 的 {% data variables.product.prodname_dotcom %} 组织时会自动获得授权。 如果您最近没有在浏览器中使用组织的 SAML IdP 进行身份验证，则必须在 SAML IdP 进行身份验证后才可访问组织。

{% data reusables.saml.you-must-periodically-authenticate %}

## 关联的 SAML 标识

使用 IdP 帐户进行身份验证并返回到 {% data variables.product.prodname_dotcom %} 时，{% data variables.product.prodname_dotcom %} 会在组织或企业中记录你的 {% data variables.product.prodname_dotcom %} 个人帐户与你登录到的 SAML 标识之间的关联。  这个关联的标识用于验证你在该组织中的成员身份，并且根据你的组织或企业设置，还用于确定你所属的具体组织和团队。 每个 {% data variables.product.prodname_dotcom %} 帐户只能关联到每个组织的一个 SAML 标识。 同样地，每个 SAML 标识只能关联到一个组织中的一个 {% data variables.product.prodname_dotcom %} 帐户。 

如果使用已关联到其他 {% data variables.product.prodname_dotcom %} 帐户的 SAML 标识登录，会收到一条错误消息，指示无法使用该 SAML 标识进行登录。 如果尝试使用新的 {% data variables.product.prodname_dotcom %} 帐户在组织内部工作，就可能会出现这种情况。 如果不想将该 SAML 标识与该 {% data variables.product.prodname_dotcom %} 帐户一起使用，则需要注销该 SAML 标识，然后重复 SAML 登录。 如果确实要将该 SAML 标识与 {% data variables.product.prodname_dotcom %} 帐户一起使用，需要要求管理员取消该 SAML 标识与旧帐户的关联，以便你可将其关联到新帐户。  根据组织或企业的设置，管理员可能需要在 SAML 提供商中重新分配你的标识。  有关详细信息，请参阅“[查看和管理成员对组织的 SAML 访问权限](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)”。

如果用于登录的 SAML 标识与当前关联到 {% data variables.product.prodname_dotcom %} 帐户的 SAML 标识不匹配，会收到一条警告，要求你重新关联帐户。 SAML 标识用于管理访问权限和团队成员身份，因此继续使用新的 SAML 标识可能会导致你无法再访问 {% data variables.product.prodname_dotcom %} 中的团队和组织。 只有当你知道将来应该使用这个新的 SAML 标识进行身份验证时，才继续操作。 

## 使用 SAML SSO 授权 PAT 和 SSH 密钥

要在命令行上使用 API 或 Git 访问使用 SAML SSO 的组织中受保护的内容，需要使用授权的 HTTPS 个人访问令牌或授权的 SSH 密钥。

如果没有个人访问令牌或 SSH 密钥，可以创建用于命令行的个人访问令牌或生成新的 SSH 密钥。 有关详细信息，请参阅“[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)”或“[生成新的 SSH 密钥并将其添加到 ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)”。

要对使用或实施 SAML SSO 的组织使用新的或现有的个人访问令牌或 SSH 密钥，需要授权该令牌或授权 SSH 密钥用于 SAML SSO 组织。 有关详细信息，请参阅“[授权用于 SAML 单一登录的个人访问令牌](/articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)”或“[授权用于 SAML 单一登录的 SSH 密钥](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)”。

## 关于 {% data variables.product.prodname_oauth_apps %}、{% data variables.product.prodname_github_apps %} 和 SAML SSO

每次授权 {% data variables.product.prodname_oauth_app %} 或 {% data variables.product.prodname_github_app %} 访问使用或实施 SAML SSO 的组织时，你都必须有一个活动的 SAML 会话。 可以通过在浏览器中导航到 `https://github.com/orgs/ORGANIZATION-NAME/sso` 来创建活动的 SAML 会话。

企业或组织所有者为组织启用或强制实施 SAML SSO 后，以及首次通过 SAML 进行身份验证后，必须对之前授权访问组织的任何 {% data variables.product.prodname_oauth_apps %} 或 {% data variables.product.prodname_github_apps %} 进行重新授权。 

若要查看已授权的 {% data variables.product.prodname_oauth_apps %}，请访问 [{% data variables.product.prodname_oauth_apps %} 页面](https://github.com/settings/applications)。 若要查看已授权的 {% data variables.product.prodname_github_apps %}，请访问 [{% data variables.product.prodname_github_apps %} 页面](https://github.com/settings/apps/authorizations)。

{% endif %}

## 延伸阅读

{% ifversion ghec %}- “[关于 SAML 单一登录的标识和访问管理](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)”{% endif %} {% ifversion ghae %}- “[关于企业标识和访问管理](/admin/authentication/about-identity-and-access-management-for-your-enterprise)”{% endif %}
