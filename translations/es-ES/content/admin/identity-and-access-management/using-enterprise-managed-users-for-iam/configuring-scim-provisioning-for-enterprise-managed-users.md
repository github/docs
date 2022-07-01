---
title: Configurar el aprovisionamiento de SCIM para los Usuarios Administrados Empresariales
shortTitle: Aprovisionar a los usuarios administrados
intro: Puedes configurar tu proveedor de identidad para que aprovisione usuarios nuevos y administre sus membrecías en tu empresa y equipos.
product: '{% data reusables.gated-features.emus %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users
  - /admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/configuring-scim-provisioning-for-enterprise-managed-users
versions:
  ghec: '*'
topics:
  - Accounts
  - Enterprise
---

## Acerca del aprovisionamiento para los {% data variables.product.prodname_emus %}

Debes configurar el aprovisionamiento de {% data variables.product.prodname_emus %} para crear, administrar y desactivar las cuentas de usuario para los miembros de las empresas. Cuando configuras el aprovisionamiento para {% data variables.product.prodname_emus %}, los usuarios que se asignaron a la aplicación de {% data variables.product.prodname_emu_idp_application %} en tu proveedor de identidad se aprovisionan como cuentas de usuario nuevas en {% data variables.product.prodname_dotcom %} a través de SCIM y los usuarios se agregan a tu empresa.

Cuando actualzias la información asociada con la identidad de un usuario en tu IdP, este actualizará la cuenta de usuario en GitHub.com. Cuando desasignas al usuario desde la aplicación de {% data variables.product.prodname_emu_idp_application %} o cuando desactivas una cuenta de usuario en tu IdP, dicho IdP se comunicará con {% data variables.product.prodname_dotcom %} para invalidar cualquier sesión e inhabilitar la cuenta del miembro. La información de la cuenta inhabilitada se mantiene y su nombre de usuario se cambia por un hash del nombre de usuario original con el código corto anexo. Si reasignas a un usuario a la aplicación de {% data variables.product.prodname_emu_idp_application %} o reactivas su cuenta en tu IdP, la cuenta de {% data variables.product.prodname_managed_user %} en {% data variables.product.prodname_dotcom %} se reactivará y el nombre de usuario se restablecerá.

Los grupos en tu IdP pueden utilizarse para administrar la membrecía de equipo dentro de las organizaciones de tu empresa, permitiéndote configurar el acceso y los permisos del repositorio mediante tu IdP. Para obtener más información, consulta la sección "[Administrar las membrecías de equipo con los grupos de proveedor de identidades](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/managing-team-memberships-with-identity-provider-groups)".

## Prerrequisitos

Before you can configure provisioning for {% data variables.product.prodname_emus %}, you must configure SAML{% ifversion oidc-for-emu %} or OIDC{% endif %} single-sign on. {% ifversion oidc-for-emu %}

- For more information on configuring OIDC, see "[Configuring OIDC for Enterprise Managed Users](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)"
- {% endif %}For information on configuring SAML, see "[Configuring SAML single sign-on for Enterprise Managed Users](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users)."

## Crear un token de acceso personal

Para configurar el aprovisionamiento de tu {% data variables.product.prodname_emu_enterprise %}, necesitas un token de acceso personal con el alcance de **admin:enterprise** que pertenezca el usuario de configuración.

{% warning %}

**Advertencia:** Si el token vence o un usuario aprovisionado lo crea, el aprovisionamiento de SCIM podría dejar de funcionar inesperadamente. Asegúrate de crear el token mientras tienes iniciada la sesión como usuario de configuración y que el vencimiento del token esté configurado como "Sin vencimiento".

{% endwarning %}

1. Inicia sesión en {% data variables.product.prodname_dotcom_the_website %} como el usuario configurador para tu empresa nueva con el nombre de usuario **@<em>SHORT-CODE</em>_admin**.
{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.personal_access_tokens %}
{% data reusables.user-settings.generate_new_token %}
1. Debajo de **Nota**, proporciona un nombre descriptivo a tu token. ![Captura de pantalla que muestra el nombre del token](/assets/images/help/enterprises/emu-pat-name.png)
1. Selecciona el menú desplegable de **Vencimiento** y luego haz clic en **Sin vencimiento**. ![Captura de pantalla que muestra el vencimiento de un token configurado como "sin vencimiento"](/assets/images/help/enterprises/emu-pat-no-expiration.png)
1. Selecciona el alcance **admin:enterprise**. ![Captura de pantalla que muestra el alcance admin:enterprise](/assets/images/help/enterprises/enterprise-pat-scope.png)
1. Haz clic en **Generar token**. ![Generar un botón para el token](/assets/images/help/settings/generate_token.png)
1. Para copiar el token a tu portapapeles, haz clic en el {% octicon "paste" aria-label="The copy icon" %}. ![Token recién creado](/assets/images/help/settings/personal_access_tokens.png)
2. Para guardar el token para utilizarlo posteriormente, almacénalo de forma segura en un administrador de contraseñas.

## Configurar el aprovisionamiento para {% data variables.product.prodname_emus %}

Después de crear tu token de acceso personal y almacenarlo de forma segura, puedes configurar el aprovisionamiento en tu proveedor de identidad.

{% data reusables.scim.emu-scim-rate-limit %}

To configure provisioning, follow the appropriate link from the table below.

| Proveedor de identidad       | SSO method | Más información                                                                                                                                                                                                                                               |
| ---------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |{% ifversion oidc-for-emu %}
| Azure AD                     | OIDC       | [Tutorial: Configure GitHub Enterprise Managed User (OIDC) for automatic user provisioning](https://docs.microsoft.com/azure/active-directory/saas-apps/github-enterprise-managed-user-oidc-provisioning-tutorial) in the Azure AD documentation 
{% endif %}
| Azure AD                     | SAML       | [Tutorial: Configure GitHub Enterprise Managed User for automatic user provisioning](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-enterprise-managed-user-provisioning-tutorial) in the Azure AD documentation                    |
| Okta                         | SAML       | [Configurar el aprovisionamiento de SCIM para los Usuarios Administrados Empresariales con Okta](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users-with-okta)       |
