---
title: 创建个人访问令牌
intro: '可以通过命令行或 API 创建 {% data variables.product.pat_generic %} 来代替密码。'
redirect_from:
  - /articles/creating-an-oauth-token-for-command-line-use
  - /articles/creating-an-access-token-for-command-line-use
  - /articles/creating-a-personal-access-token-for-the-command-line
  - /github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line
  - /github/authenticating-to-github/creating-a-personal-access-token
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token
  - /github/extending-github/git-automation-with-oauth-tokens
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: 'Create a {% data variables.product.pat_generic %}'
ms.openlocfilehash: 78928110c7a8861a9c13d093799454f945eaaf2c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107747'
---
{% warning %}

警告：将访问令牌视为密码。

若要从命令行访问 {% data variables.product.company_short %}，请考虑使用 {% data variables.product.prodname_cli %} 或 [Git 凭据管理器](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md)，而不是创建 {% data variables.product.pat_generic %}。

在脚本中使用 {% data variables.product.pat_generic %} 时，请考虑将令牌存储为机密，并通过 {% data variables.product.prodname_actions %} 运行脚本。 有关详细信息，请参阅“[加密机密](/actions/security-guides/encrypted-secrets)。”{%- ifversion ghec or fpt %}还可以将令牌存储为 {% data variables.product.prodname_codespaces %} 机密，并在 {% data variables.product.prodname_codespaces %} 中运行脚本。 有关详细信息，请参阅“[管理 codespace 的加密机密](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)。”{% endif %}

