---
title: SCIM
intro: Você pode controlar e gerenciar o acesso dos integrantes da sua organização do GitHub usando a API de SCIM.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/scim
---

## Sobre a API do SCIM

### Provisionamento de SCIM para Organizações

A API do SCIM é usada pelos provedores de identidade (IdPs) habilitados pelo SCIM para automatizar o provisionamento de integrantes da organização de {% data variables.product.product_name %}. A {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API tem por base a versão 2.0 do [Padrão do SCIM](http://www.simplecloud.info/). O ponto de extremidade do SCIM do {% data variables.product.product_name %} que um IdP deve usar é: `{% data variables.product.api_url_code %}/scim/v2/organizations/{org}/`.

{% note %}

**Notas:**
  - A API do SCIM está disponível apenas para organizações individuais que usam [{% data variables.product.prodname_ghe_cloud %}](/billing/managing-billing-for-your-github-account/about-billing-for-github-accounts) com [SAML SSO](/rest/overview/other-authentication-methods#authenticating-for-saml-sso) habilitado. Para obter mais informações sobre o SCIM, consulte "[Sobre o SCIM para as organizações](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)".
  - A API SCIM não pode ser usada com uma conta corporativa ou com um {% data variables.product.prodname_emu_org %}.

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
