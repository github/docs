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
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account
versions:
  free-pro-team: '*'
topics:
  - Enterprise
---

### Requerir autenticación de dos factores para las organizaciones en tu cuenta de empresa

Los propietarios de empresa pueden requerir que los miembros de la organización, gerentes de facturación y colaboradores externos en todas las organizaciones que sean propiedad de una cuenta de empresa usen autenticación de dos factores para proteger sus cuentas personales.

Para requerir la autenticación de dos factores para todas las organizaciones que sean propiedad de tu cuenta de empresa, primero debes habilitar la autenticación de dos factores para tu propia cuenta. Para obtener más información, consulta "[Proteger tu cuenta con la autenticación de dos factores (2FA)](/articles/securing-your-account-with-two-factor-authentication-2fa/)".

{% warning %}

**Advertencias:**

- Cuando requieras que se use la autenticación de dos factores para tu cuenta de empresa, los miembros, los colaboradores externos y los gerentes de facturación (incluidas las cuentas bot) en todas las organizaciones que sean propiedad de tu cuenta de empresa que no utilicen 2FA se eliminarán de tu organización y perderán acceso a sus repositorios. También perderán acceso a las bifurcaciones de sus repositorios privados de la organización. Puedes reinstalar sus privilegios de acceso y sus parámetros de configuración si habilitan la autenticación de dos factores para sus cuentas personales dentro de un plazo de tres meses a partir de su eliminación de tu organización. Para obtener más información, consulta "[Reinstalar un miembro antiguo de tu organización](/enterprise/{{ page.version }}/user/articles/reinstating-a-former-member-of-your-organization)".
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

También puedes configurar las direcciones IP permitidas para una organización individual. Para obtener más información, consulta "[Administrar las direcciones IP permitidas en tu organización](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization)".

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
4. Haz clic en **Save ** (guardar).

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

### Leer más

- "[Configurar la administración de accesos e identidades para tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account)"
