{% if currentVersion == "free-pro-team@latest" %}
如果要向
{% data variables.product.prodname_actions %} 工作流程中的 {% data variables.product.prodname_github_container_registry %} 验证，则您必须使用个人访问令牌 (PAT)。 `GITHUB_TOKEN` 目前没有所需的权限。 在 {% data variables.product.prodname_github_container_registry %} 测试阶段，唯一支持的身份验证形式是 PAT 。

PAT 可以授予对您的帐户的广泛访问权限。 在创建 PAT 以向 {% data variables.product.prodname_container_registry %} 验证时，我们建议只选择必要的读取、写入或删除 `package` 作用域。 避免在 GitHub Actions 工作流程使用的 PAT 中包括 `repo` 作用域，因为它会授予不必要的额外访问权限。

如果要在测试期间的操作中使用 {% data variables.product.prodname_container_registry %}，请遵循我们在“[GitHub Actions 的安全强化](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)”中的 PAT 使用安全最佳实践。

{% endif %}
