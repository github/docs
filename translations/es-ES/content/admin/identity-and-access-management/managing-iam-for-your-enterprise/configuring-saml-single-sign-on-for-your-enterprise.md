---
title: Configurar el inicio de sesión único de SAML para tu empresa
shortTitle: Configurar el SSO de SAML
intro: 'Puedes controlar el acceso seguro a {% ifversion ghec %}los recursos como repositorios, propuestas y solicitudes de cambios dentro de las organizaciones de tu empresa{% elsif ghae %}tu empresa en {% data variables.product.prodname_ghe_managed %}{% endif %} si {% ifversion ghec %}requieres{% elsif ghae %}la configuración {% endif %}del inicio de sesión único (SSO) de SAML a través de tu proveedor de identidad (IdP).'
permissions: 'Enterprise owners can configure SAML SSO for an enterprise on {% data variables.product.product_name %}.'
versions:
  ghec: '*'
  ghae: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
redirect_from:
  - /admin/authentication/configuring-saml-single-sign-on-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/enforcing-saml-single-sign-on-for-organizations-in-your-enterprise-account
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise
---

{% data reusables.enterprise-accounts.emu-saml-note %}

## Acerca del SSO de SAML para tus cuentas empresariales

{% ifversion ghec %}

{% data reusables.saml.dotcom-saml-explanation %}Para obtener más información, consulta "[Acerca de la administración de identidad y accesos con el inicio de sesión único de SAML](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)".

{% data reusables.saml.about-saml-enterprise-accounts %}

{% data reusables.saml.about-saml-access-enterprise-account %}Para obtener más información, consulta la sección "[Visualizar y administrar el acceso de SAML de un usuario a tu cuenta empresarial](/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise)".

{% data reusables.scim.enterprise-account-scim %}

{% elsif ghae %}

El SSO de SAML te permite controlar centralmente y asegurar el acceso a {% data variables.product.product_location %}desde tu IdP de SAML. Cuando un usuario no autenticado vista {% data variables.product.product_location %} en un buscador, {% data variables.product.product_name %} lo redirigirá a tu IdP de SAML para autenticarse. Después de que el usuario se autentica exitosamente con una cuenta en el IdP, éste lo redirige de regreso a {% data variables.product.product_location %}. {% data variables.product.product_name %} valida la respuesta de tu IdP y luego le otorga acceso al usuario.

Después de autenticarse exitosamente en tu IdP, la sesión de SAML del usuario para {% data variables.product.product_location %} se encuentra activa en el buscador por 24 horas. Después de 24 horas, el usuario debe autenticarse nuevamente con tu IdP.

{% data reusables.saml.assert-the-administrator-attribute %}

{% data reusables.scim.after-you-configure-saml %} Para obtener más información, consulta la sección "[Configurar el aprovisionamiento de usuarios para tu empresa](/admin/authentication/configuring-user-provisioning-for-your-enterprise)".

{% endif %}

## Proveedores de identidad compatibles

{% data reusables.saml.saml-supported-idps %}

{% ifversion ghec %}

## Requerir el inicio de sesión único de SAML para las organizaciones en tu cuenta empresarial

{% note %}

**Notas:**

- Cuando requieres el SSO de SAML para tu empresa, la configuración empresarial se superpondrá a cualquier configuración de SAML que exista a nivel organizacional. {% data reusables.saml.switching-from-org-to-enterprise %} Para obtener más información, consulta la sección "[Cambiar tu configuración de SAML de una cuenta de organización a una de empresa](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)".
- Cuando requieres el SSO de SAML para una organización, {% data variables.product.company_short %} elimina cualquier miembro de la organización que no se haya autenticado con éxito en tu IdP de SAML. Cuando requieres el SSO de SAML para tu empresa, {% data variables.product.company_short %} no elimina a los miembros de dicha empresa que no se hayan autenticado exitosamente con tu IdP de SAML. La siguiente vez que un miembro acceda a los recursos empresariales, este deberá autenticarse con tu IdP de SAML.

{% endnote %}

Para obtener información más detallada sobre cómo habilitar el SAML utilizando Okta, consulta la sección "[Configurar el inicio de sesión único de SAML para tu cuenta empresarial utilizando Okta](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta)".

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
4. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. En "Inicio de sesión único de SAML", selecciona **Requerir autenticación SAML**. ![Casilla de verificación para habilitar SAML SSO](/assets/images/help/business-accounts/enable-saml-auth-enterprise.png)
6. En el campo **URL de inicio de sesión**, escribe el extremo HTTPS de tu IdP para las solicitudes de inicio de sesión único. Este valor se encuentra en la configuración de tu IdP. ![Campo para la URL a la que los miembros serán redireccionados cuando inicien sesión](/assets/images/help/saml/saml_sign_on_url_business.png)
7. Opcionalmente, en el campo **Emisor**, teclea tu URL de emisor de SAML para verificar la autenticidad de los mensajes enviados. ![Campo para el nombre del emisor SAML](/assets/images/help/saml/saml_issuer.png)
8. En **Certificado público**, pega un certificado para verificar las respuestas de SAML. ![Campo para el certificado público de tu proveedor de identidad](/assets/images/help/saml/saml_public_certificate.png)
9. Para verificar la integridad de las solicitudes de tu emisor de SAML, haz clic en {% octicon "pencil" aria-label="The edit icon" %}. Posteriormente, en los menús desplegables de "Método de firma" y "Método de resumen", elige el algoritmo de hash que utiliza tu emisor de SAML. ![Menús desplegables para los algoritmos de hash del Método de firma y del Método de resumen usados por tu emisor SAML](/assets/images/help/saml/saml_hashing_method.png)
10. Antes de habilitar SAML SSO para tu empresa, haz clic en **Probar la configuración de SAML** para asegurarte de que la información que has ingresado sea correcta. ![Botón para probar la configuración de SAML antes de exigir el inicio de sesión único](/assets/images/help/saml/saml_test.png)
11. Haz clic en **Save ** (guardar).

