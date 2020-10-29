您需要访问令牌才能发布、安装和删除 {{ site.data.variables.product.prodname_registry }} 中的包。 您可以使用个人访问令牌直接向 {% data variables.product.prodname_registry %} 或 {% data variables.product.prodname_dotcom %} API 验证您的用户名。 创建个人访问令牌时，可根据需要为令牌分配不同的作用域。

{% if currentVersion == "free-pro-team@latest" %}
To authenticate using a
{% data variables.product.prodname_actions %} 工作流程:
- 对于包注册表 (`PACKAGE-REGISTRY.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME`)，您可以使用 `GITHUB_TOKEN`。
- 对于容器注册表 (`ghcr.io/OWNER/IMAGE-NAME`)，必须使用个人访问令牌。
{% else %}
To authenticate to
{% data variables.product.prodname_registry %} using a {% data variables.product.prodname_actions %} workflow, you must use `GITHUB_TOKEN`.
{% endif %}
