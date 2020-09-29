---
title: Hacer cumplir los parámetros de seguridad en tu cuenta de empresa
intro: Los propietarios de empresa pueden hacer cumplir determinadas políticas de seguridad para todas las organizaciones que son propiedad de una cuenta de empresa.
product: '{% data reusables.gated-features.enterprise-accounts %}'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /articles/enforcing-security-settings-for-organizations-in-your-business-account/
  - /articles/enforcing-security-settings-for-organizations-in-your-enterprise-account/
  - /articles/enforcing-security-settings-in-your-enterprise-account
  - /github/articles/managing-allowed-ip-addresses-for-organizations-in-your-enterprise-account
versions:
  free-pro-team: '*'
---

### Requerir autenticación de dos factores para las organizaciones en tu cuenta de empresa

Los propietarios de empresa pueden requerir que los miembros de la organización, gerentes de facturación y colaboradores externos en todas las organizaciones que sean propiedad de una cuenta de empresa usen autenticación de dos factores para proteger sus cuentas personales.

Para requerir la autenticación de dos factores para todas las organizaciones que sean propiedad de tu cuenta de empresa, primero debes habilitar la autenticación de dos factores para tu propia cuenta. Para obtener más información, consulta "[Proteger tu cuenta con la autenticación de dos factores (2FA)](/articles/securing-your-account-with-two-factor-authentication-2fa/)".

{% warning %}

**Advertencias:**

- Cuando requieras que se use la autenticación de dos factores para tu cuenta de empresa, los miembros, los colaboradores externos y los gerentes de facturación (incluidas las cuentas bot) en todas las organizaciones que sean propiedad de tu cuenta de empresa que no utilicen 2FA se eliminarán de tu organización y perderán acceso a sus repositorios. También perderán acceso a las bifurcaciones de sus repositorios privados de la organización. Puedes reinstalar sus privilegios de acceso y sus parámetros de configuración si habilitan la autenticación de dos factores para sus cuentas personales dentro de un plazo de tres meses a partir de su eliminación de tu organización. Para obtener más información, consulta "[Reinstalar un miembro antiguo de tu organización](/enterprise/{{ currentVersion }}/user/articles/reinstating-a-former-member-of-your-organization)".
- Todo propietario de la organización, miembro, gerente de facturación o colaborador externo en cualquiera de las organizaciones que sean propiedad de tu cuenta de empresa será automáticamente eliminado de tu organización si inhabilita la autenticación de dos factores de su cuenta personal una vez que hayas habilitado la autenticación de dos factores requerida.
- Si eres el único propietario de una cuenta de empresa que requiere autenticación de dos factores, no podrás inhabilitar la 2FA para tu cuenta personal sin inhabilitar la autenticación de dos factores requerida para la cuenta de empresa.

{% endwarning %}

Antes de solicitar el uso de la autenticación de dos factores, te recomendamos notificar a los miembros de la organización, a los colaboradores externos y a los gerentes de facturación y pedirles que configuren la 2FA para sus cuentas. Los propietarios de la organización pueden ver si los miembros y los colaboradores externos ya usan 2FA en la página Personas de cada organización. Para obtener más información, consulta "[Ver si los usuarios en tu organización tienen la 2FA habilitada](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)".

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
4. En "Autenticación de dos factores", revisa la información sobre cómo modificar los parámetros. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Debajo de "Two-factor authentication" ¨(Autenticación de dos factores), selecciona **Require two-factor authentication for all organizations in your business** (Requerir autenticación de dos factores para todas las organizaciones en tu empresa) y luego haz clic en **Save** (Guardar). ![Casilla de verificación para requerir autenticación de dos factores](/assets/images/help/business-accounts/require-2fa-checkbox.png)
6. Si se lo solicita, lee la información acerca de los miembros y colaboradores externos que serán eliminados de las organizaciones que son propiedad de tu cuenta de empresa. Para confirmar el cambio, escribe el nombre de tu cuenta de empresa y luego haz clic en **Eliminar miembros y requerir autenticación de dos factores**. ![Cuadro Confirmar aplicación obligatoria de dos factores](/assets/images/help/business-accounts/confirm-require-2fa.png)
7. Si algún miembro o colaborador externo es eliminado de las organizaciones que son propiedad de tu cuenta de empresa, también te recomendamos enviarle una invitación para reinstalar sus privilegios anteriores y su acceso a tu organización. Cada persona debe habilitar la autenticación de dos factores para poder aceptar tu invitación.

