{% data variables.product.prodname_github_container_registry %} 现在支持 `GITHUB_TOKEN` 在您的工作流中进行简单和安全的认证。 如果您的工作流程使用个人访问令牌 (PAT) 向 `ghcr.io` 验证，我们强烈建议您更新工作流程以使用 `GITHUB_TOKEN`。

有关 `GITHUB_TOKEN` 的更多信息，请参阅“[加密密钥](/actions/reference/encrypted-secrets)”和“[工作流程中的身份验证](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)”。