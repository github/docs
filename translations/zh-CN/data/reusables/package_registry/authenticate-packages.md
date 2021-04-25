您需要访问令牌才能发布、安装和删除 {{ site.data.variables.product.prodname_registry }} 中的包。 您可以使用个人访问令牌直接向 {% data variables.product.prodname_registry %} 或 {% data variables.product.prodname_dotcom %} API 验证您的用户名。 创建个人访问令牌时，可根据需要为令牌分配不同的作用域。

{% if currentVersion == "free-pro-team@latest" %}
要使用
{% data variables.product.prodname_actions %} 工作流程验证：
- 对于包注册表 (`PACKAGE-REGISTRY.pkg.github.com`)，您可以使用 `GITHUB_TOKEN`。
- 对于容器注册表 (`ghcr.io/OWNER/IMAGE-NAME`)，可以使用`GITHUB_TOKEN` 或个人访问令牌。 我们强烈建议您使用 `GITHUB_TOKEN` 来避免对仓库的不必要访问。

有关 {% data variables.product.prodname_actions %} 工作流程中使用的 `GITHUB_TOKEN` 的更多信息，请参阅“[加密密钥](/actions/reference/encrypted-secrets)”和“[工作流程中的身份验证](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)”。

{% else %}
要
使用 {% data variables.product.prodname_actions %} 工作流程向 {% data variables.product.prodname_registry %} 验证，必须使用 `GITHUB_TOKEN`。
{% endif %}
