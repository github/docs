---
title: Consideraciones sobre el nombre de usuario para la autenticación externa
shortTitle: Username considerations
intro: '{% ifversion ghes or ghec %}Cuando usas {% ifversion ghes %}CAS, LDAP o SAML para la autenticación{% elsif ghec %}{% data variables.product.prodname_emus %}{% endif %}, {% endif %}{% data variables.product.product_name %} sigue ciertas reglas para determinar el nombre de usuario para cada cuenta de usuario {% ifversion ghec or ghae %}en la empresa{% elsif ghes %}en la instancia{% endif %}.'
miniTocMaxHeadingLevel: 3
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: reference
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
ms.openlocfilehash: 8a330fe790665ef360bc5a5841e20ec8df002eb0
ms.sourcegitcommit: 00814c80b0f5fa76188c378a1196ef8fc5288113
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/31/2022
ms.locfileid: '148120755'
---
{% ifversion ghec %} {% note %}

**Nota**: Este artículo solo se aplica a {% data variables.product.prodname_emus %}. Si usas {% data variables.product.prodname_ghe_cloud %} sin {% data variables.product.prodname_emus %}, son los usuarios quienes crean los nombres de usuario, no {% data variables.product.prodname_dotcom %}.

{% endnote %} {% endif %}

## Acerca de los nombres de usuario con autenticación externa

{% ifversion ghes %}

Puedes configurar la autenticación externa para {% data variables.product.product_name %} mediante CAS, LDAP o SAML. Para obtener más información, consulta "[Acerca de la autenticación para tu empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#authentication-methods-for-github-enterprise-server)".

Al usar la autenticación externa, {% data variables.location.product_location %} crea automáticamente un nombre de usuario para cada persona cuando la persona inicia sesión en {% data variables.location.product_location %} mediante el sistema de autenticación externo por primera vez.

{% elsif ghec %}

