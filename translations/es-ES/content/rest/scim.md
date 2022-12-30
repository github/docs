---
title: SCIM
intro: Se pueden controlar y administrar el acceso de los miembros de la organización de GitHub mediante la API de SCIM.
versions:
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/scim
ms.openlocfilehash: 314ed9433ffeb1ef3f189795727a3b654c529c96
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883047'
---
## Acerca de la API de SCIM

### Aprovisionamiento de SCIM para las Organizaciones

Los proveedores de identidad (IdP) habilitados para SCIM utilizan la API de SCIM para automatizar el aprovisionamiento de la membrecía de las organizaciones de {% data variables.product.product_name %}. La API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} se basa en la versión 2.0 del [estándar SCIM](http://www.simplecloud.info/). El punto de conexión SCIM de {% data variables.product.product_name %} que debe usar un IdP es: `{% data variables.product.api_url_code %}/scim/v2/organizations/{org}/`.

{% note %}

**Notas:** 
  - La API de SCIM solo está disponible para organizaciones individuales que usen la [{% data variables.product.prodname_ghe_cloud %}](/billing/managing-billing-for-your-github-account/about-billing-for-github-accounts) con el [inicio de sesión único de SAML](/rest/overview/other-authentication-methods#authenticating-for-saml-sso) habilitado. Para obtener más información sobre SCIM, consulta "[Acerca de SCIM para las organizaciones](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)".
  - La API de SCIM no se puede usar con una cuenta de empresa con una {% data variables.product.prodname_emu_org %}.

{% endnote %}

### Autenticar las llamadas a la API de SCIM

Debes autenticarte como un propietario de una organización de {% data variables.product.product_name %} para utilizar la API de SCIM. La API espera que se incluya un token de [portador de OAuth 2.0](/developers/apps/authenticating-with-github-apps) en el encabezado `Authorization`. También puede usar un token de acceso personal, pero primero debe [autorizarlo para su uso con la organización de SSO de SAML](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on).

### Mapeo de los datos de SAML y de SCIM

{% data reusables.scim.nameid-and-username-must-match %}

### Atributos de Usuario de SCIM compatibles

Nombre | Tipo | Descripción
-----|------|--------------
`userName`|`string` | El nombre de usuario para el usuario.
`name.givenName`|`string` | El nombre del usuario.
`name.familyName`|`string` | Los apellidos del usuario.
`emails` | `array` | Lista de correos electrónicos del usuario.
`externalId` | `string` | El proveedor de SAML genera este identificador, el cual utiliza como una ID única para empatarla contra un usuario de GitHub. Puede encontrar el valor `externalID` de un usuario mediante el proveedor de SAML o bien con el punto de conexión [Enumerar las identidades aprovisionadas de SCIM](#list-scim-provisioned-identities) y filtrar por otros atributos conocidos, como el nombre de usuario o la dirección de correo electrónico de GitHub de un usuario.
`id` | `string` | Identificador que genera la terminal de SCIM de GitHub.
`active` | `boolean` | Se utiliza para indicar si la identidad está activa (true) o si debe desaprovisionarse (false).

{% note %}

**Nota:** Las direcciones URL de punto de conexión de la API SCIM distinguen mayúsculas y minúsculas. Por ejemplo, la primera letra del punto de conexión `Users` debe ser mayúscula:

```shell
GET /scim/v2/organizations/{org}/Users/{scim_user_id}
```

{% endnote %}
