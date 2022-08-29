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
intro: 'Si utilizas el Servicio de Autenticación Central (CAS) para centralizar el acceso a diversas aplicaciones web, puedes integrar a {% data variables.product.product_name %} configurando la autenticación de CAS para tu instancia.'
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
---

## Acerca de la autenticación de CAS para {% data variables.product.product_name %}

CAS es un protocolo de inicio de sesión única (SSO) que centraliza la autenticación a varias aplicaciones web. Para obtener más información, consulta "[Central Authentication Service](https://en.wikipedia.org/wiki/Central_Authentication_Service)" en Wikipedia.

Después de que configuras CAS, las personas que utilizan {% data variables.product.product_location %} debe utilizar un token de acceso personal para autenticar la API o las solicitudes de Git sobre HTTP(S). Las credenciales de CAS no pueden utilizarse para autenticar estas solicitudes. Para obtener más información, consulta la sección "[Crear un token de acceso personal](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)".

Si configuras CAS, las personas con cuentas en tu proveedor de identidad (IdP) no consumen una licencia de usuario sino hasta que la persona inicie sesión en {% data variables.product.product_location %}.

{% data reusables.enterprise_user_management.built-in-authentication %}

## Consideraciones sobre el nombre de usuario con CAS

{% data reusables.enterprise_user_management.consider-usernames-for-external-authentication %} Para obtener más información, consulta la sección "[Consideraciones de nombre de usuario para la autenticación externa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)".

## Atributos de CAS

Están disponibles los siguientes atributos.

| Nombre del atributo | Tipo      | Descripción                                                              |
| ------------------- | --------- | ------------------------------------------------------------------------ |
| `nombre de usuario` | Requerido | El nombre de usuario {% data variables.product.prodname_ghe_server %}. |

## Configurar CAS

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
3. Selecciona **CAS**.

   ![Captura de pantalla de la selección de CAS para la autenticación](/assets/images/enterprise/management-console/cas-select.png)
4. {% data reusables.enterprise_user_management.built-in-authentication-option %}

   ![Captura de pantalla de segunda opción de autenticación integrada para CAS](/assets/images/enterprise/management-console/cas-built-in-authentication.png)
5. En el campo **URL del servidor**, escribe la URL completa de tu servidor CAS. Si tu servidor CAS usa un certificado que no puede ser validado por {% data variables.product.prodname_ghe_server %}, puedes usar el comando `ghe-ssl-ca-certificate-install` para instalarlo como un certificado de confianza. Para obtener más información, consulta la sección "[Utilidades de línea de comandos](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-ssl-ca-certificate-install)".
