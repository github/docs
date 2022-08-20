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
intro: 'If you use Central Authentication Service (CAS) to centralize access to multiple web applications, you can integrate {% data variables.product.product_name %} by configuring CAS authentication for your instance.'
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

## About CAS authentication for {% data variables.product.product_name %}

CAS is a single sign-on (SSO) protocol that centralizes authentication to multiple web applications. For more information, see "[Central Authentication Service](https://en.wikipedia.org/wiki/Central_Authentication_Service)" on Wikipedia.

After you configure CAS, people who use {% data variables.product.product_location %} must use a personal access token to authenticate API or Git requests over HTTP(S). CAS credentials cannot be used to authenticate these requests. Para obtener más información, consulta la sección "[Crear un token de acceso personal](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)".

If you configure CAS, people with accounts on your identity provider (IdP) do not consume a user license until the person signs into {% data variables.product.product_location %}.

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

   ![Screenshot of selection of CAS for authentication](/assets/images/enterprise/management-console/cas-select.png)
4. {% data reusables.enterprise_user_management.built-in-authentication-option %}

   ![Screenshot of of fallback built-in authentication option for CAS](/assets/images/enterprise/management-console/cas-built-in-authentication.png)
5. En el campo **URL del servidor**, escribe la URL completa de tu servidor CAS. Si tu servidor CAS usa un certificado que no puede ser validado por {% data variables.product.prodname_ghe_server %}, puedes usar el comando `ghe-ssl-ca-certificate-install` para instalarlo como un certificado de confianza. Para obtener más información, consulta la sección "[Utilidades de línea de comandos](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-ssl-ca-certificate-install)".
