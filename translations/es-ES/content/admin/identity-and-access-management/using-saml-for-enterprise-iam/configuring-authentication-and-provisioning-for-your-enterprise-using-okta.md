---
title: Configurar la autenticación y aprovisionamiento para tu empresa utilizando Okta
shortTitle: Configure with Okta
intro: 'Puedes usar Okta como proveedor de identidades (IdP) para administrar centralmente la autenticación y el aprovisionamiento de usuarios para {% data variables.location.product_location %}.'
permissions: 'Enterprise owners can configure authentication and provisioning for {% data variables.product.product_name %}.'
versions:
  ghae: '*'
redirect_from:
  - /admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-okta
  - /admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-okta
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 62a1436fcedc4d90f767d0c612e70810132aff58
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192677'
---
{% data reusables.saml.okta-ae-sso-beta %}

## Acerca de la autenticación y el aprovisionamiento de usuarios con Okta

Puedes usar Okta como proveedor de identidades (IdP) para {% data variables.product.product_name %}, lo cual permite que tus usuarios de Okta inicien sesión en {% data variables.product.product_name %} con sus credenciales de Okta.

Para usar Okta como IdP para {% data variables.product.product_name %}, puedes agregar la aplicación de {% data variables.product.product_name %} a Okta, configurar Okta como IdP en {% data variables.product.product_name %} y aprovisionar el acceso para tus usuarios y grupos de Okta.

{% data reusables.saml.idp-saml-and-scim-explanation %}
- "[Asignación de grupos de Okta a equipos](/admin/identity-and-access-management/using-saml-for-enterprise-iam/mapping-okta-groups-to-teams)"

Después de que habilites SCIM, las siguientes características de aprovisionamiento estarán disponibles para cualquier usuario al que asignes tu aplicación de {% data variables.product.product_name %} en Okta.

{% data reusables.scim.ghes-beta-note %}

Las siguientes características de aprovisionamiento están disponibles para todos los usuarios de Okta que asignes a tu aplicación de {% data variables.product.product_name %}.

| Característica | Descripción |
| --- | --- |
| Subir Usuarios Nuevos | Cuando crees un usuario en Okta, se agregará a {% data variables.product.product_name %}. |
| Subir Desactivaciones de Usuarios | Cuando desactives a un usuario en Okta, este suspenderá al usuario en tu empresa en {% data variables.product.product_name %}. |
| Subir Actualizaciones de Perfil | Cuando actualices el perfil de un usuario en Okta, este actualizará los metadatos de la pertenencia del usuario en tu empresa en {% data variables.product.product_name %}. |
| Reactivar Usuarios | Cuando reactives a un usuario en Okta, este anulará la suspensión del usuario en tu empresa en {% data variables.product.product_name %}. |

Para obtener más información sobre cómo administrar la identidad y el acceso de la empresa en{% data variables.location.product_location %}, consulta "[Administración de la identidad y el acceso para la empresa](/admin/authentication/managing-identity-and-access-for-your-enterprise)".

## Requisitos previos

- Para configurar la autenticación y el aprovisionamiento de usuarios para {% data variables.product.product_name %} con Okta, debes tener una cuenta y un inquilino de Okta.

{%- ifversion scim-for-ghes %}
- {% data reusables.saml.ghes-you-must-configure-saml-sso %} {%- endif %}

- {% data reusables.saml.create-a-machine-user %}

## Adición de la aplicación {% data variables.product.product_name %} en Okta


{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-browse-app-catalog %} {%- ifversion ghae %}
1. En el campo de búsqueda, escriba "GitHub AE" y, después, haga clic en **GitHub AE** en los resultados.

  !["Resultado de la búsqueda"](/assets/images/help/saml/okta-ae-search.png)
1. Haga clic en **Agregar**.

  !["Agregar aplicación GitHub AE"](/assets/images/help/saml/okta-ae-add-github-ae.png)
1. En "URL base", escribe la URL de tu empresa en {% data variables.product.product_name %}.

  !["Configurar la URL base"](/assets/images/help/saml/okta-ae-configure-base-url.png)
1. Haga clic en **Done**(Listo).
{%- elsif scim-for-ghes %}
1. En el campo de búsqueda, escribe "GitHub Enterprise Server" y haz clic en **GitHub Enterprise Server** en los resultados.
1. Haga clic en **Agregar**.
1. En "URL base", escribe la URL de {% data variables.location.product_location %}.
1. Haga clic en **Done**(Listo).
{% endif %}

## Habilitación del SSO de SAML para {% data variables.product.product_name %}

Si quieres habilitar el inicio de sesión único (SSO) para {% data variables.product.product_name %}, debes configurar {% data variables.product.product_name %} de modo que use la URL de inicio de sesión, la URL del emisor y el certificado público que proporcionó Okta. Encontrarás estos detalles en la aplicación de Okta para {% data variables.product.product_name %}.

