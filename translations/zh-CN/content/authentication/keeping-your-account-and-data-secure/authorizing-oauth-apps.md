---
title: 授权 OAuth 应用
intro: '您可以将 {% data variables.product.product_name %} 身份连接到使用 OAuth 的第三方应用程序。 在授权 {% data variables.product.prodname_oauth_app %} 时，应确保您信任应用程序，查阅开发者是谁，并查阅应用程序要访问的信息类型。'
redirect_from:
  - /articles/authorizing-oauth-apps
  - /github/authenticating-to-github/authorizing-oauth-apps
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
ms.openlocfilehash: 7d116f8fc5117cdcbdbd5582e007351c47b2d55d
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/28/2022
ms.locfileid: '148184018'
---
当 {% data variables.product.prodname_oauth_app %} 想要通过你在 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} 上的帐户识别你时，你会看到一个页面，其中包含该应用的开发者联系信息以及所请求的特定数据列表。

{% ifversion fpt or ghec %}

{% tip %}

提示：必须先[验证电子邮件地址](/articles/verifying-your-email-address)，才能为 {% data variables.product.prodname_oauth_app %} 授权。

{% endtip %}

{% endif %}

## {% data variables.product.prodname_oauth_app %} 访问

{% data variables.product.prodname_oauth_apps %} 可以具有对 {% data variables.product.product_name %} 数据的读取或写入权限 。

- 读取权限仅允许应用查看数据。
- 写入权限允许应用更改数据。

{% tip %}

提示：{% data reusables.user-settings.review_oauth_tokens_tip %}

{% endtip %}

### 关于 OAuth 范围

范围是 {% data variables.product.prodname_oauth_app %} 可以申请访问公共及非公共数据的权限组。

当您想使用集成了 {% data variables.product.product_name %} 的 {% data variables.product.prodname_oauth_app %} 时，该应用程序可让您了解需要的数据访问权限类型。 如果您授予应用程序访问权限，则应用程序将能代您执行操作，例如读取或修改数据。 例如，如果要使用请求 `user:email` 作用域的应用，该应用将具有对专用电子邮件地址的只读访问权限。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_oauth_apps %} 的范围](/apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps)”。

{% tip %}

注意：目前，无法将源代码访问范围限定为只读。

{% endtip %}

{% data reusables.apps.oauth-token-limit %}

### 申请的数据类型

{% data variables.product.prodname_oauth_apps %} 可以申请多种类型的数据。

| 数据类型 | 说明 |
| --- | --- |
| 提交状态 | 您可以授权应用程序报告您的提交状态。 提交状态访问权限允许应用程序确定对特定提交的构建是否成功。 应用程序无法访问您的代码，但可以读取和写入特定提交的状态信息。 |
| 部署 | 部署状态访问权限允许应用程序根据公共和私有仓库的特定提交确定部署是否成功。 应用程序无法访问您的代码。 |
| Gists | [Gist](https://gist.github.com) 访问权限允许应用读取或写入公共和机密 Gist。 |
| 挂钩 | [Webhook](/webhooks) 访问权限允许应用在你管理的存储库上读取或写入挂钩配置。 |
| 通知 | 通知访问权限允许应用程序读取您的 {% data variables.product.product_name %} 通知，如议题和拉取请求的评论。 但应用程序仍然无法访问仓库中的任何内容。 |
| Organizations and teams（组织和团队） | 组织和团队访问权限允许应用程序访问并管理组织和团队成员资格。 |
| 个人用户数据 | 用户数据包括您的用户个人资料中的信息，例如您的姓名、电子邮件地址和地点。 |
| 存储库 | 仓库信息包括贡献者的姓名、您创建的分支以及仓库中的实际文件。 应用程序可以申请访问用户级别的公共或私有仓库。 |
| 仓库删除 | 应用程序可以申请删除您管理的仓库，但无法访问您的代码。 |{% ifversion projects-oauth-scope %}
| 项目 | 访问用户和组织 {% data variables.projects.projects_v2 %}。 应用可以请求读/写或只读访问权限。 |{% endif %}

## 申请更新的权限

当 {% data variables.product.prodname_oauth_apps %} 申请新的访问权限时，将会通知其当前权限与新权限之间的差异。

{% ifversion fpt or ghec %}

## {% data variables.product.prodname_oauth_apps %} 和组织

当你授权 {% data variables.product.prodname_oauth_app %} 访问你的个人帐户时，你还会看到该授权对你所在的每个组织的影响。

- 对于具有 {% data variables.product.prodname_oauth_app %} 访问限制的组织，你可以请求组织管理员批准应用程序在该组织中使用。 如果组织未批准应用程序，则应用程序只能访问组织的公共资源。 如果你是组织管理员，则可以自行[批准应用程序](/articles/approving-oauth-apps-for-your-organization)。

- 对于没有 {% data variables.product.prodname_oauth_app %} 访问限制的组织，将自动授予应用程序对该组织资源的访问权限。 因此，应注意批准哪些 {% data variables.product.prodname_oauth_apps %} 访问你的个人帐户资源以及任何组织资源。

如果你属于启用了 SAML 单一登录 (SSO) 的任何组织，并且你过去已通过 SAML 进行身份验证为该组织创建了链接标识，则每次授权 {% data variables.product.prodname_oauth_app %} 时，都必须为每个组织创建一个活动的 SAML 会话。

{% note %}

注意：如果在访问受 SAML 保护的组织时遇到授权 {% data variables.product.prodname_oauth_app %} 或 {% data variables.product.prodname_github_app %} 的问题，则可能需要从[授权的 {% data variables.product.prodname_github_apps %}](https://github.com/settings/applications) 或[授权的 {% data variables.product.prodname_oauth_apps %}](https://github.com/settings/apps/authorizations) 页面撤销应用，访问组织进行身份验证并建立活动的 SAML 会话，然后尝试通过访问应用重新授权该应用。

{% endnote %}

## 延伸阅读

- [关于 {% data variables.product.prodname_oauth_app %} 访问限制](/articles/about-oauth-app-access-restrictions)
- [为 GitHub 应用授权](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-github-apps)
- [{% data variables.product.prodname_marketplace %} 支持](/articles/github-marketplace-support)

{% endif %}
