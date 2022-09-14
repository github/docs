---
title: Usar CAS
redirect_from:
  - /enterprise/admin/articles/configuring-cas-authentication
  - /enterprise/admin/articles/about-cas-authentication
  - /enterprise/admin/user-management/using-cas
  - /enterprise/admin/authentication/using-cas
  - /admin/authentication/using-cas
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/using-cas
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-cas
intro: 'Si usas el Servicio de autenticación central (CAS) para centralizar el acceso a varias aplicaciones web, puedes integrar {% data variables.product.product_name %} mediante la configuración de la autenticación de CAS para la instancia.'
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
ms.openlocfilehash: 4bd9c8baf32ab09c593a251ca4f1cb698e075501
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884281'
---
## Acerca de la autenticación CAS para {% data variables.product.product_name %}

CAS es un protocolo de inicio de sesión único (SSO) que centraliza la autenticación en varias aplicaciones web. Para obtener más información, consulta "[Servicio de autenticación centralizada](https://en.wikipedia.org/wiki/Central_Authentication_Service)" en Wikipedia.

Después de configurar CAS, las personas que usan {% data variables.product.product_location %} deben usar un token de acceso personal para autenticar solicitudes de API o Git a través de HTTP(S). Las credenciales de CAS no se pueden usar para autenticar estas solicitudes. Para más información, vea "[Creación de un token de acceso personal](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)".

Si configuras CAS, los usuarios con cuentas en el proveedor de identidades (IdP) no consumen una licencia de usuario hasta que la persona inicie sesión en {% data variables.product.product_location %}.

{% data reusables.enterprise_user_management.built-in-authentication %}

## Consideraciones sobre el nombre de usuario con CAS

{% data reusables.enterprise_user_management.consider-usernames-for-external-authentication %} Para obtener más información, consulta "[Consideraciones sobre el nombre de usuario para la autenticación externa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)".

## Atributos de CAS

Están disponibles los siguientes atributos.

| Nombre del atributo           | Tipo     | Descripción |
|--------------------------|----------|-------------|
| `username`               | Obligatorio | El nombre de usuario {% data variables.product.prodname_ghe_server %}. |

## Configurar CAS

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
3. Seleccione **CAS**.

   ![Captura de pantalla de la selección de CAS para la autenticación](/assets/images/enterprise/management-console/cas-select.png)
4. {% data reusables.enterprise_user_management.built-in-authentication-option %}

   ![Captura de pantalla de la opción de autenticación integrada de reserva para CAS](/assets/images/enterprise/management-console/cas-built-in-authentication.png)
5. En el campo **Server URL** (URL del servidor), escriba la dirección URL completa del servidor CAS. Si el servidor CAS usa un certificado que no se puede validar mediante {% data variables.product.prodname_ghe_server %}, puede usar el comando `ghe-ssl-ca-certificate-install` para instalarlo como un certificado de confianza. Para más información, vea "[Utilidades de línea de comandos](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-ssl-ca-certificate-install)".
