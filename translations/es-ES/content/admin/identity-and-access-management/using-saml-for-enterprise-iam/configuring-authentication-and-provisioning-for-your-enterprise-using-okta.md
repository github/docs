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
---

{% data reusables.saml.okta-ae-sso-beta %}

## Acerca de SAML y SCIM con Okta

Puedes utilizar Okta como un Proveedor de Identidad (IdP) para {% data variables.product.prodname_ghe_managed %}, lo cual permite que tus usuarios de Okta inicien sesión en {% data variables.product.prodname_ghe_managed %} utilizando sus credenciales de Okta.

Para utilizar Okta como tu IdP para {% data variables.product.prodname_ghe_managed %}, puedes agregar la app de {% data variables.product.prodname_ghe_managed %} a Okta, configurar Okta como tu IdP en {% data variables.product.prodname_ghe_managed %} y aprovisionar el acceso para tus usuarios y grupos de Okta.

Las siguientes características de aprovisionamiento están disponibles para todos los usuarios de Okta que asignes a tu aplicación de {% data variables.product.prodname_ghe_managed %}.

| Característica                    | Descripción                                                                                                                                                                         |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Subir Usuarios Nuevos             | Cuando crees un usuario nuevo en Okta, este se agregará a {% data variables.product.prodname_ghe_managed %}.                                                                      |
| Subir Desactivaciones de Usuarios | Cuando desactivas un usuario en Okta, este suspenderá al usuario desde tu empresa en {% data variables.product.prodname_ghe_managed %}.                                           |
| Subir Actualizaciones de Perfil   | Cuando actualices el perfil de un usuario en Okta, este actualizará los metadatos de la membrecía del usuario en tu empresa en {% data variables.product.prodname_ghe_managed %}. |
| Reactivar Usuarios                | Cuando reactives a un usuario en Okta, este dejará de suspender al usuario en tu empresa en {% data variables.product.prodname_ghe_managed %}.                                    |

## Agregar la aplicación {% data variables.product.prodname_ghe_managed %} en Okta

{% data reusables.saml.okta-ae-applications-menu %}
1. Haz clic en **Buscar en el catálogo de apps**

  !["Buscar en el catálogo de apps"](/assets/images/help/saml/okta-ae-browse-app-catalog.png)

1. En el campo de barra de búsqueda, teclea "GitHub AE" y luego haz clic en **GitHub AE** en los resultados.

  !["Resultado de búsqueda"](/assets/images/help/saml/okta-ae-search.png)

1. Da clic en **Agregar**.

  !["Agregar la app de GitHub AE"](/assets/images/help/saml/okta-ae-add-github-ae.png)

1. Para la "URL Base", teclea la URL de tu empresa de {% data variables.product.prodname_ghe_managed %}.

  !["Configurar la URL Base"](/assets/images/help/saml/okta-ae-configure-base-url.png)

1. Haz clic en **Done** (listo).

## Habilitar el SSO de SAML para {% data variables.product.prodname_ghe_managed %}

Para habilitar el inicio de sesión único (SSO) para {% data variables.product.prodname_ghe_managed %}, debes configurar a {% data variables.product.prodname_ghe_managed %} para que utilice la URL de inicio de sesión, URL emisora y certificado público que proporcionó Okta. Puedes encontrar estos detalles en la app de "GitHub AE".

{% data reusables.saml.okta-ae-applications-menu %}
{% data reusables.saml.okta-ae-configure-app %}
1. Haz clic en **Iniciar sesión**.

  ![Pestaña de inicio de sesión](/assets/images/help/saml/okta-ae-sign-on-tab.png)

1. Haz clic en **Visualizar instrucciones de configuración**.

  ![Pestaña de inicio de sesión](/assets/images/help/saml/okta-ae-view-setup-instructions.png)

1. Toma nota de los detalles de "URL de inicio de sesión", "Emisor" y "Certificado público".
1. Utiliza los detalles para habilitar el SSO de SAML en tu empresa de {% data variables.product.prodname_ghe_managed %}. Para obtener más información, consulta la sección "[Configurar el inicio de sesión único de SAML para tu empresa](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)".

{% note %}

**Nota:** Para probar tu configuración de SAML desde {% data variables.product.prodname_ghe_managed %}, tu cuenta de usuario de Okta debe asignarse a la app de {% data variables.product.prodname_ghe_managed %}.

{% endnote %}

## Habilitar la integración con la API

