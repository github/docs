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
---

在 GitHub 上设置 OAuth 应用程序时，请求的作用域会在授权表单上显示给用户。

{% note %}

**注** ：如果您在构建 GitHub 应用程序，则不需要在授权请求中提供作用域。 更多信息请参阅“[识别和授权 GitHub 应用程序用户](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)”。

{% endnote %}

如果 {% data variables.product.prodname_oauth_app %} 无法访问浏览器（如 CLI 工具），则无需为用户指定向应用程序验证的作用域。 更多信息请参阅“[授权 OAuth 应用程序](/developers/apps/authorizing-oauth-apps#device-flow)”。

检查标头以查看您拥有哪些 OAuth 作用域，以及 API 操作接受什么：

```shell
$ curl -H "Authorization: token OAUTH-TOKEN" {% data variables.product.api_url_pre %}/users/codertocat -I
HTTP/2 200
X-OAuth-Scopes: repo, user
X-Accepted-OAuth-Scopes: user
```

* `X-OAuth-Scopes` 列出令牌已授权的作用域。
* `X-Accepted-OAuth-Scopes` 列出操作检查的作用域。

## 可用作用域

| 名称                       | 描述                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |{% ifversion not ghae %}
| **`（无作用域）`**             | 授予对公共信息的只读访问权限（包括用户个人资料信息、公共仓库信息和 gist）{% endif %}{% ifversion ghes or ghae %}
| **`site_admin`**         | 授予站点管理员对 [{% data variables.product.prodname_ghe_server %} 管理 API 端点](/rest/reference/enterprise-admin)的访问权限。{% endif %}
| **`repo`**               | 授予对仓库（包括私有仓库）的完全访问权限。 这包括对仓库和组织的代码、提交状态、仓库和组织项目、邀请、协作者、添加团队成员身份、部署状态以及仓库 web 挂钩的读取/写入权限。 还授予管理用户项目的权限。                                                                                                                                                                                                                                                |
| &emsp;`repo:status`      | 授予对{% ifversion fpt %}公共和私有{% elsif ghec or ghes %}公共、私有和内部{% elsif ghae %}私有和内部{% endif %}仓库中的提交状态的读/写访问权限。 仅在授予其他用户或服务对私有仓库提交状态的访问权限而*不*授予对代码的访问权限时，才需要此作用域。                                                                                                                                                                                        |
| &emsp;`repo_deployment`  | 授予对{% ifversion not ghae %}公共{% else %}内部{% endif %}和私有仓库的[部署状态](/rest/reference/repos#deployments)的访问权限。 仅在授予其他用户或服务对部署状态的访问权限而*不*授予对代码的访问权限时，才需要此作用域。{% ifversion not ghae %}
| &emsp;`public_repo`      | 将访问权限限制为公共仓库。 这包括对公共仓库和组织的代码、提交状态、仓库项目、协作者以及部署状态的读取/写入权限。 标星公共仓库也需要此权限。{% endif %}
| &emsp;`repo:invite`      | 授予接受/拒绝仓库协作邀请的权限。 仅在授予其他用户或服务对邀请的访问权限而*不*授予对代码的访问权限时，才需要此作用域。{% ifversion fpt or ghes or ghec %}
| &emsp;`security_events`  | 授予：<br/>对 [{% data variables.product.prodname_code_scanning %} API](/rest/reference/code-scanning) 中安全事件的读取和写入权限<br/>对 {%- ifversion ghec %}[{% data variables.product.prodname_secret_scanning %} API](/rest/reference/secret-scanning) 中安全事件的读取和写入权限<br/>{%- endif %}仅在授予其他用户或服务对安全事件的访问权限而*不*授予对代码的访问权限时，才需要此作用域。{% endif %}
| **`admin:repo_hook`**    | 授予对{% ifversion fpt %}公共或私有{% elsif ghec or ghes %}公共、私有或内部{% elsif ghae %}私有或内部{% endif %}仓库中仓库挂钩的读取、写入、ping 和删除访问权限。 `repo` {% ifversion fpt or ghec or ghes %}和 `public_repo` 范围授予{% else %}范围授予{% endif %}对仓库（包括仓库挂钩）的完全访问权限。 使用 `admin:repo_hook` 作用域将访问权限限制为仅仓库挂钩。                                                                              |
| &emsp;`write:repo_hook`  | 授予对{% ifversion fpt %}公共或私有{% elsif ghec or ghes %}公共、私有或内部{% elsif ghae %}私有或内部{% endif %}仓库中挂钩的读取、写入和 ping 访问权限。                                                                                                                                                                                                                                    |
| &emsp;`read:repo_hook`   | 授予对{% ifversion fpt %}公共或私有{% elsif ghec or ghes %}公共、私有或内部{% elsif ghae %}私有或内部{% endif %}仓库中挂钩的读取和 ping 访问权限。                                                                                                                                                                                                                                       |
| **`admin:org`**          | 全面管理组织及其团队、项目和成员。                                                                                                                                                                                                                                                                                                                                     |
| &emsp;`write:org`        | 对组织成员身份、组织项目和团队成员身份的读取和写入权限。                                                                                                                                                                                                                                                                                                                          |
| &emsp;`read:org`         | 对组织成员身份、组织项目和团队成员身份的只读权限。                                                                                                                                                                                                                                                                                                                             |
| **`admin:public_key`**   | 全面管理公钥。                                                                                                                                                                                                                                                                                                                                               |
| &emsp;`write:public_key` | 创建、列出和查看公钥的详细信息。                                                                                                                                                                                                                                                                                                                                      |
| &emsp;`read:public_key`  | 列出和查看公钥的详细信息。                                                                                                                                                                                                                                                                                                                                         |
| **`admin:org_hook`**     | 授予对组织挂钩的读取、写入、ping 和删除权限。 **注：**OAuth 令牌只能对由 OAuth 应用程序创建的组织挂钩执行这些操作。 个人访问令牌只能对用户创建的组织挂钩执行这些操作。                                                                                                                                                                                                                                                       |
| **`gist`**               | 授予对 gist 的写入权限。                                                                                                                                                                                                                                                                                                                                       |
| **`通知`**                 | 授予：<br/>* 对用户通知的读取权限 <br/>* 对线程的标记读取权限 <br/>* 对仓库的关注和取消关注权限，以及<br/>* 对线程订阅的读取、写入和删除权限。                                                                                                                                                                                                                                        |
| **`用户`**                 | 仅授予对个人资料的读取/写入权限。  请注意，此作用域包括 `user:email` 和 `user:follow`。                                                                                                                                                                                                                                                                                           |
| &emsp;`read:user`        | 授予读取用户个人资料数据的权限。                                                                                                                                                                                                                                                                                                                                      |
| &emsp;`user:email`       | 授予对用户电子邮件地址的读取权限。                                                                                                                                                                                                                                                                                                                                     |
| &emsp;`user:follow`      | 授予关注或取消关注其他用户的权限。{% ifversion projects-oauth-scope %}
| **`project`**            | 授予对用户和组织项目（测试版）的读/写访问权限。                                                                                                                                                                                                                                                                                                                              |
| &emsp;`read:project`     | 授予对用户和组织项目（测试版）的只读访问权限。{% endif %}
| **`delete_repo`**        | 授予删除可管理仓库的权限。                                                                                                                                                                                                                                                                                                                                         |
| **`write:discussion`**   | 授予对团队讨论的读取和写入权限。                                                                                                                                                                                                                                                                                                                                      |
| &emsp;`read:discussion`  | 允许对团队讨论进行读取访问。                                                                                                                                                                                                                                                                                                                                        |
| **`write:packages`**     | 授予在 {% data variables.product.prodname_registry %} 中上传或发布包的权限。 更多信息请参阅“[发布包](/github/managing-packages-with-github-packages/publishing-a-package)”。                                                                                                                                                                                                   |
| **`read:packages`**      | 授予从 {% data variables.product.prodname_registry %} 下载或安装包的权限。 更多信息请参阅“[安装包](/github/managing-packages-with-github-packages/installing-a-package)”。                                                                                                                                                                                                    |
| **`delete:packages`**    | 授予从 {% data variables.product.prodname_registry %} 删除包的权限。 更多信息请参阅“[删除和恢复软件包](/packages/learn-github-packages/deleting-and-restoring-a-package)”。                                                                                                                                                                                                     |
| **`admin:gpg_key`**      | 全面管理 GPG 密钥。                                                                                                                                                                                                                                                                                                                                          |
| &emsp;`write:gpg_key`    | 创建、列出和查看 GPG 密钥的详细信息。                                                                                                                                                                                                                                                                                                                                 |
| &emsp;`read:gpg_key`     | 列出和查看 GPG 密钥的详细信息。{% ifversion fpt or ghec %}
| **`代码空间`**               | 授予创建和管理代码空间的能力。 Codespaces 可以暴露可能有不同范围集的 GITHUB_TOKEN。 For more information, see "[Security in {% data variables.product.prodname_github_codespaces %}](/codespaces/codespaces-reference/security-in-github-codespaces#authentication)."{% endif %}
| **`工作流程`**               | 授予添加和更新 {% data variables.product.prodname_actions %} 工作流程文件的权限。 如果在同一仓库中的另一个分支上存在相同的文件(具有相同的路径和内容)，则工作流程文件可以在没有此作用域的情况下提交。 工作流程文件可以暴露可能有不同范围集的 `GITHUB_TOKEN`。 更多信息请参阅“[工作流程中的身份验证](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)。                                                                               |

{% note %}

**注：**您的 OAuth 应用程序可以在初始重定向中请求作用域。 您可以使用 `%20` 以空格分隔多个作用域来指定它们：

    https://github.com/login/oauth/authorize?
      client_id=...&
      scope=user%20repo_deployment

{% endnote %}

## 请求的作用域和授予的作用域

`scope` 属性列出了用户授予的附加到令牌的作用域。 通常，这些作用域与您请求的作用域相同。 但是，用户可以编辑其作用域，实际上授予应用程序更少的权限（相比您最初请求的权限）。 此外，用户还可以在 OAuth 流程完成后编辑令牌作用域。 您应该意识到这种可能性，并相应地调整应用程序的行为。

如果用户选择授予更少的权限（相比您最初请求的权限），妥善处理这种错误情况非常重要。 例如，应用程序可以警告或以其他方式告诉用户，他们可用的功能会减少或者无法执行某些操作。

此外，应用程序总是可以将用户送回流程以获取更多权限，但不要忘记，用户总是可以说不。

请查看[身份验证基础知识指南](/guides/basics-of-authentication/)，其中提供了有关处理可修改令牌作用域的提示。

## 标准化作用域

请求多个作用域时，将用标准化的作用域列表保存令牌，而放弃其他请求的作用域隐式包含的那些作用域。 例如，请求 `user,gist,user:email` 将生成仅具有 `user` 和 `gist` 作用域的令牌，因为使用 `user:email` 作用域授予的权限包含在 `user` 作用域中。
