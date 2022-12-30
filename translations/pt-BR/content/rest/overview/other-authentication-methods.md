---
title: Outros métodos de autenticação
intro: Você pode usar a autenticação básica para testes em um ambiente que não é de produção.
redirect_from:
  - /v3/auth
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Other authentication methods
ms.openlocfilehash: a979c5e688f6f6942a56c9cff55386bb72a92e57
ms.sourcegitcommit: f392aa98511e0889d96af2e4a56e67f8adfb025f
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/18/2022
ms.locfileid: '148172714'
---
{% ifversion fpt or ghes or ghec %} Embora a API forneça vários métodos para autenticação, é altamente recomendável usar o [OAuth](/apps/building-integrations/setting-up-and-registering-oauth-apps/) para aplicativos de produção. Os outros métodos fornecidos são para uso em scripts ou testes (ou seja, casos em que o OAuth completo seria exagerado). Os aplicativos de terceiros que dependem de {% data variables.product.product_name %} para autenticação não devem pedir nem coletar credenciais do {% data variables.product.product_name %}.
Em vez disso, eles devem usar o [fluxo da Web do OAuth](/apps/building-oauth-apps/authorizing-oauth-apps/).

{% endif %}

{% ifversion ghae %}

Para autenticar, recomendamos o uso de tokens [OAuth](/apps/building-integrations/setting-up-and-registering-oauth-apps/), como um {% data variables.product.pat_generic %} por meio do [fluxo da Web do OAuth](/apps/building-oauth-apps/authorizing-oauth-apps/).

{% endif %}

## Autenticação Básica

A API dá suporte à Autenticação Básica, conforme definido em na [RFC2617](http://www.ietf.org/rfc/rfc2617.txt), com algumas pequenas diferenças.
A diferença principal é que o RFC exige que as solicitações não autenticadas sejam respondidas com respostas `401 Unauthorized`. Em muitos lugares, isso divulgaria a existência de dados de usuário. Em vez disso, a API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} responde com `404 Not Found`.
Isso pode causar problemas para bibliotecas HTTP que pressupõem uma resposta `401 Unauthorized`. A solução é criar manualmente o cabeçalho `Authorization`.

### Via {% data variables.product.pat_generic %}

Recomendamos que você use {% ifversion pat-v2%}{% data variables.product.pat_v2 %}s{% else %}{% data variables.product.pat_generic %}s{% endif %} para autenticar na API do GitHub.

```shell
$ curl -u USERNAME:TOKEN {% data variables.product.api_url_pre %}/user
```

Esta abordagem é útil se suas ferramentas são compatíveis apenas com a Autenticação Básica, mas você quer aproveitar os recursos de segurança do {% data variables.product.pat_generic %}.

{% ifversion not ghae %}
### Por meio do nome de usuário e senha

{% ifversion fpt or ghec %} {% note %}

