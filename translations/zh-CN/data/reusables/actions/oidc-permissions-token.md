The job or workflow run requires a `permissions` setting with [`id-token: write`](/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token). You won't be able to request the OIDC JWT ID token if the `permissions` setting for `id-token` is set to `read` or `none`.

The `id-token: write` setting allows the JWT to be requested from {% data variables.product.prodname_dotcom %}'s OIDC provider using one of these approaches:

- Using environment variables on the runner (`ACTIONS_ID_TOKEN_REQUEST_URL` and `ACTIONS_ID_TOKEN_REQUEST_TOKEN`).
- Using `getIDToken()` from the Actions toolkit.

如果您只需要为单个作业获取 OIDC 令牌，则可以在该作业中设置此权限。 例如：

```yaml{:copy}
permissions:
  id-token: write
```

You may need to specify additional permissions here, depending on your workflow's requirements. 
