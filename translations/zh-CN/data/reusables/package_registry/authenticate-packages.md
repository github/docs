您需要访问令牌才能发布、安装和删除 {{ site.data.variables.product.prodname_registry }} 中的包。 您可以使用个人访问令牌直接向 {% data variables.product.prodname_registry %} 或 {% data variables.product.prodname_dotcom %} API 验证您的用户名。 创建个人访问令牌时，可根据需要为令牌分配不同的作用域。

{% if currentVersion == "free-pro-team@latest" %}
要使用
{% data variables.product.prodname_actions %} 工作流程验证：
- 对于包注册表 (`PACKAGE-REGISTRY.pkg.github.com`)，您可以使用 `GITHUB_TOKEN`。
- 对于容器注册表 (`ghcr.io/OWNER/IMAGE-NAME`)，必须使用个人访问令牌。
{% else %}
要
使用 {% data variables.product.prodname_actions %} 工作流程向 {% data variables.product.prodname_registry %} 验证，必须使用 `GITHUB_TOKEN`。
{% endif %}