### Administrar direcciones IP permitidas para organizaciones en su cuenta de empresa

Los propietarios de empresa pueden restringir el acceso a los activos que pertenezcan a las organizaciones dentro de la cuenta empresarial mediante la configuración de una lista de direcciones IP permitidas. {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %}

También puedes configurar las direcciones IP permitidas para una organización individual. Para obtener más información, consulta "[Administrar las direcciones IP permitidas en tu organización](/github/setting-up-and-managing-organizations-and-teams/managing-allowed-ip-addresses-for-your-organization)".

#### Agregar una dirección IP permitida

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-description %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-entry %}

#### Habilitar direcciones IP permitidas

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
3. En "IP allow list" (Lista de permisos de IP), seleccione **Enable IP allow list** (Habilitar lista de permisos de IP). ![Realizar una marca de verificación para permitir direcciones IP](/assets/images/help/security/enable-ip-allowlist-enterprise-checkbox.png)
4. Haz clic en **Save (Guardar)**.

#### Editar una dirección IP permitida

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
8. Da clic en **Actualizar**.

#### Eliminar una dirección IP permitida

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

#### Utilizar {% data variables.product.prodname_actions %} con un listado de direcciones IP permitidas

{% data reusables.github-actions.ip-allow-list-self-hosted-runners %}

### Habilitar el inicio de sesión único de SAML para las organizaciones en tu cuenta de empresa

{% data reusables.saml.dotcom-saml-explanation %}Para obtener más información, consulta "[Acerca de la administración de identidad y accesos con el inicio de sesión único de SAML](/github/setting-up-and-managing-organizations-and-teams/about-identity-and-access-management-with-saml-single-sign-on)".

Los propietarios de empresa pueden habilitar el SSO de SAML y la autenticación centralizada a través de el IdP de SAML para todas las organizaciones que pertenezcan a su cuenta empresarial. Una vez que habilitas SAML SSO para tu cuenta de empresa, SAML SSO se habilita de manera predeterminada para todas las organizaciones que sean propiedad de tu cuenta de empresa. Se les exigirá a todos los miembros que se autentiquen usando SAML SSO para obtener acceso a las organizaciones de las que son miembros, y se les exigirá a los propietarios de empresas que se autentiquen usando SAML SSO cuando accesan a la cuenta de empresa.

{% data reusables.saml.about-saml-access-enterprise-account %}Para obtener más información, consulta la sección "[Visualizar y administrar el acceso de SAML de un usuario a tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise-account/viewing-and-managing-a-users-saml-access-to-your-enterprise-account)".

{% data reusables.saml.saml-supported-idps %}

{% data reusables.scim.enterprise-account-scim %}Si no estás participando en el beta privado, SCIM no será compatible para las cuentas empresariales. Para obtener más información, consulta la sección "[Administrar el aprovisionamiento de usuarios para las organizaciones en tu cuenta empresarial](#managing-user-provisioning-for-organizations-in-your-enterprise-account)".

{% note %}

**Nota:** Habilitar la autenticación con inicio de sesión único de SAML para tu cuenta de empresa reemplazará cualquier configuración de SAML existente al nivel de la organización.

{% endnote %}

