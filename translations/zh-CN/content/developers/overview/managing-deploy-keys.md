---
title: 管理部署密钥
intro: 了解在自动化部署脚本时管理服务器上的 SSH 密钥的不同方法，以及哪种方法最适合您。
redirect_from:
  - /guides/managing-deploy-keys/
  - /v3/guides/managing-deploy-keys
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - api
---


在自动执行部署脚本时，您可以使用 SSH 代理转发、HTTPS 结合 OAuth 令牌、部署密钥或机器用户来管理服务器上的 SSH 密钥。

### SSH 代理转发

在许多情况下，尤其是在项目开始时，SSH 代理转发是最快和最简单的方法。 代理转发与本地开发计算机使用相同的 SSH 密钥。

##### 优点

* 无需生成或跟踪任何新密钥。
* 没有密钥管理；用户在服务器上具有与本地相同的权限。
* 服务器上没有存储密钥，因此，万一服务器受到破坏，您不需要搜索并删除泄露的密钥。

##### 缺点

* 用户**必须**通过 SSH 进行部署；不能使用自动部署过程。
* 对于 Windows 用户来说，使用 SSH 代理转发可能比较麻烦。

##### 设置

1. 在本地开启代理转发。 更多信息请参阅[我们的 SSH 代理转发指南][ssh-agent-forwarding]。
2. 将部署脚本设置为使用代理转发。 例如，在 bash 脚本中，启用代理转发如下所示：`ssh -A serverA 'bash -s' < deploy.sh`

### 使用 OAuth 令牌进行 HTTPS 克隆

如果不想使用 SSH 密钥，您可以使用 [HTTPS 结合 OAuth 令牌][git-automation]。

##### 优点

