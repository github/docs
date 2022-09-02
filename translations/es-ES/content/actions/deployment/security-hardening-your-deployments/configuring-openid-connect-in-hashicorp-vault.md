---
title: Configurar OpenID Connect en HashiCorp Vault
shortTitle: Configurar OpenID Connect en HashiCorp Vault
intro: Utiliza OpenID Connect dentro de tus flujos de trabajo para autenticarte con HashiCorp Vault.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghae: issue-4856
  ghec: '*'
  ghes: '>=3.5'
type: tutorial
topics:
  - Security
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Resumen

OpenID Connect (OIDC) permite que tus flujos de trabajo de {% data variables.product.prodname_actions %} se autentiquen con HashiCorp Vault para recuperar secretos.

Esta guía te proporciona un resumen de cómo configurar HashiCorp Vault para que confíe en el OIDC de {% data variables.product.prodname_dotcom %} como identidad federada y demuestra cómo utilizar esta configuración en la acción [hashicorp/vault-action](https://github.com/hashicorp/vault-action) para recuperar los secretos desde HashiCorp Vault.

## Prerrequisitos

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## Agregar el proveedor de identidad a HashiCorp Vault

Para utilizar OIDC con HashiCorp Vault, necesitarás agregar una configuración de confianza para el proveedor de OIDC de {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta la [documentación](https://www.vaultproject.io/docs/auth/jwt) de HashiCorp Vault.

Para configurar tu servidor de Vault para que acepte tokens web de JSON (JWT) para autenticación:

1. Habilita el método `auth` del JWT y utiliza `write` para aplicar la configuración a tu bóveda. Para los parámetros de `oidc_discovery_url` y `bound_issuer`, utiliza {% ifversion ghes %}`https://HOSTNAME/_services/token`{% else %}`https://token.actions.githubusercontent.com`{% endif %}. Los parámetros permiten que el servidor de Vault verifique los tokens web de JSON (JWT) durante el proceso de autenticación.

    ```sh{:copy}
    vault auth enable jwt
    ```

    ```sh{:copy}
    vault write auth/jwt/config \
      bound_issuer="{% ifversion ghes %}https://HOSTNAME/_services/token{% else %}https://token.actions.githubusercontent.com{% endif %}" \
      oidc_discovery_url="{% ifversion ghes %}https://HOSTNAME/_services/token{% else %}https://token.actions.githubusercontent.com{% endif %}"
    ```
2. Configura una política que solo otorgue acceso a las rutas específicas que utilizarán tus flujos de trabajo para recuperar los secretos. Para obtener más políticas avanzadas, consulta la [documentación de las políticas](https://www.vaultproject.io/docs/concepts/policies) de HashiCorp Vault.

    ```sh{:copy}
    vault policy write myproject-production - <<EOF
    # Read-only permission on 'secret/data/production/*' path

    path "secret/data/production/*" {
      capabilities = [ "read" ]
    }
    EOF
    ```
3. Configura los roles para agrupar políticas diferentes juntas. Si la autenticación tiene éxito, estas políticas se adjuntarán al token de acceso de Vault resultante.

    ```sh{:copy}
    vault write auth/jwt/role/myproject-production -<<EOF
    {
      "role_type": "jwt",
      "user_claim": "actor",
      "bound_claims": {
        "repository": "user-or-org-name/repo-name"
      },
      "policies": ["myproject-production"],
      "ttl": "10m"
    }
    EOF
    ```

- `ttl` define la validez del token de acceso resultante.
- Asegúrate de que el parámetro `bound_claims` se define para tus requisitos de seguridad y que tenga por lo menos una condición. Opcionalmente, también puedes configurar el parámetro `bound_subject` así como el de `bound_audiences`.
- Para verificiar las reclamaciones arbitrarias en la carga útil recibida del JWT, el parámetro `bound_claims` contiene un conjunto de reclamaciones y sus valores requeridos. En el ejemplo anterior, el rol aceptará cualquier solicitud de autenticación entrante del nombre `repo-name` que el pertenece a la cuenta `user-or-org-name`.
- Para ver todas las reclamaciones disponibles compatibles con el proveedor de OIDC de {% data variables.product.prodname_dotcom %}, consulta la sección ["Configurar la confianza de OIDC con la nube"](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-oidc-trust-with-the-cloud).

Para obtener más información, consulta la [documentación](https://www.vaultproject.io/docs/auth/jwt) de HashiCorp Vault.

## Actualizar tu flujo de trabajo de {% data variables.product.prodname_actions %}

Para actualizar tus flujos de trabajo para ODIC, necesitarás hacer dos cambios a tu YAML:
1. Agregar ajustes de permisos para el token.
2. Utiliza la acción [`hashicorp/vault-action`](https://github.com/hashicorp/vault-action) para intercambiar el token OIDC (JWT) por un token de acceso a la nube.


Para agregar la integración de OIDC con tus flujos de trabajo, la cual les permita acceder a los secretos en la bóveda, necesitarás agregar los siguientes cambios al código:

- Otorga permiso para recuperar el token del proveedor de OIDC de {% data variables.product.prodname_dotcom %}:
  - El flujo de trabajo necesita ajustes de `permissions:` con el valor `id-token` configurado en `write`. Esto te permite recuperar el token de OIDC desde cualquier job en el flujo de trabajo.
- Solicita el JWT desde el proveedor de OIDC de {% data variables.product.prodname_dotcom %} y preséntalo a HashiCorp Vault para recibir un token de acceso:
  - Puedes utilizar la acción [`hashicorp/vault-action`](https://github.com/hashicorp/vault-action) para recuperar el JWT y recibir el token de acceso de Vault, o puedes utilizar el [kit de herramientas de las acciones](https://github.com/actions/toolkit/) para recuperar los tokens para tu job.

Este ejemplo demuestra cómo utilizar OIDC con la acción oficial para solicitar un secreto de HashiCorp Vault.

### Agregar ajustes de permisos

 {% data reusables.actions.oidc-permissions-token %}

{% note %}

**Nota**:

Cuando se utiliza la clave `permissions`, todos los permisos no especificados se configuran como _sin acceso_, con la excepción del alcance de metadatos, el cual siembre obtiene acceso de _lectura_. Como resultado, podrías necesitar agregar otros permisos, tales como `contents: read`. Consulta la sección [Autenticación automática de token](/actions/security-guides/automatic-token-authentication) para obtener más información.

{% endnote %}

### Solicitar el token de acceso

La acción `hashicorp/vault-action` recibe un JWT del proveedor de OIDC de {% data variables.product.prodname_dotcom %} y posteriormente solicita un token de acceso de tu instancia de HashiCorp Vault para recuperar los secretos. Para obtener más información, consulta [documentación](https://github.com/hashicorp/vault-action) de la acción de GitHub de HashiCorp Vault.

Este ejemplo demuestra cómo crear un job que solicite un secreto de HashiCorp Vault.

- `<Vault URL>`: Reemplaza esto con la URL de tu HashiCorp Vault.
- `<Vault Namespace>`: Reemplaza esto con el designador de nombre que configuraste en HashiCorp Vault. Por ejemplo: `admin`.
- `<Role name>`: Reemplaza esto con el rol que configuraste en la relación de confianza de HashiCorp Vault.
- `<Secret-Path>`: Reemplaza esto con la ruta al secreto que estás recuperando desde HashiCorp Vault. Por ejemplo: `secret/data/production/ci npmToken`.

```yaml{:copy}
jobs:
  retrieve-secret:
    runs-on: ubuntu-latest
    permissions:
      id-token: write
      contents: read
    steps:
      - name: Retrieve secret from Vault
        uses: hashicorp/vault-action@v2.4.0
          with:
            method: jwt
            url: <Vault URL>
            namespace: <Vault Namespace - HCP Vault and Vault Enterprise only>
            role: <Role name>
            secrets: <Secret-Path>

      - name: Use secret from Vault
        run: |
          # This step has access to the secret retrieved above; see hashicorp/vault-action for more details.
```

{% note %}

**Nota**:

- Si no se puede acceder a tu servidor de Vault desde la red pública, considera utilizar un ejecutor auto-hospedado con otros [métodos de autenticación](https://www.vaultproject.io/docs/auth) de Vault disponibles. Para obtener más información, consulta "[Acerca de los ejecutores autoalojados](/actions/hosting-your-own-runners/about-self-hosted-runners)."
- `<Vault Namespace>` debe configurarse para el despliegue de una empresa de Vault (incluyendo a HCP Vault). Para obtener más información, consulta la sección [designador de nombre de Vault](https://www.vaultproject.io/docs/enterprise/namespaces).

{% endnote %}

### Revocar el token de acceso

Predeterminadamente, el servidor de Vault revocará automáticamente los tokens de acceso cuando su TTL expire para que no tengas que revocarlos manualmente. Sin embargo, si quieres revocarlos de inmediato después de que tu job se haya completado o haya fallado, puedes revocar manualmente el token emitido utilizando la [API de Vault](https://www.vaultproject.io/api/auth/token#revoke-a-token-self).

1. Configura la opción `exportToken` en `true` (predeterminado: `false`). Esto exporta el token de acceso emitido de Vault como una variable de ambiente: `VAULT_TOKEN`.
2. Agrega un paso para llamar a la API de Vault [Revocar un token (auto)](https://www.vaultproject.io/api/auth/token#revoke-a-token-self) para revocar el token de acceso.

```yaml{:copy}
jobs:
  retrieve-secret:
    runs-on: ubuntu-latest
    permissions:
      id-token: write
      contents: read
    steps:
      - name: Retrieve secret from Vault
        uses: hashicorp/vault-action@v2.4.0
          with:
            exportToken: true
            method: jwt
            url: <Vault URL>
            role: <Role name>
            secrets: <Secret-Path>

      - name: Use secret from Vault
        run: |
          # This step has access to the secret retrieved above; see hashicorp/vault-action for more details.

      - name: Revoke token
        # This step always runs at the end regardless of the previous steps result
        if: always()
        run: |
          curl -X POST -sv -H "X-Vault-Token: {% raw %}${{ env.VAULT_TOKEN }}{% endraw %}" \
            <Vault URL>/v1/auth/token/revoke-self
```