**Observação:** o {% data variables.product.prodname_dotcom %} descontinuou a autenticação de senha para a API a partir de 13 de novembro de 2020 em todas as contas do {% data variables.product.prodname_dotcom_the_website %}, incluindo aquelas em um plano {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %} ou {% data variables.product.prodname_ghe_cloud %}. Agora você deve efetuar a autenticação na {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API com um token da API, como um token de acesso do OAuth, token de acesso à instalação do aplicativo GitHub ou t{% data variables.product.pat_generic %}, dependendo do que você precisa fazer com o token. Para saber mais, veja a "[Solução de problemas](/rest/overview/troubleshooting#basic-authentication-errors)".
 
{% endnote %} {% else %}

Para usar a Autenticação Básica com a API do {% data variables.product.product_name %}, basta enviar o nome de usuário e senha associados à conta.

Por exemplo, se você estiver acessando a API por meio de [cURL][curl], o comando a seguir autenticará você se você substituir `<username>` pelo nome de usuário do {% data variables.product.product_name %}.
(cURL solicitará que você insira a senha.)

```shell
$ curl -u USERNAME {% data variables.product.api_url_pre %}/user
```
Se você tiver a autenticação de dois fatores habilitada, é necessário entender como [usar a autenticação de dois fatores](/rest/overview/other-authentication-methods#working-with-two-factor-authentication).
{% endif %} {% endif %}

{% ifversion fpt or ghec %}
### Autenticar com o SSO do SAML

{% note %}

**Observação:** integrações e aplicativos OAuth que geram tokens em nome de outras pessoas são automaticamente autorizados.

{% endnote %}

{% note %}

**Observação:** {% data reusables.getting-started.bearer-vs-token %}

{% endnote %}

Se você estiver usando a API para acessar uma organização que impõe o [SSO do SAML][saml-sso] para autenticação, será necessário criar um {% data variables.product.pat_generic %} e [autorizar o token][allowlist] para essa organização. Acesse a URL especificada em `X-GitHub-SSO` para autorizar o token para a organização.

```shell
$ curl -v -H "Authorization: Bearer TOKEN" {% data variables.product.api_url_pre %}/repos/octodocs-test/test

> X-GitHub-SSO: required; url=https://github.com/orgs/octodocs-test/sso?authorization_request=AZSCKtL4U8yX1H3sCQIVnVgmjmon5fWxks5YrqhJgah0b2tlbl9pZM4EuMz4
{
  "message": "Resource protected by organization SAML enforcement. You must grant your personal token access to this organization.",
  "documentation_url": "https://docs.github.com"
}
```

Ao solicitar dados que podem vir de várias organizações (por exemplo, [solicitando uma lista de problemas criados pelo usuário][user-issues]), o cabeçalho `X-GitHub-SSO` indicará quais organizações exigem que você autorize seu {% data variables.product.pat_generic %}:

```shell
$ curl -v -H "Authorization: Bearer TOKEN" {% data variables.product.api_url_pre %}/user/issues

> X-GitHub-SSO: partial-results; organizations=21955855,20582480
```

O valor `organizations` é uma lista separada por vírgulas de IDs da organização para organizações que exigem autorização do {% data variables.product.pat_generic %}.
{% endif %}

{% ifversion fpt or ghes or ghec %}
## Trabalhar com autenticação de dois fatores

Se você tem a autenticação de dois fatores habilitada, a [Autenticação Básica](#basic-authentication) para a _maioria_ dos pontos de extremidade na API REST requer que você use um {% data variables.product.pat_generic %}{% ifversion ghes %} ou token OAuth em vez de seu nome de usuário e senha{% endif %}.

Você pode gerar um novo {% data variables.product.pat_generic %} {% ifversion fpt or ghec %}usando [configurações de desenvolvedor do {% data variables.product.product_name %}](https://github.com/settings/tokens/new){% endif %}{% ifversion ghes %} ou com o ponto de extremidade "[Criar uma autorização][/rest/reference/oauth-authorizations#create-a-new-authorization]" na API de Autorizações do OAuth para gerar um novo token OAuth{% endif %}. Para obter mais informações, confira "[Como criar um {% data variables.product.pat_generic %} para a linha de comando](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)". Em seguida, você usaria esses tokens para [autenticar usando o token OAuth][oauth-auth] com a API do {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}. {% ifversion ghes %} A única vez que você precisa se autenticar com seu nome de usuário e senha é quando você cria seu token OAuth ou usa a API de Autorizações do OAuth. {% endif %}

{% endif %}

{% ifversion ghes %}
### Usar a API de Autorização do OAuth com autenticação de dois fatores

Ao fazer chamadas para a API de Autorizações do OAuth, Autenticação básica exigirá que você use uma senha única (OTP) e seu nome de usuário e senha em vez de tokens. Quando você tentar autenticar com a API de Autorizações do OAuth, o servidor responderá com um `401 Unauthorized` e um desses cabeçalhos para informar que você precisa de um código de autenticação de dois fatores:

`X-GitHub-OTP: required; SMS` ou `X-GitHub-OTP: required; app`.  

Este cabeçalho informa como a sua conta recebe seus códigos de autenticação de dois fatores. Dependendo de como você configurou a sua conta, você receberá seus códigos de OTP por SMS ou usará um aplicativo como o Google Authenticator ou o 1Password. Para obter mais informações, confira "[Como configurar a autenticação de dois fatores](/articles/configuring-two-factor-authentication)". Passe o OTP no cabeçalho:

```shell
$ curl --request POST \
  --url https://api.github.com/authorizations \
  --header 'authorization: Basic PASSWORD' \
  --header 'content-type: application/json' \
  --header 'x-github-otp: OTP' \
  --data '{"scopes": ["public_repo"], "note": "test"}'
```
{% endif %}

[curl]: http://curl.haxx.se/
[oauth-auth]: /rest/overview/resources-in-the-rest-api#authentication
[personal-access-tokens]: /articles/creating-a-personal-access-token-for-the-command-line
[saml-sso]: /articles/about-identity-and-access-management-with-saml-single-sign-on
[saml-sso-tokens]: https://github.com/settings/tokens
[allowlist]: /github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
[user-issues]: /rest/reference/issues#list-issues-assigned-to-the-authenticated-user