Para obtener información más detallada sobre cómo habilitar el SAML utilizando Okta, consulta la sección "[Configurar el inicio de sesión único de SAML y SCIM para tu cuenta empresarial utilizando Okta](/github/setting-up-and-managing-your-enterprise-account/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta).

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
4. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. En "inicio de sesión único SAML", selecciona **Habilitar autenticación SAML**. ![Casilla de verificación para habilitar SAML SSO](/assets/images/help/business-accounts/enable-saml-auth-enterprise.png)
6. En el campo **URL de inicio de sesión**, escribe el extremo HTTPS de tu IdP para las solicitudes de inicio de sesión único. Este valor se encuentra en la configuración de tu IdP. ![Campo para la URL a la que los miembros serán redireccionados cuando inicien sesión](/assets/images/help/saml/saml_sign_on_url_business.png)
7. También puedes escribir tu nombre de emisor de SAML en el campo **Emisor**. Esto verifica la autenticidad de los mensajes enviados. ![Campo para el nombre del emisor SAML](/assets/images/help/saml/saml_issuer.png)
8. En **Certificado público**, pega un certificado para verificar las respuestas de SAML. ![Campo para el certificado público de tu proveedor de identidad](/assets/images/help/saml/saml_public_certificate.png)
9. Para verificar la integridad de las solicitudes de tu emisor de SAML, haz clic en {% octicon "pencil" aria-label="The edit icon" %}. Luego, en los menús desplegables Método de firma y Método de resumen, elige el algoritmo de hash que usa tu emisor de SAML. ![Menús desplegables para los algoritmos de hash del Método de firma y del Método de resumen usados por tu emisor SAML](/assets/images/help/saml/saml_hashing_method.png)
10. Antes de habilitar SAML SSO para tu empresa, haz clic en **Probar la configuración de SAML** para asegurarte de que la información que has ingresado sea correcta. ![Botón para probar la configuración de SAML antes de exigir el inicio de sesión único](/assets/images/help/saml/saml_test.png)
11. Haz clic en **Save (Guardar)**.

### Administrar el aprovisionamiento de usuarios para las organizaciones en tu cuenta empresarial

Los propietarios de las empresas pueden administrar las membrecías de la organización en una cuenta empresarial directamente desde un proveedor de identidad (IdP).

{% data reusables.enterprise-accounts.user-provisioning-release-stage %}

{% data reusables.saml.about-user-provisioning-enterprise-account %}

{% data reusables.scim.enterprise-account-scim %} Opcionalmente, puedes habilitar el aprovisionamiento de SAML y, por separado, el desaprovisionamiento.

Si configuras SCIM en tu IdP, cada que hagas cambios a una membrecía grupal en tu IdP, éste hará una llamada de SCIM a {% data variables.product.prodname_dotcom %} para actualizar la membrecía correspondiente de la organización. Si habilitas el aprovisionamiento de SAML, cada que un miembro de la empresa acceda a un recurso que protege tu configuración de SAML en la cuenta de la empresa, esa aserción de SAML activará el aprovisionamiento.

Para cada llamada de SCIM o aserción de SAML, {% data variables.product.product_name %} verificará los grupos de IdP a los cuales pertenece el usuario y realizará las siguientes operaciones:

- Si el usuario es un miembro de un grupo de IdP que corresponda a una organización que pertenezca a tu cuenta empresarial, y el usuario no es actualmente miembro de dicha organización, agrégalo a la organización (aserción de SAML) o envía una invitación por correo electrónico al usuario para que se una a una organización (llamado de SCIM).
- Cancela cualquier invitación que exista para que el usuario se una a la organización que pertenece a tu cuenta empresarial.

Para cada llamada de SCIM y, en caso de que habilites el desaprovisionamiento de SAML, en cada aserción de SAML, {% data variables.product.product_name %} también realizará la siguiente operación:

- Si el usuario no es un miembro de un grupo de IdP que corresponde a una organización que pertenezca a tu cuenta empresarial y éste es un miembro actual de dicha organización, elimina al usuario de la organización.

Si el desaprovisionamiento eleimina al último propietario que queda en una organización, ésta quedará sin propietario. Los propietarios de las empresas pueden asumir la propiedad de las organizaciones sin propietario. Para obtener más información, consulta la sección "[Administrar las organizaciones sin dueño en tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise-account/managing-unowned-organizations-in-your-enterprise-account)".

