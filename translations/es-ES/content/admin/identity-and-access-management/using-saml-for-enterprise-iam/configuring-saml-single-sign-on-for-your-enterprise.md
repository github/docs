---
title: Configurar el inicio de sesión único de SAML para tu empresa
shortTitle: Configure SAML SSO
intro: 'Puedes controlar y proteger el acceso a recursos {% ifversion ghec %}como repositorios, problemas y solicitudes de incorporación de cambios dentro de las organizaciones de tu empresa{% elsif ghes %}{% data variables.location.product_location %}{% elsif ghae %}tu empresa en {% data variables.product.prodname_ghe_managed %}{% endif %} por {% ifversion ghec %}que exige{% elsif ghes or ghae %}la configuración de{% endif %} inicio de sesión único de SAML mediante el proveedor de identidades (IdP).'
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
ms.openlocfilehash: 804ba3b262aae15b862e1a14694b82339c8d34a4
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/28/2022
ms.locfileid: '148183960'
---
{% data reusables.enterprise-accounts.emu-saml-note %}

## Acerca de SAML SSO

{% ifversion ghec %}

{% data reusables.saml.dotcom-saml-explanation %} 

{% data reusables.saml.saml-accounts %}

Para más información, vea "[Acerca de la administración de identidades y acceso con el inicio de sesión único de SAML](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)".

{% data reusables.saml.about-saml-enterprise-accounts %}

{% data reusables.saml.about-saml-access-enterprise-account %} Para obtener más información, consulte "[Visualizar y administrar el acceso de SAML de un usuario a su cuenta empresarial](/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise)".

{% data reusables.saml.saml-disabled-linked-identities-removed %}

{% data reusables.apps.reauthorize-apps-saml %}

{% elsif ghes or ghae %}

El SSO de SAML te permite controlar centralmente {% data variables.location.product_location %} y proteger el acceso desde tu IdP de SAML. Cuando un usuario no autenticado visita {% data variables.location.product_location %} en un explorador, {% data variables.product.product_name %} lo redirigirá a tu IdP de SAML para autenticarse. Después de que el usuario se autentica correctamente con una cuenta en el IdP, este lo redirige de regreso a {% data variables.location.product_location %}. {% data variables.product.product_name %} valida la respuesta de tu IdP y luego le otorga acceso al usuario.

Después de autenticarse correctamente en tu IdP, la sesión de SAML del usuario para {% data variables.location.product_location %} se encuentra activa en el explorador durante 24 horas. Después de 24 horas, el usuario debe autenticarse nuevamente con tu IdP.

{% data reusables.saml.saml-ghes-account-revocation %}

{% ifversion ghae %}

{% data reusables.saml.assert-the-administrator-attribute %}

{% data reusables.scim.after-you-configure-saml %} Para obtener más información, consulte "[Configuración del aprovisionamiento de usuarios para la empresa](/admin/authentication/configuring-user-provisioning-for-your-enterprise)".

{% endif %}

{% endif %}

## Proveedores de identidad compatibles

{% data reusables.saml.saml-supported-idps %}

{% ifversion ghec %}

## Consideraciones sobre el nombre de usuario con SAML

{% ifversion ghec %}Si usas {% data variables.product.prodname_emus %}, {% endif %}{% data reusables.enterprise_user_management.consider-usernames-for-external-authentication %} Para obtener más información, consulta "[Consideraciones sobre el nombre de usuario para la autenticación externa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)".

## Requerir el inicio de sesión único de SAML para las organizaciones en tu cuenta empresarial

Cuando requieres el SSO de SAML para tu empresa, la configuración empresarial se superpondrá a cualquier configuración de SAML que exista a nivel organizacional. {% data reusables.saml.switching-from-org-to-enterprise %} Para obtener más información, consulte "[Cambio de la configuración de SAML de una organización a una cuenta de empresa](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)".

