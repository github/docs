作业或工作流程运行需要具有 [`id-token: write`](/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token) 的 `permissions` 设置。 如果将 `id-token` 的 `permissions` 设置设为 `read` 或 `none`，您将无法请求 OIDC JWT ID 令牌。

`id-token: write` 设置允许使用以下方法之一从 {% data variables.product.prodname_dotcom %} 的 OIDC 提供商请求 JWT：

- 在运行器上使用环境变量（`ACTIONS_ID_TOKEN_REQUEST_URL` 和 `ACTIONS_ID_TOKEN_REQUEST_TOKEN`）。
- 从 Actions 工具包使用 `getIDToken()`。

如果您只需要为单个作业获取 OIDC 令牌，则可以在该作业中设置此权限。 例如：

```yaml{:copy}
permissions:
  id-token: write
```

您可能需要在此处指定其他权限，具体取决于工作流程的要求。 
