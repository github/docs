---
title: SCIM
intro: Você pode controlar e gerenciar o acesso de membros da organização do GitHub usando a API SCIM.
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
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883040'
---
## Sobre a API do SCIM

### Provisionamento de SCIM para Organizações

A API do SCIM é usada pelos provedores de identidade (IdPs) habilitados pelo SCIM para automatizar o provisionamento de integrantes da organização de {% data variables.product.product_name %}. A API do {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} é baseada na versão 2.0 do [padrão SCIM](http://www.simplecloud.info/). O ponto de extremidade do SCIM do {% data variables.product.product_name %} que um IdP deve usar é: `{% data variables.product.api_url_code %}/scim/v2/organizations/{org}/`.

{% note %}

**Observações:** 
  - A API do SCIM só está disponível para organizações individuais que usam [{% data variables.product.prodname_ghe_cloud %}](/billing/managing-billing-for-your-github-account/about-billing-for-github-accounts) com o [SSO do SAML](/rest/overview/other-authentication-methods#authenticating-for-saml-sso) habilitado. Para saber mais sobre o SCIM, confira"[Sobre o SCIM para organizações](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)".
  - A API do SCIM não pode ser usada com uma conta corporativa ou com um {% data variables.product.prodname_emu_org %}.

{% endnote %}

### Autenticar chamadas para a API de SCIM

Você deve efetuar a autenticação como dono de uma organização do {% data variables.product.product_name %} para usar sua API do SCIM. A API espera que um token [de portador OAuth 2.0](/developers/apps/authenticating-with-github-apps) seja incluído no cabeçalho `Authorization`. Você também pode usar um token de acesso pessoal, mas primeiro precisa [autorizá-lo para uso com sua organização de SSO do SAML](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on).

### Mapear dados do SAML e SCIM

{% data reusables.scim.nameid-and-username-must-match %}

### Atributos de usuário de SCIM compatíveis

Nome | Tipo | Descrição
-----|------|--------------
`userName`|`string` | O nome de usuário para o usuário.
`name.givenName`|`string` | Primeiro nome do usuário.
`name.familyName`|`string` | Sobrenome do usuário.
`emails` | `array` | Lista de e-mails dos usuários.
`externalId` | `string` | Este identificador é gerado pelo provedor do SAML e é usado como um ID exclusivo pelo provedor do SAML para corresponder ao usuário do GitHub. Você pode encontrar a `externalID` de um usuário no provedor SAML ou usando o ponto de extremidade [Listar identidades provisionadas do SCIM](#list-scim-provisioned-identities) e a filtragem de outros atributos conhecidos, como o nome de usuário do GitHub ou o endereço de email de um usuário.
`id` | `string` | Identificador gerado pelo ponto de extremidade do SCIM do GitHub.
`active` | `boolean` | Usado para indicar se a identidade está ativa (verdadeira) ou se deve ser desprovisionada (falso).

{% note %}

**Observação:** as URLs de ponto de extremidade da API do SCIM diferenciam maiúsculas de minúsculas. Por exemplo, a primeira letra no ponto de extremidade `Users` precisa ser maiúscula:

```shell
GET /scim/v2/organizations/{org}/Users/{scim_user_id}
```

{% endnote %}
