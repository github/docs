---
title: Usar CAS
redirect_from:
  - /enterprise/admin/articles/configuring-cas-authentication/
  - /enterprise/admin/articles/about-cas-authentication/
  - /enterprise/admin/user-management/using-cas
  - /enterprise/admin/authentication/using-cas
intro: 'CAS es un protocolo de inicio de sesión único (SSO) para varias aplicaciones web. Una cuenta de usuario CAS no usa un {% if currentVersion ver_gt "enterprise-server@2.16" %}asiento{% else %}de licencia de usuario{% endif %} hasta que el usuario inicia sesión.'
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_user_management.built-in-authentication %}

### Consideraciones sobre el nombre de usuario con CAS

{% data reusables.enterprise_management_console.username_normalization %}

{% data reusables.enterprise_management_console.username_normalization_sample %}

{% data reusables.enterprise_user_management.two_factor_auth_header %}
{% data reusables.enterprise_user_management.external_auth_disables_2fa %}

### Atributos de CAS

Están disponibles los siguientes atributos.

| Nombre del atributo | Tipo      | Descripción                                                                   |
| ------------------- | --------- | ----------------------------------------------------------------------------- |
| `nombre de usuario` | Requerido | El nombre de usuario {% data variables.product.prodname_ghe_server %}. |

### Configurar CAS
{% warning %}

**Advertencia:** Antes de configurar CAS en {% data variables.product.product_location_enterprise %}, ten en cuenta que los usuarios no podrán usar sus nombres de usuario ni contraseñas CAS para autenticar las solicitudes de API o las operaciones Git a través de HTTP/HTTPS. En cambio, será necesario que [creen un token de acceso](/enterprise/{{ currentVersion }}/user/articles/creating-an-access-token-for-command-line-use).

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
3. Selecciona **CAS**. ![Seleccionar CAS](/assets/images/enterprise/management-console/cas-select.png)
4. {% data reusables.enterprise_user_management.built-in-authentication-option %} ![Seleccionar la casilla de verificación autenticación integrada](/assets/images/enterprise/management-console/cas-built-in-authentication.png)
5. En el campo **URL del servidor**, escribe la URL completa de tu servidor CAS. Si tu servidor CAS usa un certificado que no puede ser validado por {% data variables.product.prodname_ghe_server %}, puedes usar el comando `ghe-ssl-ca-certificate-install` para instalarlo como un certificado de confianza.
