---
title: GitHub AE 发行说明
intro: 2021 年 3 月 1 日
versions:
  github-ae: '*'
---

### 功能

#### {% data variables.product.prodname_actions %} 测试版

[{% data variables.product.prodname_actions %}](https://github.com/features/actions) 是一个用于 CI/CD 和工作流程自动化的强大而灵活的解决方案。 更多信息请参阅“[{% data variables.product.prodname_actions %} 简介](/actions/learn-github-actions/introduction-to-github-actions)”。

{% data variables.product.product_name %} 上的 {% data variables.product.prodname_actions %} 使用新的 [{% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/about-ae-hosted-runners)，仅适用于 {% data variables.product.product_name %}，可让您自定义运行器的大小、映像和网络配置。 这些运行器是一个客户提供的服务层 CI 计算环境，具有自动缩放和管理功能，完全由 {% data variables.product.company_short %} 管理。 在测试期间，使用 {% data variables.actions.hosted_runner %} 是免费的。 更多信息请参阅“[添加 {% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/adding-ae-hosted-runners)”。

请注意，在此升级期间启用 {% data variables.product.prodname_actions %} 时，名为“GitHub Actions”的两个组织（@**actions** 和 @**github**）将出现在 {% data variables.product.product_location %} 中。 这些组织是 {% data variables.product.prodname_actions %} 所必需的。 名为 @**ghost** 和 @**actions** 的用户在审计日志中显示为这些组织的创建者。

#### {% data variables.product.prodname_registry %} 测试版

[{% data variables.product.prodname_registry %}](https://github.com/features/packages) 是一个包托管服务，原生集成 {% data variables.product.prodname_actions %}、API 和 web 挂钩。 创建一个[端到端的 DevOps 工作流程](/github-ae@latest/packages/quickstart) ，其中包括您的代码、持续集成和部署解决方案。 更多信息请参阅“[关于 {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-github-packages)”。

在此测试期间，{% data variables.product.prodname_registry %} 免费提供给 {% data variables.product.product_name %} 客户。

#### {% data variables.product.prodname_GH_advanced_security %} 测试版

{% data variables.product.prodname_GH_advanced_security %} 在测试版中可用，包括 {% data variables.product.prodname_code_scanning %} 和 {% data variables.product.prodname_secret_scanning %}。 仓库管理员和组织所有者可以在仓库或组织设置的 **Security and analysis（安全和分析）**选项卡中选择 {% data variables.product.prodname_advanced_security %} 功能。 更多信息请参阅“[关于 {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)”。

在此测试期间，{% data variables.product.prodname_advanced_security %} 功能免费提供给 {% data variables.product.product_name %} 客户使用。

#### 管理来自身份提供商 (IdP) 的团队

使用 SCIM（跨域身份管理系统）的客户现在可以与 {% data variables.product.company_short %} 团队同步Azure Active Directory 中的安全组。 一旦团队已链接到安全组，则当用户从其指定的安全组添加或删除时，会员资格将在 {% data variables.product.product_name %} 中自动更新。 更多信息请参阅“[同步团队与身份提供程序组](/github/setting-up-and-managing-organizations-and-teams/synchronizing-a-team-with-an-identity-provider-group)”。

#### IP 允许列表测试版

企业和组织所有者现在可以使用 IP 允许列表来限制对企业或特定组织的流量。 在配置 IP 允许列表后，仅允许来自列表中的 IP 地址的访问者访问受列表保护的资源。

除了能够申请网络安全组更改以过滤到整个 {% data variables.product.product_name %} 租户的流量之外，还提供了这一功能。

更多信息请参阅“[限制到企业的网络流量](/admin/configuration/restricting-network-traffic-to-your-enterprise)”和“[管理组织允许的 IP 地址](/github/setting-up-and-managing-organizations-and-teams/managing-allowed-ip-addresses-for-your-organization)”。

#### 拉取请求自动合并

通过自动合并，拉取请求可设置为当所有合并要求都满足时自动合并。 这样用户无需为了合并拉取请求而不断检查其状态。 自动合并可以由具有合并权限的用户启用，并在有不满意的合并要求（如缺少批准、待定或未通过必需状态检查）的拉取请求上启用。 更多信息请参阅“[自动合并拉取请求](/github/collaborating-with-issues-and-pull-requests/automatically-merging-a-pull-request)”。

### 更改

#### 开发者更改

- [组织所有者现在可以禁用](/github/setting-up-and-managing-organizations-and-teams/managing-the-publication-of-github-pages-sites-for-your-organization)从组织中的仓库发布 {% data variables.product.prodname_pages %} 站点。 这将不会取消发布现有站点。
- 使用 {% data variables.product.prodname_pages %} 的仓库现在可以[从任何分支构建和部署](/github/working-with-github-pages/about-github-pages#publishing-sources-for-github-pages-sites)。
- 在编写议题或拉取请求时，按下 `return` 或 `enter`后，项目符号、数字和任务的列表语法现在会自动完成。
- 您现在可以从仓库页面中删除仓库中的目录。 导航到目录时，“Add file（添加文件）”按钮旁边的新烤肉串按钮会提供删除目录的选项。
- 现在[引用议题或拉取请求](/github/writing-on-github/basic-writing-and-formatting-syntax#referencing-issues-and-pull-requests)更加简便、快速，在 "#" 后可搜索多个字词。

##### 管理更改

- 企业所有者现在可以[发布强制性信息](/admin/user-management/customizing-user-messages-for-your-enterprise#creating-a-mandatory-message)。 该消息显示给所有用户，他们必须确认。 这可用于显示重要信息、服务条款或政策。
- {% data variables.product.prodname_github_app%} 单个文件路径权限现在可以[支持多达 10 个文件](/developers/apps/creating-a-github-app-using-url-parameters)。
- 在配置 {% data variables.product.prodname_github_app%} 时，授权回叫 URL 是所需的字段。 现在，我们将允许集成商指定多个回叫 URL。 如果未列出请求中的 URL，{% data variables.product.product_name %} 拒绝授权。
- [新 API 端点](/rest/reference/apps#create-a-scoped-access-token)允许用户与服务器令牌交换，以将服务器令牌扩展到特定的仓库。
- 事件现在记录在审核日志中：[提升团队成员为团队维护者，以及降级团队维护者为团队成员](/admin/user-management/audited-actions#teams)。
- 现在支持 [OAuth 设备授权流程](/developers/apps/authorizing-oauth-apps#device-flow)。 这允许任何 CLI 客户端或开发者工具使用辅助系统进行身份验证。
- 如果启用了 SCIM 预配，用户不能再删除他们的帐户。

##### 默认分支重命名

企业和组织所有者现在可以设置新仓库的默认分支名称。 企业所有者还可以在所有组织中强制选择默认分支名称，或允许各个组织自行选择。 更多信息请参阅“[在您的企业中执行仓库管理策略](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-on-the-default-branch-name)”和“[管理组织中仓库的默认分支名称](/github/setting-up-and-managing-organizations-and-teams/managing-the-default-branch-name-for-repositories-in-your-organization)”。

现有仓库不受这些设置的影响，其默认分支名称也不会更改。

此更改是 {% data variables.product.company_short %} 为支持希望重命名其默认分支的项目和维护者而做出的众多更改之一。 要了解更多信息，请参阅 [github/renaming](https://github.com/github/renaming)。


### 漏洞补丁
- 用户不能再在其个人资料上设置备份电子邮件地址。 他们的电子邮件地址仅通过 IdP 设置。
- 在通过您的 IdP 配置身份验证后，您不能再启用双重身份验证。
- {% data variables.product.product_name %} 现在可以连接到 Azure Boards。
- ABI 缺少版本标题，现在已设置为“GitHub AE”。
- 文档链接已修复。
- 企业设置内的审计日志转发配置失败。
- 导航到 gists 可能导致 500 错误。
- 支持电子邮件或 URL 无法保存。 现在它经过几分钟后会保存。
- 组织级拉取请求模板未应用到组织中的所有拉取请求。

### 已知问题

- 审核日志中不显示地理位置数据。 否则，可以从与每个事件关联的 IP 地址中辨别位置信息。
- 当仓库没有任何软件包时，仓库页面中指向 {% data variables.product.prodname_registry %} 的链接显示不正确的搜索页面。
