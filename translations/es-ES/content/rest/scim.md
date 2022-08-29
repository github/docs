---
title: SCIM
intro: You can control and manage your GitHub organization members access using SCIM API.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/scim
---

## About the SCIM API

### Aprovisionamiento de SCIM para las Organizaciones

Los proveedores de identidad (IdP) habilitados para SCIM utilizan la API de SCIM para automatizar el aprovisionamiento de la membrecía de las organizaciones de {% data variables.product.product_name %}. La API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} se basa en la versión 2.0 del [SCIM estándar](http://www.simplecloud.info/). La terminal de SCIM de {% data variables.product.product_name %} que deben utilizar los IdP es: `{% data variables.product.api_url_code %}/scim/v2/organizations/{org}/`.

{% note %}

**Notas:**
  - La API de SCIM se encuentra disponible únicamente para las organizaciones individuales que utilizan [{% data variables.product.prodname_ghe_cloud %}](/billing/managing-billing-for-your-github-account/about-billing-for-github-accounts) y que cuentan con el [SSO de SAML](/rest/overview/other-authentication-methods#authenticating-for-saml-sso) habilitado. Para obtener más información sobre SCIM, consulta la sección "[Acerca de SCIM para las organizaciones](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)".
  - The SCIM API cannot be used with an enterprise account or with an {% data variables.product.prodname_emu_org %}.

{% endnote %}

### Autenticar las llamadas a la API de SCIM

Debes autenticarte como un propietario de una organización de {% data variables.product.product_name %} para utilizar la API de SCIM. La API espera que se incluya un token [Portador de OAuth 2.0](/developers/apps/authenticating-with-github-apps) en el encabezado `Authorization`. También puedes utilizar un token de acceso personal, pero primero debes [autorizarlo para su uso con tu orgnización que cuenta con el SSO de SAML](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on).

### Mapeo de los datos de SAML y de SCIM

{% data reusables.scim.nameid-and-username-must-match %}

### Atributos de Usuario de SCIM compatibles

| Nombre            | Tipo        | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `userName`        | `secuencia` | El nombre de usuario para el usuario.                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `name.givenName`  | `secuencia` | El primer nombre del usuario.                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `name.familyName` | `secuencia` | El apellido del usuario.                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `emails`          | `arreglo`   | Lista de correos electrónicos del usuario.                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `externalId`      | `secuencia` | El proveedor de SAML genera este identificador, el cual utiliza como una ID única para empatarla contra un usuario de GitHub. Puedes encontrar la `externalID` de un usuario ya sea con el proveedor de SAML, o utilizando la terminal de [Listar las identidades aprovisionadas de SCIM](#list-scim-provisioned-identities) y filtrando otros atributos conocidos, tales como el nombre de usuario de GitHub o la dirección de correo electrónico de un usuario. |
| `id`              | `secuencia` | Identificador que genera la terminal de SCIM de GitHub.                                                                                                                                                                                                                                                                                                                                                                                                           |
| `active`          | `boolean`   | Se utiliza para indicar si la identidad está activa (true) o si debe desaprovisionarse (false).                                                                                                                                                                                                                                                                                                                                                                   |

{% note %}

**Nota:** Las URL de terminal para la API de SCIM distinguen entre mayúsculas y minúsculas. Por ejemplo, la primera letra en la terminal `Users` debe ponerse en mayúscula:

```shell
GET /scim/v2/organizations/{org}/Users/{scim_user_id}
```

{% endnote %}
