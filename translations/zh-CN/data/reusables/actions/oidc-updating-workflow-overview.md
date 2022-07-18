要将 OIDC 集成添加到您的云部署工作流程，您需要添加以下代码更改：

- 授予从 {% data variables.product.prodname_dotcom %} OIDC 提供商获取令牌的权限：
  - 工作流程需要定义了 `id-token` 值的 `permissions` 设置。 这使您可以从工作流程中的每个作业中获取 OIDC 令牌。 如果您只需要为单个作业获取 OIDC 令牌，则可以在该作业中设置此权限。
- 从 {% data variables.product.prodname_dotcom %} OIDC 提供商处请求 JSON Web 令牌 (JWT)，并将其提供给您的云提供商以接收访问令牌：
  - 您可以使用 Actions 工具包来获取作业中的令牌，也可以使用云提供商创建的官方操作来获取 JWT 并从云接收访问令牌。
