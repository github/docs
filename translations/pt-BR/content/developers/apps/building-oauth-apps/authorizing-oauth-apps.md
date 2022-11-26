---
title: Autorizando Aplicativos OAuth
intro: '{% data reusables.shortdesc.authorizing_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/about-authorization-options-for-oauth-apps
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/directing-users-to-review-their-access
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/creating-multiple-tokens-for-oauth-apps
  - /v3/oauth
  - /apps/building-oauth-apps/authorization-options-for-oauth-apps
  - /apps/building-oauth-apps/authorizing-oauth-apps
  - /developers/apps/authorizing-oauth-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - OAuth Apps
ms.openlocfilehash: d35b65add4259df72d9ae8b179829a148abd7174
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106706'
---
A implementação do OAuth feita pelo {% data variables.product.product_name %} dá suporte ao [tipo de concessão de código de autorização](https://tools.ietf.org/html/rfc6749#section-4.1) padrão e à [Concessão de Autorização de Dispositivo](https://tools.ietf.org/html/rfc8628) OAuth 2.0 para aplicativos que não têm acesso a um navegador da Web.

Caso deseje ignorar a autorização do seu aplicativo da forma padrão, como no teste do aplicativo, use o [fluxo de aplicativo não Web](#non-web-application-flow).

Para autorizar o seu aplicativo OAuth, considere qual fluxo de autorização melhor se adequa ao seu aplicativo.

- [Fluxo de aplicativo Web](#web-application-flow): usado para autorizar usuários em aplicativos OAuth padrão executados no navegador. (Não há suporte para o [tipo de concessão implícita](https://tools.ietf.org/html/rfc6749#section-4.2)).
- [fluxo de dispositivo](#device-flow): usado para aplicativos sem periféricos, como ferramentas da CLI.

## Fluxo do aplicativo web

{% note %}

**Observação:** se você estiver criando um Aplicativo do GitHub, ainda poderá usar o fluxo de aplicativo Web OAuth, mas a configuração traz algumas diferenças importantes. Confira "[Como identificar e autorizar usuários nos Aplicativos do GitHub](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)" para obter mais informações.

{% endnote %}

O fluxo do aplicativo web para autorizar os usuários para seu aplicativo é:

1. Os usuários são redirecionados para solicitar sua identidade do GitHub
2. Os usuários são redirecionados de volta para o seu site pelo GitHub
3. Seu aplicativo acessa a API com o token de acesso do usuário

### 1. Solicitar a identidade do GitHub de um usuário

    GET {% data variables.product.oauth_host_code %}/login/oauth/authorize

Quando seu Aplicativo do GitHub especifica um parâmetro `login`, ele mostra um prompt para os usuários com uma conta específica que eles podem usar para se conectarem e autorizar seu aplicativo.

#### Parâmetros

Nome | Type | Descrição
-----|------|--------------
`client_id`|`string` | **Obrigatório**. A ID do cliente recebida do GitHub quando você {% ifversion fpt or ghec %}[o registrou](https://github.com/settings/applications/new){% else %}o registrou{% endif %}.
`redirect_uri`|`string` | A URL no seu aplicativo para o qual os usuários serão enviados após a autorização. Veja detalhes abaixo sobre as [URLs de redirecionamento](#redirect-urls).
`login` | `string` | Sugere uma conta específica para iniciar a sessão e autorizar o aplicativo.
`scope`|`string` | Uma lista de [escopos](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/) delimitada por espaço. Caso ela não seja fornecida, o `scope` usa como padrão uma lista vazia para os usuários que não autorizaram nenhum escopo no aplicativo. Para usuários que têm escopos autorizados para o aplicativo, a página de autorização OAuth com a lista de escopos não será exibida para o usuário. Em vez disso, esta etapa do fluxo será concluída automaticamente com o conjunto de escopos que o usuário autorizou para o aplicativo. Por exemplo, se um usuário já executou o fluxo da Web duas vezes e autorizou um token com o escopo `user` e outro token com o escopo `repo`, um terceiro fluxo da Web que não fornece um `scope` recebe um token com o escopo `user` e `repo`.
`state` | `string` | {% data reusables.apps.state_description %}
`allow_signup`|`string` | Independentemente de os usuários serem autenticados, eles receberão uma opção para inscrever-se no GitHub durante o fluxo do OAuth. O padrão é `true`. Use `false` quando uma política proibir inscrições.

### 2. Os usuários são redirecionados para seu site pelo GitHub

Se o usuário aceitar sua solicitação, o {% data variables.product.product_name %} o redirecionará novamente para seu site com um `code` temporário em um parâmetro de código, bem como o estado que você forneceu na etapa anterior em um parâmetro `state`. O código temporário irá expirar após 10 minutos. Se os estados não corresponderem, significa que uma terceira criou a solicitação, e você deverá abortar o processo.

Troque este `code` por um token de acesso:

    POST {% data variables.product.oauth_host_code %}/login/oauth/access_token

#### Parâmetros

Nome | Type | Descrição
-----|------|--------------
`client_id` | `string` | **Necessário.** A ID do cliente que você recebeu do {% data variables.product.product_name %} referente ao seu {% data variables.product.prodname_oauth_app %}.
`client_secret` | `string` | **Necessário.** O segredo do cliente que você recebeu do {% data variables.product.product_name %} referente ao seu {% data variables.product.prodname_oauth_app %}.
`code` | `string` | **Necessário.** O código que você recebeu como resposta à Etapa 1.
`redirect_uri` | `string` | A URL do seu aplicativo para onde os usuários são enviados após a autorização.

#### Resposta

Por padrão, a resposta assume o seguinte formato:

```
access_token=gho_16C7e42F292c6912E7710c838347Ae178B4a&scope=repo%2Cgist&token_type=bearer
```

{% data reusables.apps.oauth-auth-vary-response %}

```json
Accept: application/json
{
  "access_token":"gho_16C7e42F292c6912E7710c838347Ae178B4a",
  "scope":"repo,gist",
  "token_type":"bearer"
}
```

```xml
Accept: application/xml
<OAuth>
  <token_type>bearer</token_type>
  <scope>repo,gist</scope>
  <access_token>gho_16C7e42F292c6912E7710c838347Ae178B4a</access_token>
</OAuth>
```

### 3. Usar o token de acesso para acessar a API

O token de acesso permite que você faça solicitações para a API em nome de um usuário.

    Authorization: Bearer OAUTH-TOKEN
    GET {% data variables.product.api_url_code %}/user

Por exemplo, no cURL você pode definir o cabeçalho de autorização da seguinte forma:

```shell
curl -H "Authorization: Bearer OAUTH-TOKEN" {% data variables.product.api_url_pre %}/user
```

## Fluxo de dispositivo

{% note %}

**Observação:** o fluxo do dispositivo está em versão beta pública e sujeito a alterações.

{% endnote %}

O fluxo de dispositivos permite que você autorize usuários para um aplicativo sem cabeçalho, como uma ferramenta de CLI ou um gerenciador de credenciais do Git.

{% ifversion device-flow-is-opt-in %}

Antes de usar o fluxo do dispositivo para autorizar e identificar usuários, primeiro habilite-o nas configurações do aplicativo. Para obter mais informações sobre como habilitar o fluxo de dispositivo no seu aplicativo, confira "[Como modificar um Aplicativo OAuth](/developers/apps/managing-oauth-apps/modifying-an-oauth-app)" para Aplicativos OAuth e "[Como modificar um Aplicativo do GitHub](/developers/apps/managing-github-apps/modifying-a-github-app)" para Aplicativos do GitHub.

{% endif %}

### Visão geral do fluxo do dispositivo

1. O seu aplicativo solicita o dispositivo e o código de verificação do usuário e obtém a URL de autorização em que o usuário digitará o código de verificação do usuário.
2. O aplicativo solicita que o usuário insira um código de verificação em {% data variables.product.device_authorization_url %}.
3.  O aplicativo pesquisa status de autenticação do usuário. Uma vez que o usuário tenha autorizado o dispositivo, o aplicativo poderá fazer chamadas de API com um novo token de acesso.

### Passo 1: O aplicativo solicita o dispositivo e os códigos de verificação de usuário do GitHub

    POST {% data variables.product.oauth_host_code %}/login/device/code

O seu aplicativo deve solicitar um código de verificação e uma URL de verificação que o aplicativo usará para solicitar que o usuário seja autenticado na próxima etapa. Essa solicitação também retorna um código de verificação de dispositivo que o aplicativo deve usar para receber um token de acesso e verificar o status da autenticação do usuário.

#### Parâmetros de Entrada

Nome | Type | Descrição
-----|------|--------------
`client_id` | `string` | **Necessário.** A ID do cliente que você recebeu do {% data variables.product.product_name %} para seu aplicativo.
`scope` | `string` | O escopo ao qual o seu aplicativo está solicitando acesso.

#### Resposta

Por padrão, a resposta assume o seguinte formato:

```
device_code=3584d83530557fdd1f46af8289938c8ef79f9dc5&expires_in=900&interval=5&user_code=WDJB-MJHT&verification_uri=https%3A%2F%{% data variables.product.product_url %}%2Flogin%2Fdevice
```

{% data reusables.apps.oauth-auth-vary-response %}

```json
Accept: application/json
{
  "device_code": "3584d83530557fdd1f46af8289938c8ef79f9dc5",
  "user_code": "WDJB-MJHT",
  "verification_uri": "{% data variables.product.oauth_host_code %}/login/device",
  "expires_in": 900,
  "interval": 5
}
```

```xml
Accept: application/xml
<OAuth>
  <device_code>3584d83530557fdd1f46af8289938c8ef79f9dc5</device_code>
  <user_code>WDJB-MJHT</user_code>
  <verification_uri>{% data variables.product.oauth_host_code %}/login/device</verification_uri>
  <expires_in>900</expires_in>
  <interval>5</interval>
</OAuth>
```

#### Parâmetros de resposta

Nome | Type | Descrição
-----|------|--------------
`device_code` | `string` | O código de verificação do dispositivo tem 40 caracteres e é usado para verificar o dispositivo.
`user_code` | `string` | O código de verificação do usuário é exibido no dispositivo para que o usuário possa inserir o código no navegador. Este código tem 8 caracteres com um hífen no meio.
`verification_uri` | `string` | A URL de verificação em que os usuários devem inserir o `user_code`: {% data variables.product.device_authorization_url %}.
`expires_in` | `integer`| O número de segundos antes que o `device_code` e o `user_code` expirem. O padrão é 900 segundos ou 15 minutos.
`interval` | `integer` | O número mínimo de segundos que precisa transcorrer para que você possa fazer uma nova solicitação de token de acesso (`POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`) a fim de concluir a autorização do dispositivo. Por exemplo, se o intervalo for 5, você não poderá fazer uma nova solicitação a partir de 5 segundos. Se você fizer mais de uma solicitação em cinco segundos, atingirá o limite de taxa e receberá o erro `slow_down`.

### Passo 2: Solicite ao usuário que insira o código do usuário em um navegador

O seu dispositivo mostrará o código de verificação do usuário e solicitará que o usuário insira o código em {% data variables.product.device_authorization_url %}.

  ![Campo para digitar o código de verificação do usuário exibido no seu dispositivo](/assets/images/github-apps/device_authorization_page_for_user_code.png)

### Passo 3: O aplicativo solicita que o GitHub verifique se o usuário autorizou o dispositivo

    POST {% data variables.product.oauth_host_code %}/login/oauth/access_token

Seu aplicativo fará solicitações de autorização de dispositivo que sondam `POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`, até que os códigos de usuário e de dispositivo expirem ou o usuário autorize o aplicativo com sucesso com um código de usuário válido. O aplicativo precisa usar o `interval` mínimo de sondagem recuperado na etapa 1 para evitar erros de limite de taxa. Para obter mais informações, confira "[Limites de taxa para o fluxo de dispositivo](#rate-limits-for-the-device-flow)".

O usuário deve inserir um código válido em de 15 minutos (ou 900 segundos). Após 15 minutos, você precisará solicitar um novo código de autorização do dispositivo com `POST {% data variables.product.oauth_host_code %}/login/device/code`.

Uma vez que o usuário tenha autorizado, o aplicativo receberá um token de acesso que poderá ser usado para fazer solicitações para a API em nome de um usuário.

#### Parâmetros de entrada

Nome | Type | Descrição
-----|------|--------------
`client_id` | `string` | **Necessário.** A ID do cliente que você recebeu do {% data variables.product.product_name %} referente ao seu {% data variables.product.prodname_oauth_app %}.
`device_code` | `string` | **Necessário.** O código de verificação do dispositivo que você recebeu da solicitação `POST {% data variables.product.oauth_host_code %}/login/device/code`.
`grant_type` | `string` | **Necessário.** O tipo de concessão precisa ser `urn:ietf:params:oauth:grant-type:device_code`.

#### Resposta

Por padrão, a resposta assume o seguinte formato:

```
access_token=gho_16C7e42F292c6912E7710c838347Ae178B4a&token_type=bearer&scope=repo%2Cgist
```

{% data reusables.apps.oauth-auth-vary-response %}

```json
Accept: application/json
{
 "access_token": "gho_16C7e42F292c6912E7710c838347Ae178B4a",
  "token_type": "bearer",
  "scope": "repo,gist"
}
```

```xml
Accept: application/xml
<OAuth>
  <access_token>gho_16C7e42F292c6912E7710c838347Ae178B4a</access_token>
  <token_type>bearer</token_type>
  <scope>gist,repo</scope>
</OAuth>
```

### Limites de taxa para o fluxo do dispositivo

Quando um usuário envia o código de verificação no navegador, há um limite de taxa de 50 envios por hora por aplicativo.

Se você fizer mais de uma solicitação de token de acesso (`POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`) dentro do período mínimo necessário entre solicitações (ou `interval`), atingirá o limite de taxa e receberá a resposta de erro `slow_down`. A resposta de erro `slow_down` adiciona cinco segundos ao último `interval`. Para obter mais informações, confira os [Erros do fluxo de dispositivo](#errors-for-the-device-flow).

### Códigos de erro para o fluxo do dispositivo

| Código do erro | Descrição |
|----|----|
| `authorization_pending`| Este erro ocorre quando a solicitação de autorização está pendente e o usuário ainda não inseriu o código do usuário. É esperado que o aplicativo continue sondando a solicitação `POST {% data variables.product.oauth_host_code %}/login/oauth/access_token` sem exceder o [`interval`](#response-parameters), o que exige um número mínimo de segundos entre cada solicitação. |
| `slow_down` | Quando você recebe o erro `slow_down`, cinco segundos extras são adicionados ao `interval` ou ao período mínimo necessário entre as solicitações por meio de `POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`. Por exemplo, se o intervalo inicial exigir, pelo menos, cinco segundos entre as solicitações e você receber a resposta de erro `slow_down`, você precisará aguardar, no mínimo, dez segundos antes de fazer uma nova solicitação para um token de acesso OAuth. A resposta de erro inclui o novo `interval` que você precisa usar.
| `expired_token` | Se o código do dispositivo expirar, você verá o erro `token_expired`. Você deve fazer uma nova solicitação para um código de dispositivo.
| `unsupported_grant_type` | O tipo de concessão precisa ser `urn:ietf:params:oauth:grant-type:device_code` e precisa ser incluído como um parâmetro de entrada quando a solicitação de token OAuth `POST {% data variables.product.oauth_host_code %}/login/oauth/access_token` é sondada.
| `incorrect_client_credentials` | Para o fluxo do dispositivo, você deve passar o ID de cliente do aplicativo, que pode ser encontrado na página de configurações do aplicativo. O `client_secret` não é necessário para o fluxo de dispositivo.
| `incorrect_device_code` | O device_code fornecido não é válido.
| `access_denied` | Quando um usuário clicar em Cancelar durante o processo de autorização, você receberá o erro `access_denied` e o usuário não poderá usar o código de verificação novamente.{% ifversion device-flow-is-opt-in %}
| `device_flow_disabled` | O fluxo do dispositivo não foi habilitado nas configurações do aplicativo. Para obter mais informações, confira "[Fluxo de dispositivo](#device-flow)".{% endif %}

Para obter mais informações, confira a "[Concessão de Autorização de Dispositivo OAuth 2.0](https://tools.ietf.org/html/rfc8628#section-3.5)".

## Fluxo do aplicativo que não são da web

A autenticação que não é da web está disponível para situações limitadas como testes. Se precisar, você poderá usar a [Autenticação Básica](/rest/overview/other-authentication-methods#basic-authentication) para criar um {% data variables.product.pat_generic %} usando a [página de configurações do {% data variables.product.pat_generic %}](/articles/creating-an-access-token-for-command-line-use). Essa técnica permite ao usuário revogar o acesso a qualquer momento.

{% ifversion fpt or ghes or ghec %} {% note %}

**Observação:** ao usar o fluxo de aplicativo não Web para criar um token OAuth2, verifique se você entendeu como [usar a autenticação de dois fatores](/rest/overview/other-authentication-methods#working-with-two-factor-authentication) se você ou os usuários têm a autenticação de dois fatores habilitada.

{% endnote %} {% endif %}

## URLs de redirecionamento

O `redirect_uri` é opcional. Se ignorado, o GitHub redirecionará os usuários para a URL de retorno de chamada definida nas configurações do Aplicativo OAuth. Se fornecidos, o host e a porta da URL de redirecionamento (excluindo os subdomínios) precisarão corresponder exatamente à URL de retorno de chamada. O caminho da URL de redirecionamento precisa referenciar um subdiretório da URL de retorno de chamada.

    CALLBACK: http://example.com/path

    GOOD: http://example.com/path
    GOOD: http://example.com/path/subdir/other
    GOOD: http://oauth.example.com/path
    GOOD: http://oauth.example.com/path/subdir/other
    BAD:  http://example.com/bar
    BAD:  http://example.com/
    BAD:  http://example.com:8080/path
    BAD:  http://oauth.example.com:8080/path
    BAD:  http://example.org

### URLs de redirecionamento de loopback

O parâmetro opcional `redirect_uri` também pode ser usado para URLs de loopback. Se o aplicativo especificar uma URL de loopback e uma porta, após a autorização, os usuários do aplicativo serão redirecionados para a URL e a porta fornecidas. O `redirect_uri` não precisa corresponder à porta especificada na URL de retorno de chamada do aplicativo.

Para a URL de retorno de chamada `http://127.0.0.1/path`, use este `redirect_uri`:

```
http://127.0.0.1:1234/path
```

Observe que o RFC do OAuth [recomenda não usar `localhost`](https://datatracker.ietf.org/doc/html/rfc8252#section-7.3), mas usar o literal `127.0.0.1` de loopback ou o IPv6 `::1`.

## Criar vários tokens para aplicativos OAuth

Você pode criar vários tokens para uma combinação de usuário/aplicativo/escopo para criar tokens para casos de uso específicos.

Isso é útil se o seu aplicativo OAuth for compatível com um fluxo de trabalho que usa o GitHub para iniciar sessão e exigir apenas informações básicas do usuário. Outro fluxo de trabalho pode exigir acesso aos repositórios privados de um usuário. Ao usar vários tokens, o seu aplicativo OAuth pode realizar o fluxo web para cada caso, solicitando apenas os escopos necessários. Se um usuário usar apenas seu aplicativo para iniciar a sessão, ele nunca será obrigado a conceder acesso do aplicativo OAuth aos seus repositórios privados.

{% data reusables.apps.oauth-token-limit %}

{% data reusables.apps.deletes_ssh_keys %}

## Direcionar os usuários para revisar seus acessos

Você pode vincular informações sobre a autorização de um aplicativo OAuth para que os usuários possam revisar e revogar as autorizações do seu aplicativo.

Para criar esse link, você precisará da `client_id` dos Aplicativos OAuth que recebeu do GitHub quando registrou o aplicativo.

```
{% data variables.product.oauth_host_code %}/settings/connections/applications/:client_id
```

{% tip %}

**Dica:** para saber mais sobre os recursos que o Aplicativo OAuth pode acessar para um usuário, confira "[Como descobrir recursos para um usuário](/rest/guides/discovering-resources-for-a-user)".

{% endtip %}

## Solução de problemas

* "[Solução de problemas de erros de solicitação de autorização](/apps/managing-oauth-apps/troubleshooting-authorization-request-errors)"
* "[Solução de problemas de erros de solicitação de token de acesso do Aplicativo OAuth](/apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors)"
* "[Erros de fluxo do dispositivo](#error-codes-for-the-device-flow)"
* "[Validade e revogação de token](/github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation)"

## Leitura adicional

- "[Sobre a autenticação no {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github)"
