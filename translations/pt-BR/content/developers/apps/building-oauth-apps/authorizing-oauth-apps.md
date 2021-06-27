---
title: Autorizar aplicativos OAuth
intro: '{% data reusables.shortdesc.authorizing_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/about-authorization-options-for-oauth-apps/
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/directing-users-to-review-their-access/
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/creating-multiple-tokens-for-oauth-apps/
  - /v3/oauth/
  - /apps/building-oauth-apps/authorization-options-for-oauth-apps/
  - /apps/building-oauth-apps/authorizing-oauth-apps
  - /developers/apps/authorizing-oauth-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - OAuth Apps
---

A implementação do OAuth de {% data variables.product.product_name %}oferece suporte ao [tipo de concessão do código padrão](https://tools.ietf.org/html/rfc6749#section-4.1) {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %} e o OAuth 2.0 [Concessão de Autorização do Dispositivo](https://tools.ietf.org/html/rfc8628) para aplicativos que não têm acesso a um navegador web{% endif %}.

Se você desejar ignorar a autorização do seu aplicativo da forma-padrão, como no teste do seu aplicativo, você poderá usar o fluxo do aplicativo [que não é web](#non-web-application-flow).

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}

Para autorizar o seu aplicativo OAuth, considere qual fluxo de autorização melhor se adequa ao seu aplicativo.

- [Fluxo de aplicativos web](#web-application-flow): Usado para autorizar usuários para aplicativos OAuth padrão executados no navegador. (O [tipo implícito de concessão](https://tools.ietf.org/html/rfc6749#section-4.2) não é compatível)
- [fluxo de dispositivo](#device-flow): Usado para aplicativos sem cabeçalho, como ferramentas de CLI.

{% else %}

Para os aplicativos-padrão que são executados no navegador, use o [fluxo do aplicativo web](#web-application-flow) para obter um código de autorização e trocá-lo por um token. (O [tipo implícito de concessão](https://tools.ietf.org/html/rfc6749#section-4.2) não é compatível)

{% endif %}

### Fluxo do aplicativo web

{% note %}

**Observação:** Se você está criando um aplicativo GitHub, você ainda pode usar o fluxo do aplicativo web OAuth, mas a configuração tem algumas diferenças importantes. Consulte "[Identificando e autorizando usuários para aplicativos GitHub](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)" para obter mais informações.

{% endnote %}

O fluxo do aplicativo web para autorizar os usuários para seu aplicativo é:

1. Os usuários são redirecionados para solicitar sua identidade do GitHub
2. Os usuários são redirecionados de volta para o seu site pelo GitHub
3. Seu aplicativo acessa a API com o token de acesso do usuário

#### 1. Solicitar identidade do GitHub de um usuário

    GET {% data variables.product.oauth_host_code %}/login/oauth/authorize

Quando seu aplicativo GitHub especifica um parâmetro do `login`, ele solicita aos usuários com uma conta específica que podem usar para iniciar sessão e autorizar seu aplicativo.

##### Parâmetros

| Nome           | Tipo     | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `client_id`    | `string` | **Obrigatório**. O ID do cliente que você recebeu do GitHub quando {% if currentVersion == "free-pro-team@latest" %}[registrado](https://github.com/settings/applications/new){% else %}registrado{% endif %}.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `redirect_uri` | `string` | A URL no seu aplicativo para o qual os usuários serão enviados após a autorização. Veja os detalhes abaixo sobre [redirecionamento das urls](#redirect-urls).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `login`        | `string` | Sugere uma conta específica para iniciar a sessão e autorizar o aplicativo.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `escopo`       | `string` | Uma lista de [escopos](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/) delimitada por espaço. Caso não seja fornecido, o `escopo`-padrão será uma lista vazia para usuários que não autorizaram nenhum escopo para o aplicativo. Para usuários que têm escopos autorizados para o aplicativo, a página de autorização OAuth com a lista de escopos não será exibida para o usuário. Em vez disso, esta etapa do fluxo será concluída automaticamente com o conjunto de escopos que o usuário autorizou para o aplicativo. Por exemplo, se um usuário já executou o fluxo web duas vezes e autorizou um token com escopo do `usuário` e outro token com o escopo do `repositório`, um terceiro fluxo web que não fornece um escopo `` receberá um token com os escopos do `usuário` e do `repositório`. |
| `estado`       | `string` | {% data reusables.apps.state_description %}
| `allow_signup` | `string` | Independentemente de os usuários serem autenticados, eles receberão uma opção para inscrever-se no GitHub durante o fluxo do OAuth. O padrão é `verdadeiro`. Use `falso` quando uma política proibir inscrições.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

#### 2. Os usuários são redirecionados de volta para o seu site pelo GitHub

Se o usuário aceitar a sua solicitação, o {% data variables.product.product_name %} redireciona de volta para seu site com `código` temporário em um parâmetro de código, bem como o estado que você forneceu na etapa anterior em um `parâmetro de estado`. O código temporário irá expirar após 10 minutos. Se os estados não corresponderem, significa que uma terceira criou a solicitação, e você deverá abortar o processo.

Troque este `código` por um token de acesso:

    POST {% data variables.product.oauth_host_code %}/login/oauth/access_token

##### Parâmetros

| Nome            | Tipo     | Descrição                                                                                                                                                    |
| --------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `client_id`     | `string` | **Obrigatório.** O ID do cliente que você recebeu do {% data variables.product.product_name %} para o seu {% data variables.product.prodname_oauth_app %}. |
| `client_secret` | `string` | **Obrigatório.** O segredo do cliente que recebeu do {% data variables.product.product_name %} para o seu {% data variables.product.prodname_oauth_app %}. |
| `código`        | `string` | **Obrigatório.** O código que você recebeu como resposta ao Passo 1.                                                                                         |
| `redirect_uri`  | `string` | A URL do seu aplicativo para onde os usuários são enviados após a autorização.                                                                               |

##### Resposta

Por padrão, a resposta assume o seguinte formato:

    access_token={% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}gho_16C7e42F292c6912E7710c838347Ae178B4a{% else %}e72e16c7e42f292c6912e7710c838347ae178b4a{% endif %}&token_type=bearer

Você também pode receber o conteúdo em diferentes formatos, dependendo do cabeçalho Aceitar:

    Accept: application/json
    {"access_token":"{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}gho_16C7e42F292c6912E7710c838347Ae178B4a{% else %}e72e16c7e42f292c6912e7710c838347ae178b4a{% endif %}", "scope":"repo,gist", "token_type":"bearer"}
    
    Accept: application/xml
    <OAuth>
      <token_type>bearer</token_type>
      <scope>repo,gist</scope>
      <access_token>{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}gho_16C7e42F292c6912E7710c838347Ae178B4a{% else %}e72e16c7e42f292c6912e7710c838347ae178b4a{% endif %}</access_token>
    </OAuth>

#### 3. Use o token de acesso para acessar a API

O token de acesso permite que você faça solicitações para a API em nome de um usuário.

    Autorização: token OUTH-TOKEN
    GET {% data variables.product.api_url_code %}/user

Por exemplo, no cURL você pode definir o cabeçalho de autorização da seguinte forma:

```shell
curl -H "Authorization: token OAUTH-TOKEN" {% data variables.product.api_url_pre %}/user
```

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
### Fluxo de dispositivo

{% if currentVersion ver_lt "enterprise-server@3.1" %}
{% note %}

**Nota:** O fluxo do dispositivo está na versão beta pública e sujeito a alterações.

{% endnote %}
{% endif %}

O fluxo de dispositivos permite que você autorize usuários para um aplicativo sem cabeçalho, como uma ferramenta de CLI ou um gerenciador de credenciais do Git.

#### Visão geral do fluxo do dispositivo

1. O seu aplicativo solicita o dispositivo e o código de verificação do usuário e obtém a URL de autorização em que o usuário digitará o código de verificação do usuário.
2. O aplicativo solicita que o usuário insira um código de verificação em {% data variables.product.device_authorization_url %}.
3.  O aplicativo pesquisa status de autenticação do usuário. Uma vez que o usuário tenha autorizado o dispositivo, o aplicativo poderá fazer chamadas de API com um novo token de acesso.

#### Passo 1: O aplicativo solicita o dispositivo e os códigos de verificação de usuário do GitHub

    POST {% data variables.product.oauth_host_code %}/login/device/code

O seu aplicativo deve solicitar um código de verificação e uma URL de verificação que o aplicativo usará para solicitar que o usuário seja autenticado na próxima etapa. Essa solicitação também retorna um código de verificação de dispositivo que o aplicativo deve usar para receber um token de acesso e verificar o status da autenticação do usuário.

##### Parâmetros de entrada

| Nome        | Tipo     | Descrição                                                                                                             |
| ----------- | -------- | --------------------------------------------------------------------------------------------------------------------- |
| `client_id` | `string` | **Obrigatório.** O ID do cliente que você recebeu do {% data variables.product.product_name %} para o seu aplicativo. |
| `escopo`    | `string` | O escopo ao qual o seu aplicativo está solicitando acesso.                                                            |

##### Resposta

{% if currentVersion == "free-pro-team@latest" %}
  ```JSON
  {
    "device_code": "3584d83530557fdd1f46af8289938c8ef79f9dc5",
    "user_code": "WDJB-MJHT",
    "verification_uri": "https://github.com/login/device",
    "expires_in": 900,
    "interval": 5
  }
  ```
{% else %}
  ```JSON
  {
    "device_code": "3584d83530557fdd1f46af8289938c8ef79f9dc5",
    "user_code": "WDJB-MJHT",
    "verification_uri": "http(s)://[hostname]/login/device",
    "expires_in": 900,
    "interval": 5
  }
  ```
{% endif %}

##### Parâmetros de resposta

| Nome               | Tipo      | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `device_code`      | `string`  | O código de verificação do dispositivo tem 40 caracteres e é usado para verificar o dispositivo.                                                                                                                                                                                                                                                                                                                                                                               |
| `user_code`        | `string`  | O código de verificação do usuário é exibido no dispositivo para que o usuário possa inserir o código no navegador. Este código tem 8 caracteres com um hífen no meio.                                                                                                                                                                                                                                                                                                         |
| `verification_uri` | `string`  | A URL de verificação em que os usuários devem digitar o código do usuário ``: {% data variables.product.device_authorization_url %}.                                                                                                                                                                                                                                                                                                                                         |
| `expires_in`       | `inteiro` | O número de segundos antes dos códigos `device_code` e `user_code` expirarem. O padrão é 900 segundos ou 15 minutos.                                                                                                                                                                                                                                                                                                                                                           |
| `interval`         | `inteiro` | O número mínimo de segundos que decorridos antes de você poder fazer uma nova solicitação de token de acesso (`POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`) para concluir a autorização do dispositivo. Por exemplo, se o intervalo for 5, você não poderá fazer uma nova solicitação a partir de 5 segundos. Se você fizer mais de uma solicitação em 5 segundos, você atingirá o limite de taxa e receberá uma mensagem de erro `slow_down`. |

#### Passo 2: Solicite ao usuário que insira o código do usuário em um navegador

O seu dispositivo mostrará o código de verificação do usuário e solicitará que o usuário insira o código em {% data variables.product.device_authorization_url %}.

  ![Campo para digitar o código de verificação do usuário exibido no seu dispositivo](/assets/images/github-apps/device_authorization_page_for_user_code.png)

#### Passo 3: O aplicativo solicita que o GitHub verifique se o usuário autorizou o dispositivo

    POST {% data variables.product.oauth_host_code %}/login/oauth/access_token

O seu aplicativo fará solicitações de autorização do dispositivo que pesquisem `POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`, até que o dispositivo e códigos de usuário expirem ou o usuário autorizem com sucesso o aplicativo com um código de usuário válido. O aplicativo deve usar o `intervalo` mínimo de sondagem recuperado na etapa 1 para evitar erros de limite de taxa. Para obter mais informações, consulte "[Limites de taxa para o fluxo do dispositivo](#rate-limits-for-the-device-flow)".

O usuário deve inserir um código válido em de 15 minutos (ou 900 segundos). Após 15 minutos, você deverá solicitar um novo código de autorização do dispositivo com `POST {% data variables.product.oauth_host_code %}/login/dispositivo/código`.

Uma vez que o usuário tenha autorizado, o aplicativo receberá um token de acesso que poderá ser usado para fazer solicitações para a API em nome de um usuário.

##### Parâmetros de entrada

| Nome          | Tipo     | Descrição                                                                                                                                                             |
| ------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `client_id`   | `string` | **Obrigatório.** O ID do cliente que você recebeu do {% data variables.product.product_name %} para o seu {% data variables.product.prodname_oauth_app %}.          |
| `device_code` | `string` | **Obrigatório.** O código de verificação do dispositivo que você recebeu da solicitação `POST {% data variables.product.oauth_host_code %}/login/dispositivo/código`. |
| `grant_type`  | `string` | **Obrigatório.** O tipo de concessão deve ser `urn:ietf:params:oauth:grant-type:device_code`.                                                                         |

##### Resposta

```json
{
 "access_token": "{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}gho_16C7e42F292c6912E7710c838347Ae178B4a{% else %}e72e16c7e42f292c6912e7710c838347ae178b4a{% endif %}",
  "token_type": "bearer",
  "scope": "user"
}
```

#### Limites de taxa para o fluxo do dispositivo

Quando um usuário envia o código de verificação no navegador, há um limite de taxa de 50 envios por hora por aplicativo.

Se você fizer mais de uma solicitação de token de acesso (`POST {% data variables.product.oauth_host_code %}/login/oauth/oaccess_token`) no período mínimo necessário entre solicitações (ou `intervalo`), você atingirá o limite de taxa e receberá uma resposta de erro `slow_down`. A resposta de erro `slow_down`adiciona 5 segundos ao último `intervalo`. Para obter mais informações, consulte [Erros para o fluxo do dispositivo](#errors-for-the-device-flow).

#### Códigos de erro para o fluxo do dispositivo

| Código do erro                 | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `authorization_pending`        | Este erro ocorre quando a solicitação de autorização está pendente e o usuário ainda não inseriu o código do usuário. Espera-se que o aplicativo continue fazendo a sondagem da solicitação `POST {% data variables.product.oauth_host_code %}/login/oauth/oaccess_token` sem exceder o [`intervalo`](#response-parameters), que exige um número mínimo de segundos entre cada solicitação.                                                                                                                                                                                |
| `slow_down`                    | Ao receber o erro `slow_down`, são adicionados 5 segundos extras ao intervalo mínimo `` ou período de tempo necessário entre as suas solicitações usando `POST {% data variables.product.oauth_host_code %}/login/oauth/oaccess_token`. Por exemplo, se o intervalo inicial for necessário pelo menos 5 segundos entre as solicitações e você receber uma resposta de erro de `slow_down`, você deverá aguardar pelo menos 10 segundos antes de fazer uma nova solicitação para um token de acesso OAuth. A resposta de erro inclui o novo `intervalo` que você deve usar. |
| `expired_token`                | Se o código do dispositivo expirou, você verá o erro `token_expired`. Você deve fazer uma nova solicitação para um código de dispositivo.                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `unsupported_grant_type`       | O tipo de concessão deve ser `urn:ietf:params:oauth:grant-type:device_code` e incluído como um parâmetro de entrada quando você faz a sondagem da solicitação do token do OAuth `POST {% data variables.product.oauth_host_code %}/login/oauth/oaccess_token`.                                                                                                                                                                                                                                                                                                             |
| `incorrect_client_credentials` | Para o fluxo do dispositivo, você deve passar o ID de cliente do aplicativo, que pode ser encontrado na página de configurações do aplicativo. O `client_secret` não é necessário para o fluxo do dispositivo.                                                                                                                                                                                                                                                                                                                                                             |
| `incorrect_device_code`        | O device_code fornecido não é válido.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `access_denied`                | Quando um usuário clica em cancelar durante o processo de autorização, você receberá uma mensagem de erro de `access_denied` e o usuário não poderá usar o código de verificação novamente.                                                                                                                                                                                                                                                                                                                                                                                |

Para obter mais informações, consulte "[Concessão de Autorização do Dispositivo OAuth 2.0](https://tools.ietf.org/html/rfc8628#section-3.5)".

{% endif %}

### Fluxo do aplicativo que não são da web

A autenticação que não é da web está disponível para situações limitadas como testes. Se necessário, você pode usar a [autenticação básica](/rest/overview/other-authentication-methods#basic-authentication) para criar um token de acesso usando a sua [página pessoal de configurações de tokens de acesso](/articles/creating-an-access-token-for-command-line-use). Essa técnica permite ao usuário revogar o acesso a qualquer momento.

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
{% note %}

**Observação:** Quando usar o fluxo do aplicativo que não é web para criar um token do OAuth2, certifique-se de entender como [trabalhar com a autenticação de dois fatores](/rest/overview/other-authentication-methods#working-with-two-factor-authentication) se você ou seus usuários tiverem a autenticação de dois fatores habilitada.

{% endnote %}
{% endif %}

### URLs de redirecionamento

O parâmetro `redirect_uri` é opcional. Se ignorado, o GitHub redirecionará os usuários para a URL de retorno de chamada definida nas configurações do aplicativo OAuth. Se fornecido, o host e porta do URL de redirecionamento deve exatamente corresponder à URL de retorno de chamada. O caminho da URL de redirecionamento deve fazer referência uma subpasta da URL de retorno de chamada.

    RETORNO DE CHAMADA: http://example.com/path
    
    GOOD: http://example.com/path
    GOOD: http://example.com/path/subdir/other
    BAD:  http://example.com/bar
    BAD:  http://example.com/
    BAD:  http://example.com:8080/path
    BAD:  http://oauth.example.com:8080/path
    BAD:  http://example.org

#### URLs de redirecionamento do Localhost

O parâmetro opcional `redirect_uri` também pode ser usado para URLs do localhhost. Se o aplicativo especificar uma URL do localhost e uma porta, após a autorização, os usuários do aplicativo serão redirecionados para a URL e porta fornecidas. O `redirect_uri` não precisa corresponder à porta especificada na URL de retorno de chamada do aplicativo.

Para a URL de retorno de chamada `http://localhost/path`, você poderá usar este `redirect_uri`:

```
http://localhost:1234/path
```

### Criar vários tokens para aplicativos OAuth

Você pode criar vários tokens para uma combinação de usuário/aplicativo/escopo para criar tokens para casos de uso específicos.

Isso é útil se o seu aplicativo OAuth for compatível com um fluxo de trabalho que usa o GitHub para iniciar sessão e exigir apenas informações básicas do usuário. Outro fluxo de trabalho pode exigir acesso aos repositórios privados de um usuário. Ao usar vários tokens, o seu aplicativo OAuth pode realizar o fluxo web para cada caso, solicitando apenas os escopos necessários. Se um usuário usar apenas seu aplicativo para iniciar a sessão, ele nunca será obrigado a conceder acesso do aplicativo OAuth aos seus repositórios privados.

{% data reusables.apps.oauth-token-limit %}

{% data reusables.apps.deletes_ssh_keys %}

### Direcionar os usuários para revisar seus acessos

Você pode vincular informações sobre a autorização de um aplicativo OAuth para que os usuários possam revisar e revogar as autorizações do seu aplicativo.

Para criar esse vínculo, você precisará do `client_id` dos aplicativos OAuth, que você recebeu do GitHub quando fez o cadastro no aplicativo.

```
{% data variables.product.oauth_host_code %}/settings/connections/applications/:client_id
```

{% tip %}

**Dica:** Para saber mais sobre os recursos que seu aplicativo OAuth pode acessar para um usuário, consulte "[Descobrindo recursos para um usuário](/rest/guides/discovering-resources-for-a-user). "

{% endtip %}

### Solução de Problemas

* "[Solucionando erros de solicitação de autorização](/apps/managing-oauth-apps/troubleshooting-authorization-request-errors)"
* "[Solucionando erros na requisição de token de acesso do aplicativo OAuth](/apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors)"
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
* "[Erros do fluxo do dispositivo](#errors-for-the-device-flow)"
{% endif %}

### Leia mais

- "[Sobre a autenticação em {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github)"
