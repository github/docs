{% if currentVersion == "free-pro-team@latest" %}

PAT 可以授予对您的帐户的广泛访问权限。 在创建 PAT 以向 {% data variables.product.prodname_container_registry %} 验证时，您应该只选择必要的 `read:packages`、`write:packages` 或 `delete:packages` 范围。

要在 {% data variables.product.prodname_actions %} 工作流程中向 {% data variables.product.prodname_container_registry %} 验证，请使用 `GITHUB_TOKEN` 以获得最佳的安全性和体验。

有关更新使用个人访问令牌向 `ghcr.io` 验证的工作流程的指南，请参阅“[升级访问 `ghcr.io` 的工作流程](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-ghcrio)”。

{% data reusables.package_registry.github-token-security-over-pat %}

如果要在测试期间的操作中使用 {% data variables.product.prodname_container_registry %}，请遵循我们在“[GitHub Actions 的安全强化](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)”中的 PAT 使用安全最佳实践。

{% endif %}
