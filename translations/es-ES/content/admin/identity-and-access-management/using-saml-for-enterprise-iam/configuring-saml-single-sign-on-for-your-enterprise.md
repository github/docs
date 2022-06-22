---
title: Configurar el inicio de sesión único de SAML para tu empresa
shortTitle: Configurar el SSO de SAML
intro: 'Puedes controlar y asegurar el acceso a {% ifversion ghec %}los recursos como repositorios, propuestas y solicitudes de cambio dentro de las organizaciones de tu empresa{% elsif ghes %}{% data variables.product.product_location %}{% elsif ghae %}tu empresa en {% data variables.product.prodname_ghe_managed %}{% endif %} si {% ifversion ghec %}requieres{% elsif ghes or ghae %}configuras{% endif %} el inicio de sesión único (SSO) de SAML mediante tu proveedor de identidad (IdP).'
permissions: '{% ifversion ghes %}Site administrators{% elsif ghec or ghae %}Enterprise owners{% endif %} can configure SAML SSO for {% ifversion ghec or ghae %}an enterprise on {% data variables.product.product_name %}{% elsif ghes %}a {% data variables.product.product_name %} instance{% endif %}.'
versions:
  ghec: '*'
  ghes: '*'
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
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise
---

{% data reusables.enterprise-accounts.emu-saml-note %}

## Acerca de SAML SSO

{% ifversion ghec %}

{% data reusables.saml.dotcom-saml-explanation %}Para obtener más información, consulta "[Acerca de la administración de identidad y accesos con el inicio de sesión único de SAML](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)".

{% data reusables.saml.about-saml-enterprise-accounts %}

{% data reusables.saml.about-saml-access-enterprise-account %}Para obtener más información, consulta la sección "[Visualizar y administrar el acceso de SAML de un usuario a tu cuenta empresarial](/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise)".

{% data reusables.saml.saml-disabled-linked-identities-removed %}

{% data reusables.scim.enterprise-account-scim %}

{% elsif ghes or ghae %}

El SSO de SAML te permite controlar centralmente y asegurar el acceso a {% data variables.product.product_location %}desde tu IdP de SAML. Cuando un usuario no autenticado vista {% data variables.product.product_location %} en un buscador, {% data variables.product.product_name %} lo redirigirá a tu IdP de SAML para autenticarse. Después de que el usuario se autentica exitosamente con una cuenta en el IdP, éste lo redirige de regreso a {% data variables.product.product_location %}. {% data variables.product.product_name %} valida la respuesta de tu IdP y luego le otorga acceso al usuario.

Después de autenticarse exitosamente en tu IdP, la sesión de SAML del usuario para {% data variables.product.product_location %} se encuentra activa en el buscador por 24 horas. Después de 24 horas, el usuario debe autenticarse nuevamente con tu IdP.

{% data reusables.saml.saml-ghes-account-revocation %}

{% ifversion ghae %}

{% data reusables.saml.assert-the-administrator-attribute %}

{% data reusables.scim.after-you-configure-saml %} Para obtener más información, consulta la sección "[Configurar el aprovisionamiento de usuarios para tu empresa](/admin/authentication/configuring-user-provisioning-for-your-enterprise)".

{% endif %}

{% endif %}

## Proveedores de identidad compatibles

{% data reusables.saml.saml-supported-idps %}

{% ifversion ghec %}

## Consideraciones sobre el nombre de usuario con SAML

{% ifversion ghec %}Si utilizas {% data variables.product.prodname_emus %}, {% endif %}{% data reusables.enterprise_user_management.consider-usernames-for-external-authentication %} Para obtener más información, consulta la sección "[Consideraciones de nombre de usuario para la autenticación externa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)".

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
{% data reusables.enterprise-accounts.download-recovery-codes %}

{% elsif ghes %}

## Configurar el SSO de SAML

Puedes habilitar o inhabilitar la autenticación de SAML para {% data variables.product.product_location %} o puedes editar una configuración existente. You can view and edit authentication settings for {% data variables.product.product_name %} in the management console. Para obtener más información, consulta la sección "[Acceder a la consola de administración](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)".

{% note %}

**Nota**: {% data reusables.enterprise.test-in-staging %}

