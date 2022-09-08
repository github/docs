---
title: Requerir las políticas para los ajustes de seguridad en tu empresa
intro: Puedes requerir políticas para administrar los ajustes de seguridad en las organizaciones de tu empresa o permitir que se configuren políticas en cada organización.
permissions: Enterprise owners can enforce policies for security settings in an enterprise.
miniTocMaxHeadingLevel: 3
redirect_from:
  - /articles/enforcing-security-settings-for-organizations-in-your-business-account
  - /articles/enforcing-security-settings-for-organizations-in-your-enterprise-account
  - /articles/enforcing-security-settings-in-your-enterprise-account
  - /github/articles/managing-allowed-ip-addresses-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Security
shortTitle: Policies for security settings
ms.openlocfilehash: f04f345b37701353f539a970a8f891574b4ec447
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147707287'
---
## Acerca de las políticas para los ajustes de seguridad en tu empresa

Puedes requerir políticas para controlar los ajustes de seguridad para las organizaciones que le pertenecen a tu empresa en {% data variables.product.product_name %}. Predeterminadamente, los propietarios de organización pueden administrar los ajustes de seguridad. Para obtener más información, consulte "[Protección de la organización](/organizations/keeping-your-organization-secure)".

{% ifversion ghec or ghes %}

## Requerir autenticación bifactorial para las organizaciones de tu empresa

Los propietarios de empresa pueden requerir que los miembros de la organización, los gerentes de facturación y los colaboradores externos en todas las organizaciones que sean propiedad de una empresa usen autenticación de dos factores para proteger sus cuentas de usuario.

Antes de que requieras 2FA en todas las organizaciones que pertenezcan a tu empresa, debes habilitar la autenticación bifactorial para tu propia cuenta. Para obtener más información, consulte [Asegurar la cuenta con autenticación en dos fases (2FA)](/articles/securing-your-account-with-two-factor-authentication-2fa/).

{% warning %}

**Advertencias:**

- Cuando requieras que se use la autenticación de dos factores para tu empresa, los miembros, los colaboradores externos y los gerentes de facturación (incluidas las cuentas bot) en todas las organizaciones que sean propiedad de tu empresa que no utilicen 2FA se eliminarán de tu organización y perderán acceso a sus repositorios. También perderán acceso a las bifurcaciones de sus repositorios privados de la organización. Si habilitan la autenticación en dos fases en sus cuentas en un plazo de tres meses a partir de la fecha en que han sido eliminados de la organización, puedes restablecer sus privilegios de acceso y su configuración. Para más información, vea "[Readmisión de un antiguo miembro de la organización](/articles/reinstating-a-former-member-of-your-organization)".
- Todo propietario de la organización, miembro, gerente de facturación o colaborador externo en cualquiera de las organizaciones que sean propiedad de tu empresa será automáticamente eliminado de tu organización si inhabilita la autenticación de dos factores de su cuenta después de que hayas habilitado el requisito de autenticación de dos factores.
- Si eres el único propietario de una empresa que requiere autenticación de dos factores, no podrás deshabilitar la 2FA para tu cuenta de usuario sin deshabilitar el requisito de autenticación en dos fases para la empresa.

{% endwarning %}

Antes de solicitar el uso de la autenticación de dos factores, te recomendamos notificar a los miembros de la organización, a los colaboradores externos y a los gerentes de facturación y pedirles que configuren la 2FA para sus cuentas. Los propietarios de la organización pueden ver si los miembros y los colaboradores externos ya usan 2FA en la página Personas de cada organización. Para obtener más información, consulte "[Ver si los usuarios de la organización han habilitado la autenticación en dos fases](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)"

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
4. En "Autenticación de dos factores", revisa la información sobre cómo modificar los parámetros. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. En "Two-factor authentication", seleccione **Require two-factor authentication for all organizations in your business** y, a continuación, haga clic en **Save**.
  ![Casilla de verificación para exigir la autenticación en dos fases](/assets/images/help/business-accounts/require-2fa-checkbox.png)
6. En caso de que se solicite, lee la información sobre los miembros y colaboradores externos que se eliminarán de las organizaciones que pertenecen a tu empresa. Escriba el nombre de la empresa para confirmar el cambio y, a continuación, haga clic en **Remove members & require two-factor authentication**.
  ![Cuadro para confirmar la aplicación de la autenticación en dos fases](/assets/images/help/business-accounts/confirm-require-2fa.png)
