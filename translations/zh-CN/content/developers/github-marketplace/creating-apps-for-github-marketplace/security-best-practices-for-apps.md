---
title: 应用程序的安全最佳实践
intro: '准备在 {% data variables.product.prodname_marketplace %} 上分享安全应用程序的指南。'
redirect_from:
  - /apps/marketplace/getting-started/security-review-process/
  - /marketplace/getting-started/security-review-process
  - /developers/github-marketplace/security-review-process-for-submitted-apps
  - /developers/github-marketplace/security-best-practices-for-apps
shortTitle: 安全最佳实践
versions:
  free-pro-team: '*'
topics:
  - Marketplace
---

遵循这些最佳实践将有助于您提供安全的用户体验。

### 授权、身份验证和访问控制

我们建议创建 GitHub 应用程序，而不是 OAuth 应用程序。 {% data reusables.marketplace.github_apps_preferred %}. 更多信息请参阅“[GitHub 应用程序和 OAuth 应用程序之间的差异](/apps/differences-between-apps/)”。
- 应用程序应使用最小权限原则，只请求应用程序执行其预期功能所需的 OAuth 作用域和 GitHub 应用程序权限。 更多信息请参阅维基百科中的[最小权限原则](https://en.wikipedia.org/wiki/Principle_of_least_privilege)。
- 应用程序应为客户提供删除其帐户的方法，而无需发送电子邮件或呼叫支持人员。
- 应用程序不应在应用程序的不同实现之间共享令牌。 例如，桌面应用程序应该使用与基于 Web 的应用程序不同的令牌。 单个令牌允许每个应用程序单独请求 GitHub 资源所需的访问权限。
- 根据每种用户类型所需的功能，针对不同的用户角色设计应用程序。 例如，标准用户不应有权访问管理功能，帐单管理员可能不需要仓库代码推送权限。
- 应用程序不应共享服务帐户（如电子邮件或数据库服务）来管理 SaaS 服务。
- 应用程序中使用的所有服务都应具有唯一的登录名和密码凭据。
- 对生产托管基础架构的管理员权限只能授予担当管理职责的工程师和员工。
- 应用程序不应使用个人访问令牌进行身份验证，应验证为 [OAuth 应用程序](/apps/about-apps/#about-oauth-apps)或 [GitHub 应用程序](/apps/about-apps/#about-github-apps)：
  - OAuth 应用程序应使用 [OAuth 令牌](/apps/building-oauth-apps/authorizing-oauth-apps/)进行身份验证。
  - GitHub 应用程序应使用 [JSON Web 令牌 (JWT)](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app)、[OAuth 令牌](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)或[安装访问令牌](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)进行身份验证。

### 数据保护

- 应用程序应使用带有有效 TLS 证书或 SSH for Git 的 HTTPS 对通过公共互联网传输的数据进行加密。
- 应用程序应安全地存储客户端 ID 和客户端密钥。 我们建议将它们存储为[环境变量](http://en.wikipedia.org/wiki/Environment_variable#Getting_and_setting_environment_variables)。
- 应用程序应在收到用户请求后 30 天内或在用户与 GitHub 的法律关系终止后 30 天内删除所有 GitHub 用户数据。
- 应用程序不应要求用户提供其 GitHub 密码。
- 应用程序应该对令牌、客户端 ID 和客户端密钥进行加密。

### 日志记录和监视

应用程序应具有日志记录和监视功能。 应用程序日志应保留至少 30 天，并存档至少一年。 安全日志应包括：

- 身份验证和授权事件
- 服务配置更改
- 对象读取和写入
- 所有用户和组权限更改
- 角色提升到管理员
- 每个事件的一致时间戳
- 所有记录操作的源用户、IP 地址和/或主机名

### 事件响应工作流程

要为用户提供安全体验，应在上架应用程序之前制定明确的事件响应计划。 我们建议您在自己的公司内成立安全和运营事件响应团队，而不是使用第三方供应商。 您应该能够在确认事件后 24 小时内通知 {% data variables.product.product_name %}。

有关事件响应工作流程的示例，请参阅 [SANS 研究所网站](https://www.sans.org/information-security-policy/)上的“数据泄露响应策略”。 包含明确的事件响应措施的简短文档比冗长的策略模板更有价值。

### 漏洞管理和补丁工作流程

您应该定期对生产基础架构进行漏洞扫描。 您应该对漏洞扫描的结果进行分类，并定义您同意修复漏洞的时间段。

如果您还没有准备好设置完整的漏洞管理程序，最好先创建一个修补流程。 有关创建补丁管理策略的指南，请参阅这篇 TechRepublic 文章“[建立补丁管理策略](https://www.techrepublic.com/blog/it-security/establish-a-patch-management-policy-87756/)”。
