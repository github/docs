El job o ejecución de flujo de trabajo requiere un ajuste de `permissions` con [`id-token: write`](/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token). No podrás solicitar la ID de token JWT de OIDC si el ajuste de `permissions` para el `id-token` se configura como `read` o `none`.

El ajuste de `id-token: write` permite que se solicite el JWT desde el proveedor de OIDC de {% data variables.product.prodname_dotcom %} utilizando uno de estos enfoques:

- Utilizando variables de ambiente en el ejecutor (`ACTIONS_ID_TOKEN_REQUEST_URL` y `ACTIONS_ID_TOKEN_REQUEST_TOKEN`).
- Utilizando `getIDToken()` desde el kit de herramientas de las acciones.

Si solo necesitas recuperar un token de OIDC para un solo job, entonces este permiso puede configurarse dentro de dicho job. Por ejemplo:

```yaml{:copy}
permissions:
  id-token: write
```

Puede que necesites especificar permisos adicionales aquí, dependiendo de los requisitos de tu flujo de trabajo. 
