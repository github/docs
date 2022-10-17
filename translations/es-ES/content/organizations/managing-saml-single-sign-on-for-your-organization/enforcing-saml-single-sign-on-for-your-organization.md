---
title: Hacer cumplir el inicio de sesión único de SAML para tu organización
intro: Los propietarios y los administradores de la organización pueden requerir el inicio de sesión único de SAML para que todos los miembros de la organización se tengan que autenticar a través de un proveedor de identidad (IdP).
redirect_from:
  - /articles/enforcing-saml-single-sign-on-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/enforcing-saml-single-sign-on-for-your-organization
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Enforce SAML single sign-on
ms.openlocfilehash: 78c6ca3297705511e419a96742a8887d01d7b70d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145126196'
---
## Acerca de requerir el SSO de SAML en tu organización

Cuando habilitas el SSO de SAML, {% data variables.product.prodname_dotcom %} mostrará a los miembros que visitan los recursos de la organización en {% data variables.product.prodname_dotcom_the_website %} para autenticarse en tu IdP, lo cual vincula la cuenta personal del miembro a una identidad en el IdP. Los mimebros aún pueden acceder a los recursos organizacionales antes de autenticarse con tu IdP.

![Anuncio con mensaje para autenticarse mediante el SSO de SAML para acceder a una organización](/assets/images/help/saml/sso-has-been-enabled.png)

También puedes requerir el SSO de SAML para tu organización. {% data reusables.saml.when-you-enforce %} Cuando esto se requiere, se elimina de la organizacióna cualquier miembro y administrador que no se hayan autenticado mediante el IdP. {% data variables.product.company_short %} envía una notificación de correo electrónico a cada usuario eliminado. 

{% data reusables.saml.ghec-only %}

{% data reusables.saml.removed-users-can-rejoin %} Si un usuario vuelve a unirse a la organización en los siguientes tres meses, se restablecerán sus privilegios de acceso y ajustes. Para más información, vea "[Readmisión de un antiguo miembro de la organización](/articles/reinstating-a-former-member-of-your-organization)".

Los bots y cuentas de servicio que no tengan identidades externas configuradas en el IdP de tu organización también se eliminarán cuando requieras el SSO de SAML. Para obtener más información sobre los bots y las cuentas de servicio, vea "[Administración de bots y cuentas de servicio con inicio de sesión único de SAML](/articles/managing-bots-and-service-accounts-with-saml-single-sign-on)".

Si tu organización le pertenece a una cuenta empresarial, el requerir SAML para dicha cuenta anulará la configuración de SAML a nivel de organización y requerirá el SSO de SAML para todas las organizaciones que pertenezcan a la empresa. Para obtener más información, vea "[Configuración del inicio de sesión único de SAML para la empresa](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)".

{% tip %}

**Sugerencia:** {% data reusables.saml.testing-saml-sso %}

{% endtip %}

## Requerir el SSO de SAML para tu organización

1. Habilita y prueba el SSO de SAML para tu organización y luego autentícate con tu IdP por lo menos una vez. Para más información, vea ["Habilitación y prueba del inicio de sesión único de SAML para la organización](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization)".
1. Prepárate para requerir el SSO de SAML para tu organización. Para más información, vea "[Preparación para aplicar el inicio de sesión único de SAML en la organización](/organizations/managing-saml-single-sign-on-for-your-organization/preparing-to-enforce-saml-single-sign-on-in-your-organization)".
{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
1. En "SAML single sign-on" (Inicio de sesión único de SAML), seleccione **Require SAML SSO authentication for all members of the _ORGANIZATION_ organization** (Requerir la autenticación de SSO de SAML para todos los miembros de la organización ORGANIZACIÓN).
    ![Casilla "Requerir autenticación SSO de SAML"](/assets/images/help/saml/require-saml-sso-authentication.png)
1. Si cualquiera de los miembros de la organización no se autentica a través de tu IdP, {% data variables.product.company_short %} lo mostrará. Si requieres el SSO de SAML, {% data variables.product.company_short %} eliminará a los miembros de la organización. Revise la advertencia y haga clic en **Remove members and require SAML single sign-on** (Quitar miembros y requerir el inicio de sesión único de SAML).
    ![Cuadro de diálogo "Confirmar la aplicación del inicio de sesión único de SAML" con la lista de miembros que se van a quitar de la organización](/assets/images/help/saml/confirm-saml-sso-enforcement.png)
1. Debajo de "Códigos de recuperación del inicio de sesión único", revisa tus códigos de recuperación. Almacena los códigos de recuperación en una ubicación segura, como un administrador de contraseñas.

## Información adicional

- "[Visualización y administración del acceso SAML de un miembro a la organización](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)"
