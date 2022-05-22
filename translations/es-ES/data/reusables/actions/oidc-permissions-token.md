The job or workflow run requires a `permissions` setting with [`id-token: write`](/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token). You won't be able to request the OIDC JWT ID token if the `permissions` setting for `id-token` is set to `read` or `none`.

The `id-token: write` setting allows the JWT to be requested from {% data variables.product.prodname_dotcom %}'s OIDC provider using one of these approaches:

- Using environment variables on the runner (`ACTIONS_ID_TOKEN_REQUEST_URL` and `ACTIONS_ID_TOKEN_REQUEST_TOKEN`).
- Using `getIDToken()` from the Actions toolkit.

Si solo necesitas recuperar un token de OIDC para un solo job, entonces este permiso puede configurarse dentro de dicho job. Por ejemplo:

```yaml{:copy}
permissions:
  id-token: write
```

Puede que necesites especificar permisos adicionales aquí, dependiendo de los requisitos de tu flujo de trabajo. 