La app de "GitHub AE" en Okta utiliza la API de {% data variables.product.product_name %} para interactuar con t empresa para el SCIM y el SSO. Este procedimiento explica cómo habilitar y probar el acceso a la API si configuras a Okta con un token de acceso personal para {% data variables.product.prodname_ghe_managed %}.

1. En {% data variables.product.prodname_ghe_managed %}, genera un token de acceso personal con el alcance `admin:enterprise`. Para obtener más información, consulta la sección "[Crear un token de acceso personal](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)".
{% data reusables.saml.okta-ae-applications-menu %}
{% data reusables.saml.okta-ae-configure-app %}
{% data reusables.saml.okta-ae-provisioning-tab %}
1. Da clic en **Configurar la integraciòn de la API**.

1. Selecciona **Habilitar la Integraciòn de la API**.

  ![Habilitar la integración con la API](/assets/images/help/saml/okta-ae-enable-api-integration.png)

1. En el caso de un "Token de API", teclea el token de acceso personal de {% data variables.product.prodname_ghe_managed %} que generaste previamente.

1. Haz clic en **Probar las credenciales de la API**.

{% note %}

**Nota:** Si ves un mensaje de `Error authenticating: No results for users returned`, confirma que habilitaste el SSO para {% data variables.product.prodname_ghe_managed %}. Para obtener más información, consulta la sección "[Habilitar el SSO de SAML para {% data variables.product.prodname_ghe_managed %}](#enabling-saml-sso-for-github-ae)".

{% endnote %}

## Configurar los ajustes de aprovisionamiento de SCIM

Este procedimiento demuestra cómo configurar los ajustes del SCIM para el aprovisionamiento de Okta. Estos ajustes definen qué características se utilizarán cuando aprovisiones las cuentas de usuario de Okta automáticamente en {% data variables.product.prodname_ghe_managed %}.

{% data reusables.saml.okta-ae-applications-menu %}
{% data reusables.saml.okta-ae-configure-app %}
{% data reusables.saml.okta-ae-provisioning-tab %}
1. Debajo de "Ajustes", haz clic en **Hacia la app**.

  ![Ajustes de "A la app"](/assets/images/help/saml/okta-ae-to-app-settings.png)

1. A la derecha de "Aprovisionar a la App", da clic en **Editar**.
1. A la derecha de "Crear Usuarios", selecciona **Habilitar**.
1. A la derecha de "Actualizar Atributos de Usuario", selecciona **Habilitar**.
1. A la derecha de "Desactivar Usuarios", selecciona **Habilitar**.
1. Haz clic en **Save ** (guardar).

## Permitir que los usuarios y grupos de Okta accedan a {% data variables.product.prodname_ghe_managed %}

Puedes aprovisionar el acceso a {% data variables.product.product_name %} para tus usuarios individuales de Okta o para grupos enteros.

### Aprovisionar el acceso para los usuarios de Okta

Antes de que tus usuarios de Okta puedan utilizar sus credenciales para iniciar sesión en {% data variables.product.prodname_ghe_managed %}, debes asignarlos a la app de "GitHub AE" en Okta.

{% data reusables.saml.okta-ae-applications-menu %}
{% data reusables.saml.okta-ae-configure-app %}

1. Haz clic en **Asignaciones**.

  ![Pestaña de tareas](/assets/images/help/saml/okta-ae-assignments-tab.png)

1. Selecciona el menú desplegable de Asignar y haz clic en **Asignar a personas**.

  ![Botón de "Asignar a personas"](/assets/images/help/saml/okta-ae-assign-to-people.png)

1. A la derecha de la cuenta de usuario requerida, haz clic en **Asignar**.

  ![Lista de usuarios](/assets/images/help/saml/okta-ae-assign-user.png)

1. A la derecha de "Rol", haz clic en un rol para el usuario, después, haz clic en **Guardar y regresar**.

  ![Selección de roles](/assets/images/help/saml/okta-ae-assign-role.png)

1. Haz clic en **Done** (listo).

### Aprovisionar el acceso para grupos de Okta

Puedes mapear tu grupo de Okta a un equipo en {% data variables.product.prodname_ghe_managed %}. Los miembros del grupo de Okta entonces se convertirán en miembros del equipo mapeado de {% data variables.product.prodname_ghe_managed %} automáticamente. Para obtener más información, consulta la sección "[Mapear grupos de Okta en los equipos](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)".

## Leer más

- [Understanding SAML](https://developer.okta.com/docs/concepts/saml/) en la documentación de Okta.
- [Understanding SCIM](https://developer.okta.com/docs/concepts/scim/) en la documentación de Okta.
