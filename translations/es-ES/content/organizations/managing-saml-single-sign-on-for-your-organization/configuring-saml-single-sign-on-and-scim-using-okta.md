---
title: Cofnigurar SCIM y el inicio de sesión único de SAML con Okta
intro: 'Puedes utilizar el inicio de sesión único (SSO) del Lenguaje de Marcado para Confirmaciones de Seguridad (SAML) y un Sistema para la Administración de Identidad a través de los Dominios (SCIM) con Okta para administrar automáticamente el acceso a tu organización en {% data variables.product.product_location %}.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/configuring-saml-single-sign-on-and-scim-using-okta
permissions: Organization owners can configure SAML SSO and SCIM using Okta for an organization.
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Configurar SAML & SCIM con Okta
---

## Acerca de SAML y SCIM con Okta

Puedes controlar el acceso a tu organización en {% data variables.product.product_location %} y a otras aplicaciones web desde una interface central si configuras dicha organización para que utilice el SSO de SAML y SCIM con Okta, un proveedor de identidad (IdP).

El SSO de SAML controla y asegura el acceso a los recursos organizacionales como los repositorios, informes de problemas y solicitudes de extracción. SCIM agrega, administra y elimina automáticamente el acceso a tu organización en {% data variables.product.product_location %} cuando haces cambios en Okta. Para obtener más información, consulta la sección "[Acerca de la administración de accesos e identidad con el inicio de sesión único de SAML](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)" y "[Acerca de SCIM](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim)".

Después de que habilites SCIM, las siguientes características de aprovisionamiento estarán disponibles para cualquier usuario al que asignes tu aplicación de {% data variables.product.prodname_ghe_cloud %} en Okta.

| Característica                    | Descripción                                                                                                                                                                                       |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Subir Usuarios Nuevos             | Cuando creas un usuario nuevo en Okta, este recibirá un mensaje de correo electrónico para unirse a tu organización de {% data variables.product.product_location %}.                             |
| Subir Desactivaciones de Usuarios | Cuando desactivas a un usuario en Okta, Okta lo eliminará de tu organización en {% data variables.product.product_location %}.                                                                    |
| Subir Actualizaciones de Perfil   | Cuando actualizas el perfil de un usuario en Okta, Okta actualizará los metadatos de la membrecía de dicho usuario de tu organización en {% data variables.product.product_location %}.           |
| Reactivar Usuarios                | Cuando reactivas a un usuario en Okta, Okta enviará una invitación por correo electrónico al usuario para que vuelva a unirse a tu organización de {% data variables.product.product_location %}. |

Alternatively, you can configure SAML SSO for an enterprise using Okta. SCIM for enterprise accounts is only available with Enterprise Managed Users. For more information, see "[Configuring SAML single sign-on for your enterprise using Okta](/admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta)" and "[Configuring SCIM provisioning for Enterprise Managed Users with Okta](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users-with-okta)."

## Agregar la aplicación {% data variables.product.prodname_ghe_cloud %} en Okta

{% data reusables.saml.okta-sign-on-tab %}
{% data reusables.saml.okta-view-setup-instructions %}
1. Habilita y prueba el SSO de SAML en {% data variables.product.prodname_dotcom %} utilizando la URL de registro, URL del emisor, y certificados pùblicos de la guìa "Còmo configurar SAML 2.0". Para obtener más información, consulta "[Habilitar y probar el inicio de sesión único para tu organización](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization#enabling-and-testing-saml-single-sign-on-for-your-organization)".

## Configurar el aprovisionamiento de acceso con SCIM en Okta
{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.okta-applications-click-ghec-application-label %}
{% data reusables.saml.okta-provisioning-tab %}
{% data reusables.saml.okta-configure-api-integration %}
{% data reusables.saml.okta-enable-api-integration %}
1. Da clic en **Autenticar con Github Enterprise Cloud - Ortanizaction**.
1. A la derecha del nombre de tu organizaciòn, da clic en **Otorgar**.

  ![Botón "Otorgar" para autorizar la integración de SCIM de Okta para acceder a la organización](/assets/images/help/saml/okta-scim-integration-grant-organization-access.png)

  {% note %}

  **Nota**: si no ves tu organización en la lista, dirígete a `https://github.com/orgs/ORGANIZATION-NAME/sso` en tu buscador y autentícate con ella a través del SSO de SAML utilizando tu cuenta de administrador en el IdP. Por ejemplo, si tu nombre de organización es `octo-org`, La URL sería `https://github.com/orgs/octo-org/sso`. Para obtener más información, consulta la sección "[Acerca de la autenticación con el inicio de sesión único de SAML](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)".

  {% endnote %}
1. Da clic en **Autorizar OktaOAN**.
{% data reusables.saml.okta-save-provisioning %}
{% data reusables.saml.okta-edit-provisioning %}

## Leer más

- "[Configurar el inicio de sesión único de SAML para tu cuenta empresarial utilizando Okta](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta)"
- "[Administrar la sincronización de equipos para tu organización](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization#enabling-team-synchronization-for-okta)"
- [Understanding SAML](https://developer.okta.com/docs/concepts/saml/) en la documentación de Okta
- [Understanding SCIM](https://developer.okta.com/docs/concepts/scim/) en la documentación de Okta