Para habilitar el aprovisionamiento de usuarios en tu cuenta empresarial utilizandoOkta, consulta la sección "[Configurar el inicio de sesión único de SAML y SCIM para tu cuenta empresarial utilizando Okta](/github/setting-up-and-managing-your-enterprise-account/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta)".

### Administrar la sincronización de equipos para las organizaciones en tu cuenta empresarial

Los propietarios de las empresas pueden habilitar la sincronización de equipos entre un IdP y {% data variables.product.product_name %} para permitir a los propietarios de las organizaciones y a los mantenedores de equipo conectar a los equipos en las organizaciones que pertenezcan a tu cuenta empresarial con los grupos de IdP.

{% data reusables.identity-and-permissions.about-team-sync %}

Puedes utilizar la sincronización de equipos con tu cuenta empresarial con Azure AD.

{% data reusables.identity-and-permissions.sync-team-with-idp-group %}

{% data reusables.identity-and-permissions.team-sync-disable %}

También puedes configurar y administrar la sincronización de equipos para una organización individual. Para obtener más información, consulta la sección [Administrar la sincronización de equipos para tu organización](/github/setting-up-and-managing-organizations-and-teams/managing-team-synchronization-for-your-organization)".

#### Prerrequisitos

Antes de que puedas habilitar la sincronización de equipos para tu cuenta empresarial:
  - Tú o tu administrador de Azure AD debe ser un administrador global o un administrador de Rol Privilegiado en Azure AD.
  - Debes habilitar el inicio de sesión único de SAML para las organizaciones en tu cuenta empresarial con tu IdP compatible. Para obtener más información, consulta la sección "[Habilitar el inicio de sesión único de SAML para las organizaciones en tu cuenta empresarial](#enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account)".
  - Debes autenticarte en tu cuenta empresarial utilizando el SSO de SAML y el IdP compatible. Para obtener más información, consulta "[Acerca de la autenticación con el inicio de sesión único de SAML](/articles/about-authentication-with-saml-single-sign-on)".

#### Administrar la sincronización de equipos para Azure AD

{% data reusables.identity-and-permissions.team-sync-azure-permissions %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.team-sync-confirm-saml %}
{% data reusables.identity-and-permissions.enable-team-sync-azure %}
{% data reusables.identity-and-permissions.team-sync-confirm %}
7. Revisa la información del organismo proveedor de identidad al cual quieres conectar tu cuenta empresarial, posteriormente, da clic en **Aprovar**. ![Solicitud pendiente para habilitar la sincronización de equipo a un locatario IdP específico con la opción de aprobar o cancelar la solicitud](/assets/images/help/teams/approve-team-synchronization.png)
8. Para inhabilitar la sincronización de equipos, da clic en **Inhabilitar la sincronización de equipos**. ![Inhabilita la sincronización de equipo](/assets/images/help/teams/disable-team-synchronization.png)

### Administrar las autoridades de los certificados de SSH de tu cuenta de empresa

Los propietarios de empresa pueden agregar y eliminar las autoridades de los certificados de SSH de una cuenta de empresa (CA).

Al agregar una CA de SSH a tu cuenta de empresa, puedes permitir que los miembros de cualquier organización que sea propiedad de tu cuenta de empresa acceda a los repositorios de esa organización usando los certificados de SSH proporcionados por ti. {% data reusables.organizations.can-require-ssh-cert %}Para obtener más información, consulta "[Acerca de las autoridades de certificados de SSH](/articles/about-ssh-certificate-authorities)".

#### Agregar una autoridad de certificado de SSH

{% data reusables.organizations.add-extension-to-cert %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.organizations.new-ssh-ca %}
{% data reusables.organizations.require-ssh-cert %}

#### Eliminar una autoridad de certificado de SSH

La eliminación de un CA no se puede deshacer. Si deseas usar la misma CA en el futuro, deberás cargarla nuevamente.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.organizations.delete-ssh-ca %}
