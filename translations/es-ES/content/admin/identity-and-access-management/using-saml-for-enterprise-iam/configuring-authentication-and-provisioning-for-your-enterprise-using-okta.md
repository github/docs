---
title: Configurar la autenticación y aprovisionamiento para tu empresa utilizando Okta
shortTitle: Configure with Okta
intro: 'Puedes utilizar Okta como un proveedor de identidad (IdP) para administrar centralmente la autenticación y aprovisionamiento de usuarios para {% data variables.product.prodname_ghe_managed %}.'
permissions: 'Enterprise owners can configure authentication and provisioning for {% data variables.product.prodname_ghe_managed %}.'
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
ms.openlocfilehash: 824554d1e35131e1e44f816e6fac3b40803db46d
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145112642'
---
{% data reusables.saml.okta-ae-sso-beta %}

## Acerca de SAML y SCIM con Okta

Puedes utilizar Okta como un Proveedor de Identidad (IdP) para {% data variables.product.prodname_ghe_managed %}, lo cual permite que tus usuarios de Okta inicien sesión en {% data variables.product.prodname_ghe_managed %} utilizando sus credenciales de Okta.

Para utilizar Okta como tu IdP para {% data variables.product.prodname_ghe_managed %}, puedes agregar la app de {% data variables.product.prodname_ghe_managed %} a Okta, configurar Okta como tu IdP en {% data variables.product.prodname_ghe_managed %} y aprovisionar el acceso para tus usuarios y grupos de Okta.

Las siguientes características de aprovisionamiento están disponibles para todos los usuarios de Okta que asignes a tu aplicación de {% data variables.product.prodname_ghe_managed %}.

| Característica | Descripción |
| --- | --- |
| Subir Usuarios Nuevos | Cuando crees un usuario nuevo en Okta, este se agregará a {% data variables.product.prodname_ghe_managed %}. |
| Subir Desactivaciones de Usuarios | Cuando desactivas un usuario en Okta, este suspenderá al usuario desde tu empresa en {% data variables.product.prodname_ghe_managed %}. |
| Subir Actualizaciones de Perfil | Cuando actualices el perfil de un usuario en Okta, este actualizará los metadatos de la membrecía del usuario en tu empresa en {% data variables.product.prodname_ghe_managed %}. |
| Reactivar Usuarios | Cuando reactives a un usuario en Okta, este dejará de suspender al usuario en tu empresa en {% data variables.product.prodname_ghe_managed %}. |

## Incorporación de la aplicación {% data variables.product.prodname_ghe_managed %} en Okta

{% data reusables.saml.okta-ae-applications-menu %}
1. Haga clic en **Browse App Catalog** (Examinar catálogo de aplicaciones).

  !["Examinar catálogo de aplicaciones"](/assets/images/help/saml/okta-ae-browse-app-catalog.png)

1. En el campo de búsqueda, escriba "GitHub AE" y, después, haga clic en **GitHub AE** en los resultados.

  !["Resultado de la búsqueda"](/assets/images/help/saml/okta-ae-search.png)

1. Haga clic en **Agregar**.

  !["Agregar aplicación GitHub AE"](/assets/images/help/saml/okta-ae-add-github-ae.png)

1. Para la "URL Base", teclea la URL de tu empresa de {% data variables.product.prodname_ghe_managed %}.

  !["Configurar la URL base"](/assets/images/help/saml/okta-ae-configure-base-url.png)

1. Haga clic en **Done**(Listo).

## Habilitar el SSO de SAML para {% data variables.product.prodname_ghe_managed %}

Para habilitar el inicio de sesión único (SSO) para {% data variables.product.prodname_ghe_managed %}, debes configurar a {% data variables.product.prodname_ghe_managed %} para que utilice la URL de inicio de sesión, URL emisora y certificado público que proporcionó Okta. Puedes encontrar estos detalles en la app de "GitHub AE".

{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-ae-configure-app %}
1. Haga clic en **Sign on** (Iniciar sesión).

  ![Pestaña de inicio de sesión](/assets/images/help/saml/okta-ae-sign-on-tab.png)

1. Haga clic en **View Setup Instructions** (Ver instrucciones de configuración).

  ![Pestaña de inicio de sesión](/assets/images/help/saml/okta-ae-view-setup-instructions.png)

1. Toma nota de los detalles de "URL de inicio de sesión", "Emisor" y "Certificado público". 
1. Utiliza los detalles para habilitar el SSO de SAML en tu empresa de {% data variables.product.prodname_ghe_managed %}. Para obtener más información, vea "[Configuración del inicio de sesión único de SAML para la empresa](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)".

{% note %}

