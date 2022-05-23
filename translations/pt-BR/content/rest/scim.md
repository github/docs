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

### Provisionamento de SCIM para Organizações

A API do SCIM é usada pelos provedores de identidade (IdPs) habilitados pelo SCIM para automatizar o provisionamento de integrantes da organização de {% data variables.product.product_name %}. A {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API tem por base a versão 2.0 do [Padrão do SCIM](http://www.simplecloud.info/). O ponto de extremidade do SCIM do {% data variables.product.product_name %} que um IdP deve usar é: `{% data variables.product.api_url_code %}/scim/v2/organizations/{org}/`.

{% note %}

**Notas:**
  - The SCIM API is available only for individual organizations that use [{% data variables.product.prodname_ghe_cloud %}](/billing/managing-billing-for-your-github-account/about-billing-for-github-accounts) with [SAML SSO](/rest/overview/other-authentication-methods#authenticating-for-saml-sso) enabled. For more information about SCIM, see "[About SCIM for organizations](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)."
  - The SCIM API cannot be used with an enterprise account or with an {% data variables.product.prodname_emu_org %}.

{% endnote %}

### Autenticar chamadas para a API de SCIM

Você deve efetuar a autenticação como dono de uma organização do {% data variables.product.product_name %} para usar sua API do SCIM. A API espera que um token [OAuth 2.0](/developers/apps/authenticating-with-github-apps) seja incluído no cabeçalho da `Autorização`. Você também pode usar um token de acesso pessoal, mas primeiro deve [autorizá-lo para uso com sua organização SAML SSO](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on).

### Mapear dados do SAML e SCIM

{% data reusables.scim.nameid-and-username-must-match %}

### Atributos de usuário de SCIM compatíveis

| Nome              | Tipo      | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `userName`        | `string`  | O nome de usuário para o usuário.                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `name.givenName`  | `string`  | O primeiro nome do usuário.                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `name.familyName` | `string`  | O sobrenome do usuário.                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `emails`          | `array`   | Lista de e-mails dos usuários.                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `externalId`      | `string`  | Este identificador é gerado pelo provedor do SAML e é usado como um ID exclusivo pelo provedor do SAML para corresponder ao usuário do GitHub. Você pode encontrar o `externalID` para um usuário no provedor do SAML ou usar a [listar identidades fornecidas pelo ponto de extremidade do SCIM](#list-scim-provisioned-identities) e filtrar outros atributos conhecidos, como, por exemplo, o nome de usuário no GitHub ou endereço de e-mail de usuário. |
| `id`              | `string`  | Identificador gerado pelo ponto de extremidade do SCIM do GitHub.                                                                                                                                                                                                                                                                                                                                                                                            |
| `ativo`           | `boolean` | Usado para indicar se a identidade está ativa (verdadeira) ou se deve ser desprovisionada (falso).                                                                                                                                                                                                                                                                                                                                                           |

{% note %}

**Observação:** As URLs de Endpoint para a API SCIM são sensíveis a maiúsculas e minúsculas. Por exemplo, a primeira letra no endpoint `Usuários` deve ser maiúscula:

```shell
GET /scim/v2/organizations/{org}/Users/{scim_user_id}
```

{% endnote %}
