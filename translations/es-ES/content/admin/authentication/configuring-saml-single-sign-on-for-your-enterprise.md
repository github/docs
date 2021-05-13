---
title: Configurar el inicio de sesión único de SAML para tu empresa
shortTitle: Configurar el SSO de SAML
intro: 'Puedes configurar el inicio de sesión único (SSO) de SAML para tu empresa, el cual te permite controlar la autenticación centralmente para {% data variables.product.product_location %} utilizando tu proveedor de identidad (IdP).'
product: '{% data reusables.gated-features.saml-sso %}'
permissions: 'Enterprise owners can configure SAML SSO for an enterprise on {% data variables.product.product_name %}.'
versions:
  github-ae: '*'
---

### Acerca de SAML SSO

{% if currentVersion == "github-ae@latest" %}

El SSO de SAML te permite controlar centralmente y asegurar el acceso a {% data variables.product.product_location %}desde tu IdP de SAML. Cuando un usuario no autenticado vista {% data variables.product.product_location %} en un buscador, {% data variables.product.product_name %} lo redirigirá a tu IdP de SAML para autenticarse. Después de que el usuario se autentica exitosamente con una cuenta en el IdP, éste lo redirige de regreso a {% data variables.product.product_location %}. {% data variables.product.product_name %} valida la respuesta de tu IdP y luego le otorga acceso al usuario.

Después de autenticarse exitosamente en tu IdP, la sesión de SAML del usuario para {% data variables.product.product_location %} se encuentra activa en el buscador por 24 horas. Después de 24 horas, el usuario debe autenticarse nuevamente con tu IdP.

{% data reusables.saml.assert-the-administrator-attribute %}

{% data reusables.scim.after-you-configure-saml %} Para obtener más información, consulta la sección "[Configurar el aprovisionamiento de usuarios para tu empresa](/admin/authentication/configuring-user-provisioning-for-your-enterprise)".

{% endif %}

### Proveedores de identidad compatibles

{% data variables.product.product_name %} es compatible con el SSO de SAML para los IdP que implementen SAML 2.0 estándar. Para obtener más información, consulta la sección [Wiki de SAML](https://wiki.oasis-open.org/security) en el sitio web de OASIS.

{% data variables.product.company_short %} ha probado el SSO de SAML para {% data variables.product.product_name %} con los siguientes IdP.

{% if currentVersion == "github-ae@latest" %}
- Azure AD
{% endif %}

### Habilitar el SSO de SAML

{% if currentVersion == "github-ae@latest" %}

{% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

Los siguientes IdP proporcionan documentación sobre cómo configurar el SSO de SAML para {% data variables.product.product_name %}. Si no se lista tu IdP, por favor, contáctalo para solicitar soporte para {% data variables.product.product_name %}.

 | IdP      | Más información                                                                                                                                                                                                                                           |
 |:-------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 | Azure AD | [Tutorial: Integración del inicio de sesión único (SSO) de Azure Active Directory con {% data variables.product.prodname_ghe_managed %}](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-tutorial) en los Documentos de Microsoft |

Durante la inicialización para {% data variables.product.product_name %}, debes configurar a {% data variables.product.product_name %} como un proveedor de servicios (SP) de SAML en tu IdP. Debes ingresar varios valores únicos en tu IdP para configurar {% data variables.product.product_name %} como un SP válido.

| Valor                                                     | Otros nombres    | Descripción                                                                       | Ejemplo                   |
|:--------------------------------------------------------- |:---------------- |:--------------------------------------------------------------------------------- |:------------------------- |
| ID de Entidad de SP                                       | URL de SP        | Tu URL de más alto nivel para {% data variables.product.prodname_ghe_managed %} | <code>https://<em>YOUR-GITHUB-AE-HOSTNAME</em></code> |
| URL del Servicio de Consumidor de Aserciones (ACS) del SP | URL de respuesta | URL a la que el IdP enviará respuestas de SAML                                    | <code>https://<em>YOUR-GITHUB-AE-HOSTNAME</em>/saml/consume</code> |
| URL de inicio de sesión único (SSO) del SP                |                  | URL en donde el IdP comienza con SSO                                              | <code>https://<em>YOUR-GITHUB-AE-HOSTNAME</em>/sso</code> |

{% endif %}

### Editar la configuración del SSO de SAML

Si los detalles de tu IdP cambian, necesitarás editar la configuración de SSO de SAML para {% data variables.product.product_location %}. Por ejemplo, si el certificado de tu IdP expira, puedes editar el valor del certificado público.

{% if currentVersion == "github-ae@latest" %}

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

### Inhabilitar el SSO de SAML

{% if currentVersion == "github-ae@latest" %}

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
