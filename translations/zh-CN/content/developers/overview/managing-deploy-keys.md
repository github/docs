---
title: 管理部署密钥
intro: 了解在自动化部署脚本时管理服务器上的 SSH 密钥的不同方法，以及哪种方法最适合您。
redirect_from:
  - /guides/managing-deploy-keys
  - /v3/guides/managing-deploy-keys
  - /deploy-keys
  - /articles/managing-deploy-keys
  - /multiple-keys
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
---


在自动执行部署脚本时，您可以使用 SSH 代理转发、HTTPS 结合 OAuth 令牌、部署密钥或机器用户来管理服务器上的 SSH 密钥。

## SSH 代理转发

在许多情况下，尤其是在项目开始时，SSH 代理转发是最快和最简单的方法。 代理转发与本地开发计算机使用相同的 SSH 密钥。

#### 优点

* 无需生成或跟踪任何新密钥。
* 没有密钥管理；用户在服务器上具有与本地相同的权限。
* 服务器上没有存储密钥，因此，万一服务器受到破坏，您不需要搜索并删除泄露的密钥。

#### 缺点

* 用户**必须**通过 SSH 进行部署；不能使用自动部署过程。
* 对于 Windows 用户来说，使用 SSH 代理转发可能比较麻烦。

#### 设置

1. 在本地开启代理转发。 更多信息请参阅[我们的 SSH 代理转发指南][ssh-agent-forwarding]。
2. 将部署脚本设置为使用代理转发。 例如，在 bash 脚本中，启用代理转发如下所示： `ssh -A serverA 'bash -s' < deploy.sh`

## 使用 OAuth 令牌进行 HTTPS 克隆

如果不想使用 SSH 密钥，可以将 HTTPS 与 OAuth 令牌结合使用。

#### 优点

