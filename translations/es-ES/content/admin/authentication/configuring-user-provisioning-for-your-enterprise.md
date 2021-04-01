---
title: Configurar el aprovisionamiento de usuarios para tu empresa
shortTitle: Configurar el aprovisionamiento de usuarios
intro: Puedes configurar el Sistema para la Administración de Identidad entre Dominios (SCIM) para tu empresa, el cual aprovisiona las cuentas de usuario automáticamente en {% data variables.product.product_location %} cuando asignas la aplicación para {% data variables.product.product_location %} a un usuario en tu proveedor de identidad (IdP).
permissions: Los propietarios de empresas pueden configurar el aprovisionamiento de usuarios para una empresa en {% data variables.product.product_name %}.
product: '{% data reusables.gated-features.saml-sso %}'
versions:
  github-ae: '*'
---

### Acerca del aprovisionamiento de usuarios para tu empresa

{% data reusables.saml.ae-uses-saml-sso %} Para obtener más información, consulta la sección "[Configurar el incio de sesión único de SAML para tu empresa](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise)".

{% data reusables.scim.after-you-configure-saml %} Para obtener más información acerca del SCIM, consulta la sección [Sistema para la Administración de Identidad entre Dominios: Protocolo (RFC 7644)](https://tools.ietf.org/html/rfc7644) en el sitio web de IETF.

{% if currentVersion == "github-ae@latest" %}

Configurar el aprovisionamiento le permite a tu IdP comunicarse con {% data variables.product.product_location %} cuando asignas o desasignas la aplicación para {% data variables.product.product_name %} a un usuario en tu IdP. Cuando asignas la aplicación, tu IdP pedirá que {% data variables.product.product_location %} cree una cuenta y enviará un correo electrónico de incorporación al usuario. Cuando desasignas la aplicación, tu IdP se comunicará con {% data variables.product.product_name %} para invalidad cualquier sesión de SAML e inhabilitar la cuenta del miembro.

Para configurar el aprovisionamiento para tu empresa, debes inhabilitar el aprovisionamiento en {% data variables.product.product_name %} y posteriormente instalar y configurar una aplicación de aprovisionamiento en tu IdP.

La aplicación de aprovisionamiento en tu IdP se comunica con {% data variables.product.product_name %} a través de nuestra API de SCIM para empresas. Para obtener más información, consulta la sección "[Adminsitración de GitHub Enterprise](/rest/reference/enterprise-admin#scim)" en la documentación de la API de REST de {% data variables.product.prodname_dotcom %}.

{% endif %}

### Proveedores de identidad compatibles

{% data reusables.scim.supported-idps %}

Cuando configuras el aprovisionamiento de usuarios con un IdP compatible, también puedes asignar o desasignar la aplicación para {% data variables.product.product_name %} a grupos de usuarios. Estos grupos estarán entonces disponibles para que los propietarios de organización y mantenedores de equipo en {% data variables.product.product_location %} los mapeen a los equipos de {% data variables.product.product_name %}. Para obtener más información, consulta la sección "[Sincronizar a un equipo con un grupo de proveedor de identidad](/github/setting-up-and-managing-organizations-and-teams/synchronizing-a-team-with-an-identity-provider-group)".

### Prerrequisitos

{% if currentVersion == "github-ae@latest" %}

Para aprovisionar y desaprovisionar automáticamente el acceso a {% data variables.product.product_location %} desde tu IdP, primero debes configurar el SSO de SAML cuando inicializas {% data variables.product.product_name %}. Para obtener más información, consulta la sección "[Inicializar {% data variables.product.prodname_ghe_managed %}](/admin/configuration/initializing-github-ae)".

Debes tener acceso administrativo en tu IdP para configurar la aplicación para el aprovisionamiento de usuarios para {% data variables.product.product_name %}.

{% endif %}

### Habilitar el aprovisionamiento de usuarios para tu empresa

{% if currentVersion == "github-ae@latest" %}

1. Mientras tienes una sesión activa en

{% data variables.product.product_location %} como un propietario de empresa, crea un token de acceso personal con el alcance **admin:enterprise**. Para obtener más información, consulta la sección "[Crear un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)".
  {% note %}

  **Notas**:
    - Para crear el token de acceso personal, te recomendamos utilizar la cuenta para el primer propietario empresarial que creaste durante la inicialización. Para obtener más información, consulta la sección "[Inicializar {% data variables.product.prodname_ghe_managed %}](/admin/configuration/initializing-github-ae)".
    - Necesitarás que este token de accesopersonal configure la aplicación para SCIM en tu IdP. Almacena el token de manera segura en un administrador de contraseñas hasta que lo necesites nuevamente más adelante en estas instrucciones.

  {% endnote %}
  {% warning %}

  **Advertencia**: Si la cuenta de usuario para el propietario de la empresa que crea el token de acceso personal se desactiva o desaprovisiona, tu IdP ya no aprovisionará ni desaprovisionará cuentas de usuario para tu empresa automáticamente. Otro propietario de empresa deberá crear un token de acceso personal nuevo y reconfigurar el aprovisionamiento en el IdP.

  {% endwarning %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. Debajo de "Aprovisionamiento de usuario de SCIM", selecciona **Requerir el aprovisionamiento de usuario de SCIM**. ![Casilla de verificación para "Requerir aprovisionamiento de usuarios de SCIM" dentro de la configuración de seguridad empresarial](/assets/images/help/enterprises/settings-require-scim-user-provisioning.png)
1. Haz clic en **Save ** (guardar). ![Botón de guardar debajo de "Requerir aprovisionamiento de usuarios de SCIM" dentro de la configuración de seguridad de la empresa](/assets/images/help/enterprises/settings-scim-save.png)
1. Configura el aprovisionamiento de usuarios en la aplicación para {% data variables.product.product_name %} en tu IdP.

  Los siguientes IdP proporcionan documentación acerca de cómo configurar el aprovisionamiento para {% data variables.product.product_name %}. Si no se lista tu IdP, por favor, contáctalo para solicitar soporte para {% data variables.product.product_name %}.

  | IdP      | Más información                                                                                                                                                                                                                                           |
  |:-------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | Azure AD | [Tutorial: Configurar a {% data variables.product.prodname_ghe_managed %} para el aprovisionamiento automático de usuarios](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-provisioning-tutorial) en los documentos de Microsoft |

  La aplicación en tu IdP requiere dos valores para aprovisionar o desaprovisionar las cuentas de usuario en {% data variables.product.product_location %}.

  | Valor              | Otros nombres                           | Descripción                                                                                                           | Ejemplo                                           |
  |:------------------ |:--------------------------------------- |:--------------------------------------------------------------------------------------------------------------------- |:------------------------------------------------- |
  | URL                | URL de inquilino                        | URL para la API de aprovisionamiento de SCIM para tu empresa en {% data variables.product.prodname_ghe_managed %}   | <pre>https&colon;//api.<em>YOUR-GITHUB-AE-HOSTNAME</em>/scim/v2</pre>                         |
  | Secreto compartido | Token de acceso personal, token secreto | Toekn para que la aplicación en tu IdP realice las tareas de aprovisionamiento en nombre de un propietario de empresa | Token de acceso personal que creaste en el paso 1 |

{% endif %}