如果无法使用这些选项，请考虑使用其他服务（如 [1Password CLI](https://developer.1password.com/docs/cli/secret-references/)）安全地存储令牌。

{% endwarning %}

## 关于 {% data variables.product.pat_generic %}

使用 [GitHub API](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens) 或[命令行](#using-a-token-on-the-command-line)时，可使用 {% data variables.product.pat_generic_caps %} 替代密码向 {% data variables.product.product_name %} 进行身份验证。 {% data variables.product.pat_generic_caps %} 旨在代表你自己访问 {% data variables.product.company_short %} 资源。 若要代表组织访问资源，或为长时间的集成而访问，应使用 {% data variables.product.prodname_github_app %}。 有关详细信息，请参阅“[关于应用](/developers/apps/getting-started-with-apps/about-apps)”。

{% ifversion pat-v2 %}

{% data variables.product.company_short %} 目前支持两种类型的 {% data variables.product.pat_generic %}：{% data variables.product.pat_v2 %} 和 {% data variables.product.pat_v1_plural %}。 {% data variables.product.company_short %} 建议尽可能使用 {% data variables.product.pat_v2 %} 而不是 {% data variables.product.pat_v1_plural %}。 与 {% data variables.product.pat_v1_plural %} 相比，{% data variables.product.pat_v2_caps %} 具有几个安全优势：

- 每个令牌只能访问单个用户或组织拥有的资源。
- 每个令牌只能访问特定的存储库。
- 每个令牌都被授予特定的权限，这些权限比授予 {% data variables.product.pat_v1_plural %} 的范围提供更多的控制。
- 每个令牌都必须具有到期日期。
- 组织所有者可要求必须获取对可访问组织中资源的任何 {% data variables.product.pat_v2 %} 的批准。{% ifversion ghec or ghes or ghae %}
- 企业所有者可要求必须获取对 {% data variables.product.pat_v2 %} 的批准，它可以访问该企业拥有的组织中的资源。{% endif %}

此外，组织所有者还可以限制 {% data variables.product.pat_v1 %} 对其组织的访问{% ifversion ghec or ghes or ghae %}，并且企业所有者可以限制 {% data variables.product.pat_v1 %} 对企业或企业所有的组织的访问 {% endif %}。

{% data reusables.user-settings.patv2-limitations %}

{% endif %}

{% ifversion fpt or ghec %}{% data reusables.user-settings.removes-personal-access-tokens %}{% endif %}

{% ifversion pat-v2 %}

## 创建 {% data variables.product.pat_v2 %}

{% note %}

注意：{% data reusables.user-settings.pat-v2-beta %}

{% endnote %}

{% ifversion fpt or ghec %}1。 [验证电子邮件地址](/github/getting-started-with-github/verifying-your-email-address)（如果尚未验证）。{% endif %} {% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %}
1. 在左侧栏中，在“{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}”下，单击“细粒度令牌” 。
1. 单击“生成新令牌”。
1. （可选）在“令牌名称”下，输入令牌的名称。
1. 在“过期时间”下，选择令牌的过期时间。
1. （可选）在“说明”下，添加说明来描述令牌的用途。
1. 在“资源所有者”下，选择资源所有者。 令牌只能访问所选资源所有者拥有的资源。 除非你所属的组织选择加入 {% data variables.product.pat_v2 %}，否则不会显示该组织。 有关详细信息，请参阅“[为组织设置 {% data variables.product.pat_generic %} 策略](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization)”。{% ifversion ghec or ghae %} 如果所选组织需要执行 SAML 单一登录 (SSO)，而你还没有活动的 SAML 会话，你可能需要执行该单一登录。{% endif %}
1. （可选）如果资源所有者是需要批准 {% data variables.product.pat_v2 %} 的组织，请在资源所有者下方的框中输入请求的理由。
1. 在“存储库访问权限”下，选择希望令牌访问的存储库。 应选择满足需求的最小存储库访问权限。 令牌始终包括对 GitHub 上所有公共存储库的只读访问权限。
1. 如果在上一步中选择了“仅选择存储库”，则在“所选存储库”下拉列表下，选择希望令牌访问的存储库 。
1. 在“权限”下，选择要授予令牌的权限。 根据指定的资源所有者和存储库访问权限，有存储库、组织和帐户权限这几种可能性。 应根据需要选择最小权限。 有关每个 REST API 操作所需的权限的详细信息，请参阅“[{% data variables.product.pat_v2 %} 所需的权限](/rest/overview/permissions-required-for-fine-grained-personal-access-tokens)”。
1. 单击“生成令牌”。

如果选择了某个组织作为资源所有者，并且该组织需要批准 {% data variables.product.pat_v2 %}，则令牌将被标记为 `pending`，直到组织管理员审核为止。 令牌在得到批准之前只能读取公共资源。 如果你是组织的所有者，请求将自动获得批准。 有关详细信息，请参阅“[查看和撤销组织中的 {% data variables.product.pat_generic %}](/organizations/managing-programmatic-access-to-your-organization/reviewing-and-revoking-personal-access-tokens-in-your-organization)”。

{% endif %}

## 创建 {% data variables.product.pat_v1 %}

{% ifversion pat-v2 %}

{% note %}

注意：组织所有者可以限制 {% data variables.product.pat_v1 %} 对其组织的访问。 如果尝试使用 {% data variables.product.pat_v1 %} 访问已禁用 {% data variables.product.pat_v1 %} 访问权限的组织中的资源，则请求将失败并出现 403 响应。 相反，必须使用 {% data variables.product.prodname_github_app %}、{% data variables.product.prodname_oauth_app %} 或 {% data variables.product.pat_v2 %}。

{% endnote %}

{% endif %}

{% ifversion pat-v2 %}

{% warning %}

注意：{% data variables.product.pat_v1 %} 可以访问你有权访问的每个存储库。 {% data variables.product.company_short %} 建议改用 {% data variables.product.pat_v2 %}，你可以将其限制为特定的存储库。 {% data variables.product.pat_v2_caps %} 还允许指定细粒度的权限，而不是宽泛的范围。

{% endwarning %}

{% endif %}

{% ifversion fpt or ghec %}1。 [验证电子邮件地址](/github/getting-started-with-github/verifying-your-email-address)（如果尚未验证）。{% endif %} {% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% ifversion pat-v2 %}1。 在左侧栏中的 {% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %} 下，单击“令牌（经典）”。{% else %}{% data reusables.user-settings.personal_access_tokens %}{% endif %} {% ifversion pat-v2%}1 。 选择“生成新令牌”，然后单击“生成新令牌（经典）”。{% else %}{% data reusables.user-settings.generate_new_token %}{% endif %} 
5. 给令牌一个描述性名称。
   ![令牌说明字段](/assets/images/help/settings/token_description.png)
6. 若要为令牌提供到期时间，请选择“到期”下拉菜单，然后单击默认值或使用日历选择器。
   ![令牌到期字段](/assets/images/help/settings/token_expiration.png)
7. 选择要授予此令牌的作用域。 若要使用令牌从命令行访问存储库，请选择“存储库”。 没有指定范围的令牌只能访问公共信息。 有关详细信息，请参阅“[可用范围](/apps/building-oauth-apps/scopes-for-oauth-apps#available-scopes)”。
   {% ifversion fpt or ghes or ghec %}![选择令牌范围](/assets/images/help/settings/token_scopes.gif){% elsif ghae %}![选择令牌范围](/assets/images/enterprise/github-ae/settings/access-token-scopes-for-ghae.png){% endif %}
8. 单击“生成令牌”。
   ![“生成令牌”按钮](/assets/images/help/settings/generate_token.png){% ifversion fpt or ghec %}![新建的令牌](/assets/images/help/settings/personal_access_tokens.png){% elsif ghes or ghae %}![新建的令牌](/assets/images/help/settings/personal_access_tokens_ghe.png){% else %}![新建的令牌](/assets/images/help/settings/personal_access_tokens_ghe_legacy.png){% endif %}{% ifversion fpt or ghec %}
1. 要使用令牌访问使用 SAML 单一登录的组织所拥有的资源，请对令牌进行授权。 有关详细信息，请参阅 {% data variables.product.prodname_ghe_cloud %} 文档中的“[授权 {% data variables.product.pat_generic %} 以用于 SAML 单一登录](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on){% ifversion fpt %}”。{% else %}”。{% endif %}{% endif %}

## 在命令行上使用令牌

{% data reusables.command_line.providing-token-as-password %}

{% data variables.product.pat_generic_caps %} 只能用于 HTTPS Git 操作。 如果存储库使用 SSH 远程 URL，则需要[将远程 URL 从 SSH 切换到 HTTPS](/github/getting-started-with-github/managing-remote-repositories/#switching-remote-urls-from-ssh-to-https)。

如果没有提示您输入用户名和密码，说明您的凭据可能已缓存在计算机上。 可[在密钥链中更新凭据](/github/getting-started-with-github/updating-credentials-from-the-macos-keychain)，从而用令牌替换旧密码。

可以使用 Git 客户端缓存 {% data variables.product.pat_generic %} 而不是为每个 HTTPS Git 操作手动输入 {% data variables.product.pat_generic %}。 Git 会将您的凭据临时存储在内存中，直到过期为止。 您还可以将令牌存储在 Git 可以在每个请求之前读取的纯文本文件中。 有关详细信息，请参阅“[在 Git 中缓存 {% data variables.product.prodname_dotcom %} 凭据](/github/getting-started-with-github/caching-your-github-credentials-in-git)”。

## 延伸阅读

- [关于向 GitHub 进行身份验证](/github/authenticating-to-github/about-authentication-to-github)
- “[令牌过期和吊销](/github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation)”
