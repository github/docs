---
title: Configura OpenID Connect en Azure
shortTitle: Configuring OpenID Connect in Azure
intro: Utiliza OpenID Connect dentro de tus flujos de trabajo para autenticarte con Azure.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.5'
type: tutorial
topics:
  - Security
ms.openlocfilehash: 64c7371eec248c7ebeb45a50091b9ef5dbed645e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145117233'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Información general

OpenID Connect (OIDC) permite que tus flujos de trabajo de {% data variables.product.prodname_actions %} accedan a los recursos en Azure, sin la necesidad de almacenar las credenciales de Azure como secretos de {% data variables.product.prodname_dotcom %} con vida larga. 

En esta guía se proporciona un resumen de cómo configurar Azure para que confíe en el OIDC de {% data variables.product.prodname_dotcom %} como una entidad federada y se incluye un ejemplo de flujo de trabajo para la acción [`azure/login`](https://github.com/Azure/login) en el que se usan tokens para autenticarse en Azure y acceder a los recursos.

## Prerrequisitos

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## Agregar las credenciales federadas a Azure

El proveedor de OIDC de {% data variables.product.prodname_dotcom %} funciona con la federación de identidades de carga de trabajo de Azure. Para obtener información general, vea la documentación de Microsoft en "[Federación de identidades de carga de trabajo](https://docs.microsoft.com/en-us/azure/active-directory/develop/workload-identity-federation)".

Para configurar el proveedor de identidad de OIDC en Azure, necesitarás realizar la siguiente configuración. Para obtener instrucciones sobre cómo realizar estos cambios, consulte [la documentación de Azure](https://docs.microsoft.com/en-us/azure/developer/github/connect-from-azure).

1. Crea una aplicación de Azure Active Directory y un director de servicio.
2. Agrega las credenciales federadas para la aplicación de Azure Active Directory.
3. Crea secretos de {% data variables.product.prodname_dotcom %} para almacenar la configuración de Azure.

Orientación adicional para configurar el proveedor de identidad:

- Para fortalecer la seguridad, asegúrese de que ha revisado ["Configuración de la confianza de OIDC con la nube"](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-oidc-trust-with-the-cloud). Para obtener un ejemplo, vea ["Configuración del asunto en el proveedor de nube"](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-subject-in-your-cloud-provider).
- Para la configuración de `audience`, `api://AzureADTokenExchange` es el valor recomendado, pero también puede especificar otros valores aquí.

## Actualizar tu flujo de trabajo de {% data variables.product.prodname_actions %}

Para actualizar tus flujos de trabajo para ODIC, necesitarás hacer dos cambios a tu YAML:
1. Agregar ajustes de permisos para el token.
2. Use la acción [`azure/login`](https://github.com/Azure/login) para intercambiar el token de OIDC (JWT) por un token de acceso a la nube.

### Agregar ajustes de permisos

 {% data reusables.actions.oidc-permissions-token %}

### Solicitar el token de acceso

La acción [`azure/login`](https://github.com/Azure/login) recibe un JWT del proveedor de OIDC de {% data variables.product.prodname_dotcom %} y luego solicita un token de acceso a Azure. Para obtener más información, consulte la documentación de [`azure/login`](https://github.com/Azure/login).

El siguiente ejemplo intercambia un token de ID de ODIC con Azure para recibir un token de acceso, el cual puede utilizarse entonces apra cceder a los recursos en la nube.

{% raw %}
```yaml{:copy}
name: Run Azure Login with OIDC
on: [push]

permissions:
      id-token: write
      contents: read
jobs: 
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: 'Az CLI login'
        uses: azure/login@v1
        with:
          client-id: ${{ secrets.AZURE_CLIENT_ID }}
          tenant-id: ${{ secrets.AZURE_TENANT_ID }}
          subscription-id: ${{ secrets.AZURE_SUBSCRIPTION_ID }}
  
      - name: 'Run az commands'
        run: |
          az account show
          az group list
```
 {% endraw %}
