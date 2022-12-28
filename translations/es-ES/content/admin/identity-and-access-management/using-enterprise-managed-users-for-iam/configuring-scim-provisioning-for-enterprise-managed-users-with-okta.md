---
title: Configurar el aprovisionamiento de SCIM para los Usuarios Administrados Empresariales con Okta
shortTitle: Set up provisioning with Okta
intro: Puedes aprovisionar usuarios nuevos y administrar la membrecía de tu empresa y equipos utilizando Okta como tu proveedor de identidad.
product: '{% data reusables.gated-features.emus %}'
versions:
  ghec: '*'
redirect_from:
  - /early-access/github/articles/configuring-provisioning-for-managed-users-with-okta
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
  - /admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
type: tutorial
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
ms.openlocfilehash: b8c086d1d91c1248fa5a0349bb6f8ef32c3bbdf0
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160716'
---
## Acerca del aprovisionamiento con Okta

Puedes utilizar los {% data variables.product.prodname_emus %} con Okta como tu proveedor de identidad para aprovisionar cuentas nuevas, administrar la membrecía empresarial y administrar las membrecías de equipo para las organizaciones de tu empresa. Para obtener más información sobre el aprovisionamiento de {% data variables.product.prodname_emus %}, vea "[Configurar el aprovisionamiento de SCIM para usuarios administrados de la empresa](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users)".

Antes de que puedas configurar el aprovisionamiento con Okta, debes configurar el inicio de sesión único de SAML. Para obtener más información, vea "[Configurar el inicio de sesión único de SAML para usuarios administrados de la empresa](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users)".

Para configurar el aprovisionamiento con Okta, debes configurar el nombre de tu empresa en la aplicación de {% data variables.product.prodname_emu_idp_application %} e ingresar {% data variables.product.pat_generic %}. Entonces podrás aprovisionar usuarios en Okta.

## Características admitidas

{% data variables.product.prodname_emus %} es compatible con muchas características de aprovisionamiento en Okta.

| Característica | Descripción |
| --- | --- |
| Subir Usuarios Nuevos | Los usuarios que se asignan a la aplicación de {% data variables.product.prodname_emu_idp_application %} en Okta se crean automáticamente en la empresa en {% data variables.product.product_name %}. |
| Subir la Actualización de Perfil | Las actualizaciones que se hacen al perfil del usuario en Oktan se subirán a {% data variables.product.product_name %}. |
| Grupos de Subida | Los Grupos en Okta que se hayan asignado a la aplicación de {% data variables.product.prodname_emu_idp_application %} como Grupos de Subida se crearán automáticamente en la empresa en {% data variables.product.product_name %}. |
| Subir Desactivaciones de Usuarios | El desasignar al usuario de la aplicación de {% data variables.product.prodname_emu_idp_application %} en Okta lo inhabilitará en {% data variables.product.product_name %}. El usuario no podrá iniciar sesión, pero la información del usuario se mantendrá. |
| Reactivar Usuarios | Se habilitarán los usuarios en Okta cuyas cuentas de Okta se reactiven y quienes se asignen de vuelta a la aplicación de {% data variables.product.prodname_emu_idp_application %}. |

{% note %}

**Nota**: {% data variables.product.prodname_emus %} no admite modificaciones en los nombres de usuario.

{% endnote %}

## Configurar el nombre de tu empresa

Después de que se haya creado tu {% data variables.enterprise.prodname_emu_enterprise %}, puedes comenzar a configurar el aprovisionamiento configurando el nombre de tu empresa en Okta.

1. Navega a tu aplicación de {% data variables.product.prodname_emu_idp_application %} en Okta.
1. Haga clic en la pestaña **Sign On** (Iniciar sesión).
1. Haga clic en **Edit** (Editar) para realizar cambios.
1. Debajo de "Ajustes avanzados de inicio de sesión", en la caja de texto de "Nombre de empresa", teclea el nombre de tu empresa. Por ejemplo, si accede a la empresa en `https://github.com/enterprises/octoinc`, el nombre de la empresa sería "octoinc".
![Captura de pantalla del campo de Nombre de Empresa en Okta](/assets/images/help/enterprises/okta-emu-enterprise-name.png)
1. Para guardar el nombre de la empresa, haga clic en **Save** (Guardar).

