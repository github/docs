您需要访问令牌才能发布、安装和删除 {% data variables.product.prodname_registry %} 中的包。

您可以使用个人访问令牌 (PAT) 向 {% data variables.product.prodname_registry %} 或 {% data variables.product.prodname_dotcom %} API 验证。 创建个人访问令牌时，可根据需要为令牌分配不同的作用域。 有关 PAT 与包相关的域的更多信息，请参阅“[关于 GitHub Packages 的权限](/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries)”。

要在 {% data variables.product.prodname_actions %} 工作流程内向 {% data variables.product.prodname_registry %} 注册表验证，您可以使用：
- `GITHUB_TOKEN` 来发布与工作流程仓库相关联的包。
- PAT 来安装与其他私有仓库（`GITHUB_TOKEN` 无法访问）相关联的包。