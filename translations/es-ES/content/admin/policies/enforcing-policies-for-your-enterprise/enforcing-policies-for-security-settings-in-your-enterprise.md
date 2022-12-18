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
ms.openlocfilehash: 7a383ed586d084a7e2562a5927dd198caca65037
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/28/2022
ms.locfileid: '148183968'
---
## Acerca de las políticas para los ajustes de seguridad en tu empresa

Puedes requerir políticas para controlar los ajustes de seguridad para las organizaciones que le pertenecen a tu empresa en {% data variables.product.product_name %}. Predeterminadamente, los propietarios de organización pueden administrar los ajustes de seguridad. 

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

## Administrar las autoridades de certificados SSH en tu empresa

Puedes utilizar una autoridad de certificados SSH (CA) para permitir que los miembros de cualquier organización que pertenezca a tu empresa accedan a los repositorios de esta utilizando certificados SSH que tu proporciones. {% data reusables.organizations.can-require-ssh-cert %} Para obtener más información, consulte "[Acerca de las entidades de certificación de SSH](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)."

{% data reusables.organizations.add-extension-to-cert %}

### Agregar una autoridad de certificado de SSH

Si requieres certificados SSH para tu empresa, los miembros empresariales deberán utilizar una URL especial para las operaciones de Git por SSH. Para más información, vea "[Acerca de las entidades de certificación de SSH](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities#about-ssh-urls-with-ssh-certificates)".

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.organizations.new-ssh-ca %} {% data reusables.organizations.require-ssh-cert %}

### Eliminar una autoridad de certificado de SSH

La eliminación de un CA no se puede deshacer. Si deseas usar la misma CA en el futuro, deberás cargarla nuevamente.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.organizations.delete-ssh-ca %}

{% ifversion sso-redirect %}
## Administración del inicio de sesión único para usuarios no autenticados

{% data reusables.enterprise-managed.sso-redirect-release-phase %}

Si la empresa usa {% data variables.product.prodname_emus %} puedes elegir qué verán los usuarios no autenticados cuando intentan acceder a los recursos de la empresa. Para más información sobre {% data variables.product.prodname_emus %}, consulta "[Acerca de {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users)".

De forma predeterminada, para ocultar la existencia de recursos privados, cuando un usuario no autenticado intenta acceder a la empresa, {% data variables.product.company_short %} muestra un error 404.

Para evitar confusiones de los desarrolladores, puedes cambiar este comportamiento para que los usuarios se redirijan automáticamente al inicio de sesión único (SSO) a través del proveedor de identidades (IdP). Al habilitar redirecciones automáticas, cualquier persona que visite la dirección URL de cualquiera de los recursos de la empresa podrá ver que el recurso existe. Sin embargo, solo podrán ver el recurso si tienen el acceso adecuado después de autenticarse con el proveedor de identidades.

{% note %}

**Nota:** Si un usuario ha iniciado sesión en su cuenta personal cuando intenta acceder a cualquiera de los recursos de la empresa, se cerrará la sesión automáticamente y se le redirigirá al inicio de sesión único para iniciar sesión en su {% data variables.enterprise.prodname_managed_user %}. Para obtener más información, consulta "[Administración de varias cuentas](/enterprise-cloud@latest/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/managing-multiple-accounts)".

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. En "Configuración de inicio de sesión único", selecciona o anula la selección de **Redirigir automáticamente a los usuarios para iniciar sesión**.

   ![Casilla para redirigir automáticamente a los usuarios para iniciar sesión](/assets/images/enterprise/security/Enterprise-Redirect-Users-To-Sign-In-Checkbox.png) {% endif %}

## Información adicional

- "[Acerca de la administración de identidades y acceso para la empresa](/admin/authentication/managing-identity-and-access-for-your-enterprise/about-identity-and-access-management-for-your-enterprise)" {%- ifversion ghec %}
- "[Acceso a informes de cumplimiento para la empresa](/admin/overview/accessing-compliance-reports-for-your-enterprise)" {%- endif %} {%- ifversion ghec or ghae %}
- "[Restricción del tráfico de red con una lista de direcciones IP permitidas](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list)" {%- endif %}
