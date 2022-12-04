---
title: 允许预生成访问其他存储库
shortTitle: Allow external repo access
intro: '可以允许预生成访问其他 {% data variables.product.prodname_dotcom %} 存储库，以便成功生成。'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
permissions: People with admin access to a repository can configure prebuilds for the repository.
ms.openlocfilehash: 0186078525944587bc4344e0a7d6a32468ce1cd7
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158787'
---
默认情况下，预生成配置的 {% data variables.product.prodname_actions %} 工作流只能访问其自身存储库内容。 你的项目可能会使用其他位置的其他资源来生成开发环境。

## 允许预生成读取访问外部资源

通过在预生成配置所用的 `devcontainer.json` 文件中指定权限，可以配置对具有同一存储库所有者的其他 {% data variables.product.prodname_dotcom %} 存储库的读取访问权限。 有关详细信息，请参阅“[管理对 codespace 内其他存储库的访问权限](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)”。

{% note %}

**注意**：只能通过这种方式授予读取权限，并且目标存储库的所有者必须与正在创建预生成的存储库的所有者相同。 例如，如果正在为 `octo-org/octocat` 存储库创建预生成配置，则你将能够为其他 `octo-org/*` 存储库授予读取权限（前提是 `devcontainer.json` 文件中对此进行了指定，且你具有这些权限）。

{% endnote %}

为 `devcontainer.json` 文件（该文件设置对具有相同存储库所有者的其他存储库的读取访问权限）创建或编辑预生成配置时，系统会提示你在单击“创建”或“更新”时授予这些权限 。 有关详细信息，请参阅“[配置预生成](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds)”。

## 允许预生成写入访问外部资源

如果项目需要对资源的写入访问权限，或者如果外部资源所驻留存储库的所有者与你正创建预生成配置的存储库的所有者不同，则可以使用{% data variables.product.pat_generic %}来授予此访问权限。

你将需要新建个人帐户，然后使用此帐户创建具有适当范围的{% data variables.product.pat_v1 %}。

1. 在 {% data variables.product.prodname_dotcom %} 上创建新的个人帐户。 
   
   {% warning %}
   
   警告：虽然可以使用现有的个人帐户生成{% data variables.product.pat_v1 %}，但我们强烈建议创建一个新帐户，仅访问方案所需的目标存储库。 这是因为访问令牌的 `repository` 权限会授予对帐户有权访问的所有存储库的访问权限。 有关详细信息，请参阅“[注册新的 GitHub 帐户](/get-started/signing-up-for-github/signing-up-for-a-new-github-account)”和“[{% data variables.product.prodname_actions %} 的安全强化](/actions/security-guides/security-hardening-for-github-actions#considering-cross-repository-access)”。
   
   {% endwarning %}
1. 为新帐户提供对所需存储库的读取访问权限。 有关详细信息，请参阅[管理个人对组织存储库的访问](/organizations/managing-access-to-your-organizations-repositories/managing-an-individuals-access-to-an-organization-repository)。
1. 登录到新帐户时，使用 `repo` 范围创建{% data variables.product.pat_v1 %}。 （可选）如果预生成需要从 {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %} 下载包，则还要选择 `read:packages` 范围。 有关详细信息，请参阅“[创建{% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)”。

   ![为{% data variables.product.pat_v1 %}选择的“存储库”和“包”范围](/assets/images/help/codespaces/prebuilds-select-scopes.png) 
   
   如果预生成将使用 {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %} 中的包，则需要向新帐户授予对包的访问权限，或将包配置为继承正在预生成的存储库的访问权限。 有关详细信息，请参阅“[配置包的访问控制和可见性](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)”。   
{% ifversion ghec %}1. 授权将令牌用于 SAML 单一登录 (SSO)，以便它可以访问启用了 SSO 的组织拥有的存储库。 有关详细信息，请参阅“[授权{% data variables.product.pat_generic %}以用于 SAML 单一登录](/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)”。

   ![为{% data variables.product.pat_v1 %}配置 SSO 的按钮](/assets/images/help/codespaces/configure-SSO-for-PAT.png) 

{% endif %}
1. 复制令牌字符串。 你要将此字符串分配给 {% data variables.product.prodname_codespaces %} 存储库机密。
1. 重新登录到有权访问存储库的帐户。 
1. 在要为其创建 {% data variables.product.prodname_github_codespaces %} 预生成的存储库中，创建一个名为 `CODESPACES_PREBUILD_TOKEN` 的新 {% data variables.product.prodname_codespaces %} 存储库机密，并为其提供所创建和复制的令牌的值。 有关详细信息，请参阅“[管理 {% data variables.product.prodname_github_codespaces %} 的存储库和组织的加密机密](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces#adding-secrets-for-a-repository)”。

{% data variables.product.pat_generic %}将用于为存储库创建的所有后续预生成。 与其他 {% data variables.product.prodname_codespaces %} 存储库机密不同，`CODESPACES_PREBUILD_TOKEN` 机密仅用于预生成，不能在从存储库创建的 codespace 中使用。

## 延伸阅读

- [配置预生成](/codespaces/prebuilding-your-codespaces/configuring-prebuilds)
- [对预生成进行故障排除](/codespaces/troubleshooting/troubleshooting-prebuilds)
