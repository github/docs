---
title: OAuth 应用程序的作用域
intro: '{% data reusables.shortdesc.understanding_scopes_for_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps
  - /apps/building-oauth-apps/scopes-for-oauth-apps
  - /apps/building-oauth-apps/understanding-scopes-for-oauth-apps
  - /developers/apps/scopes-for-oauth-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - OAuth Apps
ms.openlocfilehash: 8398a7162b3ab77677651d5404c0738c6d0877b1
ms.sourcegitcommit: 34d500fe45b362043b4b4685d6705a7bfb484d11
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/15/2022
ms.locfileid: '148164362'
---
在 GitHub 上设置 OAuth 应用程序时，请求的作用域会在授权表单上显示给用户。

{% note %}

注意：如果你在构建 GitHub 应用，则不需要在授权请求中提供范围。 有关详细信息，请参阅“[标识和授权 GitHub 应用用户](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)”。

{% endnote %}

如果 {% data variables.product.prodname_oauth_app %} 无法访问浏览器（如 CLI 工具），则无需为用户指定向应用程序验证的作用域。 有关详细信息，请参阅“[授权 OAuth 应用](/developers/apps/authorizing-oauth-apps#device-flow)”。

检查标头以查看您拥有哪些 OAuth 作用域，以及 API 操作接受什么：

```shell
$ curl -H "Authorization: Bearer OAUTH-TOKEN" {% data variables.product.api_url_pre %}/users/codertocat -I
HTTP/2 200
X-OAuth-Scopes: repo, user
X-Accepted-OAuth-Scopes: user
```

* `X-OAuth-Scopes` 列出令牌已授权的范围。
* `X-Accepted-OAuth-Scopes` 列出操作检查的范围。

## 可用的范围

名称 | 说明 -----|-----------|{% ifversion not ghae %} **`(no scope)`** | 授予对公共信息（包括用户个人资料信息、存储库信息和 Gist）的只读访问权限{% endif %}{% ifversion ghes or ghae %} **`site_admin`** | 向站点管理员授予对 [{% data variables.product.prodname_ghe_server %} 管理 API 终结点](/rest/reference/enterprise-admin)的访问权限。{% endif %} **`repo`** | 授予对公共{% ifversion ghec or ghes or ghae %}、内部{% endif %}和专用存储库的完全访问权限，包括对代码、提交状态、存储库邀请、协作者、部署状态和存储库 Webhook 的读写权限。 注意：除了存储库相关资源外，`repo` 范围还授予对组织拥有的资源（包括项目、邀请、团队成员身份和 Webhook）的管理权限。 此范围还授予对用户所拥有的项目的管理权限。
&emsp;`repo:status`| 授予对{% ifversion fpt %}公共和专用{% elsif ghec or ghes %}公共、专用和内部{% elsif ghae %}专用和内部{% endif %}存储库中的提交状态的读/写访问权限。 仅在授予其他用户或服务对专用存储库提交状态的访问权限而不授予对代码的访问权限时，才需要此范围。
&emsp;`repo_deployment`| 授予对 {% ifversion not ghae %}公共{% else %}内部{% endif %}和专用存储库的[部署状态](/rest/reference/repos#deployments)的访问权限。 仅在授予其他用户或服务对部署状态的访问权限而不授予对代码的访问权限时，才需要此范围。{% ifversion not ghae %} &emsp;`public_repo`| 将访问权限限制为公共存储库。 这包括对公共仓库和组织的代码、提交状态、仓库项目、协作者以及部署状态的读取/写入权限。 对公共存储库标星也需要此权限。{% endif %} &emsp;`repo:invite` | 授予接受/拒绝存储库协作邀请的权限。 仅在授予其他用户或服务对邀请的访问权限而不授予对代码的访问权限时，才需要此范围。{% ifversion fpt or ghes or ghec %} &emsp;`security_events` | 授予： <br/> 对 [{% data variables.product.prodname_code_scanning %} API](/rest/reference/code-scanning) {%- ifversion ghec %} 中安全事件的读取和写入权限<br/> 对 [{% data variables.product.prodname_secret_scanning %} API](/rest/reference/secret-scanning){%- endif %} 中安全事件的读取和写入权限 <br/> 仅在授予其他用户或服务对安全事件的访问权限而不授予对代码的访问权限时，才需要此范围。{% endif %} **`admin:repo_hook`** | 授予对{% ifversion fpt %}公共或专用{% elsif ghec or ghes %}公共、专用或内部{% elsif ghae %}专用或内部{% endif %}存储库中存储库挂钩的读取、写入、ping 和删除访问权限。 `repo` {% ifversion fpt or ghec or ghes %}和 `public_repo` 范围授予{% else %}范围授予{% endif %}对存储库（包括存储库挂钩）的完全访问权限。 使用 `admin:repo_hook` 范围将访问权限限制为仅存储库挂钩。
&emsp;`write:repo_hook` | 授予对{% ifversion fpt %}公共或专用{% elsif ghec or ghes %}公共、专用或内部{% elsif ghae %}专用或内部{% endif %}存储库中挂钩的读取、写入和 ping 访问权限。
&emsp;`read:repo_hook`| 授予对{% ifversion fpt %}公共或专用{% elsif ghec or ghes %}公共、专用或内部{% elsif ghae %}专用或内部{% endif %}存储库中挂钩的读取和 ping 访问权限。
**`admin:org`** | 全面管理组织及其团队、项目和成员。
&emsp;`write:org`| 对组织成员身份、组织项目和团队成员身份的读取和写入权限。
&emsp;`read:org`| 对组织成员身份、组织项目和团队成员身份的只读权限。
**`admin:public_key`** | 全面管理公钥。
&emsp;`write:public_key`| 创建、列出和查看公钥的详细信息。
&emsp;`read:public_key`| 列出和查看公钥的详细信息。
**`admin:org_hook`** | 授予对组织挂钩的读取、写入、ping 和删除权限。 注意：OAuth 令牌只能对由 OAuth 应用创建的组织挂钩执行这些操作。 {% data variables.product.pat_generic_caps %} 只能对用户创建的组织挂钩执行这些操作。
**`gist`** | 授予对 Gist 的写入权限。
**`notifications`** | 授予： <br/>* 对用户的通知的读取访问权限 <br/>* 对线程的“标记为读取”访问权限 <br/>* 对存储库的监视和取消监视访问权限，以及 <br/>* 对线程订阅的读取、写入和删除访问权限。
**`user`** | 仅授予对个人资料的读取/写入权限。  请注意，此范围包括 `user:email` 和 `user:follow`。
&emsp;`read:user`| 授予读取用户个人资料数据的权限。
&emsp;`user:email`| 授予对用户电子邮件地址的读取权限。
&emsp;`user:follow`| 授予关注或取消关注其他用户的权限。{% ifversion projects-oauth-scope %} **`project`** | 授予对用户和组织 {% data variables.projects.projects_v2 %} 的读/写访问权限。
&emsp;`read:project`| 授予对用户和组织 {% data variables.projects.projects_v2 %} 的只读访问权限。{% endif %} **`delete_repo`** | 授予删除可管理存储库的权限。
**`write:discussion`** | 授予对团队讨论的读取和写入权限。
&emsp;`read:discussion` | 授予对团队讨论的读取权限。
**`write:packages`** | 授予在 {% data variables.product.prodname_registry %} 中上传或发布包的权限。 有关详细信息，请参阅“[发布包](/github/managing-packages-with-github-packages/publishing-a-package)”。
**`read:packages`** | 授予从 {% data variables.product.prodname_registry %} 下载或安装包的权限。 有关详细信息，请参阅“[安装包](/github/managing-packages-with-github-packages/installing-a-package)”。
**`delete:packages`** | 授予从 {% data variables.product.prodname_registry %} 删除包的权限。 有关详细信息，请参阅“[删除和还原包](/packages/learn-github-packages/deleting-and-restoring-a-package)”。
**`admin:gpg_key`** | 全面管理 GPG 密钥。
&emsp;`write:gpg_key`| 创建、列出和查看 GPG 密钥的详细信息。
&emsp;`read:gpg_key`| 列出和查看 GPG 密钥的详细信息。{% ifversion fpt or ghec %} **`codespace`** | 授予创建和管理 codespace 的权限。 Codespaces 可以暴露可能有不同范围集的 GITHUB_TOKEN。 有关详细信息，请参阅“[{% data variables.product.prodname_github_codespaces %} 中的安全性](/codespaces/codespaces-reference/security-in-github-codespaces#authentication)”。{% endif %} **`workflow`** | 授予添加和更新 {% data variables.product.prodname_actions %} 工作流文件的权限。 如果在同一仓库中的另一个分支上存在相同的文件(具有相同的路径和内容)，则工作流程文件可以在没有此作用域的情况下提交。 工作流文件可以公开可能有不同范围集的 `GITHUB_TOKEN`。 有关详细信息，请参阅“[工作流中的身份验证](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)”。{% ifversion not fpt %} `admin:enterprise` | 完全掌控企业功能。 有关详细信息，请参阅 GraphQL API 文档中的“[管理企业帐户](/graphql/guides/managing-enterprise-accounts)”。<br><br>包括 `manage_runners:enterprise`{% ifversion ghec or ghes > 3.3 %}、`manage_billing:enterprise`、{% endif %} 和 `read:enterprise`。 &emsp;`manage_runners:enterprise` | 完全掌控企业内部的自承载运行程序。 有关详细信息，请参阅[关于自承载运行器](/actions/hosting-your-own-runners/about-self-hosted-runners)。 {% ifversion ghec or ghes > 3.3 %} &emsp;`manage_billing:enterprise` | 读取和写入企业账单数据。 有关详细信息，请参阅 REST API 文档中的“[账单](/rest/billing)”。 {% endif %} &emsp;`read:enterprise` | 读取企业资料中的所有数据。 不包括企业成员或组织的配置文件数据。{% endif %}{% ifversion read-audit-scope %} **`read:audit_log`** | 读取审核日志数据。{% endif %} {% note %}

注意：OAuth 应用可以在初始重定向中请求范围。 可使用 `%20` 以空格分隔多个范围来指定它们：

    https://github.com/login/oauth/authorize?
      client_id=...&
      scope=user%20repo_deployment

{% endnote %}

## 请求的作用域和授予的作用域

`scope` 属性列出了附加到用户授予的令牌的范围。 通常，这些作用域与您请求的作用域相同。
但是，用户可以编辑其范围，实际授予应用程序更少的权限（相比你最初请求的权限）。 此外，用户还可以在 OAuth 流程完成后编辑令牌范围。
你应该意识到这种可能性，并相应地调整应用程序的行为。

如果用户选择授予更少的权限（相比你最初请求的权限），妥善处理这种错误情况非常重要。 例如，应用程序可以警告或以其他方式告诉用户，他们可用的功能会减少或者无法执行某些操作。

此外，应用程序总是可以将用户送回流程以获取更多权限，但不要忘记，用户总是可以说不。

请查看[身份验证基础知识指南](/guides/basics-of-authentication/)，其中提供了有关处理可修改令牌范围的提示。

## 标准化作用域

请求多个范围时，将用标准化的范围列表保存令牌，而放弃其他请求的范围隐式包含的那些范围。 例如，请求 `user,gist,user:email` 将生成仅具有 `user` 和 `gist` 范围的令牌，因为使用 `user:email` 范围授予的权限包含在 `user` 范围中。