Cuando requieres el SSO de SAML para una organización, {% data variables.product.company_short %} elimina cualquier miembro de la organización que no se haya autenticado con éxito en tu IdP de SAML. Cuando requieres el SSO de SAML para tu empresa, {% data variables.product.company_short %} no elimina a los miembros de dicha empresa que no se hayan autenticado exitosamente con tu IdP de SAML. La siguiente vez que un miembro acceda a los recursos empresariales, este deberá autenticarse con tu IdP de SAML.

Para obtener información más detallada sobre cómo habilitar SAML mediante Okta, consulte "[Configurar el inicio de sesión rápido de SAML para tu cuenta empresarial utilizando Okta](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta)".

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
4. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. En "SAML single sign-on", seleccione **Require SAML authentication**.
  ![Casilla de verificación para habilitar el SSO de SAML](/assets/images/help/business-accounts/enable-saml-auth-enterprise.png)
6. En el campo **Sign on URL**, escriba el punto de conexión HTTPS de su proveedor de identidades para las solicitudes de inicio de sesión único. Este valor se encuentra en la configuración de tu IdP.
![Campo de la URL a la que los miembros serán redirigidos cuando inicien sesión](/assets/images/help/saml/saml_sign_on_url_business.png)
7. Opcionalmente, en el campo **Issuer**, escriba la dirección URL del emisor de SAML para comprobar la autenticidad de los mensajes enviados.
![Campo para el nombre del emisor de SAML](/assets/images/help/saml/saml_issuer.png)
8. En **Public Certificate**, copie un certificado para verificar las respuestas SAML.
![Campo para el certificado público del proveedor de identidades](/assets/images/help/saml/saml_public_certificate.png)
9. Para comprobar la integridad de las solicitudes del emisor de SAML, haga clic en {% octicon "pencil" aria-label="The edit icon" %}. Posteriormente, en los menús desplegables de "Método de firma" y "Método de resumen", elige el algoritmo de hash que utiliza tu emisor de SAML.
![Menús desplegables para los algoritmos de hash del método de firma y del método de resumen usados por el emisor de SAML](/assets/images/help/saml/saml_hashing_method.png)
10. Antes de habilitar el SSO de SAML para la empresa, haga clic en **Test SAML configuration** para asegurarse de que la información que ha escrito sea correcta. ![Botón para probar la configuración de SAML antes de aplicarla](/assets/images/help/saml/saml_test.png)
11. Haga clic en **Save**(Guardar).
{% data reusables.enterprise-accounts.download-recovery-codes %}

{% elsif ghes %}

## Configurar el SSO de SAML

Puedes habilitar o inhabilitar la autenticación de SAML para {% data variables.location.product_location %} o puedes editar una configuración existente. Puedes ver y editar la configuración de autenticación para {% data variables.product.product_name %} en la consola de administración. Para más información, vea "[Acceso a la consola de administración](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)".

{% note %}

**Nota**: {% data reusables.enterprise.test-in-staging %}

