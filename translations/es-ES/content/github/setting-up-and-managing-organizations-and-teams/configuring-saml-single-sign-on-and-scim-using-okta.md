---
title: Cofnigurar SCIM y el inicio de sesión único de SAML con Okta
intro: 'Puedes utilizar el inicio de sesión único (SSO) del Lenguaje de Marcado para Confirmaciones de Seguridad (SAML) y un Sistema para la Administración de Identidad a través de los Dominios (SCIM) con Okta para administrar automáticamente el acceso a tu organización en {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.saml-sso %}'
permissions: Los propietarios de las organizaciones pueden configurar el SSO de SAML y SCIM utilizando Okta para su organización.
versions:
  free-pro-team: '*'
---

### Acerca de SAML y SCIM con Okta

Puedes controlar el acceso a tu organización de {% data variables.product.prodname_dotcom %} y a otras aplicaciones web desde una interface central si configuras la organización para que utilice el SSO de SAML con Okta, un Proveedor de Identidad (IdP).

El SSO de SAML controla y asegura el acceso a los recursos organizacionales como los repositorios, informes de problemas y solicitudes de extracción. SCIM agrega automáticamente, administra y elimina el acceso de los miembros a tu organización de {% data variables.product.prodname_dotcom %} cuando haces cambios en Okta. Para obtener más información, consulta la sección "[Acerca de la administración de accesos e identidad con el inicio de sesión único de SAML](/github/setting-up-and-managing-organizations-and-teams/about-identity-and-access-management-with-saml-single-sign-on)" y "[Acerca de SCIM](/github/setting-up-and-managing-organizations-and-teams/about-scim)".

Después de que habilites SCIM, las siguientes características de aprovisionamiento estarán disponibles para cualquier usuario al que asignes tu aplicación de {% data variables.product.prodname_ghe_cloud %} en Okta.

| Característica                    | Descripción                                                                                                                                                                            |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Subir Usuarios Nuevos             | Cuando creas un usuario nuevo en Okta, éste recibirá un correo electrónico para unirse a tu organización de {% data variables.product.prodname_dotcom %}.                              |
| Subir Desactivaciones de Usuarios | Cuando desactivas un usuario en Okta, Okta lo eliminará de tu organización de {% data variables.product.prodname_dotcom %}.                                                            |
| Subir Actualizaciones de Perfil   | Cuando actualizas el perfil de un usuario en Okta, Okta actualizará los metadatos de su membrecía en tu organización de {% data variables.product.prodname_dotcom %}.                  |
| Reactivar Usuarios                | Cuando reactivas un usuario en Okta, Okta le enviará una invitación por correo electrónico para que vuelva a unirse a tu organización de {% data variables.product.prodname_dotcom %}. |

### Prerrequisitos

{% data reusables.saml.use-classic-ui %}

### Agregar la aplicación {% data variables.product.prodname_ghe_cloud %} en Okta

{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.add-okta-application %}
{% data reusables.saml.search-ghec-okta %}
4. Da clic en **Agregar** a la derecha de "Github Enterprise Cloud - Organization". ![Dar clic en "Agregar" para la aplicación de {% data variables.product.prodname_ghe_cloud %}](/assets/images/help/saml/okta-add-ghec-application.png)

5. En el campo **Organizaciòn de GitHub**, teclea el nombre de tu organizaciòn de {% data variables.product.prodname_dotcom %}. Por ejemplo, si la URL de de tu organizaciòn es https://github.com/octo-org, el nombre de organizaciòn serìa `octo-org`. ![Teclear el nombre de organización de GitHub](/assets/images/help/saml/okta-github-organization-name.png)

6. Haz clic en **Done** (listo).

### Habilitar y probar el SSO de SAML

{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.okta-applications-click-ghec-application-label %}
{% data reusables.saml.assign-yourself-to-okta %}
{% data reusables.saml.okta-sign-on-tab %}
{% data reusables.saml.okta-view-setup-instructions %}
6. Habilita y prueba el SSO de SAML en {% data variables.product.prodname_dotcom %} utilizando la URL de registro, URL del emisor, y certificados pùblicos de la guìa "Còmo configurar SAML 2.0". Para obtener mas información, consulta la sección "[Habilitar y probar el inicio de sesión único de SAML para tu organización](/github/setting-up-and-managing-organizations-and-teams/enabling-and-testing-saml-single-sign-on-for-your-organization)".

### Configurar el aprovisionamiento de acceso con SCIM en Okta

{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.okta-applications-click-ghec-application-label %}
{% data reusables.saml.okta-provisioning-tab %}
{% data reusables.saml.okta-configure-api-integration %}
{% data reusables.saml.okta-enable-api-integration %}


6. Da clic en **Autenticar con Github Enterprise Cloud - Ortanizaction**. ![Botón "Autenticar con GitHub Enterprise Cloud - Organization" para la aplicación de Okta](/assets/images/help/saml/okta-authenticate-with-ghec-organization.png)

7. A la derecha del nombre de tu organizaciòn, da clic en **Otorgar**. ![Botón "Otorgar" para autorizar la integración de SCIM de Okta para acceder a la organización](/assets/images/help/saml/okta-scim-integration-grant-organization-access.png)

  {% note %}

  **Nota**: si no ves tu organización en la lista, dirígete a `https://github.com/orgs/ORGANIZATION-NAME/sso` en tu buscador y autentícate con ella a través del SSO de SAML utilizando tu cuenta de administrador en el IdP. Por ejemplo, si tu nombre de organización es `octo-org`, La URL sería `https://github.com/orgs/octo-org/sso`. Para obtener más información, consulta la sección "[Acerca de la autenticación con el inicio de sesión único de SAML](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)".

  {% endnote %}
1. Da clic en **Autorizar OktaOAN**. ![Botón "Autorizar a OktaOAN" para autorizar la integración de SCIM de Okta para acceder a la organización](/assets/images/help/saml/okta-scim-integration-authorize-oktaoan.png)
{% data reusables.saml.okta-save-provisioning %}
{% data reusables.saml.okta-edit-provisioning %}

### Leer más

- "[Configurar el inicio de sesión único de SAML y SCIM para tu cuenta empresarial utilizando Okta](/github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta)"
- "[Administrar la sincronización de equipos para tu organización](/github/setting-up-and-managing-organizations-and-teams/managing-team-synchronization-for-your-organization#enabling-team-synchronization-for-okta)"
- [Understanding SAML](https://developer.okta.com/docs/concepts/saml/) en la documentación de Okta
- [Understanding SCIM](https://developer.okta.com/docs/concepts/scim/) en la documentación de Okta