## Configurar el aprovisionamiento

Después de que configures el nombre de tu empresa, puedes proceder a configurar los ajustes de aprovisionamiento.

Para configurar el aprovisionamiento, el usuario de configuración con el nombre de usuario **@<em>SHORT-CODE</em>_admin** deberá proporcionar un {% data variables.product.pat_v1 %} con el ámbito **admin:enterprise**. Para obtener más información sobre cómo crear un nuevo token, consulta "[Creación de un {% data variables.product.pat_generic %}](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users#creating-a-personal-access-token)".

1. Navega a tu aplicación de {% data variables.product.prodname_emu_idp_application %} en Okta.
1. Haga clic en el **Provisioning** ficha.
1. En el menú de configuración, haga clic en **Integration** (Integración).
1. Haga clic en **Edit** (Editar) para realizar cambios.
1. Seleccione **Enable API integration** (Habilitar la integración de la API).
1. En el campo "API Token" (Token de la API), escriba el {% data variables.product.pat_v1 %} con el ámbito **admin:enterprise** que pertenece al usuario de configuración.
![Captura de pantalla en la que se muestra el campo de Token de la API en Okta](/assets/images/help/enterprises/okta-emu-token.png)
1. Haga clic en **Test API Credentials** (Probar credenciales de API). Si la prueba tiene éxito, se mostrará un mensaje de verificación en la parte superior de la pantalla.
1. Para guardar el token, haga clic en **Save** (Guardar).
1. En el menú de configuración, haga clic en **To App** (En la aplicación).
![Captura de pantalla en la que se muestra el elemento de menú "En la aplicación" en Okta](/assets/images/help/enterprises/okta-emu-to-app-menu.png)
1. A la derecha de "Provisioning to App" (Aprovisionar en la aplicación), para permitir que se realicen cambios, haga clic en **Edit** (Editar).
1. Seleccione **Enable** (Habilitar) para **Create Users** (Crear usuarios), **Update User Attributes** (Actualizar atributos de usuario) y **Deactivate Users** (Desactivar usuarios).
![Captura de pantalla en la que se muestran las opciones de aprovisionamiento en Okta](/assets/images/help/enterprises/okta-emu-provisioning-to-app.png)
1. Para finalizar la configuración del aprovisionamiento, haga clic en **Save** (Guardar).

## Asignación de usuarios y grupos

Después de haber configurado el SSO de SAML y el aprovisionamiento, podrás aprovisionar usuarios nuevos en {% data variables.product.prodname_dotcom_the_website %} asignando usuarios o grupos a la aplicación de {% data variables.product.prodname_emu_idp_application %}. 

{% data reusables.scim.emu-scim-rate-limit %}

También puedes administrar automáticamente la pertenencia a organizaciones agregando grupos a la pestaña de "Push Groups" en Okta. Cuando el grupo se aprovisione con éxito, este estará disponible para conectarse a los equipos en las organizaciones de la empresa. Para obtener más información sobre cómo administrar equipos, vea "[Administrar pertenencias a equipos con grupos de proveedores de identidades](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/managing-team-memberships-with-identity-provider-groups)".

Cuando asignas usuarios, puedes utilizar el atributo de "Roles" en la aplicación de {% data variables.product.prodname_emu_idp_application %} para configurar el rol de un usuario en tu empresa en {% data variables.product.product_name %}. Para obtener más información sobre los roles, vea "[Roles en una empresa](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise)".

![Captura de pantalla que muestra las opciones de roles para el usuario aprovisionado en Okta](/assets/images/help/enterprises/okta-emu-user-role.png)

## Desaprovisionamiento de usuarios y grupos

Para quitar un usuario o un grupo de {% data variables.product.product_name %}, quítalo tanto de la pestaña "Asignaciones" como de la pestaña "Grupos de inserción" en Okta. En el caso de los usuarios, asegúrate de se quiten de todos los grupos en la pestaña "Grupos de inserción".