{% elsif ghae %}

## Habilitar el SSO de SAML

{% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

Los siguientes IdP proporcionan documentación sobre cómo configurar el SSO de SAML para {% data variables.product.product_name %}. Si no se lista tu IdP, por favor, contáctalo para solicitar soporte para {% data variables.product.product_name %}.

 | IdP         | Más información                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
 |:----------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
 | Azure AD    | [Tutorial: Integración del inicio de sesión único (SSO) de Azure Active Directory con {% data variables.product.prodname_ghe_managed %}](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-tutorial) en los Documentos de Microsoft. Para configurar a Azure AD para {% data variables.product.prodname_ghe_managed %}, consulta la sección "[Configurar la autenticación y aprovisionamiento para tu empresa utilizando Azure AD](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad)". |
 | Okta (Beta) | Para configurar Okta para {% data variables.product.prodname_ghe_managed %}, consulta la sección "[Configurar la autenticación y el aprovisionamiento para tu empresa utilizando Okta](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-okta)".                                                                                                                                                                                                                                                                       |

Durante la inicialización para {% data variables.product.product_name %}, debes configurar a {% data variables.product.product_name %} como un proveedor de servicios (SP) de SAML en tu IdP. Debes ingresar varios valores únicos en tu IdP para configurar {% data variables.product.product_name %} como un SP válido.

| Valor                                                     | Otros nombres    | Descripción                                                                       | Ejemplo                   |
|:--------------------------------------------------------- |:---------------- |:--------------------------------------------------------------------------------- |:------------------------- |
| ID de Entidad de SP                                       | URL de SP        | Tu URL de más alto nivel para {% data variables.product.prodname_ghe_managed %} | <code>https://<em>YOUR-GITHUB-AE-HOSTNAME</em></code> |
| URL del Servicio de Consumidor de Aserciones (ACS) del SP | URL de respuesta | URL a la que el IdP enviará respuestas de SAML                                    | <code>https://<em>YOUR-GITHUB-AE-HOSTNAME</em>/saml/consume</code> |
| URL de inicio de sesión único (SSO) del SP                |                  | URL en donde el IdP comienza con SSO                                              | <code>https://<em>YOUR-GITHUB-AE-HOSTNAME</em>/sso</code> |

## Editar la configuración del SSO de SAML

Si los detalles de tu IdP cambian, necesitarás editar la configuración de SSO de SAML para {% data variables.product.product_location %}. Por ejemplo, si el certificado de tu IdP expira, puedes editar el valor del certificado público.

{% ifversion ghae %}

{% note %}

**Nota**: {% data reusables.saml.contact-support-if-your-idp-is-unavailable %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. Debajo de "Inicio de sesión único de SAML", teclea los detalles nuevos de tu IdP. ![Campos de entrada de texto con los detalles del IdP para la configuración del SSO de SAML para una empresa](/assets/images/help/saml/ae-edit-idp-details.png)
1. Opcionalmente, da clic en {% octicon "pencil" aria-label="The edit icon" %} para configurar una firma nueva o método de resumen. ![Icono de editar para cambiar la firma y el método de resumen](/assets/images/help/saml/ae-edit-idp-details-edit-signature-and-digest.png)

    - Utiliza los menús desplegables y elige la nueva firma o método de resumen. ![Menús desplegables para elegir una firma nueva o método de resumen](/assets/images/help/saml/ae-edit-idp-details-edit-signature-and-digest-drop-down-menus.png)
1. Para garantizar que la información que ingresaste es correcta, da clic en **Probar la configuración de SAML**. ![Botón de "Probar la configuración de SAML"](/assets/images/help/saml/ae-edit-idp-details-test-saml-configuration.png)
1. Haz clic en **Save ** (guardar). ![Botón de "Guardar" para la configuración del SSO de SAML](/assets/images/help/saml/ae-edit-idp-details-save.png)
1. Opcionalmente, para aprovisionar y desaprovisionar automáticamente las cuentas de usuario para {% data variables.product.product_location %}, vuelve a configurar el aprovisionamiento de usuarios con SCIM. Para obtener más información, consulta la sección "[Configurar el aprovisionamiento de usuarios para tu empresa](/admin/authentication/configuring-user-provisioning-for-your-enterprise)".

{% endif %}

{% ifversion ghae %}

## Inhabilitar el SSO de SAML

{% warning %}

**Advertencia**: Si inhabilitas el SSO de SAML para {% data variables.product.product_location %}, los usuarios sin sesiones existentes del SSO de SAML no podrán ingresar en {% data variables.product.product_location %}. Las sesiones del SSO de SAML en {% data variables.product.product_location %} finalizan después de 24 horas.

{% endwarning %}

{% note %}

**Nota**: {% data reusables.saml.contact-support-if-your-idp-is-unavailable %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. En "inicio de sesión único SAML", deselecciona **Habilitar autenticación SAML**. ![Casilla de verificación para "Habilitar la autenticación de SAML"](/assets/images/help/saml/ae-saml-disabled.png)
1. Para inhabilitar el SSO de SAML y requerir el inicio de sesión con la cuenta de usuario integrada que creaste durante la inicialización, da clic en **Guardar**. ![Botón de "Guardar" para la configuración del SSO de SAML](/assets/images/help/saml/ae-saml-disabled-save.png)

{% endif %}

{% endif %}
