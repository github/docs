---
title: Configurar OpenID Connect en HashiCorp Vault
shortTitle: OpenID Connect in HashiCorp Vault
intro: Utiliza OpenID Connect dentro de tus flujos de trabajo para autenticarte con HashiCorp Vault.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.5'
type: tutorial
topics:
  - Security
ms.openlocfilehash: 174243818443709ee6ffe3b22aa668cff254266f
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106633'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Información general

OpenID Connect (OIDC) permite que tus flujos de trabajo de {% data variables.product.prodname_actions %} se autentiquen con HashiCorp Vault para recuperar secretos.

En esta guía se proporciona un resumen de cómo configurar HashiCorp Vault para que confíe en el OIDC de {% data variables.product.prodname_dotcom %} como identidad federada y se muestra cómo usar esta configuración en la acción [hashicorp/vault-action](https://github.com/hashicorp/vault-action) para recuperar secretos desde HashiCorp Vault.

## Prerrequisitos

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## Agregar el proveedor de identidad a HashiCorp Vault

Para utilizar OIDC con HashiCorp Vault, necesitarás agregar una configuración de confianza para el proveedor de OIDC de {% data variables.product.prodname_dotcom %}. Para más información, vea la [documentación](https://www.vaultproject.io/docs/auth/jwt) de HashiCorp Vault.

Para configurar el servidor de Vault a fin de que acepte tokens de JSON Web Token (JWT) para la autenticación, haz lo siguiente:

1. Habilita el método `auth` de JWT y usa `write` para aplicar la configuración al almacén. 
  Para las parámetros `oidc_discovery_url` y `bound_issuer`, usa {% ifversion ghes %}`https://HOSTNAME/_services/token`{% else %}`https://token.actions.githubusercontent.com`{% endif %}. Estos parámetros permiten al servidor de Vault comprobar los tokens de JSON Web Token (JWT) recibidos durante el proceso de autenticación.

    ```sh{:copy}
    vault auth enable jwt
    ```
    
    ```sh{:copy}
    vault write auth/jwt/config \
      bound_issuer="{% ifversion ghes %}https://HOSTNAME/_services/token{% else %}https://token.actions.githubusercontent.com{% endif %}" \
      oidc_discovery_url="{% ifversion ghes %}https://HOSTNAME/_services/token{% else %}https://token.actions.githubusercontent.com{% endif %}"
    ```
2. Configura una directiva que solo conceda acceso a las rutas de acceso específicas que usarán los flujos de trabajo para recuperar secretos. Para obtener directivas más avanzadas, consulta la [documentación sobre las directivas](https://www.vaultproject.io/docs/concepts/policies) de HashiCorp Vault.

    ```sh{:copy}
    vault policy write myproject-production - <<EOF
    # Read-only permission on 'secret/data/production/*' path

    path "secret/data/production/*" {
      capabilities = [ "read" ]
    }
    EOF
    ```
3. Configura roles para agrupar diferentes directivas. Si la autenticación se realiza correctamente, estas directivas se adjuntan al token de acceso de Vault resultante.

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
- Asegúrate de que el parámetro `bound_claims` está definido para los requisitos de seguridad y que tiene al menos una condición. Opcionalmente, también puedes establecer los parámetros `bound_subject` y `bound_audiences`.
- Para comprobar las notificaciones arbitrarias en la carga de JWT recibida, el parámetro `bound_claims` contiene un conjunto de notificaciones y sus valores necesarios. En el ejemplo anterior, el rol aceptará todas las solicitudes de autenticación entrantes del repositorio `repo-name` propiedad de la cuenta `user-or-org-name`.
- Para ver todas las notificaciones disponibles compatibles con el proveedor de OIDC de {% data variables.product.prodname_dotcom %}, consulta "[Configuración de la confianza de OIDC con la nube](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-oidc-trust-with-the-cloud)".

Para más información, vea la [documentación](https://www.vaultproject.io/docs/auth/jwt) de HashiCorp Vault.

## Actualizar tu flujo de trabajo de {% data variables.product.prodname_actions %}

Para actualizar tus flujos de trabajo para ODIC, necesitarás hacer dos cambios a tu YAML:
1. Agregar ajustes de permisos para el token.
2. Use la acción [`hashicorp/vault-action`](https://github.com/hashicorp/vault-action) para intercambiar el token de OIDC (JWT) por un token de acceso a la nube.


Para agregar la integración de OIDC con tus flujos de trabajo, la cual les permita acceder a los secretos en la bóveda, necesitarás agregar los siguientes cambios al código:

- Otorga permiso para recuperar el token del proveedor de OIDC de {% data variables.product.prodname_dotcom %}:
  - El flujo de trabajo necesita la configuración `permissions:` con el valor `id-token` establecido en `write`. Esto te permite recuperar el token de OIDC desde cualquier job en el flujo de trabajo.
- Solicita el JWT desde el proveedor de OIDC de {% data variables.product.prodname_dotcom %} y preséntalo a HashiCorp Vault para recibir un token de acceso:
  - Puedes usar la acción [`hashicorp/vault-action`](https://github.com/hashicorp/vault-action) para capturar el JWT y recibir el token de acceso de Vault, o bien el [kit de herramientas de Acciones](https://github.com/actions/toolkit/) para capturar los tokens del trabajo.

Este ejemplo demuestra cómo utilizar OIDC con la acción oficial para solicitar un secreto de HashiCorp Vault.

### Agregar ajustes de permisos

 {% data reusables.actions.oidc-permissions-token %}

{% note %}

**Nota**:

Cuando se usa la clave `permissions`, todos los permisos no especificados se establecen en _Sin acceso_, a excepción del ámbito de metadatos, que siempre obtiene acceso de _lectura_. Como resultado, puede que tengas que agregar otros permisos, como `contents: read`. Para obtener más información, consulta "[Autenticación de token automática](/actions/security-guides/automatic-token-authentication)".

{% endnote %}

### Solicitar el token de acceso

La acción `hashicorp/vault-action` recibe un JWT del proveedor de OIDC de {% data variables.product.prodname_dotcom %} y, después, solicita un token de acceso a la instancia de HashiCorp Vault para recuperar los secretos. Para obtener más información, consulta la [documentación](https://github.com/hashicorp/vault-action) de Acción de GitHub de HashiCorp Vault.

Este ejemplo demuestra cómo crear un job que solicite un secreto de HashiCorp Vault.

- `<Vault URL>`: reemplace esto por la dirección URL de HashiCorp Vault.
- `<Vault Namespace>`: reemplaza esto por el espacio de nombres que has establecido en HashiCorp Vault. Por ejemplo: `admin`.
- `<Role name>`: reemplace esto por el rol que ha establecido en la relación de confianza de HashiCorp Vault.
- `<Secret-Path>`: reemplace esto por la ruta al secreto que se va a recuperar de HashiCorp Vault. Por ejemplo: `secret/data/production/ci npmToken`.

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

- Si el servidor de Vault no es accesible desde la red pública, considera la posibilidad de usar un ejecutor autohospedado con otros [métodos de autenticación](https://www.vaultproject.io/docs/auth) de Vault disponibles. Para más información, consulte [Seguridad del ejecutor autohospedado con repositorios públicos](/actions/hosting-your-own-runners/about-self-hosted-runners).
- `<Vault Namespace>` debe establecerse para una implementación de Vault Enterprise (incluido HCP Vault). Para obtener más información, consulta [Espacio de nombres de Vault](https://www.vaultproject.io/docs/enterprise/namespaces).

{% endnote %}

### Revocación del token de acceso

De manera predeterminada, el servidor de Vault revocará automáticamente los tokens de acceso cuando expire su TTL, por lo que no tendrás que revocar manualmente los tokens de acceso. Pero si quieres revocar los tokens de acceso inmediatamente después de que el trabajo se haya completado o haya producido un error, puedes revocar manualmente el token emitido mediante la [API de Vault](https://www.vaultproject.io/api/auth/token#revoke-a-token-self).

1. Establece la opción `exportToken` en `true` (valor predeterminado: `false`). Esto exporta el token de acceso de Vault emitido como una variable de entorno: `VAULT_TOKEN`.
2. Agrega un paso para llamar a la API de Vault [Revocación de un token (Automática)](https://www.vaultproject.io/api/auth/token#revoke-a-token-self) para revocar el token de acceso.

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
