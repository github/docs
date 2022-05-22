---
title: SCIM
redirect_from:
  - /v3/scim
versions:
  free-pro-team: '*'
topics:
  - API
---

### Aprovisionamiento de SCIM para las Organizaciones

Los proveedores de identidad (IdP) habilitados para SCIM utilizan la API de SCIM para automatizar el aprovisionamiento de la membrecía de las organizaciones de {% data variables.product.product_name %}. La API de {% data variables.product.product_name %} se basa en la versión 2.0 del [estándar de SCIM](http://www.simplecloud.info/). La terminal de SCIM de {% data variables.product.product_name %} que deben utilizar los IdP es: `{% data variables.product.api_url_code %}/scim/v2/organizations/{org}/`.

{% note %}

**Nota:** La API de SCIM está disponible solo para las organizaciones en [{% data variables.product.prodname_ghe_cloud %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-accounts) que tienen habilitado el [SSO de SAML](/v3/auth/#authenticating-for-saml-sso). Para obtener más información acerca de SCIM, consulta "[Acerca de SCIM](/github/setting-up-and-managing-organizations-and-teams/about-scim)".

{% endnote %}

### Autenticar las llamadas a la API de SCIM

Debes autenticarte como un propietario de una organización de {% data variables.product.product_name %} para utilizar la API de SCIM. La API espera que se incluya un token [Portador de OAuth 2.0](/developers/apps/authenticating-with-github-apps) en el encabezado `Authorization`. También puedes utilizar un token de acceso personal, pero primero debes [autorizarlo para su uso con tu orgnización que cuenta con el SSO de SAML](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on).

### Mapeo de los datos de SAML y de SCIM

El IdP de SAML y el cliente de SCIM deben utilizar valores coincidentes de `NameID` y `userName` para cada usuario. Esto le permite al usuario que se autentica mediante SAML el poder enlazarse con su identidad aprovisionada de SCIM.

### Atributos de Usuario de SCIM compatibles

| Nombre                 | Tipo        | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `userName`             | `secuencia` | El nombre de usuario para el usuario.                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `name.givenName`       | `secuencia` | El primer nombre del usuario.                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `name.lastName`        | `secuencia` | El apellido del usuario.                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `correos electrónicos` | `array`     | Lista de correos electrónicos del usuario.                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `externalId`           | `secuencia` | El proveedor de SAML genera este identificador, el cual utiliza como una ID única para empatarla contra un usuario de GitHub. Puedes encontrar la `externalID` de un usuario ya sea con el proveedor de SAML, o utilizando la terminal de [Listar las identidades aprovisionadas de SCIM](#list-scim-provisioned-identities) y filtrando otros atributos conocidos, tales como el nombre de usuario de GitHub o la dirección de correo electrónico de un usuario. |
| `id`                   | `secuencia` | Identificador que genera la terminal de SCIM de GitHub.                                                                                                                                                                                                                                                                                                                                                                                                           |
| `active`               | `boolean`   | Se utiliza para indicar si la identidad está activa (true) o si debe desaprovisionarse (false).                                                                                                                                                                                                                                                                                                                                                                   |

{% note %}

**Nota:** Las URL de terminal para la API de SCIM distinguen entre mayúsculas y minúsculas. Por ejemplo, la primera letra en la terminal `Users` debe ponerse en mayúscula:

```shell
GET /scim/v2/organizations/{org}/Users/{scim_user_id}
```

{% endnote %}

{% include rest_operations_at_current_path %}