**Nota**: Para probar la configuración de SAML desde {% data variables.product.prodname_ghe_managed %}, su cuenta de usuario de Okta debe asignarse a la aplicación de {% data variables.product.prodname_ghe_managed %}.

{% endnote %}

## Habilitar la integración con la API

La app de "GitHub AE" en Okta utiliza la API de {% data variables.product.product_name %} para interactuar con t empresa para el SCIM y el SSO. Este procedimiento explica cómo habilitar y probar el acceso a la API si configuras a Okta con un token de acceso personal para {% data variables.product.prodname_ghe_managed %}.

1. En {% data variables.product.prodname_ghe_managed %}, genere un token de acceso personal con el ámbito `admin:enterprise`. Para obtener más información, vea "[Creación de un token de acceso personal](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)".
{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-ae-configure-app %} {% data reusables.saml.okta-ae-provisioning-tab %}
1. Haga clic en **Configure API Integration** (Configurar la integración de la API).

1. Seleccione **Enable API integration** (Habilitar la integración con la API).

  ![Habilitar la integración con la API](/assets/images/help/saml/okta-ae-enable-api-integration.png)

1. En el caso de un "Token de API", teclea el token de acceso personal de {% data variables.product.prodname_ghe_managed %} que generaste previamente.

1. Haga clic en **Test API Credentials** (Probar credenciales de la API). 

{% note %}

**Nota**: Si ve `Error authenticating: No results for users returned`, confirme que ha habilitado el inicio de sesión único para {% data variables.product.prodname_ghe_managed %}. Para obtener más información, vea "[Habilitación de SSO de SAML para {% data variables.product.prodname_ghe_managed %}](#enabling-saml-sso-for-github-ae)".

{% endnote %}

## Configurar los ajustes de aprovisionamiento de SCIM

Este procedimiento demuestra cómo configurar los ajustes del SCIM para el aprovisionamiento de Okta. Estos ajustes definen qué características se utilizarán cuando aprovisiones las cuentas de usuario de Okta automáticamente en {% data variables.product.prodname_ghe_managed %}.

{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-ae-configure-app %} {% data reusables.saml.okta-ae-provisioning-tab %}
1. En "Settings" (Configuración), haga clic en **To App** (En la aplicación).

  ![Configuración de "En la aplicación"](/assets/images/help/saml/okta-ae-to-app-settings.png)

1. A la derecha de "Provisioning to App" (Aprovisionamiento en aplicación), haga clic en **Edit** (Editar).
1. A la derecha de "Create Users" (Crear usuarios), seleccione **Enable** (Habilitar).
1. A la derecha de "Update User Attributes" (Actualizar atributos de usuario), seleccione **Enable** (Habilitar).
1. A la derecha de "Deactivate Users" (Desactivar usuarios), seleccione **Enable** (Habilitar).
1. Haga clic en **Save**(Guardar).

## Permitir que los usuarios y grupos de Okta accedan a {% data variables.product.prodname_ghe_managed %}

Puedes aprovisionar el acceso a {% data variables.product.product_name %} para tus usuarios individuales de Okta o para grupos enteros.

### Aprovisionar el acceso para los usuarios de Okta

Antes de que tus usuarios de Okta puedan utilizar sus credenciales para iniciar sesión en {% data variables.product.prodname_ghe_managed %}, debes asignarlos a la app de "GitHub AE" en Okta.

{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-ae-configure-app %}

1. Haga clic en **Asignaciones**.

  ![Pestaña de tareas](/assets/images/help/saml/okta-ae-assignments-tab.png)

1. Seleccione el menú desplegable Assign (Asignar) y haga clic en **Assign to People** (Asignar a personas).

  ![Botón "Asignar a personas"](/assets/images/help/saml/okta-ae-assign-to-people.png)

1. A la derecha de la cuenta de usuario requerida, haga clic en **Assign** (Asignar).

  ![Lista de usuarios](/assets/images/help/saml/okta-ae-assign-user.png)

1. A la derecha de "Role" (Rol), haga clic en un rol para el usuario y luego en **Save and go back** (Guardar y volver).

  ![Selección de roles](/assets/images/help/saml/okta-ae-assign-role.png)

1. Haga clic en **Done**(Listo).

### Aprovisionar el acceso para grupos de Okta

Puedes mapear tu grupo de Okta a un equipo en {% data variables.product.prodname_ghe_managed %}. Los miembros del grupo de Okta entonces se convertirán en miembros del equipo mapeado de {% data variables.product.prodname_ghe_managed %} automáticamente. Para obtener más información, vea "[Asignación de grupos de Okta a equipos](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)".

## Información adicional

- [Descripción de SAML](https://developer.okta.com/docs/concepts/saml/) en la documentación de Okta.
- [Descripción de SCIM](https://developer.okta.com/docs/concepts/scim/) en la documentación de Okta.