7. Si algún miembro o colaborador externo es eliminado de las organizaciones que son propiedad de empresa, también te recomendamos enviarle una invitación para reinstalar sus privilegios anteriores y su acceso a tu organización. Cada persona debe habilitar la autenticación de dos factores para poder aceptar tu invitación.

{% endif %}

{% ifversion ghec or ghae %}

## Administrar las direcciones IP permitidas para las organizaciones de tu empresa

{% ifversion ghae %}

Puedes restringir el tráfico de red a tu empresa de {% data variables.product.product_name %}. Para obtener más información, consulte "[Restricción del tráfico de red a la empresa](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise)".

{% elsif ghec %}

Los propietarios de las empresas pueden restringir el acceso a los activos privados que pertenezcan a las organizaciones dentro de dichas empresas al configurar una lista de direcciones IP específicas permitidas. {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %} {% data reusables.identity-and-permissions.ip-allow-lists-enterprise %}

También puedes configurar las direcciones IP permitidas para una organización individual. Para obtener más información, consulte "[Administración de las direcciones IP permitidas para la organización](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization)".

### Agregar una dirección IP permitida

{% data reusables.identity-and-permissions.about-adding-ip-allow-list-entries %}

{% data reusables.identity-and-permissions.ipv6-allow-lists %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-add-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-add-description %} {% data reusables.identity-and-permissions.ip-allow-lists-add-entry %} {% data reusables.identity-and-permissions.check-ip-address %}

### Permitir el acceso mediante {% data variables.product.prodname_github_apps %}

{% data reusables.identity-and-permissions.ip-allow-lists-githubapps-enterprise %}

### Habilitar direcciones IP permitidas

{% data reusables.identity-and-permissions.about-enabling-allowed-ip-addresses %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
3. En "IP allow list", seleccione **Enable IP allow list**.
  ![Casilla para permitir direcciones IP](/assets/images/help/security/enable-ip-allowlist-enterprise-checkbox.png)
4. Haga clic en **Save**(Guardar).

### Editar una dirección IP permitida

{% data reusables.identity-and-permissions.about-editing-ip-allow-list-entries %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
8. Haga clic en **Update**(Actualizar).
{% data reusables.identity-and-permissions.check-ip-address %}

{% ifversion ip-allow-list-address-check %}
### Comprobación de permiso para una dirección IP

{% data reusables.identity-and-permissions.about-checking-ip-address %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.check-ip-address-step %} {% endif %}

### Eliminar una dirección IP permitida

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

### Utilizar {% data variables.product.prodname_actions %} con un listado de direcciones IP permitidas

{% data reusables.actions.ip-allow-list-self-hosted-runners %}

{% endif %}

{% endif %}

## Administrar las autoridades de certificados SSH en tu empresa

Puedes utilizar una autoridad de certificados SSH (CA) para permitir que los miembros de cualquier organización que pertenezca a tu empresa accedan a los repositorios de esta utilizando certificados SSH que tu proporciones. {% data reusables.organizations.can-require-ssh-cert %} Para obtener más información, consulte "[Acerca de las entidades de certificación de SSH](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)."

{% data reusables.organizations.add-extension-to-cert %}

### Agregar una autoridad de certificado de SSH

Si requieres certificados SSH para tu empresa, los miembros empresariales deberán utilizar una URL especial para las operaciones de Git por SSH. Para más información, vea "[Acerca de las entidades de certificación de SSH](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities#about-ssh-urls-with-ssh-certificates)".

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.organizations.new-ssh-ca %} {% data reusables.organizations.require-ssh-cert %}

### Eliminar una autoridad de certificado de SSH

La eliminación de un CA no se puede deshacer. Si deseas usar la misma CA en el futuro, deberás cargarla nuevamente.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.organizations.delete-ssh-ca %}

{% ifversion ghec or ghae %}
## Información adicional

- "[Acerca de la administración de identidades y acceso para su empresa](/admin/authentication/managing-identity-and-access-for-your-enterprise/about-identity-and-access-management-for-your-enterprise)"{% ifversion ghec %}
- "[Acceso a los informes de cumplimiento de la empresa](/admin/overview/accessing-compliance-reports-for-your-enterprise)"{% endif %} {% endif %}