* 有权访问服务器的任何人都可以部署仓库。
* 用户不必更改其本地 SSH 设置。
* 不需要多个令牌（每个用户一个）；每个服务器一个令牌就足够了。
* 令牌可随时撤销，本质上变成一次性密码。
{% if enterpriseServerVersions contains currentVersion %}
* 可以使用 [OAuth API](/rest/reference/oauth-authorizations#create-a-new-authorization) 轻松编写生成新令牌的脚本。
{% endif %}

##### 缺点

* 必须确保使用正确的访问范围配置令牌。
* 令牌本质上是密码，必须以同样的方式进行保护。

##### 设置

请参阅[使用令牌的 Git 自动化指南][git-automation]。

### 部署密钥

{% data reusables.repositories.deploy-keys %}

{% data reusables.repositories.deploy-keys-write-access %}

##### 优点

* 有权访问仓库和服务器的任何人都能够部署项目。
* 用户不必更改其本地 SSH 设置。
* 默认情况下，部署密钥是只读的，但在将它们添加到仓库时，您可以授予其写入权限。

##### 缺点

* 部署密钥只授予对单个仓库的访问权限。 较复杂的项目可能要将多个仓库拉取到同一服务器。
* 部署密钥通常不受密码保护，因此在服务器遭到破坏时可轻松访问密钥。

##### 设置

1. 在服务器上[运行 `ssh-keygen` 进程][generating-ssh-keys]，并记住保存生成的公共/私有 RSA 密钥对的位置。
2. 在 {% data variables.product.product_name %} 的右上角，单击您的个人资料照片，然后单击 **Your profile（您的个人资料）**。 ![个人资料导航](/assets/images/profile-page.png)
3. 在个人资料页面上，单击 **Repositories（仓库）**，然后单击仓库的名称。 ![仓库链接](/assets/images/repos.png)
4. 在仓库中，单击 **Settings（设置）**。 ![仓库设置](/assets/images/repo-settings.png)
5. 在边栏中，单击 **Deploy Keys（部署密钥）**，然后单击 **Add deploy key（添加部署密钥）**。 ![添加部署密钥链接](/assets/images/add-deploy-key.png)
6. 提供标题，粘贴到公钥中。  ![部署密钥页面](/assets/images/deploy-key.png)
7. 如果希望此密钥拥有对仓库的写入权限，请选择 **Allow write access（允许写入权限）**。 具有写入权限的部署密钥允许将部署推送到仓库。
8. 单击 **Add key（添加密钥）**。

##### 在一台服务器上使用多个仓库

如果在一台服务器上使用多个仓库，则需要为每个仓库生成专用密钥对。 不能对多个仓库重复使用一个部署密钥。

在服务器的 SSH 配置文件（通常为 `~/.ssh/config`）中，为每个仓库添加一个别名条目。 例如：

```bash
Host {% if currentVersion == "free-pro-team@latest" %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-0
        Hostname {% if currentVersion == "free-pro-team@latest" %}github.com{% else %}my-GHE-hostname.com{% endif %}
        IdentityFile=/home/user/.ssh/repo-0_deploy_key

Host {% if currentVersion == "free-pro-team@latest" %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-1
        Hostname {% if currentVersion == "free-pro-team@latest" %}github.com{% else %}my-GHE-hostname.com{% endif %}
        IdentityFile=/home/user/.ssh/repo-1_deploy_key
```

* `Host {% if currentVersion == "free-pro-team@latest" %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-0` - The repository's alias.
* `Hostname {% if currentVersion == "free-pro-team@latest" %}github.com{% else %}my-GHE-hostname.com{% endif %}` - Configures the hostname to use with the alias.
* `IdentityFile=/home/user/.ssh/repo-0_deploy_key` - Assigns a private key to the alias.

然后可以使用主机名的别名通过 SSH 与仓库进行交互，SSH 将使用分配给该别名的唯一部署密钥。 例如：

```bash
$ git clone git@{% if currentVersion == "free-pro-team@latest" %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-1:OWNER/repo-1.git
```

### 机器用户

如果您的服务器需要访问多个仓库，您可以创建一个新的 {% data variables.product.product_name %} 帐户并附加一个专用于自动化的 SSH 密钥。 由于此 {% data variables.product.product_name %} 帐户不会被人类使用，因此称为_机器用户_。 您可以将机器用户添加为个人仓库上的[协作者][collaborator]（授予读取和写入权限）、添加为组织仓库上的[外部协作者][outside-collaborator]（授予读取、写入或管理员权限）或添加到对需要自动化的仓库具有访问权限的[团队][team]（授予团队权限）。

{% if currentVersion == "free-pro-team@latest" %}

{% tip %}

**提示：**我们的[服务条款][tos]规定：

> *不允许通过“自动程序”或其他自动方法注册帐户。*

这意味着您不能自动创建帐户。 但是，如果要创建一个机器用户来自动化任务（例如在项目或组织中部署脚本），那就太酷了。

{% endtip %}

{% endif %}

##### 优点

* 有权访问仓库和服务器的任何人都能够部署项目。
* 没有（人类）用户需要更改其本地 SSH 设置。
* 不需要多个密钥；每台服务器一个就足够了。

##### 缺点

* 只有组织才能将机器用户限制为只读访问。 个人仓库始终授予协作者读取/写入权限。
* 机器用户密钥（如部署密钥）通常不受密码保护。

##### 设置

1. 在服务器上[运行 `ssh-keygen` 进程][generating-ssh-keys]，并将公钥附加到机器用户帐户。
2. 授予机器用户帐户访问要自动化的仓库的权限。 为此，您可以将帐户添加为[协作者][collaborator]、添加为[外部协作者][outside-collaborator]或添加到组织中的[团队][team]。

[ssh-agent-forwarding]: /guides/using-ssh-agent-forwarding/
[generating-ssh-keys]: /articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#generating-a-new-ssh-key
[tos]: /articles/github-terms-of-service/
[git-automation]: /articles/git-automation-with-oauth-tokens
[git-automation]: /articles/git-automation-with-oauth-tokens
[collaborator]: /articles/inviting-collaborators-to-a-personal-repository
[outside-collaborator]: /articles/adding-outside-collaborators-to-repositories-in-your-organization
[team]: /articles/adding-organization-members-to-a-team