* 有权访问服务器的任何人都可以部署仓库。
* 用户不必更改其本地 SSH 设置。
* 不需要多个令牌（每个用户一个）；每个服务器一个令牌就足够了。
* 令牌可随时撤销，本质上变成一次性密码。
{% ifversion ghes %}
* 可以使用 [OAuth API](/rest/reference/oauth-authorizations#create-a-new-authorization) 轻松编写生成新令牌的脚本。
{% endif %}

#### 缺点

* 必须确保使用正确的访问范围配置令牌。
* 令牌本质上是密码，必须以同样的方式进行保护。

#### 设置

请参阅 [我们的指南，了解如何创建个人访问令牌](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)。

## 部署密钥

{% data reusables.repositories.deploy-keys %}

{% data reusables.repositories.deploy-keys-write-access %}

#### 优点

* 有权访问仓库和服务器的任何人都能够部署项目。
* 用户不必更改其本地 SSH 设置。
* 默认情况下，部署密钥是只读的，但在将它们添加到仓库时，您可以授予其写入权限。

#### 缺点

* 部署密钥只授予对单个仓库的访问权限。 较复杂的项目可能要将多个仓库拉取到同一服务器。
* 部署密钥通常不受密码保护，因此在服务器遭到破坏时可轻松访问密钥。

#### 设置

1. 在服务器上[运行 `ssh-keygen` 进程][generating-ssh-keys]，并记住保存生成的公共和私有 RSA 密钥对的位置。
2. 在 {% data variables.product.product_name %} 的右上角，单击您的个人资料照片，然后单击 **Your profile（您的个人资料）**。 ![个人资料导航](/assets/images/profile-page.png)
3. 在个人资料页面上，单击 **Repositories（仓库）**，然后单击仓库的名称。 ![仓库链接](/assets/images/repos.png)
4. 在仓库中，单击 **Settings（设置）**。 ![仓库设置](/assets/images/repo-settings.png)
5. 在边栏中，单击 **Deploy Keys（部署密钥）**，然后单击 **Add deploy key（添加部署密钥）**。 ![添加部署密钥链接](/assets/images/add-deploy-key.png)
6. 提供标题，粘贴到公钥中。  ![部署密钥页面](/assets/images/deploy-key.png)
7. 如果希望此密钥拥有对仓库的写入权限，请选择 **Allow write access（允许写入权限）**。 具有写入权限的部署密钥允许将部署推送到仓库。
8. 单击 **Add key（添加密钥）**。

#### 在一台服务器上使用多个仓库

如果在一台服务器上使用多个仓库，则需要为每个仓库生成专用密钥对。 不能对多个仓库重复使用一个部署密钥。

在服务器的 SSH 配置文件（通常为 `~/.ssh/config`）中，为每个仓库添加一个别名条目。 例如：

```bash
Host {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-0
        Hostname {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}
        IdentityFile=/home/user/.ssh/repo-0_deploy_key

Host {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-1
        Hostname {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}
        IdentityFile=/home/user/.ssh/repo-1_deploy_key
```

* `Host {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-0` - The repository's alias.
* `Hostname {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}` - Configures the hostname to use with the alias.
* `IdentityFile=/home/user/.ssh/repo-0_deploy_key` - Assigns a private key to the alias.

然后可以使用主机名的别名通过 SSH 与仓库进行交互，SSH 将使用分配给该别名的唯一部署密钥。 例如：

```bash
$ git clone git@{% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-1:OWNER/repo-1.git
```

## 服务器到服务器令牌

如果您的服务器需要访问一个或多个组织的仓库，您可以使用 GitHub 应用程序来定义您需要的访问权限，然后从该 GitHub 应用程序生成 _tightly-scoped_、_server-to-server_ 令牌。 服务器到服务器令牌可以扩展到单个或多个仓库，并且可以拥有细致的权限。 例如，您可以生成对仓库内容具有只读权限的令牌。

由于 GitHub 应用程序是 {% data variables.product.product_name %} 上的一类角色，因此服务器到服务器令牌不限于任何 GitHub 用户，这使它们堪比“服务令牌”。 此外，服务器到服务器令牌有专门的速率限制，与它们所依据的组织规模相当。 更多信息请参阅“[{% data variables.product.prodname_github_apps %} 的速率限制](/developers/apps/rate-limits-for-github-apps)”。

#### 优点

- 具有明确定义的权限集和到期时间的严格范围令牌（如果使用 API 手动撤销，则为 1 小时或更短时间）。
- 随组织而增长的专用速率限制。
- 与 GitHub 用户身份脱钩，因此他们不消耗任何许可席位。
- 从未授予密码，因此无法直接登录。

#### 缺点

- 创建 GitHub 应用程序需要其他设置。
- 服务器到服务器令牌 1 小时后过期，因此需要重新生成，通常是按需使用代码。

#### 设置

1. 确定您的 GitHub 应用程序是公开的还是私有的。 如果您的 GitHub 应用程序将仅在您组织内的仓库上操作，您可能希望它是私有的。
1. 确定 GitHub 应用程序所需的权限，例如对仓库内容的只读访问权限。
1. 通过组织的设置页面创建您的 GitHub 应用程序。 更多信息请参阅[创建 GitHub 应用程序](/developers/apps/creating-a-github-app)。
1. 记下您的 GitHub 应用程序 `id`。
1. 生成并下载 GitHub 应用程序的私钥，并妥善保管。 更多信息请参阅[生成私钥](/developers/apps/authenticating-with-github-apps#generating-a-private-key)。
1. 将 GitHub 应用程序安装到需要执行它的仓库中，您可以在组织中的所有仓库上选择性地安装 GitHub 应用程序。
1. 识别代表 GitHub 应用程序与它可以访问的组织仓库之间连接的 `installation_id`。  每个 GitHub 应用程序和组织对最多只有一个 `installation_id`。 您可以通过[为经过验证的应用程序获取组织安装](/rest/reference/apps#get-an-organization-installation-for-the-authenticated-app)来识别此 `installation_id`。 这需要使用 JWT 作为 GitHub 应用程序进行身份验证，更多信息请参阅[作为 GitHub 应用程序进行身份验证](/developers/apps/authenticating-with-github-apps#authenticating-as-a-github-app)。
1. 使用相应的 REST API 端点 [为应用创建安装访问令牌](/rest/reference/apps#create-an-installation-access-token-for-an-app)生成服务器到服务器令牌。 这需要使用 JWT 作为 GitHub 应用程序进行身份验证，更多信息请参阅[作为 GitHub 应用程序进行身份验证](/developers/apps/authenticating-with-github-apps#authenticating-as-a-github-app)以及[作为安装进行身份验证](/developers/apps/authenticating-with-github-apps#authenticating-as-an-installation)。
1. 使用此服务器到服务器令牌，通过 REST 或 GraphQL API 或者通过 Git 客户端与您的仓库进行交互。

## 机器用户

如果您的服务器需要访问多个仓库，您可以创建一个新的 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 帐户并附加一个专用于自动化的 SSH 密钥。 由于此帐户在 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 上不会被人使用，它被称为_机器用户_。 您可以将机器用户添加为个人仓库上的[协作者][collaborator]（授予读取和写入权限）、添加为组织仓库上的[外部协作者][outside-collaborator]（授予读取、写入或管理员权限）或添加到对需要自动化的仓库具有访问权限的[团队][team]（授予团队权限）。

{% ifversion fpt or ghec %}

{% tip %}

**提示：**我们的[服务条款][tos]规定：

> *不允许通过“自动程序”或其他自动方法注册帐户。*

这意味着您不能自动创建帐户。 但是，如果要创建一个机器用户来自动化任务（例如在项目或组织中部署脚本），那就太酷了。

{% endtip %}

{% endif %}

#### 优点

* 有权访问仓库和服务器的任何人都能够部署项目。
* 没有（人类）用户需要更改其本地 SSH 设置。
* 不需要多个密钥；每台服务器一个就足够了。

#### 缺点

* 只有组织才能将机器用户限制为只读访问。 个人仓库始终授予协作者读取/写入权限。
* 机器用户密钥（如部署密钥）通常不受密码保护。

#### 设置

1. 在服务器上[运行 `ssh-keygen` 进程][generating-ssh-keys]，并将公钥附加到机器用户帐户。
2. 授予机器用户帐户访问要自动化的仓库的权限。 为此，您可以将帐户添加为[协作者][collaborator]、添加为[外部协作者][outside-collaborator]或添加到组织中的[团队][team]。

## 延伸阅读
- [配置通知](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#organization-alerts-notification-options)

[ssh-agent-forwarding]: /guides/using-ssh-agent-forwarding/
[generating-ssh-keys]: /articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#generating-a-new-ssh-key
[tos]: /free-pro-team@latest/github/site-policy/github-terms-of-service/
[collaborator]: /articles/inviting-collaborators-to-a-personal-repository
[outside-collaborator]: /articles/adding-outside-collaborators-to-repositories-in-your-organization
[team]: /articles/adding-organization-members-to-a-team
