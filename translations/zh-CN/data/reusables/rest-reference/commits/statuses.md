## 提交状态

状态 API 允许外部服务将提交标记为 `error`、`failure`、`pending` 或 `success` 状态，然后将其反映在涉及这些提交的拉取请求中。

状态还可以包含可选的 `description` 和 `target_url`，强烈建议使用它们，因为它们使状态在 GitHub UI 中更有用。

一种常见用例是持续集成服务使用状态将提交标记为构建成功或失败。  `target_url` 是构建输出的完整 URL，`description` 是关于构建过程中所发生情况的高级摘要。

状态可以包括 `context` 以指示提供该状态的服务是什么。 例如，您可以让持续集成服务推送上下文为 `ci` 的状态，让安全审核工具推送上下文为 `security` 的状态。  然后，您可以使用[获取特定引用的组合状态](/rest/reference/commits#get-the-combined-status-for-a-specific-reference)来检索提交的整个状态。

请注意，`repo:status` [OAuth 作用域](/developers/apps/scopes-for-oauth-apps)授予对状态的定向访问权限，但**不**授予对仓库代码的访问权限，而 `repo` 作用域同时授予对代码和状态的权限。

如果您正在开发 GitHub 应用程序，希望提供有关外部服务的更多信息，则可能需要使用[检查 API](/rest/reference/checks)。