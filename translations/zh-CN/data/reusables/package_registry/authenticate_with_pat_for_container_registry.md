{% ifversion fpt or ghec %}

要在 {% data variables.product.prodname_actions %} 工作流程中向 {% data variables.product.prodname_container_registry %} 验证，请使用 `GITHUB_TOKEN` 以获得最佳的安全性和体验。 如果您的工作流程使用个人访问令牌 (PAT) 向 `ghcr.io` 验证，我们强烈建议您更新工作流程以使用 `GITHUB_TOKEN`。

有关更新使用个人访问令牌向 `ghcr.io` 验证的工作流程的指南，请参阅“[升级访问 `ghcr.io` 的工作流程](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-ghcrio)”。

有关 `GITHUB_TOKEN` 的更多信息，请参阅“[工作流程中的身份验证](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)”。

如果您在操作中使用 {% data variables.product.prodname_container_registry %} ，请遵循我们在“[GitHub Actions 的安全强化](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)”中的安全最佳实践。

{% endif %}
