Para agregar la integración de OIDC a tus flujos de despliegue en la nube, necesitarás agregar los siguientes cambios en el código:

- Otorga permiso para recuperar el token del proveedor de OIDC de {% data variables.product.prodname_dotcom %}:
  - El flujo de trabajo necesita un ajuste de `permissions` con un valor de `id-token` definido. Esto te permite recuperar el token de OIDC desde cualquier job en el flujo de trabajo. Si solo necesitas recuperar un token de OIDC para un solo job, entonces este permiso puede configurarse dentro de dicho job.
- Solicita el Token Web JSON (JWT) desde el proveedor de OIDC de {% data variables.product.prodname_dotcom %} y preséntaselo a tu proveedor de servicios en la nube para recibir un token de acceso:
  - Puedes utilizar el kit de herramientas de acciones para recuperar los tokens en tu job o puedes utilizar la acción oficial que creó tu proveedor de servicios en la nube para recuperar el JWT y recibir el token de acceso desde la nube.
