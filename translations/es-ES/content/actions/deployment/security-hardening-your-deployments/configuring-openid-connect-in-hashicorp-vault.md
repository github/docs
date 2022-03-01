---
title: Configurar OpenID Connect en HashiCorp Vault
shortTitle: Configurar OpenID Connect en HashiCorp Vault
intro: Utiliza OpenID Connect dentro de tus flujos de trabajo para autenticarte con HashiCorp Vault.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghae: issue-4856
  ghec: '*'
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

Configura la bóveda para que acepte Tokens Web JSON (JWT) para la autenticación:
- Para la `oidc_discovery_url`, utiliza `https://token.actions.githubusercontent.com`
- Para el `bound_issuer`, utiliza `https://token.actions.githubusercontent.com`
- Asegúrate de que `bound_subject` se defina correctamente para tus requisitos de seguridad. Para obtener más información, consulta la sección ["Configurar la confianza de OIDC con la nube"](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-oidc-trust-with-the-cloud) y [`hashicorp/vault-action`](https://github.com/hashicorp/vault-action).

## Actualizar tu flujo de trabajo de {% data variables.product.prodname_actions %}

Para actualizar tus flujos de trabajo para ODIC, necesitarás hacer dos cambios a tu YAML:
1. Agregar ajustes de permisos para el token.
2. Utiliza la acción [`hashicorp/vault-action`](https://github.com/hashicorp/vault-action) para intercambiar el token OIDC (JWT) por un token de acceso a la nube.


Para agregar la integración de OIDC con tus flujos de trabajo, la cual les permita acceder a los secretos en la bóveda, necesitarás agregar los siguientes cambios al código:

- Otorga permiso para recuperar el token del proveedor de OIDC de {% data variables.product.prodname_dotcom %}:
  - El flujo de trabajo necesita ajustes de `permissions:` con el valor `id-token` configurado en `write`. Esto te permite recuperar el token de OIDC desde cualquier job en el flujo de trabajo.
- Solicita el JWT desde el proveedor de OIDC de {% data variables.product.prodname_dotcom %} y preséntalo a HashiCorp Vault para recibir un token de acceso:
  - Podrías utilizar las [Herramientas de las acciones](https://github.com/actions/toolkit/) para recuperar los tokens para tu job o puedes utilizar la acción [`hashicorp/vault-action`](https://github.com/hashicorp/vault-action) para recuperar el JWT y recibir el token de acceso de la bóveda.

Este ejemplo demuestra cómo utilizar OIDC con la acción oficial para solicitar un secreto de HashiCorp Vault.

### Agregar ajustes de permisos

 {% data reusables.actions.oidc-permissions-token %}

### Solicitar el token de acceso

La acción `hashicorp/vault-action` recibe un JWT del proveedor de OIDC de {% data variables.product.prodname_dotcom %} y posteriormente solicita un token de acceso de tu instancia de HashiCorp Vault para recuperar los secretos. Para obtener más información, consulta la [documentación](https://github.com/hashicorp/vault-action) de HashiCorp Vault.

Este ejemplo demuestra cómo crear un job que solicite un secreto de HashiCorp Vault.

- `<Vault URL>`: Reemplaza esto con la URL de tu HashiCorp Vault.
- `<Role name>`: Reemplaza esto con el rol que configuraste en la relación de confianza de HashiCorp Vault.
- `<Audience>`: Reemplaza esto con la audiencia que definiste en la relación de confianza de HashiCorp Vault.
- `<Secret-Path>`: Reemplaza esto con la ruta al secreto que estás recuperando desde HashiCorp Vault. Por ejemplo: `secret/data/ci npmToken`.

```yaml{:copy}
jobs:
    retrieve-secret:
        steps:
            - name: Retrieve secret from Vault
              uses: hashicorp/vault-action@v2.4.0
              with:
                url: <Vault URL>
                role: <Role name>
                method: jwt
                jwtGithubAudience: <Audience>
                secrets: <Secret-Path>

            - name: Use secret from Vault
               run: |
                 # This step has access to the secret retrieved above; see hashicorp/vault-action for more details.
```