Si usas una empresa con {% data variables.product.prodname_emus %}, los miembros de la empresa se autentican para acceder a {% data variables.product.prodname_dotcom %} mediante el proveedor de identidades (IdP) de SAML. Para obtener más información, consulta ["Acerca de los {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users)" y "[Acerca de la autenticación para tu empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#authentication-methods-for-github-enterprise-server)".

{% data variables.product.prodname_dotcom %} crea automáticamente un nombre de usuario para cada persona cuando su cuenta de usuario se aprovisiona mediante SCIM, al normalizar un identificador que el IdP proporciona y agregar después un carácter de subrayado y un código corto. Si se normalizan varios identificadores en el mismo nombre de usuario, se produce un conflicto de nombre de usuario y solo se crea la primera cuenta de usuario. Para resolver problemas de nombre de usuario, realiza un cambio en el IdP para que los nombres de usuario normalizados sean únicos y tengan un límite de 39 caracteres.

{% data reusables.enterprise-accounts.emu-only-emails-within-the-enterprise-can-conflict %}

{% elsif ghae %}

{% data variables.product.product_name %} usa el inicio de sesión único de SAML para la autenticación y crea automáticamente un nombre de usuario para cada persona cuando la persona inicia sesión mediante el proveedor de identidades (IdP) por primera vez.

{% endif %}

{% ifversion ghec %}
## Acerca de los nombres de usuario para {% data variables.enterprise.prodname_managed_users %}

Cuando se cree tu {% data variables.enterprise.prodname_emu_enterprise %}, deberás elegir un código corto que se usará como sufijo de los nombres de usuario de los miembros de tu empresa. {% data reusables.enterprise-accounts.emu-shortcode %} El usuario de configuración que configura el inicio de sesión único de SAML tiene un nombre de usuario con el formato **@<em>SHORT-CODE</em>_admin**. 

Al aprovisionar un nuevo usuario desde el proveedor de identidades, el nuevo {% data variables.enterprise.prodname_managed_user %} tendrá un nombre de usuario de {% data variables.product.prodname_dotcom %} con el formato **@<em>IDP-USERNAME</em>_<em>SHORT-CODE</em>** . El componente <em>IDP-USERNAME</em> se forma normalizando el valor del atributo `userName` de SCIM que se envía desde el IdP. 

| Proveedor de identidades                 | Nombre de usuario de {% data variables.product.prodname_dotcom %}  |
|-----------------------------------|----------------------|
| Azure Active Directory (Azure AD) | _IDP-USERNAME_ se forma normalizando los caracteres anteriores al carácter `@` en el UPN (nombre principal de usuario), que no incluye el valor `#EXT#` para las cuentas de invitado. |
| Okta                              | _IDP-USERNAME_ es el atributo de nombre de usuario normalizado que proporciona el IdP.               |

Estas reglas pueden dar lugar a que el IdP proporcione el mismo _IDP-USERNAME_ para varios usuarios. Por ejemplo, para Azure AD, los siguientes UPN darán como resultado el mismo nombre de usuario:

- `bob@contoso.com`
- `bob@fabrikam.com`
- `bob#EXT#fabrikamcom@contoso.com`

Esto provocará un conflicto de nombre de usuario y solo se aprovisionará el primer usuario. Para obtener más información, consulta "[Resolución de problemas de nombre de usuario](#resolving-username-problems)".
{% endif %}

Los nombres de usuario{% ifversion ghec %}, incluidos el carácter de subrayado y el código corto,{% endif %} no deben superar los 39 caracteres.

## Acerca de la normalización del nombre de usuario

Los nombres de usuario de las cuentas de usuario de {% ifversion ghes or ghae %}{% data variables.product.product_name %}{% elsif ghec %}{% data variables.product.prodname_dotcom_the_website %}{% endif %} solo pueden contener caracteres alfanuméricos y guiones (`-`).

{% ifversion ghec %} Al configurar la autenticación SAML, {% data variables.product.product_name %} usa el valor del atributo `userName` de SCIM que se envía desde el IdP para determinar el nombre de usuario de la cuenta de usuario correspondiente en {% data variables.product.prodname_dotcom_the_website %}. Si este valor incluye caracteres no admitidos, {% data variables.product.product_name %} normalizará el nombre de usuario según las reglas siguientes.
{% elsif ghes %} Al configurar la autenticación CAS, LDAP o SAML, {% data variables.product.product_name %} usa un identificador de la cuenta de usuario en el proveedor de autenticación externo para determinar el nombre de usuario de la cuenta de usuario correspondiente en {% data variables.product.product_name %}. Si el identificador incluye caracteres no admitidos, {% data variables.product.product_name %} normalizará el nombre de usuario según las reglas siguientes.
{% elsif ghae %} Al configurar la autenticación SAML, {% data variables.product.product_name %} usa un identificador de la cuenta de usuario en el IdP para determinar el nombre de usuario de la cuenta de usuario correspondiente en {% data variables.product.product_name %}. Si el identificador incluye caracteres no admitidos, {% data variables.product.product_name %} normalizará el nombre de usuario según las reglas siguientes.
{% endif %}

1. {% data variables.product.product_name %} normalizará cualquier carácter no alfanumérico en el nombre de tu cuenta de usuario y lo convertirá en un guion. Por ejemplo, un nombre de usuario de `mona.the.octocat` se normalizará en `mona-the-octocat`. Nota que los nombres de usuarios normalizados tampoco pueden comenzar o terminar con una raya. Tampoco pueden contener dos rayas seguidas.

1. Los nombres de usuario creados a partir de direcciones de correo electrónico se crean con los caracteres normalizados que preceden al carácter `@`.

1. Los nombres de usuario creados a partir de cuentas de dominio se crean a partir de los caracteres normalizados después del separador `\\`. 

1. Si varias cuentas se normalizan en el mismo nombre de usuario de {% data variables.product.product_name %}, solo se crea la primera cuenta de usuario. Los siguientes usuarios con el mismo nombre de usuario no podrán registrarse. {% ifversion ghec %}Para obtener más información, consulta "[Resolución de problemas de nombre de usuario](#resolving-username-problems)".{% endif %}

### Ejemplos de normalización de nombres de usuario

| Identificador en el proveedor | Nombre de usuario normalizado en {% data variables.product.prodname_dotcom %} | Resultado |
| :- | :- | :- |
| The.Octocat | `the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | El nombre de usuario se crea correctamente. |
| !The.Octocat | `-the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | No se crea este nombre de usuario debido a que comienza con una raya. |
| The.Octocat! | `the-octocat-{% ifversion ghec %}_SHORT-CODE{% endif %}` | No se crea este nombre de usuario debido a que termina con una raya. |
| The!!Octocat | `the--octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | No se crea este nombre de usuario debido a que contiene dos rayas seguidas. |
| The!Octocat | `the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | No se crea este nombre de usuario. A pesar de que el nombre de usuario normalizado es válido, ya existía. |
| `The.Octocat@example.com` | `the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | No se crea este nombre de usuario. A pesar de que el nombre de usuario normalizado es válido, ya existía. |
| `internal\\The.Octocat` | `the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | No se crea este nombre de usuario. A pesar de que el nombre de usuario normalizado es válido, ya existía. |
| `mona.lisa.the.octocat.from.github.united.states@example.com` | `mona-lisa-the-octocat-from-github-united-states{% ifversion ghec %}_SHORT-CODE{% endif %}` | Este nombre de usuario no se crea porque supera el límite de 39 caracteres. |

{% ifversion not ghec %}
### Acerca de la normalización de nombres de usuario con SAML

{% ifversion ghes %}Si configuras la autenticación SAML para {% data variables.location.product_location %}, {% endif %}{% data variables.product.product_name %} determina el nombre de usuario de cada persona mediante una de las aserciones siguientes en la respuesta SAML, ordenadas por prioridad descendente.

1. El atributo `username` personalizado, si está definido y si hay uno.
1. Una aserción `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name`, si está presente.
1. Una aserción `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress`, si está presente.
1. El elemento `NameID`

{% data variables.product.product_name %} requiere el elemento `NameID` incluso si hay otros atributos. Para obtener más información, consulta "[Referencia de configuración de SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#saml-attributes)".

{% data variables.product.product_name %} crea una asignación entre el valor de `NameID` del IdP y el nombre de usuario {% ifversion ghae %}en{% else %}en{% endif %} {% data variables.location.product_location %}, por lo que el valor de `NameID` debe ser persistente y único y no estar sujeto a cambios para el ciclo de vida del usuario.

{% ifversion ghes %} {% note %}

**Nota**: Si el elemento `NameID` para un usuario cambia en el IdP, la persona verá un mensaje de error al iniciar sesión en {% data variables.location.product_location %}. Para restaurar el acceso de la persona, deberás actualizar la asignación de `NameID` de la cuenta de usuario. Para más información, vea "[Actualizar el `NameID` del SAML de un usuario](/admin/identity-and-access-management/using-saml-for-enterprise-iam/updating-a-users-saml-nameid)".

{% endnote %} {% endif %} {% endif %}

{% ifversion ghec %}
## Resolución de problemas de nombre de usuario

Cuando se aprovisiona un usuario nuevo, si el nombre de usuario tiene más de 39 caracteres (incluido el carácter de subrayado y el guion bajo) o entra en conflicto con un usuario existente en la empresa, se producirá un error `409` en el intento de aprovisionamiento. 

Para resolver este problema, debes realizar uno de los siguientes cambios en el IdP para que todos los nombres de usuario normalizados estén dentro del límite de caracteres y sean únicos.
- Cambiar el valor del atributo `userName` para usuarios individuales que están causando problemas
- Cambiar la asignación de atributos `userName` para todos los usuarios
- Configurar un atributo `userName` personalizado para todos los usuarios

Si cambias la asignación de atributos, se actualizarán los nombres de usuario de las {% data variables.enterprise.prodname_managed_users %} existentes, pero no cambiará nada más de las cuentas, incluido el historial de actividad.

{% note %}

**Nota**: {% data variables.contact.github_support %} no puede proporcionar ayuda para personalizar asignaciones de atributos ni configurar expresiones personalizadas. Puedes ponerte en contacto con tu IdP si tienes alguna duda.

{% endnote %}

### Resolución de problemas de nombre de usuario con Azure AD

Para resolver problemas de nombre de usuario en Azure AD, modifica el valor de nombre principal del usuario en conflicto o modifica la asignación de atributos para el atributo `userName`. Si modificas la asignación de atributos, puedes elegir un atributo existente o usar una expresión para asegurarte de que todos los usuarios aprovisionados tengan un alias normalizado único.

1. En Azure AD, abre la aplicación {% data variables.product.prodname_emu_idp_application %}.
1. En la barra lateral de la izquierda, haz clic en **Aprovisionamiento**.
1. Haz clic en **Editar aprovisionamiento**.
1. Expande **Asignaciones** y haz clic en **Aprovisionar usuarios de Azure Active Directory**.
1. Haz clic en la asignación del atributo `userName` de {% data variables.product.prodname_dotcom %}. 
1. Cambia la asignación de atributos.
   - Para asignar un atributo existente en Azure AD al atributo `userName` en {% data variables.product.prodname_dotcom %}, haz clic en el campo de atributo deseado. Después, guarda y espera a que se produzca un ciclo de aprovisionamiento, en un plazo de unos 40 minutos.
   - Para usar una expresión en lugar de un atributo existente, cambia el tipo de asignación a "Expresión" y agrega una expresión personalizada que haga que este valor sea único para todos los usuarios. Por ejemplo, podrías usar `[FIRST NAME]-[LAST NAME]-[EMPLOYEE ID]`. Para obtener más información, consulta [Referencia para la escritura de expresiones para la asignación de atributos en Azure Active Directory](https://docs.microsoft.com/en-us/azure/active-directory/app-provisioning/functions-for-customizing-application-data) en Microsoft Docs.

### Resolución de problemas de nombre de usuario con Okta

Para resolver problemas de nombre de usuario en Okta, actualiza la configuración de asignación de atributos para la aplicación {% data variables.product.prodname_emu_idp_application %}.

1. En Okta, abre la aplicación {% data variables.product.prodname_emu_idp_application %}.
1. Haga clic en **Sign on** (Iniciar sesión).
1. En la sección "Configuración", haz clic en **Editar**.
1. Actualiza el "Formato de nombre de usuario de la aplicación".
{% endif %}