{% endnote %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
1. Selecciona **SAML**.

   ![Captura de pantalla de la opción para habilitar la autenticación de SAML en la consola de administración](/assets/images/enterprise/management-console/auth-select-saml.png)
1. {% data reusables.enterprise_user_management.built-in-authentication-option %}

   ![Captura de pantalla de la opción para habilitar la autenticación integrada fuera del IdP de SAML](/assets/images/enterprise/management-console/saml-built-in-authentication.png)
1. Opcionalmente, para activar el SSO de respuesta no solicitada, selecciona **IdP initiated SSO**. Por defecto, {% data variables.product.prodname_ghe_server %} responderá a una solicitud iniciada por un proveedor de identidad (IdP) no solicitada con una `AuthnRequest` de vuelta al IdP.

   ![Captura de pantalla de la opción para habilitar una respuesta no solicitada iniciada por el IdP](/assets/images/enterprise/management-console/saml-idp-sso.png)

   {% tip %}

   **Nota**: Te recomendamos mantener este valor **deseleccionado**. Deberías habilitar esta característica **únicamente** en la remota instancia de que tu implementación de SAML no sea compatible con el SSO que inició el proveedor de servicios y cuando lo recomiende {% data variables.contact.enterprise_support %}.

   {% endtip %}

1. Selecciona **Disable administrator demotion/promotion (Desactivar la degradación/promoción del administrador)** si **no** quieres que tu proveedor de SAML determine los derechos del administrador para los usuarios en {% data variables.product.product_location %}.

   ![Captura de pantalla de la opción para habilitar una opción para respetar el atributo de "administrator" desde el IdP para habilitar o inhabilitar los derechos administrativos](/assets/images/enterprise/management-console/disable-admin-demotion-promotion.png)
{%- ifversion ghes > 3.3 %}
1. Opcionalmente, para permitir que {% data variables.product.product_location %} reciba confirmaciones cifradas desde tu IdP de SAML, selecciona **Requerir confirmaciones cifradas**. Debes asegurarte de que tu IdP sea compatible con las aserciones cifradas y que los métodos de transporte de llaves y de cifrado en la consola de administración empaten con los valores configurados en tu IdP. También debes proporcionar un certificado público de {% data variables.product.product_location %} a tu IdP. Para obtener más información, consulta la sección "[Habilitar las aserciones cifradas](/admin/identity-and-access-management/using-saml-for-enterprise-iam/enabling-encrypted-assertions)".

   ![Captura de pantalla de la casilla de verificación "Habilitar aserciones cifradas" dentro de la sección de "Autenticación"de la consola de administración](/assets/images/help/saml/management-console-enable-encrypted-assertions.png)
{%- endif %}
1. En el campo **URL de inicio de sesión único**, teclea la terminal HTTP o HTTPS en tu IdP para las solicitudes de inicio de sesión único. Este valor lo provee la configuración de tu IdP. Si el host solo se encuentra disponible en tu red interna, podrías necesitar [configurar {% data variables.product.product_location %} para utilizar servidores de nombres internos](/enterprise/admin/guides/installation/configuring-dns-nameservers/).

   ![Captura de pantalla del campo de texto para la URL de inicio de sesión único](/assets/images/enterprise/management-console/saml-single-sign-url.png)
1. Opcionalmente, en el campo de **Emisor**, teclea el nombre del emisor SAML. Esto verifica la autenticidad de los mensajes que se envían a {% data variables.product.product_location %}.

   ![Captura de pantalla del campo de texto para la URL emisora de SAML](/assets/images/enterprise/management-console/saml-issuer.png)
1. En los menús desplegables de **Método de firma** y **Método de resumen**, elige el algoritmo de hash que usa tu emisor SAML para verificar la integridad de las respuestas desde {% data variables.product.product_location %}. Especifica el formato con el menú desplegable **Formato de identificador de nombre**.

   ![Captura de pantalla de los menús desplegables para seleccionar la firma y el método de resumen](/assets/images/enterprise/management-console/saml-method.png)
1. Dentro de **Verification certificate (Certificado de comprobación)**, haz clic en **Choose File (Elegir archivo)** y elige un certificado para validar las respuestas SAML desde el IdP.

   ![Captura de pantalla del botón para subir el certificado de validación desde un IdP](/assets/images/enterprise/management-console/saml-verification-cert.png)
1. Modifica los nombres de atributo de SAML para hacerlos coincidir con tu IdP, si es necesario, o acepta los nombres predeterminados.

   ![Captura de pantalla de los campos para ingresar atributos SAML adicionales](/assets/images/enterprise/management-console/saml-attributes.png)

{% elsif ghae %}

## Habilitar el SSO de SAML

{% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

Los siguientes IdP proporcionan documentación sobre cómo configurar el SSO de SAML para {% data variables.product.product_name %}. Si no se lista tu IdP, por favor, contáctalo para solicitar soporte para {% data variables.product.product_name %}.

 | IdP      | Más información                                                                                                                                                                                                                                                  |
 |:-------- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 | Azure AD | "[Configuring authentication and provisioning for your enterprise using Azure AD](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad)" |
 | Okta     | "[Configuring authentication and provisioning for your enterprise using Okta](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-okta)"         |

During initialization for {% data variables.product.product_name %}, you must configure {% data variables.product.product_name %} as a SAML service provider (SP) on your IdP. Debes ingresar varios valores únicos en tu IdP para configurar {% data variables.product.product_name %} como un SP válido. For more information, see "[SAML configuration reference](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#saml-metadata)."

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

{% ifversion ghec or ghes %}

## Leer más

{%- ifversion ghec %}
- "[Managing SAML single sign-on for your organization](/organizations/managing-saml-single-sign-on-for-your-organization)"
{%- endif %}
{%- ifversion ghes %}
- "[Promoting or demoting a site administrator](/admin/user-management/managing-users-in-your-enterprise/promoting-or-demoting-a-site-administrator)"
{%- endif %}

{% endif %}