{% endnote %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
1. Seleccione **SAML**.
   
   ![Captura de pantalla de la opción para habilitar la autenticación de SAML en la consola de administración](/assets/images/enterprise/management-console/auth-select-saml.png)
1. {% data reusables.enterprise_user_management.built-in-authentication-option %}

   ![Captura de pantalla de la opción para habilitar la autenticación integrada fuera del IdP de SAML](/assets/images/enterprise/management-console/saml-built-in-authentication.png)
1. Opcionalmente, para habilitar el inicio de sesión único de respuesta no solicitado, seleccione **IdP initiated SSO** (SSO iniciado de IdP). De manera predeterminada, {% data variables.product.prodname_ghe_server %} responderá a una solicitud iniciada por un proveedor de identidad (IdP) no solicitada con un elemento `AuthnRequest` de vuelta al IdP.

   ![Captura de pantalla de la opción para habilitar una respuesta no solicitada iniciada por el IdP](/assets/images/enterprise/management-console/saml-idp-sso.png)

   {% tip %}

   **Nota**: Se recomienda mantener este valor **sin seleccionar**. Debe activar esta característica **solo** en el caso inusual que su implementación SAML no admita el SSO iniciado del proveedor de servicios y que {% data variables.contact.enterprise_support %} lo aconseje.

   {% endtip %}

1. Selecciona **Deshabilitar degradación o promoción de administrador** si **no** quieres que el proveedor de SAML determine los derechos de administrador para los usuarios en {% data variables.location.product_location %}.

   ![Captura de pantalla de la opción para habilitar una opción a fin de respetar el atributo "administrator" desde el IdP para habilitar o inhabilitar los derechos administrativos](/assets/images/enterprise/management-console/disable-admin-demotion-promotion.png) {%- ifversion ghes > 3.3 %}
1. Opcionalmente, para permitir que {% data variables.location.product_location %} reciba aserciones cifradas desde el IdP de SAML, selecciona **Requerir aserciones cifradas**. Debes asegurarte de que tu IdP sea compatible con las aserciones cifradas y que los métodos de transporte de llaves y de cifrado en la consola de administración empaten con los valores configurados en tu IdP. También debes proporcionar un certificado público de {% data variables.location.product_location %} a tu IdP. Para obtener más información, vea "[Habilitar aserciones cifradas](/admin/identity-and-access-management/using-saml-for-enterprise-iam/enabling-encrypted-assertions)".

   ![Captura de pantalla de la casilla "Habilitar aserciones cifradas" en la sección "Autenticación" de la consola de administración](/assets/images/help/saml/management-console-enable-encrypted-assertions.png) {%- endif %}
1. En el campo **Single sign-on URL** (URL de inicio de sesión único), escribe el punto de conexión HTTP o HTTPS del IdP para las solicitudes de inicio de sesión único. Este valor lo provee la configuración de tu IdP. Si el host solo está disponible desde la red interna, es posible que tengas que [configurar {% data variables.location.product_location %} para usar servidores de nombres internos](/enterprise/admin/guides/installation/configuring-dns-nameservers/).

   ![Captura de pantalla del campo de texto para la URL de inicio de sesión único](/assets/images/enterprise/management-console/saml-single-sign-url.png)
1. También puede escribir su nombre de emisor SAML en el campo **Issuer** (Emisor). Esto verifica la autenticidad de los mensajes que se envían a {% data variables.location.product_location %}.

   ![Captura de pantalla del campo de texto para la URL emisora de SAML](/assets/images/enterprise/management-console/saml-issuer.png)
1. En los menús desplegables **Método de firma** y **Método de resumen**, elige el algoritmo hash que usa el emisor de SAML para comprobar la integridad de las solicitudes de {% data variables.location.product_location %}. Especifique el formato con el menú desplegable **Name Identifier Format** (Formato de identificador de nombre).

   ![Captura de pantalla de los menús desplegables para seleccionar la firma y el método de resumen](/assets/images/enterprise/management-console/saml-method.png)
1. En **Verification certificate** (Certificado de verificación), haga clic en **Choose file** (Elegir archivo) y elija un certificado para validar las respuestas SAML desde el IdP.

   ![Captura de pantalla del botón para subir el certificado de validación desde un IdP](/assets/images/enterprise/management-console/saml-verification-cert.png)
1. Modifica los nombres de atributo de SAML para hacerlos coincidir con tu IdP, si es necesario, o acepta los nombres predeterminados.

   ![Captura de pantalla de los campos para ingresar atributos SAML adicionales](/assets/images/enterprise/management-console/saml-attributes.png)

{% elsif ghae %}

## Habilitar el SSO de SAML

{% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

Los siguientes IdP proporcionan documentación sobre cómo configurar el SSO de SAML para {% data variables.product.product_name %}. Si no se lista tu IdP, por favor, contáctalo para solicitar soporte para {% data variables.product.product_name %}.

 | IdP | Más información |
 | :- | :- |
 | Azure AD | "[Configuración de la autenticación y el aprovisionamiento de la empresa mediante Azure AD](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad)" |
| Okta | "[Configuración de la autenticación y el aprovisionamiento de la empresa mediante Okta](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-okta)" |

Durante la inicialización de {% data variables.product.product_name %}, debes configurar {% data variables.product.product_name %} como un proveedor de servicios (SP) de SAML en tu IdP. Debes ingresar varios valores únicos en tu IdP para configurar {% data variables.product.product_name %} como un SP válido. Para obtener más información, consulta "[Referencia de configuración de SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#saml-metadata)".

## Editar la configuración del SSO de SAML

Si los detalles de tu IdP cambian, tendrás que editar la configuración de SSO de SAML para {% data variables.location.product_location %}. Por ejemplo, si el certificado de tu IdP expira, puedes editar el valor del certificado público.

{% ifversion ghae %}

{% note %}

**Nota**: {% data reusables.saml.contact-support-if-your-idp-is-unavailable %}

{% endnote %} 

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. Debajo de "Inicio de sesión único de SAML", teclea los detalles nuevos de tu IdP.
  ![Campos de entrada de texto con los detalles del IdP para la configuración del SSO de SAML de una empresa](/assets/images/help/saml/ae-edit-idp-details.png)
1. Opcionalmente, da clic en {% octicon "pencil" aria-label="The edit icon" %} para configurar una firma nueva o método de resumen.
  ![Icono de edición para cambiar la firma y el método de resumen](/assets/images/help/saml/ae-edit-idp-details-edit-signature-and-digest.png)

    - Utiliza los menús desplegables y elige la nueva firma o método de resumen.
      ![Menús desplegables para elegir una firma o un método de resumen nuevos](/assets/images/help/saml/ae-edit-idp-details-edit-signature-and-digest-drop-down-menus.png)
1. Para asegurarse de que la información especificada es correcta, haga clic en **Test SAML configuration**.
  ![Botón "Test SAML configuration"](/assets/images/help/saml/ae-edit-idp-details-test-saml-configuration.png)
1. Haga clic en **Save**(Guardar).
    ![Botón "Save" de la configuración del inicio de sesión único de SAML](/assets/images/help/saml/ae-edit-idp-details-save.png)
1. Opcionalmente, para aprovisionar y desaprovisionar automáticamente las cuentas de usuario para {% data variables.location.product_location %}, vuelve a configurar el aprovisionamiento de usuarios con SCIM. Para obtener más información, consulte "[Configuración del aprovisionamiento de usuarios para la empresa](/admin/authentication/configuring-user-provisioning-for-your-enterprise)".

{% endif %}

{% ifversion ghae %}

## Inhabilitar el SSO de SAML

{% warning %}

**Advertencia**: Si deshabilitas el SSO de SAML para {% data variables.location.product_location %}, los usuarios sin sesiones existentes de inicio de sesión único de SAML no podrán iniciar sesión en {% data variables.location.product_location %}. Las sesiones del SSO de SAML en {% data variables.location.product_location %} finalizan después de 24 horas.

{% endwarning %}

{% note %}

**Nota**: {% data reusables.saml.contact-support-if-your-idp-is-unavailable %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. En "SAML single sign-on", seleccione **Enable SAML authentication**.
  ![Casilla de verificación de "Enable SAML authentication"](/assets/images/help/saml/ae-saml-disabled.png)
1. Para deshabilitar el SSO de SAML y requerir el inicio de sesión con la cuenta de usuario integrada que creó durante la inicialización, haga clic en **Save**.
    ![Botón "Save" de la configuración del inicio de sesión único de SAML](/assets/images/help/saml/ae-saml-disabled-save.png)

{% endif %}

{% endif %}

{% ifversion ghec or ghes %}

## Información adicional

{%- ifversion ghec %}
- "[Administración del inicio de sesión único de SAML para la organización](/organizations/managing-saml-single-sign-on-for-your-organization)" {%- endif %} {%- ifversion ghes %}
- "[Promoción o degradación de un administrador de sitio](/admin/user-management/managing-users-in-your-enterprise/promoting-or-demoting-a-site-administrator)" {%- endif %}

{% endif %}
