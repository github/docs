---
title: SCIM
intro: Puedes automatizar la creación de usuarios y las pertenencias a equipos mediante la API de SCIM.
versions:
  ghes: '>=3.6'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: ef20e958e8a0680425e116f9d7e576291b793766
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107281'
---
{% data reusables.scim.ghes-beta-note %}

{% data reusables.user-settings.enterprise-admin-api-classic-pat-only %}
## Acerca de la API de SCIM

{% data variables.product.product_name %} proporciona una API de SCIM a fin de que la usen los proveedores de identidades (IDP) habilitados para SCIM. Una integración en el IdP puede usar la API a fin de aprovisionar, administrar o desaprovisionar automáticamente cuentas de usuario en una instancia de {% data variables.product.product_name %} que usa el inicio de sesión único (SSO) de SAML para la autenticación. Para obtener más información acerca del SSO de SAML, consulta "[Acerca de SAML para IAM empresarial](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam)".

La API de SCIM se basa en SCIM 2.0. Para más información, consulte la [especificación](https://www.simplecloud.info/#Specification).

### Direcciones URL del punto de conexión de SCIM

Un IdP puede usar la dirección URL raíz siguiente a fin de comunicarse con la API de SCIM para una instancia de {% data variables.product.product_name %}.

```
{% data variables.product.api_url_code %}/scim/v2/
```

Las direcciones URL de punto de conexión de la API de SCIM distinguen mayúsculas y minúsculas. Por ejemplo, la primera letra del punto de conexión `Users` debe ser mayúscula.

```shell
GET /scim/v2/Users/{scim_user_id}
```

### Autenticar las llamadas a la API de SCIM

La integración de SCIM en el IdP realiza acciones en nombre de un propietario de la empresa para la instancia de {% data variables.product.product_name %}. Para más información, vea "[Roles en una empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owners)".

Para autenticar las solicitudes en la API, la persona que configura SCIM en el IdP debe usar un {% data variables.product.pat_v1 %} con ámbito `admin:enterprise`, que el IdP debe proporcionar en el encabezado `Authorization` de la solicitud. Para obtener más información sobre {% data variables.product.pat_v1_plural %}, consulta "[Creación de un {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)".

{% note %}

**Nota**: Los propietarios de la empresa deben generar y usar un {% data variables.product.pat_v1 %} para la autenticación de solicitudes en la API de SCIM. {% ifversion ghes > 3.8 %}{% data variables.product.pat_v2_caps %} y {% endif %}En este momento no se admiten los autores de llamadas de aplicaciones de GitHub.

{% endnote %}

### Acerca de la asignación de datos SAML y SCIM
  
La instancia de {% data variables.product.product_name %} vincula a cada usuario que se autentica correctamente con el inicio de sesión único de SAML en una identidad de SCIM. A fin de vincular correctamente las identidades, el IdP de SAML y la integración de SCIM deben usar los valores `NameID` de SAML y `userName` de SCIM correspondientes para cada usuario.

{% ifversion ghes > 3.7 %} {% note %}

**Nota**: Si {% data variables.product.product_name %} usa Azure AD como IdP de SAML, {% data variables.product.product_name %} también comprobará la notificación `externalId` de SCIM y `http://schemas.microsoft.com/identity/claims/objectidentifier` de SAML para que coincidan primero con los usuarios, en lugar de usar `NameID` y `userName`. 

{% endnote %} {% endif %}

### Atributos de usuario de SCIM compatibles

Los puntos de conexión `User` de la API de SCIM admiten los atributos siguientes en los parámetros de una solicitud.

| Nombre | Tipo | Descripción |
| :- | :- | :- |
| `displayName` | String | Nombre legible para el usuario. |
| `name.formatted` | String | El nombre completo del usuario, incluido el segundo nombre, los títulos y los sufijos, con formato para mostrar.
| `name.givenName` | String | El nombre del usuario. |
| `name.familyName` | String | Los apellidos del usuario. |
| `userName` | String | Nombre de usuario del usuario, que genera el IdP. Se somete a la [normalización](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication#about-username-normalization) antes de su uso. 
| `emails` | Array | Lista de correos electrónicos del usuario. |
| `roles` | Array | Lista de roles del usuario. |
| `externalId` | String | Este identificador lo genera un proveedor de IdP. Puedes encontrar el elemento `externalId` de un usuario en el idP, o mediante el punto de conexión [Enumerar las identidades aprovisionadas de SCIM](#list-scim-provisioned-identities-for-an-enterprise) y filtrando por otros atributos conocidos, como el nombre de usuario o la dirección de correo electrónico del usuario en la instancia de {% data variables.product.product_name %}. |
| `id` | String | Identificador que genera el punto de conexión de SCIM de la instancia. |
| `active` | Boolean | Indica si la identidad está activa (`true`) o debe suspenderse (`false`). |