{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-click-on-the-app %} {% ifversion ghae %} {% data reusables.saml.okta-sign-on-tab %} {% data reusables.saml.okta-view-setup-instructions %}
1. Toma nota de los detalles de "URL de inicio de sesión", "Emisor" y "Certificado público". 
1. Usa los detalles para habilitar el SSO de SAML para tu empresa en {% data variables.product.product_name %}. Para más información, vea "[Configuración del inicio de sesión único de SAML para la empresa](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)".
{% elsif scim-for-ghes %} {% data reusables.saml.okta-sign-on-tab %}
1. Usa los detalles para habilitar el SSO de SAML para {% data variables.location.product_location %}. Para más información, vea "[Configuración del inicio de sesión único de SAML para la empresa](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)".
{%- endif %}

{% note %}

**Nota**: Para probar la configuración de SAML desde {% data variables.product.product_name %}, tu cuenta de usuario de Okta debe estar asignada a la aplicación de {% data variables.product.product_name %}.

{% endnote %}

## Habilitar la integración con la API

La aplicación de Okta usa la API REST para {% data variables.product.product_name %} para el aprovisionamiento de SCIM. Para habilitar y probar el acceso a la API, configura Okta con un {% data variables.product.pat_generic %} para {% data variables.product.product_name %}.

1. En {% data variables.product.product_name %}, genera un {% data variables.product.pat_v1 %} con el ámbito `admin:enterprise`. Para obtener más información, consulta "[Creación de un {% data variables.product.pat_generic %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)".
{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-click-on-the-app %} {% data reusables.saml.okta-ae-provisioning-tab %}
1. Haga clic en **Configure API Integration** (Configurar la integración de la API).

1. Seleccione **Enable API integration** (Habilitar la integración con la API).

  ![Habilitar la integración con la API](/assets/images/help/saml/okta-ae-enable-api-integration.png)

1. En "Token de API", escribe el {% data variables.product.pat_generic %} de {% data variables.product.product_name %} que generaste anteriormente.

1. Haga clic en **Test API Credentials** (Probar credenciales de la API). 

{% note %}

**Nota**: Si se muestra `Error authenticating: No results for users returned`, confirma que has habilitado el inicio de sesión único para {% data variables.product.product_name %}. Para obtener más información, consulta "[Habilitación de SSO de SAML para {% data variables.product.product_name %}](#enabling-saml-sso-for-github-ae)".

{% endnote %}

## Configurar los ajustes de aprovisionamiento de SCIM

Este procedimiento demuestra cómo configurar los ajustes del SCIM para el aprovisionamiento de Okta. Estos ajustes definen qué características se usarán cuando se aprovisionen cuentas de usuario de Okta automáticamente en {% data variables.product.product_name %}.

{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-click-on-the-app %} {% data reusables.saml.okta-ae-provisioning-tab %}
1. En "Settings" (Configuración), haga clic en **To App** (En la aplicación).

  ![Configuración de "En la aplicación"](/assets/images/help/saml/okta-ae-to-app-settings.png)

1. A la derecha de "Provisioning to App" (Aprovisionamiento en aplicación), haga clic en **Edit** (Editar).
1. A la derecha de "Create Users" (Crear usuarios), seleccione **Enable** (Habilitar).
1. A la derecha de "Update User Attributes" (Actualizar atributos de usuario), seleccione **Enable** (Habilitar).
1. A la derecha de "Deactivate Users" (Desactivar usuarios), seleccione **Enable** (Habilitar).
1. Haga clic en **Save**(Guardar).

## Permiso para que los usuarios y grupos de Okta accedan a {% data variables.product.product_name %}

Puedes aprovisionar el acceso a {% data variables.product.product_name %} para tus usuarios individuales de Okta o para grupos enteros.

### Aprovisionar el acceso para los usuarios de Okta

Para que los usuarios de Okta puedan usar sus credenciales para iniciar sesión en {% data variables.product.product_name %}, debes asignarlos primero a la aplicación de Okta para {% data variables.product.product_name %}.

{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-click-on-the-app %}

1. Haga clic en **Asignaciones**.

  ![Pestaña de tareas](/assets/images/help/saml/okta-ae-assignments-tab.png)

1. Seleccione el menú desplegable Assign (Asignar) y haga clic en **Assign to People** (Asignar a personas).

  ![Botón "Asignar a personas"](/assets/images/help/saml/okta-ae-assign-to-people.png)

1. A la derecha de la cuenta de usuario requerida, haga clic en **Assign** (Asignar).

  ![Lista de usuarios](/assets/images/help/saml/okta-ae-assign-user.png)

1. A la derecha de "Role" (Rol), haga clic en un rol para el usuario y luego en **Save and go back** (Guardar y volver).

  ![Selección de roles](/assets/images/help/saml/okta-ae-assign-role.png)

1. Haga clic en **Done**(Listo).

{% ifversion ghae %}
### Aprovisionar el acceso para grupos de Okta

Puedes asignar tu grupo de Okta a un equipo en {% data variables.product.product_name %}. Los miembros del grupo de Okta se convertirán automáticamente en miembros del equipo de {% data variables.product.product_name %} asignado. Para más información, vea "[Asignación de grupos de Okta a equipos](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)".
{% endif %}

## Información adicional

- [Descripción de SAML](https://developer.okta.com/docs/concepts/saml/) en la documentación de Okta
- [Descripción de SCIM](https://developer.okta.com/docs/concepts/scim/) en la documentación de Okta
