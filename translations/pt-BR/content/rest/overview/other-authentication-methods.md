---
title: Outros métodos de autenticação
intro: Você pode usar a autenticação básica para testes em um ambiente que não é de produção.
redirect_from:
  - /v3/auth
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - api
---


{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
Embora a API forneça vários métodos para autenticação, é altamente recomendável usar [OAuth](/apps/building-integrations/setting-up-and-registering-oauth-apps/) para aplicativos de produção. Os outros métodos fornecidos destinam-se a ser usados para scripts ou testes (ou seja, casos em que o OAuth completo seria exagerado). Aplicativos de terceiros que dependem de
{% data variables.product.product_name %} para autenticação não devem pedir ou coletar credenciais de {% data variables.product.product_name %}.
Em vez disso, eles devem usar o [Fluxo web do OAuth](/apps/building-oauth-apps/authorizing-oauth-apps/).

{% endif %}

{% if currentVersion == "github-ae@latest" %}

Para efetuar a autenticação, recomendamos usar tokens do [OAuth](/apps/building-integrations/setting-up-and-registering-oauth-apps/) como um token de acesso pessoal por meio do [fluxo web do OAuth](/apps/building-oauth-apps/authorizing-oauth-apps/).

{% endif %}

### Autenticação básica

A API é compatível com a Autenticação Básica conforme definido em [RFC2617](http://www.ietf.org/rfc/rfc2617.txt) com algumas ligeiras diferenças. A diferença principal é que o RFC exige que as solicitações não autenticadas sejam respondidas com respostas `401 Unauthorized`. Em muitos lugares, isso divulgaria a existência de dados de usuário. Em vez disso, a API de {% data variables.product.product_name %} responde com `404 Not Found`. Isso pode causar problemas para bibliotecas de HTTP que assumem uma resposta `401 Unauthorized`. A solução é criar manualmente o cabeçalho de `Autorização `.

#### Por meio do OAuth e de tokens de acesso pessoal

Recomendamos que você use tokens do OAuth para efetuar a autenticação na API do GitHub. Os tokens OAuth incluem [tokens de acesso pessoal][personal-access-tokens] e habilitem o usuário a revogar o acesso a qualquer momento.

```shell
$ curl -u <em>username</em>:<em>token</em> {% data variables.product.api_url_pre %}/user
```

Esta abordagem é útil se suas ferramentas são compatíveis apenas com a Autenticação Básica, mas você quer aproveitar os recursos de segurança do token de acesso do OAuth.

#### Por meio do nome de usuário e senha

{% if currentVersion == "free-pro-team@latest" %}

{% note %}

**Observação:** {% data variables.product.prodname_dotcom %} suspendeu a autenticação da senha para a API a partir de 13 de novembro 2020 para todas as contas de {% data variables.product.prodname_dotcom_the_website %}, incluindo as que estão em um plano de {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %} ou {% data variables.product.prodname_ghe_cloud %}. Você deve efetuar a autenticação para a API de {% data variables.product.prodname_dotcom %} com um token da API, como um token de acesso do OAuth, token de acesso de instalação do aplicativo GitHub ou token de acesso pessoal, dependendo do que você precisa fazer com o token. Para obter mais informações, consulte "[Solução de problemas](/rest/overview/troubleshooting#basic-authentication-errors)".

{% endnote %}

{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
Para usar Autenticação Básica com a
API de {% data variables.product.product_name %}, basta enviar o nome de usuário e
a senha associada à conta.

Por exemplo, se você estiver acessando a API via [cURL][curl], o comando a seguir faria a sua autenticação se substituísse `<username>` pelo seu nome de usuário de {% data variables.product.product_name %}. (cURL solicitará que você insira a senha.)

```shell
$ curl -u <em>username</em> {% data variables.product.api_url_pre %}/user
```
Se você tem a autenticação de dois fatores ativada, certifique-se de entender como [funciona com a autenticação de dois fatores](/rest/overview/other-authentication-methods#working-with-two-factor-authentication).

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
#### Autenticar com o SSO do SAML

{% note %}

**Observação:** Integrações e aplicativos do OAuth que geram tokens em nome de terceiros são autorizados automaticamente.

{% endnote %}

Se você estiver usando a API para acessar uma organização que força o [SSO do SAML][saml-sso] para autenticação, você deverá criar um token de acesso pessoal (PAT) e [autorizar o token][allowlist] para essa organização. Visite a URL especificada no `X-GitHub-SSO` para autorizar o token para a organização.

```shell
$ curl -v -H "Authorization: token <em>TOKEN</em>" {% data variables.product.api_url_pre %}/repos/octodocs-test/test

> X-GitHub-SSO: required; url=https://github.com/orgs/octodocs-test/sso?authorization_request=AZSCKtL4U8yX1H3sCQIVnVgmjmon5fWxks5YrqhJgah0b2tlbl9pZM4EuMz4
{
  "message": "Resource protected by organization SAML enforcement. You must grant your personal token access to this organization.",
  "documentation_url": "https://docs.github.com"
}
```

Ao solicitar dados que poderiam vir de várias organizações (por exemplo, [solicitando uma lista de problemas criados pelo usuário][user-issues]), o cabeçalho `X-GitHub-SSO` indica quais organizações exigem que você autorize seu token de acesso pessoal:

```shell
$ curl -v -H "Authorization: token <em>TOKEN</em>" {% data variables.product.api_url_pre %}/user/issues

> X-GitHub-SSO: partial-results; organizations=21955855,20582480
```

O valor das `organizações` é uma lista de ID de organizações separada por vírgula para organizações para as quais exige-se a autorização do seu token de acesso pessoal.
{% endif %}

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
### Trabalhar com autenticação de dois fatores

Quando você tem a autenticação de dois fatores habilitada, a [Autenticação básica](#basic-authentication) para _a maioria dos_ pntos de extremidade na API REST exige que você use um token de acesso pessoal{% if enterpriseServerVersions contains currentVersion %} ou token do OAuth em vez do seu nome de usuário e senha{% endif %}.

Você pode gerar um novo token de acesso pessoal {% if currentVersion == "free-pro-team@latest" %}usando [ as configurações de desenvolvedor de {% data variables.product.product_name %}](https://github.com/settings/tokens/new){% endif %}{% if enterpriseServerVersions contains currentVersion %} ou com o ponto de extremidade "\[Criar uma nova autorização\]\[/rest/reference/oauth-authorizations#create-a-new-authorization\]" na API de Autorizações OAuth para gerar um novo token OAuth{% endif %}. Para obter mais informações, consulte "[Criar um token de acesso pessoal para a linha de comando](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)". Em seguida, você usaria esses tokens para [efetuar a autenticação usando o token do OAuth][oauth-auth] com a API de {% data variables.product.prodname_dotcom %}. {% if enterpriseServerVersions contains currentVersion %} A única vez que você precisa efetuar a autenticação com seu nome de usuário e senha é quando você cria seu token do OAuth ou usa a API de Autorização do OAuth.{% endif %}

{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
#### Usar a API de Autorização do OAuth com autenticação de dois fatores

Ao fazer chamadas para a API de Autorizações do OAuth, Autenticação básica exigirá que você use uma senha única (OTP) e seu nome de usuário e senha em vez de tokens. Ao tentar efetuar a autenticação com a API de Autorizações do OAuth, o servidor irá responder com `401 Unauthorized` e um desses cabeçalhos para informar que você precisa de um código de autenticação de dois fatores:

`X-GitHub-OTP: required; SMS` or `X-GitHub-OTP: required; app`.

Este cabeçalho informa como a sua conta recebe seus códigos de autenticação de dois fatores. Dependendo de como você configurou a sua conta, você receberá seus códigos de OTP por SMS ou usará um aplicativo como o Google Authenticator ou o 1Password. Para obter mais informações, consulte "[Configurar a autenticação de dois fatores](/articles/configuring-two-factor-authentication)". Passe o OTP no cabeçalho:

```shell
$ curl --request POST \
  --url https://api.github.com/authorizations \
  --header 'authorization: Basic <em>PASSWORD</em>' \
  --header 'content-type: application/json' \
  --header 'x-github-otp: <em>OTP</em>' \
  --data '{"scopes": ["public_repo"], "note": "test"}'
```
{% endif %}

[curl]: http://curl.haxx.se/
[oauth-auth]: /rest#authentication
[personal-access-tokens]: /articles/creating-a-personal-access-token-for-the-command-line
[saml-sso]: /articles/about-identity-and-access-management-with-saml-single-sign-on
[allowlist]: /github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
[user-issues]: /rest/reference/issues#list-issues-assigned-to-the-authenticated-user
