您需要访问令牌才能发布、安装和删除 {% data variables.product.prodname_registry %} 中的包。 您可以使用个人访问令牌直接向 {% data variables.product.prodname_registry %} 或 {% data variables.product.prodname_dotcom %} API 验证您的用户名。 创建个人访问令牌时，可根据需要为令牌分配不同的作用域。

{% if currentVersion == "free-pro-team@latest" %}
To authenticate using a {% data variables.product.prodname_actions %} workflow:
- For package registries (`PACKAGE-REGISTRY.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME`), you can use a `GITHUB_TOKEN`.
- For the container registry (`ghcr.io/OWNER/IMAGE-NAME`), you must use a personal access token.
{% else %}
To authenticate to {% data variables.product.prodname_registry %} using a {% data variables.product.prodname_actions %} workflow, you must use `GITHUB_TOKEN`.
{% endif %}
